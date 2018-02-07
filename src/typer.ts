import { toPascalCase } from './casing';
import {
  Combinator,
  Component,
  ComponentType,
  Entity,
  EntityType,
  ICombinator,
  IFunction,
  IMultiplierQurlyBracet,
  Multiplier,
  MultiplierType,
} from './parser';

export enum Type {
  Alias,
  Length,
  StringLiteral,
  NumericLiteral,
  String,
  Number,
}

interface IBasic {
  type: Type.String | Type.Number | Type.Length;
}

export type AliasType<TAliasAddons = {}> = {
  type: Type.Alias;
  name: string;
  dataTypeName?: string;
} & TAliasAddons;

export interface IStringLiteral {
  type: Type.StringLiteral;
  literal: string;
}

interface INumericLiteral {
  type: Type.NumericLiteral;
  literal: number;
}

// Yet another reminder; naming is hard
export type TypeType<TAliasAddons = {}> = IBasic | AliasType<TAliasAddons> | IStringLiteral | INumericLiteral;

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

export default function typing(entities: EntityType[]): TypeType[] {
  const types: TypeType[] = [];
  let hasString = false;
  let hasNumber = false;
  for (const entity of entities) {
    if (isComponent(entity)) {
      switch (entity.component) {
        case Component.Keyword:
          if (String(Number(entity.value)) === entity.value) {
            types.push({
              type: Type.NumericLiteral,
              literal: Number(entity.value),
            });
          } else {
            types.push({
              type: Type.StringLiteral,
              literal: entity.value,
            });
          }
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
              type: Type.Alias,
              name: toPascalCase(value),
              dataTypeName: value,
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

          const newTypes = typing(entity.entities).filter(groupType => {
            if (groupType.type === Type.Length && !types.every(type => type.type !== Type.Length)) {
              return false;
            }

            if (
              groupType.type === Type.StringLiteral &&
              !types.every(type => !(type.type === Type.StringLiteral && type.literal === groupType.literal))
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
              groupType.type === Type.Alias &&
              !types.every(type => !(type.type === Type.Alias && type.dataTypeName === groupType.dataTypeName))
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

function isFunction(entity: EntityType): entity is IFunction {
  return entity.entity === Entity.Function;
}

function isComponent(entity: EntityType): entity is ComponentType {
  return entity.entity === Entity.Component;
}

function isCombinator(entity: EntityType): entity is ICombinator {
  return entity.entity === Entity.Combinator;
}

function isQurlyBracetMultiplier(multiplier: MultiplierType): multiplier is IMultiplierQurlyBracet {
  return multiplier.sign === Multiplier.QurlyBracet;
}
