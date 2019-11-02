import { composeCommentBlock } from './comment';
import {
  compatNames,
  compatSyntax,
  getCompats,
  getPropertyData,
  getTypesData,
  isAddedBySome,
  isDeprecated,
} from './compat';
import { getProperties, getPropertySyntax } from './data';
import { createPropertyDataTypeResolver, resolveDataTypes } from './data-types';
import { properties as rawSvgProperties } from './data/svg';
import { warn } from './logger';
import parse from './parser';
import typing, { ResolvedType } from './typer';

const ALL = 'all';

const IGNORES = [
  // Custom properties
  '--*',
  // We define this manually
  ALL,
];

const REGEX_VENDOR_PROPERTY = /^-/;

interface IProperty {
  name: string;
  vendor: boolean;
  shorthand?: boolean;
  obsolete: boolean;
  comment: () => string | undefined;
  types: ResolvedType[];
}

const propertiesData = getProperties();

const getGlobalCompatibilityData = async () => {
  const data = await getTypesData('global_keywords');

  if (!data) {
    throw new Error('Compatibility data for CSS-wide keywords is missing or may have been moved');
  }

  return data;
};

// The CSS-wide keywords are identical to the `all` property
// https://www.w3.org/TR/2016/CR-css-cascade-4-20160114/#all-shorthand
export let getGlobals = async (): Promise<ResolvedType[]> => {
  const dataTypes = await resolveDataTypes(
    typing(compatSyntax(await getGlobalCompatibilityData(), parse(await getPropertySyntax(ALL)))),
  );

  // Cache
  getGlobals = () => Promise.all(dataTypes);

  return dataTypes;
};

const htmlPropertiesMap: { [name: string]: IProperty } = {};

const svgPropertiesMap: { [name: string]: IProperty } = {};

export let getHtmlProperties = async () => {
  const propertiesMap = await propertiesData;
  const allPropertyData = await getPropertyData(ALL);

  let getAllComment = () => {
    const comment = composeCommentBlock(allPropertyData, propertiesMap[ALL]);
    getAllComment = () => comment;
    return comment;
  };

  htmlPropertiesMap[ALL] = {
    name: 'all',
    vendor: false,
    shorthand: true,
    obsolete: false,
    comment: () => getAllComment(),
    types: [],
  };

  function filterMissingProperties(names: string[]) {
    // Filter only those which isn't defined in MDN data
    return names.filter(name => !(name in propertiesMap));
  }

  for (const originalName in propertiesMap) {
    if (IGNORES.includes(originalName)) {
      continue;
    }

    const data = propertiesMap[originalName];

    // Default values
    let entities = parse(await getPropertySyntax(originalName));
    let currentNames: string[] = [originalName];
    let obsoleteNames: string[] = [];
    let deprecated = isDeprecated(data);

    const compatibilityData = await getPropertyData(originalName);

    if (compatibilityData) {
      const compats = getCompats(compatibilityData);

      if (compats.every(compat => !isAddedBySome(compat))) {
        // The property needs to be added by some browsers
        continue;
      }

      entities = compatSyntax(compatibilityData, entities);
      currentNames = currentNames.concat(
        ...compats.map(compat => filterMissingProperties(compatNames(compat, originalName))),
      );
      obsoleteNames = obsoleteNames.concat(
        ...compats.map(compat => filterMissingProperties(compatNames(compat, originalName, true))),
      );
      deprecated = compats.every(compat => isDeprecated(data, compat));
    }

    if (deprecated) {
      // Move all property names to obsolete
      obsoleteNames = obsoleteNames.concat(currentNames);
      currentNames = [];
    }

    const types = await resolveDataTypes(typing(entities), createPropertyDataTypeResolver(compatibilityData));

    // Remove duplicates
    for (const name of new Set(currentNames)) {
      const vendor = isVendorProperty(name);

      let getComment = () => {
        const comment = composeCommentBlock(compatibilityData, data, vendor);
        getComment = () => comment;
        return comment;
      };

      htmlPropertiesMap[name] = mergeRecurrent(name, {
        name: originalName,
        vendor,
        shorthand: data.shorthand,
        obsolete: false,
        comment: () => getComment(),
        types,
      });
    }

    // Remove duplicates
    for (const name of new Set(obsoleteNames)) {
      const vendor = isVendorProperty(name);

      let getComment = () => {
        const comment = composeCommentBlock(compatibilityData, data, vendor, true);
        getComment = () => comment;
        return comment;
      };

      htmlPropertiesMap[name] = mergeRecurrent(name, {
        name: originalName,
        vendor,
        shorthand: data.shorthand,
        obsolete: true,
        comment: () => getComment(),
        types,
      });
    }
  }

  getHtmlProperties = () => Promise.resolve(htmlPropertiesMap);

  return htmlPropertiesMap;
};

export let getSvgProperties = async () => {
  for (const name in rawSvgProperties) {
    const compatibilityData = await getPropertyData(name);
    const syntax = rawSvgProperties[name].syntax;
    if (syntax) {
      svgPropertiesMap[name] = {
        name,
        vendor: false,
        shorthand: false,
        obsolete: false,
        comment: () => undefined,
        types: await resolveDataTypes(typing(parse(syntax)), createPropertyDataTypeResolver(compatibilityData)),
      };
    }
  }

  // Cache
  getSvgProperties = () => Promise.resolve(svgPropertiesMap);

  return svgPropertiesMap;
};

export function isVendorProperty(name: string) {
  return REGEX_VENDOR_PROPERTY.test(name);
}

function mergeRecurrent(name: string, property: IProperty) {
  if (name in htmlPropertiesMap) {
    const current = htmlPropertiesMap[name];

    if (current.name !== property.name) {
      warn('Property `%s` resolved by `%s` was duplicated by `%s`', name, property.name, current.name);
    }

    return {
      ...current,
      // Only mark as obsolete if it's mutual
      obsolete: current.obsolete && property.obsolete,
    };
  }

  return property;
}
