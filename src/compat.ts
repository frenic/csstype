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
        // Assume that the version has the property implemented
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
