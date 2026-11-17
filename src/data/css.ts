// The single read of `@webref/css` data. The package ships one big `css.json`,
// so we read it synchronously (like the T07 tools did) instead of using the
// async `listAll()` and refactoring the generator to ESM.
import rawCss from '@webref/css/css.json';

// Indexed by name. A handful of features have different definitions for
// different `for` scopes; the 6 scoped duplicates are all functions, which the
// typer turns into `string` anyway, so keeping the first definition each is fine.
export const properties: { [name: string]: WebRef.PropertyFeature } = {};
export const atrules: { [name: string]: WebRef.AtRuleFeature } = {};
export const selectors: { [name: string]: WebRef.SelectorFeature } = {};

// Types and functions merged into the old mdn-data `syntaxes` shape.
export const syntaxes: { [name: string]: WebRef.TypeFeature | WebRef.FunctionFeature } = {};

for (const property of rawCss.properties) {
  if (!(property.name in properties)) {
    properties[property.name] = property;
  }
}

for (const atrule of rawCss.atrules) {
  if (!(atrule.name in atrules)) {
    atrules[atrule.name] = atrule;
  }
}

for (const selector of rawCss.selectors) {
  if (!(selector.name in selectors)) {
    selectors[selector.name] = selector;
  }
}

for (const type of [...rawCss.types, ...rawCss.functions]) {
  if (!(type.name in syntaxes)) {
    syntaxes[type.name] = type;
  }
}
