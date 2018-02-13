declare module "csstype" {
  declare export type StandardLonghandProperties<TLength = string | number> = {
    alignContent?: AlignContentProperty,
    alignItems?: AlignItemsProperty,
    alignSelf?: AlignSelfProperty,
    animationDelay?: GlobalsString,
    animationDirection?: AnimationDirectionProperty,
    animationDuration?: GlobalsString,
    animationFillMode?: AnimationFillModeProperty,
    animationIterationCount?: AnimationIterationCountProperty,
    animationName?: AnimationNameProperty,
    animationPlayState?: AnimationPlayStateProperty,
    animationTimingFunction?: AnimationTimingFunctionProperty,
    appearance?: AppearanceProperty,
    azimuth?: AzimuthProperty,
    backdropFilter?: BackdropFilterProperty,
    backfaceVisibility?: BackfaceVisibilityProperty,
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
    blockSize?: GlobalsString,
    borderBlockEndColor?: GlobalsString,
    borderBlockEndStyle?: GlobalsString,
    borderBlockEndWidth?: GlobalsString,
    borderBlockStartColor?: GlobalsString,
    borderBlockStartStyle?: GlobalsString,
    borderBlockStartWidth?: GlobalsString,
    borderBottomColor?: BorderBottomColorProperty,
    borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>,
    borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>,
    borderBottomStyle?: BorderBottomStyleProperty,
    borderBottomWidth?: BorderBottomWidthProperty<TLength>,
    borderCollapse?: BorderCollapseProperty,
    borderImageOutset?: BorderImageOutsetProperty<TLength>,
    borderImageRepeat?: BorderImageRepeatProperty,
    borderImageSlice?: BorderImageSliceProperty,
    borderImageSource?: BorderImageSourceProperty,
    borderImageWidth?: BorderImageWidthProperty<TLength>,
    borderInlineEndColor?: GlobalsString,
    borderInlineEndStyle?: GlobalsString,
    borderInlineEndWidth?: GlobalsString,
    borderInlineStartColor?: GlobalsString,
    borderInlineStartStyle?: GlobalsString,
    borderInlineStartWidth?: GlobalsString,
    borderLeftColor?: BorderLeftColorProperty,
    borderLeftStyle?: BorderLeftStyleProperty,
    borderLeftWidth?: BorderLeftWidthProperty<TLength>,
    borderRightColor?: BorderRightColorProperty,
    borderRightStyle?: BorderRightStyleProperty,
    borderRightWidth?: BorderRightWidthProperty<TLength>,
    borderSpacing?: BorderSpacingProperty<TLength>,
    borderTopColor?: BorderTopColorProperty,
    borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>,
    borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>,
    borderTopStyle?: BorderTopStyleProperty,
    borderTopWidth?: BorderTopWidthProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    boxAlign?: BoxAlignProperty,
    boxDecorationBreak?: BoxDecorationBreakProperty,
    boxDirection?: BoxDirectionProperty,
    boxFlex?: GlobalsNumber,
    boxFlexGroup?: GlobalsNumber,
    boxLines?: BoxLinesProperty,
    boxOrdinalGroup?: GlobalsNumber,
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
    columnRuleColor?: ColumnRuleColorProperty,
    columnRuleStyle?: GlobalsString,
    columnRuleWidth?: GlobalsString,
    columnSpan?: ColumnSpanProperty,
    columnWidth?: ColumnWidthProperty<TLength>,
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
    flexBasis?: FlexBasisProperty,
    flexDirection?: FlexDirectionProperty,
    flexGrow?: GlobalsNumber,
    flexShrink?: GlobalsNumber,
    flexWrap?: FlexWrapProperty,
    float?: FloatProperty,
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
    gridAutoColumns?: GridAutoColumnsProperty<TLength>,
    gridAutoFlow?: GridAutoFlowProperty,
    gridAutoRows?: GridAutoRowsProperty<TLength>,
    gridColumnEnd?: GridColumnEndProperty,
    gridColumnGap?: GridColumnGapProperty<TLength>,
    gridColumnStart?: GridColumnStartProperty,
    gridRowEnd?: GridRowEndProperty,
    gridRowGap?: GridRowGapProperty<TLength>,
    gridRowStart?: GridRowStartProperty,
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
    inlineSize?: GlobalsString,
    isolation?: IsolationProperty,
    justifyContent?: JustifyContentProperty,
    left?: LeftProperty<TLength>,
    letterSpacing?: LetterSpacingProperty<TLength>,
    lineBreak?: LineBreakProperty,
    lineHeight?: LineHeightProperty<TLength>,
    lineHeightStep?: LineHeightStepProperty<TLength>,
    listStyleImage?: ListStyleImageProperty,
    listStylePosition?: ListStylePositionProperty,
    listStyleType?: ListStyleTypeProperty,
    marginBlockEnd?: GlobalsString,
    marginBlockStart?: GlobalsString,
    marginBottom?: MarginBottomProperty<TLength>,
    marginInlineEnd?: GlobalsString,
    marginInlineStart?: GlobalsString,
    marginLeft?: MarginLeftProperty<TLength>,
    marginRight?: MarginRightProperty<TLength>,
    marginTop?: MarginTopProperty<TLength>,
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
    maxBlockSize?: GlobalsString,
    maxHeight?: MaxHeightProperty<TLength>,
    maxInlineSize?: GlobalsString,
    maxWidth?: MaxWidthProperty<TLength>,
    minBlockSize?: GlobalsString,
    minHeight?: MinHeightProperty<TLength>,
    minInlineSize?: GlobalsString,
    minWidth?: MinWidthProperty<TLength>,
    mixBlendMode?: MixBlendModeProperty,
    objectFit?: ObjectFitProperty,
    objectPosition?: ObjectPositionProperty<TLength>,
    offsetAnchor?: OffsetAnchorProperty<TLength>,
    offsetBlockEnd?: GlobalsString,
    offsetBlockStart?: GlobalsString,
    offsetInlineEnd?: GlobalsString,
    offsetInlineStart?: GlobalsString,
    offsetDistance?: OffsetDistanceProperty<TLength>,
    offsetPath?: OffsetPathProperty,
    offsetPosition?: OffsetPositionProperty<TLength>,
    offsetRotate?: OffsetRotateProperty,
    opacity?: GlobalsNumber,
    order?: GlobalsNumber,
    orphans?: GlobalsNumber,
    outlineColor?: OutlineColorProperty,
    outlineOffset?: OutlineOffsetProperty<TLength>,
    outlineStyle?: OutlineStyleProperty,
    outlineWidth?: OutlineWidthProperty<TLength>,
    overflow?: OverflowProperty,
    overflowClipBox?: OverflowClipBoxProperty,
    overflowWrap?: OverflowWrapProperty,
    overflowX?: OverflowXProperty,
    overflowY?: OverflowYProperty,
    paddingBlockEnd?: GlobalsString,
    paddingBlockStart?: GlobalsString,
    paddingBottom?: PaddingBottomProperty<TLength>,
    paddingInlineEnd?: GlobalsString,
    paddingInlineStart?: GlobalsString,
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
    shapeImageThreshold?: GlobalsNumber,
    shapeMargin?: ShapeMarginProperty<TLength>,
    shapeOutside?: ShapeOutsideProperty,
    tabSize?: TabSizeProperty<TLength>,
    tableLayout?: TableLayoutProperty,
    textAlign?: TextAlignProperty,
    textAlignLast?: TextAlignLastProperty,
    textCombineUpright?: TextCombineUprightProperty,
    textDecorationColor?: TextDecorationColorProperty,
    textDecorationLine?: TextDecorationLineProperty,
    textDecorationSkip?: TextDecorationSkipProperty,
    textDecorationSkipInk?: TextDecorationSkipInkProperty,
    textDecorationStyle?: TextDecorationStyleProperty,
    textEmphasisColor?: TextEmphasisColorProperty,
    textEmphasisPosition?: GlobalsString,
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
    transitionDelay?: GlobalsString,
    transitionDuration?: GlobalsString,
    transitionProperty?: TransitionPropertyProperty,
    transitionTimingFunction?: TransitionTimingFunctionProperty,
    unicodeBidi?: UnicodeBidiProperty,
    userSelect?: UserSelectProperty,
    verticalAlign?: VerticalAlignProperty<TLength>,
    visibility?: VisibilityProperty,
    whiteSpace?: WhiteSpaceProperty,
    widows?: GlobalsNumber,
    width?: WidthProperty<TLength>,
    willChange?: WillChangeProperty,
    wordBreak?: WordBreakProperty,
    wordSpacing?: WordSpacingProperty<TLength>,
    wordWrap?: WordWrapProperty,
    writingMode?: WritingModeProperty,
    zIndex?: ZIndexProperty,
  };

  declare export type StandardShorthandProperties<TLength = string | number> = {
    animation?: AnimationProperty,
    background?: BackgroundProperty<TLength>,
    border?: BorderProperty<TLength>,
    borderBlockEnd?: GlobalsString,
    borderBlockStart?: GlobalsString,
    borderBottom?: BorderBottomProperty<TLength>,
    borderColor?: BorderColorProperty,
    borderImage?: GlobalsString,
    borderInlineEnd?: GlobalsString,
    borderInlineStart?: GlobalsString,
    borderLeft?: BorderLeftProperty<TLength>,
    borderRadius?: BorderRadiusProperty<TLength>,
    borderRight?: BorderRightProperty<TLength>,
    borderStyle?: BorderStyleProperty,
    borderTop?: BorderTopProperty<TLength>,
    borderWidth?: BorderWidthProperty<TLength>,
    columnRule?: GlobalsString,
    columns?: GlobalsString,
    flex?: FlexProperty,
    flexFlow?: GlobalsString,
    font?: FontProperty,
    grid?: GlobalsString,
    gridArea?: GlobalsString,
    gridColumn?: GridColumnProperty,
    gridGap?: GlobalsString,
    gridRow?: GridRowProperty,
    gridTemplate?: GridTemplateProperty,
    listStyle?: GlobalsString,
    margin?: MarginProperty<TLength>,
    mask?: MaskProperty<TLength>,
    maskBorder?: GlobalsString,
    offset?: GlobalsString,
    outline?: GlobalsString,
    padding?: PaddingProperty<TLength>,
    textDecoration?: GlobalsString,
    textEmphasis?: GlobalsString,
    transition?: TransitionProperty,
  };

  declare export interface StandardProperties<TLength = string | number> extends StandardLonghandProperties<TLength>, StandardShorthandProperties<TLength> {}

  declare export type VendorLonghandProperties<TLength = string | number> = {
    msOverflowStyle?: MsOverflowStyleProperty,
    mozAppearance?: MozAppearanceProperty,
    mozBinding?: MozBindingProperty,
    mozBorderBottomColors?: MozBorderBottomColorsProperty,
    mozBorderLeftColors?: MozBorderLeftColorsProperty,
    mozBorderRightColors?: MozBorderRightColorsProperty,
    mozBorderTopColors?: MozBorderTopColorsProperty,
    mozContextProperties?: MozContextPropertiesProperty,
    mozFloatEdge?: MozFloatEdgeProperty,
    mozForceBrokenImageIcon?: GlobalsNumber,
    mozImageRegion?: MozImageRegionProperty,
    mozOrient?: MozOrientProperty,
    mozOutlineRadiusBottomleft?: GlobalsString,
    mozOutlineRadiusBottomright?: GlobalsString,
    mozOutlineRadiusTopleft?: GlobalsString,
    mozOutlineRadiusTopright?: GlobalsString,
    mozStackSizing?: MozStackSizingProperty,
    mozTextBlink?: MozTextBlinkProperty,
    mozUserFocus?: MozUserFocusProperty,
    mozUserInput?: MozUserInputProperty,
    mozUserModify?: MozUserModifyProperty,
    mozWindowDragging?: MozWindowDraggingProperty,
    mozWindowShadow?: MozWindowShadowProperty,
    webkitBorderBeforeColor?: GlobalsString,
    webkitBorderBeforeStyle?: GlobalsString,
    webkitBorderBeforeWidth?: GlobalsString,
    webkitBoxReflect?: WebkitBoxReflectProperty<TLength>,
    webkitMaskAttachment?: WebkitMaskAttachmentProperty,
    webkitMaskClip?: WebkitMaskClipProperty,
    webkitMaskComposite?: WebkitMaskCompositeProperty,
    webkitMaskImage?: GlobalsString,
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
    webkitTextStrokeColor?: WebkitTextStrokeColorProperty,
    webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>,
    webkitTouchCallout?: WebkitTouchCalloutProperty,
  };

  declare export type VendorShorthandProperties<TLength = string | number> = {
    mozOutlineRadius?: GlobalsString,
    webkitBorderBefore?: GlobalsString,
    webkitMask?: GlobalsString,
    webkitTextStroke?: WebkitTextStrokeProperty<TLength>,
  };

  declare export interface VendorProperties<TLength = string | number> extends VendorLonghandProperties<TLength>, VendorShorthandProperties<TLength> {}

  declare export interface Properties<TLength = string | number> extends StandardProperties<TLength>, VendorProperties<TLength> {}

  declare export type StandardLonghandPropertiesHyphen<TLength = string | number> = {
    "align-content"?: AlignContentProperty,
    "align-items"?: AlignItemsProperty,
    "align-self"?: AlignSelfProperty,
    "animation-delay"?: GlobalsString,
    "animation-direction"?: AnimationDirectionProperty,
    "animation-duration"?: GlobalsString,
    "animation-fill-mode"?: AnimationFillModeProperty,
    "animation-iteration-count"?: AnimationIterationCountProperty,
    "animation-name"?: AnimationNameProperty,
    "animation-play-state"?: AnimationPlayStateProperty,
    "animation-timing-function"?: AnimationTimingFunctionProperty,
    appearance?: AppearanceProperty,
    azimuth?: AzimuthProperty,
    "backdrop-filter"?: BackdropFilterProperty,
    "backface-visibility"?: BackfaceVisibilityProperty,
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
    "block-size"?: GlobalsString,
    "border-block-end-color"?: GlobalsString,
    "border-block-end-style"?: GlobalsString,
    "border-block-end-width"?: GlobalsString,
    "border-block-start-color"?: GlobalsString,
    "border-block-start-style"?: GlobalsString,
    "border-block-start-width"?: GlobalsString,
    "border-bottom-color"?: BorderBottomColorProperty,
    "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>,
    "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>,
    "border-bottom-style"?: BorderBottomStyleProperty,
    "border-bottom-width"?: BorderBottomWidthProperty<TLength>,
    "border-collapse"?: BorderCollapseProperty,
    "border-image-outset"?: BorderImageOutsetProperty<TLength>,
    "border-image-repeat"?: BorderImageRepeatProperty,
    "border-image-slice"?: BorderImageSliceProperty,
    "border-image-source"?: BorderImageSourceProperty,
    "border-image-width"?: BorderImageWidthProperty<TLength>,
    "border-inline-end-color"?: GlobalsString,
    "border-inline-end-style"?: GlobalsString,
    "border-inline-end-width"?: GlobalsString,
    "border-inline-start-color"?: GlobalsString,
    "border-inline-start-style"?: GlobalsString,
    "border-inline-start-width"?: GlobalsString,
    "border-left-color"?: BorderLeftColorProperty,
    "border-left-style"?: BorderLeftStyleProperty,
    "border-left-width"?: BorderLeftWidthProperty<TLength>,
    "border-right-color"?: BorderRightColorProperty,
    "border-right-style"?: BorderRightStyleProperty,
    "border-right-width"?: BorderRightWidthProperty<TLength>,
    "border-spacing"?: BorderSpacingProperty<TLength>,
    "border-top-color"?: BorderTopColorProperty,
    "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>,
    "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>,
    "border-top-style"?: BorderTopStyleProperty,
    "border-top-width"?: BorderTopWidthProperty<TLength>,
    bottom?: BottomProperty<TLength>,
    "box-align"?: BoxAlignProperty,
    "box-decoration-break"?: BoxDecorationBreakProperty,
    "box-direction"?: BoxDirectionProperty,
    "box-flex"?: GlobalsNumber,
    "box-flex-group"?: GlobalsNumber,
    "box-lines"?: BoxLinesProperty,
    "box-ordinal-group"?: GlobalsNumber,
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
    "column-rule-color"?: ColumnRuleColorProperty,
    "column-rule-style"?: GlobalsString,
    "column-rule-width"?: GlobalsString,
    "column-span"?: ColumnSpanProperty,
    "column-width"?: ColumnWidthProperty<TLength>,
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
    "flex-basis"?: FlexBasisProperty,
    "flex-direction"?: FlexDirectionProperty,
    "flex-grow"?: GlobalsNumber,
    "flex-shrink"?: GlobalsNumber,
    "flex-wrap"?: FlexWrapProperty,
    float?: FloatProperty,
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
    "grid-auto-columns"?: GridAutoColumnsProperty<TLength>,
    "grid-auto-flow"?: GridAutoFlowProperty,
    "grid-auto-rows"?: GridAutoRowsProperty<TLength>,
    "grid-column-end"?: GridColumnEndProperty,
    "grid-column-gap"?: GridColumnGapProperty<TLength>,
    "grid-column-start"?: GridColumnStartProperty,
    "grid-row-end"?: GridRowEndProperty,
    "grid-row-gap"?: GridRowGapProperty<TLength>,
    "grid-row-start"?: GridRowStartProperty,
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
    "inline-size"?: GlobalsString,
    isolation?: IsolationProperty,
    "justify-content"?: JustifyContentProperty,
    left?: LeftProperty<TLength>,
    "letter-spacing"?: LetterSpacingProperty<TLength>,
    "line-break"?: LineBreakProperty,
    "line-height"?: LineHeightProperty<TLength>,
    "line-height-step"?: LineHeightStepProperty<TLength>,
    "list-style-image"?: ListStyleImageProperty,
    "list-style-position"?: ListStylePositionProperty,
    "list-style-type"?: ListStyleTypeProperty,
    "margin-block-end"?: GlobalsString,
    "margin-block-start"?: GlobalsString,
    "margin-bottom"?: MarginBottomProperty<TLength>,
    "margin-inline-end"?: GlobalsString,
    "margin-inline-start"?: GlobalsString,
    "margin-left"?: MarginLeftProperty<TLength>,
    "margin-right"?: MarginRightProperty<TLength>,
    "margin-top"?: MarginTopProperty<TLength>,
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
    "max-block-size"?: GlobalsString,
    "max-height"?: MaxHeightProperty<TLength>,
    "max-inline-size"?: GlobalsString,
    "max-width"?: MaxWidthProperty<TLength>,
    "min-block-size"?: GlobalsString,
    "min-height"?: MinHeightProperty<TLength>,
    "min-inline-size"?: GlobalsString,
    "min-width"?: MinWidthProperty<TLength>,
    "mix-blend-mode"?: MixBlendModeProperty,
    "object-fit"?: ObjectFitProperty,
    "object-position"?: ObjectPositionProperty<TLength>,
    "offset-anchor"?: OffsetAnchorProperty<TLength>,
    "offset-block-end"?: GlobalsString,
    "offset-block-start"?: GlobalsString,
    "offset-inline-end"?: GlobalsString,
    "offset-inline-start"?: GlobalsString,
    "offset-distance"?: OffsetDistanceProperty<TLength>,
    "offset-path"?: OffsetPathProperty,
    "offset-position"?: OffsetPositionProperty<TLength>,
    "offset-rotate"?: OffsetRotateProperty,
    opacity?: GlobalsNumber,
    order?: GlobalsNumber,
    orphans?: GlobalsNumber,
    "outline-color"?: OutlineColorProperty,
    "outline-offset"?: OutlineOffsetProperty<TLength>,
    "outline-style"?: OutlineStyleProperty,
    "outline-width"?: OutlineWidthProperty<TLength>,
    overflow?: OverflowProperty,
    "overflow-clip-box"?: OverflowClipBoxProperty,
    "overflow-wrap"?: OverflowWrapProperty,
    "overflow-x"?: OverflowXProperty,
    "overflow-y"?: OverflowYProperty,
    "padding-block-end"?: GlobalsString,
    "padding-block-start"?: GlobalsString,
    "padding-bottom"?: PaddingBottomProperty<TLength>,
    "padding-inline-end"?: GlobalsString,
    "padding-inline-start"?: GlobalsString,
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
    "shape-image-threshold"?: GlobalsNumber,
    "shape-margin"?: ShapeMarginProperty<TLength>,
    "shape-outside"?: ShapeOutsideProperty,
    "tab-size"?: TabSizeProperty<TLength>,
    "table-layout"?: TableLayoutProperty,
    "text-align"?: TextAlignProperty,
    "text-align-last"?: TextAlignLastProperty,
    "text-combine-upright"?: TextCombineUprightProperty,
    "text-decoration-color"?: TextDecorationColorProperty,
    "text-decoration-line"?: TextDecorationLineProperty,
    "text-decoration-skip"?: TextDecorationSkipProperty,
    "text-decoration-skip-ink"?: TextDecorationSkipInkProperty,
    "text-decoration-style"?: TextDecorationStyleProperty,
    "text-emphasis-color"?: TextEmphasisColorProperty,
    "text-emphasis-position"?: GlobalsString,
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
    "transition-delay"?: GlobalsString,
    "transition-duration"?: GlobalsString,
    "transition-property"?: TransitionPropertyProperty,
    "transition-timing-function"?: TransitionTimingFunctionProperty,
    "unicode-bidi"?: UnicodeBidiProperty,
    "user-select"?: UserSelectProperty,
    "vertical-align"?: VerticalAlignProperty<TLength>,
    visibility?: VisibilityProperty,
    "white-space"?: WhiteSpaceProperty,
    widows?: GlobalsNumber,
    width?: WidthProperty<TLength>,
    "will-change"?: WillChangeProperty,
    "word-break"?: WordBreakProperty,
    "word-spacing"?: WordSpacingProperty<TLength>,
    "word-wrap"?: WordWrapProperty,
    "writing-mode"?: WritingModeProperty,
    "z-index"?: ZIndexProperty,
  };

  declare export type StandardShorthandPropertiesHyphen<TLength = string | number> = {
    animation?: AnimationProperty,
    background?: BackgroundProperty<TLength>,
    border?: BorderProperty<TLength>,
    "border-block-end"?: GlobalsString,
    "border-block-start"?: GlobalsString,
    "border-bottom"?: BorderBottomProperty<TLength>,
    "border-color"?: BorderColorProperty,
    "border-image"?: GlobalsString,
    "border-inline-end"?: GlobalsString,
    "border-inline-start"?: GlobalsString,
    "border-left"?: BorderLeftProperty<TLength>,
    "border-radius"?: BorderRadiusProperty<TLength>,
    "border-right"?: BorderRightProperty<TLength>,
    "border-style"?: BorderStyleProperty,
    "border-top"?: BorderTopProperty<TLength>,
    "border-width"?: BorderWidthProperty<TLength>,
    "column-rule"?: GlobalsString,
    columns?: GlobalsString,
    flex?: FlexProperty,
    "flex-flow"?: GlobalsString,
    font?: FontProperty,
    grid?: GlobalsString,
    "grid-area"?: GlobalsString,
    "grid-column"?: GridColumnProperty,
    "grid-gap"?: GlobalsString,
    "grid-row"?: GridRowProperty,
    "grid-template"?: GridTemplateProperty,
    "list-style"?: GlobalsString,
    margin?: MarginProperty<TLength>,
    mask?: MaskProperty<TLength>,
    "mask-border"?: GlobalsString,
    offset?: GlobalsString,
    outline?: GlobalsString,
    padding?: PaddingProperty<TLength>,
    "text-decoration"?: GlobalsString,
    "text-emphasis"?: GlobalsString,
    transition?: TransitionProperty,
  };

  declare export interface StandardPropertiesHyphen<TLength = string | number> extends StandardLonghandPropertiesHyphen<TLength>, StandardShorthandPropertiesHyphen<TLength> {}

  declare export type VendorLonghandPropertiesHyphen<TLength = string | number> = {
    "-ms-overflow-style"?: MsOverflowStyleProperty,
    "-moz-appearance"?: MozAppearanceProperty,
    "-moz-binding"?: MozBindingProperty,
    "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty,
    "-moz-border-left-colors"?: MozBorderLeftColorsProperty,
    "-moz-border-right-colors"?: MozBorderRightColorsProperty,
    "-moz-border-top-colors"?: MozBorderTopColorsProperty,
    "-moz-context-properties"?: MozContextPropertiesProperty,
    "-moz-float-edge"?: MozFloatEdgeProperty,
    "-moz-force-broken-image-icon"?: GlobalsNumber,
    "-moz-image-region"?: MozImageRegionProperty,
    "-moz-orient"?: MozOrientProperty,
    "-moz-outline-radius-bottomleft"?: GlobalsString,
    "-moz-outline-radius-bottomright"?: GlobalsString,
    "-moz-outline-radius-topleft"?: GlobalsString,
    "-moz-outline-radius-topright"?: GlobalsString,
    "-moz-stack-sizing"?: MozStackSizingProperty,
    "-moz-text-blink"?: MozTextBlinkProperty,
    "-moz-user-focus"?: MozUserFocusProperty,
    "-moz-user-input"?: MozUserInputProperty,
    "-moz-user-modify"?: MozUserModifyProperty,
    "-moz-window-dragging"?: MozWindowDraggingProperty,
    "-moz-window-shadow"?: MozWindowShadowProperty,
    "-webkit-border-before-color"?: GlobalsString,
    "-webkit-border-before-style"?: GlobalsString,
    "-webkit-border-before-width"?: GlobalsString,
    "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>,
    "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty,
    "-webkit-mask-clip"?: WebkitMaskClipProperty,
    "-webkit-mask-composite"?: WebkitMaskCompositeProperty,
    "-webkit-mask-image"?: GlobalsString,
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
    "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty,
    "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>,
    "-webkit-touch-callout"?: WebkitTouchCalloutProperty,
  };

  declare export type VendorShorthandPropertiesHyphen<TLength = string | number> = {
    "-moz-outline-radius"?: GlobalsString,
    "-webkit-border-before"?: GlobalsString,
    "-webkit-mask"?: GlobalsString,
    "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>,
  };

  declare export interface VendorPropertiesHyphen<TLength = string | number> extends VendorLonghandPropertiesHyphen<TLength>, VendorShorthandPropertiesHyphen<TLength> {}

  declare export interface PropertiesHyphen<TLength = string | number> extends StandardPropertiesHyphen<TLength>, VendorPropertiesHyphen<TLength> {}

  declare export type StandardLonghandPropertiesFallback<TLength = string | number> = {
    alignContent?: AlignContentProperty | AlignContentProperty[],
    alignItems?: AlignItemsProperty | AlignItemsProperty[],
    alignSelf?: AlignSelfProperty | AlignSelfProperty[],
    animationDelay?: GlobalsString | GlobalsString[],
    animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[],
    animationDuration?: GlobalsString | GlobalsString[],
    animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[],
    animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
    animationName?: AnimationNameProperty | AnimationNameProperty[],
    animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
    animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
    appearance?: AppearanceProperty | AppearanceProperty[],
    azimuth?: AzimuthProperty | AzimuthProperty[],
    backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[],
    backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
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
    blockSize?: GlobalsString | GlobalsString[],
    borderBlockEndColor?: GlobalsString | GlobalsString[],
    borderBlockEndStyle?: GlobalsString | GlobalsString[],
    borderBlockEndWidth?: GlobalsString | GlobalsString[],
    borderBlockStartColor?: GlobalsString | GlobalsString[],
    borderBlockStartStyle?: GlobalsString | GlobalsString[],
    borderBlockStartWidth?: GlobalsString | GlobalsString[],
    borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[],
    borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
    borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
    borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
    borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
    borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[],
    borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
    borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
    borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[],
    borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[],
    borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
    borderInlineEndColor?: GlobalsString | GlobalsString[],
    borderInlineEndStyle?: GlobalsString | GlobalsString[],
    borderInlineEndWidth?: GlobalsString | GlobalsString[],
    borderInlineStartColor?: GlobalsString | GlobalsString[],
    borderInlineStartStyle?: GlobalsString | GlobalsString[],
    borderInlineStartWidth?: GlobalsString | GlobalsString[],
    borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[],
    borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
    borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
    borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[],
    borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[],
    borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
    borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
    borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[],
    borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
    borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
    borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[],
    borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
    bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
    boxAlign?: BoxAlignProperty | BoxAlignProperty[],
    boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
    boxDirection?: BoxDirectionProperty | BoxDirectionProperty[],
    boxFlex?: GlobalsNumber | GlobalsNumber[],
    boxFlexGroup?: GlobalsNumber | GlobalsNumber[],
    boxLines?: BoxLinesProperty | BoxLinesProperty[],
    boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[],
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
    columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
    columnRuleStyle?: GlobalsString | GlobalsString[],
    columnRuleWidth?: GlobalsString | GlobalsString[],
    columnSpan?: ColumnSpanProperty | ColumnSpanProperty[],
    columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
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
    flexBasis?: FlexBasisProperty | FlexBasisProperty[],
    flexDirection?: FlexDirectionProperty | FlexDirectionProperty[],
    flexGrow?: GlobalsNumber | GlobalsNumber[],
    flexShrink?: GlobalsNumber | GlobalsNumber[],
    flexWrap?: FlexWrapProperty | FlexWrapProperty[],
    float?: FloatProperty | FloatProperty[],
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
    gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
    gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[],
    gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
    gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[],
    gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
    gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[],
    gridRowEnd?: GridRowEndProperty | GridRowEndProperty[],
    gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
    gridRowStart?: GridRowStartProperty | GridRowStartProperty[],
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
    inlineSize?: GlobalsString | GlobalsString[],
    isolation?: IsolationProperty | IsolationProperty[],
    justifyContent?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
    lineBreak?: LineBreakProperty | LineBreakProperty[],
    lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
    lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
    listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[],
    listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[],
    listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[],
    marginBlockEnd?: GlobalsString | GlobalsString[],
    marginBlockStart?: GlobalsString | GlobalsString[],
    marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
    marginInlineEnd?: GlobalsString | GlobalsString[],
    marginInlineStart?: GlobalsString | GlobalsString[],
    marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
    marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
    marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
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
    maxBlockSize?: GlobalsString | GlobalsString[],
    maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
    maxInlineSize?: GlobalsString | GlobalsString[],
    maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
    minBlockSize?: GlobalsString | GlobalsString[],
    minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
    minInlineSize?: GlobalsString | GlobalsString[],
    minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
    mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[],
    objectFit?: ObjectFitProperty | ObjectFitProperty[],
    objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
    offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
    offsetBlockEnd?: GlobalsString | GlobalsString[],
    offsetBlockStart?: GlobalsString | GlobalsString[],
    offsetInlineEnd?: GlobalsString | GlobalsString[],
    offsetInlineStart?: GlobalsString | GlobalsString[],
    offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
    offsetPath?: OffsetPathProperty | OffsetPathProperty[],
    offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
    offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[],
    opacity?: GlobalsNumber | GlobalsNumber[],
    order?: GlobalsNumber | GlobalsNumber[],
    orphans?: GlobalsNumber | GlobalsNumber[],
    outlineColor?: OutlineColorProperty | OutlineColorProperty[],
    outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
    outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[],
    outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
    overflow?: OverflowProperty | OverflowProperty[],
    overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
    overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[],
    overflowX?: OverflowXProperty | OverflowXProperty[],
    overflowY?: OverflowYProperty | OverflowYProperty[],
    paddingBlockEnd?: GlobalsString | GlobalsString[],
    paddingBlockStart?: GlobalsString | GlobalsString[],
    paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
    paddingInlineEnd?: GlobalsString | GlobalsString[],
    paddingInlineStart?: GlobalsString | GlobalsString[],
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
    shapeImageThreshold?: GlobalsNumber | GlobalsNumber[],
    shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
    shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[],
    tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
    tableLayout?: TableLayoutProperty | TableLayoutProperty[],
    textAlign?: TextAlignProperty | TextAlignProperty[],
    textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[],
    textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[],
    textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[],
    textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[],
    textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
    textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
    textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
    textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
    textEmphasisPosition?: GlobalsString | GlobalsString[],
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
    transitionDelay?: GlobalsString | GlobalsString[],
    transitionDuration?: GlobalsString | GlobalsString[],
    transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[],
    transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
    unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[],
    userSelect?: UserSelectProperty | UserSelectProperty[],
    verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
    visibility?: VisibilityProperty | VisibilityProperty[],
    whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[],
    widows?: GlobalsNumber | GlobalsNumber[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    willChange?: WillChangeProperty | WillChangeProperty[],
    wordBreak?: WordBreakProperty | WordBreakProperty[],
    wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
    wordWrap?: WordWrapProperty | WordWrapProperty[],
    writingMode?: WritingModeProperty | WritingModeProperty[],
    zIndex?: ZIndexProperty | ZIndexProperty[],
  };

  declare export type StandardShorthandPropertiesFallback<TLength = string | number> = {
    animation?: AnimationProperty | AnimationProperty[],
    background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
    border?: BorderProperty<TLength> | BorderProperty<TLength>[],
    borderBlockEnd?: GlobalsString | GlobalsString[],
    borderBlockStart?: GlobalsString | GlobalsString[],
    borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
    borderColor?: BorderColorProperty | BorderColorProperty[],
    borderImage?: GlobalsString | GlobalsString[],
    borderInlineEnd?: GlobalsString | GlobalsString[],
    borderInlineStart?: GlobalsString | GlobalsString[],
    borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
    borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
    borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
    borderStyle?: BorderStyleProperty | BorderStyleProperty[],
    borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
    borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
    columnRule?: GlobalsString | GlobalsString[],
    columns?: GlobalsString | GlobalsString[],
    flex?: FlexProperty | FlexProperty[],
    flexFlow?: GlobalsString | GlobalsString[],
    font?: FontProperty | FontProperty[],
    grid?: GlobalsString | GlobalsString[],
    gridArea?: GlobalsString | GlobalsString[],
    gridColumn?: GridColumnProperty | GridColumnProperty[],
    gridGap?: GlobalsString | GlobalsString[],
    gridRow?: GridRowProperty | GridRowProperty[],
    gridTemplate?: GridTemplateProperty | GridTemplateProperty[],
    listStyle?: GlobalsString | GlobalsString[],
    margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
    mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
    maskBorder?: GlobalsString | GlobalsString[],
    offset?: GlobalsString | GlobalsString[],
    outline?: GlobalsString | GlobalsString[],
    padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
    textDecoration?: GlobalsString | GlobalsString[],
    textEmphasis?: GlobalsString | GlobalsString[],
    transition?: TransitionProperty | TransitionProperty[],
  };

  declare export interface StandardPropertiesFallback<TLength = string | number>
    extends StandardLonghandPropertiesFallback<TLength>, StandardShorthandPropertiesFallback<TLength> {}

  declare export type VendorLonghandPropertiesFallback<TLength = string | number> = {
    msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
    mozAppearance?: MozAppearanceProperty | MozAppearanceProperty[],
    mozBinding?: MozBindingProperty | MozBindingProperty[],
    mozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
    mozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
    mozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
    mozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
    mozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
    mozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
    mozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[],
    mozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[],
    mozOrient?: MozOrientProperty | MozOrientProperty[],
    mozOutlineRadiusBottomleft?: GlobalsString | GlobalsString[],
    mozOutlineRadiusBottomright?: GlobalsString | GlobalsString[],
    mozOutlineRadiusTopleft?: GlobalsString | GlobalsString[],
    mozOutlineRadiusTopright?: GlobalsString | GlobalsString[],
    mozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[],
    mozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[],
    mozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[],
    mozUserInput?: MozUserInputProperty | MozUserInputProperty[],
    mozUserModify?: MozUserModifyProperty | MozUserModifyProperty[],
    mozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
    mozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[],
    webkitBorderBeforeColor?: GlobalsString | GlobalsString[],
    webkitBorderBeforeStyle?: GlobalsString | GlobalsString[],
    webkitBorderBeforeWidth?: GlobalsString | GlobalsString[],
    webkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
    webkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
    webkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
    webkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
    webkitMaskImage?: GlobalsString | GlobalsString[],
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
    webkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
    webkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
    webkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  };

  declare export type VendorShorthandPropertiesFallback<TLength = string | number> = {
    mozOutlineRadius?: GlobalsString | GlobalsString[],
    webkitBorderBefore?: GlobalsString | GlobalsString[],
    webkitMask?: GlobalsString | GlobalsString[],
    webkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
  };

  declare export interface VendorPropertiesFallback<TLength = string | number> extends VendorLonghandPropertiesFallback<TLength>, VendorShorthandPropertiesFallback<TLength> {}

  declare export interface PropertiesFallback<TLength = string | number> extends StandardPropertiesFallback<TLength>, VendorPropertiesFallback<TLength> {}

  declare export type StandardLonghandPropertiesHyphenFallback<TLength = string | number> = {
    "align-content"?: AlignContentProperty | AlignContentProperty[],
    "align-items"?: AlignItemsProperty | AlignItemsProperty[],
    "align-self"?: AlignSelfProperty | AlignSelfProperty[],
    "animation-delay"?: GlobalsString | GlobalsString[],
    "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[],
    "animation-duration"?: GlobalsString | GlobalsString[],
    "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[],
    "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[],
    "animation-name"?: AnimationNameProperty | AnimationNameProperty[],
    "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[],
    "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[],
    appearance?: AppearanceProperty | AppearanceProperty[],
    azimuth?: AzimuthProperty | AzimuthProperty[],
    "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[],
    "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[],
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
    "block-size"?: GlobalsString | GlobalsString[],
    "border-block-end-color"?: GlobalsString | GlobalsString[],
    "border-block-end-style"?: GlobalsString | GlobalsString[],
    "border-block-end-width"?: GlobalsString | GlobalsString[],
    "border-block-start-color"?: GlobalsString | GlobalsString[],
    "border-block-start-style"?: GlobalsString | GlobalsString[],
    "border-block-start-width"?: GlobalsString | GlobalsString[],
    "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[],
    "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[],
    "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[],
    "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[],
    "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[],
    "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[],
    "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[],
    "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[],
    "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[],
    "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[],
    "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[],
    "border-inline-end-color"?: GlobalsString | GlobalsString[],
    "border-inline-end-style"?: GlobalsString | GlobalsString[],
    "border-inline-end-width"?: GlobalsString | GlobalsString[],
    "border-inline-start-color"?: GlobalsString | GlobalsString[],
    "border-inline-start-style"?: GlobalsString | GlobalsString[],
    "border-inline-start-width"?: GlobalsString | GlobalsString[],
    "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[],
    "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[],
    "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[],
    "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[],
    "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[],
    "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[],
    "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[],
    "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[],
    "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[],
    "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[],
    "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[],
    "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[],
    bottom?: BottomProperty<TLength> | BottomProperty<TLength>[],
    "box-align"?: BoxAlignProperty | BoxAlignProperty[],
    "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[],
    "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[],
    "box-flex"?: GlobalsNumber | GlobalsNumber[],
    "box-flex-group"?: GlobalsNumber | GlobalsNumber[],
    "box-lines"?: BoxLinesProperty | BoxLinesProperty[],
    "box-ordinal-group"?: GlobalsNumber | GlobalsNumber[],
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
    "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[],
    "column-rule-style"?: GlobalsString | GlobalsString[],
    "column-rule-width"?: GlobalsString | GlobalsString[],
    "column-span"?: ColumnSpanProperty | ColumnSpanProperty[],
    "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[],
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
    "flex-basis"?: FlexBasisProperty | FlexBasisProperty[],
    "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[],
    "flex-grow"?: GlobalsNumber | GlobalsNumber[],
    "flex-shrink"?: GlobalsNumber | GlobalsNumber[],
    "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[],
    float?: FloatProperty | FloatProperty[],
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
    "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[],
    "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[],
    "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[],
    "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[],
    "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[],
    "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[],
    "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[],
    "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[],
    "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[],
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
    "inline-size"?: GlobalsString | GlobalsString[],
    isolation?: IsolationProperty | IsolationProperty[],
    "justify-content"?: JustifyContentProperty | JustifyContentProperty[],
    left?: LeftProperty<TLength> | LeftProperty<TLength>[],
    "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[],
    "line-break"?: LineBreakProperty | LineBreakProperty[],
    "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[],
    "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[],
    "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[],
    "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[],
    "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[],
    "margin-block-end"?: GlobalsString | GlobalsString[],
    "margin-block-start"?: GlobalsString | GlobalsString[],
    "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[],
    "margin-inline-end"?: GlobalsString | GlobalsString[],
    "margin-inline-start"?: GlobalsString | GlobalsString[],
    "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[],
    "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[],
    "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[],
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
    "max-block-size"?: GlobalsString | GlobalsString[],
    "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[],
    "max-inline-size"?: GlobalsString | GlobalsString[],
    "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[],
    "min-block-size"?: GlobalsString | GlobalsString[],
    "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[],
    "min-inline-size"?: GlobalsString | GlobalsString[],
    "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[],
    "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[],
    "object-fit"?: ObjectFitProperty | ObjectFitProperty[],
    "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[],
    "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[],
    "offset-block-end"?: GlobalsString | GlobalsString[],
    "offset-block-start"?: GlobalsString | GlobalsString[],
    "offset-inline-end"?: GlobalsString | GlobalsString[],
    "offset-inline-start"?: GlobalsString | GlobalsString[],
    "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[],
    "offset-path"?: OffsetPathProperty | OffsetPathProperty[],
    "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[],
    "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[],
    opacity?: GlobalsNumber | GlobalsNumber[],
    order?: GlobalsNumber | GlobalsNumber[],
    orphans?: GlobalsNumber | GlobalsNumber[],
    "outline-color"?: OutlineColorProperty | OutlineColorProperty[],
    "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[],
    "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[],
    "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[],
    overflow?: OverflowProperty | OverflowProperty[],
    "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[],
    "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[],
    "overflow-x"?: OverflowXProperty | OverflowXProperty[],
    "overflow-y"?: OverflowYProperty | OverflowYProperty[],
    "padding-block-end"?: GlobalsString | GlobalsString[],
    "padding-block-start"?: GlobalsString | GlobalsString[],
    "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[],
    "padding-inline-end"?: GlobalsString | GlobalsString[],
    "padding-inline-start"?: GlobalsString | GlobalsString[],
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
    "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[],
    "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[],
    "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[],
    "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[],
    "table-layout"?: TableLayoutProperty | TableLayoutProperty[],
    "text-align"?: TextAlignProperty | TextAlignProperty[],
    "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[],
    "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[],
    "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[],
    "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[],
    "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[],
    "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[],
    "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[],
    "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[],
    "text-emphasis-position"?: GlobalsString | GlobalsString[],
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
    "transition-delay"?: GlobalsString | GlobalsString[],
    "transition-duration"?: GlobalsString | GlobalsString[],
    "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[],
    "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[],
    "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[],
    "user-select"?: UserSelectProperty | UserSelectProperty[],
    "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[],
    visibility?: VisibilityProperty | VisibilityProperty[],
    "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[],
    widows?: GlobalsNumber | GlobalsNumber[],
    width?: WidthProperty<TLength> | WidthProperty<TLength>[],
    "will-change"?: WillChangeProperty | WillChangeProperty[],
    "word-break"?: WordBreakProperty | WordBreakProperty[],
    "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[],
    "word-wrap"?: WordWrapProperty | WordWrapProperty[],
    "writing-mode"?: WritingModeProperty | WritingModeProperty[],
    "z-index"?: ZIndexProperty | ZIndexProperty[],
  };

  declare export type StandardShorthandPropertiesHyphenFallback<TLength = string | number> = {
    animation?: AnimationProperty | AnimationProperty[],
    background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[],
    border?: BorderProperty<TLength> | BorderProperty<TLength>[],
    "border-block-end"?: GlobalsString | GlobalsString[],
    "border-block-start"?: GlobalsString | GlobalsString[],
    "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[],
    "border-color"?: BorderColorProperty | BorderColorProperty[],
    "border-image"?: GlobalsString | GlobalsString[],
    "border-inline-end"?: GlobalsString | GlobalsString[],
    "border-inline-start"?: GlobalsString | GlobalsString[],
    "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[],
    "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[],
    "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[],
    "border-style"?: BorderStyleProperty | BorderStyleProperty[],
    "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[],
    "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[],
    "column-rule"?: GlobalsString | GlobalsString[],
    columns?: GlobalsString | GlobalsString[],
    flex?: FlexProperty | FlexProperty[],
    "flex-flow"?: GlobalsString | GlobalsString[],
    font?: FontProperty | FontProperty[],
    grid?: GlobalsString | GlobalsString[],
    "grid-area"?: GlobalsString | GlobalsString[],
    "grid-column"?: GridColumnProperty | GridColumnProperty[],
    "grid-gap"?: GlobalsString | GlobalsString[],
    "grid-row"?: GridRowProperty | GridRowProperty[],
    "grid-template"?: GridTemplateProperty | GridTemplateProperty[],
    "list-style"?: GlobalsString | GlobalsString[],
    margin?: MarginProperty<TLength> | MarginProperty<TLength>[],
    mask?: MaskProperty<TLength> | MaskProperty<TLength>[],
    "mask-border"?: GlobalsString | GlobalsString[],
    offset?: GlobalsString | GlobalsString[],
    outline?: GlobalsString | GlobalsString[],
    padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[],
    "text-decoration"?: GlobalsString | GlobalsString[],
    "text-emphasis"?: GlobalsString | GlobalsString[],
    transition?: TransitionProperty | TransitionProperty[],
  };

  declare export interface StandardPropertiesHyphenFallback<TLength = string | number>
    extends StandardLonghandPropertiesHyphenFallback<TLength>, StandardShorthandPropertiesHyphenFallback<TLength> {}

  declare export type VendorLonghandPropertiesHyphenFallback<TLength = string | number> = {
    "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[],
    "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[],
    "-moz-binding"?: MozBindingProperty | MozBindingProperty[],
    "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[],
    "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[],
    "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[],
    "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[],
    "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[],
    "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[],
    "-moz-force-broken-image-icon"?: GlobalsNumber | GlobalsNumber[],
    "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[],
    "-moz-orient"?: MozOrientProperty | MozOrientProperty[],
    "-moz-outline-radius-bottomleft"?: GlobalsString | GlobalsString[],
    "-moz-outline-radius-bottomright"?: GlobalsString | GlobalsString[],
    "-moz-outline-radius-topleft"?: GlobalsString | GlobalsString[],
    "-moz-outline-radius-topright"?: GlobalsString | GlobalsString[],
    "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[],
    "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[],
    "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[],
    "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[],
    "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[],
    "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[],
    "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[],
    "-webkit-border-before-color"?: GlobalsString | GlobalsString[],
    "-webkit-border-before-style"?: GlobalsString | GlobalsString[],
    "-webkit-border-before-width"?: GlobalsString | GlobalsString[],
    "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[],
    "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[],
    "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[],
    "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[],
    "-webkit-mask-image"?: GlobalsString | GlobalsString[],
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
    "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[],
    "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[],
    "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[],
  };

  declare export type VendorShorthandPropertiesHyphenFallback<TLength = string | number> = {
    "-moz-outline-radius"?: GlobalsString | GlobalsString[],
    "-webkit-border-before"?: GlobalsString | GlobalsString[],
    "-webkit-mask"?: GlobalsString | GlobalsString[],
    "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[],
  };

  declare export interface VendorPropertiesHyphenFallback<TLength = string | number>
    extends VendorLonghandPropertiesHyphenFallback<TLength>, VendorShorthandPropertiesHyphenFallback<TLength> {}

  declare export interface PropertiesHyphenFallback<TLength = string | number> extends StandardPropertiesHyphenFallback<TLength>, VendorPropertiesHyphenFallback<TLength> {}

  declare export type CounterStyle = {
    additiveSymbols?: string,
    fallback?: string,
    negative?: string,
    pad?: string,
    prefix?: string,
    range?: CounterStyleRangeProperty,
    speakAs?: CounterStyleSpeakAsProperty,
    suffix?: string,
    symbols?: string,
    system?: CounterStyleSystemProperty,
  };

  declare export type CounterStyleHyphen = {
    "additive-symbols"?: string,
    fallback?: string,
    negative?: string,
    pad?: string,
    prefix?: string,
    range?: CounterStyleRangeProperty,
    "speak-as"?: CounterStyleSpeakAsProperty,
    suffix?: string,
    symbols?: string,
    system?: CounterStyleSystemProperty,
  };

  declare export type CounterStyleFallback = {
    additiveSymbols?: string | string[],
    fallback?: string | string[],
    negative?: string | string[],
    pad?: string | string[],
    prefix?: string | string[],
    range?: CounterStyleRangeProperty | CounterStyleRangeProperty[],
    speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[],
    suffix?: string | string[],
    symbols?: string | string[],
    system?: CounterStyleSystemProperty | CounterStyleSystemProperty[],
  };

  declare export type CounterStyleHyphenFallback = {
    "additive-symbols"?: string | string[],
    fallback?: string | string[],
    negative?: string | string[],
    pad?: string | string[],
    prefix?: string | string[],
    range?: CounterStyleRangeProperty | CounterStyleRangeProperty[],
    "speak-as"?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[],
    suffix?: string | string[],
    symbols?: string | string[],
    system?: CounterStyleSystemProperty | CounterStyleSystemProperty[],
  };

  declare export type FontFace = {
    fontDisplay?: FontFaceFontDisplayProperty,
    fontFamily?: string,
    fontFeatureSettings?: FontFaceFontFeatureSettingsProperty,
    fontVariationSettings?: FontFaceFontVariationSettingsProperty,
    fontStretch?: FontFaceFontStretchProperty,
    fontStyle?: FontFaceFontStyleProperty,
    fontWeight?: FontFaceFontWeightProperty,
    fontVariant?: FontFaceFontVariantProperty,
    src?: string,
    unicodeRange?: string,
  };

  declare export type FontFaceHyphen = {
    "font-display"?: FontFaceFontDisplayProperty,
    "font-family"?: string,
    "font-feature-settings"?: FontFaceFontFeatureSettingsProperty,
    "font-variation-settings"?: FontFaceFontVariationSettingsProperty,
    "font-stretch"?: FontFaceFontStretchProperty,
    "font-style"?: FontFaceFontStyleProperty,
    "font-weight"?: FontFaceFontWeightProperty,
    "font-variant"?: FontFaceFontVariantProperty,
    src?: string,
    "unicode-range"?: string,
  };

  declare export type FontFaceFallback = {
    fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[],
    fontFamily?: string | string[],
    fontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
    fontVariationSettings?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[],
    fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[],
    fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[],
    fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[],
    fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[],
    src?: string | string[],
    unicodeRange?: string | string[],
  };

  declare export type FontFaceHyphenFallback = {
    "font-display"?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[],
    "font-family"?: string | string[],
    "font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[],
    "font-variation-settings"?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[],
    "font-stretch"?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[],
    "font-style"?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[],
    "font-weight"?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[],
    "font-variant"?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[],
    src?: string | string[],
    "unicode-range"?: string | string[],
  };

  declare export type Page<TLength = string | number> = {
    bleed?: PageBleedProperty<TLength>,
    marks?: PageMarksProperty,
  };

  declare export type PageHyphen<TLength = string | number> = {
    bleed?: PageBleedProperty<TLength>,
    marks?: PageMarksProperty,
  };

  declare export type PageFallback<TLength = string | number> = {
    bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[],
    marks?: PageMarksProperty | PageMarksProperty[],
  };

  declare export type PageHyphenFallback<TLength = string | number> = {
    bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[],
    marks?: PageMarksProperty | PageMarksProperty[],
  };

  declare export type Viewport<TLength = string | number> = {
    height?: ViewportHeightProperty<TLength>,
    maxHeight?: ViewportMaxHeightProperty<TLength>,
    maxWidth?: ViewportMaxWidthProperty<TLength>,
    maxZoom?: ViewportMaxZoomProperty,
    minHeight?: ViewportMinHeightProperty<TLength>,
    minWidth?: ViewportMinWidthProperty<TLength>,
    minZoom?: ViewportMinZoomProperty,
    orientation?: ViewportOrientationProperty,
    userZoom?: ViewportUserZoomProperty,
    width?: ViewportWidthProperty<TLength>,
    zoom?: ViewportZoomProperty,
  };

  declare export type ViewportHyphen<TLength = string | number> = {
    height?: ViewportHeightProperty<TLength>,
    "max-height"?: ViewportMaxHeightProperty<TLength>,
    "max-width"?: ViewportMaxWidthProperty<TLength>,
    "max-zoom"?: ViewportMaxZoomProperty,
    "min-height"?: ViewportMinHeightProperty<TLength>,
    "min-width"?: ViewportMinWidthProperty<TLength>,
    "min-zoom"?: ViewportMinZoomProperty,
    orientation?: ViewportOrientationProperty,
    "user-zoom"?: ViewportUserZoomProperty,
    width?: ViewportWidthProperty<TLength>,
    zoom?: ViewportZoomProperty,
  };

  declare export type ViewportFallback<TLength = string | number> = {
    height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
    maxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
    maxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
    maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[],
    minHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
    minWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
    minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[],
    orientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
    userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[],
    width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
    zoom?: ViewportZoomProperty | ViewportZoomProperty[],
  };

  declare export type ViewportHyphenFallback<TLength = string | number> = {
    height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[],
    "max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[],
    "max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[],
    "max-zoom"?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[],
    "min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[],
    "min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[],
    "min-zoom"?: ViewportMinZoomProperty | ViewportMinZoomProperty[],
    orientation?: ViewportOrientationProperty | ViewportOrientationProperty[],
    "user-zoom"?: ViewportUserZoomProperty | ViewportUserZoomProperty[],
    width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[],
    zoom?: ViewportZoomProperty | ViewportZoomProperty[],
  };

  declare export type AtRules =
    | "@charset"
    | "@counter-style"
    | "@document"
    | "@font-face"
    | "@font-feature-values"
    | "@import"
    | "@keyframes"
    | "@media"
    | "@namespace"
    | "@page"
    | "@supports"
    | "@viewport";

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

  declare type Globals = "inherit" | "initial" | "unset";

  declare type GlobalsString = Globals | string;

  declare type GlobalsNumber = Globals | number;

  declare type AlignContentProperty = Globals | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly" | "stretch";

  declare type AlignItemsProperty = Globals | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

  declare type AlignSelfProperty = Globals | "auto" | "baseline" | "center" | "flex-end" | "flex-start" | "stretch";

  declare type AnimationDirectionProperty = Globals | SingleAnimationDirection;

  declare type AnimationFillModeProperty = Globals | SingleAnimationFillMode;

  declare type AnimationIterationCountProperty = Globals | SingleAnimationIterationCount;

  declare type AnimationNameProperty = Globals | "none" | string;

  declare type AnimationPlayStateProperty = Globals | SingleAnimationPlayState;

  declare type AnimationTimingFunctionProperty = Globals | SingleTimingFunction;

  declare type AppearanceProperty = Globals | "auto" | "none";

  declare type AzimuthProperty =
    | Globals
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

  declare type BackdropFilterProperty = Globals | "none" | string;

  declare type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

  declare type BackgroundAttachmentProperty = Globals | Attachment;

  declare type BackgroundBlendModeProperty = Globals | BlendMode;

  declare type BackgroundClipProperty = Globals | Box;

  declare type BackgroundColorProperty = Globals | Color;

  declare type BackgroundImageProperty = Globals | BgImage;

  declare type BackgroundOriginProperty = Globals | Box;

  declare type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength>;

  declare type BackgroundPositionXProperty<TLength> = Globals | LengthPercentage<TLength> | "center" | "left" | "right" | "x-end" | "x-start" | string;

  declare type BackgroundPositionYProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

  declare type BackgroundRepeatProperty = Globals | RepeatStyle;

  declare type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength>;

  declare type BorderBottomColorProperty = Globals | Color;

  declare type BorderBottomLeftRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type BorderBottomRightRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type BorderBottomStyleProperty = Globals | BrStyle;

  declare type BorderBottomWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type BorderCollapseProperty = Globals | "collapse" | "separate";

  declare type BorderImageOutsetProperty<TLength> = Globals | TLength | number;

  declare type BorderImageRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch";

  declare type BorderImageSliceProperty = Globals | NumberPercentage | "fill" | string;

  declare type BorderImageSourceProperty = Globals | "none" | string;

  declare type BorderImageWidthProperty<TLength> = Globals | LengthPercentage<TLength> | "auto" | number;

  declare type BorderLeftColorProperty = Globals | Color;

  declare type BorderLeftStyleProperty = Globals | BrStyle;

  declare type BorderLeftWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type BorderRightColorProperty = Globals | Color;

  declare type BorderRightStyleProperty = Globals | BrStyle;

  declare type BorderRightWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type BorderSpacingProperty<TLength> = Globals | TLength | string;

  declare type BorderTopColorProperty = Globals | Color;

  declare type BorderTopLeftRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type BorderTopRightRadiusProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type BorderTopStyleProperty = Globals | BrStyle;

  declare type BorderTopWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type BottomProperty<TLength> = Globals | TLength | "auto" | string;

  declare type BoxAlignProperty = Globals | "baseline" | "center" | "end" | "start" | "stretch";

  declare type BoxDecorationBreakProperty = Globals | "clone" | "slice";

  declare type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

  declare type BoxLinesProperty = Globals | "multiple" | "single";

  declare type BoxOrientProperty = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

  declare type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

  declare type BoxShadowProperty<TLength> = Globals | Shadow<TLength> | "none";

  declare type BoxSizingProperty = Globals | "border-box" | "content-box";

  declare type BreakAfterProperty =
    | Globals
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  declare type BreakBeforeProperty =
    | Globals
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  declare type BreakInsideProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

  declare type CaptionSideProperty = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

  declare type CaretColorProperty = Globals | Color | "auto";

  declare type ClearProperty = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

  declare type ClipProperty = Globals | "auto" | string;

  declare type ClipPathProperty = Globals | GeometryBox | "none" | string;

  declare type ColorProperty = Globals | Color;

  declare type ColumnCountProperty = Globals | "auto" | number;

  declare type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

  declare type ColumnGapProperty<TLength> = Globals | LengthPercentage<TLength> | "normal";

  declare type ColumnRuleColorProperty = Globals | Color;

  declare type ColumnSpanProperty = Globals | "all" | "none";

  declare type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

  declare type ContainProperty = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

  declare type ContentProperty = Globals | ContentList | "none" | "normal" | string;

  declare type CounterIncrementProperty = Globals | "none" | string;

  declare type CounterResetProperty = Globals | "none" | string;

  declare type CursorProperty =
    | Globals
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

  declare type DirectionProperty = Globals | "ltr" | "rtl";

  declare type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayListitem | DisplayInternal | DisplayBox | DisplayLegacy | string;

  declare type DisplayInsideProperty = Globals | "auto" | "block" | "flex" | "grid" | "ruby" | "table";

  declare type DisplayListProperty = Globals | "list-item" | "none";

  declare type DisplayOutsideProperty =
    | Globals
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

  declare type EmptyCellsProperty = Globals | "hide" | "show";

  declare type FilterProperty = Globals | "none" | string;

  declare type FlexBasisProperty = Globals | "content" | string;

  declare type FlexDirectionProperty = Globals | "column" | "column-reverse" | "row" | "row-reverse";

  declare type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

  declare type FloatProperty = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

  declare type FontFamilyProperty = Globals | GenericFamily | string;

  declare type FontFeatureSettingsProperty = Globals | "normal" | string;

  declare type FontKerningProperty = Globals | "auto" | "none" | "normal";

  declare type FontLanguageOverrideProperty = Globals | "normal" | string;

  declare type FontVariationSettingsProperty = Globals | "normal" | string;

  declare type FontSizeProperty<TLength> = Globals | AbsoluteSize | RelativeSize | LengthPercentage<TLength>;

  declare type FontSizeAdjustProperty = Globals | "none" | number;

  declare type FontStretchProperty =
    | Globals
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded";

  declare type FontStyleProperty = Globals | "italic" | "normal" | "oblique";

  declare type FontSynthesisProperty = Globals | "none" | "style" | "weight" | string;

  declare type FontVariantProperty =
    | Globals
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

  declare type FontVariantAlternatesProperty = Globals | "historical-forms" | "normal" | string;

  declare type FontVariantCapsProperty = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

  declare type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | EastAsianWidthValues | "normal" | "ruby" | string;

  declare type FontVariantLigaturesProperty = Globals | CommonLigValues | DiscretionaryLigValues | HistoricalLigValues | ContextualAltValues | "none" | "normal" | string;

  declare type FontVariantNumericProperty = Globals | NumericFigureValues | NumericSpacingValues | NumericFractionValues | "normal" | "ordinal" | "slashed-zero" | string;

  declare type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

  declare type FontWeightProperty = Globals | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  declare type GridAutoColumnsProperty<TLength> = Globals | TrackSize<TLength>;

  declare type GridAutoFlowProperty = Globals | "column" | "dense" | "row" | string;

  declare type GridAutoRowsProperty<TLength> = Globals | TrackSize<TLength>;

  declare type GridColumnEndProperty = Globals | GridLine;

  declare type GridColumnGapProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type GridColumnStartProperty = Globals | GridLine;

  declare type GridRowEndProperty = Globals | GridLine;

  declare type GridRowGapProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type GridRowStartProperty = Globals | GridLine;

  declare type GridTemplateAreasProperty = Globals | "none" | string;

  declare type GridTemplateColumnsProperty<TLength> = Globals | TrackList<TLength> | "none" | string;

  declare type GridTemplateRowsProperty<TLength> = Globals | TrackList<TLength> | "none" | string;

  declare type HangingPunctuationProperty = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | string;

  declare type HeightProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

  declare type HyphensProperty = Globals | "auto" | "manual" | "none";

  declare type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

  declare type ImageRenderingProperty = Globals | "auto" | "crisp-edges" | "pixelated";

  declare type ImageResolutionProperty = Globals | "from-image" | string;

  declare type ImeModeProperty = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

  declare type InitialLetterProperty = Globals | "normal" | string | number;

  declare type InitialLetterAlignProperty = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

  declare type IsolationProperty = Globals | "auto" | "isolate";

  declare type JustifyContentProperty = Globals | "center" | "flex-end" | "flex-start" | "space-around" | "space-between" | "space-evenly";

  declare type LeftProperty<TLength> = Globals | TLength | "auto" | string;

  declare type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

  declare type LineBreakProperty = Globals | "auto" | "loose" | "normal" | "strict";

  declare type LineHeightProperty<TLength> = Globals | TLength | "normal" | string | number;

  declare type LineHeightStepProperty<TLength> = Globals | TLength | "none";

  declare type ListStyleImageProperty = Globals | "none" | string;

  declare type ListStylePositionProperty = Globals | "inside" | "outside";

  declare type ListStyleTypeProperty = Globals | "none" | string;

  declare type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

  declare type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

  declare type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

  declare type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

  declare type MaskBorderModeProperty = Globals | "alpha" | "luminance";

  declare type MaskBorderOutsetProperty<TLength> = Globals | TLength | number;

  declare type MaskBorderRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch";

  declare type MaskBorderSliceProperty = Globals | NumberPercentage | "fill" | string;

  declare type MaskBorderSourceProperty = Globals | "none" | string;

  declare type MaskBorderWidthProperty<TLength> = Globals | LengthPercentage<TLength> | "auto" | number;

  declare type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

  declare type MaskCompositeProperty = Globals | CompositingOperator;

  declare type MaskImageProperty = Globals | MaskReference;

  declare type MaskModeProperty = Globals | MaskingMode;

  declare type MaskOriginProperty = Globals | GeometryBox;

  declare type MaskPositionProperty<TLength> = Globals | Position<TLength>;

  declare type MaskRepeatProperty = Globals | RepeatStyle;

  declare type MaskSizeProperty<TLength> = Globals | BgSize<TLength>;

  declare type MaskTypeProperty = Globals | "alpha" | "luminance";

  declare type MaxHeightProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

  declare type MaxWidthProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

  declare type MinHeightProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

  declare type MinWidthProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

  declare type MixBlendModeProperty = Globals | BlendMode;

  declare type ObjectFitProperty = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

  declare type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

  declare type OffsetAnchorProperty<TLength> = Globals | Position<TLength> | "auto";

  declare type OffsetDistanceProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type OffsetPathProperty = Globals | GeometryBox | "none" | string;

  declare type OffsetPositionProperty<TLength> = Globals | Position<TLength> | "auto";

  declare type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

  declare type OutlineColorProperty = Globals | Color | "invert";

  declare type OutlineOffsetProperty<TLength> = Globals | TLength;

  declare type OutlineStyleProperty = Globals | BrStyle | "auto";

  declare type OutlineWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type OverflowProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

  declare type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

  declare type OverflowWrapProperty = Globals | "break-word" | "normal";

  declare type OverflowXProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

  declare type OverflowYProperty = Globals | "auto" | "hidden" | "scroll" | "visible";

  declare type PaddingBottomProperty<TLength> = Globals | TLength | string;

  declare type PaddingLeftProperty<TLength> = Globals | TLength | string;

  declare type PaddingRightProperty<TLength> = Globals | TLength | string;

  declare type PaddingTopProperty<TLength> = Globals | TLength | string;

  declare type PageBreakAfterProperty = Globals | "always" | "auto" | "avoid" | "left" | "right";

  declare type PageBreakBeforeProperty = Globals | "always" | "auto" | "avoid" | "left" | "right";

  declare type PageBreakInsideProperty = Globals | "auto" | "avoid";

  declare type PerspectiveProperty<TLength> = Globals | TLength | "none";

  declare type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

  declare type PointerEventsProperty =
    | Globals
    | "all"
    | "auto"
    | "fill"
    | "inherit"
    | "none"
    | "painted"
    | "stroke"
    | "visible"
    | "visibleFill"
    | "visiblePainted"
    | "visibleStroke";

  declare type PositionProperty = Globals | "absolute" | "fixed" | "relative" | "static" | "sticky";

  declare type QuotesProperty = Globals | "none" | string;

  declare type ResizeProperty = Globals | "both" | "horizontal" | "none" | "vertical";

  declare type RightProperty<TLength> = Globals | TLength | "auto" | string;

  declare type RubyAlignProperty = Globals | "center" | "space-around" | "space-between" | "start";

  declare type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

  declare type RubyPositionProperty = Globals | "inter-character" | "over" | "under";

  declare type ScrollBehaviorProperty = Globals | "auto" | "smooth";

  declare type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | "none";

  declare type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;

  declare type ScrollSnapPointsXProperty = Globals | "none" | string;

  declare type ScrollSnapPointsYProperty = Globals | "none" | string;

  declare type ScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

  declare type ScrollSnapTypeXProperty = Globals | "mandatory" | "none" | "proximity";

  declare type ScrollSnapTypeYProperty = Globals | "mandatory" | "none" | "proximity";

  declare type ShapeMarginProperty<TLength> = Globals | LengthPercentage<TLength>;

  declare type ShapeOutsideProperty = Globals | ShapeBox | "none" | string;

  declare type TabSizeProperty<TLength> = Globals | TLength | number;

  declare type TableLayoutProperty = Globals | "auto" | "fixed";

  declare type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

  declare type TextAlignLastProperty = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

  declare type TextCombineUprightProperty = Globals | "all" | "digits" | "none" | string;

  declare type TextDecorationColorProperty = Globals | Color;

  declare type TextDecorationLineProperty = Globals | "blink" | "line-through" | "none" | "overline" | "underline" | string;

  declare type TextDecorationSkipProperty = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

  declare type TextDecorationSkipInkProperty = Globals | "auto" | "none";

  declare type TextDecorationStyleProperty = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

  declare type TextEmphasisColorProperty = Globals | Color;

  declare type TextEmphasisStyleProperty = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

  declare type TextIndentProperty<TLength> = Globals | LengthPercentage<TLength> | string;

  declare type TextJustifyProperty = Globals | "auto" | "inter-character" | "inter-word" | "none";

  declare type TextOrientationProperty = Globals | "mixed" | "sideways" | "upright";

  declare type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

  declare type TextRenderingProperty = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

  declare type TextShadowProperty<TLength> = Globals | ShadowT<TLength> | "none";

  declare type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

  declare type TextTransformProperty = Globals | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

  declare type TextUnderlinePositionProperty = Globals | "auto" | "left" | "right" | "under" | string;

  declare type TopProperty<TLength> = Globals | TLength | "auto" | string;

  declare type TouchActionProperty = Globals | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | string;

  declare type TransformProperty = Globals | "none" | string;

  declare type TransformBoxProperty = Globals | "border-box" | "fill-box" | "view-box";

  declare type TransformOriginProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type TransformStyleProperty = Globals | "flat" | "preserve-3d";

  declare type TransitionPropertyProperty = Globals | SingleTransitionProperty | "none";

  declare type TransitionTimingFunctionProperty = Globals | SingleTransitionTimingFunction;

  declare type UnicodeBidiProperty = Globals | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext";

  declare type UserSelectProperty = Globals | "all" | "auto" | "contain" | "none" | "text";

  declare type VerticalAlignProperty<TLength> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

  declare type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

  declare type WhiteSpaceProperty = Globals | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

  declare type WidthProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

  declare type WillChangeProperty = Globals | AnimateableFeature | "auto";

  declare type WordBreakProperty = Globals | "break-all" | "keep-all" | "normal";

  declare type WordSpacingProperty<TLength> = Globals | LengthPercentage<TLength> | "normal";

  declare type WordWrapProperty = Globals | "break-word" | "normal";

  declare type WritingModeProperty = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

  declare type ZIndexProperty = Globals | "auto" | number;

  declare type AnimationProperty = Globals | SingleAnimation;

  declare type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;

  declare type BorderProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderBottomProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderColorProperty = Globals | Color;

  declare type BorderLeftProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderRadiusProperty<TLength> = Globals | LengthPercentage<TLength> | string;

  declare type BorderRightProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderStyleProperty = Globals | BrStyle;

  declare type BorderTopProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

  declare type BorderWidthProperty<TLength> = Globals | BrWidth<TLength>;

  declare type FlexProperty = Globals | "none" | string;

  declare type FontProperty = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

  declare type GridColumnProperty = Globals | GridLine | string;

  declare type GridRowProperty = Globals | GridLine | string;

  declare type GridTemplateProperty = Globals | "none" | string;

  declare type MarginProperty<TLength> = Globals | TLength | "auto" | string;

  declare type MaskProperty<TLength> = Globals | MaskLayer<TLength>;

  declare type PaddingProperty<TLength> = Globals | TLength | string;

  declare type TransitionProperty = Globals | SingleTransition;

  declare type MsOverflowStyleProperty = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

  declare type MozAppearanceProperty =
    | Globals
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

  declare type MozBindingProperty = Globals | "none" | string;

  declare type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

  declare type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

  declare type MozBorderRightColorsProperty = Globals | Color | "none" | string;

  declare type MozBorderTopColorsProperty = Globals | Color | "none" | string;

  declare type MozContextPropertiesProperty = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

  declare type MozFloatEdgeProperty = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

  declare type MozImageRegionProperty = Globals | "auto" | string;

  declare type MozOrientProperty = Globals | "block" | "horizontal" | "inline" | "vertical";

  declare type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

  declare type MozTextBlinkProperty = Globals | "blink" | "none";

  declare type MozUserFocusProperty = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

  declare type MozUserInputProperty = Globals | "auto" | "disabled" | "enabled" | "none";

  declare type MozUserModifyProperty = Globals | "read-only" | "read-write" | "write-only";

  declare type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

  declare type MozWindowShadowProperty = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

  declare type WebkitBoxReflectProperty<TLength> = Globals | TLength | "above" | "below" | "left" | "right" | string;

  declare type WebkitMaskAttachmentProperty = Globals | Attachment | string;

  declare type WebkitMaskClipProperty = Globals | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

  declare type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

  declare type WebkitMaskOriginProperty = Globals | "border" | "content" | "padding" | string;

  declare type WebkitMaskPositionProperty<TLength> = Globals | MaskPosition<TLength>;

  declare type WebkitMaskPositionXProperty<TLength> = Globals | LengthPercentage<TLength> | "center" | "left" | "right" | string;

  declare type WebkitMaskPositionYProperty<TLength> = Globals | LengthPercentage<TLength> | "bottom" | "center" | "top" | string;

  declare type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

  declare type WebkitMaskRepeatXProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

  declare type WebkitMaskRepeatYProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

  declare type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

  declare type WebkitTapHighlightColorProperty = Globals | Color;

  declare type WebkitTextFillColorProperty = Globals | Color;

  declare type WebkitTextStrokeColorProperty = Globals | Color;

  declare type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

  declare type WebkitTouchCalloutProperty = Globals | "default" | "none";

  declare type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;

  declare type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

  declare type CounterStyleSpeakAsProperty = "auto" | "bullets" | "numbers" | "spell-out" | "words" | string;

  declare type CounterStyleSystemProperty = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | string;

  declare type FontFaceFontDisplayProperty = "auto" | "block" | "fallback" | "optional" | "swap";

  declare type FontFaceFontFeatureSettingsProperty = "normal" | string;

  declare type FontFaceFontVariationSettingsProperty = "normal";

  declare type FontFaceFontStretchProperty =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded";

  declare type FontFaceFontStyleProperty = "italic" | "normal" | "oblique";

  declare type FontFaceFontWeightProperty = "bold" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

  declare type FontFaceFontVariantProperty =
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

  declare type PageBleedProperty<TLength> = TLength | "auto";

  declare type PageMarksProperty = "crop" | "cross" | "none" | string;

  declare type ViewportHeightProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportMaxZoomProperty = "auto" | string | number;

  declare type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportMinZoomProperty = "auto" | string | number;

  declare type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

  declare type ViewportUserZoomProperty = "fixed" | "zoom";

  declare type ViewportWidthProperty<TLength> = ViewportLength<TLength>;

  declare type ViewportZoomProperty = "auto" | string | number;

  declare type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

  declare type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  declare type SingleAnimationIterationCount = "infinite" | number;

  declare type SingleAnimationPlayState = "paused" | "running";

  declare type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear" | string;

  declare type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | string;

  declare type StepTimingFunction = "step-end" | "step-start" | string;

  declare type Attachment = "fixed" | "local" | "scroll";

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

  declare type Box = "border-box" | "content-box" | "padding-box";

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

  declare type BgImage = "none" | string;

  declare type BgPosition<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type LengthPercentage<TLength> = TLength | string;

  declare type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space";

  declare type BgSize<TLength> = LengthPercentage<TLength> | "auto" | "contain" | "cover";

  declare type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

  declare type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

  declare type NumberPercentage = string | number;

  declare type Shadow<TLength> = Color | TLength | "inset" | string;

  declare type GeometryBox = ShapeBox | "fill-box" | "stroke-box" | "view-box";

  declare type ShapeBox = Box | "margin-box";

  declare type ContentList = Quote | "contents" | string;

  declare type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

  declare type DisplayOutside = "block" | "inline" | "run-in";

  declare type DisplayInside = "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

  declare type DisplayListitem = "list-item" | string;

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

  declare type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  declare type MaskReference = "none" | string;

  declare type MaskingMode = "alpha" | "luminance" | "match-source";

  declare type Position<TLength> = LengthPercentage<TLength> | "bottom" | "center" | "left" | "right" | "top" | string;

  declare type ShadowT<TLength> = Color | TLength | string;

  declare type SingleTransitionProperty = "all" | string;

  declare type SingleTransitionTimingFunction = SingleTimingFunction;

  declare type AnimateableFeature = "contents" | "scroll-position" | string;

  declare type SingleAnimation =
    | SingleTimingFunction
    | SingleAnimationIterationCount
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | SingleAnimationPlayState
    | "none"
    | string;

  declare type FinalBgLayer<TLength> = BgImage | BgPosition<TLength> | RepeatStyle | Attachment | Box | string;

  declare type MaskLayer<TLength> = MaskReference | Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | string;

  declare type SingleTransition = SingleTransitionProperty | SingleTransitionTimingFunction | "none" | string;

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

  declare type ViewportLength<TLength> = LengthPercentage<TLength> | "auto";
}
