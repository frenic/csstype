import { getAtRules } from '../src/collections/at-rules';
import { getDataTypesOf } from '../src/collections/data-types';
import { declarator } from '../src/declarator';

jest.mock(
  'chalk',
  () =>
    ({
      yellow: (text: string) => text,
      magenta: (text: string) => text,
    }) as unknown as typeof import('chalk'),
);

// urls.ts uses `import.meta` and comment.ts pulls in prettier's dynamic
// import(); neither can load under jest, and comments are irrelevant here
jest.mock('../src/utils/urls', () => ({ getSummary: async () => undefined }));
jest.mock('../src/utils/comment', () => ({ composeCommentBlock: async () => undefined }));

describe('at-rules', () => {
  it('skips the @media and @container descriptors', async () => {
    const [, atRules] = await getDataTypesOf(dictionary => getAtRules(dictionary, 3));

    // Media and container features are queried, not declared, so they must
    // not become AtRule interfaces
    expect(atRules.rules.media).toBeUndefined();
    expect(atRules.rules.container).toBeUndefined();

    // The at-rules themselves stay
    const literals = atRules.literals.map(literal => literal.literal);
    expect(literals).toEqual(expect.arrayContaining(['@media', '@container']));
  });

  it('keeps descriptors that are in BCD and drops the ones that are not', async () => {
    const [, atRules] = await getDataTypesOf(dictionary => getAtRules(dictionary, 3));

    // `font-display` is a BCD descriptor of `@font-face`…
    expect(atRules.rules['font-face']['font-display']).toBeDefined();
    // …but not of `@font-feature-values`, so it is dropped there
    expect(atRules.rules['font-feature-values']).toBeUndefined();

    // The AtRule namespace must not declare the same type name twice
    const data = await declarator(3);
    const atRuleNamespace = data.namespaces.find(namespace => namespace.name === 'AtRule')!;
    const names = atRuleNamespace.body().map(declaration => declaration.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('drops at-rules BCD does not have and keeps nested BCD entries', async () => {
    const [, atRules] = await getDataTypesOf(dictionary => getAtRules(dictionary, 3));

    const literals = atRules.literals.map(literal => literal.literal);

    // Draft at-rules with no browser support are not in BCD and get dropped
    expect(literals).not.toContain('@mixin');
    expect(literals).not.toContain('@when');

    // `navigation` is only a descriptor of `@view-transition` in BCD, not an at-rule
    expect(literals).not.toContain('@navigation');

    // Nested BCD entries: `@-webkit-keyframes` is prefix support on
    // `@keyframes`, the page-margin boxes live under `css.at-rules.page`,
    // and `@document` comes from local legacy data
    expect(literals).toEqual(expect.arrayContaining(['@-webkit-keyframes', '@top-left', '@document']));
  });
});
