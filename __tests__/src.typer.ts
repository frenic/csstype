import parse from '../src/syntax/parser';
import typing, { Type } from '../src/syntax/typer';

describe('typing', () => {
  it('types combinators', () => {
    expect(typing(parse('something another-thing'))).toHaveLength(1);
    expect(typing(parse('something && another-thing'))).toHaveLength(1);
    expect(typing(parse('something || another-thing'))).toHaveLength(3);
    expect(typing(parse('something | another-thing'))).toHaveLength(2);
  });

  it('types components', () => {
    expect(typing(parse('something | 100 | <color>'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
      { type: Type.DataType },
    ]);
  });

  it('types group components', () => {
    expect(typing(parse('[ something | 100 | <color> ]'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
      { type: Type.DataType },
    ]);
  });

  it('types optional components', () => {
    expect(typing(parse('something another-thing? | 100'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something another-thing? yet-another-thing? | 100'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something? another-thing yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something? another-thing? yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something? another-thing? yet-another-thing? | 100'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something another-thing yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something another-thing? yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typing(parse('something? another-thing yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
  });

  it('types optional group components', () => {
    expect(typing(parse('[ something ] [ another-thing ]? | 100'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
  });

  it('types number with range', () => {
    expect(typing(parse('<number [1,1000]>'))).toMatchObject([{ type: Type.Number }]);
  });
});
