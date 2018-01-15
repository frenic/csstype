import { Entity, Component, Combinator, EntityType, ComponentType, CombinatorType, FunctionType } from './parser';

export enum Type {
  TypeAlias,
  Literal,
  String,
  Number,
  Length,
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
        default:
          return [
            {
              type: Type.String,
            },
          ];
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
