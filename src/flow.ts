import { declarator, isAliasProperty } from './declarator';
import { EOL, stringifyGenerics, stringifyTypes } from './output';

export default async function flow() {
  const { declarations, interfaces } = await declarator();
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
