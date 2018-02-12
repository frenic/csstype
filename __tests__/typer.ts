import parse from '../src/parser';
import typing, { Type } from '../src/typer';

describe('typings of CSS syntax', () => {
  it('combinators', () => {
    expect(typing(parse('something another-thing'))).toHaveLength(1);
    expect(typing(parse('something && another-thing'))).toHaveLength(1);
    expect(typing(parse('something | another-thing'))).toHaveLength(2);
    expect(typing(parse('something || another-thing'))).toHaveLength(3);
  });

  it('components', () => {
    expect(typing(parse('something | 100 | <color>'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
      { type: Type.DataType },
    ]);
  });

  it('group components', () => {
    expect(typing(parse('[ something | 100 | <color> ]'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
      { type: Type.DataType },
    ]);
  });

  it('optional components', () => {
    expect(typing(parse('something another-thing?'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
    ]);
  });

  it('optional group components', () => {
    expect(typing(parse('[ something ] [ another-thing ]?'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
    ]);
  });
});
