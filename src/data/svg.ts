// See https://github.com/mdn/data/issues/59, which remains open but is slowly resolved over the years.

import styleProperties from 'mdn-data/css/properties.json';

export const properties = Object.entries(styleProperties).reduce(
  (acc, [key, property]) => {
    if (key.startsWith('-')) {
      return acc;
    }

    switch (property.appliesto) {
      case 'allElementsAndText':
      case 'allElementsExceptTableRowColumnGroupsTableRowsColumns':
      case 'allElementsSVGContainerElements':
      case 'allElementsSVGContainerGraphicsAndGraphicsReferencingElements':
      case 'allElementsSomeValuesNoEffectOnNonInlineElements':
      case 'blockContainersFlexContainersGridContainersInlineBoxesTableRowsSVGTextContentElements':
      case 'inlineLevelBoxesAndSVGTextContentElements':
      case 'inlineLevelBoxesFlexItemsGridItemsTableCellsAndSVGTextContentElements':
      case 'limitedSVGElementsCircle':
      case 'limitedSVGElementsEllipse':
      case 'limitedSVGElementsEllipseRect':
      case 'limitedSVGElementsFilterPrimitives':
      case 'limitedSVGElementsFloodAndDropShadow':
      case 'limitedSVGElementsGeometry':
      case 'limitedSVGElementsGraphics':
      case 'limitedSVGElementsGraphicsAndUse':
      case 'limitedSVGElementsLightSource':
      case 'limitedSVGElementsPath':
      case 'limitedSVGElementsShapeText':
      case 'limitedSVGElementsShapes':
      case 'limitedSVGElementsStop':
      case 'limitedSVGElementsTextContent':
      case 'textAndSVGShapes': {
        acc[key] = property;
        break;
      }
    }

    return acc;
  },
  {
    clip: styleProperties.clip,
    'color-interpolation': {
      syntax: 'auto | sRGB | linearRGB',
      initial: 'sRGB',
      inherited: true,
      media: 'visual',
    },
    'color-rendering': {
      syntax: 'auto | optimizeSpeed | optimizeQuality',
      initial: 'auto',
      inherited: true,
      media: 'visual',
    },
    cursor: styleProperties.cursor,
    direction: styleProperties.direction,
    display: styleProperties.display,
    'glyph-orientation-vertical': {
      syntax: 'auto | <angle> | <number>',
      initial: 'auto',
      inherited: true,
      media: 'visual',
    },
    'image-rendering': styleProperties['image-rendering'],
    'letter-spacing': styleProperties['letter-spacing'],
    'line-height': styleProperties['line-height'],
    opacity: styleProperties.opacity,
    overflow: styleProperties.overflow,
    'paint-order': styleProperties['paint-order'],
    'pointer-events': styleProperties['pointer-events'],
    stroke: styleProperties.stroke,
    'text-decoration': styleProperties['text-decoration'],
    'text-rendering': styleProperties['text-rendering'],
    visibility: styleProperties.visibility,
    'white-space': styleProperties['white-space'],
    'word-spacing': styleProperties['word-spacing'],
  } as { [property: string]: Pick<MDN.Property, 'syntax' | 'initial' | 'inherited' | 'media'> },
);

export const syntaxes: MDN.Syntaxes = {};
