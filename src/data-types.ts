import * as syntaxes from 'mdn-data/css/syntaxes.json';
import parse from './parser';
import typing, { addType, DataType, hasType, ResolvedType, Type, TypeType } from './typer';

const MIN_TYPES = 3;

const dataTypes: { [key: string]: ResolvedType[] } = {};

export default dataTypes;

export function resolveDataTypes(
  types: TypeType[],
  resolver: (name: string) => ResolvedType[] = dataTypeResolver,
): ResolvedType[] {
  let resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = resolver(type.name);

        if (resolvedDataType.length >= MIN_TYPES) {
          // Dissolve data type if it's too small
          resolvedDataTypes = addType(resolvedDataTypes, addDataType(type.name, resolvedDataType));
        } else {
          for (const resolvedType of resolvedDataType) {
            resolvedDataTypes = addType(resolvedDataTypes, resolvedType);
          }
        }
        break;
      }
      case Type.PropertyReference: {
        const resolvedProperty = resolver(type.name);

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

function dataTypeResolver(name: string): ResolvedType[] {
  return name in syntaxes
    ? resolveDataTypes(typing(parse(syntaxes[name].syntax)), dataTypeResolver)
    : [{ type: Type.String }];
}

function addDataType(name: string, types: ResolvedType[], index = 0): DataType {
  const realName = name + (index > 0 ? index + 1 : '');

  // Rename in case of conflict
  if (realName in dataTypes) {
    const existingDataType = dataTypes[realName];

    for (const type of types) {
      if (!hasType(existingDataType, type)) {
        return addDataType(name, types, index + 1);
      }
    }
    for (const type of existingDataType) {
      if (!hasType(types, type)) {
        return addDataType(name, types, index + 1);
      }
    }
  }

  dataTypes[realName] = types;

  return {
    type: Type.DataType,
    name: realName,
  };
}
