export as namespace CSS;

export interface StandardProperties<TLength = string> {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  animation?: Animation;
  animationDelay?: AnimationDelay;
  animationDirection?: AnimationDirection;
  animationDuration?: AnimationDuration;
  animationFillMode?: AnimationFillMode;
  animationIterationCount?: AnimationIterationCount;
  animationName?: AnimationName;
  animationPlayState?: AnimationPlayState;
  animationTimingFunction?: AnimationTimingFunction;
  appearance?: Appearance;
  azimuth?: Azimuth;
  backdropFilter?: BackdropFilter;
  backfaceVisibility?: BackfaceVisibility;
  background?: Background;
  backgroundAttachment?: BackgroundAttachment;
  backgroundBlendMode?: BackgroundBlendMode;
  backgroundClip?: BackgroundClip;
  backgroundColor?: BackgroundColor;
  backgroundImage?: BackgroundImage;
  backgroundOrigin?: BackgroundOrigin;
  backgroundPosition?: BackgroundPosition;
  backgroundPositionX?: BackgroundPositionX;
  backgroundPositionY?: BackgroundPositionY;
  backgroundRepeat?: BackgroundRepeat;
  backgroundSize?: BackgroundSize;
  blockSize?: BlockSize;
  border?: Border<TLength>;
  borderBlockEnd?: BorderBlockEnd;
  borderBlockEndColor?: BorderBlockEndColor;
  borderBlockEndStyle?: BorderBlockEndStyle;
  borderBlockEndWidth?: BorderBlockEndWidth;
  borderBlockStart?: BorderBlockStart;
  borderBlockStartColor?: BorderBlockStartColor;
  borderBlockStartStyle?: BorderBlockStartStyle;
  borderBlockStartWidth?: BorderBlockStartWidth;
  borderBottom?: BorderBottom<TLength>;
  borderBottomColor?: BorderBottomColor;
  borderBottomLeftRadius?: BorderBottomLeftRadius<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadius<TLength>;
  borderBottomStyle?: BorderBottomStyle;
  borderBottomWidth?: BorderBottomWidth<TLength>;
  borderCollapse?: BorderCollapse;
  borderColor?: BorderColor;
  borderImage?: BorderImage;
  borderImageOutset?: BorderImageOutset;
  borderImageRepeat?: BorderImageRepeat;
  borderImageSlice?: BorderImageSlice;
  borderImageSource?: BorderImageSource;
  borderImageWidth?: BorderImageWidth;
  borderInlineEnd?: BorderInlineEnd;
  borderInlineEndColor?: BorderInlineEndColor;
  borderInlineEndStyle?: BorderInlineEndStyle;
  borderInlineEndWidth?: BorderInlineEndWidth;
  borderInlineStart?: BorderInlineStart;
  borderInlineStartColor?: BorderInlineStartColor;
  borderInlineStartStyle?: BorderInlineStartStyle;
  borderInlineStartWidth?: BorderInlineStartWidth;
  borderLeft?: BorderLeft<TLength>;
  borderLeftColor?: BorderLeftColor;
  borderLeftStyle?: BorderLeftStyle;
  borderLeftWidth?: BorderLeftWidth<TLength>;
  borderRadius?: BorderRadius;
  borderRight?: BorderRight<TLength>;
  borderRightColor?: BorderRightColor;
  borderRightStyle?: BorderRightStyle;
  borderRightWidth?: BorderRightWidth<TLength>;
  borderSpacing?: BorderSpacing;
  borderStyle?: BorderStyle;
  borderTop?: BorderTop<TLength>;
  borderTopColor?: BorderTopColor;
  borderTopLeftRadius?: BorderTopLeftRadius<TLength>;
  borderTopRightRadius?: BorderTopRightRadius<TLength>;
  borderTopStyle?: BorderTopStyle;
  borderTopWidth?: BorderTopWidth<TLength>;
  borderWidth?: BorderWidth<TLength>;
  bottom?: Bottom<TLength>;
  boxAlign?: BoxAlign;
  boxDecorationBreak?: BoxDecorationBreak;
  boxDirection?: BoxDirection;
  boxFlex?: BoxFlex;
  boxFlexGroup?: BoxFlexGroup;
  boxLines?: BoxLines;
  boxOrdinalGroup?: BoxOrdinalGroup;
  boxOrient?: BoxOrient;
  boxPack?: BoxPack;
  boxShadow?: BoxShadow;
  boxSizing?: BoxSizing;
  breakAfter?: BreakAfter;
  breakBefore?: BreakBefore;
  breakInside?: BreakInside;
  captionSide?: CaptionSide;
  caretColor?: CaretColor;
  clear?: Clear;
  clip?: Clip;
  clipPath?: ClipPath;
  color?: Color;
  columnCount?: ColumnCount;
  columnFill?: ColumnFill;
  columnGap?: ColumnGap<TLength>;
  columnRule?: ColumnRule;
  columnRuleColor?: ColumnRuleColor;
  columnRuleStyle?: ColumnRuleStyle;
  columnRuleWidth?: ColumnRuleWidth<TLength>;
  columnSpan?: ColumnSpan;
  columnWidth?: ColumnWidth<TLength>;
  columns?: Columns;
  contain?: Contain;
  content?: Content;
  counterIncrement?: CounterIncrement;
  counterReset?: CounterReset;
  cursor?: Cursor;
  direction?: Direction;
  display?: Display;
  displayInside?: DisplayInside;
  displayList?: DisplayList;
  displayOutside?: DisplayOutside;
  emptyCells?: EmptyCells;
  filter?: Filter;
  flex?: Flex;
  flexBasis?: FlexBasis;
  flexDirection?: FlexDirection;
  flexFlow?: FlexFlow;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexWrap?: FlexWrap;
  float?: Float;
  font?: Font;
  fontFamily?: FontFamily;
  fontFeatureSettings?: FontFeatureSettings;
  fontKerning?: FontKerning;
  fontLanguageOverride?: FontLanguageOverride;
  fontVariationSettings?: FontVariationSettings;
  fontSize?: FontSize<TLength>;
  fontSizeAdjust?: FontSizeAdjust;
  fontStretch?: FontStretch;
  fontStyle?: FontStyle;
  fontSynthesis?: FontSynthesis;
  fontVariant?: FontVariant;
  fontVariantAlternates?: FontVariantAlternates;
  fontVariantCaps?: FontVariantCaps;
  fontVariantEastAsian?: FontVariantEastAsian;
  fontVariantLigatures?: FontVariantLigatures;
  fontVariantNumeric?: FontVariantNumeric;
  fontVariantPosition?: FontVariantPosition;
  fontWeight?: FontWeight;
  grid?: Grid;
  gridArea?: GridArea;
  gridAutoColumns?: GridAutoColumns;
  gridAutoFlow?: GridAutoFlow;
  gridAutoRows?: GridAutoRows;
  gridColumn?: GridColumn;
  gridColumnEnd?: GridColumnEnd;
  gridColumnGap?: GridColumnGap<TLength>;
  gridColumnStart?: GridColumnStart;
  gridGap?: GridGap;
  gridRow?: GridRow;
  gridRowEnd?: GridRowEnd;
  gridRowGap?: GridRowGap<TLength>;
  gridRowStart?: GridRowStart;
  gridTemplate?: GridTemplate;
  gridTemplateAreas?: GridTemplateAreas;
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateRows?: GridTemplateRows;
  height?: Height;
  hyphens?: Hyphens;
  imageOrientation?: ImageOrientation;
  imageRendering?: ImageRendering;
  imageResolution?: ImageResolution;
  imeMode?: ImeMode;
  initialLetter?: InitialLetter;
  initialLetterAlign?: InitialLetterAlign;
  inlineSize?: InlineSize;
  isolation?: Isolation;
  justifyContent?: JustifyContent;
  left?: Left<TLength>;
  letterSpacing?: LetterSpacing<TLength>;
  lineBreak?: LineBreak;
  lineHeight?: LineHeight<TLength>;
  listStyle?: ListStyle;
  listStyleImage?: ListStyleImage;
  listStylePosition?: ListStylePosition;
  listStyleType?: ListStyleType;
  margin?: Margin;
  marginBlockEnd?: MarginBlockEnd;
  marginBlockStart?: MarginBlockStart;
  marginBottom?: MarginBottom<TLength>;
  marginInlineEnd?: MarginInlineEnd;
  marginInlineStart?: MarginInlineStart;
  marginLeft?: MarginLeft<TLength>;
  marginRight?: MarginRight<TLength>;
  marginTop?: MarginTop<TLength>;
  markerOffset?: MarkerOffset<TLength>;
  mask?: Mask;
  maskClip?: MaskClip;
  maskComposite?: MaskComposite;
  maskImage?: MaskImage;
  maskMode?: MaskMode;
  maskOrigin?: MaskOrigin;
  maskPosition?: MaskPosition;
  maskRepeat?: MaskRepeat;
  maskSize?: MaskSize;
  maskType?: MaskType;
  maxBlockSize?: MaxBlockSize;
  maxHeight?: MaxHeight<TLength>;
  maxInlineSize?: MaxInlineSize;
  maxWidth?: MaxWidth<TLength>;
  minBlockSize?: MinBlockSize;
  minHeight?: MinHeight<TLength>;
  minInlineSize?: MinInlineSize;
  minWidth?: MinWidth<TLength>;
  mixBlendMode?: MixBlendMode;
  objectFit?: ObjectFit;
  objectPosition?: ObjectPosition;
  offset?: Offset;
  offsetAnchor?: OffsetAnchor;
  offsetBlockEnd?: OffsetBlockEnd;
  offsetBlockStart?: OffsetBlockStart;
  offsetInlineEnd?: OffsetInlineEnd;
  offsetInlineStart?: OffsetInlineStart;
  offsetDistance?: OffsetDistance<TLength>;
  offsetPath?: OffsetPath;
  offsetPosition?: OffsetPosition;
  offsetRotate?: OffsetRotate;
  opacity?: Opacity;
  order?: Order;
  orphans?: Orphans;
  outline?: Outline;
  outlineColor?: OutlineColor;
  outlineOffset?: OutlineOffset<TLength>;
  outlineStyle?: OutlineStyle;
  outlineWidth?: OutlineWidth<TLength>;
  overflow?: Overflow;
  overflowClipBox?: OverflowClipBox;
  overflowWrap?: OverflowWrap;
  overflowX?: OverflowX;
  overflowY?: OverflowY;
  padding?: Padding;
  paddingBlockEnd?: PaddingBlockEnd;
  paddingBlockStart?: PaddingBlockStart;
  paddingBottom?: PaddingBottom<TLength>;
  paddingInlineEnd?: PaddingInlineEnd;
  paddingInlineStart?: PaddingInlineStart;
  paddingLeft?: PaddingLeft<TLength>;
  paddingRight?: PaddingRight<TLength>;
  paddingTop?: PaddingTop<TLength>;
  pageBreakAfter?: PageBreakAfter;
  pageBreakBefore?: PageBreakBefore;
  pageBreakInside?: PageBreakInside;
  perspective?: Perspective<TLength>;
  perspectiveOrigin?: PerspectiveOrigin;
  pointerEvents?: PointerEvents;
  position?: Position;
  quotes?: Quotes;
  resize?: Resize;
  right?: Right<TLength>;
  rubyAlign?: RubyAlign;
  rubyMerge?: RubyMerge;
  rubyPosition?: RubyPosition;
  scrollBehavior?: ScrollBehavior;
  scrollSnapCoordinate?: ScrollSnapCoordinate;
  scrollSnapDestination?: ScrollSnapDestination;
  scrollSnapPointsX?: ScrollSnapPointsX;
  scrollSnapPointsY?: ScrollSnapPointsY;
  scrollSnapType?: ScrollSnapType;
  scrollSnapTypeX?: ScrollSnapTypeX;
  scrollSnapTypeY?: ScrollSnapTypeY;
  shapeImageThreshold?: ShapeImageThreshold;
  shapeMargin?: ShapeMargin<TLength>;
  shapeOutside?: ShapeOutside;
  tabSize?: TabSize<TLength>;
  tableLayout?: TableLayout;
  textAlign?: TextAlign;
  textAlignLast?: TextAlignLast;
  textCombineUpright?: TextCombineUpright;
  textDecoration?: TextDecoration;
  textDecorationColor?: TextDecorationColor;
  textDecorationLine?: TextDecorationLine;
  textDecorationSkip?: TextDecorationSkip;
  textDecorationStyle?: TextDecorationStyle;
  textEmphasis?: TextEmphasis;
  textEmphasisColor?: TextEmphasisColor;
  textEmphasisPosition?: TextEmphasisPosition;
  textEmphasisStyle?: TextEmphasisStyle;
  textIndent?: TextIndent;
  textJustify?: TextJustify;
  textOrientation?: TextOrientation;
  textOverflow?: TextOverflow;
  textRendering?: TextRendering;
  textShadow?: TextShadow;
  textSizeAdjust?: TextSizeAdjust;
  textTransform?: TextTransform;
  textUnderlinePosition?: TextUnderlinePosition;
  top?: Top<TLength>;
  touchAction?: TouchAction;
  transform?: Transform;
  transformBox?: TransformBox;
  transformOrigin?: TransformOrigin;
  transformStyle?: TransformStyle;
  transition?: Transition;
  transitionDelay?: TransitionDelay;
  transitionDuration?: TransitionDuration;
  transitionProperty?: TransitionProperty;
  transitionTimingFunction?: TransitionTimingFunction;
  unicodeBidi?: UnicodeBidi;
  userSelect?: UserSelect;
  verticalAlign?: VerticalAlign<TLength>;
  visibility?: Visibility;
  whiteSpace?: WhiteSpace;
  widows?: Widows;
  width?: Width;
  willChange?: WillChange;
  wordBreak?: WordBreak;
  wordSpacing?: WordSpacing<TLength>;
  wordWrap?: WordWrap;
  writingMode?: WritingMode;
  zIndex?: ZIndex;
}

export interface StandardPropertiesFallback<TLength = string> {
  alignContent?: AlignContent | AlignContent[];
  alignItems?: AlignItems | AlignItems[];
  alignSelf?: AlignSelf | AlignSelf[];
  animation?: Animation | Animation[];
  animationDelay?: AnimationDelay | AnimationDelay[];
  animationDirection?: AnimationDirection | AnimationDirection[];
  animationDuration?: AnimationDuration | AnimationDuration[];
  animationFillMode?: AnimationFillMode | AnimationFillMode[];
  animationIterationCount?: AnimationIterationCount | AnimationIterationCount[];
  animationName?: AnimationName | AnimationName[];
  animationPlayState?: AnimationPlayState | AnimationPlayState[];
  animationTimingFunction?: AnimationTimingFunction | AnimationTimingFunction[];
  appearance?: Appearance | Appearance[];
  azimuth?: Azimuth | Azimuth[];
  backdropFilter?: BackdropFilter | BackdropFilter[];
  backfaceVisibility?: BackfaceVisibility | BackfaceVisibility[];
  background?: Background | Background[];
  backgroundAttachment?: BackgroundAttachment | BackgroundAttachment[];
  backgroundBlendMode?: BackgroundBlendMode | BackgroundBlendMode[];
  backgroundClip?: BackgroundClip | BackgroundClip[];
  backgroundColor?: BackgroundColor | BackgroundColor[];
  backgroundImage?: BackgroundImage | BackgroundImage[];
  backgroundOrigin?: BackgroundOrigin | BackgroundOrigin[];
  backgroundPosition?: BackgroundPosition | BackgroundPosition[];
  backgroundPositionX?: BackgroundPositionX | BackgroundPositionX[];
  backgroundPositionY?: BackgroundPositionY | BackgroundPositionY[];
  backgroundRepeat?: BackgroundRepeat | BackgroundRepeat[];
  backgroundSize?: BackgroundSize | BackgroundSize[];
  blockSize?: BlockSize | BlockSize[];
  border?: Border<TLength> | Border<TLength>[];
  borderBlockEnd?: BorderBlockEnd | BorderBlockEnd[];
  borderBlockEndColor?: BorderBlockEndColor | BorderBlockEndColor[];
  borderBlockEndStyle?: BorderBlockEndStyle | BorderBlockEndStyle[];
  borderBlockEndWidth?: BorderBlockEndWidth | BorderBlockEndWidth[];
  borderBlockStart?: BorderBlockStart | BorderBlockStart[];
  borderBlockStartColor?: BorderBlockStartColor | BorderBlockStartColor[];
  borderBlockStartStyle?: BorderBlockStartStyle | BorderBlockStartStyle[];
  borderBlockStartWidth?: BorderBlockStartWidth | BorderBlockStartWidth[];
  borderBottom?: BorderBottom<TLength> | BorderBottom<TLength>[];
  borderBottomColor?: BorderBottomColor | BorderBottomColor[];
  borderBottomLeftRadius?: BorderBottomLeftRadius<TLength> | BorderBottomLeftRadius<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadius<TLength> | BorderBottomRightRadius<TLength>[];
  borderBottomStyle?: BorderBottomStyle | BorderBottomStyle[];
  borderBottomWidth?: BorderBottomWidth<TLength> | BorderBottomWidth<TLength>[];
  borderCollapse?: BorderCollapse | BorderCollapse[];
  borderColor?: BorderColor | BorderColor[];
  borderImage?: BorderImage | BorderImage[];
  borderImageOutset?: BorderImageOutset | BorderImageOutset[];
  borderImageRepeat?: BorderImageRepeat | BorderImageRepeat[];
  borderImageSlice?: BorderImageSlice | BorderImageSlice[];
  borderImageSource?: BorderImageSource | BorderImageSource[];
  borderImageWidth?: BorderImageWidth | BorderImageWidth[];
  borderInlineEnd?: BorderInlineEnd | BorderInlineEnd[];
  borderInlineEndColor?: BorderInlineEndColor | BorderInlineEndColor[];
  borderInlineEndStyle?: BorderInlineEndStyle | BorderInlineEndStyle[];
  borderInlineEndWidth?: BorderInlineEndWidth | BorderInlineEndWidth[];
  borderInlineStart?: BorderInlineStart | BorderInlineStart[];
  borderInlineStartColor?: BorderInlineStartColor | BorderInlineStartColor[];
  borderInlineStartStyle?: BorderInlineStartStyle | BorderInlineStartStyle[];
  borderInlineStartWidth?: BorderInlineStartWidth | BorderInlineStartWidth[];
  borderLeft?: BorderLeft<TLength> | BorderLeft<TLength>[];
  borderLeftColor?: BorderLeftColor | BorderLeftColor[];
  borderLeftStyle?: BorderLeftStyle | BorderLeftStyle[];
  borderLeftWidth?: BorderLeftWidth<TLength> | BorderLeftWidth<TLength>[];
  borderRadius?: BorderRadius | BorderRadius[];
  borderRight?: BorderRight<TLength> | BorderRight<TLength>[];
  borderRightColor?: BorderRightColor | BorderRightColor[];
  borderRightStyle?: BorderRightStyle | BorderRightStyle[];
  borderRightWidth?: BorderRightWidth<TLength> | BorderRightWidth<TLength>[];
  borderSpacing?: BorderSpacing | BorderSpacing[];
  borderStyle?: BorderStyle | BorderStyle[];
  borderTop?: BorderTop<TLength> | BorderTop<TLength>[];
  borderTopColor?: BorderTopColor | BorderTopColor[];
  borderTopLeftRadius?: BorderTopLeftRadius<TLength> | BorderTopLeftRadius<TLength>[];
  borderTopRightRadius?: BorderTopRightRadius<TLength> | BorderTopRightRadius<TLength>[];
  borderTopStyle?: BorderTopStyle | BorderTopStyle[];
  borderTopWidth?: BorderTopWidth<TLength> | BorderTopWidth<TLength>[];
  borderWidth?: BorderWidth<TLength> | BorderWidth<TLength>[];
  bottom?: Bottom<TLength> | Bottom<TLength>[];
  boxAlign?: BoxAlign | BoxAlign[];
  boxDecorationBreak?: BoxDecorationBreak | BoxDecorationBreak[];
  boxDirection?: BoxDirection | BoxDirection[];
  boxFlex?: BoxFlex | BoxFlex[];
  boxFlexGroup?: BoxFlexGroup | BoxFlexGroup[];
  boxLines?: BoxLines | BoxLines[];
  boxOrdinalGroup?: BoxOrdinalGroup | BoxOrdinalGroup[];
  boxOrient?: BoxOrient | BoxOrient[];
  boxPack?: BoxPack | BoxPack[];
  boxShadow?: BoxShadow | BoxShadow[];
  boxSizing?: BoxSizing | BoxSizing[];
  breakAfter?: BreakAfter | BreakAfter[];
  breakBefore?: BreakBefore | BreakBefore[];
  breakInside?: BreakInside | BreakInside[];
  captionSide?: CaptionSide | CaptionSide[];
  caretColor?: CaretColor | CaretColor[];
  clear?: Clear | Clear[];
  clip?: Clip | Clip[];
  clipPath?: ClipPath | ClipPath[];
  color?: Color | Color[];
  columnCount?: ColumnCount | ColumnCount[];
  columnFill?: ColumnFill | ColumnFill[];
  columnGap?: ColumnGap<TLength> | ColumnGap<TLength>[];
  columnRule?: ColumnRule | ColumnRule[];
  columnRuleColor?: ColumnRuleColor | ColumnRuleColor[];
  columnRuleStyle?: ColumnRuleStyle | ColumnRuleStyle[];
  columnRuleWidth?: ColumnRuleWidth<TLength> | ColumnRuleWidth<TLength>[];
  columnSpan?: ColumnSpan | ColumnSpan[];
  columnWidth?: ColumnWidth<TLength> | ColumnWidth<TLength>[];
  columns?: Columns | Columns[];
  contain?: Contain | Contain[];
  content?: Content | Content[];
  counterIncrement?: CounterIncrement | CounterIncrement[];
  counterReset?: CounterReset | CounterReset[];
  cursor?: Cursor | Cursor[];
  direction?: Direction | Direction[];
  display?: Display | Display[];
  displayInside?: DisplayInside | DisplayInside[];
  displayList?: DisplayList | DisplayList[];
  displayOutside?: DisplayOutside | DisplayOutside[];
  emptyCells?: EmptyCells | EmptyCells[];
  filter?: Filter | Filter[];
  flex?: Flex | Flex[];
  flexBasis?: FlexBasis | FlexBasis[];
  flexDirection?: FlexDirection | FlexDirection[];
  flexFlow?: FlexFlow | FlexFlow[];
  flexGrow?: FlexGrow | FlexGrow[];
  flexShrink?: FlexShrink | FlexShrink[];
  flexWrap?: FlexWrap | FlexWrap[];
  float?: Float | Float[];
  font?: Font | Font[];
  fontFamily?: FontFamily | FontFamily[];
  fontFeatureSettings?: FontFeatureSettings | FontFeatureSettings[];
  fontKerning?: FontKerning | FontKerning[];
  fontLanguageOverride?: FontLanguageOverride | FontLanguageOverride[];
  fontVariationSettings?: FontVariationSettings | FontVariationSettings[];
  fontSize?: FontSize<TLength> | FontSize<TLength>[];
  fontSizeAdjust?: FontSizeAdjust | FontSizeAdjust[];
  fontStretch?: FontStretch | FontStretch[];
  fontStyle?: FontStyle | FontStyle[];
  fontSynthesis?: FontSynthesis | FontSynthesis[];
  fontVariant?: FontVariant | FontVariant[];
  fontVariantAlternates?: FontVariantAlternates | FontVariantAlternates[];
  fontVariantCaps?: FontVariantCaps | FontVariantCaps[];
  fontVariantEastAsian?: FontVariantEastAsian | FontVariantEastAsian[];
  fontVariantLigatures?: FontVariantLigatures | FontVariantLigatures[];
  fontVariantNumeric?: FontVariantNumeric | FontVariantNumeric[];
  fontVariantPosition?: FontVariantPosition | FontVariantPosition[];
  fontWeight?: FontWeight | FontWeight[];
  grid?: Grid | Grid[];
  gridArea?: GridArea | GridArea[];
  gridAutoColumns?: GridAutoColumns | GridAutoColumns[];
  gridAutoFlow?: GridAutoFlow | GridAutoFlow[];
  gridAutoRows?: GridAutoRows | GridAutoRows[];
  gridColumn?: GridColumn | GridColumn[];
  gridColumnEnd?: GridColumnEnd | GridColumnEnd[];
  gridColumnGap?: GridColumnGap<TLength> | GridColumnGap<TLength>[];
  gridColumnStart?: GridColumnStart | GridColumnStart[];
  gridGap?: GridGap | GridGap[];
  gridRow?: GridRow | GridRow[];
  gridRowEnd?: GridRowEnd | GridRowEnd[];
  gridRowGap?: GridRowGap<TLength> | GridRowGap<TLength>[];
  gridRowStart?: GridRowStart | GridRowStart[];
  gridTemplate?: GridTemplate | GridTemplate[];
  gridTemplateAreas?: GridTemplateAreas | GridTemplateAreas[];
  gridTemplateColumns?: GridTemplateColumns | GridTemplateColumns[];
  gridTemplateRows?: GridTemplateRows | GridTemplateRows[];
  height?: Height | Height[];
  hyphens?: Hyphens | Hyphens[];
  imageOrientation?: ImageOrientation | ImageOrientation[];
  imageRendering?: ImageRendering | ImageRendering[];
  imageResolution?: ImageResolution | ImageResolution[];
  imeMode?: ImeMode | ImeMode[];
  initialLetter?: InitialLetter | InitialLetter[];
  initialLetterAlign?: InitialLetterAlign | InitialLetterAlign[];
  inlineSize?: InlineSize | InlineSize[];
  isolation?: Isolation | Isolation[];
  justifyContent?: JustifyContent | JustifyContent[];
  left?: Left<TLength> | Left<TLength>[];
  letterSpacing?: LetterSpacing<TLength> | LetterSpacing<TLength>[];
  lineBreak?: LineBreak | LineBreak[];
  lineHeight?: LineHeight<TLength> | LineHeight<TLength>[];
  listStyle?: ListStyle | ListStyle[];
  listStyleImage?: ListStyleImage | ListStyleImage[];
  listStylePosition?: ListStylePosition | ListStylePosition[];
  listStyleType?: ListStyleType | ListStyleType[];
  margin?: Margin | Margin[];
  marginBlockEnd?: MarginBlockEnd | MarginBlockEnd[];
  marginBlockStart?: MarginBlockStart | MarginBlockStart[];
  marginBottom?: MarginBottom<TLength> | MarginBottom<TLength>[];
  marginInlineEnd?: MarginInlineEnd | MarginInlineEnd[];
  marginInlineStart?: MarginInlineStart | MarginInlineStart[];
  marginLeft?: MarginLeft<TLength> | MarginLeft<TLength>[];
  marginRight?: MarginRight<TLength> | MarginRight<TLength>[];
  marginTop?: MarginTop<TLength> | MarginTop<TLength>[];
  markerOffset?: MarkerOffset<TLength> | MarkerOffset<TLength>[];
  mask?: Mask | Mask[];
  maskClip?: MaskClip | MaskClip[];
  maskComposite?: MaskComposite | MaskComposite[];
  maskImage?: MaskImage | MaskImage[];
  maskMode?: MaskMode | MaskMode[];
  maskOrigin?: MaskOrigin | MaskOrigin[];
  maskPosition?: MaskPosition | MaskPosition[];
  maskRepeat?: MaskRepeat | MaskRepeat[];
  maskSize?: MaskSize | MaskSize[];
  maskType?: MaskType | MaskType[];
  maxBlockSize?: MaxBlockSize | MaxBlockSize[];
  maxHeight?: MaxHeight<TLength> | MaxHeight<TLength>[];
  maxInlineSize?: MaxInlineSize | MaxInlineSize[];
  maxWidth?: MaxWidth<TLength> | MaxWidth<TLength>[];
  minBlockSize?: MinBlockSize | MinBlockSize[];
  minHeight?: MinHeight<TLength> | MinHeight<TLength>[];
  minInlineSize?: MinInlineSize | MinInlineSize[];
  minWidth?: MinWidth<TLength> | MinWidth<TLength>[];
  mixBlendMode?: MixBlendMode | MixBlendMode[];
  objectFit?: ObjectFit | ObjectFit[];
  objectPosition?: ObjectPosition | ObjectPosition[];
  offset?: Offset | Offset[];
  offsetAnchor?: OffsetAnchor | OffsetAnchor[];
  offsetBlockEnd?: OffsetBlockEnd | OffsetBlockEnd[];
  offsetBlockStart?: OffsetBlockStart | OffsetBlockStart[];
  offsetInlineEnd?: OffsetInlineEnd | OffsetInlineEnd[];
  offsetInlineStart?: OffsetInlineStart | OffsetInlineStart[];
  offsetDistance?: OffsetDistance<TLength> | OffsetDistance<TLength>[];
  offsetPath?: OffsetPath | OffsetPath[];
  offsetPosition?: OffsetPosition | OffsetPosition[];
  offsetRotate?: OffsetRotate | OffsetRotate[];
  opacity?: Opacity | Opacity[];
  order?: Order | Order[];
  orphans?: Orphans | Orphans[];
  outline?: Outline | Outline[];
  outlineColor?: OutlineColor | OutlineColor[];
  outlineOffset?: OutlineOffset<TLength> | OutlineOffset<TLength>[];
  outlineStyle?: OutlineStyle | OutlineStyle[];
  outlineWidth?: OutlineWidth<TLength> | OutlineWidth<TLength>[];
  overflow?: Overflow | Overflow[];
  overflowClipBox?: OverflowClipBox | OverflowClipBox[];
  overflowWrap?: OverflowWrap | OverflowWrap[];
  overflowX?: OverflowX | OverflowX[];
  overflowY?: OverflowY | OverflowY[];
  padding?: Padding | Padding[];
  paddingBlockEnd?: PaddingBlockEnd | PaddingBlockEnd[];
  paddingBlockStart?: PaddingBlockStart | PaddingBlockStart[];
  paddingBottom?: PaddingBottom<TLength> | PaddingBottom<TLength>[];
  paddingInlineEnd?: PaddingInlineEnd | PaddingInlineEnd[];
  paddingInlineStart?: PaddingInlineStart | PaddingInlineStart[];
  paddingLeft?: PaddingLeft<TLength> | PaddingLeft<TLength>[];
  paddingRight?: PaddingRight<TLength> | PaddingRight<TLength>[];
  paddingTop?: PaddingTop<TLength> | PaddingTop<TLength>[];
  pageBreakAfter?: PageBreakAfter | PageBreakAfter[];
  pageBreakBefore?: PageBreakBefore | PageBreakBefore[];
  pageBreakInside?: PageBreakInside | PageBreakInside[];
  perspective?: Perspective<TLength> | Perspective<TLength>[];
  perspectiveOrigin?: PerspectiveOrigin | PerspectiveOrigin[];
  pointerEvents?: PointerEvents | PointerEvents[];
  position?: Position | Position[];
  quotes?: Quotes | Quotes[];
  resize?: Resize | Resize[];
  right?: Right<TLength> | Right<TLength>[];
  rubyAlign?: RubyAlign | RubyAlign[];
  rubyMerge?: RubyMerge | RubyMerge[];
  rubyPosition?: RubyPosition | RubyPosition[];
  scrollBehavior?: ScrollBehavior | ScrollBehavior[];
  scrollSnapCoordinate?: ScrollSnapCoordinate | ScrollSnapCoordinate[];
  scrollSnapDestination?: ScrollSnapDestination | ScrollSnapDestination[];
  scrollSnapPointsX?: ScrollSnapPointsX | ScrollSnapPointsX[];
  scrollSnapPointsY?: ScrollSnapPointsY | ScrollSnapPointsY[];
  scrollSnapType?: ScrollSnapType | ScrollSnapType[];
  scrollSnapTypeX?: ScrollSnapTypeX | ScrollSnapTypeX[];
  scrollSnapTypeY?: ScrollSnapTypeY | ScrollSnapTypeY[];
  shapeImageThreshold?: ShapeImageThreshold | ShapeImageThreshold[];
  shapeMargin?: ShapeMargin<TLength> | ShapeMargin<TLength>[];
  shapeOutside?: ShapeOutside | ShapeOutside[];
  tabSize?: TabSize<TLength> | TabSize<TLength>[];
  tableLayout?: TableLayout | TableLayout[];
  textAlign?: TextAlign | TextAlign[];
  textAlignLast?: TextAlignLast | TextAlignLast[];
  textCombineUpright?: TextCombineUpright | TextCombineUpright[];
  textDecoration?: TextDecoration | TextDecoration[];
  textDecorationColor?: TextDecorationColor | TextDecorationColor[];
  textDecorationLine?: TextDecorationLine | TextDecorationLine[];
  textDecorationSkip?: TextDecorationSkip | TextDecorationSkip[];
  textDecorationStyle?: TextDecorationStyle | TextDecorationStyle[];
  textEmphasis?: TextEmphasis | TextEmphasis[];
  textEmphasisColor?: TextEmphasisColor | TextEmphasisColor[];
  textEmphasisPosition?: TextEmphasisPosition | TextEmphasisPosition[];
  textEmphasisStyle?: TextEmphasisStyle | TextEmphasisStyle[];
  textIndent?: TextIndent | TextIndent[];
  textJustify?: TextJustify | TextJustify[];
  textOrientation?: TextOrientation | TextOrientation[];
  textOverflow?: TextOverflow | TextOverflow[];
  textRendering?: TextRendering | TextRendering[];
  textShadow?: TextShadow | TextShadow[];
  textSizeAdjust?: TextSizeAdjust | TextSizeAdjust[];
  textTransform?: TextTransform | TextTransform[];
  textUnderlinePosition?: TextUnderlinePosition | TextUnderlinePosition[];
  top?: Top<TLength> | Top<TLength>[];
  touchAction?: TouchAction | TouchAction[];
  transform?: Transform | Transform[];
  transformBox?: TransformBox | TransformBox[];
  transformOrigin?: TransformOrigin | TransformOrigin[];
  transformStyle?: TransformStyle | TransformStyle[];
  transition?: Transition | Transition[];
  transitionDelay?: TransitionDelay | TransitionDelay[];
  transitionDuration?: TransitionDuration | TransitionDuration[];
  transitionProperty?: TransitionProperty | TransitionProperty[];
  transitionTimingFunction?: TransitionTimingFunction | TransitionTimingFunction[];
  unicodeBidi?: UnicodeBidi | UnicodeBidi[];
  userSelect?: UserSelect | UserSelect[];
  verticalAlign?: VerticalAlign<TLength> | VerticalAlign<TLength>[];
  visibility?: Visibility | Visibility[];
  whiteSpace?: WhiteSpace | WhiteSpace[];
  widows?: Widows | Widows[];
  width?: Width | Width[];
  willChange?: WillChange | WillChange[];
  wordBreak?: WordBreak | WordBreak[];
  wordSpacing?: WordSpacing<TLength> | WordSpacing<TLength>[];
  wordWrap?: WordWrap | WordWrap[];
  writingMode?: WritingMode | WritingMode[];
  zIndex?: ZIndex | ZIndex[];
}

export interface VendorProperties<TLength = string> {
  msOverflowStyle?: MsOverflowStyle;
  mozAppearance?: MozAppearance;
  mozBinding?: MozBinding;
  mozBorderBottomColors?: MozBorderBottomColors;
  mozBorderLeftColors?: MozBorderLeftColors;
  mozBorderRightColors?: MozBorderRightColors;
  mozBorderTopColors?: MozBorderTopColors;
  mozContextProperties?: MozContextProperties;
  mozFloatEdge?: MozFloatEdge;
  mozForceBrokenImageIcon?: MozForceBrokenImageIcon;
  mozImageRegion?: MozImageRegion;
  mozOrient?: MozOrient;
  mozOutlineRadius?: MozOutlineRadius;
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleft;
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomright;
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleft;
  mozOutlineRadiusTopright?: MozOutlineRadiusTopright;
  mozStackSizing?: MozStackSizing;
  mozTextBlink?: MozTextBlink;
  mozUserFocus?: MozUserFocus;
  mozUserInput?: MozUserInput;
  mozUserModify?: MozUserModify;
  mozWindowShadow?: MozWindowShadow;
  webkitBorderBefore?: WebkitBorderBefore;
  webkitBorderBeforeColor?: WebkitBorderBeforeColor;
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyle;
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidth;
  webkitBoxReflect?: WebkitBoxReflect;
  webkitMask?: WebkitMask;
  webkitMaskAttachment?: WebkitMaskAttachment;
  webkitMaskClip?: WebkitMaskClip;
  webkitMaskComposite?: WebkitMaskComposite;
  webkitMaskImage?: WebkitMaskImage;
  webkitMaskOrigin?: WebkitMaskOrigin;
  webkitMaskPosition?: WebkitMaskPosition;
  webkitMaskPositionX?: WebkitMaskPositionX;
  webkitMaskPositionY?: WebkitMaskPositionY;
  webkitMaskRepeat?: WebkitMaskRepeat;
  webkitMaskRepeatX?: WebkitMaskRepeatX;
  webkitMaskRepeatY?: WebkitMaskRepeatY;
  webkitTapHighlightColor?: WebkitTapHighlightColor;
  webkitTextFillColor?: WebkitTextFillColor;
  webkitTextStroke?: WebkitTextStroke<TLength>;
  webkitTextStrokeColor?: WebkitTextStrokeColor;
  webkitTextStrokeWidth?: WebkitTextStrokeWidth<TLength>;
  webkitTouchCallout?: WebkitTouchCallout;
}

export interface VendorPropertiesFallback<TLength = string> {
  msOverflowStyle?: MsOverflowStyle | MsOverflowStyle[];
  mozAppearance?: MozAppearance | MozAppearance[];
  mozBinding?: MozBinding | MozBinding[];
  mozBorderBottomColors?: MozBorderBottomColors | MozBorderBottomColors[];
  mozBorderLeftColors?: MozBorderLeftColors | MozBorderLeftColors[];
  mozBorderRightColors?: MozBorderRightColors | MozBorderRightColors[];
  mozBorderTopColors?: MozBorderTopColors | MozBorderTopColors[];
  mozContextProperties?: MozContextProperties | MozContextProperties[];
  mozFloatEdge?: MozFloatEdge | MozFloatEdge[];
  mozForceBrokenImageIcon?: MozForceBrokenImageIcon | MozForceBrokenImageIcon[];
  mozImageRegion?: MozImageRegion | MozImageRegion[];
  mozOrient?: MozOrient | MozOrient[];
  mozOutlineRadius?: MozOutlineRadius | MozOutlineRadius[];
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleft | MozOutlineRadiusBottomleft[];
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomright | MozOutlineRadiusBottomright[];
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleft | MozOutlineRadiusTopleft[];
  mozOutlineRadiusTopright?: MozOutlineRadiusTopright | MozOutlineRadiusTopright[];
  mozStackSizing?: MozStackSizing | MozStackSizing[];
  mozTextBlink?: MozTextBlink | MozTextBlink[];
  mozUserFocus?: MozUserFocus | MozUserFocus[];
  mozUserInput?: MozUserInput | MozUserInput[];
  mozUserModify?: MozUserModify | MozUserModify[];
  mozWindowShadow?: MozWindowShadow | MozWindowShadow[];
  webkitBorderBefore?: WebkitBorderBefore | WebkitBorderBefore[];
  webkitBorderBeforeColor?: WebkitBorderBeforeColor | WebkitBorderBeforeColor[];
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyle | WebkitBorderBeforeStyle[];
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidth | WebkitBorderBeforeWidth[];
  webkitBoxReflect?: WebkitBoxReflect | WebkitBoxReflect[];
  webkitMask?: WebkitMask | WebkitMask[];
  webkitMaskAttachment?: WebkitMaskAttachment | WebkitMaskAttachment[];
  webkitMaskClip?: WebkitMaskClip | WebkitMaskClip[];
  webkitMaskComposite?: WebkitMaskComposite | WebkitMaskComposite[];
  webkitMaskImage?: WebkitMaskImage | WebkitMaskImage[];
  webkitMaskOrigin?: WebkitMaskOrigin | WebkitMaskOrigin[];
  webkitMaskPosition?: WebkitMaskPosition | WebkitMaskPosition[];
  webkitMaskPositionX?: WebkitMaskPositionX | WebkitMaskPositionX[];
  webkitMaskPositionY?: WebkitMaskPositionY | WebkitMaskPositionY[];
  webkitMaskRepeat?: WebkitMaskRepeat | WebkitMaskRepeat[];
  webkitMaskRepeatX?: WebkitMaskRepeatX | WebkitMaskRepeatX[];
  webkitMaskRepeatY?: WebkitMaskRepeatY | WebkitMaskRepeatY[];
  webkitTapHighlightColor?: WebkitTapHighlightColor | WebkitTapHighlightColor[];
  webkitTextFillColor?: WebkitTextFillColor | WebkitTextFillColor[];
  webkitTextStroke?: WebkitTextStroke<TLength> | WebkitTextStroke<TLength>[];
  webkitTextStrokeColor?: WebkitTextStrokeColor | WebkitTextStrokeColor[];
  webkitTextStrokeWidth?: WebkitTextStrokeWidth<TLength> | WebkitTextStrokeWidth<TLength>[];
  webkitTouchCallout?: WebkitTouchCallout | WebkitTouchCallout[];
}

export interface Properties<TLength = string> extends StandardProperties<TLength>, VendorProperties<TLength> {}

export interface PropertiesFallback<TLength = string> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export type PseudosAlias =
  | ":out-of-range"
  | ":active"
  | ":any-link"
  | ":checked"
  | ":default"
  | ":dir"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-of-type"
  | ":fullscreen"
  | ":focus"
  | ":focus-within"
  | ":hover"
  | ":indeterminate"
  | ":in-range"
  | ":invalid"
  | ":lang"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type"
  | ":only-child"
  | ":only-of-type"
  | ":optional"
  | ":any"
  | ":placeholder-shown"
  | ":read-only"
  | ":read-write"
  | ":required"
  | ":right"
  | ":root"
  | ":scope"
  | ":target"
  | ":unresolved"
  | ":valid"
  | ":visited"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-thumb"
  | "::-ms-track"
  | "::-webkit-progress-bar"
  | "::-webkit-progress-inner-value"
  | "::-webkit-progress-value"
  | "::-webkit-slider-runnable-track"
  | "::-webkit-slider-thumb"
  | "::after"
  | "::backdrop"
  | "::before"
  | "::first-letter"
  | "::first-line"
  | "::selection"
  | "::cue";
type AlignContent = AllAlias | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";

type AlignItems = AllAlias | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type AlignSelf = AllAlias | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type Animation = AllAlias | string;

type AnimationDelay = AllAlias | string;

type AnimationDirection = AllAlias | SingleAnimationDirectionAlias;

type AnimationDuration = AllAlias | string;

type AnimationFillMode = AllAlias | SingleAnimationFillModeAlias;

type AnimationIterationCount = AllAlias | SingleAnimationIterationCountAlias;

type AnimationName = AllAlias | string;

type AnimationPlayState = AllAlias | SingleAnimationPlayStateAlias;

type AnimationTimingFunction = AllAlias | SingleTimingFunctionAlias;

type Appearance = AllAlias | "auto" | "none";

type Azimuth = AllAlias | string;

type BackdropFilter = AllAlias | "none" | string;

type BackfaceVisibility = AllAlias | "visible" | "hidden";

type Background = AllAlias | string;

type BackgroundAttachment = AllAlias | AttachmentAlias;

type BackgroundBlendMode = AllAlias | BlendModeAlias;

type BackgroundClip = AllAlias | BoxAlias;

type BackgroundColor = AllAlias | ColorAlias;

type BackgroundImage = AllAlias | BgImageAlias;

type BackgroundOrigin = AllAlias | BoxAlias;

type BackgroundPosition = AllAlias | string;

type BackgroundPositionX = AllAlias | string;

type BackgroundPositionY = AllAlias | string;

type BackgroundRepeat = AllAlias | string;

type BackgroundSize = AllAlias | string;

type BlockSize = AllAlias | string;

type Border<TLength> = AllAlias | BrWidthAlias<TLength> | BrStyleAlias | ColorAlias | string;

type BorderBlockEnd = AllAlias | string;

type BorderBlockEndColor = AllAlias | string;

type BorderBlockEndStyle = AllAlias | string;

type BorderBlockEndWidth = AllAlias | string;

type BorderBlockStart = AllAlias | string;

type BorderBlockStartColor = AllAlias | string;

type BorderBlockStartStyle = AllAlias | string;

type BorderBlockStartWidth = AllAlias | string;

type BorderBottom<TLength> = AllAlias | BrWidthAlias<TLength> | BrStyleAlias | ColorAlias | string;

type BorderBottomColor = AllAlias | ColorAlias;

type BorderBottomLeftRadius<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type BorderBottomRightRadius<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type BorderBottomStyle = AllAlias | BrStyleAlias;

type BorderBottomWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type BorderCollapse = AllAlias | "collapse" | "separate";

type BorderColor = AllAlias | ColorAlias;

type BorderImage = AllAlias | string;

type BorderImageOutset = AllAlias | string;

type BorderImageRepeat = AllAlias | string;

type BorderImageSlice = AllAlias | string;

type BorderImageSource = AllAlias | "none" | string;

type BorderImageWidth = AllAlias | string;

type BorderInlineEnd = AllAlias | string;

type BorderInlineEndColor = AllAlias | string;

type BorderInlineEndStyle = AllAlias | string;

type BorderInlineEndWidth = AllAlias | string;

type BorderInlineStart = AllAlias | string;

type BorderInlineStartColor = AllAlias | string;

type BorderInlineStartStyle = AllAlias | string;

type BorderInlineStartWidth = AllAlias | string;

type BorderLeft<TLength> = AllAlias | BrWidthAlias<TLength> | BrStyleAlias | ColorAlias | string;

type BorderLeftColor = AllAlias | ColorAlias;

type BorderLeftStyle = AllAlias | BrStyleAlias;

type BorderLeftWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type BorderRadius = AllAlias | string;

type BorderRight<TLength> = AllAlias | BrWidthAlias<TLength> | BrStyleAlias | ColorAlias | string;

type BorderRightColor = AllAlias | ColorAlias;

type BorderRightStyle = AllAlias | BrStyleAlias;

type BorderRightWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type BorderSpacing = AllAlias | string;

type BorderStyle = AllAlias | BrStyleAlias;

type BorderTop<TLength> = AllAlias | BrWidthAlias<TLength> | BrStyleAlias | ColorAlias | string;

type BorderTopColor = AllAlias | ColorAlias;

type BorderTopLeftRadius<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type BorderTopRightRadius<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type BorderTopStyle = AllAlias | BrStyleAlias;

type BorderTopWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type BorderWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type Bottom<TLength> = AllAlias | "auto" | string | TLength;

type BoxAlign = AllAlias | "start" | "center" | "end" | "baseline" | "stretch";

type BoxDecorationBreak = AllAlias | "slice" | "clone";

type BoxDirection = AllAlias | "normal" | "reverse" | "inherit";

type BoxFlex = AllAlias | number;

type BoxFlexGroup = AllAlias | number;

type BoxLines = AllAlias | "single" | "multiple";

type BoxOrdinalGroup = AllAlias | number;

type BoxOrient = AllAlias | "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";

type BoxPack = AllAlias | "start" | "center" | "end" | "justify";

type BoxShadow = AllAlias | "none" | string;

type BoxSizing = AllAlias | "content-box" | "border-box";

type BreakAfter = AllAlias | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakBefore = AllAlias | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakInside = AllAlias | "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";

type CaptionSide = AllAlias | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";

type CaretColor = AllAlias | ColorAlias | "auto";

type Clear = AllAlias | "none" | "left" | "right" | "both" | "inline-start" | "inline-end";

type Clip = AllAlias | "auto" | string;

type ClipPath = AllAlias | string;

type Color = AllAlias | ColorAlias;

type ColumnCount = AllAlias | "auto" | number;

type ColumnFill = AllAlias | "auto" | "balance";

type ColumnGap<TLength> = AllAlias | "normal" | TLength;

type ColumnRule = AllAlias | string;

type ColumnRuleColor = AllAlias | ColorAlias;

type ColumnRuleStyle = AllAlias | BrStyleAlias;

type ColumnRuleWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type ColumnSpan = AllAlias | "none" | "all";

type ColumnWidth<TLength> = AllAlias | "auto" | TLength;

type Columns = AllAlias | string;

type Contain = AllAlias | string;

type Content = AllAlias | string;

type CounterIncrement = AllAlias | string;

type CounterReset = AllAlias | string;

type Cursor = AllAlias | string;

type Direction = AllAlias | "ltr" | "rtl";

type Display = AllAlias | string;

type DisplayInside = AllAlias | "auto" | "block" | "table" | "flex" | "grid" | "ruby";

type DisplayList = AllAlias | "none" | "list-item";

type DisplayOutside =
  | AllAlias
  | "ruby-text-container"
  | "inline-level"
  | "run-in"
  | "contents"
  | "none"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "block-level"
  | "table-cell"
  | "table-column-group"
  | "table-column"
  | "table-caption"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-container"
  | "table-row";

type EmptyCells = AllAlias | "show" | "hide";

type Filter = AllAlias | "none" | string;

type Flex = AllAlias | string;

type FlexBasis = AllAlias | "content" | string;

type FlexDirection = AllAlias | "row" | "row-reverse" | "column" | "column-reverse";

type FlexFlow = AllAlias | string;

type FlexGrow = AllAlias | number;

type FlexShrink = AllAlias | number;

type FlexWrap = AllAlias | "nowrap" | "wrap" | "wrap-reverse";

type Float = AllAlias | "left" | "right" | "none" | "inline-start" | "inline-end";

type Font = AllAlias | string;

type FontFamily = AllAlias | string;

type FontFeatureSettings = AllAlias | "normal" | string;

type FontKerning = AllAlias | "auto" | "normal" | "none";

type FontLanguageOverride = AllAlias | "normal" | string;

type FontVariationSettings = AllAlias | string;

type FontSize<TLength> = AllAlias | AbsoluteSizeAlias | RelativeSizeAlias | LengthPercentageAlias<TLength>;

type FontSizeAdjust = AllAlias | "none" | number;

type FontStretch =
  | AllAlias
  | "normal"
  | "ultra-condensed"
  | "extra-condensed"
  | "condensed"
  | "semi-condensed"
  | "semi-expanded"
  | "expanded"
  | "extra-expanded"
  | "ultra-expanded";

type FontStyle = AllAlias | "normal" | "italic" | "oblique";

type FontSynthesis = AllAlias | string;

type FontVariant = AllAlias | string;

type FontVariantAlternates = AllAlias | string;

type FontVariantCaps = AllAlias | "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";

type FontVariantEastAsian = AllAlias | string;

type FontVariantLigatures = AllAlias | string;

type FontVariantNumeric = AllAlias | string;

type FontVariantPosition = AllAlias | "normal" | "sub" | "super";

type FontWeight = AllAlias | "900" | "bold" | "bolder" | "lighter" | "100" | "200" | "normal" | "400" | "500" | "600" | "700" | "800" | "300";

type Grid = AllAlias | string;

type GridArea = AllAlias | string;

type GridAutoColumns = AllAlias | string;

type GridAutoFlow = AllAlias | string;

type GridAutoRows = AllAlias | string;

type GridColumn = AllAlias | string;

type GridColumnEnd = AllAlias | string;

type GridColumnGap<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type GridColumnStart = AllAlias | string;

type GridGap = AllAlias | string;

type GridRow = AllAlias | string;

type GridRowEnd = AllAlias | string;

type GridRowGap<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type GridRowStart = AllAlias | string;

type GridTemplate = AllAlias | string;

type GridTemplateAreas = AllAlias | "none" | string;

type GridTemplateColumns = AllAlias | "none" | string;

type GridTemplateRows = AllAlias | "none" | string;

type Height = AllAlias | string;

type Hyphens = AllAlias | "none" | "manual" | "auto";

type ImageOrientation = AllAlias | string;

type ImageRendering = AllAlias | "auto" | "crisp-edges" | "pixelated";

type ImageResolution = AllAlias | string;

type ImeMode = AllAlias | "auto" | "normal" | "active" | "inactive" | "disabled";

type InitialLetter = AllAlias | string;

type InitialLetterAlign = AllAlias | string;

type InlineSize = AllAlias | string;

type Isolation = AllAlias | "auto" | "isolate";

type JustifyContent = AllAlias | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

type Left<TLength> = AllAlias | "auto" | string | TLength;

type LetterSpacing<TLength> = AllAlias | "normal" | TLength;

type LineBreak = AllAlias | "auto" | "loose" | "normal" | "strict";

type LineHeight<TLength> = AllAlias | "normal" | string | number | TLength;

type ListStyle = AllAlias | string;

type ListStyleImage = AllAlias | "none" | string;

type ListStylePosition = AllAlias | "inside" | "outside";

type ListStyleType = AllAlias | "none" | string;

type Margin = AllAlias | string;

type MarginBlockEnd = AllAlias | string;

type MarginBlockStart = AllAlias | string;

type MarginBottom<TLength> = AllAlias | "auto" | string | TLength;

type MarginInlineEnd = AllAlias | string;

type MarginInlineStart = AllAlias | string;

type MarginLeft<TLength> = AllAlias | "auto" | string | TLength;

type MarginRight<TLength> = AllAlias | "auto" | string | TLength;

type MarginTop<TLength> = AllAlias | "auto" | string | TLength;

type MarkerOffset<TLength> = AllAlias | "auto" | TLength;

type Mask = AllAlias | string;

type MaskClip = AllAlias | string;

type MaskComposite = AllAlias | CompositingOperatorAlias;

type MaskImage = AllAlias | MaskReferenceAlias;

type MaskMode = AllAlias | MaskingModeAlias;

type MaskOrigin = AllAlias | GeometryBoxAlias;

type MaskPosition = AllAlias | string;

type MaskRepeat = AllAlias | string;

type MaskSize = AllAlias | string;

type MaskType = AllAlias | "luminance" | "alpha";

type MaxBlockSize = AllAlias | string;

type MaxHeight<TLength> = AllAlias | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MaxInlineSize = AllAlias | string;

type MaxWidth<TLength> = AllAlias | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MinBlockSize = AllAlias | string;

type MinHeight<TLength> = AllAlias | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MinInlineSize = AllAlias | string;

type MinWidth<TLength> = AllAlias | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MixBlendMode = AllAlias | BlendModeAlias;

type ObjectFit = AllAlias | "fill" | "contain" | "cover" | "none" | "scale-down";

type ObjectPosition = AllAlias | string;

type Offset = AllAlias | string;

type OffsetAnchor = AllAlias | "auto" | string;

type OffsetBlockEnd = AllAlias | string;

type OffsetBlockStart = AllAlias | string;

type OffsetInlineEnd = AllAlias | string;

type OffsetInlineStart = AllAlias | string;

type OffsetDistance<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type OffsetPath = AllAlias | string;

type OffsetPosition = AllAlias | "auto" | string;

type OffsetRotate = AllAlias | string;

type Opacity = AllAlias | number;

type Order = AllAlias | number;

type Orphans = AllAlias | number;

type Outline = AllAlias | string;

type OutlineColor = AllAlias | ColorAlias | "invert";

type OutlineOffset<TLength> = AllAlias | TLength;

type OutlineStyle = AllAlias | BrStyleAlias | "auto";

type OutlineWidth<TLength> = AllAlias | BrWidthAlias<TLength>;

type Overflow = AllAlias | "visible" | "hidden" | "scroll" | "auto";

type OverflowClipBox = AllAlias | "padding-box" | "content-box";

type OverflowWrap = AllAlias | "normal" | "break-word";

type OverflowX = AllAlias | "visible" | "hidden" | "scroll" | "auto";

type OverflowY = AllAlias | "visible" | "hidden" | "scroll" | "auto";

type Padding = AllAlias | string;

type PaddingBlockEnd = AllAlias | string;

type PaddingBlockStart = AllAlias | string;

type PaddingBottom<TLength> = AllAlias | string | TLength;

type PaddingInlineEnd = AllAlias | string;

type PaddingInlineStart = AllAlias | string;

type PaddingLeft<TLength> = AllAlias | string | TLength;

type PaddingRight<TLength> = AllAlias | string | TLength;

type PaddingTop<TLength> = AllAlias | string | TLength;

type PageBreakAfter = AllAlias | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakBefore = AllAlias | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakInside = AllAlias | "auto" | "avoid";

type Perspective<TLength> = AllAlias | "none" | TLength;

type PerspectiveOrigin = AllAlias | string;

type PointerEvents = AllAlias | "inherit" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "auto" | "painted" | "fill" | "stroke" | "all" | "visible";

type Position = AllAlias | "static" | "relative" | "absolute" | "sticky" | "fixed";

type Quotes = AllAlias | string;

type Resize = AllAlias | "none" | "both" | "horizontal" | "vertical";

type Right<TLength> = AllAlias | "auto" | string | TLength;

type RubyAlign = AllAlias | "start" | "center" | "space-between" | "space-around";

type RubyMerge = AllAlias | "separate" | "collapse" | "auto";

type RubyPosition = AllAlias | "over" | "under" | "inter-character";

type ScrollBehavior = AllAlias | "auto" | "smooth";

type ScrollSnapCoordinate = AllAlias | "none" | string;

type ScrollSnapDestination = AllAlias | string;

type ScrollSnapPointsX = AllAlias | "none" | string;

type ScrollSnapPointsY = AllAlias | "none" | string;

type ScrollSnapType = AllAlias | "none" | "mandatory" | "proximity";

type ScrollSnapTypeX = AllAlias | "none" | "mandatory" | "proximity";

type ScrollSnapTypeY = AllAlias | "none" | "mandatory" | "proximity";

type ShapeImageThreshold = AllAlias | number;

type ShapeMargin<TLength> = AllAlias | LengthPercentageAlias<TLength>;

type ShapeOutside = AllAlias | ShapeBoxAlias | "none" | string;

type TabSize<TLength> = AllAlias | number | TLength;

type TableLayout = AllAlias | "auto" | "fixed";

type TextAlign = AllAlias | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";

type TextAlignLast = AllAlias | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";

type TextCombineUpright = AllAlias | string;

type TextDecoration = AllAlias | string;

type TextDecorationColor = AllAlias | ColorAlias;

type TextDecorationLine = AllAlias | string;

type TextDecorationSkip = AllAlias | string;

type TextDecorationStyle = AllAlias | "solid" | "double" | "dotted" | "dashed" | "wavy";

type TextEmphasis = AllAlias | string;

type TextEmphasisColor = AllAlias | ColorAlias;

type TextEmphasisPosition = AllAlias | string;

type TextEmphasisStyle = AllAlias | string;

type TextIndent = AllAlias | string;

type TextJustify = AllAlias | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientation = AllAlias | "mixed" | "upright" | "sideways";

type TextOverflow = AllAlias | string;

type TextRendering = AllAlias | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";

type TextShadow = AllAlias | "none" | string;

type TextSizeAdjust = AllAlias | "none" | "auto" | string;

type TextTransform = AllAlias | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";

type TextUnderlinePosition = AllAlias | string;

type Top<TLength> = AllAlias | "auto" | string | TLength;

type TouchAction = AllAlias | string;

type Transform = AllAlias | "none" | string;

type TransformBox = AllAlias | "border-box" | "fill-box" | "view-box";

type TransformOrigin = AllAlias | string;

type TransformStyle = AllAlias | "flat" | "preserve-3d";

type Transition = AllAlias | string;

type TransitionDelay = AllAlias | string;

type TransitionDuration = AllAlias | string;

type TransitionProperty = AllAlias | SingleTransitionPropertyAlias | "none";

type TransitionTimingFunction = AllAlias | SingleTransitionTimingFunctionAlias;

type UnicodeBidi = AllAlias | "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";

type UserSelect = AllAlias | "auto" | "text" | "none" | "contain" | "all";

type VerticalAlign<TLength> = AllAlias | "text-bottom" | "sub" | "super" | "text-top" | "baseline" | "middle" | "top" | "bottom" | string | TLength;

type Visibility = AllAlias | "visible" | "hidden" | "collapse";

type WhiteSpace = AllAlias | "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";

type Widows = AllAlias | number;

type Width = AllAlias | string;

type WillChange = AllAlias | AnimateableFeatureAlias | "auto";

type WordBreak = AllAlias | "normal" | "break-all" | "keep-all";

type WordSpacing<TLength> = AllAlias | LengthPercentageAlias<TLength> | "normal";

type WordWrap = AllAlias | "normal" | "break-word";

type WritingMode = AllAlias | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";

type ZIndex = AllAlias | "auto" | number;

type MsOverflowStyle = AllAlias | "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";

type MozAppearance =
  | AllAlias
  | "-moz-window-titlebar-maximized"
  | "button"
  | "button-arrow-down"
  | "button-arrow-next"
  | "button-arrow-previous"
  | "button-arrow-up"
  | "button-bevel"
  | "button-focus"
  | "caret"
  | "checkbox"
  | "checkbox-container"
  | "checkbox-label"
  | "checkmenuitem"
  | "dualbutton"
  | "groupbox"
  | "listbox"
  | "listitem"
  | "menuarrow"
  | "menubar"
  | "menucheckbox"
  | "menuimage"
  | "menuitem"
  | "menuitemtext"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "menupopup"
  | "menuradio"
  | "menuseparator"
  | "meterbar"
  | "meterchunk"
  | "progressbar"
  | "progressbar-vertical"
  | "progresschunk"
  | "progresschunk-vertical"
  | "radio"
  | "radio-container"
  | "radio-label"
  | "radiomenuitem"
  | "range"
  | "range-thumb"
  | "resizer"
  | "resizerpanel"
  | "scale-horizontal"
  | "scalethumbend"
  | "scalethumb-horizontal"
  | "scalethumbstart"
  | "scalethumbtick"
  | "scalethumb-vertical"
  | "scale-vertical"
  | "scrollbarbutton-down"
  | "scrollbarbutton-left"
  | "scrollbarbutton-right"
  | "none"
  | "scrollbarthumb-horizontal"
  | "scrollbarthumb-vertical"
  | "scrollbartrack-horizontal"
  | "scrollbartrack-vertical"
  | "searchfield"
  | "separator"
  | "sheet"
  | "spinner"
  | "spinner-downbutton"
  | "spinner-textfield"
  | "spinner-upbutton"
  | "splitter"
  | "statusbar"
  | "statusbarpanel"
  | "tab"
  | "tabpanel"
  | "tabpanels"
  | "tab-scroll-arrow-back"
  | "tab-scroll-arrow-forward"
  | "textfield"
  | "textfield-multiline"
  | "toolbar"
  | "toolbarbutton"
  | "toolbarbutton-dropdown"
  | "toolbargripper"
  | "toolbox"
  | "tooltip"
  | "treeheader"
  | "treeheadercell"
  | "treeheadersortarrow"
  | "treeitem"
  | "treeline"
  | "treetwisty"
  | "treetwistyopen"
  | "treeview"
  | "-moz-mac-unified-toolbar"
  | "-moz-win-borderless-glass"
  | "-moz-win-browsertabbar-toolbox"
  | "-moz-win-communicationstext"
  | "-moz-win-communications-toolbox"
  | "-moz-win-exclude-glass"
  | "-moz-win-glass"
  | "-moz-win-mediatext"
  | "-moz-win-media-toolbox"
  | "-moz-window-button-box"
  | "-moz-window-button-box-maximized"
  | "-moz-window-button-close"
  | "-moz-window-button-maximize"
  | "-moz-window-button-minimize"
  | "-moz-window-button-restore"
  | "-moz-window-frame-bottom"
  | "-moz-window-frame-left"
  | "-moz-window-frame-right"
  | "-moz-window-titlebar"
  | "scrollbarbutton-up";

type MozBinding = AllAlias | "none" | string;

type MozBorderBottomColors = AllAlias | string;

type MozBorderLeftColors = AllAlias | string;

type MozBorderRightColors = AllAlias | string;

type MozBorderTopColors = AllAlias | string;

type MozContextProperties = AllAlias | string;

type MozFloatEdge = AllAlias | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozForceBrokenImageIcon = AllAlias | number;

type MozImageRegion = AllAlias | "auto" | string;

type MozOrient = AllAlias | "inline" | "block" | "horizontal" | "vertical";

type MozOutlineRadius = AllAlias | string;

type MozOutlineRadiusBottomleft = AllAlias | string;

type MozOutlineRadiusBottomright = AllAlias | string;

type MozOutlineRadiusTopleft = AllAlias | string;

type MozOutlineRadiusTopright = AllAlias | string;

type MozStackSizing = AllAlias | "ignore" | "stretch-to-fit";

type MozTextBlink = AllAlias | "none" | "blink";

type MozUserFocus = AllAlias | "ignore" | "normal" | "select-after" | "select-before" | "select-menu" | "select-same" | "select-all" | "none";

type MozUserInput = AllAlias | "auto" | "none" | "enabled" | "disabled";

type MozUserModify = AllAlias | "read-only" | "read-write" | "write-only";

type MozWindowShadow = AllAlias | "default" | "menu" | "tooltip" | "sheet" | "none";

type WebkitBorderBefore = AllAlias | string;

type WebkitBorderBeforeColor = AllAlias | string;

type WebkitBorderBeforeStyle = AllAlias | string;

type WebkitBorderBeforeWidth = AllAlias | string;

type WebkitBoxReflect = AllAlias | string;

type WebkitMask = AllAlias | string;

type WebkitMaskAttachment = AllAlias | string;

type WebkitMaskClip = AllAlias | string;

type WebkitMaskComposite = AllAlias | string;

type WebkitMaskImage = AllAlias | string;

type WebkitMaskOrigin = AllAlias | string;

type WebkitMaskPosition = AllAlias | string;

type WebkitMaskPositionX = AllAlias | string;

type WebkitMaskPositionY = AllAlias | string;

type WebkitMaskRepeat = AllAlias | string;

type WebkitMaskRepeatX = AllAlias | "repeat" | "no-repeat" | "space" | "round";

type WebkitMaskRepeatY = AllAlias | "repeat" | "no-repeat" | "space" | "round";

type WebkitTapHighlightColor = AllAlias | ColorAlias;

type WebkitTextFillColor = AllAlias | ColorAlias;

type WebkitTextStroke<TLength> = AllAlias | ColorAlias | string | TLength;

type WebkitTextStrokeColor = AllAlias | ColorAlias;

type WebkitTextStrokeWidth<TLength> = AllAlias | TLength;

type WebkitTouchCallout = AllAlias | "default" | "none";

type AllAlias = "initial" | "inherit" | "unset";

type SingleAnimationDirectionAlias = "normal" | "reverse" | "alternate" | "alternate-reverse";

type SingleAnimationFillModeAlias = "none" | "forwards" | "backwards" | "both";

type SingleAnimationIterationCountAlias = "infinite" | number;

type SingleAnimationPlayStateAlias = "running" | "paused";

type SingleTimingFunctionAlias = StepTimingFunctionAlias | "linear" | string;

type StepTimingFunctionAlias = "step-start" | "step-end" | string;

type AttachmentAlias = "scroll" | "fixed" | "local";

type BlendModeAlias =
  | "hard-light"
  | "normal"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "multiply"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

type BoxAlias = "border-box" | "padding-box" | "content-box";

type ColorAlias = NamedColorAlias | DeprecatedSystemColorAlias | "currentcolor" | string;

type NamedColorAlias =
  | "lightgrey"
  | "transparent"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkgrey"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkslategrey"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dimgrey"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "grey"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "aliceblue"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightslategrey"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "slategrey"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

type DeprecatedSystemColorAlias =
  | "InactiveCaptionText"
  | "ActiveBorder"
  | "AppWorkspace"
  | "Background"
  | "ButtonFace"
  | "ButtonHighlight"
  | "ButtonShadow"
  | "ButtonText"
  | "CaptionText"
  | "GrayText"
  | "Highlight"
  | "HighlightText"
  | "InactiveBorder"
  | "InactiveCaption"
  | "ActiveCaption"
  | "InfoBackground"
  | "InfoText"
  | "Menu"
  | "MenuText"
  | "Scrollbar"
  | "ThreeDDarkShadow"
  | "ThreeDFace"
  | "ThreeDHighlight"
  | "ThreeDLightShadow"
  | "ThreeDShadow"
  | "Window"
  | "WindowFrame"
  | "WindowText";

type BgImageAlias = "none" | string;

type BrWidthAlias<TLength> = "thin" | "medium" | "thick" | TLength;

type BrStyleAlias = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

type LengthPercentageAlias<TLength> = string | TLength;

type AbsoluteSizeAlias = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";

type RelativeSizeAlias = "larger" | "smaller";

type CompositingOperatorAlias = "add" | "subtract" | "intersect" | "exclude";

type MaskReferenceAlias = "none" | string;

type MaskingModeAlias = "alpha" | "luminance" | "match-source";

type GeometryBoxAlias = ShapeBoxAlias | "fill-box" | "stroke-box" | "view-box";

type ShapeBoxAlias = BoxAlias | "margin-box";

type SingleTransitionPropertyAlias = "all" | string;

type SingleTransitionTimingFunctionAlias = SingleTimingFunctionAlias;

type AnimateableFeatureAlias = "scroll-position" | "contents" | string;
