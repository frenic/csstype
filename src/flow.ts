import {
  DeclarableType,
  IDeclaration,
  INamespace,
  Interface,
  isAliasProperty,
  isInterface,
  isInterfaceProperties,
} from './declarator';
import { Type } from './syntax/typer';
import { createStringifyType, EOL, generatingDeclarations, stringifyGenerics } from './utils/output';

export default async function flow() {
  const { namespaces, interfaces, declarations } = await generatingDeclarations;

  let interfacesOutput = '';

  for (const entry of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL;
    }

    interfacesOutput += outputInterface(entry) + EOL;
  }

  let declarationsOutput = '';
  for (const entry of declarations) {
    if (declarationsOutput) {
      declarationsOutput += EOL;
    }

    declarationsOutput += outputDeclaration(entry) + EOL;
  }

  let namespaceOutput = '';
  for (const namespace of namespaces) {
    if (namespaceOutput) {
      namespaceOutput += EOL;
    }

    namespaceOutput += outputNamespace(namespace);
  }

  return `// @flow strict ${
    EOL + EOL + EOL + interfacesOutput + EOL + declarationsOutput + EOL + namespaceOutput + EOL
  }`;
}

function typeAliasName(namespace: string | undefined, name: string) {
  return namespace ? `${namespace}$${name}` : name;
}

function stringifyTypes(types: DeclarableType[]) {
  return types.map(createStringifyType(type => typeAliasName(type.namespace?.name, type.name))).join(' | ');
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

function outputNamespace(namespace: INamespace) {
  let output = '';

  const body = namespace.body();

  for (const entry of body) {
    if (output) {
      output += EOL;
    }

    if (isInterface(entry)) {
      output += outputInterface(entry, namespace.name) + EOL;
    } else {
      output += outputDeclaration(entry, namespace.name) + EOL;
    }
  }

  return output;
}

function outputInterface(entry: Interface, namespace = '') {
  let output = '';

  const extendList = isInterfaceProperties(entry)
    ? combineFlowExactTypes(entry.extends.map(extend => extend.name + stringifyGenerics(extend.generics)))
    : '';

  if (entry.export) {
    output += 'export ';
  }

  output += 'type ';
  output += typeAliasName(namespace, entry.name) + stringifyGenerics(entry.generics, true, stringifyTypes);
  output += ' = ' + extendList;

  const properties = isInterfaceProperties(entry) ? entry.properties : entry.fallbacks.properties;

  if (properties.length > 0) {
    if (extendList) {
      // TODO: remove this branch since it's not getting hit
      output += ' & ';
    }

    output += '{|' + EOL;
    for (const property of properties) {
      const type = isAliasProperty(property) ? property.alias : property.type;
      const value = isInterfaceProperties(entry)
        ? stringifyTypes([type])
        : stringifyTypes([type, { type: Type.Array, of: type }]);
      output += `${JSON.stringify(property.name)}?: ${value};`;

      output += EOL;
    }
    output += '|}';
  }

  return output;
}

function outputDeclaration(entry: IDeclaration, namespace = '') {
  let output = '';

  if (entry.export) {
    output += 'export ';
  }

  output += `type ${
    typeAliasName(namespace, entry.name) + stringifyGenerics(entry.generics, entry.export, stringifyTypes)
  } = ${stringifyTypes(entry.types)}`;

  return output;
}
