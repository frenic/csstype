import * as syntaxes from 'mdn-data/css/syntaxes.json';
import * as cssTypes from 'mdn-data/css/types.json';
import {
  Combinator,
  Component,
  EntityType,
  isCombinator,
  isComponent,
  isMandatoryEntity,
  isMandatoryMultiplied,
  isOptionallyMultiplied,
} from './parser';

export enum Type {
  Alias,
  DataType,
  PropertyReference,
  Length,
  StringLiteral,
  NumericLiteral,
  String,
  Number,
}

interface IBasic {
  type: Type.String | Type.Number | Type.Length;
}

export interface IDataType<TType = Type.DataType | Type.PropertyReference> {
  type: TType;
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

export type DataType = IDataType<Type.DataType>;

// Yet another reminder; naming is hard
export type TypeType<TDataType = IDataType> = IBasic | IStringLiteral | INumericLiteral | TDataType;

export type ResolvedType = TypeType<DataType>;

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
  let mandatoryCombinatorCount = 0;
  let mandatoryNonCombinatorsCount = 0;
  for (const entity of entities) {
    if (isMandatoryEntity(entity)) {
      if (isCombinator(entity)) {
        mandatoryCombinatorCount++;
      } else {
        mandatoryNonCombinatorsCount++;
      }
    }
  }

  let types: TypeType[] = [];

  for (const entity of entities) {
    if (isComponent(entity)) {
      if (isMandatoryEntity(entity)) {
        // In case of `something another-thing` we want to fall back to string until component combinations is solved
        if (mandatoryCombinatorCount > 0 && mandatoryNonCombinatorsCount > 1) {
          types = addString(types);
          continue;
        }
      } else {
        // In case of `something another-thing?` we want to add string until component combinations is solved
        if (mandatoryCombinatorCount > 0 && mandatoryNonCombinatorsCount > 0) {
          types = addString(types);
          continue;
        }
      }

      if (isMandatoryMultiplied(entity.multiplier)) {
        // In case of `something{2,3}` we fallback to `string` and stop as it needs to be multiplied
        types = addString(types);
        continue;
      } else if (isOptionallyMultiplied(entity.multiplier)) {
        // In case of `something{1,2}` or `something+` we fallback to `string` but moves on
        // as it doesn't necessary needs to be multiplied
        types = addString(types);
      }

      switch (entity.component) {
        case Component.Keyword:
          if (String(Number(entity.value)) === entity.value) {
            types = addNumericLiteral(types, Number(entity.value));
          } else {
            types = addStringLiteral(types, entity.value);
          }
          break;
        case Component.DataType: {
          const value = entity.value.slice(1, -1);
          const property = /'([^']+)'/.exec(value);
          if (property) {
            const name = property[1];
            types = addPropertyReference(types, name);
          } else if (value in basicDataTypes) {
            types = addType(types, basicDataTypes[value]);
          } else {
            types = addDataType(types, value);
          }
          break;
        }
        case Component.Group: {
          for (const type of typing(entity.entities)) {
            types = addType(types, type);
          }
        }
      }
    } else if (isCombinator(entity)) {
      if (entity.combinator === Combinator.DoubleBar || isMandatoryEntity(entity)) {
        types = addString(types);
      }
    } else {
      types = addString(types);
    }
  }

  if (mandatoryNonCombinatorsCount > 1 && mandatoryCombinatorCount > 1) {
    return [{ type: Type.String }];
  }

  return types;
}

function addLength<TDataType extends IDataType>(types: Array<TypeType<TDataType>>): Array<TypeType<TDataType>> {
  if (types.every(type => type.type !== Type.Length)) {
    return [
      ...types,
      {
        type: Type.Length,
      },
    ];
  }

  return types;
}

function addString<TDataType extends IDataType>(types: Array<TypeType<TDataType>>): Array<TypeType<TDataType>> {
  if (types.every(type => type.type !== Type.String)) {
    return [
      ...types,
      {
        type: Type.String,
      },
    ];
  }

  return types;
}

function addNumber<TDataType extends IDataType>(types: Array<TypeType<TDataType>>): Array<TypeType<TDataType>> {
  if (types.every(type => type.type !== Type.Number)) {
    return [
      ...types,
      {
        type: Type.Number,
      },
    ];
  }

  return types;
}

function addStringLiteral<TDataType extends IDataType>(
  types: Array<TypeType<TDataType>>,
  literal: string,
): Array<TypeType<TDataType>> {
  if (types.every(type => !(type.type === Type.StringLiteral && type.literal === literal))) {
    return [
      ...types,
      {
        type: Type.StringLiteral,
        literal,
      },
    ];
  }

  return types;
}

function addNumericLiteral<TDataType extends IDataType>(
  types: Array<TypeType<TDataType>>,
  literal: number,
): Array<TypeType<TDataType>> {
  if (types.every(type => !(type.type === Type.NumericLiteral && type.literal === literal))) {
    return [
      ...types,
      {
        type: Type.NumericLiteral,
        literal,
      },
    ];
  }

  return types;
}

function addDataType<TDataType extends IDataType>(
  types: Array<TypeType<TDataType>>,
  name: string,
): Array<TypeType<TDataType>> {
  if (types.every(type => !(type.type === Type.DataType && type.name === name))) {
    return [
      ...types,
      {
        type: Type.DataType,
        name,
      } as TDataType,
    ];
  }

  return types;
}

function addPropertyReference<TDataType extends IDataType>(
  types: Array<TypeType<TDataType>>,
  name: string,
): Array<TypeType<TDataType>> {
  if (types.every(type => !(type.type === Type.PropertyReference && type.name === name))) {
    return [
      ...types,
      {
        type: Type.PropertyReference,
        name,
      } as TDataType,
    ];
  }

  return types;
}

export function addType<TDataType extends IDataType>(
  types: Array<TypeType<TDataType>>,
  type: TypeType,
): Array<TypeType<TDataType>> {
  switch (type.type) {
    case Type.Length:
      return addLength(types);
    case Type.String:
      return addString(types);
    case Type.Number:
      return addNumber(types);
    case Type.StringLiteral:
      return addStringLiteral(types, type.literal);
    case Type.NumericLiteral:
      return addNumericLiteral(types, type.literal);
    case Type.DataType:
      return addDataType(types, type.name);
    case Type.PropertyReference:
      return addPropertyReference(types, type.name);
  }
}

export function hasType(originalTypes: TypeType[], type: TypeType): boolean {
  const testTypes = addType(originalTypes, type);
  return originalTypes === testTypes;
}
