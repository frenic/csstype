import { EOL } from 'os';
import { DeclarableType, declarations, interfaces } from './declarator';
import { IGenerics, Type } from './typer';

export default () => ({
  flow: flow(),
  typescript: typescript(),
});

function flow() {
  let interfacesOutput = '';
  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = item.extends.map(extend => extend.name + generics(extend.generics, true)).join(', ');
    const isInterface = !!extendList;
    interfacesOutput += isInterface ? 'declare export interface ' : 'declare export type ';
    interfacesOutput += item.name + generics(item.generics);
    interfacesOutput += extendList ? ` extends ${extendList}` : '= ';
    interfacesOutput += '{' + EOL;

    for (const property of item.properties) {
      const propertyGenerics = generics(property.generics, true);
      interfacesOutput += `${JSON.stringify(property.name)}?: ${
        item.fallback
          ? `${property.alias.name + propertyGenerics} | ${property.alias.name + propertyGenerics}[];`
          : property.alias.name + propertyGenerics + (isInterface ? ';' : ',')
      }`;

      interfacesOutput += EOL;
    }

    interfacesOutput += '}';
  }

  let declarationsOutput = '';
  for (const declaration of declarations) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    declarationsOutput += 'declare ';

    if (declaration.export) {
      declarationsOutput += 'export ';
    }

    declarationsOutput += `type ${declaration.name + generics(declaration.generics, true)} = ${unions(
      declaration.types,
    ) + EOL}`;
  }

  return `declare module "csstype" {${EOL + interfacesOutput + EOL + EOL + declarationsOutput + EOL}}`;
}

function typescript() {
  let interfacesOutput = '';
  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = item.extends.map(extend => extend.name + generics(extend.generics, true)).join(', ');
    interfacesOutput += 'export interface ' + item.name + generics(item.generics);

    if (extendList) {
      interfacesOutput += ` extends ${extendList}`;
    }

    interfacesOutput += '{' + EOL;

    for (const property of item.properties) {
      const propertyGenerics = generics(property.generics, true);
      interfacesOutput += `${JSON.stringify(property.name)}?: ${
        item.fallback
          ? `${property.alias.name + propertyGenerics} | ${property.alias.name + propertyGenerics}[];`
          : `${property.alias.name + propertyGenerics};`
      }`;

      interfacesOutput += EOL;
    }

    interfacesOutput += '}';
  }

  let declarationsOutput = '';
  for (const declaration of declarations) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    if (declaration.export) {
      declarationsOutput += 'export ';
    }

    declarationsOutput += `type ${declaration.name + generics(declaration.generics, true)} = ${unions(
      declaration.types,
    ) + EOL}`;
  }

  return interfacesOutput + EOL + EOL + declarationsOutput;
}

function unions(types: DeclarableType[]) {
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
