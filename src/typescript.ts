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

    if (namespace.comment) {
      namespaceOutput += namespace.comment + EOL;
    }

    namespaceOutput += `export namespace ${namespace.name} {${EOL}`;

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

  const disableAutoExport = 'export {};' + EOL;

  const propertyValue =
    'export type PropertyValue<TValue> = TValue extends Array<infer AValue> ? Array<' +
    'AValue extends infer TUnpacked & {} ? TUnpacked : AValue' +
    '> : ' +
    'TValue extends infer TUnpacked & {} ? TUnpacked : TValue' +
    ';' +
    EOL;
  const fallback = 'export type Fallback<T> = { [P in keyof T]: T[P] | NonNullable<T[P]>[] };' + EOL;

  return (
    disableAutoExport +
    EOL +
    propertyValue +
    EOL +
    fallback +
    EOL +
    interfacesOutput +
    EOL +
    declarationsOutput +
    EOL +
    namespaceOutput
  );
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
      const value = `${stringifyTypes([type], currentNamespace, false)} | undefined`;
      output += `${JSON.stringify(property.name)}?: ${value};`;

      output += EOL;
    }
    output += '}';
  } else {
    output += 'type ' + entry.name + stringifyGenerics(entry.generics, true, stringifySimpleTypes) + ' = ';

    const name = entry.fallbacks.name + stringifyGenerics(entry.generics, false, stringifySimpleTypes);
    output += `Fallback<${name}>`;
  }

  return output;
}

function outputDeclaration(entry: IDeclaration, currentNamespace: INamespace | undefined) {
  let output = '';
  if (entry.export) {
    output += 'export ';
  }

  output += `type ${
    entry.name + stringifyGenerics(entry.generics, entry.export, stringifySimpleTypes)
  } = ${stringifyTypes(entry.types, currentNamespace, true)}`;

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

  const numberOutput = stringifyType({ type: Type.Number });
  const stringOutput = stringifyType({ type: Type.String });
  let hasUnionString = false;

  return types
    .reduce<string[]>((unions, type) => {
      if (type.type === Type.String) {
        if (!hasUnionString) {
          unions.push(applyAutocompleteHack ? `(${stringOutput} & {})` : stringOutput);
          hasUnionString = true;
        }
      } else if (type.type === Type.Number) {
        unions.push(applyAutocompleteHack ? `(${numberOutput} & {})` : numberOutput);

        if (!hasUnionString) {
          unions.push(applyAutocompleteHack ? `(${stringOutput} & {})` : stringOutput);
          hasUnionString = true;
        }
      } else if (type.type === Type.NumericLiteral) {
        unions.push(stringifyType(type));

        if (!hasUnionString) {
          unions.push(applyAutocompleteHack ? `(${stringOutput} & {})` : stringOutput);
          hasUnionString = true;
        }
      } else {
        unions.push(stringifyType(type));
      }

      return unions;
    }, [])
    .join(' | ');
}

function stringifySimpleTypes(types: SimpleType[]) {
  return stringifyTypes(types, undefined, true);
}
