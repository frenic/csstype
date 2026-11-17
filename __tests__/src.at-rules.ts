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

  it('shares one declaration between same-name descriptors of different at-rules', async () => {
    const [, atRules] = await getDataTypesOf(dictionary => getAtRules(dictionary, 3));

    // `font-display` exists as a descriptor of both `@font-face` and
    // `@font-feature-values` in webref
    expect(atRules.rules['font-face']['font-display']).toBeDefined();
    expect(atRules.rules['font-feature-values']['font-display']).toBeDefined();

    // The AtRule namespace must not declare the same type name twice
    const data = await declarator(3);
    const atRuleNamespace = data.namespaces.find(namespace => namespace.name === 'AtRule')!;
    const names = atRuleNamespace.body().map(declaration => declaration.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
