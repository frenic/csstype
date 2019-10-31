import { DeclarableType, declarator, IGenerics, INamespace } from './declarator';
import { Type } from './typer';

export const EOL = '\n';

export const generatingDeclarations = declarator(3);

export function createStringifyType(currentNamespace: INamespace | undefined, noNamespaceSupport = false) {
  return (type: DeclarableType) => {
    switch (type.type) {
      case Type.String:
        return 'string';
      case Type.Number:
        return 'number';
      case Type.StringLiteral:
        return JSON.stringify(type.literal);
      case Type.NumericLiteral:
        return type.literal;
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

        return namespace + type.name + stringifyGenerics(type.generics, true);
      }
      case Type.Length:
        return 'TLength';
    }
  };
}

export function stringifyGenerics(items: IGenerics[] | undefined, ignoreDefault = false) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, extend, defaults }) => {
      let generic = name;

      if (extend) {
        generic += ` extends ${extend}`;
      }

      if (defaults && !ignoreDefault) {
        generic += ` = ${defaults}`;
      }

      return generic;
    })
    .join(', ')}>`;
}
