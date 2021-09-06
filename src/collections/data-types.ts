import parse from '../syntax/parser';
import typer, { DataType, hasType, IDataType, ResolvedType, Type, TypeType } from '../syntax/typer';
import { compatSyntax } from '../utils/compat';
import { getPropertySyntax, getSyntax } from './syntaxes';

export interface IDataTypeDictionary {
  [key: string]: ResolvedType[];
}

export async function getDataTypesOf<TReturn>(dataTypeOf: (dataTypes: IDataTypeDictionary) => Promise<TReturn>) {
  const dictionary: IDataTypeDictionary = {};
  const result = await dataTypeOf(dictionary);
  return [dictionary, result] as const;
}

export async function resolveDataTypes(
  dictionary: IDataTypeDictionary,
  types: TypeType[],
  minTypesInDataTypes: number,
  resolver: (
    dataTypes: IDataTypeDictionary,
    dataType: IDataType,
    min: number,
  ) => Promise<ResolvedType[]> = simpleDataTypeResolver,
): Promise<ResolvedType[]> {
  const resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = await resolver(dictionary, type, minTypesInDataTypes);

        if (resolvedDataType.length >= minTypesInDataTypes) {
          // Dissolve data type if it's too small
          const dataType = createDataType(dictionary, type.name, resolvedDataType);
          if (!hasType(resolvedDataTypes, dataType)) {
            resolvedDataTypes.push(dataType);
          }
        } else {
          for (const resolvedType of resolvedDataType) {
            if (!hasType(resolvedDataTypes, resolvedType)) {
              resolvedDataTypes.push(resolvedType);
            }
          }
        }
        break;
      }
      case Type.PropertyReference: {
        const resolvedProperty = await resolver(dictionary, type, minTypesInDataTypes);

        // Dissolve property references completely
        for (const resolvedType of resolvedProperty) {
          if (!hasType(resolvedDataTypes, resolvedType)) {
            resolvedDataTypes.push(resolvedType);
          }
        }
        break;
      }
      default:
        if (!hasType(resolvedDataTypes, type)) {
          resolvedDataTypes.push(type);
        }
    }
  }

  return resolvedDataTypes;
}

async function simpleDataTypeResolver(
  dictionary: IDataTypeDictionary,
  dataType: IDataType,
  minTypesInDataTypes: number,
): Promise<ResolvedType[]> {
  const syntax = await getSyntax(dataType.name);
  return syntax
    ? resolveDataTypes(dictionary, typer(parse(syntax)), minTypesInDataTypes, simpleDataTypeResolver)
    : [{ type: Type.String }];
}

export function createPropertyDataTypeResolver(data: MDN.CompatData | undefined) {
  const resolver: (dictionary: IDataTypeDictionary, dataType: IDataType, min: number) => Promise<ResolvedType[]> =
    async (dictionary, dataType, minTypesInDataTypes) => {
      const syntax =
        dataType.type === Type.DataType ? await getSyntax(dataType.name) : await getPropertySyntax(dataType.name);
      return syntax
        ? resolveDataTypes(
            dictionary,
            data ? typer(compatSyntax(data, parse(syntax))) : typer(parse(syntax)),
            minTypesInDataTypes,
            resolver,
          )
        : [{ type: Type.String }];
    };

  return resolver;
}

function createDataType(dictionary: IDataTypeDictionary, name: string, types: ResolvedType[], index = 0): DataType {
  const realName = name + (index > 0 ? index + 1 : '');

  // Rename in case of conflict
  if (realName in dictionary) {
    const existingDataType = dictionary[realName];

    for (const type of types) {
      if (!hasType(existingDataType, type)) {
        return createDataType(dictionary, name, types, index + 1);
      }
    }
    for (const type of existingDataType) {
      if (!hasType(types, type)) {
        return createDataType(dictionary, name, types, index + 1);
      }
    }
  }

  dictionary[realName] = types;

  return {
    type: Type.DataType,
    name: realName,
  };
}
