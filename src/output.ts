import { DeclarableType, declarations, IDeclaration, IGenerics, interfaces, isAliasProperty } from './declarator';
import { Type} from './typer';

const EOL = '\n';

export default () => ({
  flow: flow(),
  typescript: typescript(),
  iots: iots(),
});

function flow() {
  let interfacesOutput = '';
  for (const item of interfaces) {
    if (interfacesOutput) {
      interfacesOutput += EOL + EOL;
    }

    const extendList = item.extends.map(extend => extend.name + stringifyGenerics(extend.generics, true)).join(' & ');
    interfacesOutput += 'export type ';
    interfacesOutput += item.name + stringifyGenerics(item.generics);
    interfacesOutput += ' = ' + extendList;

    if (item.properties.length > 0) {
      if (extendList) {
        interfacesOutput += ' & ';
      }

      interfacesOutput += '{' + EOL;

      for (const property of item.properties) {
        if (isAliasProperty(property)) {
          const generics = stringifyGenerics(property.generics, true);
          interfacesOutput += `${JSON.stringify(property.name)}?: ${
            item.fallback
              ? `${property.alias.name + generics} | ${property.alias.name + generics}[],`
              : property.alias.name + generics + ','
          }`;
        } else {
          const value = stringifyTypes(property.type);
          interfacesOutput += `${JSON.stringify(property.name)}?: ${
            item.fallback ? `${value} | ${value}[],` : value + ','
          }`;
        }

        interfacesOutput += EOL;
      }

      interfacesOutput += '}';
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

  return `// @flow ${EOL + interfacesOutput + EOL + EOL + declarationsOutput + EOL}`;
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

function iots() {
  let header = 'import * as t from \'io-ts\'';
  let interfacesOutput = '';
  let genericsOutput = '';
  const generics: Record<string, IGenerics> = {};
  for (const item of interfaces) {
    interfacesOutput += EOL + EOL;

    for (const generic of item.generics) {
      generics[generic.name] = generic;
    }

    interfacesOutput += `export const ${item.name} = `;

    if (item.extends.length > 0) {
      interfacesOutput += 't.intersection(['
      for (const extend of item.extends) {
        interfacesOutput += `${extend.name},`;
      }
    }

    if (item.properties.length > 0) {
      interfacesOutput += `t.partial({`
      for (const property of item.properties) {
        interfacesOutput += EOL;
        if (property.comment) {
          interfacesOutput += property.comment + EOL;
        }

        if (isAliasProperty(property)) {
          const value = property.alias.name
          interfacesOutput += `${JSON.stringify(property.name)}: ${
            item.fallback ? `t.union([${value}, t.array(${value})])` : value
          },`;
        } else {
          const value = stringifyTypesAsIoTs(property.type);
          interfacesOutput += `${JSON.stringify(property.name)}: ${
            item.fallback ? `t.union([${value}, t.array(${value})]),` : value + ','
          }`;
        }
      }
      interfacesOutput += EOL + '})'
    }

    if (item.extends.length > 0) {
      interfacesOutput += '])'
    }

    interfacesOutput += ';';
  }

  let declarationsOutput = '';
  let alreadyOutput: Record<string, boolean> = {};
  for (const declaration of declarations.values()) {
    declarationsOutput += EOL + EOL;

    const outputDeclaration = (declaration: IDeclaration) => {
      if (declaration.name in alreadyOutput) {
        return;
      }

      for (const mightBeNeeded of declarations.values()) {
        if (refersToName(declaration, mightBeNeeded)) {
          outputDeclaration(mightBeNeeded);
        }
      }

      declarationsOutput += ' ';

      if (declaration.export) {
        declarationsOutput += 'export ';
      }

      declarationsOutput += `const ${declaration.name} = ${stringifyTypesAsIoTs(declaration.types)};` + EOL;
      alreadyOutput[declaration.name] = true;
    }

    outputDeclaration(declaration);
  }

  for (const [k, v] of Object.entries(generics)) {
    let type;
    if (v.default_types) {
      type = v.default_types;
    } else {
      type = 't.any';
    }
    genericsOutput += `const ${k} = ${type};` + EOL;
  }

  return header + EOL + genericsOutput + declarationsOutput + interfacesOutput;
}

function refersToName(a: IDeclaration, b: IDeclaration) {
  return a.types.some((type) => {
    switch (type.type) {
      case Type.String:
        break;
      case Type.Number:
        break;
      case Type.Length:
        break;
      case Type.StringLiteral:
        break;
      case Type.NumericLiteral:
        break;
      case Type.Alias:
        if (type.name == b.name) {
          return true;
        }
    }
    return false;
  });
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

function stringifyTypesAsIoTs(types: DeclarableType | DeclarableType[]) {
  if (!Array.isArray(types)) {
    return mapTypeToIoTS(types)
  }

  if (types.length == 1) {
    return mapTypeToIoTS(types[0]);
  }

  return `t.union([ ${types
    .map(mapTypeToIoTS)
    .join(',')} ])`;

  function mapTypeToIoTS(type: DeclarableType) {
    switch (type.type) {
      case Type.String:
        return 't.string';
      case Type.Number:
        return 't.number';
      case Type.StringLiteral:
        return `t.literal(${JSON.stringify(type.literal)})`;
      case Type.NumericLiteral:
        return 't.number';
      case Type.Alias:
        return type.name;
      case Type.Length:
        return 'TLength';
    }
  }
}

function stringifyGenerics(items: IGenerics[] | undefined, ignoreDefault = false) {
  if (!items || items.length === 0) {
    return '';
  }

  return `<${items
    .map(({ name, defaults }) => (defaults && !ignoreDefault ? `${name} = ${defaults}` : name))
    .join(', ')}>`;
}
