import { toCamelCase, toPascalCase } from './casing';
import dataTypes from './data-types';
import { all, standardProperties, vendorPrefixedProperties } from './properties';
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
  types: [aliasOf(allDeclaration), { type: Type.String }],
  generics: [],
};

const allAndNumberDeclaration: IDeclaration = {
  name: 'AllNumber',
  export: false,
  types: [aliasOf(allDeclaration), { type: Type.Number }],
  generics: [],
};

const pseudoDeclaration: IDeclaration = {
  name: 'Pseudos',
  export: true,
  types: pseudos,
  generics: [],
};

const standardPropertiesDefinition: IProperty[] = [];
const standardPropertiesHyphenDefinition: IProperty[] = [];
const vendorPropertiesDefinition: IProperty[] = [];
const vendorPropertiesHyphenDefinition: IProperty[] = [];
export const declarations: IDeclaration[] = [
  pseudoDeclaration,
  allDeclaration,
  allAndStringDeclaration,
  allAndNumberDeclaration,
];

for (const properties of [standardProperties, vendorPrefixedProperties]) {
  const definitions = properties === standardProperties ? standardPropertiesDefinition : vendorPropertiesDefinition;
  const hyphenDefinitions =
    properties === standardProperties ? standardPropertiesHyphenDefinition : vendorPropertiesHyphenDefinition;
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

const INTERFACE_STANDARD_PROPERTIES = 'StandardProperties';
const INTERFACE_VENDOR_PROPERTIES = 'VendorProperties';
const INTERFACE_ALL_PROPERTIES = 'Properties';
const HYPHEN = 'Hyphen';
const INTERFACE_STANDARD_PROPERTIES_HYPHEN = INTERFACE_STANDARD_PROPERTIES + HYPHEN;
const INTERFACE_VENDOR_PROPERTIES_HYPHEN = INTERFACE_VENDOR_PROPERTIES + HYPHEN;
const INTERFACE_ALL_PROPERTIES_HYPHEN = INTERFACE_ALL_PROPERTIES + HYPHEN;
const FALLBACK = 'Fallback';
const INTERFACE_STANDARD_PROPERTIES_FALLBACK = INTERFACE_STANDARD_PROPERTIES + FALLBACK;
const INTERFACE_VENDOR_PROPERTIES_FALLBACK = INTERFACE_VENDOR_PROPERTIES + FALLBACK;
const INTERFACE_ALL_PROPERTIES_FALLBACK = INTERFACE_ALL_PROPERTIES + FALLBACK;
const INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_STANDARD_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_VENDOR_PROPERTIES + HYPHEN + FALLBACK;
const INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK = INTERFACE_ALL_PROPERTIES + HYPHEN + FALLBACK;

const standardPropertiesInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardPropertiesDefinition,
};

const vendorPropertiesInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorPropertiesDefinition,
};

const allPropertiesInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES,
  generics: [lengthGeneric],
  extends: [standardPropertiesInterface, vendorPropertiesInterface],
  fallback: false,
  properties: [],
};

const standardPropertiesHyphenInterface: Interface = {
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: standardPropertiesHyphenDefinition,
};

const vendorPropertiesHyphenInterface: Interface = {
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [],
  fallback: false,
  properties: vendorPropertiesHyphenDefinition,
};

const allPropertiesHyphenInterface: Interface = {
  name: INTERFACE_ALL_PROPERTIES_HYPHEN,
  generics: [lengthGeneric],
  extends: [standardPropertiesHyphenInterface, vendorPropertiesHyphenInterface],
  fallback: false,
  properties: [],
};

const standardPropertiesFallbackInterface: Interface = {
  ...standardPropertiesInterface,
  name: INTERFACE_STANDARD_PROPERTIES_FALLBACK,
  fallback: true,
};

const vendorPropertiesFallbackInterface: Interface = {
  ...vendorPropertiesInterface,
  name: INTERFACE_VENDOR_PROPERTIES_FALLBACK,
  fallback: true,
};

const allPropertiesFallbackInterface: Interface = {
  ...allPropertiesInterface,
  name: INTERFACE_ALL_PROPERTIES_FALLBACK,
  extends: [standardPropertiesFallbackInterface, vendorPropertiesFallbackInterface],
  fallback: true,
};

const standardPropertiesHyphenFallbackInterface: Interface = {
  ...standardPropertiesHyphenInterface,
  name: INTERFACE_STANDARD_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const vendorPropertiesHyphenFallbackInterface: Interface = {
  ...vendorPropertiesHyphenInterface,
  name: INTERFACE_VENDOR_PROPERTIES_HYPHEN_FALLBACK,
  fallback: true,
};

const allPropertiesHyphenFallbackInterface: Interface = {
  ...allPropertiesHyphenInterface,
  name: INTERFACE_ALL_PROPERTIES_HYPHEN_FALLBACK,
  extends: [standardPropertiesFallbackInterface, vendorPropertiesFallbackInterface],
  fallback: true,
};

export const interfaces = [
  standardPropertiesInterface,
  standardPropertiesHyphenInterface,
  standardPropertiesFallbackInterface,
  standardPropertiesHyphenFallbackInterface,
  vendorPropertiesInterface,
  vendorPropertiesHyphenInterface,
  vendorPropertiesFallbackInterface,
  vendorPropertiesHyphenFallbackInterface,
  allPropertiesInterface,
  allPropertiesHyphenInterface,
  allPropertiesFallbackInterface,
  allPropertiesHyphenFallbackInterface,
];

function declarable(types: MixedType[]): DeclarableType[] {
  return types.map<DeclarableType>(
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
