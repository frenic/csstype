import type, { Type, TypeType } from './typer';
import dataTypes from './data-types';
import { all, standardProperties, vendorPrefixedProperties } from './properties';

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

// function _export(declaration: string): string {
//   return `export ${declaration}`;
// }

const ALL_TYPE_ALIAS_NAME = 'all';
const allTypeAlias: TypeType = { type: Type.TypeAlias, alias: ALL_TYPE_ALIAS_NAME };

export function unions(originalTypes: TypeType[]) {
  let types = [...originalTypes];

  // Exclude type aliases that's not of interest
  types = types.filter(
    type => type.type !== Type.TypeAlias || type.alias in dataTypes || type.alias === ALL_TYPE_ALIAS_NAME,
  );

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
        return typeAliasName(type.alias);
    }
  });

  return unions;
}

function typeAliasName(name: string) {
  return toPascalCase(name);
}

export function typeAlias(name: string, types: TypeType[]) {
  return `type ${typeAliasName(name)} = ${unions(types).join(' | ')};`;
}

function propertyName(name: string) {
  return `${toCamelCase(name)}`;
}

export function property(name: string, types: TypeType[]) {
  return `${propertyName(name)}?: ${unions(types).join(' | ')};`;
}

export default function create() {
  let output = `export as namespace ${NAMESPACE};`;

  output += `export interface ${INTERFACE_STANDARD_PROPERTIES} {`;

  for (const name in standardProperties) {
    output += property(name, [allTypeAlias, ...standardProperties[name]]);
  }

  // End of Properties interface
  output += '}';

  output += `export interface ${INTERFACE_VENDOR_PROPERTIES} {`;

  for (const name in vendorPrefixedProperties) {
    output += property(name, [allTypeAlias, ...vendorPrefixedProperties[name]]);
  }

  // End of VendorProperties interface
  output += '}';

  output += `export interface ${INTERFACE_ALL_PROPERTIES} extends ${INTERFACE_STANDARD_PROPERTIES}, ${INTERFACE_VENDOR_PROPERTIES} {}`;

  output += typeAlias(ALL_TYPE_ALIAS_NAME, all);

  // Data types
  for (const name in dataTypes) {
    output += typeAlias(name, dataTypes[name]);
  }

  return output;
}
