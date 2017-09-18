declare namespace CSS {
  export type AlignContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  export type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  export type AlignSelf = "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  export type All = "initial" | "inherit" | "unset";
  export type Animation = string;
  export type AnimationDelay = string;
  export type AnimationDirection = TSingleAnimationDirection;
  export type AnimationDuration = string;
  export type AnimationFillMode = TSingleAnimationFillMode;
  export type AnimationIterationCount = TSingleAnimationIterationCount;
  export type AnimationName = string;
  export type AnimationPlayState = TSingleAnimationPlayState;
  export type AnimationTimingFunction = TSingleTimingFunction;
  export type Appearance = "auto" | "none";
  export type Azimuth = string;
  export type BackdropFilter = "none" | string;
  export type BackfaceVisibility = "visible" | "hidden";
  export type Background = string;
  export type BackgroundAttachment = TAttachment;
  export type BackgroundBlendMode = TBlendMode;
  export type BackgroundClip = TBox;
  export type BackgroundColor = TColor;
  export type BackgroundImage = TBgImage;
  export type BackgroundOrigin = TBox;
  export type BackgroundPosition = string;
  export type BackgroundPositionX = string;
  export type BackgroundPositionY = string;
  export type BackgroundRepeat = string;
  export type BackgroundSize = string;
  export type BlockSize = string;
  export type Border = TBrWidth | TBrStyle | TColor | string;
  export type BorderBlockEnd = string;
  export type BorderBlockEndColor = string;
  export type BorderBlockEndStyle = string;
  export type BorderBlockEndWidth = string;
  export type BorderBlockStart = string;
  export type BorderBlockStartColor = string;
  export type BorderBlockStartStyle = string;
  export type BorderBlockStartWidth = string;
  export type BorderBottom = TBrWidth | TBrStyle | TColor | string;
  export type BorderBottomColor = TColor;
  export type BorderBottomLeftRadius = string;
  export type BorderBottomRightRadius = string;
  export type BorderBottomStyle = TBrStyle;
  export type BorderBottomWidth = TBrWidth;
  export type BorderCollapse = "collapse" | "separate";
  export type BorderColor = TColor;
  export type BorderImage = string;
  export type BorderImageOutset = string;
  export type BorderImageRepeat = string;
  export type BorderImageSlice = string;
  export type BorderImageSource = "none" | string;
  export type BorderImageWidth = string;
  export type BorderInlineEnd = string;
  export type BorderInlineEndColor = string;
  export type BorderInlineEndStyle = string;
  export type BorderInlineEndWidth = string;
  export type BorderInlineStart = string;
  export type BorderInlineStartColor = string;
  export type BorderInlineStartStyle = string;
  export type BorderInlineStartWidth = string;
  export type BorderLeft = TBrWidth | TBrStyle | TColor | string;
  export type BorderLeftColor = TColor;
  export type BorderLeftStyle = TBrStyle;
  export type BorderLeftWidth = TBrWidth;
  export type BorderRadius = string;
  export type BorderRight = TBrWidth | TBrStyle | TColor | string;
  export type BorderRightColor = TColor;
  export type BorderRightStyle = TBrStyle;
  export type BorderRightWidth = TBrWidth;
  export type BorderSpacing = string;
  export type BorderStyle = TBrStyle;
  export type BorderTop = TBrWidth | TBrStyle | TColor | string;
  export type BorderTopColor = TColor;
  export type BorderTopLeftRadius = string;
  export type BorderTopRightRadius = string;
  export type BorderTopStyle = TBrStyle;
  export type BorderTopWidth = TBrWidth;
  export type BorderWidth = TBrWidth;
  export type Bottom = "auto" | string;
  export type BoxAlign = "start" | "center" | "end" | "baseline" | "stretch";
  export type BoxDecorationBreak = "slice" | "clone";
  export type BoxDirection = "normal" | "reverse" | "inherit";
  export type BoxFlex = number;
  export type BoxFlexGroup = number;
  export type BoxLines = "single" | "multiple";
  export type BoxOrdinalGroup = number;
  export type BoxOrient = "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";
  export type BoxPack = "start" | "center" | "end" | "justify";
  export type BoxShadow = "none" | string;
  export type BoxSizing = "content-box" | "border-box";
  export type BreakAfter =
    | "recto"
    | "auto"
    | "avoid-page"
    | "page"
    | "left"
    | "right"
    | "avoid"
    | "verso"
    | "avoid-column"
    | "column"
    | "avoid-region"
    | "region";
  export type BreakBefore =
    | "recto"
    | "auto"
    | "avoid-page"
    | "page"
    | "left"
    | "right"
    | "avoid"
    | "verso"
    | "avoid-column"
    | "column"
    | "avoid-region"
    | "region";
  export type BreakInside = "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
  export type CaptionSide = "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
  export type CaretColor = TColor | "auto";
  export type Clear = "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
  export type Clip = "auto" | string;
  export type ClipPath = string;
  export type Color = TColor;
  export type ColumnCount = "auto" | number;
  export type ColumnFill = "auto" | "balance";
  export type ColumnGap = "normal" | string;
  export type ColumnRule = string;
  export type ColumnRuleColor = TColor;
  export type ColumnRuleStyle = TBrStyle;
  export type ColumnRuleWidth = TBrWidth;
  export type ColumnSpan = "none" | "all";
  export type ColumnWidth = "auto" | string;
  export type Columns = string;
  export type Contain = string;
  export type Content = string;
  export type CounterIncrement = string;
  export type CounterReset = string;
  export type Cursor = string;
  export type Direction = "ltr" | "rtl";
  export type Display = string;
  export type DisplayInside = "auto" | "block" | "table" | "flex" | "grid" | "ruby";
  export type DisplayList = "none" | "list-item";
  export type DisplayOutside =
    | "table-row"
    | "block-level"
    | "run-in"
    | "contents"
    | "none"
    | "table-row-group"
    | "table-header-group"
    | "table-footer-group"
    | "inline-level"
    | "table-cell"
    | "table-column-group"
    | "table-column"
    | "table-caption"
    | "ruby-base"
    | "ruby-text"
    | "ruby-base-container"
    | "ruby-text-container";
  export type EmptyCells = "show" | "hide";
  export type Filter = "none" | string;
  export type Flex = string;
  export type FlexBasis = "content" | string;
  export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
  export type FlexFlow = string;
  export type FlexGrow = number;
  export type FlexShrink = number;
  export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
  export type Float = "left" | "right" | "none" | "inline-start" | "inline-end";
  export type Font = string;
  export type FontFamily = string;
  export type FontFeatureSettings = "normal" | string;
  export type FontKerning = "auto" | "normal" | "none";
  export type FontLanguageOverride = "normal" | string;
  export type FontVariationSettings = string;
  export type FontSize = TAbsoluteSize | TRelativeSize | string;
  export type FontSizeAdjust = "none" | number;
  export type FontStretch =
    | "normal"
    | "ultra-condensed"
    | "extra-condensed"
    | "condensed"
    | "semi-condensed"
    | "semi-expanded"
    | "expanded"
    | "extra-expanded"
    | "ultra-expanded";
  export type FontStyle = "normal" | "italic" | "oblique";
  export type FontSynthesis = string;
  export type FontVariant = string;
  export type FontVariantAlternates = string;
  export type FontVariantCaps =
    | "normal"
    | "small-caps"
    | "all-small-caps"
    | "petite-caps"
    | "all-petite-caps"
    | "unicase"
    | "titling-caps";
  export type FontVariantEastAsian = string;
  export type FontVariantLigatures = string;
  export type FontVariantNumeric = string;
  export type FontVariantPosition = "normal" | "sub" | "super";
  export type FontWeight =
    | "300"
    | "normal"
    | "bolder"
    | "lighter"
    | "100"
    | "200"
    | "bold"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  export type Grid = string;
  export type GridArea = string;
  export type GridAutoColumns = string;
  export type GridAutoFlow = string;
  export type GridAutoRows = string;
  export type GridColumn = string;
  export type GridColumnEnd = string;
  export type GridColumnGap = string;
  export type GridColumnStart = string;
  export type GridGap = string;
  export type GridRow = string;
  export type GridRowEnd = string;
  export type GridRowGap = string;
  export type GridRowStart = string;
  export type GridTemplate = string;
  export type GridTemplateAreas = "none" | string;
  export type GridTemplateColumns = "none" | string;
  export type GridTemplateRows = "none" | string;
  export type Height = string;
  export type Hyphens = "none" | "manual" | "auto";
  export type ImageOrientation = string;
  export type ImageRendering = "auto" | "crisp-edges" | "pixelated";
  export type ImageResolution = string;
  export type ImeMode = "auto" | "normal" | "active" | "inactive" | "disabled";
  export type InitialLetter = string;
  export type InitialLetterAlign = string;
  export type InlineSize = string;
  export type Isolation = "auto" | "isolate";
  export type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  export type Left = "auto" | string;
  export type LetterSpacing = "normal" | string;
  export type LineBreak = "auto" | "loose" | "normal" | "strict";
  export type LineHeight = "normal" | string | number;
  export type ListStyle = string;
  export type ListStyleImage = "none" | string;
  export type ListStylePosition = "inside" | "outside";
  export type ListStyleType = "none" | string;
  export type Margin = string;
  export type MarginBlockEnd = string;
  export type MarginBlockStart = string;
  export type MarginBottom = "auto" | string;
  export type MarginInlineEnd = string;
  export type MarginInlineStart = string;
  export type MarginLeft = "auto" | string;
  export type MarginRight = "auto" | string;
  export type MarginTop = "auto" | string;
  export type MarkerOffset = "auto" | string;
  export type Mask = string;
  export type MaskClip = string;
  export type MaskComposite = TCompositingOperator;
  export type MaskImage = TMaskReference;
  export type MaskMode = TMaskingMode;
  export type MaskOrigin = TGeometryBox;
  export type MaskPosition = string;
  export type MaskRepeat = string;
  export type MaskSize = string;
  export type MaskType = "luminance" | "alpha";
  export type MaxBlockSize = string;
  export type MaxHeight = "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  export type MaxInlineSize = string;
  export type MaxWidth = "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  export type MinBlockSize = string;
  export type MinHeight = "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  export type MinInlineSize = string;
  export type MinWidth = "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  export type MixBlendMode = TBlendMode;
  export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";
  export type ObjectPosition = string;
  export type Offset = string;
  export type OffsetAnchor = "auto" | string;
  export type OffsetBlockEnd = string;
  export type OffsetBlockStart = string;
  export type OffsetInlineEnd = string;
  export type OffsetInlineStart = string;
  export type OffsetDistance = string;
  export type OffsetPath = string;
  export type OffsetPosition = "auto" | string;
  export type OffsetRotate = string;
  export type Opacity = number;
  export type Order = number;
  export type Orphans = number;
  export type Outline = string;
  export type OutlineColor = TColor | "invert";
  export type OutlineOffset = string;
  export type OutlineStyle = TBrStyle | "auto";
  export type OutlineWidth = TBrWidth;
  export type Overflow = "visible" | "hidden" | "scroll" | "auto";
  export type OverflowClipBox = "padding-box" | "content-box";
  export type OverflowWrap = "normal" | "break-word";
  export type OverflowX = "visible" | "hidden" | "scroll" | "auto";
  export type OverflowY = "visible" | "hidden" | "scroll" | "auto";
  export type Padding = string;
  export type PaddingBlockEnd = string;
  export type PaddingBlockStart = string;
  export type PaddingBottom = string;
  export type PaddingInlineEnd = string;
  export type PaddingInlineStart = string;
  export type PaddingLeft = string;
  export type PaddingRight = string;
  export type PaddingTop = string;
  export type PageBreakAfter = "auto" | "always" | "avoid" | "left" | "right";
  export type PageBreakBefore = "auto" | "always" | "avoid" | "left" | "right";
  export type PageBreakInside = "auto" | "avoid";
  export type Perspective = "none" | string;
  export type PerspectiveOrigin = string;
  export type PointerEvents =
    | "visible"
    | "auto"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "none"
    | "painted"
    | "fill"
    | "stroke"
    | "all"
    | "inherit";
  export type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";
  export type Quotes = string;
  export type Resize = "none" | "both" | "horizontal" | "vertical";
  export type Right = "auto" | string;
  export type RubyAlign = "start" | "center" | "space-between" | "space-around";
  export type RubyMerge = "separate" | "collapse" | "auto";
  export type RubyPosition = "over" | "under" | "inter-character";
  export type ScrollBehavior = "auto" | "smooth";
  export type ScrollSnapCoordinate = "none" | string;
  export type ScrollSnapDestination = string;
  export type ScrollSnapPointsX = "none" | string;
  export type ScrollSnapPointsY = "none" | string;
  export type ScrollSnapType = "none" | "mandatory" | "proximity";
  export type ScrollSnapTypeX = "none" | "mandatory" | "proximity";
  export type ScrollSnapTypeY = "none" | "mandatory" | "proximity";
  export type ShapeImageThreshold = number;
  export type ShapeMargin = string;
  export type ShapeOutside = TShapeBox | "none" | string;
  export type TabSize = string | number;
  export type TableLayout = "auto" | "fixed";
  export type TextAlign = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  export type TextAlignLast = "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
  export type TextCombineUpright = string;
  export type TextDecoration = string;
  export type TextDecorationColor = TColor;
  export type TextDecorationLine = string;
  export type TextDecorationSkip = string;
  export type TextDecorationStyle = "solid" | "double" | "dotted" | "dashed" | "wavy";
  export type TextEmphasis = string;
  export type TextEmphasisColor = TColor;
  export type TextEmphasisPosition = string;
  export type TextEmphasisStyle = string;
  export type TextIndent = string;
  export type TextJustify = "auto" | "inter-character" | "inter-word" | "none";
  export type TextOrientation = "mixed" | "upright" | "sideways";
  export type TextOverflow = string;
  export type TextRendering = "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";
  export type TextShadow = "none" | string;
  export type TextSizeAdjust = "none" | "auto" | string;
  export type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";
  export type TextUnderlinePosition = string;
  export type Top = "auto" | string;
  export type TouchAction = string;
  export type Transform = "none" | string;
  export type TransformBox = "border-box" | "fill-box" | "view-box";
  export type TransformOrigin = string;
  export type TransformStyle = "flat" | "preserve-3d";
  export type Transition = string;
  export type TransitionDelay = string;
  export type TransitionDuration = string;
  export type TransitionProperty = TSingleTransitionProperty | "none";
  export type TransitionTimingFunction = TSingleTransitionTimingFunction;
  export type UnicodeBidi = "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";
  export type UserSelect = "auto" | "text" | "none" | "contain" | "all";
  export type VerticalAlign =
    | "baseline"
    | "sub"
    | "super"
    | "text-top"
    | "text-bottom"
    | "middle"
    | "top"
    | "bottom"
    | string;
  export type Visibility = "visible" | "hidden" | "collapse";
  export type WhiteSpace = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";
  export type Widows = number;
  export type Width = string;
  export type WillChange = TAnimateableFeature | "auto";
  export type WordBreak = "normal" | "break-all" | "keep-all";
  export type WordSpacing = "normal" | string;
  export type WordWrap = "normal" | "break-word";
  export type WritingMode = "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
  export type ZIndex = "auto" | number;
  export interface StandardProperties {
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    alignSelf?: AlignSelf;
    all?: All;
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
    border?: Border;
    borderBlockEnd?: BorderBlockEnd;
    borderBlockEndColor?: BorderBlockEndColor;
    borderBlockEndStyle?: BorderBlockEndStyle;
    borderBlockEndWidth?: BorderBlockEndWidth;
    borderBlockStart?: BorderBlockStart;
    borderBlockStartColor?: BorderBlockStartColor;
    borderBlockStartStyle?: BorderBlockStartStyle;
    borderBlockStartWidth?: BorderBlockStartWidth;
    borderBottom?: BorderBottom;
    borderBottomColor?: BorderBottomColor;
    borderBottomLeftRadius?: BorderBottomLeftRadius;
    borderBottomRightRadius?: BorderBottomRightRadius;
    borderBottomStyle?: BorderBottomStyle;
    borderBottomWidth?: BorderBottomWidth;
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
    borderLeft?: BorderLeft;
    borderLeftColor?: BorderLeftColor;
    borderLeftStyle?: BorderLeftStyle;
    borderLeftWidth?: BorderLeftWidth;
    borderRadius?: BorderRadius;
    borderRight?: BorderRight;
    borderRightColor?: BorderRightColor;
    borderRightStyle?: BorderRightStyle;
    borderRightWidth?: BorderRightWidth;
    borderSpacing?: BorderSpacing;
    borderStyle?: BorderStyle;
    borderTop?: BorderTop;
    borderTopColor?: BorderTopColor;
    borderTopLeftRadius?: BorderTopLeftRadius;
    borderTopRightRadius?: BorderTopRightRadius;
    borderTopStyle?: BorderTopStyle;
    borderTopWidth?: BorderTopWidth;
    borderWidth?: BorderWidth;
    bottom?: Bottom;
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
    columnGap?: ColumnGap;
    columnRule?: ColumnRule;
    columnRuleColor?: ColumnRuleColor;
    columnRuleStyle?: ColumnRuleStyle;
    columnRuleWidth?: ColumnRuleWidth;
    columnSpan?: ColumnSpan;
    columnWidth?: ColumnWidth;
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
    fontSize?: FontSize;
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
    gridColumnGap?: GridColumnGap;
    gridColumnStart?: GridColumnStart;
    gridGap?: GridGap;
    gridRow?: GridRow;
    gridRowEnd?: GridRowEnd;
    gridRowGap?: GridRowGap;
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
    left?: Left;
    letterSpacing?: LetterSpacing;
    lineBreak?: LineBreak;
    lineHeight?: LineHeight;
    listStyle?: ListStyle;
    listStyleImage?: ListStyleImage;
    listStylePosition?: ListStylePosition;
    listStyleType?: ListStyleType;
    margin?: Margin;
    marginBlockEnd?: MarginBlockEnd;
    marginBlockStart?: MarginBlockStart;
    marginBottom?: MarginBottom;
    marginInlineEnd?: MarginInlineEnd;
    marginInlineStart?: MarginInlineStart;
    marginLeft?: MarginLeft;
    marginRight?: MarginRight;
    marginTop?: MarginTop;
    markerOffset?: MarkerOffset;
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
    maxHeight?: MaxHeight;
    maxInlineSize?: MaxInlineSize;
    maxWidth?: MaxWidth;
    minBlockSize?: MinBlockSize;
    minHeight?: MinHeight;
    minInlineSize?: MinInlineSize;
    minWidth?: MinWidth;
    mixBlendMode?: MixBlendMode;
    objectFit?: ObjectFit;
    objectPosition?: ObjectPosition;
    offset?: Offset;
    offsetAnchor?: OffsetAnchor;
    offsetBlockEnd?: OffsetBlockEnd;
    offsetBlockStart?: OffsetBlockStart;
    offsetInlineEnd?: OffsetInlineEnd;
    offsetInlineStart?: OffsetInlineStart;
    offsetDistance?: OffsetDistance;
    offsetPath?: OffsetPath;
    offsetPosition?: OffsetPosition;
    offsetRotate?: OffsetRotate;
    opacity?: Opacity;
    order?: Order;
    orphans?: Orphans;
    outline?: Outline;
    outlineColor?: OutlineColor;
    outlineOffset?: OutlineOffset;
    outlineStyle?: OutlineStyle;
    outlineWidth?: OutlineWidth;
    overflow?: Overflow;
    overflowClipBox?: OverflowClipBox;
    overflowWrap?: OverflowWrap;
    overflowX?: OverflowX;
    overflowY?: OverflowY;
    padding?: Padding;
    paddingBlockEnd?: PaddingBlockEnd;
    paddingBlockStart?: PaddingBlockStart;
    paddingBottom?: PaddingBottom;
    paddingInlineEnd?: PaddingInlineEnd;
    paddingInlineStart?: PaddingInlineStart;
    paddingLeft?: PaddingLeft;
    paddingRight?: PaddingRight;
    paddingTop?: PaddingTop;
    pageBreakAfter?: PageBreakAfter;
    pageBreakBefore?: PageBreakBefore;
    pageBreakInside?: PageBreakInside;
    perspective?: Perspective;
    perspectiveOrigin?: PerspectiveOrigin;
    pointerEvents?: PointerEvents;
    position?: Position;
    quotes?: Quotes;
    resize?: Resize;
    right?: Right;
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
    shapeMargin?: ShapeMargin;
    shapeOutside?: ShapeOutside;
    tabSize?: TabSize;
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
    top?: Top;
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
    verticalAlign?: VerticalAlign;
    visibility?: Visibility;
    whiteSpace?: WhiteSpace;
    widows?: Widows;
    width?: Width;
    willChange?: WillChange;
    wordBreak?: WordBreak;
    wordSpacing?: WordSpacing;
    wordWrap?: WordWrap;
    writingMode?: WritingMode;
    zIndex?: ZIndex;
  }
  export type MsOverflowStyle = "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";
  export type MozAppearance =
    | "scrollbarthumb-horizontal"
    | "none"
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
    | "scrollbarbutton-up"
    | "button"
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
    | "-moz-window-titlebar-maximized";
  export type MozBinding = "none" | string;
  export type MozBorderBottomColors = string;
  export type MozBorderLeftColors = string;
  export type MozBorderRightColors = string;
  export type MozBorderTopColors = string;
  export type MozContextProperties = string;
  export type MozFloatEdge = "border-box" | "content-box" | "margin-box" | "padding-box";
  export type MozForceBrokenImageIcon = number;
  export type MozImageRegion = "auto" | string;
  export type MozOrient = "inline" | "block" | "horizontal" | "vertical";
  export type MozOutlineRadius = string;
  export type MozOutlineRadiusBottomleft = string;
  export type MozOutlineRadiusBottomright = string;
  export type MozOutlineRadiusTopleft = string;
  export type MozOutlineRadiusTopright = string;
  export type MozStackSizing = "ignore" | "stretch-to-fit";
  export type MozTextBlink = "none" | "blink";
  export type MozUserFocus =
    | "ignore"
    | "normal"
    | "select-after"
    | "select-before"
    | "select-menu"
    | "select-same"
    | "select-all"
    | "none";
  export type MozUserInput = "auto" | "none" | "enabled" | "disabled";
  export type MozUserModify = "read-only" | "read-write" | "write-only";
  export type MozWindowShadow = "default" | "menu" | "tooltip" | "sheet" | "none";
  export type WebkitBorderBefore = string;
  export type WebkitBorderBeforeColor = string;
  export type WebkitBorderBeforeStyle = string;
  export type WebkitBorderBeforeWidth = string;
  export type WebkitBoxReflect = string;
  export type WebkitMask = string;
  export type WebkitMaskAttachment = string;
  export type WebkitMaskClip = string;
  export type WebkitMaskComposite = string;
  export type WebkitMaskImage = string;
  export type WebkitMaskOrigin = string;
  export type WebkitMaskPosition = string;
  export type WebkitMaskPositionX = string;
  export type WebkitMaskPositionY = string;
  export type WebkitMaskRepeat = string;
  export type WebkitMaskRepeatX = "repeat" | "no-repeat" | "space" | "round";
  export type WebkitMaskRepeatY = "repeat" | "no-repeat" | "space" | "round";
  export type WebkitTapHighlightColor = TColor;
  export type WebkitTextFillColor = TColor;
  export type WebkitTextStroke = TColor | string;
  export type WebkitTextStrokeColor = TColor;
  export type WebkitTextStrokeWidth = string;
  export type WebkitTouchCallout = "default" | "none";
  export interface VendorProperties {
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
    webkitTextStroke?: WebkitTextStroke;
    webkitTextStrokeColor?: WebkitTextStrokeColor;
    webkitTextStrokeWidth?: WebkitTextStrokeWidth;
    webkitTouchCallout?: WebkitTouchCallout;
  }
  export interface Properties extends StandardProperties, VendorProperties {}
  type TSingleAnimationDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
  type TSingleAnimationFillMode = "none" | "forwards" | "backwards" | "both";
  type TSingleAnimationIterationCount = "infinite" | number;
  type TSingleAnimationPlayState = "running" | "paused";
  type TSingleTimingFunction = TStepTimingFunction | "linear" | string;
  type TStepTimingFunction = "step-start" | "step-end" | string;
  type TAttachment = "scroll" | "fixed" | "local";
  type TBlendMode =
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
  type TBox = "border-box" | "padding-box" | "content-box";
  type TColor = TNamedColor | TDeprecatedSystemColor | "currentcolor" | string;
  type TNamedColor =
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
  type TDeprecatedSystemColor =
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
  type TBgImage = "none" | string;
  type TBrWidth = "thin" | "medium" | "thick" | string;
  type TBrStyle =
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset";
  type TAbsoluteSize = "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large";
  type TRelativeSize = "larger" | "smaller";
  type TCompositingOperator = "add" | "subtract" | "intersect" | "exclude";
  type TMaskReference = "none" | string;
  type TMaskingMode = "alpha" | "luminance" | "match-source";
  type TGeometryBox = TShapeBox | "fill-box" | "stroke-box" | "view-box";
  type TShapeBox = TBox | "margin-box";
  type TSingleTransitionProperty = "all" | string;
  type TSingleTransitionTimingFunction = TSingleTimingFunction;
  type TAnimateableFeature = "scroll-position" | "contents" | string;
}
