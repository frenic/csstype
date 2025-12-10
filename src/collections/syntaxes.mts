import { FunctionFeature, TypeFeature } from '@webref/css';
import { properties, functions, types } from '../data/css.mjs';
import { Identifier } from '@mdn/browser-compat-data';
import { IExtendedProperty, properties as patchedProperties, syntaxes as patchedSyntaxes } from '../data/patches.mjs';
import { properties as rawSvgProperties, syntaxes as rawSvgSyntaxes } from '../data/svg.mjs';
import parse from '../syntax/parser.mjs';
import typer, { hasType } from '../syntax/typer.mjs';
import { getPropertyData, getTypesData } from '../utils/compat.mjs';
import { error, warn } from '../utils/logger.mjs';
import { createPropertyDataTypeResolver, resolveDataTypes } from './data-types.mjs';

export function getProperties() {
  const data: { [property: string]: IExtendedProperty } = {};

  for (const property of properties) {
    data[property.name] = {
      ...property,
      syntax: getPropertySyntax(property.name),
      shorthand:
        property.name in patchedProperties && typeof patchedProperties[property.name].shorthand === 'boolean'
          ? patchedProperties[property.name].shorthand
          : Array.isArray(property.computed),
    };
  }

  for (const name in patchedProperties) {
    if (!(name in data)) {
      data[name] = patchedProperties[name];
    }
  }

  return data;
}

export function isProperty(name: string) {
  return (
    properties.some(property => property.name === name) ||
    name in rawSvgProperties ||
    (name in patchedProperties && typeof patchedProperties[name].syntax === 'string')
  );
}

export function isSyntax(name: string) {
  return (
    types.some(type => type.name === name) ||
    functions.some(fn => fn.name === name) ||
    name in rawSvgSyntaxes ||
    (name in patchedSyntaxes && typeof patchedSyntaxes[name].syntax === 'string')
  );
}

const validatedPropertySyntaxes: string[] = [];

export function getPropertySyntax(name: string) {
  const patch = patchedProperties[name];
  const property = properties.find(property => property.name === name);
  // const rawSyntax = properties.find(property => property.name === name)?.syntax;

  if (patch?.syntax) {
    if (property?.syntax && !validatedPropertySyntaxes.includes(name)) {
      const compatibilityData = getPropertyData(name);

      if (compatibilityData && !validatePatch(compatibilityData, property.syntax, patch.syntax)) {
        error(
          'The patched property `%s` did not patch the source with anything or was incomplete compared to source',
          name,
        );
      }

      validatedPropertySyntaxes.push(name);
    }

    return patch.syntax;
  }

  if (!property?.syntax) {
    warn('Syntax for property `%s` is missing', name);
  }

  return property?.syntax;
}

const validatedSyntaxes: string[] = [];

export function getSyntax(name: string) {
  const patch = patchedSyntaxes[name];

  let feature: TypeFeature | FunctionFeature | MDN.Syntax | undefined;

  feature = types.find(type => type.name === name);
  if (!feature) {
    feature = functions.find(fn => fn.name === name);
    if (!feature) {
      feature = rawSvgSyntaxes[name];
    }
  }

  if (patch && patch.syntax) {
    if (feature?.syntax && !validatedSyntaxes.includes(name)) {
      const compatibilityData = getTypesData(name);

      if (compatibilityData && !validatePatch(compatibilityData, feature.syntax, patch.syntax)) {
        error(
          'The patched syntax `%s` did not patch the source with anything or was incomplete compared to source',
          name,
        );
      }

      validatedSyntaxes.push(name);
    }

    return patch.syntax;
  }

  if (!feature?.syntax) {
    warn('Syntax for `%s` is missing', name);
  }

  return feature?.syntax;
}

async function validatePatch(compat: Identifier, sourceSyntax: string, patchSyntax: string): Promise<boolean> {
  // Dissolve all data types to check whether it already exists or not
  const dissolvedSourceTypes = resolveDataTypes(
    {},
    typer(parse(sourceSyntax)),
    Infinity,
    createPropertyDataTypeResolver(compat),
  );
  const dissolvedPatchTypes = resolveDataTypes(
    {},
    typer(parse(patchSyntax)),
    Infinity,
    createPropertyDataTypeResolver(compat),
  );

  for (const type of dissolvedSourceTypes) {
    if (!hasType(dissolvedPatchTypes, type)) {
      return false;
    }
  }

  let complements = false;
  for (const type of dissolvedPatchTypes) {
    if (!hasType(dissolvedSourceTypes, type)) {
      complements = true;
      break;
    }
  }

  return complements;
}
