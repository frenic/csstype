declare namespace WebRef {
  /**
   * Every feature in WebRef CSS has these common fields.
   */
  interface BaseFeature {
    name: string;
    href?: string;
    syntax?: string;
  }

  /**
   * CSS properties.
   */
  interface PropertyFeature extends BaseFeature {
    legacyAliasOf?: string;
    styleDeclaration?: string[];
    initial?: string;
    appliesTo?: string;
    inherited?: string;
    percentages?: string;
    computedValue?: string;
    animationType?: string;
    canonicalOrder?: string;
    media?: string;
    logicalPropertyGroup?: string;
    longhands?: string[];
    resetLonghands?: string[];
  }

  /**
   * At-rule descriptors (e.g. `@font-face { src: ... }`).
   */
  interface DescriptorFeature extends BaseFeature {
    for?: string;
    type?: string;
    initial?: string;
  }

  /**
   * At-rules (e.g. `@media`, `@font-face`). Names include the `@`.
   */
  interface AtRuleFeature extends BaseFeature {
    prose?: string;
    for?: string;
    descriptors?: DescriptorFeature[];
  }

  /**
   * CSS functions. Names include the `()`, e.g. `path()`.
   */
  interface FunctionFeature extends BaseFeature {
    prose?: string;
    for?: string[];
  }

  /**
   * CSS types. Names are without the `<>`, e.g. `color`.
   */
  interface TypeFeature extends BaseFeature {
    prose?: string;
    for?: string[];
  }

  /**
   * CSS selectors. Names include the colons, e.g. `:hover`.
   */
  interface SelectorFeature extends BaseFeature {
    prose?: string;
  }

  /**
   * The raw contents of `@webref/css/css.json`: arrays per category.
   */
  interface CSSList {
    atrules: AtRuleFeature[];
    functions: FunctionFeature[];
    properties: PropertyFeature[];
    selectors: SelectorFeature[];
    types: TypeFeature[];
  }
}

declare module '@webref/css/css.json' {
  const css: WebRef.CSSList;
  export default css;
}
