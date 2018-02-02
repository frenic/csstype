import type, { Type, TypeType } from './typer';
import dataTypes from './data-types';
import { all, standardProperties, vendorPrefixedProperties } from './properties';
import pseudos from './pseudos';
import { EOL } from 'os';

const REGEX_LEADING_LETTER = /^(\w)/;
const REGEX_KEBAB_SEPARATOR = /-(\w)/g;
const REGEX_VENDOR_PREFIXED = /^-(\w)/;

const NAMESPACE = 'CSS';
const INTERFACE_STANDARD_PROPERTIES = 'StandardProperties';
const INTERFACE_VENDOR_PROPERTIES = 'VendorProperties';
const INTERFACE_ALL_PROPERTIES = 'Properties';
const INTERFACE_STANDARD_PROPERTIES_FALLBACK = 'StandardPropertiesFallback';
const INTERFACE_VENDOR_PROPERTIES_FALLBACK = 'VendorPropertiesFallback';
const INTERFACE_ALL_PROPERTIES_FALLBACK = 'PropertiesFallback';
const TYPE_PSEUDOS = 'Pseudos';

const GENERIC_LENGTH = 'TLength';

function quote(value: String) {
  return `'${value}'`;
}

function toUpperReplacer(substring: string, ...args: string[]): string {
  return args[0].toUpperCase();
}

function toLowerReplacer(substring: string, ...args: string[]): string {
  return args[0].toLowerCase();
}

function toPascalCase(kebabCase: string) {
  return kebabCase
    .replace(REGEX_VENDOR_PREFIXED, toUpperReplacer)
    .replace(REGEX_LEADING_LETTER, toUpperReplacer)
    .replace(REGEX_KEBAB_SEPARATOR, toUpperReplacer);
}

function toCamelCase(kebabCase: string) {
  return kebabCase.replace(REGEX_VENDOR_PREFIXED, toLowerReplacer).replace(REGEX_KEBAB_SEPARATOR, toUpperReplacer);
}

function _export(declaration: string): string {
  return `export ${declaration}`;
}

const ALL_TYPE_ALIAS_NAME = 'All';
const allTypeAlias: TypeType = { type: Type.TypeAlias, alias: ALL_TYPE_ALIAS_NAME };

const ALL_STRING_TYPE_ALIAS_NAME = 'AllString';
const allStringTypeAlias: TypeType = { type: Type.TypeAlias, alias: ALL_STRING_TYPE_ALIAS_NAME };
const allString: TypeType[] = [{ type: Type.TypeAlias, alias: ALL_TYPE_ALIAS_NAME }, { type: Type.String }];

const ALL_NUMBER_TYPE_ALIAS_NAME = 'AllNumber';
const allNumberTypeAlias: TypeType = { type: Type.TypeAlias, alias: ALL_NUMBER_TYPE_ALIAS_NAME };
const allNumber: TypeType[] = [{ type: Type.TypeAlias, alias: ALL_TYPE_ALIAS_NAME }, { type: Type.Number }];

function filterInterestingTypes(types: TypeType[]) {
  // Exclude type aliases that's not of interest
  let filteredTypes = types.filter(
    type => type.type !== Type.TypeAlias || type.alias in dataTypes || type.alias === ALL_TYPE_ALIAS_NAME,
  );

  // Those excluded type aliases need to resolve to string
  if (filteredTypes.length < types.length && filteredTypes.every(type => type.type !== Type.String)) {
    filteredTypes.push({ type: Type.String });
  }

  return filteredTypes;
}

function unions(types: TypeType[]) {
  const unions = types.sort(({ type: a }, { type: b }) => a - b).map(type => {
    switch (type.type) {
      case Type.String:
        return 'string';
      case Type.Number:
        return 'number';
      case Type.Literal:
        return quote(type.literal);
      case Type.TypeAlias:
        return typeAliasName(type.alias);
      case Type.Length:
        return 'TLength';
    }
  });

  return unions;
}

function generics(hasLength: boolean) {
  return hasLength ? `<${GENERIC_LENGTH}>` : '';
}

function lengthInList(types: TypeType[]) {
  return !types.every(type => {
    if (type.type === Type.Length) {
      return false;
    }
    if (type.type === Type.TypeAlias && type.alias in dataTypes && lengthInList(dataTypes[type.alias])) {
      return false;
    }
    return true;
  });
}

function typeAliasName(name: string) {
  return toPascalCase(name) + generics(name in dataTypes && lengthInList(dataTypes[name]));
}

export function typeAlias(name: string, types: TypeType[]) {
  return `type ${typeAliasName(name)} = ${unions(filterInterestingTypes(types)).join(' | ')};`;
}

function lengthInPropertyType(name: string) {
  return ![standardProperties, vendorPrefixedProperties].every(properties => {
    if (name in properties) {
      return !lengthInList(properties[name]);
    }
    return true;
  });
}

function isStringType(types: TypeType[]) {
  return types.every(type => type.type === Type.String);
}

function isNumberType(types: TypeType[]) {
  return types.every(type => type.type === Type.Number);
}

function isStringPropertyType(name: string) {
  return [standardProperties, vendorPrefixedProperties].every(properties => {
    if (name in properties) {
      return isStringType(filterInterestingTypes(properties[name]));
    }
    return true;
  });
}

function isNumberPropertyType(name: string) {
  return [standardProperties, vendorPrefixedProperties].every(properties => {
    if (name in properties) {
      return isNumberType(filterInterestingTypes(properties[name]));
    }
    return true;
  });
}

function propertyTypeName(name: string) {
  return `${toPascalCase(name)}Property${generics(lengthInPropertyType(name))}`;
}

function propertyType(name: string, interestingTypes: TypeType[]) {
  return `type ${propertyTypeName(name)} = ${unions(interestingTypes).join(' | ')};`;
}

function propertyName(name: string) {
  return `${toCamelCase(name)}`;
}

export function property(name: string, fallback = false) {
  let type = isStringPropertyType(name)
    ? ALL_STRING_TYPE_ALIAS_NAME
    : isNumberPropertyType(name) ? ALL_NUMBER_TYPE_ALIAS_NAME : propertyTypeName(name);

  if (fallback) {
    type += ` | ${type}[]`;
  }

  return `${propertyName(name)}?: ${type};`;
}

export default function create() {
  const lengthGeneric = `${GENERIC_LENGTH} = string`;

  let output = `export as namespace ${NAMESPACE};`;

  output += EOL + EOL;

  output += `export interface ${INTERFACE_STANDARD_PROPERTIES}<${lengthGeneric}> {`;

  for (const name in standardProperties) {
    output += property(name);
  }

  // End of Properties interface
  output += '}';

  output += EOL + EOL;

  output += `export interface ${INTERFACE_STANDARD_PROPERTIES_FALLBACK}<${lengthGeneric}> {`;

  for (const name in standardProperties) {
    output += property(name, true);
  }

  // End of Properties interface
  output += '}';

  output += EOL + EOL;

  output += `export interface ${INTERFACE_VENDOR_PROPERTIES}<${lengthGeneric}> {`;

  for (const name in vendorPrefixedProperties) {
    output += property(name);
  }

  // End of VendorProperties interface
  output += '}';

  output += EOL + EOL;

  output += `export interface ${INTERFACE_VENDOR_PROPERTIES_FALLBACK}<${lengthGeneric}> {`;

  for (const name in vendorPrefixedProperties) {
    output += property(name, true);
    output += EOL + EOL;
  }

  // End of VendorProperties interface
  output += '}';

  output += EOL + EOL;

  output += `export interface ${INTERFACE_ALL_PROPERTIES}<${lengthGeneric}> extends ${INTERFACE_STANDARD_PROPERTIES}<${GENERIC_LENGTH}>, ${INTERFACE_VENDOR_PROPERTIES}<${GENERIC_LENGTH}> {}`;

  output += EOL + EOL;

  output += `export interface ${INTERFACE_ALL_PROPERTIES_FALLBACK}<${lengthGeneric}> extends ${INTERFACE_STANDARD_PROPERTIES_FALLBACK}<${GENERIC_LENGTH}>, ${INTERFACE_VENDOR_PROPERTIES_FALLBACK}<${GENERIC_LENGTH}> {}`;

  output += EOL + EOL;

  output += _export(typeAlias(TYPE_PSEUDOS, pseudos));

  output += EOL + EOL;

  for (const name in standardProperties) {
    const interestingTypes = filterInterestingTypes(standardProperties[name]);
    if (!isStringType(interestingTypes) && !isNumberType(interestingTypes)) {
      output += propertyType(name, [allTypeAlias, ...interestingTypes]);
      output += EOL + EOL;
    }
  }

  for (const name in vendorPrefixedProperties) {
    const interestingTypes = filterInterestingTypes(vendorPrefixedProperties[name]);
    if (!isStringType(interestingTypes) && !isNumberType(interestingTypes)) {
      output += propertyType(name, [allTypeAlias, ...interestingTypes]);
      output += EOL + EOL;
    }
  }

  output += typeAlias(ALL_TYPE_ALIAS_NAME, all);

  output += EOL + EOL;

  output += typeAlias(ALL_STRING_TYPE_ALIAS_NAME, allString);

  output += EOL + EOL;

  output += typeAlias(ALL_NUMBER_TYPE_ALIAS_NAME, allNumber);

  output += EOL + EOL;

  // Data types
  for (const name in dataTypes) {
    output += typeAlias(name, dataTypes[name]);
    output += EOL + EOL;
  }

  return output;
}
