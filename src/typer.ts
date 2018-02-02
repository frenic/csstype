import {
  Entity,
  Component,
  Combinator,
  EntityType,
  ComponentType,
  CombinatorType,
  FunctionType,
  MultiplierQurlyBracetType,
  MultiplierType,
  Multiplier,
  MultiplierSimpleType,
} from './parser';

export enum Type {
  TypeAlias,
  Length,
  Literal,
  String,
  Number,
}

export type BasicType = {
  type: Type.String | Type.Number | Type.Length;
};

export type TypeAliasType = {
  type: Type.TypeAlias;
  alias: string;
};

export type LiteralType = {
  type: Type.Literal;
  literal: string;
};

// Yet another reminder; naming is hard
export type TypeType = BasicType | TypeAliasType | LiteralType;

export const knownBasicDataTypes: { [name: string]: Type } = {
  time: Type.String,
  number: Type.Number,
  'hex-color': Type.String,
  url: Type.String,
  length: Type.Length,
  percentage: Type.String,
  integer: Type.Number,
  string: Type.String,
  'custom-ident': Type.String,
  'outline-radius': Type.String,
};

export default function type(entities: EntityType[]): TypeType[] {
  const types: TypeType[] = [];
  let hasString = false;
  let hasNumber = false;
  for (const entity of entities) {
    if (isComponent(entity)) {
      switch (entity.component) {
        case Component.Keyword:
          types.push({
            type: Type.Literal,
            literal: entity.value,
          });
          break;
        case Component.DataType: {
          const value = entity.value.slice(1, -1);
          if (value.indexOf("'") === 0) {
            // Lets skip these for now
            pushString();
          } else if (value in knownBasicDataTypes) {
            const basicDataType = knownBasicDataTypes[value];
            if (basicDataType === Type.String) {
              pushString();
            } else if (basicDataType === Type.Number) {
              pushNumber();
            } else if (basicDataType === Type.Length) {
              types.push({
                type: Type.Length,
              });
            }
          } else {
            types.push({
              type: Type.TypeAlias,
              alias: value,
            });
          }
          break;
        }
        case Component.Group: {
          if (entity.multiplier) {
            if (
              (isQurlyBracetMultiplier(entity.multiplier) &&
                (entity.multiplier.min > 1 || entity.multiplier.max === 1)) ||
              entity.multiplier.sign === Multiplier.Asterisk ||
              entity.multiplier.sign === Multiplier.PlusSign ||
              entity.multiplier.sign === Multiplier.HashMark ||
              entity.multiplier.sign === Multiplier.ExclamationPoint
            ) {
              pushString();
            }
          }

          const newTypes = type(entity.entities).filter(groupType => {
            if (groupType.type === Type.Length && !types.every(type => type.type !== Type.Length)) {
              return false;
            }

            if (
              groupType.type === Type.Literal &&
              !types.every(type => !(type.type === Type.Literal && type.literal === groupType.literal))
            ) {
              return false;
            }

            if (groupType.type === Type.String) {
              pushString();
              return false;
            }

            if (groupType.type === Type.Number) {
              pushNumber();
              return false;
            }

            if (
              groupType.type === Type.TypeAlias &&
              !types.every(type => !(type.type === Type.TypeAlias && type.alias === groupType.alias))
            ) {
              return false;
            }

            return true;
          });

          types.push(...newTypes);
        }
      }
    } else if (isCombinator(entity)) {
      switch (entity.combinator) {
        case Combinator.DoubleBar:
          pushString();
          break;
        case Combinator.DoubleAmpersand:
        case Combinator.Juxtaposition:
          return [
            {
              type: Type.String,
            },
          ];
      }
    } else if (isFunction(entity)) {
      pushString();
    }
  }

  function pushString() {
    if (!hasString) {
      types.push({
        type: Type.String,
      });
      hasString = true;
    }
  }

  function pushNumber() {
    if (!hasNumber) {
      types.push({
        type: Type.Number,
      });
      hasNumber = true;
    }
  }

  return types;
}

function isFunction(entity: EntityType): entity is FunctionType {
  return entity.entity === Entity.Function;
}

function isComponent(entity: EntityType): entity is ComponentType {
  return entity.entity === Entity.Component;
}

function isCombinator(entity: EntityType): entity is CombinatorType {
  return entity.entity === Entity.Combinator;
}

function isQurlyBracetMultiplier(multiplier: MultiplierType): multiplier is MultiplierQurlyBracetType {
  return multiplier.sign === Multiplier.QurlyBracet;
}
