import { Combinator, combinatorData, Component, componentData, componentGroupData, Entity, EntityType } from './parser';

const importsCache: { [cssPath: string]: MDN.PropertiesCompat | null } = {};

function getData(cssPath: string): MDN.PropertiesCompat | null {
  if (cssPath in importsCache) {
    return importsCache[cssPath];
  }

  try {
    return (importsCache[cssPath] = require(`mdn-browser-compat-data/css/${cssPath}.json`));
  } catch {
    return (importsCache[cssPath] = null);
  }
}

export function compatProperties(name: string, onlyObsolete = false): string[] {
  const data = getData('properties/' + name);

  const properties = [];

  if (data) {
    const compat = data.css.properties[name].__compat;

    let browser: MDN.Browsers;
    for (browser in compat.support) {
      const support = compat.support[browser];

      for (const version of Array.isArray(support) ? support : [support]) {
        // Assume that the version has the property implemented if `null`
        const hasBeenAdded = !!version.version_added || version.version_added === null;
        const isObsolete = isDeprecated(name) || !!version.version_removed;

        if (hasBeenAdded && isObsolete === onlyObsolete) {
          const compatName = version.prefix ? version.prefix + name : version.alternative_name;

          if (compatName) {
            properties.push(compatName);
          }
        }
      }
    }
  }

  return properties;
}

export function isDeprecated(name: string) {
  const data = getData('properties/' + name);

  if (data) {
    const status = data.css.properties[name].__compat.status;

    // Assume not deprecated if is status i missing
    return !!status && status.deprecated;
  }

  return null;
}

export function compatSyntax(name: string, entities: EntityType[]): EntityType[] {
  const compatEntities: EntityType[] = [];

  for (const entity of entities) {
    if (entity.entity === Entity.Component) {
      switch (entity.component) {
        case Component.Keyword: {
          const alternatives = alternativeKeywords(name, entity.value);

          if (alternatives.length > 0) {
            const alternativeEntities: EntityType[] = [entity];

            for (const keyword of alternatives) {
              alternativeEntities.push(combinatorData(Combinator.SingleBar), componentData(Component.Keyword, keyword));
            }

            compatEntities.push(componentGroupData(alternativeEntities));
            continue;
          }
          break;
        }
        case Component.Group: {
          compatEntities.push(componentGroupData(compatSyntax(name, entity.entities), entity.multiplier));
          continue;
        }
        case Component.DataType: {
          // TODO
        }
      }
    }

    compatEntities.push(entity);
  }

  return compatEntities;
}

function alternativeKeywords(name: string, value: string): string[] {
  const data = getData('properties/' + name);
  const alternatives: string[] = [];

  if (data) {
    const property = data.css.properties[name];

    if (value in property) {
      const combat = property[value].__compat;

      let browser: MDN.Browsers;
      for (browser in combat.support) {
        const support = combat.support[browser];

        for (const version of Array.isArray(support) ? support : [support]) {
          const isCurrent =
            // Assume that the version has the value implemented if `null`
            (!!version.version_added || version.version_added === null) &&
            // Assume that the version hasn't removed value if `null`
            !version.version_removed;

          if (isCurrent) {
            const compatName = version.prefix ? version.prefix + value : version.alternative_name;

            if (compatName) {
              alternatives.push(compatName);
            }
          }
        }
      }
    }
  }

  return alternatives;
}
