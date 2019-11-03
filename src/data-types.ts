import { compatSyntax } from './compat';
import { getPropertySyntax, getSyntax } from './data';
import parse from './parser';
import typing, { addType, DataType, hasType, IDataType, ResolvedType, Type, TypeType } from './typer';

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
  resolver: (
    dataTypes: IDataTypeDictionary,
    dataType: IDataType,
    min: number,
  ) => Promise<ResolvedType[]> = simpleDataTypeResolver,
  min = 3,
): Promise<ResolvedType[]> {
  let resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = await resolver(dictionary, type, min);

        if (resolvedDataType.length >= min) {
          // Dissolve data type if it's too small
          resolvedDataTypes = addType(resolvedDataTypes, addDataType(dictionary, type.name, resolvedDataType));
        } else {
          for (const resolvedType of resolvedDataType) {
            resolvedDataTypes = addType(resolvedDataTypes, resolvedType);
          }
        }
        break;
      }
      case Type.PropertyReference: {
        const resolvedProperty = await resolver(dictionary, type, min);

        // Dissolve property references completely
        for (const resolvedType of resolvedProperty) {
          resolvedDataTypes = addType(resolvedDataTypes, resolvedType);
        }
        break;
      }
      default:
        resolvedDataTypes = addType(resolvedDataTypes, type);
    }
  }

  return resolvedDataTypes;
}

async function simpleDataTypeResolver(dictionary: IDataTypeDictionary, dataType: IDataType): Promise<ResolvedType[]> {
  const syntax = await getSyntax(dataType.name);
  return syntax ? resolveDataTypes(dictionary, typing(parse(syntax)), simpleDataTypeResolver) : [{ type: Type.String }];
}

export function createPropertyDataTypeResolver(data: MDN.CompatData | undefined) {
  const resolver: (
    dictionary: IDataTypeDictionary,
    dataType: IDataType,
    min: number,
  ) => Promise<ResolvedType[]> = async (dictionary, dataType, min) => {
    const syntax =
      dataType.type === Type.DataType ? await getSyntax(dataType.name) : await getPropertySyntax(dataType.name);
    return syntax
      ? resolveDataTypes(
          dictionary,
          data ? typing(compatSyntax(data, parse(syntax))) : typing(parse(syntax)),
          resolver,
          min,
        )
      : [{ type: Type.String }];
  };

  return resolver;
}

function addDataType(dictionary: IDataTypeDictionary, name: string, types: ResolvedType[], index = 0): DataType {
  const realName = name + (index > 0 ? index + 1 : '');

  // Rename in case of conflict
  if (realName in dictionary) {
    const existingDataType = dictionary[realName];

    for (const type of types) {
      if (!hasType(existingDataType, type)) {
        return addDataType(dictionary, name, types, index + 1);
      }
    }
    for (const type of existingDataType) {
      if (!hasType(types, type)) {
        return addDataType(dictionary, name, types, index + 1);
      }
    }
  }

  dictionary[realName] = types;

  return {
    type: Type.DataType,
    name: realName,
  };
}
