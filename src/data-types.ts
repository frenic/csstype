import * as syntaxes from 'mdn-data/css/syntaxes.json';
import parse from './parser';
import typing, { addType, Type, TypeType } from './typer';

const MIN_TYPES = 3;

const dataTypes: { [key: string]: TypeType[] } = {};

export default dataTypes;

export function resolveDataTypes(
  types: TypeType[],
  resolver: (name: string) => TypeType[] = dataTypeResolver,
): TypeType[] {
  let resolvedDataTypes: TypeType[] = [];

  for (const type of types) {
    if (type.type === Type.DataType) {
      const resolvedDataType = resolver(type.name);

      if (resolvedDataType.length >= MIN_TYPES) {
        resolvedDataTypes = addType(resolvedDataTypes, addDataType(type.name, resolvedDataType));
      } else {
        for (const resolvedType of resolvedDataType) {
          resolvedDataTypes = addType(resolvedDataTypes, resolvedType);
        }
      }
    } else {
      resolvedDataTypes = addType(resolvedDataTypes, type);
    }
  }

  return resolvedDataTypes;
}

export function dataTypeResolver(name: string): TypeType[] {
  return name in syntaxes
    ? resolveDataTypes(typing(parse(syntaxes[name].syntax)), dataTypeResolver)
    : [{ type: Type.String }];
}

function addDataType(name: string, types: TypeType[]): TypeType {
  dataTypes[name] = types;
  return {
    type: Type.DataType,
    name,
  };
}
