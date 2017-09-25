import parse, { Component } from '../src/parser';
import type, { Type } from '../src/typer';
import { typeAlias, property } from '../src//output';

test('parser to parse CSS syntax components', () => {
  expect(parse('something <color> [ ]')).toMatchObject([
    { component: Component.Keyword },
    {},
    { component: Component.DataType },
    { component: Component.Group },
  ]);
});

test('typer to type CSS syntax components', () => {
  expect(type(parse('something | <color>'))).toMatchObject([{ type: Type.Literal }, { type: Type.TypeAlias }]);
});

test('output of CSS syntax components', () => {
  expect(typeAlias('component', type(parse('something | <color>')))).toBe("type Component = Color | 'something';");
  expect(property('component', type(parse('something | <color>')))).toBe("component?: Color | 'something';");
});
