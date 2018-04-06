import * as properties from 'mdn-data/css/properties.json';
import * as syntaxes from 'mdn-data/css/syntaxes.json';
import * as cssTypes from 'mdn-data/css/types.json';
import parse, {
  Combinator,
  Component,
  ComponentType,
  Entity,
  EntityType,
  ICombinator,
  IFunction,
  IMultiplierCurlyBracet,
  Multiplier,
  MultiplierType,
} from './parser';

export enum Type {
  Alias,
  DataType,
  Length,
  StringLiteral,
  NumericLiteral,
  String,
  Number,
}

interface IBasic {
  type: Type.String | Type.Number | Type.Length;
}

export interface IAlias {
  type: Type.Alias;
  name: string;
  generics: IGenerics[];
}

export interface IGenerics {
  name: string;
  defaults?: string;
}

export interface IDataType {
  type: Type.DataType;
  name: string;
}

export interface IStringLiteral {
  type: Type.StringLiteral;
  literal: string;
}

interface INumericLiteral {
  type: Type.NumericLiteral;
  literal: number;
}

// Yet another reminder; naming is hard
export type TypeType<TAlias = IDataType> = IBasic | IStringLiteral | INumericLiteral | TAlias;

const basicDataTypes = [...Object.keys(cssTypes), 'hex-color'].reduce<{
  [name: string]: IBasic;
}>((dataTypes, name) => {
  switch (name) {
    case 'number':
    case 'integer':
      dataTypes[name] = {
        type: Type.Number,
      };
      break;
    case 'length':
      dataTypes[name] = {
        type: Type.Length,
      };
      break;
    default:
      if (!(name in syntaxes)) {
        dataTypes[name] = {
          type: Type.String,
        };
      }
  }
  return dataTypes;
}, {});

export default function typing(entities: EntityType[]): TypeType[] {
  const types: TypeType[] = [];
  let hasLength = false;
  let hasString = false;
  let hasNumber = false;
  for (const entity of entities) {
    if (isComponent(entity)) {
      if (shouldIncludeComponent(entity)) {
        switch (entity.component) {
          case Component.Keyword:
            if (String(Number(entity.value)) === entity.value) {
              addNumericLiteral(Number(entity.value));
            } else {
              addStringLiteral(entity.value);
            }
            break;
          case Component.DataType: {
            const value = entity.value.slice(1, -1);
            const property = /'([^']+)'/.exec(value);
            if (property) {
              const name = property[1];
              if (name in properties) {
                if (entity.multiplier && isMultiplied(entity.multiplier)) {
                  addString();
                }

                for (const type of typing(parse(properties[name].syntax))) {
                  add(type);
                }
              } else {
                addString();
              }
            } else if (value in basicDataTypes) {
              add(basicDataTypes[value]);
            } else {
              addDataType(value);
            }
            break;
          }
          case Component.Group: {
            if (entity.multiplier && isMultiplied(entity.multiplier)) {
              addString();
            }

            for (const type of typing(entity.entities)) {
              add(type);
            }
          }
        }
      }
    } else if (isCombinator(entity)) {
      if (entity.combinator === Combinator.DoubleBar || isMandatoryCombinator(entity)) {
        addString();
      }
    } else if (isFunction(entity)) {
      addString();
    }
  }

  function addLength() {
    if (!hasLength) {
      types.push({
        type: Type.Length,
      });
      hasLength = true;
    }
  }

  function addString() {
    if (!hasString) {
      types.push({
        type: Type.String,
      });
      hasString = true;
    }
  }

  function addNumber() {
    if (!hasNumber) {
      types.push({
        type: Type.Number,
      });
      hasNumber = true;
    }
  }

  function addStringLiteral(literal: string) {
    if (types.every(type => !(type.type === Type.StringLiteral && type.literal === literal))) {
      types.push({
        type: Type.StringLiteral,
        literal,
      });
    }
  }

  function addNumericLiteral(literal: number) {
    if (types.every(type => !(type.type === Type.NumericLiteral && type.literal === literal))) {
      types.push({
        type: Type.NumericLiteral,
        literal,
      });
    }
  }

  function addDataType(name: string) {
    if (types.every(type => !(type.type === Type.DataType && type.name === name))) {
      types.push({
        type: Type.DataType,
        name,
      });
    }
  }

  function add(type: TypeType) {
    switch (type.type) {
      case Type.Length: {
        addLength();
        break;
      }
      case Type.String: {
        addString();
        break;
      }
      case Type.Number: {
        addNumber();
        break;
      }
      case Type.StringLiteral: {
        addStringLiteral(type.literal);
        break;
      }
      case Type.NumericLiteral: {
        addNumericLiteral(type.literal);
        break;
      }
      case Type.DataType: {
        addDataType(type.name);
        break;
      }
    }
  }

  function previousEntity(currentEntity: EntityType) {
    return entities[entities.indexOf(currentEntity) - 1];
  }

  function nextEntity(currentEntity: EntityType) {
    return entities[entities.indexOf(currentEntity) + 1];
  }

  function shouldIncludeComponent(component: ComponentType) {
    for (let i = entities.indexOf(component) - 1; i >= 0; i--) {
      const entity = entities[i];
      if (entity && entity.entity === Entity.Combinator) {
        if (isMandatoryCombinator(entity)) {
          const previous = previousEntity(entity);
          if (previous && !isOptionalEntity(previous)) {
            return false;
          }
        } else {
          break;
        }
      }
    }
    for (let i = entities.indexOf(component) + 1; i < entities.length; i++) {
      const entity = entities[i];
      if (entity && entity.entity === Entity.Combinator) {
        if (isMandatoryCombinator(entity)) {
          const next = nextEntity(entity);
          if (next && !isOptionalEntity(next)) {
            return false;
          }
        } else {
          break;
        }
      }
    }
    return true;
  }

  return types;
}

function isFunction(entity: EntityType): entity is IFunction {
  return entity.entity === Entity.Function;
}

function isComponent(entity: EntityType): entity is ComponentType {
  return entity.entity === Entity.Component;
}

function isCombinator(entity: EntityType): entity is ICombinator {
  return entity.entity === Entity.Combinator;
}

function isCurlyBracetMultiplier(multiplier: MultiplierType): multiplier is IMultiplierCurlyBracet {
  return multiplier.sign === Multiplier.CurlyBracet;
}

function isMultiplied(multiplier: MultiplierType) {
  return (
    (isCurlyBracetMultiplier(multiplier) && (multiplier.min > 1 || multiplier.max > 1)) ||
    multiplier.sign === Multiplier.Asterisk ||
    multiplier.sign === Multiplier.PlusSign ||
    multiplier.sign === Multiplier.HashMark ||
    multiplier.sign === Multiplier.ExclamationPoint
  );
}

function isMandatoryCombinator({ combinator }: ICombinator) {
  return combinator === Combinator.DoubleAmpersand || combinator === Combinator.Juxtaposition;
}

function isOptionalEntity(entity: EntityType) {
  return (
    entity.multiplier &&
    ((isCurlyBracetMultiplier(entity.multiplier) && entity.multiplier.min > 0) ||
      entity.multiplier.sign === Multiplier.Asterisk ||
      entity.multiplier.sign === Multiplier.QuestionMark)
  );
}
