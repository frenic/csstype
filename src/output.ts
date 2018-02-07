import { EOL } from 'os';
import { CompleteTypeType, declarations, IGenerics, interfaces } from './declarator';
import { Type } from './typer';

const NAMESPACE = 'CSS';

export default function create() {
  let output = `export as namespace ${NAMESPACE};`;

  output += EOL + EOL;

  for (const item of interfaces) {
    const isExtend = item.extends.map(extend => extend.name + generics(extend.generics, true)).join(', ');
    output += `export interface ${item.name + generics(item.generics)}${isExtend ? ` extends ${isExtend}` : ''} {`;

    for (const property of item.properties) {
      const propertyGenerics = generics(property.generics, true);
      output += `${property.camel}?: ${
        item.fallback
          ? `${property.alias.name + propertyGenerics} | ${property.alias.name + propertyGenerics}[];`
          : `${property.alias.name + propertyGenerics};`
      }`;
    }

    output += '}';

    output += EOL + EOL;
  }

  for (const declaration of declarations) {
    if (declaration.export) {
      output += 'export ';
    }

    output += `type ${declaration.name + generics(declaration.generics, true)} = ${unions(declaration.types)}`;
    output += EOL + EOL;
  }

  output += EOL + EOL;

  return output;
}

function sorter(a: CompleteTypeType, b: CompleteTypeType) {
  if (a.type === Type.StringLiteral && b.type === Type.StringLiteral) {
    return a.literal < b.literal ? -1 : a.literal > b.literal ? 1 : 0;
  }
  if (a.type === Type.NumericLiteral && b.type === Type.NumericLiteral) {
    return a.literal - b.literal;
  }
  return a.type - b.type;
}

function unions(types: CompleteTypeType[]) {
  return types
    .sort(sorter)
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
          return type.name + generics(type.generics, true);
        case Type.Length:
          return 'TLength';
      }
    })
    .join(' | ');
}

function generics(items: IGenerics[] | undefined, ignoreDefault = false) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, defaults }) => (defaults && !ignoreDefault ? `${name} = ${defaults}` : name))
    .join(', ')}>`;
}
