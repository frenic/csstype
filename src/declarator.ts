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

const standardLonghandPropertiesDefinition: IProperty[] = [];
const standardShorthandPropertiesDefinition: IProperty[] = [];
const standardLonghandPropertiesHyphenDefinition: IProperty[] = [];
const standardShorthandPropertiesHyphenDefinition: IProperty[] = [];
const vendorLonghandPropertiesDefinition: IProperty[] = [];
const vendorShorthandPropertiesDefinition: IProperty[] = [];
const vendorLonghandPropertiesHyphenDefinition: IProperty[] = [];
const vendorShorthandPropertiesHyphenDefinition: IProperty[] = [];
export const declarations: IDeclaration[] = [
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
    const propertyGenerics = lengthIn(types) ? [lengthGeneric] : [];

    if (onlyContainsString(types)) {
      declaration = allAndStringDeclaration;
    } else if (onlyContainsNumber(types)) {
      declaration = allAndNumberDeclaration;
    } else {
      declaration = {
        name: toPascalCase(name) + 'Property',
        export: false,
        types: [aliasOf(allDeclaration), ...declarable(types)],
        generics: propertyGenerics,
      };
      declarations.push(declaration);
    }

    definitions.push({
      name: toCamelCase(name),
      generics: propertyGenerics,
      alias: aliasOf(declaration),
    });
    hyphenDefinitions.push({
      name,
      generics: propertyGenerics,
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

const standardLonghandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesDefinition,
};

const standardShorthandPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesDefinition,
};

const standardPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES,
  generics: [lengthGeneric],
  extends: [standardLonghandPropertiesInterface, standardShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesDefinition,
};

const vendorShorthandPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesDefinition,
};

const vendorPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES,
  generics: [lengthGeneric],
  extends: [vendorLonghandPropertiesInterface, vendorShorthandPropertiesInterface],
  fallback: false,
  properties: [],
};

const allPropertiesInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES,
  generics: [lengthGeneric],
  extends: [standardPropertiesInterface, vendorPropertiesInterface],
  fallback: false,
  properties: [],
};

const standardLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_LONGHAND_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardLonghandPropertiesHyphenDefinition,
};

const standardShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_SHORTHAND_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardShorthandPropertiesHyphenDefinition,
};

const standardPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [standardLonghandPropertiesHyphenInterface, standardShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const vendorLonghandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_LONGHAND_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorLonghandPropertiesHyphenDefinition,
};

const vendorShorthandPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_SHORTHAND_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorShorthandPropertiesHyphenDefinition,
};

const vendorPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [vendorLonghandPropertiesHyphenInterface, vendorShorthandPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const allPropertiesHyphenInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
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
  name: INTERFACE_STANDARD_PROPERTIES_FALLBACK,
  generics: [lengthGeneric],
  extends: [standardLongformPropertiesFallbackInterface, standardShorthandPropertiesFallbackInterface],
  fallback: true,
  properties: [],
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
  name: INTERFACE_VENDOR_PROPERTIES_FALLBACK,
  generics: [lengthGeneric],
  extends: [vendorLonghandPropertiesFallbackInterface, vendorShorthandPropertiesFallbackInterface],
  fallback: true,
  properties: [],
};

const allPropertiesFallbackInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_FALLBACK,
  generics: [lengthGeneric],
  extends: [standardPropertiesFallbackInterface, vendorPropertiesFallbackInterface],
  fallback: true,
  properties: [],
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
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK,
  generics: [lengthGeneric],
  extends: [standardLongformPropertiesHyphenFallbackInterface, standardShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
  properties: [],
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
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK,
  generics: [lengthGeneric],
  extends: [vendorLonghandPropertiesHyphenFallbackInterface, vendorShorthandPropertiesHyphenFallbackInterface],
  fallback: true,
  properties: [],
};

const allPropertiesHyphenFallbackInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK,
  generics: [lengthGeneric],
  extends: [standardPropertiesHyphenFallbackInterface, vendorPropertiesHyphenFallbackInterface],
  fallback: true,
  properties: [],
};

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
