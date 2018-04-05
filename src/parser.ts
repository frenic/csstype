export enum Entity {
  Component,
  Combinator,
  Function,
  Unknown,
}

export enum Component {
  Keyword,
  DataType,
  Group,
}

// Higher number is higher precedence
export enum Combinator {
  /** Components are mandatory and should appear in that order */
  Juxtaposition = 0,
  /** Components are mandatory but may appear in any order */
  DoubleAmpersand = 1,
  /** At least one of the components must be present, and they may appear in any order */
  DoubleBar = 2,
  /** Exactly one of the components must be present */
  SingleBar = 3,
}

export enum Multiplier {
  /** 0 or more times */
  Asterisk,
  /** 1 or more times */
  PlusSign,
  /** 0 or 1 time (that is optional) */
  QuestionMark,
  /** 1 or more times, but each occurrence separated by a comma (',') */
  HashMark,
  /** Group must produce at least 1 value */
  ExclamationPoint,
  /** At least A times, at most B times */
  CurlyBracet,
}

export interface IMultiplierCurlyBracet {
  sign: Multiplier.CurlyBracet;
  min: number;
  max: number;
}

export interface IMultiplierSimple {
  sign:
    | Multiplier.Asterisk
    | Multiplier.PlusSign
    | Multiplier.QuestionMark
    | Multiplier.HashMark
    | Multiplier.ExclamationPoint;
}

export type MultiplierType = IMultiplierCurlyBracet | IMultiplierSimple;

export interface INonGroupData {
  entity: Entity.Component;
  multiplier: MultiplierType | null;
  component: Component.Keyword | Component.DataType;
  value: string;
}

export interface IGroupData {
  entity: Entity.Component;
  multiplier: MultiplierType | null;
  component: Component.Group;
  entities: EntityType[];
}

export type ComponentType = INonGroupData | IGroupData;

export interface ICombinator {
  entity: Entity.Combinator;
  combinator: Combinator;
}

export interface IFunction {
  entity: Entity.Function;
  multiplier: MultiplierType | null;
}

export interface IUnknown {
  entity: Entity.Unknown;
  multiplier: MultiplierType | null;
}

export type EntityType = ComponentType | ICombinator | IFunction | IUnknown;

const REGEX_ENTITY = /(?:^|\s)((?:[\w]+\([^\)]*\))|[^\s*+?#!{]+)([*+?#!]|{(\d+),(\d+)})?/g;
const REGEX_DATA_TYPE = /^(<[^>]+>)/g;
const REGEX_KEYWORD = /^([\w-]+)/g;

export const combinators: { [key: number]: ICombinator } = {
  [Combinator.Juxtaposition]: {
    entity: Entity.Combinator,
    combinator: Combinator.Juxtaposition,
  },
  [Combinator.DoubleAmpersand]: {
    entity: Entity.Combinator,
    combinator: Combinator.DoubleAmpersand,
  },
  [Combinator.DoubleBar]: {
    entity: Entity.Combinator,
    combinator: Combinator.DoubleBar,
  },
  [Combinator.SingleBar]: {
    entity: Entity.Combinator,
    combinator: Combinator.SingleBar,
  },
};

export default function parse(syntax: string): EntityType[] {
  const levels: EntityType[][] = [[]];
  let previousMatchWasComponent = false;

  let entityMatch: RegExpExecArray | null;
  while ((entityMatch = REGEX_ENTITY.exec(syntax))) {
    const [, value, ...rawMultiplier] = entityMatch;
    if (value.indexOf('(') !== -1) {
      deepestLevel().push({ entity: Entity.Function, multiplier: multiplierData(rawMultiplier) });
      previousMatchWasComponent = false;
      continue;
    } else if (value.indexOf('&&') === 0) {
      deepestLevel().push(combinators[Combinator.DoubleAmpersand]);
      previousMatchWasComponent = false;
      continue;
    } else if (value.indexOf('||') === 0) {
      deepestLevel().push(combinators[Combinator.DoubleBar]);
      previousMatchWasComponent = false;
      continue;
    } else if (value.indexOf('|') === 0) {
      deepestLevel().push(combinators[Combinator.SingleBar]);
      previousMatchWasComponent = false;
      continue;
    } else if (value.indexOf(']') === 0) {
      const definitions = levels.pop();
      if (definitions) {
        deepestLevel().push(componentGroupData(groupByPrecedence(definitions), multiplierData(rawMultiplier)));
      }
      previousMatchWasComponent = true;
      continue;
    } else {
      if (previousMatchWasComponent) {
        deepestLevel().push(combinators[Combinator.Juxtaposition]);
      }

      if (value.indexOf('[') === 0) {
        levels.push([]);
        previousMatchWasComponent = false;
        continue;
      }

      let componentMatch: RegExpMatchArray | null;
      if ((componentMatch = value.match(REGEX_DATA_TYPE))) {
        const name = componentMatch[0];
        deepestLevel().push(componentData(Component.DataType, name, multiplierData(rawMultiplier)));
        previousMatchWasComponent = true;
        continue;
      } else if ((componentMatch = value.match(REGEX_KEYWORD))) {
        const name = componentMatch[0];
        deepestLevel().push(componentData(Component.Keyword, name, multiplierData(rawMultiplier)));
        previousMatchWasComponent = true;
        continue;
      }
    }
    deepestLevel().push({ entity: Entity.Unknown, multiplier: multiplierData(rawMultiplier) });
  }

  function deepestLevel() {
    return levels[levels.length - 1];
  }

  return groupByPrecedence(levels[0]);
}

export function isComponent(entity: EntityType): entity is ComponentType {
  return entity.entity === Entity.Component;
}

export function isCombinator(entity: EntityType): entity is ICombinator {
  return entity.entity === Entity.Combinator;
}

export function isCurlyBracetMultiplier(multiplier: MultiplierType): multiplier is IMultiplierCurlyBracet {
  return multiplier.sign === Multiplier.CurlyBracet;
}

export function isMandatoryMultiplied(multiplier: MultiplierType | null) {
  return multiplier !== null && (isCurlyBracetMultiplier(multiplier) && multiplier.min > 1);
}

export function isOptionallyMultiplied(multiplier: MultiplierType | null) {
  return (
    multiplier !== null &&
    ((isCurlyBracetMultiplier(multiplier) && multiplier.min < multiplier.max && multiplier.max > 1) ||
      multiplier.sign === Multiplier.Asterisk ||
      multiplier.sign === Multiplier.PlusSign ||
      multiplier.sign === Multiplier.HashMark ||
      multiplier.sign === Multiplier.ExclamationPoint)
  );
}

export function isMandatoryEntity(entity: EntityType) {
  if (isCombinator(entity)) {
    return entity === combinators[Combinator.DoubleAmpersand] || entity === combinators[Combinator.Juxtaposition];
  }

  if (entity.multiplier) {
    return (
      (isCurlyBracetMultiplier(entity.multiplier) && entity.multiplier.min > 0) ||
      entity.multiplier.sign === Multiplier.PlusSign ||
      entity.multiplier.sign === Multiplier.HashMark ||
      entity.multiplier.sign === Multiplier.ExclamationPoint
    );
  }

  return true;
}

export function componentData(
  component: Component.Keyword | Component.DataType,
  value: string,
  multiplier: MultiplierType | null = null,
): ComponentType {
  return {
    entity: Entity.Component,
    component,
    multiplier,
    value,
  };
}

export function componentGroupData(entities: EntityType[], multiplier: MultiplierType | null = null): ComponentType {
  return {
    entity: Entity.Component,
    component: Component.Group,
    multiplier,
    entities,
  };
}

function multiplierData(raw: string[]): MultiplierType | null {
  if (!raw[0]) {
    return null;
  }
  switch (raw[0].slice(0, 1)) {
    case '*':
      return { sign: Multiplier.Asterisk };
    case '+':
      return { sign: Multiplier.PlusSign };
    case '?':
      return { sign: Multiplier.QuestionMark };
    case '#':
      return { sign: Multiplier.HashMark };
    case '!':
      return { sign: Multiplier.ExclamationPoint };
    case '{':
      return { sign: Multiplier.CurlyBracet, min: Number(raw[1]), max: Number(raw[2]) };
    default:
      return null;
  }
}

function groupByPrecedence(entities: EntityType[], precedence: number = Combinator.SingleBar): EntityType[] {
  if (precedence < 0) {
    // We've reached the lowest precedence possible
    return entities;
  }

  const combinator = combinators[precedence];
  const combinatorIndexes: number[] = [];

  // Search for indexes where the combinator is used
  for (let i = entities.indexOf(combinator); i > -1; i = entities.indexOf(combinator, i + 1)) {
    combinatorIndexes.push(i);
  }

  const nextPrecedence = precedence - 1;

  if (combinatorIndexes.length === 0) {
    return groupByPrecedence(entities, nextPrecedence);
  }

  const groupedEntities: EntityType[] = [];

  // Yes, what you see is correct: it's index of indexes
  for (
    let i = 0;
    // Add one loop to finnish up the last entities
    i < combinatorIndexes.length + 1;
    i++
  ) {
    const sectionEntities = entities.slice(
      i > 0
        ? combinatorIndexes[i - 1] + 1
        : // Slice from beginning
          0,
      i < combinatorIndexes.length
        ? combinatorIndexes[i]
        : // Slice to end
          entities.length,
    );

    // Only group if there's more than one entity in between
    if (sectionEntities.length > 1) {
      groupedEntities.push(componentGroupData(groupByPrecedence(sectionEntities, nextPrecedence)));
    } else {
      groupedEntities.push(...sectionEntities);
    }

    if (i < combinatorIndexes.length) {
      groupedEntities.push(entities[combinatorIndexes[i]]);
    }
  }

  return groupedEntities;
}
