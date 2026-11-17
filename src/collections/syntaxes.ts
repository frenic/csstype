import { Identifier } from '@mdn/browser-compat-data';
import { properties as rawProperties, syntaxes as rawSyntaxes } from '../data/css';
import { properties as legacyProperties, syntaxes as legacySyntaxes } from '../data/legacy';
import { IExtendedProperty, properties as patchedProperties, syntaxes as patchedSyntaxes } from '../data/patches';
import { properties as rawSvgProperties, syntaxes as rawSvgSyntaxes } from '../data/svg';
import parse from '../syntax/parser';
import typer, { hasType } from '../syntax/typer';
import { getPropertyData, getTypesData } from '../utils/compat';
import { error, warn } from '../utils/logger';
import { createPropertyDataTypeResolver, resolveDataTypes } from './data-types';

export function getProperties() {
  const properties: { [property: string]: IExtendedProperty } = {};

  for (const name in rawProperties) {
    properties[name] = {
      ...rawProperties[name],
      syntax: getPropertySyntax(name),
      shorthand:
        name in patchedProperties && typeof patchedProperties[name].shorthand === 'boolean'
          ? patchedProperties[name].shorthand
          : Array.isArray(rawProperties[name].longhands),
    };
  }

  for (const name in patchedProperties) {
    if (!(name in rawProperties)) {
      properties[name] = patchedProperties[name];
    }
  }

  // Local legacy properties webref lacks (vendor/obsolete features BCD keeps)
  for (const name in legacyProperties) {
    if (!(name in properties)) {
      properties[name] = { syntax: legacyProperties[name].syntax, shorthand: false };
    }
  }

  return properties;
}

export function isProperty(name: string) {
  return (
    name in rawProperties ||
    name in rawSvgProperties ||
    name in legacyProperties ||
    (name in patchedProperties && !!patchedProperties[name].syntax)
  );
}

export function isSyntax(name: string) {
  return (
    name in rawSyntaxes ||
    name in legacySyntaxes ||
    name in rawSvgSyntaxes ||
    (name in patchedSyntaxes && !!patchedSyntaxes[name].syntax)
  );
}

const validatedPropertySyntaxes: string[] = [];

export function getPropertySyntax(name: string) {
  const patch = patchedProperties[name];
  const rawSyntax = rawProperties[name] && rawProperties[name].syntax;
  // Webref vendor aliases without a syntax (e.g. `-webkit-box-align`) and
  // legacy-only properties get their syntax from local legacy data
  const legacySyntax = legacyProperties[name] && legacyProperties[name].syntax;

  if (patch && patch.syntax) {
    if (rawSyntax && !validatedPropertySyntaxes.includes(name)) {
      const compatibilityData = getPropertyData(name);

      if (compatibilityData && !validatePatch(compatibilityData, rawSyntax, patch.syntax)) {
        error(
          'The patched property `%s` did not patch the source with anything or was incomplete compared to source',
          name,
        );
      }

      validatedPropertySyntaxes.push(name);
    }

    return patch.syntax;
  }

  if (!rawSyntax && legacySyntax) {
    return legacySyntax;
  }

  if (!rawSyntax) {
    warn('Syntax for property `%s` is missing', name);
  }

  return rawSyntax;
}

const validatedSyntaxes: string[] = [];

export function getSyntax(name: string) {
  const patch = patchedSyntaxes[name];

  const rawSyntax =
    (name in rawSyntaxes && rawSyntaxes[name].syntax) ||
    (name in legacySyntaxes && legacySyntaxes[name].syntax) ||
    (rawSvgSyntaxes[name] && rawSvgSyntaxes[name].syntax);

  if (patch && patch.syntax) {
    if (rawSyntax && !validatedSyntaxes.includes(name)) {
      const compatibilityData = getTypesData(name);

      if (compatibilityData && !validatePatch(compatibilityData, rawSyntax, patch.syntax)) {
        error(
          'The patched syntax `%s` did not patch the source with anything or was incomplete compared to source',
          name,
        );
      }

      validatedSyntaxes.push(name);
    }

    return patch.syntax;
  }

  if (!rawSyntax) {
    warn('Syntax for `%s` is missing', name);
  }

  return rawSyntax;
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
