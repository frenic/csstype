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

export function compatProperties(name: string) {
  const data = getData('properties/' + name);

  const properties = [];

  if (data) {
    const compat = data.css.properties[name].__compat;

    let browser: MDN.Browsers;
    for (browser in compat.support) {
      const support = compat.support[browser];

      for (const version of Array.isArray(support) ? support : [support]) {
        const isImplemented =
          // Assume that the version has the property implemented
          (version.version_added || version.version_added === null) &&
          // Make sure to ignore versions where the property has been removed (should it be doing this?)
          !version.version_removed;

        if (isImplemented) {
          if (version.prefix) {
            properties.push(version.prefix + name);
          } else if (version.alternative_name) {
            properties.push(version.alternative_name);
          }
        }
      }
    }
  }

  return properties;
}
