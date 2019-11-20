import parse from '../syntax/parser';
import typing, { addType, DataType, hasType, IDataType, ResolvedType, Type, TypeType } from '../syntax/typer';
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
  let resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = await resolver(dictionary, type, minTypesInDataTypes);

        if (resolvedDataType.length >= minTypesInDataTypes) {
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
        const resolvedProperty = await resolver(dictionary, type, minTypesInDataTypes);

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

async function simpleDataTypeResolver(
  dictionary: IDataTypeDictionary,
  dataType: IDataType,
  minTypesInDataTypes: number,
): Promise<ResolvedType[]> {
  const syntax = await getSyntax(dataType.name);
  return syntax
    ? resolveDataTypes(dictionary, typing(parse(syntax)), minTypesInDataTypes, simpleDataTypeResolver)
    : [{ type: Type.String }];
}

export function createPropertyDataTypeResolver(data: MDN.CompatData | undefined) {
  const resolver: (
    dictionary: IDataTypeDictionary,
    dataType: IDataType,
    min: number,
  ) => Promise<ResolvedType[]> = async (dictionary, dataType, minTypesInDataTypes) => {
    const syntax =
      dataType.type === Type.DataType ? await getSyntax(dataType.name) : await getPropertySyntax(dataType.name);
    return syntax
      ? resolveDataTypes(
          dictionary,
          data ? typing(compatSyntax(data, parse(syntax))) : typing(parse(syntax)),
          minTypesInDataTypes,
          resolver,
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
