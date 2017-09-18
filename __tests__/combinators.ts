import parse, { Entity, Component, Combinator } from '../src/parser';
import type, { Type } from '../src/typer';
import { typeAlias } from '../src//output';

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
  expect(typeAlias('Component', type(parse('something another-thing')))).toBe('type Component = string;');
  expect(typeAlias('Component', type(parse('something && another-thing')))).toBe('type Component = string;');
  expect(typeAlias('Component', type(parse('something | another-thing')))).toBe(
    "type Component = 'something' | 'another-thing';",
  );
  expect(typeAlias('Component', type(parse('something || another-thing')))).toBe(
    "type Component = 'something' | 'another-thing' | string;",
  );
});
