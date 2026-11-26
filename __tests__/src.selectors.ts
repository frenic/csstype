import { getPseudos } from '../src/collections/selectors';
import { Type } from '../src/syntax/typer';

jest.mock(
  'chalk',
  () =>
    ({
      yellow: (text: string) => text,
      magenta: (text: string) => text,
    }) as unknown as typeof import('chalk'),
);

describe('selectors', () => {
  it('keeps pseudos BCD has and drops the ones no browser added', async () => {
    const { simple, advanced } = await getPseudos();

    const literals = [...simple, ...advanced]
      .filter(type => type.type === Type.StringLiteral)
      .map(type => (type as { literal: string }).literal);

    // Vendor pseudo-elements from local legacy data, kept via their BCD entries
    expect(literals).toContain('::-moz-range-thumb');
    expect(literals).toContain('::-webkit-slider-thumb');

    // Draft pseudos and vendor pseudos BCD does not have are dropped
    expect(literals).not.toContain(':snapped');
    expect(literals).not.toContain(':target-within');
    expect(literals).not.toContain('::-ms-thumb');
  });
});
