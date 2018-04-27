import { isProperty, isSyntax, getSyntax, getPropertySyntax } from './data';
import parse, {
  Component,
  EntityType,
  ICombinator,
  isCombinator,
  isComponent,
  isCurlyBracesMultiplier,
} from './parser';
import { TypeType } from './typer';

const CURLY_BRACES_MULTIPLIER_MAXIMUM = 3;

export function combineKeywords(entities: EntityType[]) {
  const types: TypeType[] = [];
  const combinator = precedenceCombinator(entities);

  for (const entity of entities) {
    if (isComponent(entity)) {
      switch (entity.component) {
        case Component.DataType: {
          if (isSyntax(entity.value)) {
            const keywords = combineKeywords(parse(getSyntax(entity.value)));
          }
          if (isProperty(entity.value) && !combineKeywords(parse(getPropertySyntax(entity.value)))) {
            return null;
          }

          // Missing or basic data type
          return false;
        }
        case Component.Group: {
          if (!combineKeywords(entity.entities)) {
            return false;
          }
          break;
        }
      }

      if (
        entity.multiplier !== null &&
        // We can work with a small amount. But too many isn't worth it.
        !(isCurlyBracesMultiplier(entity.multiplier) && entity.multiplier.max < CURLY_BRACES_MULTIPLIER_MAXIMUM)
      ) {
        return null;
      }

      continue;
    }
  }

  return true;
}

export function precedenceCombinator(entities: EntityType[]) {
  let combinator: ICombinator | null = null;

  for (const entity of entities) {
    if (isCombinator(entity)) {
      if (!combinator) {
        combinator = entity;
      }
      if (combinator !== entity) {
        // This should never happen if grouping works as it should. So we just wnt to make sure.
        throw new Error('Combinators must be grouped by precedence');
      }
    }
  }

  return combinator;
}
