import { compatSyntax } from './compat';
import { getPropertySyntax, getSyntax } from './data';
import parse from './parser';
import typing, { addType, DataType, hasType, IDataType, ResolvedType, Type, TypeType } from './typer';

const dataTypesMap: { [key: string]: ResolvedType[] } = {};

export function getCurrentDataTypes() {
  return dataTypesMap;
}

export async function resolveDataTypes(
  types: TypeType[],
  resolver: (dataType: IDataType) => Promise<ResolvedType[]> = simpleDataTypeResolver,
  min = 3,
): Promise<ResolvedType[]> {
  let resolvedDataTypes: ResolvedType[] = [];

  for (const type of types) {
    switch (type.type) {
      case Type.DataType: {
        const resolvedDataType = await resolver(type);

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
        const resolvedProperty = await resolver(type);

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

async function simpleDataTypeResolver(dataType: IDataType): Promise<ResolvedType[]> {
  const syntax = await getSyntax(dataType.name);
  return syntax ? resolveDataTypes(typing(parse(syntax)), simpleDataTypeResolver) : [{ type: Type.String }];
}

export function createPropertyDataTypeResolver(data: MDN.CompatData | undefined, min?: number) {
  const resolver: (dataType: IDataType) => Promise<ResolvedType[]> = async dataType => {
    const syntax =
      dataType.type === Type.DataType ? await getSyntax(dataType.name) : await getPropertySyntax(dataType.name);
    return syntax
      ? resolveDataTypes(data ? typing(compatSyntax(data, parse(syntax))) : typing(parse(syntax)), resolver)
      : [{ type: Type.String }];
  };

  return resolver;
}

function addDataType(name: string, types: ResolvedType[], index = 0): DataType {
  const realName = name + (index > 0 ? index + 1 : '');

  // Rename in case of conflict
  if (realName in dataTypesMap) {
    const existingDataType = dataTypesMap[realName];

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

  dataTypesMap[realName] = types;

  return {
    type: Type.DataType,
    name: realName,
  };
}
