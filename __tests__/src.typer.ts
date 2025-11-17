import parse from '../src/syntax/parser';
import typer, { Type } from '../src/syntax/typer';

describe('typing', () => {
  it('types combinators', () => {
    expect(typer(parse('something another-thing'))).toHaveLength(1);
    expect(typer(parse('something && another-thing'))).toHaveLength(1);
    expect(typer(parse('something || another-thing'))).toHaveLength(3);
    expect(typer(parse('something | another-thing'))).toHaveLength(2);
  });

  it('types components', () => {
    expect(typer(parse('something | 100 | <color>'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
      { type: Type.DataType },
    ]);
  });

  it('types optional components', () => {
    expect(typer(parse('something another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something another-thing? yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something? another-thing yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something? another-thing? yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something? another-thing? yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.StringLiteral },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something another-thing yet-another-thing? | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something another-thing? yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
    expect(typer(parse('something? another-thing yet-another-thing | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
  });

  it('does not duplicate types', () => {
    expect(typer(parse('something? another-thing | something? another-thing | 100 | 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.NumericLiteral },
    ]);
  });

  it('types optional group components', () => {
    expect(typer(parse('[ something another-thing ]? 100'))).toMatchObject([
      { type: Type.String },
      { type: Type.NumericLiteral },
    ]);
  });

  it('types multipliers', () => {
    expect(typer(parse('something-x | something-y | [ something | another-thing ]{1,2}'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.StringLiteral },
      { type: Type.StringLiteral },
    ]);
    expect(typer(parse('something{1,4} [ antoher-thing{1,4} ]?'))).toMatchObject([
      { type: Type.String },
      { type: Type.StringLiteral },
    ]);
    expect(typer(parse('something#'))).toMatchObject([{ type: Type.String }, { type: Type.StringLiteral }]);
  });

  it('types number with range', () => {
    expect(typer(parse('<number [1,1000]>'))).toMatchObject([{ type: Type.Number }]);
  });

  it('types comma components', () => {
    expect(typer(parse('something , another-thing'))).toMatchObject([
      { type: Type.StringLiteral },
      { type: Type.String },
      { type: Type.StringLiteral },
    ]);
  });
});

jest.mock('chalk', () => ({}) as typeof import('chalk'));
