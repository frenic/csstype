import parse, { Combinator } from '../src/parser';
import type from '../src/typer';
import { typeAlias, property } from '../src//output';

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
  expect(type(parse('something another-thing'))).toHaveLength(1);
  expect(type(parse('something && another-thing'))).toHaveLength(1);
  expect(type(parse('something | another-thing'))).toHaveLength(2);
  expect(type(parse('something || another-thing'))).toHaveLength(3);
});

test('output of CSS syntax combinators', () => {
  expect(typeAlias('component', type(parse('something another-thing')))).toBe('type ComponentAlias = string;');
  expect(typeAlias('component', type(parse('something && another-thing')))).toBe('type ComponentAlias = string;');
  expect(typeAlias('component', type(parse('something | another-thing')))).toBe(
    "type ComponentAlias = 'something' | 'another-thing';",
  );
  expect(typeAlias('component', type(parse('something || another-thing')))).toBe(
    "type ComponentAlias = 'something' | 'another-thing' | string;",
  );
  expect(property('component')).toBe('component?: Component;');
});
