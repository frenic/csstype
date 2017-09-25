export as namespace CSS;
export interface StandardProperties {
  alignContent?: All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
  alignItems?: All | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignSelf?: All | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  animation?: All | string;
  animationDelay?: All | string;
  animationDirection?: All | SingleAnimationDirection;
  animationDuration?: All | string;
  animationFillMode?: All | SingleAnimationFillMode;
  animationIterationCount?: All | SingleAnimationIterationCount;
  animationName?: All | string;
  animationPlayState?: All | SingleAnimationPlayState;
  animationTimingFunction?: All | SingleTimingFunction;
  appearance?: All | "auto" | "none";
  azimuth?: All | string;
  backdropFilter?: All | "none" | string;
  backfaceVisibility?: All | "visible" | "hidden";
  background?: All | string;
  backgroundAttachment?: All | Attachment;
  backgroundBlendMode?: All | BlendMode;
  backgroundClip?: All | Box;
  backgroundColor?: All | Color;
  backgroundImage?: All | BgImage;
  backgroundOrigin?: All | Box;
  backgroundPosition?: All | string;
  backgroundPositionX?: All | string;
  backgroundPositionY?: All | string;
  backgroundRepeat?: All | string;
  backgroundSize?: All | string;
  blockSize?: All | string;
  border?: All | BrWidth | BrStyle | Color | string;
  borderBlockEnd?: All | string;
  borderBlockEndColor?: All | string;
  borderBlockEndStyle?: All | string;
  borderBlockEndWidth?: All | string;
  borderBlockStart?: All | string;
  borderBlockStartColor?: All | string;
  borderBlockStartStyle?: All | string;
  borderBlockStartWidth?: All | string;
  borderBottom?: All | BrWidth | BrStyle | Color | string;
  borderBottomColor?: All | Color;
  borderBottomLeftRadius?: All | string;
  borderBottomRightRadius?: All | string;
  borderBottomStyle?: All | BrStyle;
  borderBottomWidth?: All | BrWidth;
  borderCollapse?: All | "collapse" | "separate";
  borderColor?: All | Color;
  borderImage?: All | string;
  borderImageOutset?: All | string;
  borderImageRepeat?: All | string;
  borderImageSlice?: All | string;
  borderImageSource?: All | "none" | string;
  borderImageWidth?: All | string;
  borderInlineEnd?: All | string;
  borderInlineEndColor?: All | string;
  borderInlineEndStyle?: All | string;
  borderInlineEndWidth?: All | string;
  borderInlineStart?: All | string;
  borderInlineStartColor?: All | string;
  borderInlineStartStyle?: All | string;
  borderInlineStartWidth?: All | string;
  borderLeft?: All | BrWidth | BrStyle | Color | string;
  borderLeftColor?: All | Color;
  borderLeftStyle?: All | BrStyle;
  borderLeftWidth?: All | BrWidth;
  borderRadius?: All | string;
  borderRight?: All | BrWidth | BrStyle | Color | string;
  borderRightColor?: All | Color;
  borderRightStyle?: All | BrStyle;
  borderRightWidth?: All | BrWidth;
  borderSpacing?: All | string;
  borderStyle?: All | BrStyle;
  borderTop?: All | BrWidth | BrStyle | Color | string;
  borderTopColor?: All | Color;
  borderTopLeftRadius?: All | string;
  borderTopRightRadius?: All | string;
  borderTopStyle?: All | BrStyle;
  borderTopWidth?: All | BrWidth;
  borderWidth?: All | BrWidth;
  bottom?: All | "auto" | string;
  boxAlign?: All | "start" | "center" | "end" | "baseline" | "stretch";
  boxDecorationBreak?: All | "slice" | "clone";
  boxDirection?: All | "normal" | "reverse" | "inherit";
  boxFlex?: All | number;
  boxFlexGroup?: All | number;
  boxLines?: All | "single" | "multiple";
  boxOrdinalGroup?: All | number;
  boxOrient?: All | "horizontal" | "vertical" | "inline-axis" | "block-axis" | "inherit";
  boxPack?: All | "start" | "center" | "end" | "justify";
  boxShadow?: All | "none" | string;
  boxSizing?: All | "content-box" | "border-box";
  breakAfter?: All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";
  breakBefore?: All | "region" | "avoid" | "avoid-page" | "page" | "left" | "auto" | "recto" | "verso" | "avoid-column" | "column" | "avoid-region" | "right";
  breakInside?: All | "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
  captionSide?: All | "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
  caretColor?: All | Color | "auto";
  clear?: All | "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
  clip?: All | "auto" | string;
  clipPath?: All | string;
  color?: All | Color;
  columnCount?: All | "auto" | number;
  columnFill?: All | "auto" | "balance";
  columnGap?: All | "normal" | string;
  columnRule?: All | string;
  columnRuleColor?: All | Color;
  columnRuleStyle?: All | BrStyle;
  columnRuleWidth?: All | BrWidth;
  columnSpan?: All | "none" | "all";
  columnWidth?: All | "auto" | string;
  columns?: All | string;
  contain?: All | string;
  content?: All | string;
  counterIncrement?: All | string;
  counterReset?: All | string;
  cursor?: All | string;
  direction?: All | "ltr" | "rtl";
  display?: All | string;
  displayInside?: All | "auto" | "block" | "table" | "flex" | "grid" | "ruby";
  displayList?: All | "none" | "list-item";
  displayOutside?:
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
  emptyCells?: All | "show" | "hide";
  filter?: All | "none" | string;
  flex?: All | string;
  flexBasis?: All | "content" | string;
  flexDirection?: All | "row" | "row-reverse" | "column" | "column-reverse";
  flexFlow?: All | string;
  flexGrow?: All | number;
  flexShrink?: All | number;
  flexWrap?: All | "nowrap" | "wrap" | "wrap-reverse";
  float?: All | "left" | "right" | "none" | "inline-start" | "inline-end";
  font?: All | string;
  fontFamily?: All | string;
  fontFeatureSettings?: All | "normal" | string;
  fontKerning?: All | "auto" | "normal" | "none";
  fontLanguageOverride?: All | "normal" | string;
  fontVariationSettings?: All | string;
  fontSize?: All | AbsoluteSize | RelativeSize | string;
  fontSizeAdjust?: All | "none" | number;
  fontStretch?: All | "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";
  fontStyle?: All | "normal" | "italic" | "oblique";
  fontSynthesis?: All | string;
  fontVariant?: All | string;
  fontVariantAlternates?: All | string;
  fontVariantCaps?: All | "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "titling-caps";
  fontVariantEastAsian?: All | string;
  fontVariantLigatures?: All | string;
  fontVariantNumeric?: All | string;
  fontVariantPosition?: All | "normal" | "sub" | "super";
  fontWeight?: All | "900" | "bold" | "bolder" | "lighter" | "100" | "200" | "normal" | "400" | "500" | "600" | "700" | "800" | "300";
  grid?: All | string;
  gridArea?: All | string;
  gridAutoColumns?: All | string;
  gridAutoFlow?: All | string;
  gridAutoRows?: All | string;
  gridColumn?: All | string;
  gridColumnEnd?: All | string;
  gridColumnGap?: All | string;
  gridColumnStart?: All | string;
  gridGap?: All | string;
  gridRow?: All | string;
  gridRowEnd?: All | string;
  gridRowGap?: All | string;
  gridRowStart?: All | string;
  gridTemplate?: All | string;
  gridTemplateAreas?: All | "none" | string;
  gridTemplateColumns?: All | "none" | string;
  gridTemplateRows?: All | "none" | string;
  height?: All | string;
  hyphens?: All | "none" | "manual" | "auto";
  imageOrientation?: All | string;
  imageRendering?: All | "auto" | "crisp-edges" | "pixelated";
  imageResolution?: All | string;
  imeMode?: All | "auto" | "normal" | "active" | "inactive" | "disabled";
  initialLetter?: All | string;
  initialLetterAlign?: All | string;
  inlineSize?: All | string;
  isolation?: All | "auto" | "isolate";
  justifyContent?: All | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  left?: All | "auto" | string;
  letterSpacing?: All | "normal" | string;
  lineBreak?: All | "auto" | "loose" | "normal" | "strict";
  lineHeight?: All | "normal" | string | number;
  listStyle?: All | string;
  listStyleImage?: All | "none" | string;
  listStylePosition?: All | "inside" | "outside";
  listStyleType?: All | "none" | string;
  margin?: All | string;
  marginBlockEnd?: All | string;
  marginBlockStart?: All | string;
  marginBottom?: All | "auto" | string;
  marginInlineEnd?: All | string;
  marginInlineStart?: All | string;
  marginLeft?: All | "auto" | string;
  marginRight?: All | "auto" | string;
  marginTop?: All | "auto" | string;
  markerOffset?: All | "auto" | string;
  mask?: All | string;
  maskClip?: All | string;
  maskComposite?: All | CompositingOperator;
  maskImage?: All | MaskReference;
  maskMode?: All | MaskingMode;
  maskOrigin?: All | GeometryBox;
  maskPosition?: All | string;
  maskRepeat?: All | string;
  maskSize?: All | string;
  maskType?: All | "luminance" | "alpha";
  maxBlockSize?: All | string;
  maxHeight?: All | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  maxInlineSize?: All | string;
  maxWidth?: All | "none" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  minBlockSize?: All | string;
  minHeight?: All | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  minInlineSize?: All | string;
  minWidth?: All | "auto" | "max-content" | "min-content" | "fit-content" | "fill-available" | string;
  mixBlendMode?: All | BlendMode;
  objectFit?: All | "fill" | "contain" | "cover" | "none" | "scale-down";
  objectPosition?: All | string;
  offset?: All | string;
  offsetAnchor?: All | "auto" | string;
  offsetBlockEnd?: All | string;
  offsetBlockStart?: All | string;
  offsetInlineEnd?: All | string;
  offsetInlineStart?: All | string;
  offsetDistance?: All | string;
  offsetPath?: All | string;
  offsetPosition?: All | "auto" | string;
  offsetRotate?: All | string;
  opacity?: All | number;
  order?: All | number;
  orphans?: All | number;
  outline?: All | string;
  outlineColor?: All | Color | "invert";
  outlineOffset?: All | string;
  outlineStyle?: All | BrStyle | "auto";
  outlineWidth?: All | BrWidth;
  overflow?: All | "visible" | "hidden" | "scroll" | "auto";
  overflowClipBox?: All | "padding-box" | "content-box";
  overflowWrap?: All | "normal" | "break-word";
  overflowX?: All | "visible" | "hidden" | "scroll" | "auto";
  overflowY?: All | "visible" | "hidden" | "scroll" | "auto";
  padding?: All | string;
  paddingBlockEnd?: All | string;
  paddingBlockStart?: All | string;
  paddingBottom?: All | string;
  paddingInlineEnd?: All | string;
  paddingInlineStart?: All | string;
  paddingLeft?: All | string;
  paddingRight?: All | string;
  paddingTop?: All | string;
  pageBreakAfter?: All | "auto" | "always" | "avoid" | "left" | "right";
  pageBreakBefore?: All | "auto" | "always" | "avoid" | "left" | "right";
  pageBreakInside?: All | "auto" | "avoid";
  perspective?: All | "none" | string;
  perspectiveOrigin?: All | string;
  pointerEvents?: All | "inherit" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "auto" | "painted" | "fill" | "stroke" | "all" | "visible";
  position?: All | "static" | "relative" | "absolute" | "sticky" | "fixed";
  quotes?: All | string;
  resize?: All | "none" | "both" | "horizontal" | "vertical";
  right?: All | "auto" | string;
  rubyAlign?: All | "start" | "center" | "space-between" | "space-around";
  rubyMerge?: All | "separate" | "collapse" | "auto";
  rubyPosition?: All | "over" | "under" | "inter-character";
  scrollBehavior?: All | "auto" | "smooth";
  scrollSnapCoordinate?: All | "none" | string;
  scrollSnapDestination?: All | string;
  scrollSnapPointsX?: All | "none" | string;
  scrollSnapPointsY?: All | "none" | string;
  scrollSnapType?: All | "none" | "mandatory" | "proximity";
  scrollSnapTypeX?: All | "none" | "mandatory" | "proximity";
  scrollSnapTypeY?: All | "none" | "mandatory" | "proximity";
  shapeImageThreshold?: All | number;
  shapeMargin?: All | string;
  shapeOutside?: All | ShapeBox | "none" | string;
  tabSize?: All | string | number;
  tableLayout?: All | "auto" | "fixed";
  textAlign?: All | "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
  textAlignLast?: All | "auto" | "start" | "end" | "left" | "right" | "center" | "justify";
  textCombineUpright?: All | string;
  textDecoration?: All | string;
  textDecorationColor?: All | Color;
  textDecorationLine?: All | string;
  textDecorationSkip?: All | string;
  textDecorationStyle?: All | "solid" | "double" | "dotted" | "dashed" | "wavy";
  textEmphasis?: All | string;
  textEmphasisColor?: All | Color;
  textEmphasisPosition?: All | string;
  textEmphasisStyle?: All | string;
  textIndent?: All | string;
  textJustify?: All | "auto" | "inter-character" | "inter-word" | "none";
  textOrientation?: All | "mixed" | "upright" | "sideways";
  textOverflow?: All | string;
  textRendering?: All | "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";
  textShadow?: All | "none" | string;
  textSizeAdjust?: All | "none" | "auto" | string;
  textTransform?: All | "none" | "capitalize" | "uppercase" | "lowercase" | "full-width";
  textUnderlinePosition?: All | string;
  top?: All | "auto" | string;
  touchAction?: All | string;
  transform?: All | "none" | string;
  transformBox?: All | "border-box" | "fill-box" | "view-box";
  transformOrigin?: All | string;
  transformStyle?: All | "flat" | "preserve-3d";
  transition?: All | string;
  transitionDelay?: All | string;
  transitionDuration?: All | string;
  transitionProperty?: All | SingleTransitionProperty | "none";
  transitionTimingFunction?: All | SingleTransitionTimingFunction;
  unicodeBidi?: All | "normal" | "embed" | "isolate" | "bidi-override" | "isolate-override" | "plaintext";
  userSelect?: All | "auto" | "text" | "none" | "contain" | "all";
  verticalAlign?: All | "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | string;
  visibility?: All | "visible" | "hidden" | "collapse";
  whiteSpace?: All | "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";
  widows?: All | number;
  width?: All | string;
  willChange?: All | AnimateableFeature | "auto";
  wordBreak?: All | "normal" | "break-all" | "keep-all";
  wordSpacing?: All | "normal" | string;
  wordWrap?: All | "normal" | "break-word";
  writingMode?: All | "horizontal-tb" | "vertical-rl" | "vertical-lr" | "sideways-rl" | "sideways-lr";
  zIndex?: All | "auto" | number;
}
export interface VendorProperties {
  msOverflowStyle?: All | "auto" | "none" | "scrollbar" | "-ms-autohiding-scrollbar";
  mozAppearance?:
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
  mozBinding?: All | "none" | string;
  mozBorderBottomColors?: All | string;
  mozBorderLeftColors?: All | string;
  mozBorderRightColors?: All | string;
  mozBorderTopColors?: All | string;
  mozContextProperties?: All | string;
  mozFloatEdge?: All | "border-box" | "content-box" | "margin-box" | "padding-box";
  mozForceBrokenImageIcon?: All | number;
  mozImageRegion?: All | "auto" | string;
  mozOrient?: All | "inline" | "block" | "horizontal" | "vertical";
  mozOutlineRadius?: All | string;
  mozOutlineRadiusBottomleft?: All | string;
  mozOutlineRadiusBottomright?: All | string;
  mozOutlineRadiusTopleft?: All | string;
  mozOutlineRadiusTopright?: All | string;
  mozStackSizing?: All | "ignore" | "stretch-to-fit";
  mozTextBlink?: All | "none" | "blink";
  mozUserFocus?: All | "ignore" | "normal" | "select-after" | "select-before" | "select-menu" | "select-same" | "select-all" | "none";
  mozUserInput?: All | "auto" | "none" | "enabled" | "disabled";
  mozUserModify?: All | "read-only" | "read-write" | "write-only";
  mozWindowShadow?: All | "default" | "menu" | "tooltip" | "sheet" | "none";
  webkitBorderBefore?: All | string;
  webkitBorderBeforeColor?: All | string;
  webkitBorderBeforeStyle?: All | string;
  webkitBorderBeforeWidth?: All | string;
  webkitBoxReflect?: All | string;
  webkitMask?: All | string;
  webkitMaskAttachment?: All | string;
  webkitMaskClip?: All | string;
  webkitMaskComposite?: All | string;
  webkitMaskImage?: All | string;
  webkitMaskOrigin?: All | string;
  webkitMaskPosition?: All | string;
  webkitMaskPositionX?: All | string;
  webkitMaskPositionY?: All | string;
  webkitMaskRepeat?: All | string;
  webkitMaskRepeatX?: All | "repeat" | "no-repeat" | "space" | "round";
  webkitMaskRepeatY?: All | "repeat" | "no-repeat" | "space" | "round";
  webkitTapHighlightColor?: All | Color;
  webkitTextFillColor?: All | Color;
  webkitTextStroke?: All | Color | string;
  webkitTextStrokeColor?: All | Color;
  webkitTextStrokeWidth?: All | string;
  webkitTouchCallout?: All | "default" | "none";
}
export interface Properties extends StandardProperties, VendorProperties {}
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
type BrWidth = "thin" | "medium" | "thick" | string;
type BrStyle = "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
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
