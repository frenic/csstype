import { atRuleDescriptors, atRuleList } from './at-rules';
import { toCamelCase, toPascalCase } from './casing';
import dataTypes from './data-types';
import {
  all,
  standardLonghandProperties,
  standardShorthandProperties,
  vendorPrefixedLonghandProperties,
  vendorPrefixedShorthandProperties,
} from './properties';
import pseudos from './pseudos';
import { IAlias, IDataType, IGenerics, Type, TypeType } from './typer';

interface Interface {
  name: string;
  generics: IGenerics[];
  extends: Interface[];
  fallback: boolean;
  properties: IProperty[];
}

interface IProperty {
  name: string;
  generics: IGenerics[];
  alias: IAlias;
}

export type MixedType = TypeType<IDataType | IAlias>;
export type DeclarableType = TypeType<IAlias>;

export interface IDeclaration {
  name: string;
  export: boolean;
  types: DeclarableType[];
  generics: IGenerics[];
}

export const lengthGeneric: IGenerics = {
  name: 'TLength',
  defaults: 'string | number',
};

const allDeclaration: IDeclaration = {
  name: 'All',
  export: false,
  types: declarable(all),
  generics: [],
};

const allAndStringDeclaration: IDeclaration = {
  name: 'AllString',
  export: false,
  types: declarable([aliasOf(allDeclaration), { type: Type.String }]),
  generics: [],
};

const allAndNumberDeclaration: IDeclaration = {
  name: 'AllNumber',
  export: false,
  types: declarable([aliasOf(allDeclaration), { type: Type.Number }]),
  generics: [],
};

const pseudoDeclaration: IDeclaration = {
  name: 'Pseudos',
  export: true,
  types: declarable(pseudos),
  generics: [],
};

const atRuleDeclaration: IDeclaration = {
  name: 'AtRules',
  export: true,
  types: declarable(atRuleList),
  generics: [],
};

const standardLonghandPropertiesDefinition: IProperty[] = [];
const standardShorthandPropertiesDefinition: IProperty[] = [];
const standardLonghandPropertiesHyphenDefinition: IProperty[] = [];
const standardShorthandPropertiesHyphenDefinition: IProperty[] = [];
const vendorLonghandPropertiesDefinition: IProperty[] = [];
const vendorShorthandPropertiesDefinition: IProperty[] = [];
const vendorLonghandPropertiesHyphenDefinition: IProperty[] = [];
const vendorShorthandPropertiesHyphenDefinition: IProperty[] = [];

const PROPERTY = 'Property';

export const declarations: IDeclaration[] = [
  atRuleDeclaration,
  pseudoDeclaration,
  allDeclaration,
  allAndStringDeclaration,
  allAndNumberDeclaration,
];

for (const properties of [
  standardLonghandProperties,
  standardShorthandProperties,
  vendorPrefixedLonghandProperties,
  vendorPrefixedShorthandProperties,
]) {
  const definitions =
    properties === standardLonghandProperties
      ? standardLonghandPropertiesDefinition
      : properties === standardShorthandProperties
        ? standardShorthandPropertiesDefinition
        : properties === vendorPrefixedLonghandProperties
          ? vendorLonghandPropertiesDefinition
          : vendorShorthandPropertiesDefinition;
  const hyphenDefinitions =
    properties === standardLonghandProperties
      ? standardLonghandPropertiesHyphenDefinition
      : properties === standardShorthandProperties
        ? standardShorthandPropertiesHyphenDefinition
        : properties === vendorPrefixedLonghandProperties
          ? vendorLonghandPropertiesHyphenDefinition
          : vendorShorthandPropertiesHyphenDefinition;
  for (const name in properties) {
    const types = filterMissingDataTypes(properties[name]);
    let declaration: IDeclaration;
    const generics = lengthIn(types) ? [lengthGeneric] : [];

    if (onlyContainsString(types)) {
      declaration = allAndStringDeclaration;
    } else if (onlyContainsNumber(types)) {
      declaration = allAndNumberDeclaration;
    } else {
      declaration = {
        name: toPascalCase(name) + PROPERTY,
        export: false,
        types: [aliasOf(allDeclaration), ...declarable(types)],
        generics,
      };
      declarations.push(declaration);
    }

    definitions.push({
      name: toCamelCase(name),
      generics,
      alias: aliasOf(declaration),
    });
    hyphenDefinitions.push({
      name,
      generics,
      alias: aliasOf(declaration),
    });
  }
}

const atRuleDefinitions: { [name: string]: IProperty[] } = {};
const atRuleHyphenDefinitions: { [name: string]: IProperty[] } = {};

for (const name in atRuleDescriptors) {
  atRuleDefinitions[name] = [];
  atRuleHyphenDefinitions[name] = [];

  for (const property in atRuleDescriptors[name]) {
    const types = filterMissingDataTypes(atRuleDescriptors[name][property]);
    let declaration: IDeclaration;
    const generics = lengthIn(types) ? [lengthGeneric] : [];

    if (onlyContainsString(types)) {
      declaration = allAndStringDeclaration;
    } else if (onlyContainsNumber(types)) {
      declaration = allAndNumberDeclaration;
    } else {
      declaration = {
        name: toPascalCase(name.slice(1)) + toPascalCase(property) + PROPERTY,
        export: false,
        types: declarable(types),
        generics,
      };
      declarations.push(declaration);
    }

    atRuleDefinitions[name].push({
      name: toCamelCase(property),
      generics,
      alias: aliasOf(declaration),
    });
    atRuleHyphenDefinitions[name].push({
      name: property,
      generics,
      alias: aliasOf(declaration),
    });
  }
}

for (const name in dataTypes) {
  declarations.push({
    name: toPascalCase(name),
    export: false,
    types: declarable(dataTypes[name]),
    generics: lengthIn(dataTypes[name]) ? [lengthGeneric] : [],
  });
}

const PROPERTIES = 'Properties';
const LONGHAND = 'Longhand';
const SHORTHAND = 'Shorthand';
const STANDARD = 'Standard';
const INTERFACE_STANDARD_LONGHAND_PROPERTIES = STANDARD + LONGHAND + PROPERTIES;
const INTERFACE_STANDARD_SHORTHAND_PROPERTIES = STANDARD + SHORTHAND + PROPERTIES;
const INTERFACE_STANDARD_PROPERTIES = STANDARD + PROPERTIES;
const VENDOR = 'Vendor';
const INTERFACE_VENDOR_LONGHAND_PROPERTIES = VENDOR + LONGHAND + PROPERTIES;
const INTERFACE_VENDOR_SHORTHAND_PROPERTIES = VENDOR + SHORTHAND + PROPERTIES;
const INTERFACE_VENDOR_PROPERTIES = VENDOR + PROPERTIES;
const INTERFACE_ALL_PROPERTIES = PROPERTIES;
const HYPHEN = 'Hyphen';
const INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN = INTERFACE_STANDARD_LONGHAND_PROPERTIES + HYPHEN;
const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN = INTERFACE_STANDARD_SHORTHAND_PROPERTIES + HYPHEN;
const INTERFACE_STANDARD_PROPERTIES_HYPHEN = INTERFACE_STANDARD_PROPERTIES + HYPHEN;
const INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN = INTERFACE_VENDOR_LONGHAND_PROPERTIES + HYPHEN;
const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + HYPHEN;
const INTERFACE_VENDOR_PROPERTIES_HYPHEN = INTERFACE_VENDOR_PROPERTIES + HYPHEN;
const INTERFACE_ALL_PROPERTIES_HYPHEN = INTERFACE_ALL_PROPERTIES + HYPHEN;
const FALLBACK = 'Fallback';
const INTERFACE_STANDARD_LONGHAND_PROPERTIES_FALLBACK = INTERFACE_STANDARD_LONGHAND_PROPERTIES + FALLBACK;
const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_FALLBACK = INTERFACE_STANDARD_SHORTHAND_PROPERTIES + FALLBACK;
const INTERFACE_STANDARD_PROPERTIES_FALLBACK = INTERFACE_STANDARD_PROPERTIES + FALLBACK;
const INTERFACE_VENDOR_LONGHAND_PROPERTIES_FALLBACK = INTERFACE_VENDOR_LONGHAND_PROPERTIES + FALLBACK;
const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_FALLBACK = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + FALLBACK;
const INTERFACE_VENDOR_PROPERTIES_FALLBACK = INTERFACE_VENDOR_PROPERTIES + FALLBACK;
const INTERFACE_ALL_PROPERTIES_FALLBACK = INTERFACE_ALL_PROPERTIES + FALLBACK;
const INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN_FALLBACK =
  INTERFACE_STANDARD_LONGHAND_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK =
  INTERFACE_STANDARD_SHORTHAND_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_STANDARD_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_LONGHAND_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_SHORTHAND_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_ALL_PROPERTIES + HYPHEN + FALLBACK;

const standardLonghandPropertiesGenerics = genericsOf(standardLonghandPropertiesDefinition);
const standardShorthandPropertiesGenerics = genericsOf(standardShorthandPropertiesDefinition);
const standardPropertiesGenerics = genericsOf([
  ...standardLonghandPropertiesDefinition,
  ...standardShorthandPropertiesDefinition,
]);
const vendorLonghandPropertiesGenerics = genericsOf(vendorLonghandPropertiesDefinition);
const vendorShorthandPropertiesGenerics = genericsOf(vendorShorthandPropertiesDefinition);
const vendorPropertiesGenerics = genericsOf([
  ...vendorLonghandPropertiesDefinition,
  ...vendorShorthandPropertiesDefinition,
]);
const allPropertiesGenerics = genericsOf([
  ...standardLonghandPropertiesDefinition,
  ...standardShorthandPropertiesDefinition,
  ...vendorLonghandPropertiesDefinition,
  ...vendorShorthandPropertiesDefinition,
]);

const standardLonghandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES,
  generics: standardLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesDefinition,
};

const standardShorthandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES,
  generics: standardShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesDefinition,
};

const standardPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES,
  generics: standardPropertiesGenerics,
  extends: [standardLonghandPropertiesInterface, standardShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES,
  generics: vendorLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesDefinition,
};

const vendorShorthandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES,
  generics: vendorShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesDefinition,
};

const vendorPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES,
  generics: vendorPropertiesGenerics,
  extends: [vendorLonghandPropertiesInterface, vendorShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const allPropertiesInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES,
  generics: allPropertiesGenerics,
  extends: [standardPropertiesInterface, vendorPropertiesInterface],
  fallback: false,
  properties: [],
};

const standardLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN,
  generics: standardLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesHyphenDefinition,
};

const standardShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN,
  generics: standardShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesHyphenDefinition,
};

const standardPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN,
  generics: standardPropertiesGenerics,
  extends: [standardLonghandPropertiesHyphenInterface, standardShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN,
  generics: vendorLonghandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesHyphenDefinition,
};

const vendorShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN,
  generics: vendorShorthandPropertiesGenerics,
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesHyphenDefinition,
};

const vendorPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN,
  generics: vendorPropertiesGenerics,
  extends: [vendorLonghandPropertiesHyphenInterface, vendorShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const allPropertiesHyphenInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_HYPHEN,
  generics: allPropertiesGenerics,
  extends: [standardPropertiesHyphenInterface, vendorPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const standardLongformPropertiesFallbackInterface: Interface = {
  ...standardLonghandPropertiesInterface,
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const standardShorthandPropertiesFallbackInterface: Interface = {
  ...standardShorthandPropertiesInterface,
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const standardPropertiesFallbackInterface: Interface = {
  ...standardPropertiesInterface,
  name: INTERFACE_STANDARD_PROPERTIES_FALLBACK,
  extends: [standardLongformPropertiesFallbackInterface, standardShorthandPropertiesFallbackInterface],
  fallback: true,
};

const vendorLonghandPropertiesFallbackInterface: Interface = {
  ...vendorLonghandPropertiesInterface,
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const vendorShorthandPropertiesFallbackInterface: Interface = {
  ...vendorShorthandPropertiesInterface,
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_FALLBACK,
  fallback: true,
};

const vendorPropertiesFallbackInterface: Interface = {
  ...vendorPropertiesInterface,
  name: INTERFACE_VENDOR_PROPERTIES_FALLBACK,
  extends: [vendorLonghandPropertiesFallbackInterface, vendorShorthandPropertiesFallbackInterface],
  fallback: true,
};

const allPropertiesFallbackInterface: Interface = {
  ...allPropertiesInterface,
  name: INTERFACE_ALL_PROPERTIES_FALLBACK,
  extends: [standardPropertiesFallbackInterface, vendorPropertiesFallbackInterface],
  fallback: true,
};

const standardLongformPropertiesHyphenFallbackInterface: Interface = {
  ...standardLonghandPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const standardShorthandPropertiesHyphenFallbackInterface: Interface = {
  ...standardShorthandPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const standardPropertiesHyphenFallbackInterface: Interface = {
  ...standardPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK,
  extends: [standardLongformPropertiesHyphenFallbackInterface, standardShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
};

const vendorLonghandPropertiesHyphenFallbackInterface: Interface = {
  ...vendorLonghandPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const vendorShorthandPropertiesHyphenFallbackInterface: Interface = {
  ...vendorShorthandPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const vendorPropertiesHyphenFallbackInterface: Interface = {
  ...vendorPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK,
  extends: [vendorLonghandPropertiesHyphenFallbackInterface, vendorShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
};

const allPropertiesHyphenFallbackInterface: Interface = {
  ...allPropertiesHyphenInterface,
  name: INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK,
  extends: [standardPropertiesHyphenFallbackInterface, vendorPropertiesHyphenFallbackInterface],
  fallback: true,
};

const atRuleInterfaces: Interface[] = [];

for (const name in atRuleDefinitions) {
  const pascalName = toPascalCase(name.slice(1));
  const generics = genericsOf(atRuleDefinitions[name]);
  atRuleInterfaces.push(
    {
      name: pascalName,
      generics,
      extends: [],
      fallback: false,
      properties: atRuleDefinitions[name],
    },
    {
      name: pascalName + HYPHEN,
      generics,
      extends: [],
      fallback: false,
      properties: atRuleHyphenDefinitions[name],
    },
    {
      name: pascalName + FALLBACK,
      generics,
      extends: [],
      fallback: true,
      properties: atRuleDefinitions[name],
    },
    {
      name: pascalName + HYPHEN + FALLBACK,
      generics,
      extends: [],
      fallback: true,
      properties: atRuleHyphenDefinitions[name],
    },
  );
}

export const interfaces = [
  standardLonghandPropertiesInterface,
  standardShorthandPropertiesInterface,
  standardPropertiesInterface,
  vendorLonghandPropertiesInterface,
  vendorShorthandPropertiesInterface,
  vendorPropertiesInterface,
  allPropertiesInterface,
  standardLonghandPropertiesHyphenInterface,
  standardShorthandPropertiesHyphenInterface,
  standardPropertiesHyphenInterface,
  vendorLonghandPropertiesHyphenInterface,
  vendorShorthandPropertiesHyphenInterface,
  vendorPropertiesHyphenInterface,
  allPropertiesHyphenInterface,
  standardLongformPropertiesFallbackInterface,
  standardShorthandPropertiesFallbackInterface,
  standardPropertiesFallbackInterface,
  vendorLonghandPropertiesFallbackInterface,
  vendorShorthandPropertiesFallbackInterface,
  vendorPropertiesFallbackInterface,
  allPropertiesFallbackInterface,
  standardLongformPropertiesHyphenFallbackInterface,
  standardShorthandPropertiesHyphenFallbackInterface,
  standardPropertiesHyphenFallbackInterface,
  vendorLonghandPropertiesHyphenFallbackInterface,
  vendorShorthandPropertiesHyphenFallbackInterface,
  vendorPropertiesHyphenFallbackInterface,
  allPropertiesHyphenFallbackInterface,
  ...atRuleInterfaces,
];

function declarable(types: MixedType[]): DeclarableType[] {
  return types.sort(sorter).map<DeclarableType>(
    type =>
      type.type === Type.DataType
        ? {
            type: Type.Alias,
            name: toPascalCase(type.name),
            generics: type.name && type.name in dataTypes && lengthIn(dataTypes[type.name]) ? [lengthGeneric] : [],
          }
        : type,
  );
}

function sorter(a: MixedType, b: MixedType) {
  if (a.type === Type.StringLiteral && b.type === Type.StringLiteral) {
    return a.literal < b.literal ? -1 : a.literal > b.literal ? 1 : 0;
  }
  if (a.type === Type.NumericLiteral && b.type === Type.NumericLiteral) {
    return a.literal - b.literal;
  }
  return a.type - b.type;
}

function genericsOf(definitions: IProperty[]) {
  return Array.from(new Set(([] as IGenerics[]).concat(...definitions.map(definition => definition.generics))));
}

export function lengthIn(types: MixedType[]) {
  return !types.every(type => {
    if (type.type === Type.Length) {
      return false;
    }
    if (type.type === Type.DataType && type.name && type.name in dataTypes && lengthIn(dataTypes[type.name])) {
      return false;
    }
    return true;
  });
}

function aliasOf({ name, types }: IDeclaration): IAlias {
  return {
    type: Type.Alias,
    name,
    generics: lengthIn(types) ? [lengthGeneric] : [],
  };
}

function filterMissingDataTypes(types: MixedType[]) {
  // Exclude type aliases that's not of interest
  const filtered = types.filter(type => type.type !== Type.DataType || (!!type.name && type.name in dataTypes));

  // Those excluded type aliases need to resolve to string
  if (filtered.length < types.length && filtered.every(type => type.type !== Type.String)) {
    filtered.push({ type: Type.String });
  }

  return filtered;
}

function onlyContainsString(types: MixedType[]) {
  return types.every(type => type.type === Type.String);
}

function onlyContainsNumber(types: MixedType[]) {
  return types.every(type => type.type === Type.Number);
}
