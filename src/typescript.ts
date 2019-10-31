import { DeclarableType, IDeclaration, IInterface, INamespace, isAliasProperty } from './declarator';
import { createStringifyType, EOL, generatingDeclarations, stringifyGenerics } from './output';
import { Type } from './typer';

export default async function typescript() {
  const { namespaces, interfaces, declarations } = await generatingDeclarations;

  let interfacesOutput = '';
  for (const entry of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL;
    }

    interfacesOutput += (await outputInterface(entry, undefined)) + EOL;
  }

  let declarationsOutput = '';
  for (const entry of declarations) {
    if (declarationsOutput) {
      declarationsOutput += EOL;
    }

    declarationsOutput += outputDeclaration(entry, undefined) + EOL;
  }

  let namespaceOutput = '';
  for (const namespace of namespaces) {
    if (namespaceOutput) {
      namespaceOutput += EOL;
    }

    if (namespace.export) {
      namespaceOutput += 'export ';
    } else {
      namespaceOutput += 'declare ';
    }

    namespaceOutput += `namespace ${namespace.name} {${EOL}`;

    const body = namespace.body();

    for (const entry of body) {
      if (namespaceOutput) {
        namespaceOutput += EOL;
      }

      if ('extends' in entry) {
        namespaceOutput += (await outputInterface(entry, namespace)) + EOL;
      } else {
        namespaceOutput += outputDeclaration(entry, namespace) + EOL;
      }
    }

    namespaceOutput += `}${EOL}`;
  }

  return interfacesOutput + EOL + declarationsOutput + EOL + namespaceOutput;
}

async function outputInterface(entry: IInterface, currentNamespace: INamespace | undefined) {
  let output = '';
  if (entry.export) {
    output += 'export ';
  }

  const extendList = entry.extends.map(extend => extend.name + stringifyGenerics(extend.generics, true)).join(', ');
  output += 'interface ' + entry.name + stringifyGenerics(entry.generics);

  if (extendList) {
    output += ` extends ${extendList}`;
  }

  output += '{' + EOL;

  for (const property of entry.properties) {
    const comment = await property.comment();
    if (comment) {
      output += comment + EOL;
    }

    if (isAliasProperty(property)) {
      const name =
        property.namespace && property.namespace !== currentNamespace
          ? `${property.namespace.name}.${property.alias.name}`
          : property.alias.name;
      const generics = stringifyGenerics(property.generics, true);
      output += `${JSON.stringify(property.name)}?: ${
        entry.fallback ? `${name + generics} | ${name + generics}[];` : `${name + generics};`
      }`;
    } else {
      const value = stringifyTypes(property.type, currentNamespace, false);
      output += `${JSON.stringify(property.name)}?: ${entry.fallback ? `${value} | ${value}[];` : `${value};`}`;
    }

    output += EOL;
  }

  output += '}';

  return output;
}

function outputDeclaration(entry: IDeclaration, currentNamespace: INamespace | undefined) {
  let output = '';
  if (entry.export) {
    output += 'export ';
  }

  output += `type ${entry.name + stringifyGenerics(entry.generics, true)} = ${stringifyTypes(
    entry.types,
    currentNamespace,
    true,
  )}`;

  return output;
}

function stringifyTypes(
  types: DeclarableType | DeclarableType[],
  currentNamespace: INamespace | undefined,
  applyAutocompleteHack: boolean,
) {
  if (!Array.isArray(types)) {
    types = [types];
  }

  const stringifyType = createStringifyType(currentNamespace);

  return types
    .map(type => {
      if (!applyAutocompleteHack) {
        return stringifyType(type);
      }

      if (type.type === Type.String || type.type === Type.Number) {
        // Apply autocomplete hack
        return `(${stringifyType(type)} & {})`;
      } else {
        return stringifyType(type);
      }
    })
    .join(' | ');
}
