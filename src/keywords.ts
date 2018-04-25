import { isProperty, isSyntax, getSyntax, getPropertySyntax } from './data';
import parse, {
  Component,
  EntityType,
  ICombinator,
  isCombinator,
  isComponent,
  isCurlyBracesMultiplier,
} from './parser';

const CURLY_BRACES_MULTIPLIER_MAXIMUM = 3;

export function isCombinedKeywordsCandidate(entities: EntityType[]) {
  for (const entity of entities) {
    if (isCombinator(entity)) {
      continue;
    }
    if (isComponent(entity)) {
      switch (entity.component) {
        case Component.DataType: {
          if (isSyntax(entity.value) && !isCombinedKeywordsCandidate(parse(getSyntax(entity.value)))) {
            return false;
          }
          if (isProperty(entity.value) && !isCombinedKeywordsCandidate(parse(getPropertySyntax(entity.value)))) {
            return false;
          }

          // Missing or basic data type
          return false;
        }
        case Component.Group: {
          if (!isCombinedKeywordsCandidate(entity.entities)) {
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
        return false;
      }

      continue;
    }

    // This means we have something unknown or too complicated
    return false;
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
