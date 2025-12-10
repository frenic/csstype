import { PropertyFeature } from '@webref/css';

export interface IExtendedProperty extends Partial<PropertyFeature> {
  shorthand?: boolean;
}

export const properties: { [property: string]: IExtendedProperty } = {
  /**
   * https://drafts.csswg.org/css-overflow-3/#line-clamp
   */
  'line-clamp': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-color
   */
  'border-block-color': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-color
   */
  'border-inline-color': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-width
   */
  'border-block-style': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-width
   */
  'border-inline-style': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-block-width
   */
  'border-block-width': {
    shorthand: true,
  },
  /**
   * https://drafts.csswg.org/css-logical/#propdef-border-inline-width
   */
  'border-inline-width': {
    shorthand: true,
  },
};

export const syntaxes: { [name: string]: MDN.Syntax } = {
  // 'absolute-size': { syntax: '<string>' },
  // angle: { syntax: '<string>' },
  // 'basic-shape': { syntax: '<string>' },
  // 'counter-name': { syntax: '<string>' },
  // 'counter-style-name': { syntax: '<string>' },
  // 'custom-ident': { syntax: '<string>' },
  // 'dashed-ident': { syntax: '<string>' },
  // decibel: { syntax: '<string>' },
  // 'declaration-value': { syntax: '<string>' },
  // 'feature-tag-value': { syntax: '<string>' },
  // flex: { syntax: '<string>' },
  // 'font-src-list': { syntax: '<string>' },
  // 'font-width': { syntax: '<string>' },
  // frequency: { syntax: '<string>' },
  // gender: { syntax: '<string>' },
  // 'hex-color': { syntax: '<string>' },
  // id: { syntax: '<string>' },
  // ident: { syntax: '<string>' },
  // 'mix-blend-mode': { syntax: '<string>' },
  // 'named-color': { syntax: '<string>' },
  // 'outline-line-style': { syntax: '<string>' },
  // 'page-size': { syntax: '<string>' },
  // 'palette-identifier': { syntax: '<string>' },
  // 'palette-mix()': { syntax: '<string>' },
  // percentage: { syntax: '<string>' },
  // 'relative-size': { syntax: '<string>' },
  // resolution: { syntax: '<string>' },
  // semitones: { syntax: '<string>' },
  // 'system-color': { syntax: '<string>' },
  // 'timeline-range-center-subject': { syntax: '<string>' },
  // 'timeline-range-name': { syntax: '<string>' },
  // 'transform-function': { syntax: '<string>' },
  // 'unicode-range-token': { syntax: '<string>' },
  // uri: { syntax: '<string>' },
  // 'url-token': { syntax: '<string>' },
};
