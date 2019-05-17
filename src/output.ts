import { DeclarableType, declarations, IGenerics, interfaces, isAliasProperty } from './declarator';
import { Type } from './typer';

const EOL = '\n';

export default () => ({
  flow: flow(),
  typescript: typescript(),
});

function combineFlowExactTypes(input: string[]): string {
  if (input.length === 0) {
    return '';
  } else if (input.length === 1) {
    return input[0];
  } else {
    return '{|' + input.map(type => `...${type}`).join(`,${EOL}`) + '|}';
  }
}

function getNameForFallbackable(name: string): string {
  return 'Fallbackable' + name[0].toUpperCase() + name.slice(1);
}

function flow() {
  let interfacesOutput = '';

  const fallbackSet: Set<string> = new Set();

  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = combineFlowExactTypes(
      item.extends.map(extend => extend.name + stringifyGenerics(extend.generics, true)),
    );

    interfacesOutput += 'export type ';
    interfacesOutput += item.name + stringifyGenerics(item.generics);
    interfacesOutput += ' = ' + extendList;

    if (item.properties.length > 0) {
      if (extendList) {
        // TODO: remove this branch since it's not getting hit
        interfacesOutput += ' & ';
      }

      interfacesOutput += '{|' + EOL;

      for (const property of item.properties) {
        if (isAliasProperty(property)) {
          const generics = stringifyGenerics(property.generics, true);
          const key = JSON.stringify(property.name);
          let type = property.alias.name + generics;
          if (item.fallback) {
            fallbackSet.add(type);
            type = getNameForFallbackable(type);
          }

          interfacesOutput += `${key}?: ${type},`;
        } else {
          const value = stringifyTypes(property.type);
          const key = JSON.stringify(property.name);
          let type = value;
          if (item.fallback) {
            fallbackSet.add(type);
            type = getNameForFallbackable(type);
          }

          interfacesOutput += `${key}?: ${type},`;
        }

        interfacesOutput += EOL;
      }

      interfacesOutput += '|}';
    }
  }

  let declarationsOutput = '';
  for (const declaration of declarations.values()) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    declarationsOutput += ' ';

    if (declaration.export) {
      declarationsOutput += 'export ';
    }

    declarationsOutput += `type ${declaration.name + stringifyGenerics(declaration.generics, true)} = ${stringifyTypes(
      declaration.types,
    ) + EOL}`;
  }

  const fallbacksOutput = [...fallbackSet]
    .map(name => {
      return `type ${getNameForFallbackable(name)} = ${name} | Array<${name}>;`;
    })
    .join(EOL);

  return `// @flow strict ${EOL +
    EOL +
    '// See https://github.com/frenic/csstype/pull/67 for why all "fallbackable" types (e.g. `string | Array<string>`) are lifted here' +
    EOL +
    fallbacksOutput +
    EOL +
    EOL +
    interfacesOutput +
    EOL +
    EOL +
    declarationsOutput +
    EOL}`;
}

function typescript() {
  let interfacesOutput = '';
  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = item.extends.map(extend => extend.name + stringifyGenerics(extend.generics, true)).join(', ');
    interfacesOutput += 'export interface ' + item.name + stringifyGenerics(item.generics);

    if (extendList) {
      interfacesOutput += ` extends ${extendList}`;
    }

    interfacesOutput += '{' + EOL;

    for (const property of item.properties) {
      if (property.comment) {
        interfacesOutput += property.comment + EOL;
      }

      if (isAliasProperty(property)) {
        const generics = stringifyGenerics(property.generics, true);
        interfacesOutput += `${JSON.stringify(property.name)}?: ${
          item.fallback
            ? `${property.alias.name + generics} | ${property.alias.name + generics}[];`
            : `${property.alias.name + generics};`
        }`;
      } else {
        const value = stringifyTypes(property.type);
        interfacesOutput += `${JSON.stringify(property.name)}?: ${
          item.fallback ? `${value} | ${value}[];` : `${value};`
        }`;
      }

      interfacesOutput += EOL;
    }

    interfacesOutput += '}';
  }

  let declarationsOutput = '';
  for (const declaration of declarations.values()) {
    if (declarationsOutput) {
      declarationsOutput += EOL + EOL;
    }

    if (declaration.export) {
      declarationsOutput += 'export ';
    }

    declarationsOutput += `type ${declaration.name + stringifyGenerics(declaration.generics, true)} = ${stringifyTypes(
      declaration.types,
    ) + EOL}`;
  }

  return interfacesOutput + EOL + EOL + declarationsOutput;
}

function stringifyTypes(types: DeclarableType | DeclarableType[]) {
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

function stringifyGenerics(items: IGenerics[] | undefined, ignoreDefault = false) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, defaults }) => (defaults && !ignoreDefault ? `${name} = ${defaults}` : name))
    .join(', ')}>`;
}
