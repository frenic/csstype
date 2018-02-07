import parse, { Component } from '../src/parser';
import typing, { Type } from '../src/typer';

test('parser to parse CSS syntax components', () => {
  expect(parse('something <color> [ ]')).toMatchObject([
    { component: Component.Keyword },
    {},
    { component: Component.DataType },
    { component: Component.Group },
  ]);
});

test('parser to parse CSS syntax group components', () => {
  expect(parse('[ something | <color> ]')).toMatchObject([
    {
      component: Component.Group,
      entities: [{ component: Component.Keyword }, {}, { component: Component.DataType }],
    },
  ]);
});

test('typer to type CSS syntax components', () => {
  expect(typing(parse('something | <color>'))).toMatchObject([{ type: Type.Literal }, { type: Type.Alias }]);
});

test('typer to type CSS syntax group components', () => {
  expect(typing(parse('[ something | <color> ]'))).toMatchObject([{ type: Type.Literal }, { type: Type.Alias }]);
});
