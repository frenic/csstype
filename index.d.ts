export as namespace CSS;

export interface StandardProperties<TLength = string> {
  alignContent?: AlignContentProperty;
  alignItems?: AlignItemsProperty;
  alignSelf?: AlignSelfProperty;
  animation?: AnimationProperty;
  animationDelay?: AnimationDelayProperty;
  animationDirection?: AnimationDirectionProperty;
  animationDuration?: AnimationDurationProperty;
  animationFillMode?: AnimationFillModeProperty;
  animationIterationCount?: AnimationIterationCountProperty;
  animationName?: AnimationNameProperty;
  animationPlayState?: AnimationPlayStateProperty;
  animationTimingFunction?: AnimationTimingFunctionProperty;
  appearance?: AppearanceProperty;
  azimuth?: AzimuthProperty;
  backdropFilter?: BackdropFilterProperty;
  backfaceVisibility?: BackfaceVisibilityProperty;
  background?: BackgroundProperty;
  backgroundAttachment?: BackgroundAttachmentProperty;
  backgroundBlendMode?: BackgroundBlendModeProperty;
  backgroundClip?: BackgroundClipProperty;
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundOrigin?: BackgroundOriginProperty;
  backgroundPosition?: BackgroundPositionProperty;
  backgroundPositionX?: BackgroundPositionXProperty;
  backgroundPositionY?: BackgroundPositionYProperty;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundSize?: BackgroundSizeProperty;
  blockSize?: BlockSizeProperty;
  border?: BorderProperty<TLength>;
  borderBlockEnd?: BorderBlockEndProperty;
  borderBlockEndColor?: BorderBlockEndColorProperty;
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  borderBlockEndWidth?: BorderBlockEndWidthProperty;
  borderBlockStart?: BorderBlockStartProperty;
  borderBlockStartColor?: BorderBlockStartColorProperty;
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  borderBlockStartWidth?: BorderBlockStartWidthProperty;
  borderBottom?: BorderBottomProperty<TLength>;
  borderBottomColor?: BorderBottomColorProperty;
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  borderBottomStyle?: BorderBottomStyleProperty;
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  borderCollapse?: BorderCollapseProperty;
  borderColor?: BorderColorProperty;
  borderImage?: BorderImageProperty;
  borderImageOutset?: BorderImageOutsetProperty;
  borderImageRepeat?: BorderImageRepeatProperty;
  borderImageSlice?: BorderImageSliceProperty;
  borderImageSource?: BorderImageSourceProperty;
  borderImageWidth?: BorderImageWidthProperty;
  borderInlineEnd?: BorderInlineEndProperty;
  borderInlineEndColor?: BorderInlineEndColorProperty;
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  borderInlineEndWidth?: BorderInlineEndWidthProperty;
  borderInlineStart?: BorderInlineStartProperty;
  borderInlineStartColor?: BorderInlineStartColorProperty;
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  borderInlineStartWidth?: BorderInlineStartWidthProperty;
  borderLeft?: BorderLeftProperty<TLength>;
  borderLeftColor?: BorderLeftColorProperty;
  borderLeftStyle?: BorderLeftStyleProperty;
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  borderRadius?: BorderRadiusProperty;
  borderRight?: BorderRightProperty<TLength>;
  borderRightColor?: BorderRightColorProperty;
  borderRightStyle?: BorderRightStyleProperty;
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  borderSpacing?: BorderSpacingProperty;
  borderStyle?: BorderStyleProperty;
  borderTop?: BorderTopProperty<TLength>;
  borderTopColor?: BorderTopColorProperty;
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  borderTopStyle?: BorderTopStyleProperty;
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  borderWidth?: BorderWidthProperty<TLength>;
  bottom?: BottomProperty<TLength>;
  boxAlign?: BoxAlignProperty;
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxDirection?: BoxDirectionProperty;
  boxFlex?: BoxFlexProperty;
  boxFlexGroup?: BoxFlexGroupProperty;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: BoxOrdinalGroupProperty;
  boxOrient?: BoxOrientProperty;
  boxPack?: BoxPackProperty;
  boxShadow?: BoxShadowProperty;
  boxSizing?: BoxSizingProperty;
  breakAfter?: BreakAfterProperty;
  breakBefore?: BreakBeforeProperty;
  breakInside?: BreakInsideProperty;
  captionSide?: CaptionSideProperty;
  caretColor?: CaretColorProperty;
  clear?: ClearProperty;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  color?: ColorProperty;
  columnCount?: ColumnCountProperty;
  columnFill?: ColumnFillProperty;
  columnGap?: ColumnGapProperty<TLength>;
  columnRule?: ColumnRuleProperty;
  columnRuleColor?: ColumnRuleColorProperty;
  columnRuleStyle?: ColumnRuleStyleProperty;
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  columnSpan?: ColumnSpanProperty;
  columnWidth?: ColumnWidthProperty<TLength>;
  columns?: ColumnsProperty;
  contain?: ContainProperty;
  content?: ContentProperty;
  counterIncrement?: CounterIncrementProperty;
  counterReset?: CounterResetProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  displayInside?: DisplayInsideProperty;
  displayList?: DisplayListProperty;
  displayOutside?: DisplayOutsideProperty;
  emptyCells?: EmptyCellsProperty;
  filter?: FilterProperty;
  flex?: FlexProperty;
  flexBasis?: FlexBasisProperty;
  flexDirection?: FlexDirectionProperty;
  flexFlow?: FlexFlowProperty;
  flexGrow?: FlexGrowProperty;
  flexShrink?: FlexShrinkProperty;
  flexWrap?: FlexWrapProperty;
  float?: FloatProperty;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontFeatureSettings?: FontFeatureSettingsProperty;
  fontKerning?: FontKerningProperty;
  fontLanguageOverride?: FontLanguageOverrideProperty;
  fontVariationSettings?: FontVariationSettingsProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontSynthesis?: FontSynthesisProperty;
  fontVariant?: FontVariantProperty;
  fontVariantAlternates?: FontVariantAlternatesProperty;
  fontVariantCaps?: FontVariantCapsProperty;
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  fontVariantLigatures?: FontVariantLigaturesProperty;
  fontVariantNumeric?: FontVariantNumericProperty;
  fontVariantPosition?: FontVariantPositionProperty;
  fontWeight?: FontWeightProperty;
  grid?: GridProperty;
  gridArea?: GridAreaProperty;
  gridAutoColumns?: GridAutoColumnsProperty;
  gridAutoFlow?: GridAutoFlowProperty;
  gridAutoRows?: GridAutoRowsProperty;
  gridColumn?: GridColumnProperty;
  gridColumnEnd?: GridColumnEndProperty;
  gridColumnGap?: GridColumnGapProperty<TLength>;
  gridColumnStart?: GridColumnStartProperty;
  gridGap?: GridGapProperty;
  gridRow?: GridRowProperty;
  gridRowEnd?: GridRowEndProperty;
  gridRowGap?: GridRowGapProperty<TLength>;
  gridRowStart?: GridRowStartProperty;
  gridTemplate?: GridTemplateProperty;
  gridTemplateAreas?: GridTemplateAreasProperty;
  gridTemplateColumns?: GridTemplateColumnsProperty;
  gridTemplateRows?: GridTemplateRowsProperty;
  height?: HeightProperty;
  hyphens?: HyphensProperty;
  imageOrientation?: ImageOrientationProperty;
  imageRendering?: ImageRenderingProperty;
  imageResolution?: ImageResolutionProperty;
  imeMode?: ImeModeProperty;
  initialLetter?: InitialLetterProperty;
  initialLetterAlign?: InitialLetterAlignProperty;
  inlineSize?: InlineSizeProperty;
  isolation?: IsolationProperty;
  justifyContent?: JustifyContentProperty;
  left?: LeftProperty<TLength>;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lineBreak?: LineBreakProperty;
  lineHeight?: LineHeightProperty<TLength>;
  listStyle?: ListStyleProperty;
  listStyleImage?: ListStyleImageProperty;
  listStylePosition?: ListStylePositionProperty;
  listStyleType?: ListStyleTypeProperty;
  margin?: MarginProperty;
  marginBlockEnd?: MarginBlockEndProperty;
  marginBlockStart?: MarginBlockStartProperty;
  marginBottom?: MarginBottomProperty<TLength>;
  marginInlineEnd?: MarginInlineEndProperty;
  marginInlineStart?: MarginInlineStartProperty;
  marginLeft?: MarginLeftProperty<TLength>;
  marginRight?: MarginRightProperty<TLength>;
  marginTop?: MarginTopProperty<TLength>;
  markerOffset?: MarkerOffsetProperty<TLength>;
  mask?: MaskProperty;
  maskClip?: MaskClipProperty;
  maskComposite?: MaskCompositeProperty;
  maskImage?: MaskImageProperty;
  maskMode?: MaskModeProperty;
  maskOrigin?: MaskOriginProperty;
  maskPosition?: MaskPositionProperty;
  maskRepeat?: MaskRepeatProperty;
  maskSize?: MaskSizeProperty;
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty;
  maxHeight?: MaxHeightProperty<TLength>;
  maxInlineSize?: MaxInlineSizeProperty;
  maxWidth?: MaxWidthProperty<TLength>;
  minBlockSize?: MinBlockSizeProperty;
  minHeight?: MinHeightProperty<TLength>;
  minInlineSize?: MinInlineSizeProperty;
  minWidth?: MinWidthProperty<TLength>;
  mixBlendMode?: MixBlendModeProperty;
  objectFit?: ObjectFitProperty;
  objectPosition?: ObjectPositionProperty;
  offset?: OffsetProperty;
  offsetAnchor?: OffsetAnchorProperty;
  offsetBlockEnd?: OffsetBlockEndProperty;
  offsetBlockStart?: OffsetBlockStartProperty;
  offsetInlineEnd?: OffsetInlineEndProperty;
  offsetInlineStart?: OffsetInlineStartProperty;
  offsetDistance?: OffsetDistanceProperty<TLength>;
  offsetPath?: OffsetPathProperty;
  offsetPosition?: OffsetPositionProperty;
  offsetRotate?: OffsetRotateProperty;
  opacity?: OpacityProperty;
  order?: OrderProperty;
  orphans?: OrphansProperty;
  outline?: OutlineProperty;
  outlineColor?: OutlineColorProperty;
  outlineOffset?: OutlineOffsetProperty<TLength>;
  outlineStyle?: OutlineStyleProperty;
  outlineWidth?: OutlineWidthProperty<TLength>;
  overflow?: OverflowProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowWrap?: OverflowWrapProperty;
  overflowX?: OverflowXProperty;
  overflowY?: OverflowYProperty;
  padding?: PaddingProperty;
  paddingBlockEnd?: PaddingBlockEndProperty;
  paddingBlockStart?: PaddingBlockStartProperty;
  paddingBottom?: PaddingBottomProperty<TLength>;
  paddingInlineEnd?: PaddingInlineEndProperty;
  paddingInlineStart?: PaddingInlineStartProperty;
  paddingLeft?: PaddingLeftProperty<TLength>;
  paddingRight?: PaddingRightProperty<TLength>;
  paddingTop?: PaddingTopProperty<TLength>;
  pageBreakAfter?: PageBreakAfterProperty;
  pageBreakBefore?: PageBreakBeforeProperty;
  pageBreakInside?: PageBreakInsideProperty;
  perspective?: PerspectiveProperty<TLength>;
  perspectiveOrigin?: PerspectiveOriginProperty;
  pointerEvents?: PointerEventsProperty;
  position?: PositionProperty;
  quotes?: QuotesProperty;
  resize?: ResizeProperty;
  right?: RightProperty<TLength>;
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  rubyPosition?: RubyPositionProperty;
  scrollBehavior?: ScrollBehaviorProperty;
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty;
  scrollSnapDestination?: ScrollSnapDestinationProperty;
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  scrollSnapType?: ScrollSnapTypeProperty;
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  shapeImageThreshold?: ShapeImageThresholdProperty;
  shapeMargin?: ShapeMarginProperty<TLength>;
  shapeOutside?: ShapeOutsideProperty;
  tabSize?: TabSizeProperty<TLength>;
  tableLayout?: TableLayoutProperty;
  textAlign?: TextAlignProperty;
  textAlignLast?: TextAlignLastProperty;
  textCombineUpright?: TextCombineUprightProperty;
  textDecoration?: TextDecorationProperty;
  textDecorationColor?: TextDecorationColorProperty;
  textDecorationLine?: TextDecorationLineProperty;
  textDecorationSkip?: TextDecorationSkipProperty;
  textDecorationStyle?: TextDecorationStyleProperty;
  textEmphasis?: TextEmphasisProperty;
  textEmphasisColor?: TextEmphasisColorProperty;
  textEmphasisPosition?: TextEmphasisPositionProperty;
  textEmphasisStyle?: TextEmphasisStyleProperty;
  textIndent?: TextIndentProperty;
  textJustify?: TextJustifyProperty;
  textOrientation?: TextOrientationProperty;
  textOverflow?: TextOverflowProperty;
  textRendering?: TextRenderingProperty;
  textShadow?: TextShadowProperty;
  textSizeAdjust?: TextSizeAdjustProperty;
  textTransform?: TextTransformProperty;
  textUnderlinePosition?: TextUnderlinePositionProperty;
  top?: TopProperty<TLength>;
  touchAction?: TouchActionProperty;
  transform?: TransformProperty;
  transformBox?: TransformBoxProperty;
  transformOrigin?: TransformOriginProperty;
  transformStyle?: TransformStyleProperty;
  transition?: TransitionProperty;
  transitionDelay?: TransitionDelayProperty;
  transitionDuration?: TransitionDurationProperty;
  transitionProperty?: TransitionPropertyProperty;
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  unicodeBidi?: UnicodeBidiProperty;
  userSelect?: UserSelectProperty;
  verticalAlign?: VerticalAlignProperty<TLength>;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  widows?: WidowsProperty;
  width?: WidthProperty;
  willChange?: WillChangeProperty;
  wordBreak?: WordBreakProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  wordWrap?: WordWrapProperty;
  writingMode?: WritingModeProperty;
  zIndex?: ZIndexProperty;
}

export interface StandardPropertiesFallback<TLength = string> {
  alignContent?: AlignContentProperty | AlignContentProperty[];
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  animation?: AnimationProperty | AnimationProperty[];
  animationDelay?: AnimationDelayProperty | AnimationDelayProperty[];
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  animationDuration?: AnimationDurationProperty | AnimationDurationProperty[];
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  appearance?: AppearanceProperty | AppearanceProperty[];
  azimuth?: AzimuthProperty | AzimuthProperty[];
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  background?: BackgroundProperty | BackgroundProperty[];
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  backgroundPosition?: BackgroundPositionProperty | BackgroundPositionProperty[];
  backgroundPositionX?: BackgroundPositionXProperty | BackgroundPositionXProperty[];
  backgroundPositionY?: BackgroundPositionYProperty | BackgroundPositionYProperty[];
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  backgroundSize?: BackgroundSizeProperty | BackgroundSizeProperty[];
  blockSize?: BlockSizeProperty | BlockSizeProperty[];
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  borderBlockEnd?: BorderBlockEndProperty | BorderBlockEndProperty[];
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  borderBlockEndWidth?: BorderBlockEndWidthProperty | BorderBlockEndWidthProperty[];
  borderBlockStart?: BorderBlockStartProperty | BorderBlockStartProperty[];
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  borderBlockStartWidth?: BorderBlockStartWidthProperty | BorderBlockStartWidthProperty[];
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  borderColor?: BorderColorProperty | BorderColorProperty[];
  borderImage?: BorderImageProperty | BorderImageProperty[];
  borderImageOutset?: BorderImageOutsetProperty | BorderImageOutsetProperty[];
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  borderImageWidth?: BorderImageWidthProperty | BorderImageWidthProperty[];
  borderInlineEnd?: BorderInlineEndProperty | BorderInlineEndProperty[];
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  borderInlineEndWidth?: BorderInlineEndWidthProperty | BorderInlineEndWidthProperty[];
  borderInlineStart?: BorderInlineStartProperty | BorderInlineStartProperty[];
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  borderInlineStartWidth?: BorderInlineStartWidthProperty | BorderInlineStartWidthProperty[];
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  borderRadius?: BorderRadiusProperty | BorderRadiusProperty[];
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  borderSpacing?: BorderSpacingProperty | BorderSpacingProperty[];
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  boxFlex?: BoxFlexProperty | BoxFlexProperty[];
  boxFlexGroup?: BoxFlexGroupProperty | BoxFlexGroupProperty[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: BoxOrdinalGroupProperty | BoxOrdinalGroupProperty[];
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  boxPack?: BoxPackProperty | BoxPackProperty[];
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  caretColor?: CaretColorProperty | CaretColorProperty[];
  clear?: ClearProperty | ClearProperty[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  color?: ColorProperty | ColorProperty[];
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  columnRule?: ColumnRuleProperty | ColumnRuleProperty[];
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  columns?: ColumnsProperty | ColumnsProperty[];
  contain?: ContainProperty | ContainProperty[];
  content?: ContentProperty | ContentProperty[];
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  counterReset?: CounterResetProperty | CounterResetProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  displayInside?: DisplayInsideProperty | DisplayInsideProperty[];
  displayList?: DisplayListProperty | DisplayListProperty[];
  displayOutside?: DisplayOutsideProperty | DisplayOutsideProperty[];
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  filter?: FilterProperty | FilterProperty[];
  flex?: FlexProperty | FlexProperty[];
  flexBasis?: FlexBasisProperty | FlexBasisProperty[];
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  flexGrow?: FlexGrowProperty | FlexGrowProperty[];
  flexShrink?: FlexShrinkProperty | FlexShrinkProperty[];
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  float?: FloatProperty | FloatProperty[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  grid?: GridProperty | GridProperty[];
  gridArea?: GridAreaProperty | GridAreaProperty[];
  gridAutoColumns?: GridAutoColumnsProperty | GridAutoColumnsProperty[];
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  gridAutoRows?: GridAutoRowsProperty | GridAutoRowsProperty[];
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  gridGap?: GridGapProperty | GridGapProperty[];
  gridRow?: GridRowProperty | GridRowProperty[];
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  gridTemplateColumns?: GridTemplateColumnsProperty | GridTemplateColumnsProperty[];
  gridTemplateRows?: GridTemplateRowsProperty | GridTemplateRowsProperty[];
  height?: HeightProperty | HeightProperty[];
  hyphens?: HyphensProperty | HyphensProperty[];
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  imeMode?: ImeModeProperty | ImeModeProperty[];
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  inlineSize?: InlineSizeProperty | InlineSizeProperty[];
  isolation?: IsolationProperty | IsolationProperty[];
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  listStyle?: ListStyleProperty | ListStyleProperty[];
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  margin?: MarginProperty | MarginProperty[];
  marginBlockEnd?: MarginBlockEndProperty | MarginBlockEndProperty[];
  marginBlockStart?: MarginBlockStartProperty | MarginBlockStartProperty[];
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  marginInlineEnd?: MarginInlineEndProperty | MarginInlineEndProperty[];
  marginInlineStart?: MarginInlineStartProperty | MarginInlineStartProperty[];
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  markerOffset?: MarkerOffsetProperty<TLength> | MarkerOffsetProperty<TLength>[];
  mask?: MaskProperty | MaskProperty[];
  maskClip?: MaskClipProperty | MaskClipProperty[];
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  maskImage?: MaskImageProperty | MaskImageProperty[];
  maskMode?: MaskModeProperty | MaskModeProperty[];
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  maskPosition?: MaskPositionProperty | MaskPositionProperty[];
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  maskSize?: MaskSizeProperty | MaskSizeProperty[];
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: MaxBlockSizeProperty | MaxBlockSizeProperty[];
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  maxInlineSize?: MaxInlineSizeProperty | MaxInlineSizeProperty[];
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  minBlockSize?: MinBlockSizeProperty | MinBlockSizeProperty[];
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  minInlineSize?: MinInlineSizeProperty | MinInlineSizeProperty[];
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  objectPosition?: ObjectPositionProperty | ObjectPositionProperty[];
  offset?: OffsetProperty | OffsetProperty[];
  offsetAnchor?: OffsetAnchorProperty | OffsetAnchorProperty[];
  offsetBlockEnd?: OffsetBlockEndProperty | OffsetBlockEndProperty[];
  offsetBlockStart?: OffsetBlockStartProperty | OffsetBlockStartProperty[];
  offsetInlineEnd?: OffsetInlineEndProperty | OffsetInlineEndProperty[];
  offsetInlineStart?: OffsetInlineStartProperty | OffsetInlineStartProperty[];
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetPosition?: OffsetPositionProperty | OffsetPositionProperty[];
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  opacity?: OpacityProperty | OpacityProperty[];
  order?: OrderProperty | OrderProperty[];
  orphans?: OrphansProperty | OrphansProperty[];
  outline?: OutlineProperty | OutlineProperty[];
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  overflow?: OverflowProperty | OverflowProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  overflowX?: OverflowXProperty | OverflowXProperty[];
  overflowY?: OverflowYProperty | OverflowYProperty[];
  padding?: PaddingProperty | PaddingProperty[];
  paddingBlockEnd?: PaddingBlockEndProperty | PaddingBlockEndProperty[];
  paddingBlockStart?: PaddingBlockStartProperty | PaddingBlockStartProperty[];
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  paddingInlineEnd?: PaddingInlineEndProperty | PaddingInlineEndProperty[];
  paddingInlineStart?: PaddingInlineStartProperty | PaddingInlineStartProperty[];
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  perspectiveOrigin?: PerspectiveOriginProperty | PerspectiveOriginProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  position?: PositionProperty | PositionProperty[];
  quotes?: QuotesProperty | QuotesProperty[];
  resize?: ResizeProperty | ResizeProperty[];
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty | ScrollSnapCoordinateProperty[];
  scrollSnapDestination?: ScrollSnapDestinationProperty | ScrollSnapDestinationProperty[];
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  shapeImageThreshold?: ShapeImageThresholdProperty | ShapeImageThresholdProperty[];
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  textAlign?: TextAlignProperty | TextAlignProperty[];
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  textEmphasisPosition?: TextEmphasisPositionProperty | TextEmphasisPositionProperty[];
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  textIndent?: TextIndentProperty | TextIndentProperty[];
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  textShadow?: TextShadowProperty | TextShadowProperty[];
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  textTransform?: TextTransformProperty | TextTransformProperty[];
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  touchAction?: TouchActionProperty | TouchActionProperty[];
  transform?: TransformProperty | TransformProperty[];
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  transformOrigin?: TransformOriginProperty | TransformOriginProperty[];
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  transition?: TransitionProperty | TransitionProperty[];
  transitionDelay?: TransitionDelayProperty | TransitionDelayProperty[];
  transitionDuration?: TransitionDurationProperty | TransitionDurationProperty[];
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  userSelect?: UserSelectProperty | UserSelectProperty[];
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  widows?: WidowsProperty | WidowsProperty[];
  width?: WidthProperty | WidthProperty[];
  willChange?: WillChangeProperty | WillChangeProperty[];
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
  zIndex?: ZIndexProperty | ZIndexProperty[];
}

export interface VendorProperties<TLength = string> {
  msOverflowStyle?: MsOverflowStyleProperty;
  mozAppearance?: MozAppearanceProperty;
  mozBinding?: MozBindingProperty;
  mozBorderBottomColors?: MozBorderBottomColorsProperty;
  mozBorderLeftColors?: MozBorderLeftColorsProperty;
  mozBorderRightColors?: MozBorderRightColorsProperty;
  mozBorderTopColors?: MozBorderTopColorsProperty;
  mozContextProperties?: MozContextPropertiesProperty;
  mozFloatEdge?: MozFloatEdgeProperty;
  mozForceBrokenImageIcon?: MozForceBrokenImageIconProperty;
  mozImageRegion?: MozImageRegionProperty;
  mozOrient?: MozOrientProperty;
  mozOutlineRadius?: MozOutlineRadiusProperty;
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty;
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty;
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty;
  mozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty;
  mozStackSizing?: MozStackSizingProperty;
  mozTextBlink?: MozTextBlinkProperty;
  mozUserFocus?: MozUserFocusProperty;
  mozUserInput?: MozUserInputProperty;
  mozUserModify?: MozUserModifyProperty;
  mozWindowShadow?: MozWindowShadowProperty;
  webkitBorderBefore?: WebkitBorderBeforeProperty;
  webkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty;
  webkitBoxReflect?: WebkitBoxReflectProperty;
  webkitMask?: WebkitMaskProperty;
  webkitMaskAttachment?: WebkitMaskAttachmentProperty;
  webkitMaskClip?: WebkitMaskClipProperty;
  webkitMaskComposite?: WebkitMaskCompositeProperty;
  webkitMaskImage?: WebkitMaskImageProperty;
  webkitMaskOrigin?: WebkitMaskOriginProperty;
  webkitMaskPosition?: WebkitMaskPositionProperty;
  webkitMaskPositionX?: WebkitMaskPositionXProperty;
  webkitMaskPositionY?: WebkitMaskPositionYProperty;
  webkitMaskRepeat?: WebkitMaskRepeatProperty;
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  webkitTextFillColor?: WebkitTextFillColorProperty;
  webkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  webkitTouchCallout?: WebkitTouchCalloutProperty;
}

export interface VendorPropertiesFallback<TLength = string> {
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  mozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  mozBinding?: MozBindingProperty | MozBindingProperty[];
  mozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  mozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  mozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  mozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  mozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  mozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  mozForceBrokenImageIcon?: MozForceBrokenImageIconProperty | MozForceBrokenImageIconProperty[];
  mozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  mozOrient?: MozOrientProperty | MozOrientProperty[];
  mozOutlineRadius?: MozOutlineRadiusProperty | MozOutlineRadiusProperty[];
  mozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty | MozOutlineRadiusBottomleftProperty[];
  mozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty | MozOutlineRadiusBottomrightProperty[];
  mozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty | MozOutlineRadiusTopleftProperty[];
  mozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty | MozOutlineRadiusToprightProperty[];
  mozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  mozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  mozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  mozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  mozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  mozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  webkitBorderBefore?: WebkitBorderBeforeProperty | WebkitBorderBeforeProperty[];
  webkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  webkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  webkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty | WebkitBorderBeforeWidthProperty[];
  webkitBoxReflect?: WebkitBoxReflectProperty | WebkitBoxReflectProperty[];
  webkitMask?: WebkitMaskProperty | WebkitMaskProperty[];
  webkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  webkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  webkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  webkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  webkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  webkitMaskPosition?: WebkitMaskPositionProperty | WebkitMaskPositionProperty[];
  webkitMaskPositionX?: WebkitMaskPositionXProperty | WebkitMaskPositionXProperty[];
  webkitMaskPositionY?: WebkitMaskPositionYProperty | WebkitMaskPositionYProperty[];
  webkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  webkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  webkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  webkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  webkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  webkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  webkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  webkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
}

export interface Properties<TLength = string> extends StandardProperties<TLength>, VendorProperties<TLength> {}

export interface PropertiesFallback<TLength = string> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

export type Pseudos =
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
type AlignContentProperty = All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";

type AlignItemsProperty = All | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type AlignSelfProperty = All | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

type AnimationProperty = All | string;

type AnimationDelayProperty = All | string;

type AnimationDirectionProperty = All | SingleAnimationDirection;

type AnimationDurationProperty = All | string;

type AnimationFillModeProperty = All | SingleAnimationFillMode;

type AnimationIterationCountProperty = All | SingleAnimationIterationCount;

type AnimationNameProperty = All | string;

type AnimationPlayStateProperty = All | SingleAnimationPlayState;

type AnimationTimingFunctionProperty = All | SingleTimingFunction;

type AppearanceProperty = All | "auto" | "none";

type AzimuthProperty = All | string;

type BackdropFilterProperty = All | "none" | string;

type BackfaceVisibilityProperty = All | "visible" | "hidden";

type BackgroundProperty = All | string;

type BackgroundAttachmentProperty = All | Attachment;

type BackgroundBlendModeProperty = All | BlendMode;

type BackgroundClipProperty = All | Box;

type BackgroundColorProperty = All | Color;

type BackgroundImageProperty = All | BgImage;

type BackgroundOriginProperty = All | Box;

type BackgroundPositionProperty = All | string;

type BackgroundPositionXProperty = All | string;

type BackgroundPositionYProperty = All | string;

type BackgroundRepeatProperty = All | string;

type BackgroundSizeProperty = All | string;

type BlockSizeProperty = All | string;

type BorderProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockEndProperty = All | string;

type BorderBlockEndColorProperty = All | string;

type BorderBlockEndStyleProperty = All | string;

type BorderBlockEndWidthProperty = All | string;

type BorderBlockStartProperty = All | string;

type BorderBlockStartColorProperty = All | string;

type BorderBlockStartStyleProperty = All | string;

type BorderBlockStartWidthProperty = All | string;

type BorderBottomProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomColorProperty = All | Color;

type BorderBottomLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderBottomStyleProperty = All | BrStyle;

type BorderBottomWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderCollapseProperty = All | "collapse" | "separate";

type BorderColorProperty = All | Color;

type BorderImageProperty = All | string;

type BorderImageOutsetProperty = All | string;

type BorderImageRepeatProperty = All | string;

type BorderImageSliceProperty = All | string;

type BorderImageSourceProperty = All | "none" | string;

type BorderImageWidthProperty = All | string;

type BorderInlineEndProperty = All | string;

type BorderInlineEndColorProperty = All | string;

type BorderInlineEndStyleProperty = All | string;

type BorderInlineEndWidthProperty = All | string;

type BorderInlineStartProperty = All | string;

type BorderInlineStartColorProperty = All | string;

type BorderInlineStartStyleProperty = All | string;

type BorderInlineStartWidthProperty = All | string;

type BorderLeftProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderLeftColorProperty = All | Color;

type BorderLeftStyleProperty = All | BrStyle;

type BorderLeftWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderRadiusProperty = All | string;

type BorderRightProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderRightColorProperty = All | Color;

type BorderRightStyleProperty = All | BrStyle;

type BorderRightWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderSpacingProperty = All | string;

type BorderStyleProperty = All | BrStyle;

type BorderTopProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

type BorderTopColorProperty = All | Color;

type BorderTopLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

type BorderTopStyleProperty = All | BrStyle;

type BorderTopWidthProperty<TLength> = All | BrWidth<TLength>;

type BorderWidthProperty<TLength> = All | BrWidth<TLength>;

type BottomProperty<TLength> = All | "auto" | string | TLength;

type BoxAlignProperty = All | "start" | "center" | "end" | "baseline" | "stretch";

type BoxDecorationBreakProperty = All | "slice" | "clone";

type BoxDirectionProperty = All | "normal" | "reverse" | "inherit";

type BoxFlexProperty = All | number;

type BoxFlexGroupProperty = All | number;

type BoxLinesProperty = All | "single" | "multiple";

type BoxOrdinalGroupProperty = All | number;

type BoxOrientProperty = All | "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";

type BoxPackProperty = All | "start" | "center" | "end" | "justify";

type BoxShadowProperty = All | "none" | string;

type BoxSizingProperty = All | "content-box" | "border-box";

type BreakAfterProperty = All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakBeforeProperty = All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";

type BreakInsideProperty = All | "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";

type CaptionSideProperty = All | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";

type CaretColorProperty = All | Color | "auto";

type ClearProperty = All | "none" | "left" | "right" | "both" | "inline-start" | "inline-end";

type ClipProperty = All | "auto" | string;

type ClipPathProperty = All | string;

type ColorProperty = All | Color;

type ColumnCountProperty = All | "auto" | number;

type ColumnFillProperty = All | "auto" | "balance";

type ColumnGapProperty<TLength> = All | "normal" | TLength;

type ColumnRuleProperty = All | string;

type ColumnRuleColorProperty = All | Color;

type ColumnRuleStyleProperty = All | BrStyle;

type ColumnRuleWidthProperty<TLength> = All | BrWidth<TLength>;

type ColumnSpanProperty = All | "none" | "all";

type ColumnWidthProperty<TLength> = All | "auto" | TLength;

type ColumnsProperty = All | string;

type ContainProperty = All | string;

type ContentProperty = All | string;

type CounterIncrementProperty = All | string;

type CounterResetProperty = All | string;

type CursorProperty = All | string;

type DirectionProperty = All | "ltr" | "rtl";

type DisplayProperty = All | string;

type DisplayInsideProperty = All | "auto" | "block" | "table" | "flex" | "grid" | "ruby";

type DisplayListProperty = All | "none" | "list-item";

type DisplayOutsideProperty =
  | All
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

type EmptyCellsProperty = All | "show" | "hide";

type FilterProperty = All | "none" | string;

type FlexProperty = All | string;

type FlexBasisProperty = All | "content" | string;

type FlexDirectionProperty = All | "row" | "row-reverse" | "column" | "column-reverse";

type FlexFlowProperty = All | string;

type FlexGrowProperty = All | number;

type FlexShrinkProperty = All | number;

type FlexWrapProperty = All | "nowrap" | "wrap" | "wrap-reverse";

type FloatProperty = All | "left" | "right" | "none" | "inline-start" | "inline-end";

type FontProperty = All | string;

type FontFamilyProperty = All | string;

type FontFeatureSettingsProperty = All | "normal" | string;

type FontKerningProperty = All | "auto" | "normal" | "none";

type FontLanguageOverrideProperty = All | "normal" | string;

type FontVariationSettingsProperty = All | string;

type FontSizeProperty<TLength> = All | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

type FontSizeAdjustProperty = All | "none" | number;

type FontStretchProperty =
  | All
  | "normal"
  | "ultra-condensed"
  | "extra-condensed"
  | "condensed"
  | "semi-condensed"
  | "semi-expanded"
  | "expanded"
  | "extra-expanded"
  | "ultra-expanded";

type FontStyleProperty = All | "normal" | "italic" | "oblique";

type FontSynthesisProperty = All | string;

type FontVariantProperty = All | string;

type FontVariantAlternatesProperty = All | string;

type FontVariantCapsProperty = All | "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";

type FontVariantEastAsianProperty = All | string;

type FontVariantLigaturesProperty = All | string;

type FontVariantNumericProperty = All | string;

type FontVariantPositionProperty = All | "normal" | "sub" | "super";

type FontWeightProperty = All | "900" | "bold" | "bolder" | "lighter" | "100" | "200" | "normal" | "400" | "500" | "600" | "700" | "800" | "300";

type GridProperty = All | string;

type GridAreaProperty = All | string;

type GridAutoColumnsProperty = All | string;

type GridAutoFlowProperty = All | string;

type GridAutoRowsProperty = All | string;

type GridColumnProperty = All | string;

type GridColumnEndProperty = All | string;

type GridColumnGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridColumnStartProperty = All | string;

type GridGapProperty = All | string;

type GridRowProperty = All | string;

type GridRowEndProperty = All | string;

type GridRowGapProperty<TLength> = All | LengthPercentage<TLength>;

type GridRowStartProperty = All | string;

type GridTemplateProperty = All | string;

type GridTemplateAreasProperty = All | "none" | string;

type GridTemplateColumnsProperty = All | "none" | string;

type GridTemplateRowsProperty = All | "none" | string;

type HeightProperty = All | string;

type HyphensProperty = All | "none" | "manual" | "auto";

type ImageOrientationProperty = All | string;

type ImageRenderingProperty = All | "auto" | "crisp-edges" | "pixelated";

type ImageResolutionProperty = All | string;

type ImeModeProperty = All | "auto" | "normal" | "active" | "inactive" | "disabled";

type InitialLetterProperty = All | string;

type InitialLetterAlignProperty = All | string;

type InlineSizeProperty = All | string;

type IsolationProperty = All | "auto" | "isolate";

type JustifyContentProperty = All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

type LeftProperty<TLength> = All | "auto" | string | TLength;

type LetterSpacingProperty<TLength> = All | "normal" | TLength;

type LineBreakProperty = All | "auto" | "loose" | "normal" | "strict";

type LineHeightProperty<TLength> = All | "normal" | string | number | TLength;

type ListStyleProperty = All | string;

type ListStyleImageProperty = All | "none" | string;

type ListStylePositionProperty = All | "inside" | "outside";

type ListStyleTypeProperty = All | "none" | string;

type MarginProperty = All | string;

type MarginBlockEndProperty = All | string;

type MarginBlockStartProperty = All | string;

type MarginBottomProperty<TLength> = All | "auto" | string | TLength;

type MarginInlineEndProperty = All | string;

type MarginInlineStartProperty = All | string;

type MarginLeftProperty<TLength> = All | "auto" | string | TLength;

type MarginRightProperty<TLength> = All | "auto" | string | TLength;

type MarginTopProperty<TLength> = All | "auto" | string | TLength;

type MarkerOffsetProperty<TLength> = All | "auto" | TLength;

type MaskProperty = All | string;

type MaskClipProperty = All | string;

type MaskCompositeProperty = All | CompositingOperator;

type MaskImageProperty = All | MaskReference;

type MaskModeProperty = All | MaskingMode;

type MaskOriginProperty = All | GeometryBox;

type MaskPositionProperty = All | string;

type MaskRepeatProperty = All | string;

type MaskSizeProperty = All | string;

type MaskTypeProperty = All | "luminance" | "alpha";

type MaxBlockSizeProperty = All | string;

type MaxHeightProperty<TLength> = All | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MaxInlineSizeProperty = All | string;

type MaxWidthProperty<TLength> = All | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MinBlockSizeProperty = All | string;

type MinHeightProperty<TLength> = All | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MinInlineSizeProperty = All | string;

type MinWidthProperty<TLength> = All | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string | TLength;

type MixBlendModeProperty = All | BlendMode;

type ObjectFitProperty = All | "fill" | "contain" | "cover" | "none" | "scale-down";

type ObjectPositionProperty = All | string;

type OffsetProperty = All | string;

type OffsetAnchorProperty = All | "auto" | string;

type OffsetBlockEndProperty = All | string;

type OffsetBlockStartProperty = All | string;

type OffsetInlineEndProperty = All | string;

type OffsetInlineStartProperty = All | string;

type OffsetDistanceProperty<TLength> = All | LengthPercentage<TLength>;

type OffsetPathProperty = All | string;

type OffsetPositionProperty = All | "auto" | string;

type OffsetRotateProperty = All | string;

type OpacityProperty = All | number;

type OrderProperty = All | number;

type OrphansProperty = All | number;

type OutlineProperty = All | string;

type OutlineColorProperty = All | Color | "invert";

type OutlineOffsetProperty<TLength> = All | TLength;

type OutlineStyleProperty = All | BrStyle | "auto";

type OutlineWidthProperty<TLength> = All | BrWidth<TLength>;

type OverflowProperty = All | "visible" | "hidden" | "scroll" | "auto";

type OverflowClipBoxProperty = All | "padding-box" | "content-box";

type OverflowWrapProperty = All | "normal" | "break-word";

type OverflowXProperty = All | "visible" | "hidden" | "scroll" | "auto";

type OverflowYProperty = All | "visible" | "hidden" | "scroll" | "auto";

type PaddingProperty = All | string;

type PaddingBlockEndProperty = All | string;

type PaddingBlockStartProperty = All | string;

type PaddingBottomProperty<TLength> = All | string | TLength;

type PaddingInlineEndProperty = All | string;

type PaddingInlineStartProperty = All | string;

type PaddingLeftProperty<TLength> = All | string | TLength;

type PaddingRightProperty<TLength> = All | string | TLength;

type PaddingTopProperty<TLength> = All | string | TLength;

type PageBreakAfterProperty = All | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakBeforeProperty = All | "auto" | "always" | "avoid" | "left" | "right";

type PageBreakInsideProperty = All | "auto" | "avoid";

type PerspectiveProperty<TLength> = All | "none" | TLength;

type PerspectiveOriginProperty = All | string;

type PointerEventsProperty = All | "inherit" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "auto" | "painted" | "fill" | "stroke" | "all" | "visible";

type PositionProperty = All | "static" | "relative" | "absolute" | "sticky" | "fixed";

type QuotesProperty = All | string;

type ResizeProperty = All | "none" | "both" | "horizontal" | "vertical";

type RightProperty<TLength> = All | "auto" | string | TLength;

type RubyAlignProperty = All | "start" | "center" | "space-between" | "space-around";

type RubyMergeProperty = All | "separate" | "collapse" | "auto";

type RubyPositionProperty = All | "over" | "under" | "inter-character";

type ScrollBehaviorProperty = All | "auto" | "smooth";

type ScrollSnapCoordinateProperty = All | "none" | string;

type ScrollSnapDestinationProperty = All | string;

type ScrollSnapPointsXProperty = All | "none" | string;

type ScrollSnapPointsYProperty = All | "none" | string;

type ScrollSnapTypeProperty = All | "none" | "mandatory" | "proximity";

type ScrollSnapTypeXProperty = All | "none" | "mandatory" | "proximity";

type ScrollSnapTypeYProperty = All | "none" | "mandatory" | "proximity";

type ShapeImageThresholdProperty = All | number;

type ShapeMarginProperty<TLength> = All | LengthPercentage<TLength>;

type ShapeOutsideProperty = All | ShapeBox | "none" | string;

type TabSizeProperty<TLength> = All | number | TLength;

type TableLayoutProperty = All | "auto" | "fixed";

type TextAlignProperty = All | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";

type TextAlignLastProperty = All | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";

type TextCombineUprightProperty = All | string;

type TextDecorationProperty = All | string;

type TextDecorationColorProperty = All | Color;

type TextDecorationLineProperty = All | string;

type TextDecorationSkipProperty = All | string;

type TextDecorationStyleProperty = All | "solid" | "double" | "dotted" | "dashed" | "wavy";

type TextEmphasisProperty = All | string;

type TextEmphasisColorProperty = All | Color;

type TextEmphasisPositionProperty = All | string;

type TextEmphasisStyleProperty = All | string;

type TextIndentProperty = All | string;

type TextJustifyProperty = All | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientationProperty = All | "mixed" | "upright" | "sideways";

type TextOverflowProperty = All | string;

type TextRenderingProperty = All | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";

type TextShadowProperty = All | "none" | string;

type TextSizeAdjustProperty = All | "none" | "auto" | string;

type TextTransformProperty = All | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";

type TextUnderlinePositionProperty = All | string;

type TopProperty<TLength> = All | "auto" | string | TLength;

type TouchActionProperty = All | string;

type TransformProperty = All | "none" | string;

type TransformBoxProperty = All | "border-box" | "fill-box" | "view-box";

type TransformOriginProperty = All | string;

type TransformStyleProperty = All | "flat" | "preserve-3d";

type TransitionProperty = All | string;

type TransitionDelayProperty = All | string;

type TransitionDurationProperty = All | string;

type TransitionPropertyProperty = All | SingleTransitionProperty | "none";

type TransitionTimingFunctionProperty = All | SingleTransitionTimingFunction;

type UnicodeBidiProperty = All | "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";

type UserSelectProperty = All | "auto" | "text" | "none" | "contain" | "all";

type VerticalAlignProperty<TLength> = All | "text-bottom" | "sub" | "super" | "text-top" | "baseline" | "middle" | "top" | "bottom" | string | TLength;

type VisibilityProperty = All | "visible" | "hidden" | "collapse";

type WhiteSpaceProperty = All | "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";

type WidowsProperty = All | number;

type WidthProperty = All | string;

type WillChangeProperty = All | AnimateableFeature | "auto";

type WordBreakProperty = All | "normal" | "break-all" | "keep-all";

type WordSpacingProperty<TLength> = All | LengthPercentage<TLength> | "normal";

type WordWrapProperty = All | "normal" | "break-word";

type WritingModeProperty = All | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";

type ZIndexProperty = All | "auto" | number;

type MsOverflowStyleProperty = All | "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";

type MozAppearanceProperty =
  | All
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

type MozBindingProperty = All | "none" | string;

type MozBorderBottomColorsProperty = All | string;

type MozBorderLeftColorsProperty = All | string;

type MozBorderRightColorsProperty = All | string;

type MozBorderTopColorsProperty = All | string;

type MozContextPropertiesProperty = All | string;

type MozFloatEdgeProperty = All | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozForceBrokenImageIconProperty = All | number;

type MozImageRegionProperty = All | "auto" | string;

type MozOrientProperty = All | "inline" | "block" | "horizontal" | "vertical";

type MozOutlineRadiusProperty = All | string;

type MozOutlineRadiusBottomleftProperty = All | string;

type MozOutlineRadiusBottomrightProperty = All | string;

type MozOutlineRadiusTopleftProperty = All | string;

type MozOutlineRadiusToprightProperty = All | string;

type MozStackSizingProperty = All | "ignore" | "stretch-to-fit";

type MozTextBlinkProperty = All | "none" | "blink";

type MozUserFocusProperty = All | "ignore" | "normal" | "select-after" | "select-before" | "select-menu" | "select-same" | "select-all" | "none";

type MozUserInputProperty = All | "auto" | "none" | "enabled" | "disabled";

type MozUserModifyProperty = All | "read-only" | "read-write" | "write-only";

type MozWindowShadowProperty = All | "default" | "menu" | "tooltip" | "sheet" | "none";

type WebkitBorderBeforeProperty = All | string;

type WebkitBorderBeforeColorProperty = All | string;

type WebkitBorderBeforeStyleProperty = All | string;

type WebkitBorderBeforeWidthProperty = All | string;

type WebkitBoxReflectProperty = All | string;

type WebkitMaskProperty = All | string;

type WebkitMaskAttachmentProperty = All | string;

type WebkitMaskClipProperty = All | string;

type WebkitMaskCompositeProperty = All | string;

type WebkitMaskImageProperty = All | string;

type WebkitMaskOriginProperty = All | string;

type WebkitMaskPositionProperty = All | string;

type WebkitMaskPositionXProperty = All | string;

type WebkitMaskPositionYProperty = All | string;

type WebkitMaskRepeatProperty = All | string;

type WebkitMaskRepeatXProperty = All | "repeat" | "no-repeat" | "space" | "round";

type WebkitMaskRepeatYProperty = All | "repeat" | "no-repeat" | "space" | "round";

type WebkitTapHighlightColorProperty = All | Color;

type WebkitTextFillColorProperty = All | Color;

type WebkitTextStrokeProperty<TLength> = All | Color | string | TLength;

type WebkitTextStrokeColorProperty = All | Color;

type WebkitTextStrokeWidthProperty<TLength> = All | TLength;

type WebkitTouchCalloutProperty = All | "default" | "none";

type All = "initial" | "inherit" | "unset";

type SingleAnimationDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";

type SingleAnimationFillMode = "none" | "forwards" | "backwards" | "both";

type SingleAnimationIterationCount = "infinite" | number;

type SingleAnimationPlayState = "running" | "paused";

type SingleTimingFunction = StepTimingFunction | "linear" | string;

type StepTimingFunction = "step-start" | "step-end" | string;

type Attachment = "scroll" | "fixed" | "local";

type BlendMode =
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

type Box = "border-box" | "padding-box" | "content-box";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type NamedColor =
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

type DeprecatedSystemColor =
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

type BgImage = "none" | string;

type BrWidth<TLength> = "thin" | "medium" | "thick" | TLength;

type BrStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";

type LengthPercentage<TLength> = string | TLength;

type AbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";

type RelativeSize = "larger" | "smaller";

type CompositingOperator = "add" | "subtract" | "intersect" | "exclude";

type MaskReference = "none" | string;

type MaskingMode = "alpha" | "luminance" | "match-source";

type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

type ShapeBox = Box | "margin-box";

type SingleTransitionProperty = "all" | string;

type SingleTransitionTimingFunction = SingleTimingFunction;

type AnimateableFeature = "scroll-position" | "contents" | string;
