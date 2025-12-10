import { definitionSyntax, DSNode, DSNodeGroup } from 'css-tree';

export enum Type {
  Alias,
  DataType,
  PropertyReference,
  Length,
  Time,
  StringLiteral,
  NumericLiteral,
  Array,
  String,
  Number,
}

interface IBasic {
  type: Type.String | Type.Number | Type.Length | Type.Time;
}

export interface IDataType<TTypeKind = Type.DataType | Type.PropertyReference> {
  type: TTypeKind;
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

export default function typer(node: DSNodeGroup): TypeType[] {
  const types: TypeType[] = [];
  let hasStringKeyword = false;
  let hasNumbericKeyword = false;
  let hasLength = false;
  let hasTime = false;
  const stringLiterals: string[] = [];
  const numericLiterals: string[] = [];
  const dataTypes: string[] = [];
  const propertyReferences: string[] = [];

  let insideFunction = 0;
  let skipComponent = 0;
  const componentsToSkip: DSNode[] = [];

  definitionSyntax.walk(node, {
    enter(child) {
      if (skipComponent > 0 || componentsToSkip.includes(child)) {
        if (!hasStringKeyword) {
          types.push({ type: Type.String });
          hasStringKeyword = true;
        }

        skipComponent++;
        return;
      }

      if (insideFunction > 0) {
        if (child.type === 'Token' && child.value === ')') {
          insideFunction--;
        }

        return;
      }

      switch (child.type) {
        case 'Group':
          if (child.terms.length < 2) {
            break;
          }

          // Comma is an optional separator, like | but with a comma
          if (isCommaSeparator(child.terms)) {
            if (child.combinator !== ' ') {
              throw new Error('Cannot assume whitespace combinator with comma anymore');
            }

            break;
          }

          if (child.combinator === ' ' || child.combinator === '&&' || child.combinator === '||') {
            if (!hasStringKeyword) {
              types.push({ type: Type.String });
              hasStringKeyword = true;
            }

            let mandatoryTermsInGroup = 0;
            const optionalComponents: DSNode[] = [];

            if (child.combinator !== '||') {
              for (const term of child.terms) {
                if (term.type === 'Multiplier') {
                  if (term.min > 0) {
                    mandatoryTermsInGroup++;
                  } else {
                    optionalComponents.push(term);
                  }
                } else {
                  mandatoryTermsInGroup++;
                }
              }

              if (mandatoryTermsInGroup > 1) {
                // The whole group resolves to string for now,
                // like `something another-thing`
                skipComponent++;
              } else if (mandatoryTermsInGroup === 1) {
                // Proceed with the only mandatory term in group,
                // like `something another-thing?`
                componentsToSkip.push(...optionalComponents);
              }
            }
          }
          break;
        case 'Function': {
          insideFunction++;

          // Skip functions since they may cause recurring data types
          if (!hasStringKeyword) {
            types.push({ type: Type.String });
            hasStringKeyword = true;
          }
          break;
        }
        case 'Multiplier':
          if (child.min > 1) {
            skipComponent++;

            if (!hasStringKeyword) {
              types.push({ type: Type.String });
              hasStringKeyword = true;
            }
          }
          if (child.max === 0 || child.max > 1) {
            if (!hasStringKeyword) {
              types.push({ type: Type.String });
              hasStringKeyword = true;
            }
          }
          break;
        case 'Keyword':
          if (child.name === String(parseInt(child.name))) {
            if (!numericLiterals.includes(child.name)) {
              types.push({ type: Type.NumericLiteral, literal: parseInt(child.name) });
              numericLiterals.push(child.name);
            }
          } else {
            if (!stringLiterals.includes(child.name)) {
              types.push({ type: Type.StringLiteral, literal: child.name });
              stringLiterals.push(child.name);
            }
          }
          break;
        case 'Type':
          switch (child.name) {
            case 'number':
            case 'integer':
              if (!hasNumbericKeyword) {
                types.push({ type: Type.Number });
                hasNumbericKeyword = true;
              }
              break;
            case 'length':
              if (!hasLength) {
                types.push({ type: Type.Length });
                hasLength = true;
              }
              break;
            case 'time':
              if (!hasTime) {
                types.push({ type: Type.Time });
                hasTime = true;
              }
              break;
            case 'string':
              if (!hasStringKeyword) {
                types.push({ type: Type.String });
                hasStringKeyword = true;
              }
              break;
            default:
              if (!dataTypes.includes(child.name)) {
                types.push({ type: Type.DataType, name: child.name });
                dataTypes.push(child.name);
              }
              break;
          }
          break;
        case 'Property':
          if (!propertyReferences.includes(child.name)) {
            types.push({ type: Type.PropertyReference, name: child.name });
            propertyReferences.push(child.name);
          }
          break;
        default:
          if (!hasStringKeyword) {
            types.push({ type: Type.String });
            hasStringKeyword = true;
          }
          skipComponent++;
          break;
      }
    },
    leave() {
      if (skipComponent > 0) {
        skipComponent--;
      }
    },
  });
  return types;
}

export function hasType(types: TypeType[], type: TypeType): boolean {
  switch (type.type) {
    case Type.Length:
      return types.some(t => t.type === Type.Length);
    case Type.Time:
      return types.some(t => t.type === Type.Time);
    case Type.String:
      return types.some(t => t.type === Type.String);
    case Type.Number:
      return types.some(t => t.type === Type.Number);
    case Type.StringLiteral:
      return types.some(t => t.type === Type.StringLiteral && t.literal === type.literal);
    case Type.NumericLiteral:
      return types.some(t => t.type === Type.NumericLiteral && t.literal === type.literal);
    case Type.DataType:
      return types.some(t => t.type === Type.DataType && t.name === type.name);
    case Type.PropertyReference:
      return types.some(t => t.type === Type.PropertyReference && t.name === type.name);
  }
}

function isCommaSeparator(terms: DSNode[]) {
  for (const term of terms) {
    if (term.type === 'Comma') {
      return true;
    }
  }

  return false;
}
