import { DeclarableType, IDeclaration, IInterface, isAliasProperty } from './declarator';
import { createStringifyType, EOL, generatingDeclarations, stringifyGenerics } from './output';

export default async function flow() {
  const { namespaces, interfaces, declarations } = await generatingDeclarations;
  let interfacesOutput = '';

  const fallbackSet: Set<string> = new Set();

  for (const entry of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL;
    }

    interfacesOutput += outputInterface(entry, fallbackSet) + EOL;
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

    const body = namespace.body();

    for (const entry of body) {
      if (namespaceOutput) {
        namespaceOutput += EOL;
      }

      if ('extends' in entry) {
        namespaceOutput += outputInterface(entry, fallbackSet, namespace.name) + EOL;
      } else {
        namespaceOutput += outputDeclaration(entry, namespace.name) + EOL;
      }
    }
  }

  const fallbacksOutput = [...fallbackSet]
    .map(name => {
      return `type ${name} = ${name} | Array<${name}>;`;
    })
    .join(EOL);

  return `// @flow strict ${EOL +
    EOL +
    '// See https://github.com/frenic/csstype/pull/67 for why all "fallbackable" types (e.g. `string | Array<string>`) are lifted here' +
    EOL +
    fallbacksOutput +
    EOL +
    interfacesOutput +
    EOL +
    declarationsOutput +
    EOL +
    namespaceOutput +
    EOL}`;
}

function stringifyTypes(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    types = [types];
  }
  return types.map(createStringifyType(undefined, true)).join(' | ');
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
  return 'Fallbackable' + name;
}

function outputInterface(entry: IInterface, fallbackSet: Set<string>, namespace = '') {
  let output = '';

  const extendList = combineFlowExactTypes(
    entry.extends.map(extend => extend.name + stringifyGenerics(extend.generics)),
  );

  if (entry.export) {
    output += 'export ';
  }

  output += 'type ';
  output += namespace + entry.name + stringifyGenerics(entry.generics, true, stringifyTypes);
  output += ' = ' + extendList;

  if (entry.properties.length > 0) {
    if (extendList) {
      // TODO: remove this branch since it's not getting hit
      output += ' & ';
    }

    output += '{|' + EOL;

    for (const property of entry.properties) {
      if (isAliasProperty(property)) {
        const generics = stringifyGenerics(property.generics);
        const key = JSON.stringify(property.name);
        let type = (property.namespace ? property.namespace.name : '') + property.alias.name + generics;
        if (entry.fallback) {
          type = getNameForFallbackable(type);
          fallbackSet.add(type);
        }

        output += `${key}?: ${type},`;
      } else {
        const value = stringifyTypes(property.type);
        const key = JSON.stringify(property.name);
        let type = value;
        if (entry.fallback) {
          type = getNameForFallbackable(type);
          fallbackSet.add(type);
        }

        output += `${key}?: ${type},`;
      }

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

  output += `type ${namespace + entry.name + stringifyGenerics(entry.generics)} = ${stringifyTypes(entry.types)}`;

  return output;
}
