import parse, { Combinator } from '../src/parser';
import typing from '../src/typer';

test('parser to parse CSS syntax combinators', () => {
  expect(parse('something another-thing && | ||')).toMatchObject([
    {},
    { combinator: Combinator.Juxtaposition },
    {},
    { combinator: Combinator.DoubleAmpersand },
    { combinator: Combinator.SingleBar },
    { combinator: Combinator.DoubleBar },
  ]);
});

test('typer to type CSS syntax combinators', () => {
  expect(typing(parse('something another-thing'))).toHaveLength(1);
  expect(typing(parse('something && another-thing'))).toHaveLength(1);
  expect(typing(parse('something | another-thing'))).toHaveLength(2);
  expect(typing(parse('something || another-thing'))).toHaveLength(3);
});
