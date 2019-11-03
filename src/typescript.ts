import { isAliasProperty } from './declarator';
import { EOL, generatingDeclarations, stringifyGenerics, stringifyTypes } from './output';

export default async function typescript() {
  const { declarations, interfaces } = await generatingDeclarations;

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
      const comment = await property.comment();
      if (comment) {
        interfacesOutput += comment + EOL;
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
