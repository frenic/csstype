import parse, { Combinator, Component } from '../src/parser';

describe('parsing', () => {
  it('parses combinators', () => {
    expect(parse('something | another-thing')).toMatchObject([{}, { combinator: Combinator.SingleBar }, {}]);
    expect(parse('something || another-thing')).toMatchObject([{}, { combinator: Combinator.DoubleBar }, {}]);
    expect(parse('something && another-thing')).toMatchObject([{}, { combinator: Combinator.DoubleAmpersand }, {}]);
    expect(parse('something another-thing')).toMatchObject([{}, { combinator: Combinator.Juxtaposition }, {}]);
  });

  it('parses components', () => {
    expect(parse('something <something> [ something <something> ]')).toMatchObject([
      { component: Component.Keyword },
      {},
      { component: Component.DataType },
      {},
      {
        component: Component.Group,
        entities: [{ component: Component.Keyword }, {}, { component: Component.DataType }],
      },
    ]);
  });

  it('groups by combinator precedence', () => {
    expect(parse('something | something || something && something something')).toMatchObject([
      {},
      { combinator: Combinator.SingleBar },
      {
        component: Component.Group,
        entities: [
          {},
          { combinator: Combinator.DoubleBar },
          {
            component: Component.Group,
            entities: [
              {},
              { combinator: Combinator.DoubleAmpersand },
              {
                component: Component.Group,
                entities: [{}, { combinator: Combinator.Juxtaposition }, {}],
              },
            ],
          },
        ],
      },
    ]);

    expect(parse('something something && something || something | something')).toMatchObject([
      {
        component: Component.Group,
        entities: [
          {
            component: Component.Group,
            entities: [
              {
                component: Component.Group,
                entities: [{}, { combinator: Combinator.Juxtaposition }, {}],
              },
              { combinator: Combinator.DoubleAmpersand },
              {},
            ],
          },
          { combinator: Combinator.DoubleBar },
          {},
        ],
      },
      { combinator: Combinator.SingleBar },
      {},
    ]);

    expect(parse('[ something | something || something && something ] something')).toMatchObject([
      {
        component: Component.Group,
        entities: [
          {},
          { combinator: Combinator.SingleBar },
          {
            component: Component.Group,
            entities: [
              {},
              { combinator: Combinator.DoubleBar },
              {
                component: Component.Group,
                entities: [{}, { combinator: Combinator.DoubleAmpersand }, {}],
              },
            ],
          },
        ],
      },
      { combinator: Combinator.Juxtaposition },
      {},
    ]);

    expect(parse('something [ something && something || something | something ]')).toMatchObject([
      {},
      { combinator: Combinator.Juxtaposition },
      {
        component: Component.Group,
        entities: [
          {
            component: Component.Group,
            entities: [
              {
                component: Component.Group,
                entities: [{}, { combinator: Combinator.DoubleAmpersand }, {}],
              },
              { combinator: Combinator.DoubleBar },
              {},
            ],
          },
          { combinator: Combinator.SingleBar },
          {},
        ],
      },
    ]);

    expect(parse('something && something something || something')).toMatchObject([
      {
        component: Component.Group,
        entities: [
          {},
          { combinator: Combinator.DoubleAmpersand },
          {
            component: Component.Group,
            entities: [{}, { combinator: Combinator.Juxtaposition }, {}],
          },
        ],
      },
      { combinator: Combinator.DoubleBar },
      {},
    ]);

    expect(parse('something || something something && something')).toMatchObject([
      {},
      { combinator: Combinator.DoubleBar },
      {
        component: Component.Group,
        entities: [
          {
            component: Component.Group,
            entities: [{}, { combinator: Combinator.Juxtaposition }, {}],
          },
          { combinator: Combinator.DoubleAmpersand },
          {},
        ],
      },
    ]);

    expect(parse('something | something something something')).toMatchObject([
      {},
      { combinator: Combinator.SingleBar },
      {
        component: Component.Group,
        entities: [{}, { combinator: Combinator.Juxtaposition }, {}, { combinator: Combinator.Juxtaposition }, {}],
      },
    ]);

    expect(parse('something something something | something')).toMatchObject([
      {
        component: Component.Group,
        entities: [{}, { combinator: Combinator.Juxtaposition }, {}, { combinator: Combinator.Juxtaposition }, {}],
      },
      { combinator: Combinator.SingleBar },
      {},
    ]);
  });
});
