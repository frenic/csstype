import { Combinator, combinators, Component, componentData, componentGroupData, Entity, EntityType } from './parser';

const importsCache: { [cssPath: string]: MDN.PropertiesCompat | null } = {};

export function getCompat(data: { __compat: MDN.Compat }): MDN.Compat {
  return data.__compat;
}

export function getSupport(support: MDN.Support | MDN.Support[]): MDN.Support[] {
  return Array.isArray(support) ? support : [support];
}

export function getAtRuleData(name: string): MDN.CompatData | null {
  const data = getData('at-rules/' + name);

  if (data) {
    return data.css['at-rules'][name];
  }

  return null;
}

export function getPropertyData(name: string): MDN.CompatData | null {
  const data = getData('properties/' + name);

  if (data) {
    return data.css.properties[name];
  }

  return null;
}

export function getSelectorsData(name: string): MDN.CompatData | null {
  const data = getData('selectors/' + name);

  if (data) {
    return data.css.selectors[name];
  }

  return null;
}

export function getTypesData(name: string): MDN.CompatData | null {
  const data = getData('types/' + name);

  if (data) {
    return data.css.types[name];
  }

  return null;
}

function getData(cssPath: string): any {
  if (cssPath in importsCache) {
    return importsCache[cssPath];
  }

  try {
    return (importsCache[cssPath] = require(`mdn-browser-compat-data/css/${cssPath}.json`));
  } catch {
    return (importsCache[cssPath] = null);
  }
}

export function compatNames(compat: MDN.Compat, name: string, onlyRemoved = false): string[] {
  const properties: string[] = [];

  let browser: MDN.Browsers;
  for (browser in compat.support) {
    const support = compat.support[browser];

    for (const version of getSupport(support)) {
      // Assume that the version has the property implemented if `null`
      const isAdded = !!version.version_added || version.version_added === null;
      const isRemoved = !!version.version_removed;

      if (isAdded && isRemoved === onlyRemoved) {
        if (version.prefix) {
          properties.push(version.prefix + name);
        }
        if (version.alternative_name) {
          properties.push(version.alternative_name);
        }
      }
    }
  }

  return properties;
}

export function compatSyntax(data: MDN.CompatData, entities: EntityType[]): EntityType[] {
  const compatEntities: EntityType[] = [];

  for (const entity of entities) {
    if (entity.entity === Entity.Component) {
      switch (entity.component) {
        case Component.Keyword: {
          if (entity.value in data && !isAddedBySome(getCompat(data[entity.value]))) {
            // The keyword needs to be added by some browsers so we remove previous
            // combinator and skip this keyword
            compatEntities.pop();
            continue;
          }

          const alternatives = alternativeKeywords(data, entity.value);

          if (alternatives.length > 0) {
            const alternativeEntities: EntityType[] = [entity];

            for (const keyword of alternatives) {
              alternativeEntities.push(combinators[Combinator.SingleBar], componentData(Component.Keyword, keyword));
            }

            compatEntities.push(componentGroupData(alternativeEntities));
            continue;
          }
          break;
        }
        case Component.Group: {
          compatEntities.push(componentGroupData(compatSyntax(data, entity.entities), entity.multiplier));
          continue;
        }
      }
    }

    compatEntities.push(entity);
  }

  return compatEntities;
}

function alternativeKeywords(data: MDN.CompatData, value: string): string[] {
  const alternatives: string[] = [];

  if (value in data) {
    const compat = getCompat(data[value]);

    let browser: MDN.Browsers;
    for (browser in compat.support) {
      const support = compat.support[browser];

      for (const version of Array.isArray(support) ? support : [support]) {
        const isCurrent =
          // Assume that the version has the value implemented if `null`
          !!version.version_added || version.version_added === null;

        if (isCurrent) {
          if (version.prefix && !alternatives.includes(version.prefix + value)) {
            alternatives.push(version.prefix + value);
          }
          if (version.alternative_name && !alternatives.includes(version.alternative_name)) {
            alternatives.push(version.alternative_name);
          }
        }
      }
    }
  }

  return alternatives;
}

export function isDeprecated(compat: MDN.Compat) {
  // Assume not deprecated if is status i missing
  return !!compat.status && compat.status.deprecated;
}

export function isAddedBySome(compat: MDN.Compat): boolean {
  let browser: MDN.Browsers;
  for (browser in compat.support) {
    const support = compat.support[browser];

    for (const version of getSupport(support)) {
      // Assume that the version has the property implemented if `null`
      if (!!version.version_added || version.version_added === null) {
        return true;
      }
    }
  }

  return false;
}

export function alternativeSelectors(selector: string): string[] {
  const alternatives: string[] = [];

  // Pseudo without ':'
  const colons = ':'.repeat(selector.lastIndexOf(':') + 1);
  const name = selector.slice(colons.length);
  const compatibilityData = getSelectorsData(name);

  if (compatibilityData) {
    const compat = getCompat(compatibilityData);

    let browser: MDN.Browsers;
    for (browser in compat.support) {
      const support = compat.support[browser];

      for (const version of getSupport(support)) {
        // Assume that the version has the property implemented if `null`
        const isAdded = !!version.version_added || version.version_added === null;

        if (isAdded) {
          if (version.prefix) {
            alternatives.push(colons + version.prefix + name);
          }
          if (version.alternative_name) {
            alternatives.push(version.alternative_name);
          }
        }
      }
    }

    return alternatives;
  }

  return alternatives;
}
