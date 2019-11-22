import { DeclarableType, declarator, IGenerics, INamespace, SimpleType } from '../declarator';
import { Type } from '../syntax/typer';

export const EOL = '\n';

export const generatingDeclarations = declarator(3);
export function createStringifyType(): (type: SimpleType) => string;

export function createStringifyType(
  currentNamespace: INamespace | undefined,
  noNamespaceSupport?: boolean,
): (type: DeclarableType) => string;

export function createStringifyType(currentNamespace?: INamespace | undefined, noNamespaceSupport = false) {
  const stringifyType = ((type: DeclarableType) => {
    switch (type.type) {
      case Type.String:
        return 'string';
      case Type.Number:
        return 'number';
      case Type.StringLiteral:
        return JSON.stringify(type.literal);
      case Type.NumericLiteral:
        return type.literal;
      case Type.Array:
        return `Array<${stringifyType(type.of)}>`;
      case Type.Alias: {
        let namespace = '';

        if (type.namespace) {
          if (noNamespaceSupport) {
            namespace = type.namespace.name;
          } else if (type.namespace !== currentNamespace) {
            namespace = `${type.namespace.name}.`;
          } else {
            // The type is in its own namespace so keep it empty
          }
        }

        return namespace + type.name + stringifyGenerics(type.generics);
      }
      case Type.Length:
        return 'TLength';
    }
  }) as (type: DeclarableType) => string;

  return stringifyType;
}

export function stringifyGenerics(items: IGenerics[] | undefined): string;
export function stringifyGenerics(
  items: IGenerics[] | undefined,
  applyDefault: boolean,
  stringifyTypes: (types: SimpleType[]) => string,
): string;

export function stringifyGenerics(
  items: IGenerics[] | undefined,
  applyDefault = false,
  stringifyTypes?: (types: SimpleType[]) => string,
) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, extend, defaults }) => {
      let generic = name;

      if (extend) {
        generic += ` extends ${extend}`;
      }

      if (applyDefault && defaults) {
        if (typeof stringifyTypes !== 'function') {
          throw new Error('Type stringifier needed');
        }

        generic += ` = ${stringifyTypes(defaults)}`;
      }

      return generic;
    })
    .join(', ')}>`;
}
