import { compatSyntax } from './compat';
import { getPropertySyntax, getSyntax } from './data';
import parse from './parser';
import typing, { addType, DataType, hasType, IDataType, ResolvedType, Type, TypeType } from './typer';

const dataTypes: { [key: string]: ResolvedType[] } = {};

export default dataTypes;

export function resolveDataTypes(
  types: TypeType[],
  resolver: (dataType: IDataType) => ResolvedType[] = simpleDataTypeResolver,
  min = 3,
): ResolvedType[] {
  let resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = resolver(type);

        if (resolvedDataType.length >= min) {
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
        const resolvedProperty = resolver(type);

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

function simpleDataTypeResolver(dataType: IDataType): ResolvedType[] {
  const syntax = getSyntax(dataType.name);
  return syntax ? resolveDataTypes(typing(parse(syntax)), simpleDataTypeResolver) : [{ type: Type.String }];
}

export function createPropertyDataTypeResolver(data: MDN.CompatData | null, min?: number) {
  const resolver: (dataType: IDataType) => ResolvedType[] = dataType => {
    const syntax = dataType.type === Type.DataType ? getSyntax(dataType.name) : getPropertySyntax(dataType.name);
    return syntax
      ? resolveDataTypes(data ? typing(compatSyntax(data, parse(syntax))) : typing(parse(syntax)), resolver)
      : [{ type: Type.String }];
  };

  return resolver;
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
