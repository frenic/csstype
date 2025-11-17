import { DeclarableType, IAlias, IGenerics, INamespace, lengthGeneric, SimpleType, timeGeneric } from '../declarator';
import { Type } from '../syntax/typer';

export const EOL = '\n';

export function createStringifyType(): (type: SimpleType) => string;

export function createStringifyType(
  createTypeAliasName: (type: IAlias) => string,
  currentNamespace?: INamespace,
): (type: DeclarableType) => string;

export function createStringifyType(
  createTypeAliasName: (type: IAlias, currentNamespace: INamespace | undefined) => string = type => type.name,
  currentNamespace?: INamespace,
) {
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
        return createTypeAliasName(type, currentNamespace) + stringifyGenerics(type.generics);
      }
      case Type.Length:
        return lengthGeneric.name;
      case Type.Time:
        return timeGeneric.name;
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
