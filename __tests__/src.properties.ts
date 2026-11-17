import { getDataTypesOf } from '../src/collections/data-types';
import { getHtmlProperties } from '../src/collections/properties';
import { getProperties, getPropertySyntax, isProperty } from '../src/collections/syntaxes';

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

describe('properties', () => {
  it('drops properties without a BCD entry, keeps generated ones (obsolete when support was removed)', async () => {
    const [, properties] = await getDataTypesOf(dictionary => getHtmlProperties(dictionary, 3));

    // Not in BCD at all, and no prefix/alternative_name support generates it
    expect(properties['-ms-overflow-style']).toBeUndefined();

    // Only removed support (Firefox 132) generates it via `user-modify`
    expect(properties['-moz-user-modify']).toMatchObject({ obsolete: true });

    // `-webkit-` prefix support on `box-align`
    expect(properties['-webkit-box-align']).toMatchObject({ obsolete: false });
  });

  it('reads legacy property syntaxes webref lacks', () => {
    expect(getPropertySyntax('-moz-appearance')).toContain('-moz-mac-unified-toolbar');
    expect(getProperties()['-webkit-box-align'].syntax).toBe('start | center | end | baseline | stretch');
    expect(isProperty('font-smooth')).toBe(true);
    expect(isProperty('-ms-overflow-style')).toBe(false);
  });
});
