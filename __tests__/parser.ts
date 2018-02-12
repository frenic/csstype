import parse, { Combinator, Component } from '../src/parser';

describe('parsing of CSS syntax', () => {
  it('combinators', () => {
    expect(parse('something another-thing [ ] [ ] && | ||')).toMatchObject([
      {},
      { combinator: Combinator.Juxtaposition },
      {},
      { combinator: Combinator.Juxtaposition },
      {},
      { combinator: Combinator.Juxtaposition },
      {},
      { combinator: Combinator.DoubleAmpersand },
      { combinator: Combinator.SingleBar },
      { combinator: Combinator.DoubleBar },
    ]);
  });

  it('components', () => {
    expect(parse('something <color> [ ]')).toMatchObject([
      { component: Component.Keyword },
      {},
      { component: Component.DataType },
      {},
      { component: Component.Group },
    ]);
  });

  it('group components', () => {
    expect(parse('[ something | <color> ]')).toMatchObject([
      {
        component: Component.Group,
        entities: [{ component: Component.Keyword }, {}, { component: Component.DataType }],
      },
    ]);
  });
});
