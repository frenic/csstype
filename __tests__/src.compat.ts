import {
  getNestedAtRuleData,
  isAtRuleAddedBySome,
  isGeneratedPropertyName,
  isRemovedGeneratedPropertyName,
  isSelectorAddedBySome,
} from '../src/utils/compat';

describe('compat BCD rules', () => {
  it('keeps selectors that BCD has and some browser added', () => {
    expect(isSelectorAddedBySome('hover')).toBe(true);
    expect(isSelectorAddedBySome('-moz-range-thumb')).toBe(true);

    // Draft pseudo-classes and vendor pseudos BCD does not have are dropped
    expect(isSelectorAddedBySome('snapped')).toBe(false);
    expect(isSelectorAddedBySome('target-within')).toBe(false);
    expect(isSelectorAddedBySome('-ms-thumb')).toBe(false);
  });

  it('treats prefix/alternative names of another property as in BCD, removed support included', () => {
    // `-webkit-` prefix support on `box-align`
    expect(isGeneratedPropertyName('-webkit-box-align')).toBe(true);
    expect(isRemovedGeneratedPropertyName('-webkit-box-align')).toBe(false);

    // Removed again in Firefox 132, but still kept (as obsolete)
    expect(isGeneratedPropertyName('-moz-user-modify')).toBe(true);
    expect(isRemovedGeneratedPropertyName('-moz-user-modify')).toBe(true);

    // No BCD entry and no prefix/alternative_name support generates it
    expect(isGeneratedPropertyName('-ms-overflow-style')).toBe(false);

    // Alternative names in `*_context` subfeatures, e.g. `gap.grid_context`
    expect(isGeneratedPropertyName('grid-gap')).toBe(true);
    expect(isGeneratedPropertyName('grid-row-gap')).toBe(true);
    expect(isGeneratedPropertyName('grid-column-gap')).toBe(true);
  });

  it('looks up nested at-rule entries only where BCD nests at-rules', () => {
    // Prefix support on `@keyframes`
    expect(isAtRuleAddedBySome('-webkit-keyframes')).toBe(true);

    // Page-margin boxes under `css.at-rules.page`
    expect(getNestedAtRuleData('top-left')).toBeDefined();
    expect(isAtRuleAddedBySome('top-left')).toBe(true);

    // `@font-feature-values` sub-rules
    expect(isAtRuleAddedBySome('swash')).toBe(true);

    // `navigation` is a descriptor of `@view-transition` in BCD, not an at-rule
    expect(getNestedAtRuleData('navigation')).toBeUndefined();
    expect(isAtRuleAddedBySome('navigation')).toBe(false);

    // Draft at-rules with no BCD entry at all
    expect(isAtRuleAddedBySome('mixin')).toBe(false);
  });
});
