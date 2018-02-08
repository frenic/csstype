declare module "csstype" {
  declare export type StandardProperties<TLength = string | number> = {
    alignContent?: AlignContentProperty,
    alignItems?: AlignItemsProperty,
    alignSelf?: AlignSelfProperty,
    animation?: AnimationProperty,
    animationDelay?: AllString,
    animationDirection?: AnimationDirectionProperty,
    animationDuration?: AllString,
    animationFillMode?: AnimationFillModeProperty,
    animationIterationCount?: AnimationIterationCountProperty,
    animationName?: AnimationNameProperty,
    animationPlayState?: AnimationPlayStateProperty,
    animationTimingFunction?: AnimationTimingFunctionProperty,
    appearance?: AppearanceProperty,
    azimuth?: AzimuthProperty,
    backdropFilter?: BackdropFilterProperty,
    backfaceVisibility?: BackfaceVisibilityProperty,
    background?: BackgroundProperty<TLength>,
    backgroundAttachment?: BackgroundAttachmentProperty,
    backgroundBlendMode?: BackgroundBlendModeProperty,
    backgroundClip?: BackgroundClipProperty,
    backgroundColor?: BackgroundColorProperty,
    backgroundImage?: BackgroundImageProperty,
    backgroundOrigin?: BackgroundOriginProperty,
    backgroundPosition?: BackgroundPositionProperty<TLength>,
    backgroundPositionX?: BackgroundPositionXProperty<TLength>,
    backgroundPositionY?: BackgroundPositionYProperty<TLength>,
    backgroundRepeat?: BackgroundRepeatProperty,
    backgroundSize?: BackgroundSizeProperty<TLength>,
    blockSize?: AllString,
    border?: BorderProperty<TLength>,
    borderBlockEnd?: AllString,
    borderBlockEndColor?: AllString,
    borderBlockEndStyle?: AllString,
    borderBlockEndWidth?: AllString,
    borderBlockStart?: AllString,
    borderBlockStartColor?: AllString,
    borderBlockStartStyle?: AllString,
    borderBlockStartWidth?: AllString,
    borderBottom?: BorderBottomProperty<TLength>,
    borderBottomColor?: BorderBottomColorProperty,
    borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>,
    borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>,
    borderBottomStyle?: BorderBottomStyleProperty,
    borderBottomWidth?: BorderBottomWidthProperty<TLength>,
    borderCollapse?: BorderCollapseProperty,
    borderColor?: BorderColorProperty,
    borderImage?: AllString,
    borderImageOutset?: BorderImageOutsetProperty<TLength>,
    borderImageRepeat?: BorderImageRepeatProperty,
    borderImageSlice?: BorderImageSliceProperty,
    borderImageSource?: BorderImageSourceProperty,
    borderImageWidth?: BorderImageWidthProperty<TLength>,
    borderInlineEnd?: AllString,
    borderInlineEndColor?: AllString,
    borderInlineEndStyle?: AllString,
    borderInlineEndWidth?: AllString,
    borderInlineStart?: AllString,
    borderInlineStartColor?: AllString,
    borderInlineStartStyle?: AllString,
    borderInlineStartWidth?: AllString,
    borderLeft?: BorderLeftProperty<TLength>,
    borderLeftColor?: BorderLeftColorProperty,
    borderLeftStyle?: BorderLeftStyleProperty,
    borderLeftWidth?: BorderLeftWidthProperty<TLength>,
    borderRadius?: BorderRadiusProperty<TLength>,
    borderRight?: BorderRightProperty<TLength>,
    borderRightColor?: BorderRightColorProperty,
    borderRightStyle?: BorderRightStyleProperty,
    borderRightWidth?: BorderRightWidthProperty<TLength>,
    borderSpacing?: BorderSpacingProperty<TLength>,
    borderStyle?: BorderStyleProperty,
    borderTop?: BorderTopProperty<TLength>,
    borderTopColor?: BorderTopColorProperty,
    borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>,
    borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>,
    borderTopStyle?: BorderTopStyleProperty,
    borderTopWidth?: BorderTopWidthProperty<TLength>,
    borderWidth?: BorderWidthProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    boxAlign?: BoxAlignProperty,
    boxDecorationBreak?: BoxDecorationBreakProperty,
    boxDirection?: BoxDirectionProperty,
    boxFlex?: AllNumber,
    boxFlexGroup?: AllNumber,
    boxLines?: BoxLinesProperty,
    boxOrdinalGroup?: AllNumber,
    boxOrient?: BoxOrientProperty,
    boxPack?: BoxPackProperty,
    boxShadow?: BoxShadowProperty<TLength>,
    boxSizing?: BoxSizingProperty,
    breakAfter?: BreakAfterProperty,
    breakBefore?: BreakBeforeProperty,
    breakInside?: BreakInsideProperty,
    captionSide?: CaptionSideProperty,
    caretColor?: CaretColorProperty,
    clear?: ClearProperty,
    clip?: ClipProperty,
    clipPath?: ClipPathProperty,
    color?: ColorProperty,
    columnCount?: ColumnCountProperty,
    columnFill?: ColumnFillProperty,
    columnGap?: ColumnGapProperty<TLength>,
    columnRule?: AllString,
    columnRuleColor?: ColumnRuleColorProperty,
    columnRuleStyle?: AllString,
    columnRuleWidth?: AllString,
    columnSpan?: ColumnSpanProperty,
    columnWidth?: ColumnWidthProperty<TLength>,
    columns?: AllString,
    contain?: ContainProperty,
    content?: ContentProperty,
    counterIncrement?: CounterIncrementProperty,
    counterReset?: CounterResetProperty,
    cursor?: CursorProperty,
    direction?: DirectionProperty,
    display?: DisplayProperty,
    displayInside?: DisplayInsideProperty,
    displayList?: DisplayListProperty,
    displayOutside?: DisplayOutsideProperty,
    emptyCells?: EmptyCellsProperty,
    filter?: FilterProperty,
    flex?: FlexProperty,
    flexBasis?: FlexBasisProperty,
    flexDirection?: FlexDirectionProperty,
    flexFlow?: AllString,
    flexGrow?: AllNumber,
    flexShrink?: AllNumber,
    flexWrap?: FlexWrapProperty,
    float?: FloatProperty,
    font?: FontProperty,
    fontFamily?: FontFamilyProperty,
    fontFeatureSettings?: FontFeatureSettingsProperty,
    fontKerning?: FontKerningProperty,
    fontLanguageOverride?: FontLanguageOverrideProperty,
    fontVariationSettings?: FontVariationSettingsProperty,
    fontSize?: FontSizeProperty<TLength>,
    fontSizeAdjust?: FontSizeAdjustProperty,
    fontStretch?: FontStretchProperty,
    fontStyle?: FontStyleProperty,
    fontSynthesis?: FontSynthesisProperty,
    fontVariant?: FontVariantProperty,
    fontVariantAlternates?: FontVariantAlternatesProperty,
    fontVariantCaps?: FontVariantCapsProperty,
    fontVariantEastAsian?: FontVariantEastAsianProperty,
    fontVariantLigatures?: FontVariantLigaturesProperty,
    fontVariantNumeric?: FontVariantNumericProperty,
    fontVariantPosition?: FontVariantPositionProperty,
    fontWeight?: FontWeightProperty,
    grid?: GridProperty,
    gridArea?: AllString,
    gridAutoColumns?: GridAutoColumnsProperty<TLength>,
    gridAutoFlow?: GridAutoFlowProperty,
    gridAutoRows?: GridAutoRowsProperty<TLength>,
    gridColumn?: GridColumnProperty,
    gridColumnEnd?: GridColumnEndProperty,
    gridColumnGap?: GridColumnGapProperty<TLength>,
    gridColumnStart?: GridColumnStartProperty,
    gridGap?: AllString,
    gridRow?: GridRowProperty,
    gridRowEnd?: GridRowEndProperty,
    gridRowGap?: GridRowGapProperty<TLength>,
    gridRowStart?: GridRowStartProperty,
    gridTemplate?: GridTemplateProperty<TLength>,
    gridTemplateAreas?: GridTemplateAreasProperty,
    gridTemplateColumns?: GridTemplateColumnsProperty<TLength>,
    gridTemplateRows?: GridTemplateRowsProperty<TLength>,
    hangingPunctuation?: HangingPunctuationProperty,
    height?: HeightProperty<TLength>,
    hyphens?: HyphensProperty,
    imageOrientation?: ImageOrientationProperty,
    imageRendering?: ImageRenderingProperty,
    imageResolution?: ImageResolutionProperty,
    imeMode?: ImeModeProperty,
    initialLetter?: InitialLetterProperty,
    initialLetterAlign?: InitialLetterAlignProperty,
    inlineSize?: AllString,
    isolation?: IsolationProperty,
    justifyContent?: JustifyContentProperty,
    left?: LeftProperty<TLength>,
    letterSpacing?: LetterSpacingProperty<TLength>,
    lineBreak?: LineBreakProperty,
    lineHeight?: LineHeightProperty<TLength>,
    lineHeightStep?: LineHeightStepProperty<TLength>,
    listStyle?: AllString,
    listStyleImage?: ListStyleImageProperty,
    listStylePosition?: ListStylePositionProperty,
    listStyleType?: ListStyleTypeProperty,
    margin?: MarginProperty<TLength>,
    marginBlockEnd?: AllString,
    marginBlockStart?: AllString,
    marginBottom?: MarginBottomProperty<TLength>,
    marginInlineEnd?: AllString,
    marginInlineStart?: AllString,
    marginLeft?: MarginLeftProperty<TLength>,
    marginRight?: MarginRightProperty<TLength>,
    marginTop?: MarginTopProperty<TLength>,
    mask?: MaskProperty<TLength>,
    maskBorder?: AllString,
    maskBorderMode?: MaskBorderModeProperty,
    maskBorderOutset?: MaskBorderOutsetProperty<TLength>,
    maskBorderRepeat?: MaskBorderRepeatProperty,
    maskBorderSlice?: MaskBorderSliceProperty,
    maskBorderSource?: MaskBorderSourceProperty,
    maskBorderWidth?: MaskBorderWidthProperty<TLength>,
    maskClip?: MaskClipProperty,
    maskComposite?: MaskCompositeProperty,
    maskImage?: MaskImageProperty,
    maskMode?: MaskModeProperty,
    maskOrigin?: MaskOriginProperty,
    maskPosition?: MaskPositionProperty<TLength>,
    maskRepeat?: MaskRepeatProperty,
    maskSize?: MaskSizeProperty<TLength>,
    maskType?: MaskTypeProperty,
    maxBlockSize?: AllString,
    maxHeight?: MaxHeightProperty<TLength>,
    maxInlineSize?: AllString,
    maxWidth?: MaxWidthProperty<TLength>,
    minBlockSize?: AllString,
    minHeight?: MinHeightProperty<TLength>,
    minInlineSize?: AllString,
    minWidth?: MinWidthProperty<TLength>,
    mixBlendMode?: MixBlendModeProperty,
    objectFit?: ObjectFitProperty,
    objectPosition?: ObjectPositionProperty<TLength>,
    offset?: AllString,
    offsetAnchor?: OffsetAnchorProperty<TLength>,
    offsetBlockEnd?: AllString,
    offsetBlockStart?: AllString,
    offsetInlineEnd?: AllString,
    offsetInlineStart?: AllString,
    offsetDistance?: OffsetDistanceProperty<TLength>,
    offsetPath?: OffsetPathProperty,
    offsetPosition?: OffsetPositionProperty<TLength>,
    offsetRotate?: OffsetRotateProperty,
    opacity?: AllNumber,
    order?: AllNumber,
    orphans?: AllNumber,
    outline?: AllString,
    outlineColor?: OutlineColorProperty,
    outlineOffset?: OutlineOffsetProperty<TLength>,
    outlineStyle?: OutlineStyleProperty,
    outlineWidth?: OutlineWidthProperty<TLength>,
    overflow?: OverflowProperty,
    overflowClipBox?: OverflowClipBoxProperty,
    overflowWrap?: OverflowWrapProperty,
    overflowX?: OverflowXProperty,
    overflowY?: OverflowYProperty,
    padding?: PaddingProperty<TLength>,
    paddingBlockEnd?: AllString,
    paddingBlockStart?: AllString,
    paddingBottom?: PaddingBottomProperty<TLength>,
    paddingInlineEnd?: AllString,
    paddingInlineStart?: AllString,
    paddingLeft?: PaddingLeftProperty<TLength>,
    paddingRight?: PaddingRightProperty<TLength>,
    paddingTop?: PaddingTopProperty<TLength>,
    pageBreakAfter?: PageBreakAfterProperty,
    pageBreakBefore?: PageBreakBeforeProperty,
    pageBreakInside?: PageBreakInsideProperty,
    perspective?: PerspectiveProperty<TLength>,
    perspectiveOrigin?: PerspectiveOriginProperty<TLength>,
    pointerEvents?: PointerEventsProperty,
    position?: PositionProperty,
    quotes?: QuotesProperty,
    resize?: ResizeProperty,
    right?: RightProperty<TLength>,
    rubyAlign?: RubyAlignProperty,
    rubyMerge?: RubyMergeProperty,
    rubyPosition?: RubyPositionProperty,
    scrollBehavior?: ScrollBehaviorProperty,
    scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>,
    scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>,
    scrollSnapPointsX?: ScrollSnapPointsXProperty,
    scrollSnapPointsY?: ScrollSnapPointsYProperty,
    scrollSnapType?: ScrollSnapTypeProperty,
    scrollSnapTypeX?: ScrollSnapTypeXProperty,
    scrollSnapTypeY?: ScrollSnapTypeYProperty,
    shapeImageThreshold?: AllNumber,
    shapeMargin?: ShapeMarginProperty<TLength>,
    shapeOutside?: ShapeOutsideProperty,
    tabSize?: TabSizeProperty<TLength>,
    tableLayout?: TableLayoutProperty,
    textAlign?: TextAlignProperty,
    textAlignLast?: TextAlignLastProperty,
    textCombineUpright?: TextCombineUprightProperty,
    textDecoration?: AllString,
    textDecorationColor?: TextDecorationColorProperty,
    textDecorationLine?: TextDecorationLineProperty,
    textDecorationSkip?: TextDecorationSkipProperty,
    textDecorationSkipInk?: TextDecorationSkipInkProperty,
    textDecorationStyle?: TextDecorationStyleProperty,
    textEmphasis?: AllString,
    textEmphasisColor?: TextEmphasisColorProperty,
    textEmphasisPosition?: AllString,
    textEmphasisStyle?: TextEmphasisStyleProperty,
    textIndent?: TextIndentProperty<TLength>,
    textJustify?: TextJustifyProperty,
    textOrientation?: TextOrientationProperty,
    textOverflow?: TextOverflowProperty,
    textRendering?: TextRenderingProperty,
    textShadow?: TextShadowProperty<TLength>,
    textSizeAdjust?: TextSizeAdjustProperty,
    textTransform?: TextTransformProperty,
    textUnderlinePosition?: TextUnderlinePositionProperty,
    top?: TopProperty<TLength>,
    touchAction?: TouchActionProperty,
    transform?: TransformProperty,
    transformBox?: TransformBoxProperty,
    transformOrigin?: TransformOriginProperty<TLength>,
    transformStyle?: TransformStyleProperty,
    transition?: TransitionProperty,
    transitionDelay?: AllString,
    transitionDuration?: AllString,
    transitionProperty?: TransitionPropertyProperty,
    transitionTimingFunction?: TransitionTimingFunctionProperty,
    unicodeBidi?: UnicodeBidiProperty,
    userSelect?: UserSelectProperty,
    verticalAlign?: VerticalAlignProperty<TLength>,
    visibility?: VisibilityProperty,
    whiteSpace?: WhiteSpaceProperty,
    widows?: AllNumber,
    width?: WidthProperty<TLength>,
    willChange?: WillChangeProperty,
    wordBreak?: WordBreakProperty,
    wordSpacing?: WordSpacingProperty<TLength>,
    wordWrap?: WordWrapProperty,
    writingMode?: WritingModeProperty,
    zIndex?: ZIndexProperty,
  };

  declare export type StandardPropertiesHyphen<TLength = string | number> = {
    "align-content"?: AlignContentProperty,
    "align-items"?: AlignItemsProperty,
    "align-self"?: AlignSelfProperty,
    animation?: AnimationProperty,
    "animation-delay"?: AllString,
    "animation-direction"?: AnimationDirectionProperty,
    "animation-duration"?: AllString,
    "animation-fill-mode"?: AnimationFillModeProperty,
    "animation-iteration-count"?: AnimationIterationCountProperty,
    "animation-name"?: AnimationNameProperty,
    "animation-play-state"?: AnimationPlayStateProperty,
    "animation-timing-function"?: AnimationTimingFunctionProperty,
    appearance?: AppearanceProperty,
    azimuth?: AzimuthProperty,
    "backdrop-filter"?: BackdropFilterProperty,
    "backface-visibility"?: BackfaceVisibilityProperty,
    background?: BackgroundProperty<TLength>,
    "background-attachment"?: BackgroundAttachmentProperty,
    "background-blend-mode"?: BackgroundBlendModeProperty,
    "background-clip"?: BackgroundClipProperty,
    "background-color"?: BackgroundColorProperty,
    "background-image"?: BackgroundImageProperty,
    "background-origin"?: BackgroundOriginProperty,
    "background-position"?: BackgroundPositionProperty<TLength>,
    "background-position-x"?: BackgroundPositionXProperty<TLength>,
    "background-position-y"?: BackgroundPositionYProperty<TLength>,
    "background-repeat"?: BackgroundRepeatProperty,
    "background-size"?: BackgroundSizeProperty<TLength>,
    "block-size"?: AllString,
    border?: BorderProperty<TLength>,
    "border-block-end"?: AllString,
    "border-block-end-color"?: AllString,
    "border-block-end-style"?: AllString,
    "border-block-end-width"?: AllString,
    "border-block-start"?: AllString,
    "border-block-start-color"?: AllString,
    "border-block-start-style"?: AllString,
    "border-block-start-width"?: AllString,
    "border-bottom"?: BorderBottomProperty<TLength>,
    "border-bottom-color"?: BorderBottomColorProperty,
    "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>,
    "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>,
    "border-bottom-style"?: BorderBottomStyleProperty,
    "border-bottom-width"?: BorderBottomWidthProperty<TLength>,
    "border-collapse"?: BorderCollapseProperty,
    "border-color"?: BorderColorProperty,
    "border-image"?: AllString,
    "border-image-outset"?: BorderImageOutsetProperty<TLength>,
    "border-image-repeat"?: BorderImageRepeatProperty,
    "border-image-slice"?: BorderImageSliceProperty,
    "border-image-source"?: BorderImageSourceProperty,
    "border-image-width"?: BorderImageWidthProperty<TLength>,
    "border-inline-end"?: AllString,
    "border-inline-end-color"?: AllString,
    "border-inline-end-style"?: AllString,
    "border-inline-end-width"?: AllString,
    "border-inline-start"?: AllString,
    "border-inline-start-color"?: AllString,
    "border-inline-start-style"?: AllString,
    "border-inline-start-width"?: AllString,
    "border-left"?: BorderLeftProperty<TLength>,
    "border-left-color"?: BorderLeftColorProperty,
    "border-left-style"?: BorderLeftStyleProperty,
    "border-left-width"?: BorderLeftWidthProperty<TLength>,
    "border-radius"?: BorderRadiusProperty<TLength>,
    "border-right"?: BorderRightProperty<TLength>,
    "border-right-color"?: BorderRightColorProperty,
    "border-right-style"?: BorderRightStyleProperty,
    "border-right-width"?: BorderRightWidthProperty<TLength>,
    "border-spacing"?: BorderSpacingProperty<TLength>,
    "border-style"?: BorderStyleProperty,
    "border-top"?: BorderTopProperty<TLength>,
    "border-top-color"?: BorderTopColorProperty,
    "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>,
    "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>,
    "border-top-style"?: BorderTopStyleProperty,
    "border-top-width"?: BorderTopWidthProperty<TLength>,
    "border-width"?: BorderWidthProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    "box-align"?: BoxAlignProperty,
    "box-decoration-break"?: BoxDecorationBreakProperty,
    "box-direction"?: BoxDirectionProperty,
    "box-flex"?: AllNumber,
    "box-flex-group"?: AllNumber,
    "box-lines"?: BoxLinesProperty,
    "box-ordinal-group"?: AllNumber,
    "box-orient"?: BoxOrientProperty,
    "box-pack"?: BoxPackProperty,
    "box-shadow"?: BoxShadowProperty<TLength>,
    "box-sizing"?: BoxSizingProperty,
    "break-after"?: BreakAfterProperty,
    "break-before"?: BreakBeforeProperty,
    "break-inside"?: BreakInsideProperty,
    "caption-side"?: CaptionSideProperty,
    "caret-color"?: CaretColorProperty,
    clear?: ClearProperty,
    clip?: ClipProperty,
    "clip-path"?: ClipPathProperty,
    color?: ColorProperty,
    "column-count"?: ColumnCountProperty,
    "column-fill"?: ColumnFillProperty,
    "column-gap"?: ColumnGapProperty<TLength>,
    "column-rule"?: AllString,
    "column-rule-color"?: ColumnRuleColorProperty,
    "column-rule-style"?: AllString,
    "column-rule-width"?: AllString,
    "column-span"?: ColumnSpanProperty,
    "column-width"?: ColumnWidthProperty<TLength>,
    columns?: AllString,
    contain?: ContainProperty,
    content?: ContentProperty,
    "counter-increment"?: CounterIncrementProperty,
    "counter-reset"?: CounterResetProperty,
    cursor?: CursorProperty,
    direction?: DirectionProperty,
    display?: DisplayProperty,
    "display-inside"?: DisplayInsideProperty,
    "display-list"?: DisplayListProperty,
    "display-outside"?: DisplayOutsideProperty,
    "empty-cells"?: EmptyCellsProperty,
    filter?: FilterProperty,
    flex?: FlexProperty,
    "flex-basis"?: FlexBasisProperty,
    "flex-direction"?: FlexDirectionProperty,
    "flex-flow"?: AllString,
    "flex-grow"?: AllNumber,
    "flex-shrink"?: AllNumber,
    "flex-wrap"?: FlexWrapProperty,
    float?: FloatProperty,
    font?: FontProperty,
    "font-family"?: FontFamilyProperty,
    "font-feature-settings"?: FontFeatureSettingsProperty,
    "font-kerning"?: FontKerningProperty,
    "font-language-override"?: FontLanguageOverrideProperty,
    "font-variation-settings"?: FontVariationSettingsProperty,
    "font-size"?: FontSizeProperty<TLength>,
    "font-size-adjust"?: FontSizeAdjustProperty,
    "font-stretch"?: FontStretchProperty,
    "font-style"?: FontStyleProperty,
    "font-synthesis"?: FontSynthesisProperty,
    "font-variant"?: FontVariantProperty,
    "font-variant-alternates"?: FontVariantAlternatesProperty,
    "font-variant-caps"?: FontVariantCapsProperty,
    "font-variant-east-asian"?: FontVariantEastAsianProperty,
    "font-variant-ligatures"?: FontVariantLigaturesProperty,
    "font-variant-numeric"?: FontVariantNumericProperty,
    "font-variant-position"?: FontVariantPositionProperty,
    "font-weight"?: FontWeightProperty,
    grid?: GridProperty,
    "grid-area"?: AllString,
    "grid-auto-columns"?: GridAutoColumnsProperty<TLength>,
    "grid-auto-flow"?: GridAutoFlowProperty,
    "grid-auto-rows"?: GridAutoRowsProperty<TLength>,
    "grid-column"?: GridColumnProperty,
    "grid-column-end"?: GridColumnEndProperty,
    "grid-column-gap"?: GridColumnGapProperty<TLength>,
    "grid-column-start"?: GridColumnStartProperty,
    "grid-gap"?: AllString,
    "grid-row"?: GridRowProperty,
    "grid-row-end"?: GridRowEndProperty,
    "grid-row-gap"?: GridRowGapProperty<TLength>,
    "grid-row-start"?: GridRowStartProperty,
    "grid-template"?: GridTemplateProperty<TLength>,
    "grid-template-areas"?: GridTemplateAreasProperty,
    "grid-template-columns"?: GridTemplateColumnsProperty<TLength>,
    "grid-template-rows"?: GridTemplateRowsProperty<TLength>,
    "hanging-punctuation"?: HangingPunctuationProperty,
    height?: HeightProperty<TLength>,
    hyphens?: HyphensProperty,
    "image-orientation"?: ImageOrientationProperty,
    "image-rendering"?: ImageRenderingProperty,
    "image-resolution"?: ImageResolutionProperty,
    "ime-mode"?: ImeModeProperty,
    "initial-letter"?: InitialLetterProperty,
    "initial-letter-align"?: InitialLetterAlignProperty,
    "inline-size"?: AllString,
    isolation?: IsolationProperty,
    "justify-content"?: JustifyContentProperty,
    left?: LeftProperty<TLength>,
    "letter-spacing"?: LetterSpacingProperty<TLength>,
    "line-break"?: LineBreakProperty,
    "line-height"?: LineHeightProperty<TLength>,
    "line-height-step"?: LineHeightStepProperty<TLength>,
    "list-style"?: AllString,
    "list-style-image"?: ListStyleImageProperty,
    "list-style-position"?: ListStylePositionProperty,
    "list-style-type"?: ListStyleTypeProperty,
    margin?: MarginProperty<TLength>,
    "margin-block-end"?: AllString,
    "margin-block-start"?: AllString,
    "margin-bottom"?: MarginBottomProperty<TLength>,
    "margin-inline-end"?: AllString,
    "margin-inline-start"?: AllString,
    "margin-left"?: MarginLeftProperty<TLength>,
    "margin-right"?: MarginRightProperty<TLength>,
    "margin-top"?: MarginTopProperty<TLength>,
    mask?: MaskProperty<TLength>,
    "mask-border"?: AllString,
    "mask-border-mode"?: MaskBorderModeProperty,
    "mask-border-outset"?: MaskBorderOutsetProperty<TLength>,
    "mask-border-repeat"?: MaskBorderRepeatProperty,
    "mask-border-slice"?: MaskBorderSliceProperty,
    "mask-border-source"?: MaskBorderSourceProperty,
    "mask-border-width"?: MaskBorderWidthProperty<TLength>,
    "mask-clip"?: MaskClipProperty,
    "mask-composite"?: MaskCompositeProperty,
    "mask-image"?: MaskImageProperty,
    "mask-mode"?: MaskModeProperty,
    "mask-origin"?: MaskOriginProperty,
    "mask-position"?: MaskPositionProperty<TLength>,
    "mask-repeat"?: MaskRepeatProperty,
    "mask-size"?: MaskSizeProperty<TLength>,
    "mask-type"?: MaskTypeProperty,
    "max-block-size"?: AllString,
    "max-height"?: MaxHeightProperty<TLength>,
    "max-inline-size"?: AllString,
    "max-width"?: MaxWidthProperty<TLength>,
    "min-block-size"?: AllString,
    "min-height"?: MinHeightProperty<TLength>,
    "min-inline-size"?: AllString,
    "min-width"?: MinWidthProperty<TLength>,
    "mix-blend-mode"?: MixBlendModeProperty,
    "object-fit"?: ObjectFitProperty,
    "object-position"?: ObjectPositionProperty<TLength>,
    offset?: AllString,
    "offset-anchor"?: OffsetAnchorProperty<TLength>,
    "offset-block-end"?: AllString,
    "offset-block-start"?: AllString,
    "offset-inline-end"?: AllString,
    "offset-inline-start"?: AllString,
    "offset-distance"?: OffsetDistanceProperty<TLength>,
    "offset-path"?: OffsetPathProperty,
    "offset-position"?: OffsetPositionProperty<TLength>,
    "offset-rotate"?: OffsetRotateProperty,
    opacity?: AllNumber,
    order?: AllNumber,
    orphans?: AllNumber,
    outline?: AllString,
    "outline-color"?: OutlineColorProperty,
    "outline-offset"?: OutlineOffsetProperty<TLength>,
    "outline-style"?: OutlineStyleProperty,
    "outline-width"?: OutlineWidthProperty<TLength>,
    overflow?: OverflowProperty,
    "overflow-clip-box"?: OverflowClipBoxProperty,
    "overflow-wrap"?: OverflowWrapProperty,
    "overflow-x"?: OverflowXProperty,
    "overflow-y"?: OverflowYProperty,
    padding?: PaddingProperty<TLength>,
    "padding-block-end"?: AllString,
    "padding-block-start"?: AllString,
    "padding-bottom"?: PaddingBottomProperty<TLength>,
    "padding-inline-end"?: AllString,
    "padding-inline-start"?: AllString,
    "padding-left"?: PaddingLeftProperty<TLength>,
    "padding-right"?: PaddingRightProperty<TLength>,
    "padding-top"?: PaddingTopProperty<TLength>,
    "page-break-after"?: PageBreakAfterProperty,
    "page-break-before"?: PageBreakBeforeProperty,
    "page-break-inside"?: PageBreakInsideProperty,
    perspective?: PerspectiveProperty<TLength>,
    "perspective-origin"?: PerspectiveOriginProperty<TLength>,
    "pointer-events"?: PointerEventsProperty,
    position?: PositionProperty,
    quotes?: QuotesProperty,
    resize?: ResizeProperty,
    right?: RightProperty<TLength>,
    "ruby-align"?: RubyAlignProperty,
    "ruby-merge"?: RubyMergeProperty,
    "ruby-position"?: RubyPositionProperty,
    "scroll-behavior"?: ScrollBehaviorProperty,
    "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength>,
    "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength>,
    "scroll-snap-points-x"?: ScrollSnapPointsXProperty,
    "scroll-snap-points-y"?: ScrollSnapPointsYProperty,
    "scroll-snap-type"?: ScrollSnapTypeProperty,
    "scroll-snap-type-x"?: ScrollSnapTypeXProperty,
    "scroll-snap-type-y"?: ScrollSnapTypeYProperty,
    "shape-image-threshold"?: AllNumber,
    "shape-margin"?: ShapeMarginProperty<TLength>,
    "shape-outside"?: ShapeOutsideProperty,
    "tab-size"?: TabSizeProperty<TLength>,
    "table-layout"?: TableLayoutProperty,
    "text-align"?: TextAlignProperty,
    "text-align-last"?: TextAlignLastProperty,
    "text-combine-upright"?: TextCombineUprightProperty,
    "text-decoration"?: AllString,
    "text-decoration-color"?: TextDecorationColorProperty,
    "text-decoration-line"?: TextDecorationLineProperty,
    "text-decoration-skip"?: TextDecorationSkipProperty,
    "text-decoration-skip-ink"?: TextDecorationSkipInkProperty,
    "text-decoration-style"?: TextDecorationStyleProperty,
    "text-emphasis"?: AllString,
    "text-emphasis-color"?: TextEmphasisColorProperty,
    "text-emphasis-position"?: AllString,
    "text-emphasis-style"?: TextEmphasisStyleProperty,
    "text-indent"?: TextIndentProperty<TLength>,
    "text-justify"?: TextJustifyProperty,
    "text-orientation"?: TextOrientationProperty,
    "text-overflow"?: TextOverflowProperty,
    "text-rendering"?: TextRenderingProperty,
    "text-shadow"?: TextShadowProperty<TLength>,
    "text-size-adjust"?: TextSizeAdjustProperty,
    "text-transform"?: TextTransformProperty,
    "text-underline-position"?: TextUnderlinePositionProperty,
    top?: TopProperty<TLength>,
    "touch-action"?: TouchActionProperty,
    transform?: TransformProperty,
    "transform-box"?: TransformBoxProperty,
    "transform-origin"?: TransformOriginProperty<TLength>,
    "transform-style"?: TransformStyleProperty,
    transition?: TransitionProperty,
    "transition-delay"?: AllString,
    "transition-duration"?: AllString,
    "transition-property"?: TransitionPropertyProperty,
    "transition-timing-function"?: TransitionTimingFunctionProperty,
    "unicode-bidi"?: UnicodeBidiProperty,
    "user-select"?: UserSelectProperty,
    "vertical-align"?: VerticalAlignProperty<TLength>,
    visibility?: VisibilityProperty,
    "white-space"?: WhiteSpaceProperty,
    widows?: AllNumber,
    width?: WidthProperty<TLength>,
    "will-change"?: WillChangeProperty,
    "word-break"?: WordBreakProperty,
    "word-spacing"?: WordSpacingProperty<TLength>,
    "word-wrap"?: WordWrapProperty,
    "writing-mode"?: WritingModeProperty,
    "z-index"?: ZIndexProperty,
  };

  declare export type StandardPropertiesFallback<TLength = string | number> = {
    alignContent?: AlignContentProperty | AlignContentProperty[],
    alignItems?: AlignItemsProperty | AlignItemsProperty[],
    alignSelf?: AlignSelfProperty | AlignSelfProperty[],
    animation?: AnimationProperty | AnimationProperty[],
    animationDelay?: AllString | AllString[],
    animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
    animationDuration?: AllString | AllString[],
    animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
    animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
    animationName?: AnimationNameProperty | AnimationNameProperty[],
    animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
    animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
    appearance?: AppearanceProperty | AppearanceProperty[],
    azimuth?: AzimuthProperty | AzimuthProperty[],
    backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[],
    backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
    background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
    backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[],
    backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[],
    backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[],
    backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[],
    backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[],
    backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[],
    backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[],
    backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[],
    backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[],
    backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[],
    backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
    blockSize?: AllString | AllString[],
    border?: BorderProperty<TLength> | BorderProperty<TLength>[],
    borderBlockEnd?: AllString | AllString[],
    borderBlockEndColor?: AllString | AllString[],
    borderBlockEndStyle?: AllString | AllString[],
    borderBlockEndWidth?: AllString | AllString[],
    borderBlockStart?: AllString | AllString[],
    borderBlockStartColor?: AllString | AllString[],
    borderBlockStartStyle?: AllString | AllString[],
    borderBlockStartWidth?: AllString | AllString[],
    borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
    borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[],
    borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
    borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
    borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
    borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
    borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[],
    borderColor?: BorderColorProperty | BorderColorProperty[],
    borderImage?: AllString | AllString[],
    borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
    borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
    borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[],
    borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[],
    borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
    borderInlineEnd?: AllString | AllString[],
    borderInlineEndColor?: AllString | AllString[],
    borderInlineEndStyle?: AllString | AllString[],
    borderInlineEndWidth?: AllString | AllString[],
    borderInlineStart?: AllString | AllString[],
    borderInlineStartColor?: AllString | AllString[],
    borderInlineStartStyle?: AllString | AllString[],
    borderInlineStartWidth?: AllString | AllString[],
    borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
    borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[],
    borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
    borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
    borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
    borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
    borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[],
    borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[],
    borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
    borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
    borderStyle?: BorderStyleProperty | BorderStyleProperty[],
    borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
    borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[],
    borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
    borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
    borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[],
    borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
    borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
    bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
    boxAlign?: BoxAlignProperty | BoxAlignProperty[],
    boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
    boxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
    boxFlex?: AllNumber | AllNumber[],
    boxFlexGroup?: AllNumber | AllNumber[],
    boxLines?: BoxLinesProperty | BoxLinesProperty[],
    boxOrdinalGroup?: AllNumber | AllNumber[],
    boxOrient?: BoxOrientProperty | BoxOrientProperty[],
    boxPack?: BoxPackProperty | BoxPackProperty[],
    boxShadow?: BoxShadowProperty<TLength> | BoxShadowProperty<TLength>[],
    boxSizing?: BoxSizingProperty | BoxSizingProperty[],
    breakAfter?: BreakAfterProperty | BreakAfterProperty[],
    breakBefore?: BreakBeforeProperty | BreakBeforeProperty[],
    breakInside?: BreakInsideProperty | BreakInsideProperty[],
    captionSide?: CaptionSideProperty | CaptionSideProperty[],
    caretColor?: CaretColorProperty | CaretColorProperty[],
    clear?: ClearProperty | ClearProperty[],
    clip?: ClipProperty | ClipProperty[],
    clipPath?: ClipPathProperty | ClipPathProperty[],
    color?: ColorProperty | ColorProperty[],
    columnCount?: ColumnCountProperty | ColumnCountProperty[],
    columnFill?: ColumnFillProperty | ColumnFillProperty[],
    columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
    columnRule?: AllString | AllString[],
    columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
    columnRuleStyle?: AllString | AllString[],
    columnRuleWidth?: AllString | AllString[],
    columnSpan?: ColumnSpanProperty | ColumnSpanProperty[],
    columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
    columns?: AllString | AllString[],
    contain?: ContainProperty | ContainProperty[],
    content?: ContentProperty | ContentProperty[],
    counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[],
    counterReset?: CounterResetProperty | CounterResetProperty[],
    cursor?: CursorProperty | CursorProperty[],
    direction?: DirectionProperty | DirectionProperty[],
    display?: DisplayProperty | DisplayProperty[],
    displayInside?: DisplayInsideProperty | DisplayInsideProperty[],
    displayList?: DisplayListProperty | DisplayListProperty[],
    displayOutside?: DisplayOutsideProperty | DisplayOutsideProperty[],
    emptyCells?: EmptyCellsProperty | EmptyCellsProperty[],
    filter?: FilterProperty | FilterProperty[],
    flex?: FlexProperty | FlexProperty[],
    flexBasis?: FlexBasisProperty | FlexBasisProperty[],
    flexDirection?: FlexDirectionProperty | FlexDirectionProperty[],
    flexFlow?: AllString | AllString[],
    flexGrow?: AllNumber | AllNumber[],
    flexShrink?: AllNumber | AllNumber[],
    flexWrap?: FlexWrapProperty | FlexWrapProperty[],
    float?: FloatProperty | FloatProperty[],
    font?: FontProperty | FontProperty[],
    fontFamily?: FontFamilyProperty | FontFamilyProperty[],
    fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
    fontKerning?: FontKerningProperty | FontKerningProperty[],
    fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
    fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[],
    fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
    fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
    fontStretch?: FontStretchProperty | FontStretchProperty[],
    fontStyle?: FontStyleProperty | FontStyleProperty[],
    fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[],
    fontVariant?: FontVariantProperty | FontVariantProperty[],
    fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[],
    fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[],
    fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[],
    fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
    fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[],
    fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[],
    fontWeight?: FontWeightProperty | FontWeightProperty[],
    grid?: GridProperty | GridProperty[],
    gridArea?: AllString | AllString[],
    gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
    gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[],
    gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
    gridColumn?: GridColumnProperty | GridColumnProperty[],
    gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[],
    gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
    gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[],
    gridGap?: AllString | AllString[],
    gridRow?: GridRowProperty | GridRowProperty[],
    gridRowEnd?: GridRowEndProperty | GridRowEndProperty[],
    gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
    gridRowStart?: GridRowStartProperty | GridRowStartProperty[],
    gridTemplate?: GridTemplateProperty<TLength> | GridTemplateProperty<TLength>[],
    gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[],
    gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[],
    gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[],
    hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[],
    height?: HeightProperty<TLength> | HeightProperty<TLength>[],
    hyphens?: HyphensProperty | HyphensProperty[],
    imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[],
    imageRendering?: ImageRenderingProperty | ImageRenderingProperty[],
    imageResolution?: ImageResolutionProperty | ImageResolutionProperty[],
    imeMode?: ImeModeProperty | ImeModeProperty[],
    initialLetter?: InitialLetterProperty | InitialLetterProperty[],
    initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[],
    inlineSize?: AllString | AllString[],
    isolation?: IsolationProperty | IsolationProperty[],
    justifyContent?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
    lineBreak?: LineBreakProperty | LineBreakProperty[],
    lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
    lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
    listStyle?: AllString | AllString[],
    listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[],
    listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[],
    listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[],
    margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
    marginBlockEnd?: AllString | AllString[],
    marginBlockStart?: AllString | AllString[],
    marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
    marginInlineEnd?: AllString | AllString[],
    marginInlineStart?: AllString | AllString[],
    marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
    marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
    marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
    mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
    maskBorder?: AllString | AllString[],
    maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[],
    maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[],
    maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[],
    maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[],
    maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[],
    maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[],
    maskClip?: MaskClipProperty | MaskClipProperty[],
    maskComposite?: MaskCompositeProperty | MaskCompositeProperty[],
    maskImage?: MaskImageProperty | MaskImageProperty[],
    maskMode?: MaskModeProperty | MaskModeProperty[],
    maskOrigin?: MaskOriginProperty | MaskOriginProperty[],
    maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[],
    maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[],
    maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[],
    maskType?: MaskTypeProperty | MaskTypeProperty[],
    maxBlockSize?: AllString | AllString[],
    maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
    maxInlineSize?: AllString | AllString[],
    maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
    minBlockSize?: AllString | AllString[],
    minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
    minInlineSize?: AllString | AllString[],
    minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
    mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[],
    objectFit?: ObjectFitProperty | ObjectFitProperty[],
    objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
    offset?: AllString | AllString[],
    offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
    offsetBlockEnd?: AllString | AllString[],
    offsetBlockStart?: AllString | AllString[],
    offsetInlineEnd?: AllString | AllString[],
    offsetInlineStart?: AllString | AllString[],
    offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
    offsetPath?: OffsetPathProperty | OffsetPathProperty[],
    offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
    offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[],
    opacity?: AllNumber | AllNumber[],
    order?: AllNumber | AllNumber[],
    orphans?: AllNumber | AllNumber[],
    outline?: AllString | AllString[],
    outlineColor?: OutlineColorProperty | OutlineColorProperty[],
    outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
    outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[],
    outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
    overflow?: OverflowProperty | OverflowProperty[],
    overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
    overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[],
    overflowX?: OverflowXProperty | OverflowXProperty[],
    overflowY?: OverflowYProperty | OverflowYProperty[],
    padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
    paddingBlockEnd?: AllString | AllString[],
    paddingBlockStart?: AllString | AllString[],
    paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
    paddingInlineEnd?: AllString | AllString[],
    paddingInlineStart?: AllString | AllString[],
    paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[],
    paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[],
    paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[],
    pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[],
    pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[],
    pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[],
    perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
    perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
    pointerEvents?: PointerEventsProperty | PointerEventsProperty[],
    position?: PositionProperty | PositionProperty[],
    quotes?: QuotesProperty | QuotesProperty[],
    resize?: ResizeProperty | ResizeProperty[],
    right?: RightProperty<TLength> | RightProperty<TLength>[],
    rubyAlign?: RubyAlignProperty | RubyAlignProperty[],
    rubyMerge?: RubyMergeProperty | RubyMergeProperty[],
    rubyPosition?: RubyPositionProperty | RubyPositionProperty[],
    scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[],
    scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[],
    scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[],
    scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
    scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
    scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
    scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[],
    scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[],
    shapeImageThreshold?: AllNumber | AllNumber[],
    shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
    shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[],
    tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
    tableLayout?: TableLayoutProperty | TableLayoutProperty[],
    textAlign?: TextAlignProperty | TextAlignProperty[],
    textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[],
    textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[],
    textDecoration?: AllString | AllString[],
    textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[],
    textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[],
    textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
    textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
    textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
    textEmphasis?: AllString | AllString[],
    textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
    textEmphasisPosition?: AllString | AllString[],
    textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
    textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[],
    textJustify?: TextJustifyProperty | TextJustifyProperty[],
    textOrientation?: TextOrientationProperty | TextOrientationProperty[],
    textOverflow?: TextOverflowProperty | TextOverflowProperty[],
    textRendering?: TextRenderingProperty | TextRenderingProperty[],
    textShadow?: TextShadowProperty<TLength> | TextShadowProperty<TLength>[],
    textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
    textTransform?: TextTransformProperty | TextTransformProperty[],
    textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[],
    top?: TopProperty<TLength> | TopProperty<TLength>[],
    touchAction?: TouchActionProperty | TouchActionProperty[],
    transform?: TransformProperty | TransformProperty[],
    transformBox?: TransformBoxProperty | TransformBoxProperty[],
    transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
    transformStyle?: TransformStyleProperty | TransformStyleProperty[],
    transition?: TransitionProperty | TransitionProperty[],
    transitionDelay?: AllString | AllString[],
    transitionDuration?: AllString | AllString[],
    transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
    transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
    unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[],
    userSelect?: UserSelectProperty | UserSelectProperty[],
    verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
    visibility?: VisibilityProperty | VisibilityProperty[],
    whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[],
    widows?: AllNumber | AllNumber[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    willChange?: WillChangeProperty | WillChangeProperty[],
    wordBreak?: WordBreakProperty | WordBreakProperty[],
    wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
    wordWrap?: WordWrapProperty | WordWrapProperty[],
    writingMode?: WritingModeProperty | WritingModeProperty[],
    zIndex?: ZIndexProperty | ZIndexProperty[],
  };

  declare export type StandardPropertiesHyphenFallback<TLength = string | number> = {
    "align-content"?: AlignContentProperty | AlignContentProperty[],
    "align-items"?: AlignItemsProperty | AlignItemsProperty[],
    "align-self"?: AlignSelfProperty | AlignSelfProperty[],
    animation?: AnimationProperty | AnimationProperty[],
    "animation-delay"?: AllString | AllString[],
    "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
    "animation-duration"?: AllString | AllString[],
    "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
    "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
    "animation-name"?: AnimationNameProperty | AnimationNameProperty[],
    "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
    "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
    appearance?: AppearanceProperty | AppearanceProperty[],
    azimuth?: AzimuthProperty | AzimuthProperty[],
    "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[],
    "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
    background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
    "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[],
    "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[],
    "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[],
    "background-color"?: BackgroundColorProperty | BackgroundColorProperty[],
    "background-image"?: BackgroundImageProperty | BackgroundImageProperty[],
    "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[],
    "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[],
    "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[],
    "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[],
    "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[],
    "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[],
    "block-size"?: AllString | AllString[],
    border?: BorderProperty<TLength> | BorderProperty<TLength>[],
    "border-block-end"?: AllString | AllString[],
    "border-block-end-color"?: AllString | AllString[],
    "border-block-end-style"?: AllString | AllString[],
    "border-block-end-width"?: AllString | AllString[],
    "border-block-start"?: AllString | AllString[],
    "border-block-start-color"?: AllString | AllString[],
    "border-block-start-style"?: AllString | AllString[],
    "border-block-start-width"?: AllString | AllString[],
    "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
    "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[],
    "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
    "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
    "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
    "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
    "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[],
    "border-color"?: BorderColorProperty | BorderColorProperty[],
    "border-image"?: AllString | AllString[],
    "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
    "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
    "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[],
    "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[],
    "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
    "border-inline-end"?: AllString | AllString[],
    "border-inline-end-color"?: AllString | AllString[],
    "border-inline-end-style"?: AllString | AllString[],
    "border-inline-end-width"?: AllString | AllString[],
    "border-inline-start"?: AllString | AllString[],
    "border-inline-start-color"?: AllString | AllString[],
    "border-inline-start-style"?: AllString | AllString[],
    "border-inline-start-width"?: AllString | AllString[],
    "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
    "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[],
    "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
    "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
    "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
    "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
    "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[],
    "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[],
    "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
    "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
    "border-style"?: BorderStyleProperty | BorderStyleProperty[],
    "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
    "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[],
    "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
    "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
    "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[],
    "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
    "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
    bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
    "box-align"?: BoxAlignProperty | BoxAlignProperty[],
    "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
    "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
    "box-flex"?: AllNumber | AllNumber[],
    "box-flex-group"?: AllNumber | AllNumber[],
    "box-lines"?: BoxLinesProperty | BoxLinesProperty[],
    "box-ordinal-group"?: AllNumber | AllNumber[],
    "box-orient"?: BoxOrientProperty | BoxOrientProperty[],
    "box-pack"?: BoxPackProperty | BoxPackProperty[],
    "box-shadow"?: BoxShadowProperty<TLength> | BoxShadowProperty<TLength>[],
    "box-sizing"?: BoxSizingProperty | BoxSizingProperty[],
    "break-after"?: BreakAfterProperty | BreakAfterProperty[],
    "break-before"?: BreakBeforeProperty | BreakBeforeProperty[],
    "break-inside"?: BreakInsideProperty | BreakInsideProperty[],
    "caption-side"?: CaptionSideProperty | CaptionSideProperty[],
    "caret-color"?: CaretColorProperty | CaretColorProperty[],
    clear?: ClearProperty | ClearProperty[],
    clip?: ClipProperty | ClipProperty[],
    "clip-path"?: ClipPathProperty | ClipPathProperty[],
    color?: ColorProperty | ColorProperty[],
    "column-count"?: ColumnCountProperty | ColumnCountProperty[],
    "column-fill"?: ColumnFillProperty | ColumnFillProperty[],
    "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[],
    "column-rule"?: AllString | AllString[],
    "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
    "column-rule-style"?: AllString | AllString[],
    "column-rule-width"?: AllString | AllString[],
    "column-span"?: ColumnSpanProperty | ColumnSpanProperty[],
    "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
    columns?: AllString | AllString[],
    contain?: ContainProperty | ContainProperty[],
    content?: ContentProperty | ContentProperty[],
    "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[],
    "counter-reset"?: CounterResetProperty | CounterResetProperty[],
    cursor?: CursorProperty | CursorProperty[],
    direction?: DirectionProperty | DirectionProperty[],
    display?: DisplayProperty | DisplayProperty[],
    "display-inside"?: DisplayInsideProperty | DisplayInsideProperty[],
    "display-list"?: DisplayListProperty | DisplayListProperty[],
    "display-outside"?: DisplayOutsideProperty | DisplayOutsideProperty[],
    "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[],
    filter?: FilterProperty | FilterProperty[],
    flex?: FlexProperty | FlexProperty[],
    "flex-basis"?: FlexBasisProperty | FlexBasisProperty[],
    "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[],
    "flex-flow"?: AllString | AllString[],
    "flex-grow"?: AllNumber | AllNumber[],
    "flex-shrink"?: AllNumber | AllNumber[],
    "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[],
    float?: FloatProperty | FloatProperty[],
    font?: FontProperty | FontProperty[],
    "font-family"?: FontFamilyProperty | FontFamilyProperty[],
    "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[],
    "font-kerning"?: FontKerningProperty | FontKerningProperty[],
    "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[],
    "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[],
    "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[],
    "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[],
    "font-stretch"?: FontStretchProperty | FontStretchProperty[],
    "font-style"?: FontStyleProperty | FontStyleProperty[],
    "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[],
    "font-variant"?: FontVariantProperty | FontVariantProperty[],
    "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[],
    "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[],
    "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[],
    "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[],
    "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[],
    "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[],
    "font-weight"?: FontWeightProperty | FontWeightProperty[],
    grid?: GridProperty | GridProperty[],
    "grid-area"?: AllString | AllString[],
    "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
    "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[],
    "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
    "grid-column"?: GridColumnProperty | GridColumnProperty[],
    "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[],
    "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
    "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[],
    "grid-gap"?: AllString | AllString[],
    "grid-row"?: GridRowProperty | GridRowProperty[],
    "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[],
    "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
    "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[],
    "grid-template"?: GridTemplateProperty<TLength> | GridTemplateProperty<TLength>[],
    "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[],
    "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[],
    "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[],
    "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[],
    height?: HeightProperty<TLength> | HeightProperty<TLength>[],
    hyphens?: HyphensProperty | HyphensProperty[],
    "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[],
    "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[],
    "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[],
    "ime-mode"?: ImeModeProperty | ImeModeProperty[],
    "initial-letter"?: InitialLetterProperty | InitialLetterProperty[],
    "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[],
    "inline-size"?: AllString | AllString[],
    isolation?: IsolationProperty | IsolationProperty[],
    "justify-content"?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
    "line-break"?: LineBreakProperty | LineBreakProperty[],
    "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
    "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
    "list-style"?: AllString | AllString[],
    "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[],
    "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[],
    "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[],
    margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
    "margin-block-end"?: AllString | AllString[],
    "margin-block-start"?: AllString | AllString[],
    "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
    "margin-inline-end"?: AllString | AllString[],
    "margin-inline-start"?: AllString | AllString[],
    "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
    "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
    "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
    mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
    "mask-border"?: AllString | AllString[],
    "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[],
    "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[],
    "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[],
    "mask-border-slice"?: MaskBorderSliceProperty | MaskBorderSliceProperty[],
    "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[],
    "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[],
    "mask-clip"?: MaskClipProperty | MaskClipProperty[],
    "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[],
    "mask-image"?: MaskImageProperty | MaskImageProperty[],
    "mask-mode"?: MaskModeProperty | MaskModeProperty[],
    "mask-origin"?: MaskOriginProperty | MaskOriginProperty[],
    "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[],
    "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[],
    "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[],
    "mask-type"?: MaskTypeProperty | MaskTypeProperty[],
    "max-block-size"?: AllString | AllString[],
    "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
    "max-inline-size"?: AllString | AllString[],
    "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
    "min-block-size"?: AllString | AllString[],
    "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
    "min-inline-size"?: AllString | AllString[],
    "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
    "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[],
    "object-fit"?: ObjectFitProperty | ObjectFitProperty[],
    "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
    offset?: AllString | AllString[],
    "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
    "offset-block-end"?: AllString | AllString[],
    "offset-block-start"?: AllString | AllString[],
    "offset-inline-end"?: AllString | AllString[],
    "offset-inline-start"?: AllString | AllString[],
    "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
    "offset-path"?: OffsetPathProperty | OffsetPathProperty[],
    "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
    "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[],
    opacity?: AllNumber | AllNumber[],
    order?: AllNumber | AllNumber[],
    orphans?: AllNumber | AllNumber[],
    outline?: AllString | AllString[],
    "outline-color"?: OutlineColorProperty | OutlineColorProperty[],
    "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
    "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[],
    "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
    overflow?: OverflowProperty | OverflowProperty[],
    "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
    "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[],
    "overflow-x"?: OverflowXProperty | OverflowXProperty[],
    "overflow-y"?: OverflowYProperty | OverflowYProperty[],
    padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
    "padding-block-end"?: AllString | AllString[],
    "padding-block-start"?: AllString | AllString[],
    "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
    "padding-inline-end"?: AllString | AllString[],
    "padding-inline-start"?: AllString | AllString[],
    "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[],
    "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[],
    "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[],
    "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[],
    "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[],
    "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[],
    perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[],
    "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[],
    "pointer-events"?: PointerEventsProperty | PointerEventsProperty[],
    position?: PositionProperty | PositionProperty[],
    quotes?: QuotesProperty | QuotesProperty[],
    resize?: ResizeProperty | ResizeProperty[],
    right?: RightProperty<TLength> | RightProperty<TLength>[],
    "ruby-align"?: RubyAlignProperty | RubyAlignProperty[],
    "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[],
    "ruby-position"?: RubyPositionProperty | RubyPositionProperty[],
    "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[],
    "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[],
    "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[],
    "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[],
    "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[],
    "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[],
    "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[],
    "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[],
    "shape-image-threshold"?: AllNumber | AllNumber[],
    "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
    "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[],
    "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
    "table-layout"?: TableLayoutProperty | TableLayoutProperty[],
    "text-align"?: TextAlignProperty | TextAlignProperty[],
    "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[],
    "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[],
    "text-decoration"?: AllString | AllString[],
    "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[],
    "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[],
    "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
    "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
    "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
    "text-emphasis"?: AllString | AllString[],
    "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
    "text-emphasis-position"?: AllString | AllString[],
    "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[],
    "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[],
    "text-justify"?: TextJustifyProperty | TextJustifyProperty[],
    "text-orientation"?: TextOrientationProperty | TextOrientationProperty[],
    "text-overflow"?: TextOverflowProperty | TextOverflowProperty[],
    "text-rendering"?: TextRenderingProperty | TextRenderingProperty[],
    "text-shadow"?: TextShadowProperty<TLength> | TextShadowProperty<TLength>[],
    "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[],
    "text-transform"?: TextTransformProperty | TextTransformProperty[],
    "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[],
    top?: TopProperty<TLength> | TopProperty<TLength>[],
    "touch-action"?: TouchActionProperty | TouchActionProperty[],
    transform?: TransformProperty | TransformProperty[],
    "transform-box"?: TransformBoxProperty | TransformBoxProperty[],
    "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[],
    "transform-style"?: TransformStyleProperty | TransformStyleProperty[],
    transition?: TransitionProperty | TransitionProperty[],
    "transition-delay"?: AllString | AllString[],
    "transition-duration"?: AllString | AllString[],
    "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
    "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
    "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[],
    "user-select"?: UserSelectProperty | UserSelectProperty[],
    "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
    visibility?: VisibilityProperty | VisibilityProperty[],
    "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[],
    widows?: AllNumber | AllNumber[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    "will-change"?: WillChangeProperty | WillChangeProperty[],
    "word-break"?: WordBreakProperty | WordBreakProperty[],
    "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
    "word-wrap"?: WordWrapProperty | WordWrapProperty[],
    "writing-mode"?: WritingModeProperty | WritingModeProperty[],
    "z-index"?: ZIndexProperty | ZIndexProperty[],
  };

  declare export type VendorProperties<TLength = string | number> = {
    msOverflowStyle?: MsOverflowStyleProperty,
    mozAppearance?: MozAppearanceProperty,
    mozBinding?: MozBindingProperty,
    mozBorderBottomColors?: MozBorderBottomColorsProperty,
    mozBorderLeftColors?: MozBorderLeftColorsProperty,
    mozBorderRightColors?: MozBorderRightColorsProperty,
    mozBorderTopColors?: MozBorderTopColorsProperty,
    mozContextProperties?: MozContextPropertiesProperty,
    mozFloatEdge?: MozFloatEdgeProperty,
    mozForceBrokenImageIcon?: AllNumber,
    mozImageRegion?: MozImageRegionProperty,
    mozOrient?: MozOrientProperty,
    mozOutlineRadius?: AllString,
    mozOutlineRadiusBottomleft?: AllString,
    mozOutlineRadiusBottomright?: AllString,
    mozOutlineRadiusTopleft?: AllString,
    mozOutlineRadiusTopright?: AllString,
    mozStackSizing?: MozStackSizingProperty,
    mozTextBlink?: MozTextBlinkProperty,
    mozUserFocus?: MozUserFocusProperty,
    mozUserInput?: MozUserInputProperty,
    mozUserModify?: MozUserModifyProperty,
    mozWindowDragging?: MozWindowDraggingProperty,
    mozWindowShadow?: MozWindowShadowProperty,
    webkitBorderBefore?: AllString,
    webkitBorderBeforeColor?: AllString,
    webkitBorderBeforeStyle?: AllString,
    webkitBorderBeforeWidth?: AllString,
    webkitBoxReflect?: WebkitBoxReflectProperty<TLength>,
    webkitMask?: AllString,
    webkitMaskAttachment?: WebkitMaskAttachmentProperty,
    webkitMaskClip?: WebkitMaskClipProperty,
    webkitMaskComposite?: WebkitMaskCompositeProperty,
    webkitMaskImage?: AllString,
    webkitMaskOrigin?: WebkitMaskOriginProperty,
    webkitMaskPosition?: WebkitMaskPositionProperty<TLength>,
    webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>,
    webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>,
    webkitMaskRepeat?: WebkitMaskRepeatProperty,
    webkitMaskRepeatX?: WebkitMaskRepeatXProperty,
    webkitMaskRepeatY?: WebkitMaskRepeatYProperty,
    webkitOverflowScrolling?: WebkitOverflowScrollingProperty,
    webkitTapHighlightColor?: WebkitTapHighlightColorProperty,
    webkitTextFillColor?: WebkitTextFillColorProperty,
    webkitTextStroke?: WebkitTextStrokeProperty<TLength>,
    webkitTextStrokeColor?: WebkitTextStrokeColorProperty,
    webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>,
    webkitTouchCallout?: WebkitTouchCalloutProperty,
  };

  declare export type VendorPropertiesHyphen<TLength = string | number> = {
    "-ms-overflow-style"?: MsOverflowStyleProperty,
    "-moz-appearance"?: MozAppearanceProperty,
    "-moz-binding"?: MozBindingProperty,
    "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty,
    "-moz-border-left-colors"?: MozBorderLeftColorsProperty,
    "-moz-border-right-colors"?: MozBorderRightColorsProperty,
    "-moz-border-top-colors"?: MozBorderTopColorsProperty,
    "-moz-context-properties"?: MozContextPropertiesProperty,
    "-moz-float-edge"?: MozFloatEdgeProperty,
    "-moz-force-broken-image-icon"?: AllNumber,
    "-moz-image-region"?: MozImageRegionProperty,
    "-moz-orient"?: MozOrientProperty,
    "-moz-outline-radius"?: AllString,
    "-moz-outline-radius-bottomleft"?: AllString,
    "-moz-outline-radius-bottomright"?: AllString,
    "-moz-outline-radius-topleft"?: AllString,
    "-moz-outline-radius-topright"?: AllString,
    "-moz-stack-sizing"?: MozStackSizingProperty,
    "-moz-text-blink"?: MozTextBlinkProperty,
    "-moz-user-focus"?: MozUserFocusProperty,
    "-moz-user-input"?: MozUserInputProperty,
    "-moz-user-modify"?: MozUserModifyProperty,
    "-moz-window-dragging"?: MozWindowDraggingProperty,
    "-moz-window-shadow"?: MozWindowShadowProperty,
    "-webkit-border-before"?: AllString,
    "-webkit-border-before-color"?: AllString,
    "-webkit-border-before-style"?: AllString,
    "-webkit-border-before-width"?: AllString,
    "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>,
    "-webkit-mask"?: AllString,
    "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty,
    "-webkit-mask-clip"?: WebkitMaskClipProperty,
    "-webkit-mask-composite"?: WebkitMaskCompositeProperty,
    "-webkit-mask-image"?: AllString,
    "-webkit-mask-origin"?: WebkitMaskOriginProperty,
    "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>,
    "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>,
    "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>,
    "-webkit-mask-repeat"?: WebkitMaskRepeatProperty,
    "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty,
    "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty,
    "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty,
    "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty,
    "-webkit-text-fill-color"?: WebkitTextFillColorProperty,
    "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>,
    "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty,
    "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>,
    "-webkit-touch-callout"?: WebkitTouchCalloutProperty,
  };

  declare export type VendorPropertiesFallback<TLength = string | number> = {
    msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
    mozAppearance?: MozAppearanceProperty | MozAppearanceProperty[],
    mozBinding?: MozBindingProperty | MozBindingProperty[],
    mozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
    mozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
    mozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
    mozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
    mozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
    mozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
    mozForceBrokenImageIcon?: AllNumber | AllNumber[],
    mozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[],
    mozOrient?: MozOrientProperty | MozOrientProperty[],
    mozOutlineRadius?: AllString | AllString[],
    mozOutlineRadiusBottomleft?: AllString | AllString[],
    mozOutlineRadiusBottomright?: AllString | AllString[],
    mozOutlineRadiusTopleft?: AllString | AllString[],
    mozOutlineRadiusTopright?: AllString | AllString[],
    mozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[],
    mozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[],
    mozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[],
    mozUserInput?: MozUserInputProperty | MozUserInputProperty[],
    mozUserModify?: MozUserModifyProperty | MozUserModifyProperty[],
    mozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
    mozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[],
    webkitBorderBefore?: AllString | AllString[],
    webkitBorderBeforeColor?: AllString | AllString[],
    webkitBorderBeforeStyle?: AllString | AllString[],
    webkitBorderBeforeWidth?: AllString | AllString[],
    webkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
    webkitMask?: AllString | AllString[],
    webkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
    webkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
    webkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
    webkitMaskImage?: AllString | AllString[],
    webkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[],
    webkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[],
    webkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[],
    webkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[],
    webkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[],
    webkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[],
    webkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[],
    webkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[],
    webkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[],
    webkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[],
    webkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
    webkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
    webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
    webkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  };

  declare export type VendorPropertiesHyphenFallback<TLength = string | number> = {
    "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
    "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[],
    "-moz-binding"?: MozBindingProperty | MozBindingProperty[],
    "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
    "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
    "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
    "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
    "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
    "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
    "-moz-force-broken-image-icon"?: AllNumber | AllNumber[],
    "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[],
    "-moz-orient"?: MozOrientProperty | MozOrientProperty[],
    "-moz-outline-radius"?: AllString | AllString[],
    "-moz-outline-radius-bottomleft"?: AllString | AllString[],
    "-moz-outline-radius-bottomright"?: AllString | AllString[],
    "-moz-outline-radius-topleft"?: AllString | AllString[],
    "-moz-outline-radius-topright"?: AllString | AllString[],
    "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[],
    "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[],
    "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[],
    "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[],
    "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[],
    "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
    "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[],
    "-webkit-border-before"?: AllString | AllString[],
    "-webkit-border-before-color"?: AllString | AllString[],
    "-webkit-border-before-style"?: AllString | AllString[],
    "-webkit-border-before-width"?: AllString | AllString[],
    "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
    "-webkit-mask"?: AllString | AllString[],
    "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
    "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
    "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
    "-webkit-mask-image"?: AllString | AllString[],
    "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[],
    "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[],
    "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[],
    "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[],
    "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[],
    "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[],
    "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[],
    "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[],
    "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[],
    "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[],
    "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
    "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
    "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
    "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  };

  declare export interface Properties<TLength = string | number> extends StandardProperties<TLength>, VendorProperties<TLength> {}

  declare export interface PropertiesHyphen<TLength = string | number> extends StandardPropertiesHyphen<TLength>, VendorPropertiesHyphen<TLength> {}

  declare export interface PropertiesFallback<TLength = string | number> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

  declare export interface PropertiesHyphenFallback<TLength = string | number> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

  declare export type Pseudos =
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
    | "::cue"
    | "::first-letter"
    | "::first-line"
    | "::grammar-error"
    | "::placeholder"
    | "::selection"
    | "::spelling-error"
    | ":active"
    | ":any"
    | ":any-link"
    | ":checked"
    | ":default"
    | ":defined"
    | ":dir"
    | ":disabled"
    | ":empty"
    | ":enabled"
    | ":first"
    | ":first-child"
    | ":first-of-type"
    | ":focus"
    | ":focus-within"
    | ":fullscreen"
    | ":hover"
    | ":in-range"
    | ":indeterminate"
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
    | ":out-of-range"
    | ":placeholder-shown"
    | ":read-only"
    | ":read-write"
    | ":required"
    | ":right"
    | ":root"
    | ":scope"
    | ":target"
    | ":valid"
    | ":visited";

  declare type All = "inherit" | "initial" | "revert" | "unset";

  declare type AllString = All | string;

  declare type AllNumber = All | number;

  declare type AlignContentProperty = All | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | "stretch";

  declare type AlignItemsProperty = All | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

  declare type AlignSelfProperty = All | "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

  declare type AnimationProperty = All | SingleAnimation;

  declare type AnimationDirectionProperty = All | SingleAnimationDirection;

  declare type AnimationFillModeProperty = All | SingleAnimationFillMode;

  declare type AnimationIterationCountProperty = All | SingleAnimationIterationCount;

  declare type AnimationNameProperty = All | "none" | string;

  declare type AnimationPlayStateProperty = All | SingleAnimationPlayState;

  declare type AnimationTimingFunctionProperty = All | SingleTimingFunction;

  declare type AppearanceProperty = All | "auto" | "none";

  declare type AzimuthProperty =
    | All
    | "behind"
    | "center"
    | "center-left"
    | "center-right"
    | "far-left"
    | "far-right"
    | "left"
    | "left-side"
    | "leftwards"
    | "right"
    | "right-side"
    | "rightwards"
    | string;

  declare type BackdropFilterProperty = All | "none" | string;

  declare type BackfaceVisibilityProperty = All | "hidden" | "visible";

  declare type BackgroundProperty<TLength> = All | FinalBgLayer<TLength> | string;

  declare type BackgroundAttachmentProperty = All | Attachment;

  declare type BackgroundBlendModeProperty = All | BlendMode;

  declare type BackgroundClipProperty = All | Box;

  declare type BackgroundColorProperty = All | Color;

  declare type BackgroundImageProperty = All | BgImage;

  declare type BackgroundOriginProperty = All | Box;

  declare type BackgroundPositionProperty<TLength> = All | BgPosition<TLength>;

  declare type BackgroundPositionXProperty<TLength> = All | LengthPercentage<TLength> | "center" | "left" | "right" | "x-end" | "x-start" | string;

  declare type BackgroundPositionYProperty<TLength> = All | LengthPercentage<TLength> | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

  declare type BackgroundRepeatProperty = All | RepeatStyle;

  declare type BackgroundSizeProperty<TLength> = All | BgSize<TLength>;

  declare type BorderProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderBottomProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderBottomColorProperty = All | Color;

  declare type BorderBottomLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

  declare type BorderBottomRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

  declare type BorderBottomStyleProperty = All | BrStyle;

  declare type BorderBottomWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type BorderCollapseProperty = All | "collapse" | "separate";

  declare type BorderColorProperty = All | Color;

  declare type BorderImageOutsetProperty<TLength> = All | TLength | number;

  declare type BorderImageRepeatProperty = All | "repeat" | "round" | "space" | "stretch";

  declare type BorderImageSliceProperty = All | NumberPercentage | "fill" | string;

  declare type BorderImageSourceProperty = All | "none" | string;

  declare type BorderImageWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

  declare type BorderLeftProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderLeftColorProperty = All | Color;

  declare type BorderLeftStyleProperty = All | BrStyle;

  declare type BorderLeftWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type BorderRadiusProperty<TLength> = All | LengthPercentage<TLength> | string;

  declare type BorderRightProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderRightColorProperty = All | Color;

  declare type BorderRightStyleProperty = All | BrStyle;

  declare type BorderRightWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type BorderSpacingProperty<TLength> = All | TLength | string;

  declare type BorderStyleProperty = All | BrStyle;

  declare type BorderTopProperty<TLength> = All | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderTopColorProperty = All | Color;

  declare type BorderTopLeftRadiusProperty<TLength> = All | LengthPercentage<TLength>;

  declare type BorderTopRightRadiusProperty<TLength> = All | LengthPercentage<TLength>;

  declare type BorderTopStyleProperty = All | BrStyle;

  declare type BorderTopWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type BorderWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type BottomProperty<TLength> = All | TLength | "auto" | string;

  declare type BoxAlignProperty = All | "baseline" | "center" | "end" | "start" | "stretch";

  declare type BoxDecorationBreakProperty = All | "clone" | "slice";

  declare type BoxDirectionProperty = All | "inherit" | "normal" | "reverse";

  declare type BoxLinesProperty = All | "multiple" | "single";

  declare type BoxOrientProperty = All | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

  declare type BoxPackProperty = All | "center" | "end" | "justify" | "start";

  declare type BoxShadowProperty<TLength> = All | Shadow<TLength> | "none";

  declare type BoxSizingProperty = All | "border-box" | "content-box";

  declare type BreakAfterProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

  declare type BreakBeforeProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

  declare type BreakInsideProperty = All | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

  declare type CaptionSideProperty = All | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

  declare type CaretColorProperty = All | Color | "auto";

  declare type ClearProperty = All | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

  declare type ClipProperty = All | "auto" | string;

  declare type ClipPathProperty = All | GeometryBox | "none" | string;

  declare type ColorProperty = All | Color;

  declare type ColumnCountProperty = All | "auto" | number;

  declare type ColumnFillProperty = All | "auto" | "balance" | "balance-all";

  declare type ColumnGapProperty<TLength> = All | LengthPercentage<TLength> | "normal";

  declare type ColumnRuleColorProperty = All | Color;

  declare type ColumnSpanProperty = All | "all" | "none";

  declare type ColumnWidthProperty<TLength> = All | TLength | "auto";

  declare type ContainProperty = All | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

  declare type ContentProperty = All | ContentList | "none" | "normal" | string;

  declare type CounterIncrementProperty = All | "none" | string;

  declare type CounterResetProperty = All | "none" | string;

  declare type CursorProperty =
    | All
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out"
    | string;

  declare type DirectionProperty = All | "ltr" | "rtl";

  declare type DisplayProperty = All | DisplayOutside | DisplayInside | DisplayListitem | DisplayInternal | DisplayBox | DisplayLegacy | string;

  declare type DisplayInsideProperty = All | "auto" | "block" | "flex" | "grid" | "ruby" | "table";

  declare type DisplayListProperty = All | "list-item" | "none";

  declare type DisplayOutsideProperty =
    | All
    | "block-level"
    | "contents"
    | "inline-level"
    | "none"
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "run-in"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  declare type EmptyCellsProperty = All | "hide" | "show";

  declare type FilterProperty = All | "none" | string;

  declare type FlexProperty = All | "none" | string;

  declare type FlexBasisProperty = All | "content" | string;

  declare type FlexDirectionProperty = All | "column" | "column-reverse" | "row" | "row-reverse";

  declare type FlexWrapProperty = All | "nowrap" | "wrap" | "wrap-reverse";

  declare type FloatProperty = All | "inline-end" | "inline-start" | "left" | "none" | "right";

  declare type FontProperty = All | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

  declare type FontFamilyProperty = All | GenericFamily | string;

  declare type FontFeatureSettingsProperty = All | "normal" | string;

  declare type FontKerningProperty = All | "auto" | "none" | "normal";

  declare type FontLanguageOverrideProperty = All | "normal" | string;

  declare type FontVariationSettingsProperty = All | "normal" | string;

  declare type FontSizeProperty<TLength> = All | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

  declare type FontSizeAdjustProperty = All | "none" | number;

  declare type FontStretchProperty =
    | All
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded";

  declare type FontStyleProperty = All | "italic" | "normal" | "oblique";

  declare type FontSynthesisProperty = All | "none" | "style" | "weight" | string;

  declare type FontVariantProperty =
    | All
    | NumericFigureValues
    | EastAsianWidthValues
    | DiscretionaryLigValues
    | HistoricalLigValues
    | ContextualAltValues
    | CommonLigValues
    | EastAsianVariantValues
    | NumericSpacingValues
    | NumericFractionValues
    | "all-petite-caps"
    | "all-small-caps"
    | "historical-forms"
    | "none"
    | "normal"
    | "ordinal"
    | "petite-caps"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "titling-caps"
    | "unicase"
    | string;

  declare type FontVariantAlternatesProperty = All | "historical-forms" | "normal" | string;

  declare type FontVariantCapsProperty = All | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

  declare type FontVariantEastAsianProperty = All | EastAsianVariantValues | EastAsianWidthValues | "normal" | "ruby" | string;

  declare type FontVariantLigaturesProperty = All | CommonLigValues | DiscretionaryLigValues | HistoricalLigValues | ContextualAltValues | "none" | "normal" | string;

  declare type FontVariantNumericProperty = All | NumericFigureValues | NumericSpacingValues | NumericFractionValues | "normal" | "ordinal" | "slashed-zero" | string;

  declare type FontVariantPositionProperty = All | "normal" | "sub" | "super";

  declare type FontWeightProperty = All | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  declare type GridProperty = All | "auto-flow" | string;

  declare type GridAutoColumnsProperty<TLength> = All | TrackSize<TLength>;

  declare type GridAutoFlowProperty = All | "column" | "dense" | "row" | string;

  declare type GridAutoRowsProperty<TLength> = All | TrackSize<TLength>;

  declare type GridColumnProperty = All | GridLine | string;

  declare type GridColumnEndProperty = All | GridLine;

  declare type GridColumnGapProperty<TLength> = All | LengthPercentage<TLength>;

  declare type GridColumnStartProperty = All | GridLine;

  declare type GridRowProperty = All | GridLine | string;

  declare type GridRowEndProperty = All | GridLine;

  declare type GridRowGapProperty<TLength> = All | LengthPercentage<TLength>;

  declare type GridRowStartProperty = All | GridLine;

  declare type GridTemplateProperty<TLength> = All | TrackSize<TLength> | "none" | string;

  declare type GridTemplateAreasProperty = All | "none" | string;

  declare type GridTemplateColumnsProperty<TLength> = All | TrackList<TLength> | AutoTrackList<TLength> | "none";

  declare type GridTemplateRowsProperty<TLength> = All | TrackList<TLength> | AutoTrackList<TLength> | "none";

  declare type HangingPunctuationProperty = All | "allow-end" | "first" | "force-end" | "last" | "none" | string;

  declare type HeightProperty<TLength> = All | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

  declare type HyphensProperty = All | "auto" | "manual" | "none";

  declare type ImageOrientationProperty = All | "flip" | "from-image" | string;

  declare type ImageRenderingProperty = All | "auto" | "crisp-edges" | "pixelated";

  declare type ImageResolutionProperty = All | "from-image" | string;

  declare type ImeModeProperty = All | "active" | "auto" | "disabled" | "inactive" | "normal";

  declare type InitialLetterProperty = All | "normal" | string | number;

  declare type InitialLetterAlignProperty = All | "alphabetic" | "auto" | "hanging" | "ideographic";

  declare type IsolationProperty = All | "auto" | "isolate";

  declare type JustifyContentProperty = All | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";

  declare type LeftProperty<TLength> = All | TLength | "auto" | string;

  declare type LetterSpacingProperty<TLength> = All | TLength | "normal";

  declare type LineBreakProperty = All | "auto" | "loose" | "normal" | "strict";

  declare type LineHeightProperty<TLength> = All | TLength | "normal" | string | number;

  declare type LineHeightStepProperty<TLength> = All | TLength | "none";

  declare type ListStyleImageProperty = All | "none" | string;

  declare type ListStylePositionProperty = All | "inside" | "outside";

  declare type ListStyleTypeProperty = All | "none" | string;

  declare type MarginProperty<TLength> = All | TLength | "auto" | string;

  declare type MarginBottomProperty<TLength> = All | TLength | "auto" | string;

  declare type MarginLeftProperty<TLength> = All | TLength | "auto" | string;

  declare type MarginRightProperty<TLength> = All | TLength | "auto" | string;

  declare type MarginTopProperty<TLength> = All | TLength | "auto" | string;

  declare type MaskProperty<TLength> = All | MaskLayer<TLength>;

  declare type MaskBorderModeProperty = All | "alpha" | "luminance";

  declare type MaskBorderOutsetProperty<TLength> = All | TLength | number;

  declare type MaskBorderRepeatProperty = All | "repeat" | "round" | "space" | "stretch";

  declare type MaskBorderSliceProperty = All | NumberPercentage | "fill" | string;

  declare type MaskBorderSourceProperty = All | "none" | string;

  declare type MaskBorderWidthProperty<TLength> = All | LengthPercentage<TLength> | "auto" | number;

  declare type MaskClipProperty = All | GeometryBox | "no-clip" | string;

  declare type MaskCompositeProperty = All | CompositingOperator;

  declare type MaskImageProperty = All | MaskReference;

  declare type MaskModeProperty = All | MaskingMode;

  declare type MaskOriginProperty = All | GeometryBox;

  declare type MaskPositionProperty<TLength> = All | Position<TLength>;

  declare type MaskRepeatProperty = All | RepeatStyle;

  declare type MaskSizeProperty<TLength> = All | BgSize<TLength>;

  declare type MaskTypeProperty = All | "alpha" | "luminance";

  declare type MaxHeightProperty<TLength> = All | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

  declare type MaxWidthProperty<TLength> = All | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

  declare type MinHeightProperty<TLength> = All | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

  declare type MinWidthProperty<TLength> = All | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

  declare type MixBlendModeProperty = All | BlendMode;

  declare type ObjectFitProperty = All | "contain" | "cover" | "fill" | "none" | "scale-down";

  declare type ObjectPositionProperty<TLength> = All | Position<TLength>;

  declare type OffsetAnchorProperty<TLength> = All | Position<TLength> | "auto";

  declare type OffsetDistanceProperty<TLength> = All | LengthPercentage<TLength>;

  declare type OffsetPathProperty = All | GeometryBox | "none" | string;

  declare type OffsetPositionProperty<TLength> = All | Position<TLength> | "auto";

  declare type OffsetRotateProperty = All | "auto" | "reverse" | string;

  declare type OutlineColorProperty = All | Color | "invert";

  declare type OutlineOffsetProperty<TLength> = All | TLength;

  declare type OutlineStyleProperty = All | BrStyle | "auto";

  declare type OutlineWidthProperty<TLength> = All | BrWidth<TLength>;

  declare type OverflowProperty = All | "auto" | "hidden" | "scroll" | "visible";

  declare type OverflowClipBoxProperty = All | "content-box" | "padding-box";

  declare type OverflowWrapProperty = All | "break-word" | "normal";

  declare type OverflowXProperty = All | "auto" | "hidden" | "scroll" | "visible";

  declare type OverflowYProperty = All | "auto" | "hidden" | "scroll" | "visible";

  declare type PaddingProperty<TLength> = All | TLength | string;

  declare type PaddingBottomProperty<TLength> = All | TLength | string;

  declare type PaddingLeftProperty<TLength> = All | TLength | string;

  declare type PaddingRightProperty<TLength> = All | TLength | string;

  declare type PaddingTopProperty<TLength> = All | TLength | string;

  declare type PageBreakAfterProperty = All | "always" | "auto" | "avoid" | "left" | "right";

  declare type PageBreakBeforeProperty = All | "always" | "auto" | "avoid" | "left" | "right";

  declare type PageBreakInsideProperty = All | "auto" | "avoid";

  declare type PerspectiveProperty<TLength> = All | TLength | "none";

  declare type PerspectiveOriginProperty<TLength> = All | Position<TLength>;

  declare type PointerEventsProperty = All | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

  declare type PositionProperty = All | "absolute" | "fixed" | "relative" | "static" | "sticky";

  declare type QuotesProperty = All | "none" | string;

  declare type ResizeProperty = All | "both" | "horizontal" | "none" | "vertical";

  declare type RightProperty<TLength> = All | TLength | "auto" | string;

  declare type RubyAlignProperty = All | "center" | "space-around" | "space-between" | "start";

  declare type RubyMergeProperty = All | "auto" | "collapse" | "separate";

  declare type RubyPositionProperty = All | "inter-character" | "over" | "under";

  declare type ScrollBehaviorProperty = All | "auto" | "smooth";

  declare type ScrollSnapCoordinateProperty<TLength> = All | Position<TLength> | "none";

  declare type ScrollSnapDestinationProperty<TLength> = All | Position<TLength>;

  declare type ScrollSnapPointsXProperty = All | "none" | string;

  declare type ScrollSnapPointsYProperty = All | "none" | string;

  declare type ScrollSnapTypeProperty = All | "mandatory" | "none" | "proximity";

  declare type ScrollSnapTypeXProperty = All | "mandatory" | "none" | "proximity";

  declare type ScrollSnapTypeYProperty = All | "mandatory" | "none" | "proximity";

  declare type ShapeMarginProperty<TLength> = All | LengthPercentage<TLength>;

  declare type ShapeOutsideProperty = All | ShapeBox | "none" | string;

  declare type TabSizeProperty<TLength> = All | TLength | number;

  declare type TableLayoutProperty = All | "auto" | "fixed";

  declare type TextAlignProperty = All | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

  declare type TextAlignLastProperty = All | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

  declare type TextCombineUprightProperty = All | "all" | "digits" | "none" | string;

  declare type TextDecorationColorProperty = All | Color;

  declare type TextDecorationLineProperty = All | "blink" | "line-through" | "none" | "overline" | "underline" | string;

  declare type TextDecorationSkipProperty = All | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

  declare type TextDecorationSkipInkProperty = All | "auto" | "none";

  declare type TextDecorationStyleProperty = All | "dashed" | "dotted" | "double" | "solid" | "wavy";

  declare type TextEmphasisColorProperty = All | Color;

  declare type TextEmphasisStyleProperty = All | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

  declare type TextIndentProperty<TLength> = All | LengthPercentage<TLength> | "each-line" | "hanging" | string;

  declare type TextJustifyProperty = All | "auto" | "inter-character" | "inter-word" | "none";

  declare type TextOrientationProperty = All | "mixed" | "sideways" | "upright";

  declare type TextOverflowProperty = All | "clip" | "ellipsis" | string;

  declare type TextRenderingProperty = All | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

  declare type TextShadowProperty<TLength> = All | ShadowT<TLength> | "none";

  declare type TextSizeAdjustProperty = All | "auto" | "none" | string;

  declare type TextTransformProperty = All | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

  declare type TextUnderlinePositionProperty = All | "auto" | "left" | "right" | "under" | string;

  declare type TopProperty<TLength> = All | TLength | "auto" | string;

  declare type TouchActionProperty = All | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | string;

  declare type TransformProperty = All | "none" | string;

  declare type TransformBoxProperty = All | "border-box" | "fill-box" | "view-box";

  declare type TransformOriginProperty<TLength> = All | LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type TransformStyleProperty = All | "flat" | "preserve-3d";

  declare type TransitionProperty = All | SingleTransition;

  declare type TransitionPropertyProperty = All | SingleTransitionProperty | "none";

  declare type TransitionTimingFunctionProperty = All | SingleTransitionTimingFunction;

  declare type UnicodeBidiProperty = All | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";

  declare type UserSelectProperty = All | "all" | "auto" | "contain" | "none" | "text";

  declare type VerticalAlignProperty<TLength> = All | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

  declare type VisibilityProperty = All | "collapse" | "hidden" | "visible";

  declare type WhiteSpaceProperty = All | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

  declare type WidthProperty<TLength> = All | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

  declare type WillChangeProperty = All | AnimateableFeature | "auto";

  declare type WordBreakProperty = All | "break-all" | "keep-all" | "normal";

  declare type WordSpacingProperty<TLength> = All | LengthPercentage<TLength> | "normal";

  declare type WordWrapProperty = All | "break-word" | "normal";

  declare type WritingModeProperty = All | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

  declare type ZIndexProperty = All | "auto" | number;

  declare type MsOverflowStyleProperty = All | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

  declare type MozAppearanceProperty =
    | All
    | "-moz-mac-unified-toolbar"
    | "-moz-win-borderless-glass"
    | "-moz-win-browsertabbar-toolbox"
    | "-moz-win-communications-toolbox"
    | "-moz-win-communicationstext"
    | "-moz-win-exclude-glass"
    | "-moz-win-glass"
    | "-moz-win-media-toolbox"
    | "-moz-win-mediatext"
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
    | "none"
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
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
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
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
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
    | "treeview";

  declare type MozBindingProperty = All | "none" | string;

  declare type MozBorderBottomColorsProperty = All | Color | "none" | string;

  declare type MozBorderLeftColorsProperty = All | Color | "none" | string;

  declare type MozBorderRightColorsProperty = All | Color | "none" | string;

  declare type MozBorderTopColorsProperty = All | Color | "none" | string;

  declare type MozContextPropertiesProperty = All | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

  declare type MozFloatEdgeProperty = All | "border-box" | "content-box" | "margin-box" | "padding-box";

  declare type MozImageRegionProperty = All | "auto" | string;

  declare type MozOrientProperty = All | "block" | "horizontal" | "inline" | "vertical";

  declare type MozStackSizingProperty = All | "ignore" | "stretch-to-fit";

  declare type MozTextBlinkProperty = All | "blink" | "none";

  declare type MozUserFocusProperty = All | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

  declare type MozUserInputProperty = All | "auto" | "disabled" | "enabled" | "none";

  declare type MozUserModifyProperty = All | "read-only" | "read-write" | "write-only";

  declare type MozWindowDraggingProperty = All | "drag" | "no-drag";

  declare type MozWindowShadowProperty = All | "default" | "menu" | "none" | "sheet" | "tooltip";

  declare type WebkitBoxReflectProperty<TLength> = All | TLength | "above" | "below" | "left" | "right" | string;

  declare type WebkitMaskAttachmentProperty = All | Attachment | string;

  declare type WebkitMaskClipProperty = All | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

  declare type WebkitMaskCompositeProperty = All | CompositeStyle | string;

  declare type WebkitMaskOriginProperty = All | "border" | "content" | "padding" | string;

  declare type WebkitMaskPositionProperty<TLength> = All | MaskPosition<TLength>;

  declare type WebkitMaskPositionXProperty<TLength> = All | LengthPercentage<TLength> | "center" | "left" | "right" | string;

  declare type WebkitMaskPositionYProperty<TLength> = All | LengthPercentage<TLength> | "bottom" | "center" | "top" | string;

  declare type WebkitMaskRepeatProperty = All | RepeatStyle | string;

  declare type WebkitMaskRepeatXProperty = All | "no-repeat" | "repeat" | "round" | "space";

  declare type WebkitMaskRepeatYProperty = All | "no-repeat" | "repeat" | "round" | "space";

  declare type WebkitOverflowScrollingProperty = All | "auto" | "touch";

  declare type WebkitTapHighlightColorProperty = All | Color;

  declare type WebkitTextFillColorProperty = All | Color;

  declare type WebkitTextStrokeProperty<TLength> = All | Color | TLength | string;

  declare type WebkitTextStrokeColorProperty = All | Color;

  declare type WebkitTextStrokeWidthProperty<TLength> = All | TLength;

  declare type WebkitTouchCalloutProperty = All | "default" | "none";

  declare type SingleAnimation =
    | SingleTimingFunction
    | SingleAnimationIterationCount
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | SingleAnimationPlayState
    | "none"
    | string;

  declare type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear" | string;

  declare type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | string;

  declare type StepTimingFunction = "step-end" | "step-start" | string;

  declare type SingleAnimationIterationCount = "infinite" | number;

  declare type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

  declare type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  declare type SingleAnimationPlayState = "paused" | "running";

  declare type FinalBgLayer<TLength> = BgImage | BgPosition<TLength> | RepeatStyle | Attachment | Box | string;

  declare type BgImage = "none" | string;

  declare type BgPosition<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type LengthPercentage<TLength> = TLength | string;

  declare type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";

  declare type Attachment = "fixed" | "local" | "scroll";

  declare type Box = "border-box" | "content-box" | "padding-box";

  declare type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";

  declare type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

  declare type NamedColor =
    | "aliceblue"
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
    | "lightgrey"
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
    | "transparent"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

  declare type DeprecatedSystemColor =
    | "ActiveBorder"
    | "ActiveCaption"
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
    | "InactiveCaptionText"
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

  declare type BgSize<TLength> = LengthPercentage<TLength> | "auto" | "contain" | "cover";

  declare type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

  declare type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

  declare type NumberPercentage = string | number;

  declare type Shadow<TLength> = Color | TLength | "inset" | string;

  declare type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

  declare type ShapeBox = Box | "margin-box";

  declare type ContentList = Quote | "contents" | string;

  declare type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

  declare type DisplayOutside = "block" | "inline" | "run-in";

  declare type DisplayInside = "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

  declare type DisplayListitem = DisplayOutside | "flow" | "flow-root" | "list-item" | string;

  declare type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  declare type DisplayBox = "contents" | "none";

  declare type DisplayLegacy = "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

  declare type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

  declare type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small";

  declare type RelativeSize = "larger" | "smaller";

  declare type CommonLigValues = "common-ligatures" | "no-common-ligatures";

  declare type DiscretionaryLigValues = "discretionary-ligatures" | "no-discretionary-ligatures";

  declare type HistoricalLigValues = "historical-ligatures" | "no-historical-ligatures";

  declare type ContextualAltValues = "contextual" | "no-contextual";

  declare type NumericFigureValues = "lining-nums" | "oldstyle-nums";

  declare type NumericSpacingValues = "proportional-nums" | "tabular-nums";

  declare type NumericFractionValues = "diagonal-fractions" | "stacked-fractions";

  declare type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

  declare type EastAsianWidthValues = "full-width" | "proportional-width";

  declare type TrackSize<TLength> = TrackBreadth<TLength> | string;

  declare type TrackBreadth<TLength> = LengthPercentage<TLength> | "auto" | "max-content" | "min-content" | string;

  declare type GridLine = "auto" | string | number;

  declare type TrackList<TLength> = TrackSize<TLength> | string;

  declare type AutoTrackList<TLength> = FixedSize<TLength> | string;

  declare type FixedSize<TLength> = FixedBreadth<TLength> | string;

  declare type FixedBreadth<TLength> = LengthPercentage<TLength>;

  declare type MaskLayer<TLength> = MaskReference | Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | string;

  declare type MaskReference = "none" | string;

  declare type Position<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  declare type MaskingMode = "alpha" | "luminance" | "match-source";

  declare type ShadowT<TLength> = Color | TLength | string;

  declare type SingleTransition = SingleTransitionProperty | SingleTransitionTimingFunction | "none" | string;

  declare type SingleTransitionProperty = "all" | string;

  declare type SingleTransitionTimingFunction = SingleTimingFunction;

  declare type AnimateableFeature = "contents" | "scroll-position" | string;

  declare type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";

  declare type MaskPosition<TLength> = LengthPercentage<TLength> | "center" | "left" | "right" | string;
}
