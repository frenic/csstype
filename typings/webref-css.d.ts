declare module '@webref/css' {
  /**
   * Every feature in WebRef CSS has these common fields.
   */
  export interface BaseFeature {
    name: string;
    href: string;
    syntax?: string;
  }

  /**
   * CSS Properties
   */
  export interface PropertyFeature extends BaseFeature {
    styleDeclaration?: string[];
    newValues?: string[];
    percentages?: string;
    animationType?: string;
    initial?: string;
    inherited?: boolean;
    computed?: string;
    order?: string;
    appliesTo?: string;
    media?: string;
    canonicalOrder?: string;
  }

  /**
   * @rules descriptors (e.g. @font-face { src: ... })
   */
  export interface DescriptorFeature {
    name: string;
    syntax?: string;
    href: string;
    initial?: string;
    inherited?: boolean;
    percentages?: string;
    animationType?: string;
  }

  /**
   * @rules (e.g. @media, @font-face)
   */
  export interface AtRuleFeature extends BaseFeature {
    descriptors?: DescriptorFeature[];
    value?: string;
  }

  /**
   * CSS Functions
   */
  export interface FunctionFeature extends BaseFeature {
    prose?: string;
    for?: string[];
  }

  /**
   * CSS Types
   */
  export interface TypeFeature extends BaseFeature {
    for?: string[];
  }

  /**
   * CSS Selectors
   */
  export interface SelectorFeature extends BaseFeature {
    syntax?: string;
  }

  /**
   * listAll() returns arrays.
   */
  export interface CSSIndex {
    atrules: AtRuleFeature[];
    functions: FunctionFeature[];
    properties: PropertyFeature[];
    selectors: SelectorFeature[];
    types: TypeFeature[];
  }

  /**
   * index() returns objects keyed by name.
   * These are *not* loose dictionaries; WebRef emits fixed keys.
   */
  export interface CSSIndexMap {
    atrules: Record<string, AtRuleFeature>;
    functions: Record<string, FunctionFeature>;
    properties: Record<string, PropertyFeature>;
    selectors: Record<string, SelectorFeature>;
    types: Record<string, TypeFeature>;
  }

  /**
   * Returns arrays for each category.
   */
  export function listAll(): Promise<CSSIndex>;

  /**
   * Returns objects keyed by name for fast lookup.
   */
  export function index(): Promise<CSSIndexMap>;
}
