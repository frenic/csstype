import parse from '../src/parser';
import typing, { Type } from '../src/typer';

describe('typing', () => {
  it('types combinators', () => {
    expect(typing(parse('something | another-thing'))).toHaveLength(2);
    expect(typing(parse('something || another-thing'))).toHaveLength(4);
    expect(typing(parse('something && another-thing'))).toHaveLength(2);
    expect(typing(parse('something another-thing'))).toHaveLength(1);
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
    expect(typing(parse('something another-thing?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something' },
      { type: Type.StringLiteral, literal: 'something another-thing' },
    ]);
    expect(typing(parse('something another-thing? yet-another-thing?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something' },
    ]);
    expect(typing(parse('something? another-thing yet-another-thing?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something another-thing' },
      { type: Type.StringLiteral, literal: 'another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'another-thing' },
    ]);
    expect(typing(parse('something? another-thing? yet-another-thing'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
      { type: Type.StringLiteral, literal: 'another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'yet-another-thing' },
    ]);
    expect(typing(parse('something? another-thing? yet-another-thing?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
      { type: Type.StringLiteral, literal: 'another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something' },
      { type: Type.StringLiteral, literal: 'another-thing' },
      { type: Type.StringLiteral, literal: 'yet-another-thing' },
    ]);
    expect(typing(parse('something another-thing yet-another-thing?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something another-thing' },
    ]);
    expect(typing(parse('something another-thing? yet-another-thing'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
    ]);
  });

  it('types optional group components', () => {
    expect(typing(parse('something [ another-thing | yet-another-thing ]?'))).toMatchObject([
      { type: Type.StringLiteral, literal: 'something another-thing' },
      { type: Type.StringLiteral, literal: 'something yet-another-thing' },
      { type: Type.StringLiteral, literal: 'something' },
    ]);
  });
});
