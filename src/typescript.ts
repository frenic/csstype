import {
  DeclarableType,
  IDeclaration,
  INamespace,
  Interface,
  isAliasProperty,
  isInterface,
  isInterfaceProperties,
  SimpleType,
} from './declarator';
import { Type } from './syntax/typer';
import { createStringifyType, EOL, generatingDeclarations, stringifyGenerics } from './utils/output';

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

      if (isInterface(entry)) {
        namespaceOutput += (await outputInterface(entry, namespace)) + EOL;
      } else {
        namespaceOutput += outputDeclaration(entry, namespace) + EOL;
      }
    }

    namespaceOutput += `}${EOL}`;
  }

  const propertyValue =
    'export type PropertyValue<TValue> = TValue extends Array<infer AValue> ? Array<' +
    'AValue extends infer TUnpacked & {} ? TUnpacked : AValue' +
    '> : ' +
    'TValue extends infer TUnpacked & {} ? TUnpacked : TValue' +
    ';' +
    EOL;

  return propertyValue + EOL + interfacesOutput + EOL + declarationsOutput + EOL + namespaceOutput;
}

async function outputInterface(entry: Interface, currentNamespace: INamespace | undefined) {
  let output = '';
  if (entry.export) {
    output += 'export ';
  }

  if (isInterfaceProperties(entry)) {
    const extendList = entry.extends.map(extend => extend.name + stringifyGenerics(extend.generics)).join(', ');
    output += 'interface ' + entry.name + stringifyGenerics(entry.generics, true, stringifySimpleTypes);

    if (extendList) {
      output += ` extends ${extendList}`;
    }

    output += '{' + EOL;

    for (const property of entry.properties) {
      const comment = await property.comment();
      if (comment) {
        output += comment + EOL;
      }

      const type = isAliasProperty(property) ? property.alias : property.type;
      const value = stringifyTypes([type], currentNamespace, false);
      output += `${JSON.stringify(property.name)}?: ${value};`;

      output += EOL;
    }
    output += '}';
  } else {
    output += 'type ' + entry.name + stringifyGenerics(entry.generics, true, stringifySimpleTypes) + ' = {' + EOL;

    const name = entry.fallbacks.name + stringifyGenerics(entry.generics, false, stringifySimpleTypes);
    output += '[P in keyof ' + name + ']: ' + name + '[P] | ' + name + '[P][];' + EOL + '}';
  }

  return output;
}

function outputDeclaration(entry: IDeclaration, currentNamespace: INamespace | undefined) {
  let output = '';
  if (entry.export) {
    output += 'export ';
  }

  output += `type ${entry.name +
    stringifyGenerics(entry.generics, entry.export, stringifySimpleTypes)} = ${stringifyTypes(
    entry.types,
    currentNamespace,
    true,
  )}`;

  return output;
}

function stringifyTypes(
  types: DeclarableType[],
  currentNamespace: INamespace | undefined,
  applyAutocompleteHack: boolean,
) {
  const stringifyType = createStringifyType(type => {
    // The type is in its own namespace so keep it empty
    const namespace = type.namespace && type.namespace !== currentNamespace ? `${type.namespace.name}.` : '';
    return namespace + type.name;
  }, currentNamespace);

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

function stringifySimpleTypes(types: SimpleType[]) {
  return stringifyTypes(types, undefined, true);
}
