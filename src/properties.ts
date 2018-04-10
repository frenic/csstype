import * as properties from 'mdn-data/css/properties.json';
import * as syntaxes from 'mdn-data/css/syntaxes.json';
import { compatPropertyNames, compatPropertySyntax, isDeprecated } from './compat';
import { resolveDataTypes } from './data-types';
import { properties as rawSvgProperties, syntaxes as svgSyntaxes } from './data/svg';
import parse from './parser';
import typing, { ResolvedType, Type } from './typer';

const IGNORES = [
  // Custom properties
  '--*',
  // We define this manually
  'all',
];

const REGEX_VENDOR_PROPERTY = /^-/;

interface IProperty {
  name: string;
  types: ResolvedType[];
}

// The CSS-wide keywords are identical to the `all` property
// https://www.w3.org/TR/2016/CR-css-cascade-4-20160114/#all-shorthand
export const globals: ResolvedType[] = resolveDataTypes(typing(parse(properties.all.syntax)));

export const standardLonghandProperties: { [name: string]: IProperty } = {};
export const standardShorthandProperties: { [name: string]: IProperty } = {
  // Empty so that it only receives CSS-wide keywords
  all: {
    name: 'all',
    types: [],
  },
};
export const vendorPrefixedLonghandProperties: { [name: string]: IProperty } = {};
export const vendorPrefixedShorthandProperties: { [name: string]: IProperty } = {};
export const obsoleteProperties: { [name: string]: IProperty } = {};
export const svgProperties: { [name: string]: IProperty } = {};

for (const originalName in properties) {
  if (IGNORES.includes(originalName)) {
    continue;
  }

  const property: IProperty = {
    name: originalName,
    types: resolveDataTypes(
      typing(compatPropertySyntax(originalName, parse(properties[originalName].syntax))),
      createDataTypeResolver(originalName),
    ),
  };

  if (!isDeprecated(originalName)) {
    const currentPropertyNames = [originalName, ...filterMissingProperties(compatPropertyNames(originalName))];

    for (const name of currentPropertyNames) {
      const isShorthand = Array.isArray(properties[originalName].computed);

      if (isVendorProperty(name)) {
        if (isShorthand) {
          vendorPrefixedShorthandProperties[name] = property;
        } else {
          vendorPrefixedLonghandProperties[name] = property;
        }
      } else {
        if (isShorthand) {
          standardShorthandProperties[name] = property;
        } else {
          standardLonghandProperties[name] = property;
        }
      }
    }
  } else {
    obsoleteProperties[originalName] = property;
  }

  const obsoletePropertyNames = filterMissingProperties(compatPropertyNames(originalName, true));

  for (const name of obsoletePropertyNames) {
    obsoleteProperties[name] = property;
  }
}

for (const name in rawSvgProperties) {
  const syntax = rawSvgProperties[name].syntax;
  if (syntax) {
    svgProperties[name] = {
      name,
      types: resolveDataTypes(typing(parse(syntax)), createSvgDataTypeResolver(name)),
    };
  }
}

export function createDataTypeResolver(propertyName: string) {
  const resolver: (dataTypeName: string) => ResolvedType[] = dataTypeName => {
    const data = syntaxes[dataTypeName] || properties[dataTypeName];
    return data
      ? resolveDataTypes(typing(compatPropertySyntax(propertyName, parse(data.syntax))), resolver)
      : [{ type: Type.String }];
  };

  return resolver;
}

export function isVendorProperty(name: string) {
  return REGEX_VENDOR_PROPERTY.test(name);
}

export function filterMissingProperties(propertyNames: string[]) {
  // Filter only those which isn't defined in MDN data
  return propertyNames.filter(name => !(name in properties));
}

function createSvgDataTypeResolver(propertyName: string) {
  const resolver = createDataTypeResolver(propertyName);
  const svgResolver: (dataTypeName: string) => ResolvedType[] = (dataTypeName: string) =>
    dataTypeName in svgSyntaxes
      ? resolveDataTypes(typing(parse(svgSyntaxes[dataTypeName].syntax)), svgResolver)
      : resolver(dataTypeName);

  return svgResolver;
}
