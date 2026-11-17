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

// Two at-rules that share a descriptor name with different types.
// 5 is Type.StringLiteral (the mock factory cannot reference imports)
jest.mock('../src/collections/at-rules', () => ({
  getAtRules: async () => ({
    literals: [
      { type: 5, literal: '@fake-a' },
      { type: 5, literal: '@fake-b' },
    ],
    rules: {
      'fake-a': {
        'shared-desc': { name: 'shared-desc', types: [{ type: 5, literal: 'a' }] },
      },
      'fake-b': {
        'shared-desc': {
          name: 'shared-desc',
          types: [
            { type: 5, literal: 'b' },
            { type: 5, literal: 'c' },
          ],
        },
      },
    },
  }),
}));

describe('declarator', () => {
  it('gives same-name at-rule descriptors with different types distinct declarations', async () => {
    const data = await declarator(3);
    const atRuleNamespace = data.namespaces.find(namespace => namespace.name === 'AtRule')!;
    const names = atRuleNamespace.body().map(declaration => declaration.name);

    // No duplicate identifiers, and the conflicting descriptor is qualified
    // with its at-rule name
    expect(new Set(names).size).toBe(names.length);
    expect(names).toEqual(expect.arrayContaining(['SharedDesc', 'FakeBSharedDesc']));
  });
});
