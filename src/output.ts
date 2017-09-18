import type, { Type, TypeType } from './typer';
import dataTypes from './data-types';
import { standardProperties, vendorPrefixedProperties } from './properties';

const REGEX_LEADING_LETTER = /^(\w)/;
const REGEX_KEBAB_SEPARATOR = /-(\w)/g;
const REGEX_VENDOR_PREFIXED = /^-(\w)/;

const NAMESPACE = 'CSS';
const INTERFACE_STANDARD_PROPERTIES = 'StandardProperties';
const INTERFACE_VENDOR_PROPERTIES = 'VendorProperties';
const INTERFACE_ALL_PROPERTIES = 'Properties';

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

function internalTypeAliasName(name: string) {
  return `T${toPascalCase(name)}`;
}

function externalTypeAliasName(name: string) {
  return `${toPascalCase(name)}`;
}

export function typeAlias(name: string, originalTypes: TypeType[]) {
  let types = [...originalTypes];

  // Exclude type aliases that's not of interest
  types = types.filter(type => type.type !== Type.TypeAlias || type.alias in dataTypes);

  // Those excluded type aliases need to resolve to string
  if (types.length < originalTypes.length && types.every(type => type.type !== Type.String)) {
    types.push({ type: Type.String });
  }

  const unions = types.sort(({ type: a }, { type: b }) => a - b).map(type => {
    switch (type.type) {
      case Type.String:
        return 'string';
      case Type.Number:
        return 'number';
      case Type.Literal:
        return quote(type.literal);
      case Type.TypeAlias:
        return type.alias in dataTypes ? internalTypeAliasName(type.alias) : originalTypes.includes;
    }
  });

  return `type ${name} = ${unions.join(' | ')};`;
}

function propertyName(name: string) {
  return `${toCamelCase(name)}`;
}

function property(leftHand: string, rightHand: string) {
  return `${leftHand}?: ${rightHand};`;
}

export default function create() {
  let output = `declare namespace ${NAMESPACE} {`;

  // Standard CSS properties
  for (const name in standardProperties) {
    output += _export(typeAlias(externalTypeAliasName(name), standardProperties[name]));
  }

  output += `export interface ${INTERFACE_STANDARD_PROPERTIES} {`;

  for (const name in standardProperties) {
    output += property(propertyName(name), externalTypeAliasName(name));
  }

  // End of Properties interface
  output += '}';

  // Vendor prefixed properties
  for (const name in vendorPrefixedProperties) {
    output += _export(typeAlias(externalTypeAliasName(name), vendorPrefixedProperties[name]));
  }

  output += `export interface ${INTERFACE_VENDOR_PROPERTIES} {`;

  for (const name in vendorPrefixedProperties) {
    output += property(propertyName(name), externalTypeAliasName(name));
  }

  // End of VendorProperties interface
  output += '}';

  output += `export interface ${INTERFACE_ALL_PROPERTIES} extends ${INTERFACE_STANDARD_PROPERTIES}, ${INTERFACE_VENDOR_PROPERTIES} {}`;

  // Data types
  for (const name in dataTypes) {
    output += typeAlias(internalTypeAliasName(name), dataTypes[name]);
  }

  // End of CSS namespace
  output += '}';

  return output;
}
