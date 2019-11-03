import { DeclarableType, declarator, IGenerics } from './declarator';
import { Type } from './typer';

export const EOL = '\n';

export const generatingDeclarations = declarator(3);

export function stringifyTypes(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    types = [types];
  }
  return types
    .map(type => {
      switch (type.type) {
        case Type.String:
          return 'string';
        case Type.Number:
          return 'number';
        case Type.StringLiteral:
          return JSON.stringify(type.literal);
        case Type.NumericLiteral:
          return type.literal;
        case Type.Alias:
          return type.name + stringifyGenerics(type.generics, true);
        case Type.Length:
          return 'TLength';
      }
    })
    .join(' | ');
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
