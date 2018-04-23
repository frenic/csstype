export interface StandardLonghandProperties<TLength = string | 0> {
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty;
  /**
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength>;
  blockOverflow?: BlockOverflowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty;
  /**
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  /**
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  boxAlign?: BoxAlignProperty;
  /**
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: BoxDecorationBreakProperty;
  boxFlexGroup?: GlobalsNumber;
  boxLines?: BoxLinesProperty;
  boxOrdinalGroup?: GlobalsNumber;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  colorAdjust?: ColorAdjustProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty;
  /**
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty;
  /**
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength>;
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber;
  /**
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty;
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty;
  /**
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  /**
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  hangingPunctuation?: HangingPunctuationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty;
  imageResolution?: ImageResolutionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty;
  initialLetterAlign?: InitialLetterAlignProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength>;
  lineHeightStep?: LineHeightStepProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength>;
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | n/a  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: MarginTopProperty<TLength>;
  maskBorderMode?: MaskBorderModeProperty;
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  maskBorderRepeat?: MaskBorderRepeatProperty;
  maskBorderSlice?: MaskBorderSliceProperty;
  maskBorderSource?: MaskBorderSourceProperty;
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty;
  /**
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty;
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength>;
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty;
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  maxLines?: MaxLinesProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength>;
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength>;
  offsetAnchor?: OffsetAnchorProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength>;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength>;
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty;
  offsetPosition?: OffsetPositionProperty<TLength>;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty;
  overflowAnchor?: OverflowAnchorProperty;
  overflowBlock?: OverflowBlockProperty;
  overflowClipBox?: OverflowClipBoxProperty;
  overflowInline?: OverflowInlineProperty;
  /**
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength>;
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty;
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  rowGap?: RowGapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty;
  rubyMerge?: RubyMergeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty;
  /**
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty;
  /**
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty;
  /**
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength>;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty;
  /**
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty;
  /**
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty;
  zoom?: ZoomProperty;
}

export interface StandardShorthandProperties<TLength = string | 0> {
  all?: Globals;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty;
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty;
  lineClamp?: LineClampProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty;
}

export interface StandardProperties<TLength = string | 0> extends StandardLonghandProperties<TLength>, StandardShorthandProperties<TLength> {}

export interface VendorLonghandProperties<TLength = string | 0> {
  MozAnimationDelay?: GlobalsString;
  MozAnimationDirection?: AnimationDirectionProperty;
  MozAnimationDuration?: GlobalsString;
  MozAnimationFillMode?: AnimationFillModeProperty;
  MozAnimationIterationCount?: AnimationIterationCountProperty;
  MozAnimationName?: AnimationNameProperty;
  MozAnimationPlayState?: AnimationPlayStateProperty;
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty;
  MozAppearance?: MozAppearanceProperty;
  MozBackfaceVisibility?: BackfaceVisibilityProperty;
  MozBinding?: MozBindingProperty;
  MozBorderBottomColors?: MozBorderBottomColorsProperty;
  MozBorderEndColor?: BorderInlineEndColorProperty;
  MozBorderEndStyle?: BorderInlineEndStyleProperty;
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength>;
  MozBorderLeftColors?: MozBorderLeftColorsProperty;
  MozBorderRightColors?: MozBorderRightColorsProperty;
  MozBorderStartColor?: BorderInlineStartColorProperty;
  MozBorderStartStyle?: BorderInlineStartStyleProperty;
  MozBorderTopColors?: MozBorderTopColorsProperty;
  MozBoxSizing?: BoxSizingProperty;
  MozColumnCount?: ColumnCountProperty;
  MozColumnFill?: ColumnFillProperty;
  MozColumnGap?: ColumnGapProperty<TLength>;
  MozColumnRuleColor?: ColumnRuleColorProperty;
  MozColumnRuleStyle?: ColumnRuleStyleProperty;
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  MozColumnWidth?: ColumnWidthProperty<TLength>;
  MozContextProperties?: MozContextPropertiesProperty;
  MozFloatEdge?: MozFloatEdgeProperty;
  MozFontFeatureSettings?: FontFeatureSettingsProperty;
  MozFontLanguageOverride?: FontLanguageOverrideProperty;
  MozForceBrokenImageIcon?: GlobalsNumber;
  MozHyphens?: HyphensProperty;
  MozImageRegion?: MozImageRegionProperty;
  MozOrient?: MozOrientProperty;
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength>;
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength>;
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength>;
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength>;
  MozPaddingEnd?: MarginInlineEndProperty<TLength>;
  MozPaddingStart?: MarginInlineStartProperty<TLength>;
  MozPerspective?: PerspectiveProperty<TLength>;
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  MozStackSizing?: MozStackSizingProperty;
  MozTabSize?: TabSizeProperty<TLength>;
  MozTextBlink?: MozTextBlinkProperty;
  MozTextSizeAdjust?: TextSizeAdjustProperty;
  MozTransformOrigin?: TransformOriginProperty<TLength>;
  MozTransformStyle?: TransformStyleProperty;
  MozTransitionDelay?: GlobalsString;
  MozTransitionDuration?: GlobalsString;
  MozTransitionProperty?: TransitionPropertyProperty;
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty;
  MozUserFocus?: MozUserFocusProperty;
  MozUserInput?: MozUserInputProperty;
  MozUserModify?: MozUserModifyProperty;
  MozUserSelect?: UserSelectProperty;
  MozWindowDragging?: MozWindowDraggingProperty;
  MozWindowShadow?: MozWindowShadowProperty;
  msAccelerator?: MsAcceleratorProperty;
  msBlockProgression?: MsBlockProgressionProperty;
  msContentZoomChaining?: MsContentZoomChainingProperty;
  msContentZoomLimitMax?: GlobalsString;
  msContentZoomLimitMin?: GlobalsString;
  msContentZoomSnapPoints?: GlobalsString;
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty;
  msContentZooming?: MsContentZoomingProperty;
  msFilter?: GlobalsString;
  msFlexDirection?: FlexDirectionProperty;
  msFlexPositive?: GlobalsNumber;
  msFlowFrom?: MsFlowFromProperty;
  msFlowInto?: MsFlowIntoProperty;
  msGridColumns?: GridAutoColumnsProperty<TLength>;
  msGridRows?: GridAutoRowsProperty<TLength>;
  msHighContrastAdjust?: MsHighContrastAdjustProperty;
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty;
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty;
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength>;
  msHyphens?: HyphensProperty;
  msImeAlign?: MsImeAlignProperty;
  msLineBreak?: LineBreakProperty;
  msOrder?: GlobalsNumber;
  msOverflowStyle?: MsOverflowStyleProperty;
  msOverflowX?: OverflowXProperty;
  msOverflowY?: OverflowYProperty;
  msScrollChaining?: MsScrollChainingProperty;
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength>;
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength>;
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength>;
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength>;
  msScrollRails?: MsScrollRailsProperty;
  msScrollSnapPointsX?: GlobalsString;
  msScrollSnapPointsY?: GlobalsString;
  msScrollSnapType?: MsScrollSnapTypeProperty;
  msScrollTranslation?: MsScrollTranslationProperty;
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
  msTextAutospace?: MsTextAutospaceProperty;
  msTextCombineHorizontal?: TextCombineUprightProperty;
  msTextOverflow?: TextOverflowProperty;
  msTextSizeAdjust?: TextSizeAdjustProperty;
  msTouchAction?: TouchActionProperty;
  msTouchSelect?: MsTouchSelectProperty;
  msTransform?: TransformProperty;
  msTransformOrigin?: TransformOriginProperty<TLength>;
  msUserSelect?: MsUserSelectProperty;
  msWordBreak?: WordBreakProperty;
  msWrapFlow?: MsWrapFlowProperty;
  msWrapMargin?: MsWrapMarginProperty<TLength>;
  msWrapThrough?: MsWrapThroughProperty;
  msWritingMode?: WritingModeProperty;
  OBackgroundSize?: BackgroundSizeProperty<TLength>;
  OObjectFit?: ObjectFitProperty;
  OObjectPosition?: ObjectPositionProperty<TLength>;
  OTabSize?: TabSizeProperty<TLength>;
  OTextOverflow?: TextOverflowProperty;
  OTransformOrigin?: TransformOriginProperty<TLength>;
  WebkitAlignContent?: AlignContentProperty;
  WebkitAlignItems?: AlignItemsProperty;
  WebkitAlignSelf?: AlignSelfProperty;
  WebkitAnimationDelay?: GlobalsString;
  WebkitAnimationDirection?: AnimationDirectionProperty;
  WebkitAnimationDuration?: GlobalsString;
  WebkitAnimationFillMode?: AnimationFillModeProperty;
  WebkitAnimationIterationCount?: AnimationIterationCountProperty;
  WebkitAnimationName?: AnimationNameProperty;
  WebkitAnimationPlayState?: AnimationPlayStateProperty;
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty;
  WebkitAppearance?: AppearanceProperty;
  WebkitBackdropFilter?: BackdropFilterProperty;
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty;
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength>;
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>;
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  WebkitBorderImageSlice?: BorderImageSliceProperty;
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty;
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>;
  WebkitBoxShadow?: BoxShadowProperty;
  WebkitBoxSizing?: BoxSizingProperty;
  WebkitClipPath?: ClipPathProperty;
  WebkitColumnCount?: ColumnCountProperty;
  WebkitColumnGap?: ColumnGapProperty<TLength>;
  WebkitColumnRuleColor?: ColumnRuleColorProperty;
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty;
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  WebkitColumnSpan?: ColumnSpanProperty;
  WebkitColumnWidth?: ColumnWidthProperty<TLength>;
  WebkitFilter?: FilterProperty;
  WebkitFlexBasis?: FlexBasisProperty<TLength>;
  WebkitFlexDirection?: FlexDirectionProperty;
  WebkitFlexGrow?: GlobalsNumber;
  WebkitFlexShrink?: GlobalsNumber;
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty;
  WebkitFontKerning?: FontKerningProperty;
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty;
  WebkitHyphens?: HyphensProperty;
  WebkitJustifyContent?: JustifyContentProperty;
  WebkitLineBreak?: LineBreakProperty;
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
  WebkitMaskClip?: WebkitMaskClipProperty;
  WebkitMaskComposite?: WebkitMaskCompositeProperty;
  WebkitMaskImage?: WebkitMaskImageProperty;
  WebkitMaskOrigin?: WebkitMaskOriginProperty;
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  WebkitMaskRepeat?: WebkitMaskRepeatProperty;
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength>;
  WebkitOrder?: GlobalsNumber;
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  WebkitPaddingEnd?: MarginInlineEndProperty<TLength>;
  WebkitPaddingStart?: MarginInlineStartProperty<TLength>;
  WebkitPerspective?: PerspectiveProperty<TLength>;
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  WebkitScrollSnapType?: ScrollSnapTypeProperty;
  WebkitShapeImageThreshold?: GlobalsNumber;
  WebkitShapeMargin?: ShapeMarginProperty<TLength>;
  WebkitShapeOutside?: ShapeOutsideProperty;
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  WebkitTextCombine?: TextCombineUprightProperty;
  WebkitTextDecorationColor?: TextDecorationColorProperty;
  WebkitTextDecorationLine?: TextDecorationLineProperty;
  WebkitTextDecorationSkip?: TextDecorationSkipProperty;
  WebkitTextDecorationStyle?: TextDecorationStyleProperty;
  WebkitTextEmphasisColor?: TextEmphasisColorProperty;
  WebkitTextEmphasisPosition?: GlobalsString;
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty;
  WebkitTextFillColor?: WebkitTextFillColorProperty;
  WebkitTextOrientation?: TextOrientationProperty;
  WebkitTextSizeAdjust?: TextSizeAdjustProperty;
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  WebkitTouchCallout?: WebkitTouchCalloutProperty;
  WebkitTransform?: TransformProperty;
  WebkitTransformOrigin?: TransformOriginProperty<TLength>;
  WebkitTransformStyle?: TransformStyleProperty;
  WebkitTransitionDelay?: GlobalsString;
  WebkitTransitionDuration?: GlobalsString;
  WebkitTransitionProperty?: TransitionPropertyProperty;
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty;
  WebkitUserModify?: WebkitUserModifyProperty;
  WebkitUserSelect?: UserSelectProperty;
  WebkitWritingMode?: WritingModeProperty;
}

export interface VendorShorthandProperties<TLength = string | 0> {
  MozAnimation?: AnimationProperty;
  MozBorderImage?: BorderImageProperty;
  MozColumnRule?: ColumnRuleProperty<TLength>;
  MozColumns?: ColumnsProperty<TLength>;
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength>;
  MozTransition?: TransitionProperty;
  msContentZoomLimit?: GlobalsString;
  msContentZoomSnap?: MsContentZoomSnapProperty;
  msFlex?: FlexProperty<TLength>;
  msScrollLimit?: GlobalsString;
  msScrollSnapX?: GlobalsString;
  msScrollSnapY?: GlobalsString;
  OBorderImage?: BorderImageProperty;
  WebkitAnimation?: AnimationProperty;
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength>;
  WebkitBorderImage?: BorderImageProperty;
  WebkitBorderRadius?: BorderRadiusProperty<TLength>;
  WebkitColumnRule?: ColumnRuleProperty<TLength>;
  WebkitColumns?: ColumnsProperty<TLength>;
  WebkitFlex?: FlexProperty<TLength>;
  WebkitFlexFlow?: FlexFlowProperty;
  WebkitLineClamp?: WebkitLineClampProperty;
  WebkitMask?: WebkitMaskProperty;
  WebkitTextEmphasis?: TextEmphasisProperty;
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength>;
  WebkitTransition?: TransitionProperty;
}

export interface VendorProperties<TLength = string | 0> extends VendorLonghandProperties<TLength>, VendorShorthandProperties<TLength> {}

export interface ObsoleteProperties<TLength = string | 0> {
  /** @deprecated */
  azimuth?: AzimuthProperty;
  /** @deprecated */
  boxDirection?: BoxDirectionProperty;
  /** @deprecated */
  boxFlex?: GlobalsNumber;
  /** @deprecated */
  boxOrient?: BoxOrientProperty;
  /** @deprecated */
  boxPack?: BoxPackProperty;
  /** @deprecated */
  clip?: ClipProperty;
  /** @deprecated */
  fontVariantAlternates?: FontVariantAlternatesProperty;
  /** @deprecated */
  gridColumnGap?: GridColumnGapProperty<TLength>;
  /** @deprecated */
  gridGap?: GridGapProperty<TLength>;
  /** @deprecated */
  gridRowGap?: GridRowGapProperty<TLength>;
  /** @deprecated */
  imeMode?: ImeModeProperty;
  /** @deprecated */
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>;
  /** @deprecated */
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>;
  /** @deprecated */
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  /** @deprecated */
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  /** @deprecated */
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  /** @deprecated */
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  /** @deprecated */
  textCombineHorizontal?: TextCombineUprightProperty;
  /** @deprecated */
  KhtmlBoxDirection?: BoxDirectionProperty;
  /** @deprecated */
  KhtmlBoxFlex?: GlobalsNumber;
  /** @deprecated */
  KhtmlBoxOrient?: BoxOrientProperty;
  /** @deprecated */
  KhtmlBoxPack?: BoxPackProperty;
  /** @deprecated */
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty;
  /** @deprecated */
  MozBackgroundSize?: BackgroundSizeProperty<TLength>;
  /** @deprecated */
  MozBorderRadius?: BorderRadiusProperty<TLength>;
  /** @deprecated */
  MozBorderRadiusTopright?: BorderBottomLeftRadiusProperty<TLength>;
  /** @deprecated */
  MozBoxDirection?: BoxDirectionProperty;
  /** @deprecated */
  MozBoxFlex?: GlobalsNumber;
  /** @deprecated */
  MozBoxOrient?: BoxOrientProperty;
  /** @deprecated */
  MozBoxPack?: BoxPackProperty;
  /** @deprecated */
  MozBoxShadow?: BoxShadowProperty;
  /** @deprecated */
  MozOpacity?: GlobalsNumber;
  /** @deprecated */
  MozOutline?: OutlineProperty<TLength>;
  /** @deprecated */
  MozOutlineColor?: OutlineColorProperty;
  /** @deprecated */
  MozOutlineStyle?: OutlineStyleProperty;
  /** @deprecated */
  MozOutlineWidth?: OutlineWidthProperty<TLength>;
  /** @deprecated */
  MozResize?: ResizeProperty;
  /** @deprecated */
  MozTextAlignLast?: TextAlignLastProperty;
  /** @deprecated */
  MozTextDecorationColor?: TextDecorationColorProperty;
  /** @deprecated */
  MozTextDecorationLine?: TextDecorationLineProperty;
  /** @deprecated */
  MozTextDecorationStyle?: TextDecorationStyleProperty;
  /** @deprecated */
  msImeMode?: ImeModeProperty;
  /** @deprecated */
  OAnimation?: AnimationProperty;
  /** @deprecated */
  OAnimationDelay?: GlobalsString;
  /** @deprecated */
  OAnimationDirection?: AnimationDirectionProperty;
  /** @deprecated */
  OAnimationDuration?: GlobalsString;
  /** @deprecated */
  OAnimationFillMode?: AnimationFillModeProperty;
  /** @deprecated */
  OAnimationIterationCount?: AnimationIterationCountProperty;
  /** @deprecated */
  OAnimationName?: AnimationNameProperty;
  /** @deprecated */
  OAnimationPlayState?: AnimationPlayStateProperty;
  /** @deprecated */
  OAnimationTimingFunction?: AnimationTimingFunctionProperty;
  /** @deprecated */
  OTransform?: TransformProperty;
  /** @deprecated */
  OTransition?: TransitionProperty;
  /** @deprecated */
  OTransitionDelay?: GlobalsString;
  /** @deprecated */
  OTransitionDuration?: GlobalsString;
  /** @deprecated */
  OTransitionProperty?: TransitionPropertyProperty;
  /** @deprecated */
  OTransitionTimingFunction?: TransitionTimingFunctionProperty;
  /** @deprecated */
  WebkitBoxDirection?: BoxDirectionProperty;
  /** @deprecated */
  WebkitBoxFlex?: GlobalsNumber;
  /** @deprecated */
  WebkitBoxOrient?: BoxOrientProperty;
  /** @deprecated */
  WebkitBoxPack?: BoxPackProperty;
  /** @deprecated */
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty;
  /** @deprecated */
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty;
}

export interface SvgProperties<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty;
  baselineShift?: BaselineShiftProperty<TLength>;
  clip?: ClipProperty;
  clipPath?: ClipPathProperty;
  clipRule?: ClipRuleProperty;
  color?: ColorProperty;
  colorInterpolation?: ColorInterpolationProperty;
  colorRendering?: ColorRenderingProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  dominantBaseline?: DominantBaselineProperty;
  fill?: FillProperty;
  fillOpacity?: GlobalsNumber;
  fillRule?: FillRuleProperty;
  filter?: FilterProperty;
  floodColor?: FloodColorProperty;
  floodOpacity?: GlobalsNumber;
  font?: FontProperty;
  fontFamily?: FontFamilyProperty;
  fontSize?: FontSizeProperty<TLength>;
  fontSizeAdjust?: FontSizeAdjustProperty;
  fontStretch?: FontStretchProperty;
  fontStyle?: FontStyleProperty;
  fontVariant?: FontVariantProperty;
  fontWeight?: FontWeightProperty;
  glyphOrientationVertical?: GlyphOrientationVerticalProperty;
  imageRendering?: ImageRenderingProperty;
  letterSpacing?: LetterSpacingProperty<TLength>;
  lightingColor?: LightingColorProperty;
  lineHeight?: LineHeightProperty<TLength>;
  marker?: MarkerProperty;
  markerEnd?: MarkerEndProperty;
  markerMid?: MarkerMidProperty;
  markerStart?: MarkerStartProperty;
  mask?: MaskProperty<TLength>;
  opacity?: GlobalsNumber;
  overflow?: OverflowProperty;
  paintOrder?: PaintOrderProperty;
  pointerEvents?: PointerEventsProperty;
  shapeRendering?: ShapeRenderingProperty;
  stopColor?: StopColorProperty;
  stopOpacity?: GlobalsNumber;
  stroke?: StrokeProperty;
  strokeDasharray?: StrokeDasharrayProperty<TLength>;
  strokeDashoffset?: StrokeDashoffsetProperty<TLength>;
  strokeLinecap?: StrokeLinecapProperty;
  strokeLinejoin?: StrokeLinejoinProperty;
  strokeMiterlimit?: GlobalsNumber;
  strokeOpacity?: GlobalsNumber;
  strokeWidth?: StrokeWidthProperty<TLength>;
  textAnchor?: TextAnchorProperty;
  textDecoration?: TextDecorationProperty;
  textRendering?: TextRenderingProperty;
  unicodeBidi?: UnicodeBidiProperty;
  vectorEffect?: VectorEffectProperty;
  visibility?: VisibilityProperty;
  whiteSpace?: WhiteSpaceProperty;
  wordSpacing?: WordSpacingProperty<TLength>;
  writingMode?: WritingModeProperty;
}

export interface Properties<TLength = string | 0> extends StandardProperties<TLength>, VendorProperties<TLength>, ObsoleteProperties<TLength>, SvgProperties<TLength> {}

export interface StandardLonghandPropertiesHyphen<TLength = string | 0> {
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty;
  /**
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength>;
  "block-overflow"?: BlockOverflowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty;
  /**
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength>;
  /**
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  "box-align"?: BoxAlignProperty;
  /**
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  "box-decoration-break"?: BoxDecorationBreakProperty;
  "box-flex-group"?: GlobalsNumber;
  "box-lines"?: BoxLinesProperty;
  "box-ordinal-group"?: GlobalsNumber;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  "color-adjust"?: ColorAdjustProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty;
  /**
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty;
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength>;
  contain?: ContainProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty;
  /**
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength>;
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber;
  /**
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty;
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty;
  /**
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty;
  /**
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength>;
  "hanging-punctuation"?: HangingPunctuationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty;
  "image-resolution"?: ImageResolutionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty;
  "initial-letter-align"?: InitialLetterAlignProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength>;
  "line-height-step"?: LineHeightStepProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength>;
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength>;
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | n/a  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  "margin-top"?: MarginTopProperty<TLength>;
  "mask-border-mode"?: MaskBorderModeProperty;
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength>;
  "mask-border-repeat"?: MaskBorderRepeatProperty;
  "mask-border-slice"?: MaskBorderSliceProperty;
  "mask-border-source"?: MaskBorderSourceProperty;
  "mask-border-width"?: MaskBorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty;
  /**
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty;
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength>;
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty;
  "max-block-size"?: MaxBlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength>;
  "max-lines"?: MaxLinesProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength>;
  "offset-anchor"?: OffsetAnchorProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength>;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength>;
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty;
  "offset-position"?: OffsetPositionProperty<TLength>;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty;
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty;
  "overflow-anchor"?: OverflowAnchorProperty;
  "overflow-block"?: OverflowBlockProperty;
  "overflow-clip-box"?: OverflowClipBoxProperty;
  "overflow-inline"?: OverflowInlineProperty;
  /**
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength>;
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength>;
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty;
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  "row-gap"?: RowGapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty;
  "ruby-merge"?: RubyMergeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty;
  /**
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty;
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty;
  /**
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty;
  /**
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength>;
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString;
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty;
  /**
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty;
  /**
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty;
  zoom?: ZoomProperty;
}

export interface StandardShorthandPropertiesHyphen<TLength = string | 0> {
  all?: Globals;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty;
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty;
  "line-clamp"?: LineClampProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  "mask-border"?: MaskBorderProperty;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty;
}

export interface StandardPropertiesHyphen<TLength = string | 0> extends StandardLonghandPropertiesHyphen<TLength>, StandardShorthandPropertiesHyphen<TLength> {}

export interface VendorLonghandPropertiesHyphen<TLength = string | 0> {
  "-moz-animation-delay"?: GlobalsString;
  "-moz-animation-direction"?: AnimationDirectionProperty;
  "-moz-animation-duration"?: GlobalsString;
  "-moz-animation-fill-mode"?: AnimationFillModeProperty;
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty;
  "-moz-animation-name"?: AnimationNameProperty;
  "-moz-animation-play-state"?: AnimationPlayStateProperty;
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty;
  "-moz-appearance"?: MozAppearanceProperty;
  "-moz-backface-visibility"?: BackfaceVisibilityProperty;
  "-moz-binding"?: MozBindingProperty;
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty;
  "-moz-border-end-color"?: BorderInlineEndColorProperty;
  "-moz-border-end-style"?: BorderInlineEndStyleProperty;
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength>;
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty;
  "-moz-border-right-colors"?: MozBorderRightColorsProperty;
  "-moz-border-start-color"?: BorderInlineStartColorProperty;
  "-moz-border-start-style"?: BorderInlineStartStyleProperty;
  "-moz-border-top-colors"?: MozBorderTopColorsProperty;
  "-moz-box-sizing"?: BoxSizingProperty;
  "-moz-column-count"?: ColumnCountProperty;
  "-moz-column-fill"?: ColumnFillProperty;
  "-moz-column-gap"?: ColumnGapProperty<TLength>;
  "-moz-column-rule-color"?: ColumnRuleColorProperty;
  "-moz-column-rule-style"?: ColumnRuleStyleProperty;
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  "-moz-column-width"?: ColumnWidthProperty<TLength>;
  "-moz-context-properties"?: MozContextPropertiesProperty;
  "-moz-float-edge"?: MozFloatEdgeProperty;
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty;
  "-moz-font-language-override"?: FontLanguageOverrideProperty;
  "-moz-force-broken-image-icon"?: GlobalsNumber;
  "-moz-hyphens"?: HyphensProperty;
  "-moz-image-region"?: MozImageRegionProperty;
  "-moz-orient"?: MozOrientProperty;
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength>;
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength>;
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength>;
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength>;
  "-moz-padding-end"?: MarginInlineEndProperty<TLength>;
  "-moz-padding-start"?: MarginInlineStartProperty<TLength>;
  "-moz-perspective"?: PerspectiveProperty<TLength>;
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength>;
  "-moz-stack-sizing"?: MozStackSizingProperty;
  "-moz-tab-size"?: TabSizeProperty<TLength>;
  "-moz-text-blink"?: MozTextBlinkProperty;
  "-moz-text-size-adjust"?: TextSizeAdjustProperty;
  "-moz-transform-origin"?: TransformOriginProperty<TLength>;
  "-moz-transform-style"?: TransformStyleProperty;
  "-moz-transition-delay"?: GlobalsString;
  "-moz-transition-duration"?: GlobalsString;
  "-moz-transition-property"?: TransitionPropertyProperty;
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty;
  "-moz-user-focus"?: MozUserFocusProperty;
  "-moz-user-input"?: MozUserInputProperty;
  "-moz-user-modify"?: MozUserModifyProperty;
  "-moz-user-select"?: UserSelectProperty;
  "-moz-window-dragging"?: MozWindowDraggingProperty;
  "-moz-window-shadow"?: MozWindowShadowProperty;
  "-ms-accelerator"?: MsAcceleratorProperty;
  "-ms-block-progression"?: MsBlockProgressionProperty;
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty;
  "-ms-content-zoom-limit-max"?: GlobalsString;
  "-ms-content-zoom-limit-min"?: GlobalsString;
  "-ms-content-zoom-snap-points"?: GlobalsString;
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty;
  "-ms-content-zooming"?: MsContentZoomingProperty;
  "-ms-filter"?: GlobalsString;
  "-ms-flex-direction"?: FlexDirectionProperty;
  "-ms-flex-positive"?: GlobalsNumber;
  "-ms-flow-from"?: MsFlowFromProperty;
  "-ms-flow-into"?: MsFlowIntoProperty;
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength>;
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength>;
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty;
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty;
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty;
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength>;
  "-ms-hyphens"?: HyphensProperty;
  "-ms-ime-align"?: MsImeAlignProperty;
  "-ms-line-break"?: LineBreakProperty;
  "-ms-order"?: GlobalsNumber;
  "-ms-overflow-style"?: MsOverflowStyleProperty;
  "-ms-overflow-x"?: OverflowXProperty;
  "-ms-overflow-y"?: OverflowYProperty;
  "-ms-scroll-chaining"?: MsScrollChainingProperty;
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength>;
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength>;
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength>;
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength>;
  "-ms-scroll-rails"?: MsScrollRailsProperty;
  "-ms-scroll-snap-points-x"?: GlobalsString;
  "-ms-scroll-snap-points-y"?: GlobalsString;
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty;
  "-ms-scroll-translation"?: MsScrollTranslationProperty;
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty;
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty;
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty;
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty;
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty;
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty;
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty;
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty;
  "-ms-text-autospace"?: MsTextAutospaceProperty;
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty;
  "-ms-text-overflow"?: TextOverflowProperty;
  "-ms-text-size-adjust"?: TextSizeAdjustProperty;
  "-ms-touch-action"?: TouchActionProperty;
  "-ms-touch-select"?: MsTouchSelectProperty;
  "-ms-transform"?: TransformProperty;
  "-ms-transform-origin"?: TransformOriginProperty<TLength>;
  "-ms-user-select"?: MsUserSelectProperty;
  "-ms-word-break"?: WordBreakProperty;
  "-ms-wrap-flow"?: MsWrapFlowProperty;
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength>;
  "-ms-wrap-through"?: MsWrapThroughProperty;
  "-ms-writing-mode"?: WritingModeProperty;
  "-o-background-size"?: BackgroundSizeProperty<TLength>;
  "-o-object-fit"?: ObjectFitProperty;
  "-o-object-position"?: ObjectPositionProperty<TLength>;
  "-o-tab-size"?: TabSizeProperty<TLength>;
  "-o-text-overflow"?: TextOverflowProperty;
  "-o-transform-origin"?: TransformOriginProperty<TLength>;
  "-webkit-align-content"?: AlignContentProperty;
  "-webkit-align-items"?: AlignItemsProperty;
  "-webkit-align-self"?: AlignSelfProperty;
  "-webkit-animation-delay"?: GlobalsString;
  "-webkit-animation-direction"?: AnimationDirectionProperty;
  "-webkit-animation-duration"?: GlobalsString;
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty;
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty;
  "-webkit-animation-name"?: AnimationNameProperty;
  "-webkit-animation-play-state"?: AnimationPlayStateProperty;
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty;
  "-webkit-appearance"?: AppearanceProperty;
  "-webkit-backdrop-filter"?: BackdropFilterProperty;
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty;
  "-webkit-background-size"?: BackgroundSizeProperty<TLength>;
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty;
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty;
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength>;
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  "-webkit-border-image-slice"?: BorderImageSliceProperty;
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty;
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>;
  "-webkit-box-shadow"?: BoxShadowProperty;
  "-webkit-box-sizing"?: BoxSizingProperty;
  "-webkit-clip-path"?: ClipPathProperty;
  "-webkit-column-count"?: ColumnCountProperty;
  "-webkit-column-gap"?: ColumnGapProperty<TLength>;
  "-webkit-column-rule-color"?: ColumnRuleColorProperty;
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty;
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  "-webkit-column-span"?: ColumnSpanProperty;
  "-webkit-column-width"?: ColumnWidthProperty<TLength>;
  "-webkit-filter"?: FilterProperty;
  "-webkit-flex-basis"?: FlexBasisProperty<TLength>;
  "-webkit-flex-direction"?: FlexDirectionProperty;
  "-webkit-flex-grow"?: GlobalsNumber;
  "-webkit-flex-shrink"?: GlobalsNumber;
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty;
  "-webkit-font-kerning"?: FontKerningProperty;
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty;
  "-webkit-hyphens"?: HyphensProperty;
  "-webkit-justify-content"?: JustifyContentProperty;
  "-webkit-line-break"?: LineBreakProperty;
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty;
  "-webkit-mask-clip"?: WebkitMaskClipProperty;
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty;
  "-webkit-mask-image"?: WebkitMaskImageProperty;
  "-webkit-mask-origin"?: WebkitMaskOriginProperty;
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>;
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>;
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>;
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty;
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty;
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty;
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength>;
  "-webkit-order"?: GlobalsNumber;
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty;
  "-webkit-padding-end"?: MarginInlineEndProperty<TLength>;
  "-webkit-padding-start"?: MarginInlineStartProperty<TLength>;
  "-webkit-perspective"?: PerspectiveProperty<TLength>;
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength>;
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty;
  "-webkit-shape-image-threshold"?: GlobalsNumber;
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength>;
  "-webkit-shape-outside"?: ShapeOutsideProperty;
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty;
  "-webkit-text-combine"?: TextCombineUprightProperty;
  "-webkit-text-decoration-color"?: TextDecorationColorProperty;
  "-webkit-text-decoration-line"?: TextDecorationLineProperty;
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty;
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty;
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty;
  "-webkit-text-emphasis-position"?: GlobalsString;
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty;
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty;
  "-webkit-text-orientation"?: TextOrientationProperty;
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty;
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty;
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>;
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty;
  "-webkit-transform"?: TransformProperty;
  "-webkit-transform-origin"?: TransformOriginProperty<TLength>;
  "-webkit-transform-style"?: TransformStyleProperty;
  "-webkit-transition-delay"?: GlobalsString;
  "-webkit-transition-duration"?: GlobalsString;
  "-webkit-transition-property"?: TransitionPropertyProperty;
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty;
  "-webkit-user-modify"?: WebkitUserModifyProperty;
  "-webkit-user-select"?: UserSelectProperty;
  "-webkit-writing-mode"?: WritingModeProperty;
}

export interface VendorShorthandPropertiesHyphen<TLength = string | 0> {
  "-moz-animation"?: AnimationProperty;
  "-moz-border-image"?: BorderImageProperty;
  "-moz-column-rule"?: ColumnRuleProperty<TLength>;
  "-moz-columns"?: ColumnsProperty<TLength>;
  "-moz-outline-radius"?: MozOutlineRadiusProperty<TLength>;
  "-moz-transition"?: TransitionProperty;
  "-ms-content-zoom-limit"?: GlobalsString;
  "-ms-content-zoom-snap"?: MsContentZoomSnapProperty;
  "-ms-flex"?: FlexProperty<TLength>;
  "-ms-scroll-limit"?: GlobalsString;
  "-ms-scroll-snap-x"?: GlobalsString;
  "-ms-scroll-snap-y"?: GlobalsString;
  "-o-border-image"?: BorderImageProperty;
  "-webkit-animation"?: AnimationProperty;
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength>;
  "-webkit-border-image"?: BorderImageProperty;
  "-webkit-border-radius"?: BorderRadiusProperty<TLength>;
  "-webkit-column-rule"?: ColumnRuleProperty<TLength>;
  "-webkit-columns"?: ColumnsProperty<TLength>;
  "-webkit-flex"?: FlexProperty<TLength>;
  "-webkit-flex-flow"?: FlexFlowProperty;
  "-webkit-line-clamp"?: WebkitLineClampProperty;
  "-webkit-mask"?: WebkitMaskProperty;
  "-webkit-text-emphasis"?: TextEmphasisProperty;
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength>;
  "-webkit-transition"?: TransitionProperty;
}

export interface VendorPropertiesHyphen<TLength = string | 0> extends VendorLonghandPropertiesHyphen<TLength>, VendorShorthandPropertiesHyphen<TLength> {}

export interface ObsoletePropertiesHyphen<TLength = string | 0> {
  /** @deprecated */
  azimuth?: AzimuthProperty;
  /** @deprecated */
  "box-direction"?: BoxDirectionProperty;
  /** @deprecated */
  "box-flex"?: GlobalsNumber;
  /** @deprecated */
  "box-orient"?: BoxOrientProperty;
  /** @deprecated */
  "box-pack"?: BoxPackProperty;
  /** @deprecated */
  clip?: ClipProperty;
  /** @deprecated */
  "font-variant-alternates"?: FontVariantAlternatesProperty;
  /** @deprecated */
  "grid-column-gap"?: GridColumnGapProperty<TLength>;
  /** @deprecated */
  "grid-gap"?: GridGapProperty<TLength>;
  /** @deprecated */
  "grid-row-gap"?: GridRowGapProperty<TLength>;
  /** @deprecated */
  "ime-mode"?: ImeModeProperty;
  /** @deprecated */
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength>;
  /** @deprecated */
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength>;
  /** @deprecated */
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  /** @deprecated */
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty;
  /** @deprecated */
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty;
  /** @deprecated */
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty;
  /** @deprecated */
  "text-combine-horizontal"?: TextCombineUprightProperty;
  /** @deprecated */
  "-khtml-box-direction"?: BoxDirectionProperty;
  /** @deprecated */
  "-khtml-box-flex"?: GlobalsNumber;
  /** @deprecated */
  "-khtml-box-orient"?: BoxOrientProperty;
  /** @deprecated */
  "-khtml-box-pack"?: BoxPackProperty;
  /** @deprecated */
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty;
  /** @deprecated */
  "-moz-background-size"?: BackgroundSizeProperty<TLength>;
  /** @deprecated */
  "-moz-border-radius"?: BorderRadiusProperty<TLength>;
  /** @deprecated */
  "-moz-border-radius-topright"?: BorderBottomLeftRadiusProperty<TLength>;
  /** @deprecated */
  "-moz-box-direction"?: BoxDirectionProperty;
  /** @deprecated */
  "-moz-box-flex"?: GlobalsNumber;
  /** @deprecated */
  "-moz-box-orient"?: BoxOrientProperty;
  /** @deprecated */
  "-moz-box-pack"?: BoxPackProperty;
  /** @deprecated */
  "-moz-box-shadow"?: BoxShadowProperty;
  /** @deprecated */
  "-moz-opacity"?: GlobalsNumber;
  /** @deprecated */
  "-moz-outline"?: OutlineProperty<TLength>;
  /** @deprecated */
  "-moz-outline-color"?: OutlineColorProperty;
  /** @deprecated */
  "-moz-outline-style"?: OutlineStyleProperty;
  /** @deprecated */
  "-moz-outline-width"?: OutlineWidthProperty<TLength>;
  /** @deprecated */
  "-moz-resize"?: ResizeProperty;
  /** @deprecated */
  "-moz-text-align-last"?: TextAlignLastProperty;
  /** @deprecated */
  "-moz-text-decoration-color"?: TextDecorationColorProperty;
  /** @deprecated */
  "-moz-text-decoration-line"?: TextDecorationLineProperty;
  /** @deprecated */
  "-moz-text-decoration-style"?: TextDecorationStyleProperty;
  /** @deprecated */
  "-ms-ime-mode"?: ImeModeProperty;
  /** @deprecated */
  "-o-animation"?: AnimationProperty;
  /** @deprecated */
  "-o-animation-delay"?: GlobalsString;
  /** @deprecated */
  "-o-animation-direction"?: AnimationDirectionProperty;
  /** @deprecated */
  "-o-animation-duration"?: GlobalsString;
  /** @deprecated */
  "-o-animation-fill-mode"?: AnimationFillModeProperty;
  /** @deprecated */
  "-o-animation-iteration-count"?: AnimationIterationCountProperty;
  /** @deprecated */
  "-o-animation-name"?: AnimationNameProperty;
  /** @deprecated */
  "-o-animation-play-state"?: AnimationPlayStateProperty;
  /** @deprecated */
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty;
  /** @deprecated */
  "-o-transform"?: TransformProperty;
  /** @deprecated */
  "-o-transition"?: TransitionProperty;
  /** @deprecated */
  "-o-transition-delay"?: GlobalsString;
  /** @deprecated */
  "-o-transition-duration"?: GlobalsString;
  /** @deprecated */
  "-o-transition-property"?: TransitionPropertyProperty;
  /** @deprecated */
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty;
  /** @deprecated */
  "-webkit-box-direction"?: BoxDirectionProperty;
  /** @deprecated */
  "-webkit-box-flex"?: GlobalsNumber;
  /** @deprecated */
  "-webkit-box-orient"?: BoxOrientProperty;
  /** @deprecated */
  "-webkit-box-pack"?: BoxPackProperty;
  /** @deprecated */
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  /** @deprecated */
  "-webkit-scroll-snap-points-y"?: ScrollSnapPointsYProperty;
}

export interface SvgPropertiesHyphen<TLength = string | 0> {
  "alignment-baseline"?: AlignmentBaselineProperty;
  "baseline-shift"?: BaselineShiftProperty<TLength>;
  clip?: ClipProperty;
  "clip-path"?: ClipPathProperty;
  "clip-rule"?: ClipRuleProperty;
  color?: ColorProperty;
  "color-interpolation"?: ColorInterpolationProperty;
  "color-rendering"?: ColorRenderingProperty;
  cursor?: CursorProperty;
  direction?: DirectionProperty;
  display?: DisplayProperty;
  "dominant-baseline"?: DominantBaselineProperty;
  fill?: FillProperty;
  "fill-opacity"?: GlobalsNumber;
  "fill-rule"?: FillRuleProperty;
  filter?: FilterProperty;
  "flood-color"?: FloodColorProperty;
  "flood-opacity"?: GlobalsNumber;
  font?: FontProperty;
  "font-family"?: FontFamilyProperty;
  "font-size"?: FontSizeProperty<TLength>;
  "font-size-adjust"?: FontSizeAdjustProperty;
  "font-stretch"?: FontStretchProperty;
  "font-style"?: FontStyleProperty;
  "font-variant"?: FontVariantProperty;
  "font-weight"?: FontWeightProperty;
  "glyph-orientation-vertical"?: GlyphOrientationVerticalProperty;
  "image-rendering"?: ImageRenderingProperty;
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  "lighting-color"?: LightingColorProperty;
  "line-height"?: LineHeightProperty<TLength>;
  marker?: MarkerProperty;
  "marker-end"?: MarkerEndProperty;
  "marker-mid"?: MarkerMidProperty;
  "marker-start"?: MarkerStartProperty;
  mask?: MaskProperty<TLength>;
  opacity?: GlobalsNumber;
  overflow?: OverflowProperty;
  "paint-order"?: PaintOrderProperty;
  "pointer-events"?: PointerEventsProperty;
  "shape-rendering"?: ShapeRenderingProperty;
  "stop-color"?: StopColorProperty;
  "stop-opacity"?: GlobalsNumber;
  stroke?: StrokeProperty;
  "stroke-dasharray"?: StrokeDasharrayProperty<TLength>;
  "stroke-dashoffset"?: StrokeDashoffsetProperty<TLength>;
  "stroke-linecap"?: StrokeLinecapProperty;
  "stroke-linejoin"?: StrokeLinejoinProperty;
  "stroke-miterlimit"?: GlobalsNumber;
  "stroke-opacity"?: GlobalsNumber;
  "stroke-width"?: StrokeWidthProperty<TLength>;
  "text-anchor"?: TextAnchorProperty;
  "text-decoration"?: TextDecorationProperty;
  "text-rendering"?: TextRenderingProperty;
  "unicode-bidi"?: UnicodeBidiProperty;
  "vector-effect"?: VectorEffectProperty;
  visibility?: VisibilityProperty;
  "white-space"?: WhiteSpaceProperty;
  "word-spacing"?: WordSpacingProperty<TLength>;
  "writing-mode"?: WritingModeProperty;
}

export interface PropertiesHyphen<TLength = string | 0>
  extends StandardPropertiesHyphen<TLength>,
    VendorPropertiesHyphen<TLength>,
    ObsoletePropertiesHyphen<TLength>,
    SvgPropertiesHyphen<TLength> {}

export interface StandardLonghandPropertiesFallback<TLength = string | 0> {
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty | AlignContentProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty | CaretColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty | ClipPathProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty | CounterResetProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | n/a  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty | MaskClipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty | MaskImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty | MaskModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  maxLines?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty | OverflowProperty[];
  overflowAnchor?: OverflowAnchorProperty | OverflowAnchorProperty[];
  overflowBlock?: OverflowBlockProperty | OverflowBlockProperty[];
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  overflowInline?: OverflowInlineProperty | OverflowInlineProperty[];
  /**
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty | OverflowXProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty | OverflowYProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty | TextAlignProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty | TextShadowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty | TextTransformProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty | TouchActionProperty[];
  /**
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString | GlobalsString[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty | UserSelectProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty | WillChangeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  /**
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty | WritingModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty | ZIndexProperty[];
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty | BorderColorProperty[];
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty | BorderImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty | GridAreaProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty | GridRowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  lineClamp?: LineClampProperty | LineClampProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty | ListStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesFallback<TLength = string | 0> extends StandardLonghandPropertiesFallback<TLength>, StandardShorthandPropertiesFallback<TLength> {}

export interface VendorLonghandPropertiesFallback<TLength = string | 0> {
  MozAnimationDelay?: GlobalsString | GlobalsString[];
  MozAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  MozAnimationDuration?: GlobalsString | GlobalsString[];
  MozAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  MozAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  MozAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  MozAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  MozBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  MozBinding?: MozBindingProperty | MozBindingProperty[];
  MozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  MozBorderEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  MozBorderEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  MozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  MozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  MozBorderStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  MozBorderStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  MozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  MozBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  MozColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  MozColumnFill?: ColumnFillProperty | ColumnFillProperty[];
  MozColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  MozColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  MozColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  MozColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  MozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  MozFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  MozFontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[];
  MozHyphens?: HyphensProperty | HyphensProperty[];
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  MozOrient?: MozOrientProperty | MozOrientProperty[];
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  MozPaddingEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  MozPaddingStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  MozPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  MozTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  MozTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  MozTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  MozTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  MozTransitionDelay?: GlobalsString | GlobalsString[];
  MozTransitionDuration?: GlobalsString | GlobalsString[];
  MozTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  MozUserSelect?: UserSelectProperty | UserSelectProperty[];
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  msAccelerator?: MsAcceleratorProperty | MsAcceleratorProperty[];
  msBlockProgression?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  msContentZoomChaining?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  msContentZoomLimitMax?: GlobalsString | GlobalsString[];
  msContentZoomLimitMin?: GlobalsString | GlobalsString[];
  msContentZoomSnapPoints?: GlobalsString | GlobalsString[];
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  msContentZooming?: MsContentZoomingProperty | MsContentZoomingProperty[];
  msFilter?: GlobalsString | GlobalsString[];
  msFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  msFlexPositive?: GlobalsNumber | GlobalsNumber[];
  msFlowFrom?: MsFlowFromProperty | MsFlowFromProperty[];
  msFlowInto?: MsFlowIntoProperty | MsFlowIntoProperty[];
  msGridColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  msGridRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  msHighContrastAdjust?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  msHyphens?: HyphensProperty | HyphensProperty[];
  msImeAlign?: MsImeAlignProperty | MsImeAlignProperty[];
  msLineBreak?: LineBreakProperty | LineBreakProperty[];
  msOrder?: GlobalsNumber | GlobalsNumber[];
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  msOverflowX?: OverflowXProperty | OverflowXProperty[];
  msOverflowY?: OverflowYProperty | OverflowYProperty[];
  msScrollChaining?: MsScrollChainingProperty | MsScrollChainingProperty[];
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  msScrollRails?: MsScrollRailsProperty | MsScrollRailsProperty[];
  msScrollSnapPointsX?: GlobalsString | GlobalsString[];
  msScrollSnapPointsY?: GlobalsString | GlobalsString[];
  msScrollSnapType?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  msScrollTranslation?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  msTextAutospace?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  msTextCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  msTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  msTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  msTouchAction?: TouchActionProperty | TouchActionProperty[];
  msTouchSelect?: MsTouchSelectProperty | MsTouchSelectProperty[];
  msTransform?: TransformProperty | TransformProperty[];
  msTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  msUserSelect?: MsUserSelectProperty | MsUserSelectProperty[];
  msWordBreak?: WordBreakProperty | WordBreakProperty[];
  msWrapFlow?: MsWrapFlowProperty | MsWrapFlowProperty[];
  msWrapMargin?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  msWrapThrough?: MsWrapThroughProperty | MsWrapThroughProperty[];
  msWritingMode?: WritingModeProperty | WritingModeProperty[];
  OBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  OObjectFit?: ObjectFitProperty | ObjectFitProperty[];
  OObjectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  OTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  OTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  OTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  WebkitAlignContent?: AlignContentProperty | AlignContentProperty[];
  WebkitAlignItems?: AlignItemsProperty | AlignItemsProperty[];
  WebkitAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  WebkitAnimationDelay?: GlobalsString | GlobalsString[];
  WebkitAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  WebkitAnimationDuration?: GlobalsString | GlobalsString[];
  WebkitAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  WebkitAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  WebkitAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  WebkitAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  WebkitAppearance?: AppearanceProperty | AppearanceProperty[];
  WebkitBackdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  WebkitBorderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  WebkitBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  WebkitBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  WebkitClipPath?: ClipPathProperty | ClipPathProperty[];
  WebkitColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  WebkitColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  WebkitColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  WebkitColumnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  WebkitColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  WebkitFilter?: FilterProperty | FilterProperty[];
  WebkitFlexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  WebkitFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  WebkitFlexGrow?: GlobalsNumber | GlobalsNumber[];
  WebkitFlexShrink?: GlobalsNumber | GlobalsNumber[];
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  WebkitFontKerning?: FontKerningProperty | FontKerningProperty[];
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  WebkitHyphens?: HyphensProperty | HyphensProperty[];
  WebkitJustifyContent?: JustifyContentProperty | JustifyContentProperty[];
  WebkitLineBreak?: LineBreakProperty | LineBreakProperty[];
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  WebkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  WebkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  WebkitOrder?: GlobalsNumber | GlobalsNumber[];
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  WebkitPaddingEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  WebkitPaddingStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  WebkitPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  WebkitScrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  WebkitShapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  WebkitShapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  WebkitShapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  WebkitTextCombine?: TextCombineUprightProperty | TextCombineUprightProperty[];
  WebkitTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  WebkitTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  WebkitTextDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  WebkitTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  WebkitTextEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  WebkitTextEmphasisPosition?: GlobalsString | GlobalsString[];
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  WebkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  WebkitTextOrientation?: TextOrientationProperty | TextOrientationProperty[];
  WebkitTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  WebkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  WebkitTransform?: TransformProperty | TransformProperty[];
  WebkitTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  WebkitTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  WebkitTransitionDelay?: GlobalsString | GlobalsString[];
  WebkitTransitionDuration?: GlobalsString | GlobalsString[];
  WebkitTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  WebkitUserModify?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  WebkitUserSelect?: UserSelectProperty | UserSelectProperty[];
  WebkitWritingMode?: WritingModeProperty | WritingModeProperty[];
}

export interface VendorShorthandPropertiesFallback<TLength = string | 0> {
  MozAnimation?: AnimationProperty | AnimationProperty[];
  MozBorderImage?: BorderImageProperty | BorderImageProperty[];
  MozColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  MozColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  MozOutlineRadius?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[];
  MozTransition?: TransitionProperty | TransitionProperty[];
  msContentZoomLimit?: GlobalsString | GlobalsString[];
  msContentZoomSnap?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[];
  msFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  msScrollLimit?: GlobalsString | GlobalsString[];
  msScrollSnapX?: GlobalsString | GlobalsString[];
  msScrollSnapY?: GlobalsString | GlobalsString[];
  OBorderImage?: BorderImageProperty | BorderImageProperty[];
  WebkitAnimation?: AnimationProperty | AnimationProperty[];
  WebkitBorderBefore?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  WebkitBorderImage?: BorderImageProperty | BorderImageProperty[];
  WebkitBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  WebkitColumnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  WebkitColumns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  WebkitFlex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  WebkitFlexFlow?: FlexFlowProperty | FlexFlowProperty[];
  WebkitLineClamp?: WebkitLineClampProperty | WebkitLineClampProperty[];
  WebkitMask?: WebkitMaskProperty | WebkitMaskProperty[];
  WebkitTextEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  WebkitTextStroke?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  WebkitTransition?: TransitionProperty | TransitionProperty[];
}

export interface VendorPropertiesFallback<TLength = string | 0> extends VendorLonghandPropertiesFallback<TLength>, VendorShorthandPropertiesFallback<TLength> {}

export interface ObsoletePropertiesFallback<TLength = string | 0> {
  /** @deprecated */
  azimuth?: AzimuthProperty | AzimuthProperty[];
  /** @deprecated */
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  boxFlex?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  boxPack?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  clip?: ClipProperty | ClipProperty[];
  /** @deprecated */
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  /** @deprecated */
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  /** @deprecated */
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  /** @deprecated */
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  /** @deprecated */
  imeMode?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  /** @deprecated */
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  /** @deprecated */
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /** @deprecated */
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  /** @deprecated */
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  /** @deprecated */
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  /** @deprecated */
  textCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** @deprecated */
  KhtmlBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  KhtmlBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  KhtmlBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  KhtmlBoxPack?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** @deprecated */
  MozBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** @deprecated */
  MozBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /** @deprecated */
  MozBorderRadiusTopright?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /** @deprecated */
  MozBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  MozBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  MozBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  MozBoxPack?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  MozBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /** @deprecated */
  MozOpacity?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  MozOutline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /** @deprecated */
  MozOutlineColor?: OutlineColorProperty | OutlineColorProperty[];
  /** @deprecated */
  MozOutlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  /** @deprecated */
  MozOutlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /** @deprecated */
  MozResize?: ResizeProperty | ResizeProperty[];
  /** @deprecated */
  MozTextAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  /** @deprecated */
  MozTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /** @deprecated */
  MozTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /** @deprecated */
  MozTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /** @deprecated */
  msImeMode?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  OAnimation?: AnimationProperty | AnimationProperty[];
  /** @deprecated */
  OAnimationDelay?: GlobalsString | GlobalsString[];
  /** @deprecated */
  OAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** @deprecated */
  OAnimationDuration?: GlobalsString | GlobalsString[];
  /** @deprecated */
  OAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** @deprecated */
  OAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** @deprecated */
  OAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  /** @deprecated */
  OAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** @deprecated */
  OAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** @deprecated */
  OTransform?: TransformProperty | TransformProperty[];
  /** @deprecated */
  OTransition?: TransitionProperty | TransitionProperty[];
  /** @deprecated */
  OTransitionDelay?: GlobalsString | GlobalsString[];
  /** @deprecated */
  OTransitionDuration?: GlobalsString | GlobalsString[];
  /** @deprecated */
  OTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** @deprecated */
  OTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** @deprecated */
  WebkitBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  WebkitBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  WebkitBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  WebkitBoxPack?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /** @deprecated */
  WebkitScrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
}

export interface SvgPropertiesFallback<TLength = string | 0> {
  alignmentBaseline?: AlignmentBaselineProperty | AlignmentBaselineProperty[];
  baselineShift?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[];
  clip?: ClipProperty | ClipProperty[];
  clipPath?: ClipPathProperty | ClipPathProperty[];
  clipRule?: ClipRuleProperty | ClipRuleProperty[];
  color?: ColorProperty | ColorProperty[];
  colorInterpolation?: ColorInterpolationProperty | ColorInterpolationProperty[];
  colorRendering?: ColorRenderingProperty | ColorRenderingProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  dominantBaseline?: DominantBaselineProperty | DominantBaselineProperty[];
  fill?: FillProperty | FillProperty[];
  fillOpacity?: GlobalsNumber | GlobalsNumber[];
  fillRule?: FillRuleProperty | FillRuleProperty[];
  filter?: FilterProperty | FilterProperty[];
  floodColor?: FloodColorProperty | FloodColorProperty[];
  floodOpacity?: GlobalsNumber | GlobalsNumber[];
  font?: FontProperty | FontProperty[];
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  glyphOrientationVertical?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[];
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  lightingColor?: LightingColorProperty | LightingColorProperty[];
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  marker?: MarkerProperty | MarkerProperty[];
  markerEnd?: MarkerEndProperty | MarkerEndProperty[];
  markerMid?: MarkerMidProperty | MarkerMidProperty[];
  markerStart?: MarkerStartProperty | MarkerStartProperty[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  overflow?: OverflowProperty | OverflowProperty[];
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  shapeRendering?: ShapeRenderingProperty | ShapeRenderingProperty[];
  stopColor?: StopColorProperty | StopColorProperty[];
  stopOpacity?: GlobalsNumber | GlobalsNumber[];
  stroke?: StrokeProperty | StrokeProperty[];
  strokeDasharray?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[];
  strokeDashoffset?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[];
  strokeLinecap?: StrokeLinecapProperty | StrokeLinecapProperty[];
  strokeLinejoin?: StrokeLinejoinProperty | StrokeLinejoinProperty[];
  strokeMiterlimit?: GlobalsNumber | GlobalsNumber[];
  strokeOpacity?: GlobalsNumber | GlobalsNumber[];
  strokeWidth?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[];
  textAnchor?: TextAnchorProperty | TextAnchorProperty[];
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  vectorEffect?: VectorEffectProperty | VectorEffectProperty[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  writingMode?: WritingModeProperty | WritingModeProperty[];
}

export interface PropertiesFallback<TLength = string | 0>
  extends StandardPropertiesFallback<TLength>,
    VendorPropertiesFallback<TLength>,
    ObsoletePropertiesFallback<TLength>,
    SvgPropertiesFallback<TLength> {}

export interface StandardLonghandPropertiesHyphenFallback<TLength = string | 0> {
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty | AlignContentProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  "block-overflow"?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  "box-align"?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  "box-flex-group"?: GlobalsNumber | GlobalsNumber[];
  "box-lines"?: BoxLinesProperty | BoxLinesProperty[];
  "box-ordinal-group"?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty | CaretColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  "color-adjust"?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  contain?: ContainProperty | ContainProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty | CounterResetProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty | FontKerningProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[];
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty | LineBreakProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | n/a  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[];
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  "mask-border-slice"?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty | MaskClipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty | MaskImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty | MaskModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[];
  "max-block-size"?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  "max-lines"?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[];
  "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty | OverflowProperty[];
  "overflow-anchor"?: OverflowAnchorProperty | OverflowAnchorProperty[];
  "overflow-block"?: OverflowBlockProperty | OverflowBlockProperty[];
  "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  "overflow-inline"?: OverflowInlineProperty | OverflowInlineProperty[];
  /**
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty | OverflowXProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty | OverflowYProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  "row-gap"?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[];
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty | TextAlignProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString | GlobalsString[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty | TextShadowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty | TextTransformProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty | TouchActionProperty[];
  /**
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString | GlobalsString[];
  /**
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString | GlobalsString[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty | UserSelectProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty | WillChangeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty | WordBreakProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty | WordWrapProperty[];
  /**
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty | ZIndexProperty[];
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesHyphenFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty | BorderColorProperty[];
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty | BorderImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty | GridAreaProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty | GridColumnProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty | GridRowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[];
  "line-clamp"?: LineClampProperty | LineClampProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty | ListStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  "mask-border"?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesHyphenFallback<TLength = string | 0>
  extends StandardLonghandPropertiesHyphenFallback<TLength>,
    StandardShorthandPropertiesHyphenFallback<TLength> {}

export interface VendorLonghandPropertiesHyphenFallback<TLength = string | 0> {
  "-moz-animation-delay"?: GlobalsString | GlobalsString[];
  "-moz-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  "-moz-animation-duration"?: GlobalsString | GlobalsString[];
  "-moz-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  "-moz-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  "-moz-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[];
  "-moz-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  "-moz-binding"?: MozBindingProperty | MozBindingProperty[];
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  "-moz-border-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  "-moz-border-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  "-moz-border-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  "-moz-border-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  "-moz-box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  "-moz-column-count"?: ColumnCountProperty | ColumnCountProperty[];
  "-moz-column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  "-moz-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  "-moz-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  "-moz-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  "-moz-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  "-moz-font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  "-moz-force-broken-image-icon"?: GlobalsNumber | GlobalsNumber[];
  "-moz-hyphens"?: HyphensProperty | HyphensProperty[];
  "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[];
  "-moz-orient"?: MozOrientProperty | MozOrientProperty[];
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  "-moz-padding-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  "-moz-padding-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  "-moz-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[];
  "-moz-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[];
  "-moz-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  "-moz-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  "-moz-transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  "-moz-transition-delay"?: GlobalsString | GlobalsString[];
  "-moz-transition-duration"?: GlobalsString | GlobalsString[];
  "-moz-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[];
  "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[];
  "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[];
  "-moz-user-select"?: UserSelectProperty | UserSelectProperty[];
  "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[];
  "-ms-accelerator"?: MsAcceleratorProperty | MsAcceleratorProperty[];
  "-ms-block-progression"?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  "-ms-content-zoom-limit-max"?: GlobalsString | GlobalsString[];
  "-ms-content-zoom-limit-min"?: GlobalsString | GlobalsString[];
  "-ms-content-zoom-snap-points"?: GlobalsString | GlobalsString[];
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  "-ms-content-zooming"?: MsContentZoomingProperty | MsContentZoomingProperty[];
  "-ms-filter"?: GlobalsString | GlobalsString[];
  "-ms-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  "-ms-flex-positive"?: GlobalsNumber | GlobalsNumber[];
  "-ms-flow-from"?: MsFlowFromProperty | MsFlowFromProperty[];
  "-ms-flow-into"?: MsFlowIntoProperty | MsFlowIntoProperty[];
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  "-ms-hyphens"?: HyphensProperty | HyphensProperty[];
  "-ms-ime-align"?: MsImeAlignProperty | MsImeAlignProperty[];
  "-ms-line-break"?: LineBreakProperty | LineBreakProperty[];
  "-ms-order"?: GlobalsNumber | GlobalsNumber[];
  "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  "-ms-overflow-x"?: OverflowXProperty | OverflowXProperty[];
  "-ms-overflow-y"?: OverflowYProperty | OverflowYProperty[];
  "-ms-scroll-chaining"?: MsScrollChainingProperty | MsScrollChainingProperty[];
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  "-ms-scroll-rails"?: MsScrollRailsProperty | MsScrollRailsProperty[];
  "-ms-scroll-snap-points-x"?: GlobalsString | GlobalsString[];
  "-ms-scroll-snap-points-y"?: GlobalsString | GlobalsString[];
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  "-ms-scroll-translation"?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  "-ms-text-autospace"?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  "-ms-text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  "-ms-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  "-ms-touch-action"?: TouchActionProperty | TouchActionProperty[];
  "-ms-touch-select"?: MsTouchSelectProperty | MsTouchSelectProperty[];
  "-ms-transform"?: TransformProperty | TransformProperty[];
  "-ms-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  "-ms-user-select"?: MsUserSelectProperty | MsUserSelectProperty[];
  "-ms-word-break"?: WordBreakProperty | WordBreakProperty[];
  "-ms-wrap-flow"?: MsWrapFlowProperty | MsWrapFlowProperty[];
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  "-ms-wrap-through"?: MsWrapThroughProperty | MsWrapThroughProperty[];
  "-ms-writing-mode"?: WritingModeProperty | WritingModeProperty[];
  "-o-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  "-o-object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  "-o-object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  "-o-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  "-o-text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  "-o-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  "-webkit-align-content"?: AlignContentProperty | AlignContentProperty[];
  "-webkit-align-items"?: AlignItemsProperty | AlignItemsProperty[];
  "-webkit-align-self"?: AlignSelfProperty | AlignSelfProperty[];
  "-webkit-animation-delay"?: GlobalsString | GlobalsString[];
  "-webkit-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  "-webkit-animation-duration"?: GlobalsString | GlobalsString[];
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  "-webkit-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  "-webkit-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  "-webkit-appearance"?: AppearanceProperty | AppearanceProperty[];
  "-webkit-backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  "-webkit-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  "-webkit-border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  "-webkit-box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  "-webkit-box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  "-webkit-clip-path"?: ClipPathProperty | ClipPathProperty[];
  "-webkit-column-count"?: ColumnCountProperty | ColumnCountProperty[];
  "-webkit-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  "-webkit-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  "-webkit-column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  "-webkit-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  "-webkit-filter"?: FilterProperty | FilterProperty[];
  "-webkit-flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  "-webkit-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  "-webkit-flex-grow"?: GlobalsNumber | GlobalsNumber[];
  "-webkit-flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  "-webkit-font-kerning"?: FontKerningProperty | FontKerningProperty[];
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  "-webkit-hyphens"?: HyphensProperty | HyphensProperty[];
  "-webkit-justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  "-webkit-line-break"?: LineBreakProperty | LineBreakProperty[];
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  "-webkit-mask-image"?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  "-webkit-order"?: GlobalsNumber | GlobalsNumber[];
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  "-webkit-padding-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  "-webkit-padding-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  "-webkit-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  "-webkit-shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  "-webkit-shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  "-webkit-text-combine"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  "-webkit-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  "-webkit-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  "-webkit-text-emphasis-position"?: GlobalsString | GlobalsString[];
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  "-webkit-text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  "-webkit-transform"?: TransformProperty | TransformProperty[];
  "-webkit-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  "-webkit-transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  "-webkit-transition-delay"?: GlobalsString | GlobalsString[];
  "-webkit-transition-duration"?: GlobalsString | GlobalsString[];
  "-webkit-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  "-webkit-user-modify"?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  "-webkit-user-select"?: UserSelectProperty | UserSelectProperty[];
  "-webkit-writing-mode"?: WritingModeProperty | WritingModeProperty[];
}

export interface VendorShorthandPropertiesHyphenFallback<TLength = string | 0> {
  "-moz-animation"?: AnimationProperty | AnimationProperty[];
  "-moz-border-image"?: BorderImageProperty | BorderImageProperty[];
  "-moz-column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  "-moz-columns"?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  "-moz-outline-radius"?: MozOutlineRadiusProperty<TLength> | MozOutlineRadiusProperty<TLength>[];
  "-moz-transition"?: TransitionProperty | TransitionProperty[];
  "-ms-content-zoom-limit"?: GlobalsString | GlobalsString[];
  "-ms-content-zoom-snap"?: MsContentZoomSnapProperty | MsContentZoomSnapProperty[];
  "-ms-flex"?: FlexProperty<TLength> | FlexProperty<TLength>[];
  "-ms-scroll-limit"?: GlobalsString | GlobalsString[];
  "-ms-scroll-snap-x"?: GlobalsString | GlobalsString[];
  "-ms-scroll-snap-y"?: GlobalsString | GlobalsString[];
  "-o-border-image"?: BorderImageProperty | BorderImageProperty[];
  "-webkit-animation"?: AnimationProperty | AnimationProperty[];
  "-webkit-border-before"?: WebkitBorderBeforeProperty<TLength> | WebkitBorderBeforeProperty<TLength>[];
  "-webkit-border-image"?: BorderImageProperty | BorderImageProperty[];
  "-webkit-border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  "-webkit-column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  "-webkit-columns"?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  "-webkit-flex"?: FlexProperty<TLength> | FlexProperty<TLength>[];
  "-webkit-flex-flow"?: FlexFlowProperty | FlexFlowProperty[];
  "-webkit-line-clamp"?: WebkitLineClampProperty | WebkitLineClampProperty[];
  "-webkit-mask"?: WebkitMaskProperty | WebkitMaskProperty[];
  "-webkit-text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[];
  "-webkit-text-stroke"?: WebkitTextStrokeProperty<TLength> | WebkitTextStrokeProperty<TLength>[];
  "-webkit-transition"?: TransitionProperty | TransitionProperty[];
}

export interface VendorPropertiesHyphenFallback<TLength = string | 0> extends VendorLonghandPropertiesHyphenFallback<TLength>, VendorShorthandPropertiesHyphenFallback<TLength> {}

export interface ObsoletePropertiesHyphenFallback<TLength = string | 0> {
  /** @deprecated */
  azimuth?: AzimuthProperty | AzimuthProperty[];
  /** @deprecated */
  "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  "box-flex"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  "box-pack"?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  clip?: ClipProperty | ClipProperty[];
  /** @deprecated */
  "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  /** @deprecated */
  "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  /** @deprecated */
  "grid-gap"?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  /** @deprecated */
  "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  /** @deprecated */
  "ime-mode"?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  /** @deprecated */
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  /** @deprecated */
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /** @deprecated */
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  /** @deprecated */
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  /** @deprecated */
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  /** @deprecated */
  "text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** @deprecated */
  "-khtml-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  "-khtml-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "-khtml-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  "-khtml-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** @deprecated */
  "-moz-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** @deprecated */
  "-moz-border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /** @deprecated */
  "-moz-border-radius-topright"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /** @deprecated */
  "-moz-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  "-moz-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "-moz-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  "-moz-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  "-moz-box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /** @deprecated */
  "-moz-opacity"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "-moz-outline"?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /** @deprecated */
  "-moz-outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  /** @deprecated */
  "-moz-outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  /** @deprecated */
  "-moz-outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /** @deprecated */
  "-moz-resize"?: ResizeProperty | ResizeProperty[];
  /** @deprecated */
  "-moz-text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  /** @deprecated */
  "-moz-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /** @deprecated */
  "-moz-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /** @deprecated */
  "-moz-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /** @deprecated */
  "-ms-ime-mode"?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  "-o-animation"?: AnimationProperty | AnimationProperty[];
  /** @deprecated */
  "-o-animation-delay"?: GlobalsString | GlobalsString[];
  /** @deprecated */
  "-o-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** @deprecated */
  "-o-animation-duration"?: GlobalsString | GlobalsString[];
  /** @deprecated */
  "-o-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** @deprecated */
  "-o-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** @deprecated */
  "-o-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /** @deprecated */
  "-o-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** @deprecated */
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** @deprecated */
  "-o-transform"?: TransformProperty | TransformProperty[];
  /** @deprecated */
  "-o-transition"?: TransitionProperty | TransitionProperty[];
  /** @deprecated */
  "-o-transition-delay"?: GlobalsString | GlobalsString[];
  /** @deprecated */
  "-o-transition-duration"?: GlobalsString | GlobalsString[];
  /** @deprecated */
  "-o-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** @deprecated */
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** @deprecated */
  "-webkit-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /** @deprecated */
  "-webkit-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "-webkit-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /** @deprecated */
  "-webkit-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /** @deprecated */
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /** @deprecated */
  "-webkit-scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
}

export interface SvgPropertiesHyphenFallback<TLength = string | 0> {
  "alignment-baseline"?: AlignmentBaselineProperty | AlignmentBaselineProperty[];
  "baseline-shift"?: BaselineShiftProperty<TLength> | BaselineShiftProperty<TLength>[];
  clip?: ClipProperty | ClipProperty[];
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  "clip-rule"?: ClipRuleProperty | ClipRuleProperty[];
  color?: ColorProperty | ColorProperty[];
  "color-interpolation"?: ColorInterpolationProperty | ColorInterpolationProperty[];
  "color-rendering"?: ColorRenderingProperty | ColorRenderingProperty[];
  cursor?: CursorProperty | CursorProperty[];
  direction?: DirectionProperty | DirectionProperty[];
  display?: DisplayProperty | DisplayProperty[];
  "dominant-baseline"?: DominantBaselineProperty | DominantBaselineProperty[];
  fill?: FillProperty | FillProperty[];
  "fill-opacity"?: GlobalsNumber | GlobalsNumber[];
  "fill-rule"?: FillRuleProperty | FillRuleProperty[];
  filter?: FilterProperty | FilterProperty[];
  "flood-color"?: FloodColorProperty | FloodColorProperty[];
  "flood-opacity"?: GlobalsNumber | GlobalsNumber[];
  font?: FontProperty | FontProperty[];
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  "glyph-orientation-vertical"?: GlyphOrientationVerticalProperty | GlyphOrientationVerticalProperty[];
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  "lighting-color"?: LightingColorProperty | LightingColorProperty[];
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  marker?: MarkerProperty | MarkerProperty[];
  "marker-end"?: MarkerEndProperty | MarkerEndProperty[];
  "marker-mid"?: MarkerMidProperty | MarkerMidProperty[];
  "marker-start"?: MarkerStartProperty | MarkerStartProperty[];
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  opacity?: GlobalsNumber | GlobalsNumber[];
  overflow?: OverflowProperty | OverflowProperty[];
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[];
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  "shape-rendering"?: ShapeRenderingProperty | ShapeRenderingProperty[];
  "stop-color"?: StopColorProperty | StopColorProperty[];
  "stop-opacity"?: GlobalsNumber | GlobalsNumber[];
  stroke?: StrokeProperty | StrokeProperty[];
  "stroke-dasharray"?: StrokeDasharrayProperty<TLength> | StrokeDasharrayProperty<TLength>[];
  "stroke-dashoffset"?: StrokeDashoffsetProperty<TLength> | StrokeDashoffsetProperty<TLength>[];
  "stroke-linecap"?: StrokeLinecapProperty | StrokeLinecapProperty[];
  "stroke-linejoin"?: StrokeLinejoinProperty | StrokeLinejoinProperty[];
  "stroke-miterlimit"?: GlobalsNumber | GlobalsNumber[];
  "stroke-opacity"?: GlobalsNumber | GlobalsNumber[];
  "stroke-width"?: StrokeWidthProperty<TLength> | StrokeWidthProperty<TLength>[];
  "text-anchor"?: TextAnchorProperty | TextAnchorProperty[];
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[];
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  "vector-effect"?: VectorEffectProperty | VectorEffectProperty[];
  visibility?: VisibilityProperty | VisibilityProperty[];
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
}

export interface PropertiesHyphenFallback<TLength = string | 0>
  extends StandardPropertiesHyphenFallback<TLength>,
    VendorPropertiesHyphenFallback<TLength>,
    ObsoletePropertiesHyphenFallback<TLength>,
    SvgPropertiesHyphenFallback<TLength> {}

export interface CounterStyle {
  additiveSymbols?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  speakAs?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}

export interface CounterStyleHyphen {
  "additive-symbols"?: string;
  fallback?: string;
  negative?: string;
  pad?: string;
  prefix?: string;
  range?: CounterStyleRangeProperty;
  "speak-as"?: CounterStyleSpeakAsProperty;
  suffix?: string;
  symbols?: string;
  system?: CounterStyleSystemProperty;
}

export interface CounterStyleFallback {
  additiveSymbols?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  speakAs?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}

export interface CounterStyleHyphenFallback {
  "additive-symbols"?: string | string[];
  fallback?: string | string[];
  negative?: string | string[];
  pad?: string | string[];
  prefix?: string | string[];
  range?: CounterStyleRangeProperty | CounterStyleRangeProperty[];
  "speak-as"?: CounterStyleSpeakAsProperty | CounterStyleSpeakAsProperty[];
  suffix?: string | string[];
  symbols?: string | string[];
  system?: CounterStyleSystemProperty | CounterStyleSystemProperty[];
}

export interface FontFace {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontDisplay?: FontFaceFontDisplayProperty;
  fontFamily?: string;
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty;
  fontStretch?: FontFaceFontStretchProperty;
  fontStyle?: FontFaceFontStyleProperty;
  fontVariant?: FontFaceFontVariantProperty;
  fontVariationSettings?: FontFaceFontVariationSettingsProperty;
  fontWeight?: FontFaceFontWeightProperty;
  src?: string;
  unicodeRange?: string;
}

export interface FontFaceHyphen {
  "-moz-font-feature-settings"?: FontFaceFontFeatureSettingsProperty;
  "font-display"?: FontFaceFontDisplayProperty;
  "font-family"?: string;
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty;
  "font-stretch"?: FontFaceFontStretchProperty;
  "font-style"?: FontFaceFontStyleProperty;
  "font-variant"?: FontFaceFontVariantProperty;
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty;
  "font-weight"?: FontFaceFontWeightProperty;
  src?: string;
  "unicode-range"?: string;
}

export interface FontFaceFallback {
  MozFontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  fontDisplay?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  fontFamily?: string | string[];
  fontFeatureSettings?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  fontStretch?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  fontStyle?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  fontVariant?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  fontVariationSettings?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  fontWeight?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  src?: string | string[];
  unicodeRange?: string | string[];
}

export interface FontFaceHyphenFallback {
  "-moz-font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  "font-display"?: FontFaceFontDisplayProperty | FontFaceFontDisplayProperty[];
  "font-family"?: string | string[];
  "font-feature-settings"?: FontFaceFontFeatureSettingsProperty | FontFaceFontFeatureSettingsProperty[];
  "font-stretch"?: FontFaceFontStretchProperty | FontFaceFontStretchProperty[];
  "font-style"?: FontFaceFontStyleProperty | FontFaceFontStyleProperty[];
  "font-variant"?: FontFaceFontVariantProperty | FontFaceFontVariantProperty[];
  "font-variation-settings"?: FontFaceFontVariationSettingsProperty | FontFaceFontVariationSettingsProperty[];
  "font-weight"?: FontFaceFontWeightProperty | FontFaceFontWeightProperty[];
  src?: string | string[];
  "unicode-range"?: string | string[];
}

export interface Page<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}

export interface PageHyphen<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength>;
  marks?: PageMarksProperty;
}

export interface PageFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}

export interface PageHyphenFallback<TLength = string | 0> {
  bleed?: PageBleedProperty<TLength> | PageBleedProperty<TLength>[];
  marks?: PageMarksProperty | PageMarksProperty[];
}

export interface Viewport<TLength = string | 0> {
  msHeight?: ViewportHeightProperty<TLength>;
  msMaxHeight?: ViewportMaxHeightProperty<TLength>;
  msMaxWidth?: ViewportMaxWidthProperty<TLength>;
  msMinHeight?: ViewportMinHeightProperty<TLength>;
  msMinWidth?: ViewportMinWidthProperty<TLength>;
  msOrientation?: ViewportOrientationProperty;
  msWidth?: ViewportWidthProperty<TLength>;
  msZoom?: ViewportZoomProperty;
  OOrientation?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  maxHeight?: ViewportMaxHeightProperty<TLength>;
  maxWidth?: ViewportMaxWidthProperty<TLength>;
  maxZoom?: ViewportMaxZoomProperty;
  minHeight?: ViewportMinHeightProperty<TLength>;
  minWidth?: ViewportMinWidthProperty<TLength>;
  minZoom?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  userZoom?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportHyphen<TLength = string | 0> {
  "-ms-height"?: ViewportHeightProperty<TLength>;
  "-ms-max-height"?: ViewportMaxHeightProperty<TLength>;
  "-ms-max-width"?: ViewportMaxWidthProperty<TLength>;
  "-ms-min-height"?: ViewportMinHeightProperty<TLength>;
  "-ms-min-width"?: ViewportMinWidthProperty<TLength>;
  "-ms-orientation"?: ViewportOrientationProperty;
  "-ms-width"?: ViewportWidthProperty<TLength>;
  "-ms-zoom"?: ViewportZoomProperty;
  "-o-orientation"?: ViewportOrientationProperty;
  height?: ViewportHeightProperty<TLength>;
  "max-height"?: ViewportMaxHeightProperty<TLength>;
  "max-width"?: ViewportMaxWidthProperty<TLength>;
  "max-zoom"?: ViewportMaxZoomProperty;
  "min-height"?: ViewportMinHeightProperty<TLength>;
  "min-width"?: ViewportMinWidthProperty<TLength>;
  "min-zoom"?: ViewportMinZoomProperty;
  orientation?: ViewportOrientationProperty;
  "user-zoom"?: ViewportUserZoomProperty;
  width?: ViewportWidthProperty<TLength>;
  zoom?: ViewportZoomProperty;
}

export interface ViewportFallback<TLength = string | 0> {
  msHeight?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  msMaxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  msMaxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  msMinHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  msMinWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  msOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  msWidth?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  msZoom?: ViewportZoomProperty | ViewportZoomProperty[];
  OOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  maxHeight?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  maxWidth?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  maxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  minHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  minWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  minZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  userZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}

export interface ViewportHyphenFallback<TLength = string | 0> {
  "-ms-height"?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  "-ms-max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  "-ms-max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  "-ms-min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  "-ms-min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  "-ms-orientation"?: ViewportOrientationProperty | ViewportOrientationProperty[];
  "-ms-width"?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  "-ms-zoom"?: ViewportZoomProperty | ViewportZoomProperty[];
  "-o-orientation"?: ViewportOrientationProperty | ViewportOrientationProperty[];
  height?: ViewportHeightProperty<TLength> | ViewportHeightProperty<TLength>[];
  "max-height"?: ViewportMaxHeightProperty<TLength> | ViewportMaxHeightProperty<TLength>[];
  "max-width"?: ViewportMaxWidthProperty<TLength> | ViewportMaxWidthProperty<TLength>[];
  "max-zoom"?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  "min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  "min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  "min-zoom"?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  orientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  "user-zoom"?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
  width?: ViewportWidthProperty<TLength> | ViewportWidthProperty<TLength>[];
  zoom?: ViewportZoomProperty | ViewportZoomProperty[];
}

export type AtRules =
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

export type AdvancedPseudos =
  | ":-moz-any"
  | ":-moz-dir"
  | ":-webkit-any"
  | "::cue"
  | ":dir"
  | ":lang"
  | ":not"
  | ":nth-child"
  | ":nth-last-child"
  | ":nth-last-of-type"
  | ":nth-of-type";

export type SimplePseudos =
  | ":-moz-any-link"
  | ":-moz-full-screen"
  | ":-moz-placeholder"
  | ":-moz-read-only"
  | ":-moz-read-write"
  | ":-ms-fullscreen"
  | ":-webkit-any-link"
  | ":-webkit-full-screen"
  | "::-moz-placeholder"
  | "::-moz-progress-bar"
  | "::-moz-range-progress"
  | "::-moz-range-thumb"
  | "::-moz-range-track"
  | "::-moz-selection"
  | "::-ms-backdrop"
  | "::-ms-browse"
  | "::-ms-check"
  | "::-ms-clear"
  | "::-ms-fill"
  | "::-ms-fill-lower"
  | "::-ms-fill-upper"
  | "::-ms-placeholder"
  | "::-ms-reveal"
  | "::-ms-thumb"
  | "::-ms-ticks-after"
  | "::-ms-ticks-before"
  | "::-ms-tooltip"
  | "::-ms-track"
  | "::-ms-value"
  | "::-webkit-backdrop"
  | "::-webkit-placeholder"
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
  | ":after"
  | ":any-link"
  | ":before"
  | ":checked"
  | ":default"
  | ":defined"
  | ":disabled"
  | ":empty"
  | ":enabled"
  | ":first"
  | ":first-child"
  | ":first-letter"
  | ":first-line"
  | ":first-of-type"
  | ":focus"
  | ":focus-visible"
  | ":focus-within"
  | ":fullscreen"
  | ":host"
  | ":host-context"
  | ":hover"
  | ":in-range"
  | ":indeterminate"
  | ":invalid"
  | ":last-child"
  | ":last-of-type"
  | ":left"
  | ":link"
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

export type Pseudos = AdvancedPseudos | SimplePseudos;

type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";

type GlobalsString = Globals | string;

type GlobalsNumber = Globals | number;

type AlignContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

type AlignItemsProperty = Globals | SelfPosition | "baseline" | "normal" | "stretch" | string;

type AlignSelfProperty = Globals | SelfPosition | "auto" | "baseline" | "normal" | "stretch" | string;

type AnimationProperty = Globals | SingleAnimation | string;

type AnimationDirectionProperty = Globals | SingleAnimationDirection | string;

type AnimationFillModeProperty = Globals | SingleAnimationFillMode | string;

type AnimationIterationCountProperty = Globals | "infinite" | string | number;

type AnimationNameProperty = Globals | "none" | string;

type AnimationPlayStateProperty = Globals | "paused" | "running" | string;

type AnimationTimingFunctionProperty = Globals | SingleTimingFunction | string;

type AppearanceProperty = Globals | "none";

type AzimuthProperty =
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

type BackdropFilterProperty = Globals | "none" | string;

type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;

type BackgroundAttachmentProperty = Globals | Attachment | string;

type BackgroundBlendModeProperty = Globals | BlendMode | string;

type BackgroundClipProperty = Globals | Box | string;

type BackgroundColorProperty = Globals | Color;

type BackgroundImageProperty = Globals | "none" | string;

type BackgroundOriginProperty = Globals | Box | string;

type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength> | string;

type BackgroundPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | string;

type BackgroundPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

type BackgroundRepeatProperty = Globals | RepeatStyle | string;

type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength> | string;

type BlockOverflowProperty = Globals | "clip" | "ellipsis" | string;

type BlockSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type BorderProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockEndColorProperty = Globals | Color;

type BorderBlockEndStyleProperty = Globals | BrStyle | string;

type BorderBlockEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type BorderBlockStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBlockStartColorProperty = Globals | Color;

type BorderBlockStartStyleProperty = Globals | BrStyle | string;

type BorderBlockStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type BorderBottomProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderBottomColorProperty = Globals | Color;

type BorderBottomLeftRadiusProperty<TLength> = Globals | TLength | string;

type BorderBottomRightRadiusProperty<TLength> = Globals | TLength | string;

type BorderBottomStyleProperty = Globals | BrStyle;

type BorderBottomWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderCollapseProperty = Globals | "collapse" | "separate";

type BorderColorProperty = Globals | Color | string;

type BorderImageProperty = Globals | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

type BorderImageOutsetProperty<TLength> = Globals | TLength | string | number;

type BorderImageRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

type BorderImageSliceProperty = Globals | string | number;

type BorderImageSourceProperty = Globals | "none" | string;

type BorderImageWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

type BorderInlineEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderInlineEndColorProperty = Globals | Color;

type BorderInlineEndStyleProperty = Globals | BrStyle | string;

type BorderInlineEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type BorderInlineStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderInlineStartColorProperty = Globals | Color;

type BorderInlineStartStyleProperty = Globals | BrStyle | string;

type BorderInlineStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type BorderLeftProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderLeftColorProperty = Globals | Color;

type BorderLeftStyleProperty = Globals | BrStyle;

type BorderLeftWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderRadiusProperty<TLength> = Globals | TLength | string;

type BorderRightProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderRightColorProperty = Globals | Color;

type BorderRightStyleProperty = Globals | BrStyle;

type BorderRightWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderSpacingProperty<TLength> = Globals | TLength | string;

type BorderStyleProperty = Globals | BrStyle | string;

type BorderTopProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type BorderTopColorProperty = Globals | Color;

type BorderTopLeftRadiusProperty<TLength> = Globals | TLength | string;

type BorderTopRightRadiusProperty<TLength> = Globals | TLength | string;

type BorderTopStyleProperty = Globals | BrStyle;

type BorderTopWidthProperty<TLength> = Globals | BrWidth<TLength>;

type BorderWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type BottomProperty<TLength> = Globals | TLength | "auto" | string;

type BoxAlignProperty = Globals | "baseline" | "center" | "end" | "start" | "stretch";

type BoxDecorationBreakProperty = Globals | "clone" | "slice";

type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

type BoxLinesProperty = Globals | "multiple" | "single";

type BoxOrientProperty = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

type BoxShadowProperty = Globals | "none" | string;

type BoxSizingProperty = Globals | "border-box" | "content-box";

type BreakAfterProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakBeforeProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

type BreakInsideProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

type CaptionSideProperty = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

type CaretColorProperty = Globals | Color | "auto";

type ClearProperty = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

type ClipProperty = Globals | "auto" | string;

type ClipPathProperty = Globals | GeometryBox | "none" | string;

type ColorProperty = Globals | Color;

type ColorAdjustProperty = Globals | "economy" | "exact";

type ColumnCountProperty = Globals | "auto" | number;

type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

type ColumnGapProperty<TLength> = Globals | TLength | "normal" | string;

type ColumnRuleProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type ColumnRuleColorProperty = Globals | Color;

type ColumnRuleStyleProperty = Globals | BrStyle | string;

type ColumnRuleWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type ColumnSpanProperty = Globals | "all" | "none";

type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

type ColumnsProperty<TLength> = Globals | TLength | "auto" | string | number;

type ContainProperty = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

type ContentProperty = Globals | ContentList | "none" | "normal" | string;

type CounterIncrementProperty = Globals | "none" | string;

type CounterResetProperty = Globals | "none" | string;

type CursorProperty =
  | Globals
  | "-moz-grab"
  | "-webkit-grab"
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

type DirectionProperty = Globals | "ltr" | "rtl";

type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayInternal | DisplayLegacy | "contents" | "list-item" | "none" | string;

type EmptyCellsProperty = Globals | "hide" | "show";

type FilterProperty = Globals | "none" | string;

type FlexProperty<TLength> = Globals | TLength | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | "none" | string | number;

type FlexBasisProperty<TLength> = Globals | TLength | "-webkit-auto" | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | string;

type FlexDirectionProperty = Globals | "column" | "column-reverse" | "row" | "row-reverse";

type FlexFlowProperty = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | string;

type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

type FloatProperty = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

type FontProperty = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

type FontFamilyProperty = Globals | GenericFamily | string;

type FontFeatureSettingsProperty = Globals | "normal" | string;

type FontKerningProperty = Globals | "auto" | "none" | "normal";

type FontLanguageOverrideProperty = Globals | "normal" | string;

type FontSizeProperty<TLength> = Globals | AbsoluteSize | TLength | "larger" | "smaller" | string;

type FontSizeAdjustProperty = Globals | "none" | number;

type FontStretchProperty =
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

type FontStyleProperty = Globals | "italic" | "normal" | "oblique";

type FontSynthesisProperty = Globals | "none" | "style" | "weight" | string;

type FontVariantProperty =
  | Globals
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

type FontVariantAlternatesProperty = Globals | "historical-forms" | "normal" | string;

type FontVariantCapsProperty = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | string;

type FontVariantLigaturesProperty =
  | Globals
  | "common-ligatures"
  | "contextual"
  | "discretionary-ligatures"
  | "historical-ligatures"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | string;

type FontVariantNumericProperty =
  | Globals
  | "diagonal-fractions"
  | "lining-nums"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "proportional-nums"
  | "slashed-zero"
  | "stacked-fractions"
  | "tabular-nums"
  | string;

type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

type FontVariationSettingsProperty = Globals | "normal" | string;

type FontWeightProperty = Globals | "bold" | "bolder" | "lighter" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type GapProperty<TLength> = Globals | TLength | "normal" | string;

type GridProperty = Globals | "none" | string;

type GridAreaProperty = Globals | GridLine | string;

type GridAutoColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

type GridAutoFlowProperty = Globals | "column" | "dense" | "row" | string;

type GridAutoRowsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

type GridColumnProperty = Globals | GridLine | string;

type GridColumnEndProperty = Globals | GridLine;

type GridColumnGapProperty<TLength> = Globals | TLength | string;

type GridColumnStartProperty = Globals | GridLine;

type GridGapProperty<TLength> = Globals | TLength | string;

type GridRowProperty = Globals | GridLine | string;

type GridRowEndProperty = Globals | GridLine;

type GridRowGapProperty<TLength> = Globals | TLength | string;

type GridRowStartProperty = Globals | GridLine;

type GridTemplateProperty = Globals | "none" | string;

type GridTemplateAreasProperty = Globals | "none" | string;

type GridTemplateColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

type GridTemplateRowsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

type HangingPunctuationProperty = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | string;

type HeightProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type HyphensProperty = Globals | "auto" | "manual" | "none";

type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

type ImageRenderingProperty = Globals | "-moz-crisp-edges" | "-o-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";

type ImageResolutionProperty = Globals | "from-image" | string;

type ImeModeProperty = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

type InitialLetterProperty = Globals | "normal" | string | number;

type InitialLetterAlignProperty = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

type InlineSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

type IsolationProperty = Globals | "auto" | "isolate";

type JustifyContentProperty = Globals | ContentDistribution | ContentPosition | "left" | "normal" | "right" | string;

type JustifyItemsProperty = Globals | SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | string;

type JustifySelfProperty = Globals | SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | string;

type LeftProperty<TLength> = Globals | TLength | "auto" | string;

type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

type LineBreakProperty = Globals | "auto" | "loose" | "normal" | "strict";

type LineClampProperty = Globals | "none" | number;

type LineHeightProperty<TLength> = Globals | TLength | "normal" | string | number;

type LineHeightStepProperty<TLength> = Globals | TLength | "none";

type ListStyleProperty = Globals | "inside" | "none" | "outside" | string;

type ListStyleImageProperty = Globals | "none" | string;

type ListStylePositionProperty = Globals | "inside" | "outside";

type ListStyleTypeProperty = Globals | "none" | string;

type MarginProperty<TLength> = Globals | TLength | "auto" | string;

type MarginBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

type MarginBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

type MarginInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

type MarginInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

type MaskProperty<TLength> = Globals | MaskLayer<TLength> | string;

type MaskBorderProperty = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

type MaskBorderModeProperty = Globals | "alpha" | "luminance";

type MaskBorderOutsetProperty<TLength> = Globals | TLength | string | number;

type MaskBorderRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

type MaskBorderSliceProperty = Globals | string | number;

type MaskBorderSourceProperty = Globals | "none" | string;

type MaskBorderWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

type MaskCompositeProperty = Globals | CompositingOperator | string;

type MaskImageProperty = Globals | "none" | string;

type MaskModeProperty = Globals | MaskingMode | string;

type MaskOriginProperty = Globals | GeometryBox | string;

type MaskPositionProperty<TLength> = Globals | Position<TLength> | string;

type MaskRepeatProperty = Globals | RepeatStyle | string;

type MaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;

type MaskTypeProperty = Globals | "alpha" | "luminance";

type MaxBlockSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxHeightProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxInlineSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MaxLinesProperty = Globals | "none" | number;

type MaxWidthProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

type MinBlockSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinHeightProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinInlineSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MinWidthProperty<TLength> = Globals | TLength | "-webkit-fill-available" | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

type MixBlendModeProperty = Globals | BlendMode;

type OffsetProperty<TLength> = Globals | Position<TLength> | GeometryBox | "auto" | "none" | string;

type OffsetDistanceProperty<TLength> = Globals | TLength | string;

type OffsetPathProperty = Globals | GeometryBox | "none" | string;

type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

type ObjectFitProperty = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

type OffsetAnchorProperty<TLength> = Globals | Position<TLength> | "auto";

type OffsetBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

type OffsetPositionProperty<TLength> = Globals | Position<TLength> | "auto";

type OutlineProperty<TLength> = Globals | Color | BrStyle | BrWidth<TLength> | "auto" | "invert" | string;

type OutlineColorProperty = Globals | Color | "invert";

type OutlineOffsetProperty<TLength> = Globals | TLength;

type OutlineStyleProperty = Globals | BrStyle | "auto";

type OutlineWidthProperty<TLength> = Globals | BrWidth<TLength>;

type OverflowProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

type OverflowAnchorProperty = Globals | "auto" | "none";

type OverflowBlockProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

type OverflowInlineProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

type OverflowWrapProperty = Globals | "break-word" | "normal";

type OverflowXProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

type OverflowYProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

type OverscrollBehaviorProperty = Globals | "auto" | "contain" | "none" | string;

type OverscrollBehaviorXProperty = Globals | "auto" | "contain" | "none";

type OverscrollBehaviorYProperty = Globals | "auto" | "contain" | "none";

type PaddingProperty<TLength> = Globals | TLength | string;

type PaddingBlockEndProperty<TLength> = Globals | TLength | string;

type PaddingBlockStartProperty<TLength> = Globals | TLength | string;

type PaddingBottomProperty<TLength> = Globals | TLength | string;

type PaddingInlineEndProperty<TLength> = Globals | TLength | string;

type PaddingInlineStartProperty<TLength> = Globals | TLength | string;

type PaddingLeftProperty<TLength> = Globals | TLength | string;

type PaddingRightProperty<TLength> = Globals | TLength | string;

type PaddingTopProperty<TLength> = Globals | TLength | string;

type PageBreakAfterProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

type PageBreakBeforeProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

type PageBreakInsideProperty = Globals | "auto" | "avoid";

type PaintOrderProperty = Globals | "fill" | "markers" | "normal" | "stroke" | string;

type PerspectiveProperty<TLength> = Globals | TLength | "none";

type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

type PlaceContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

type PointerEventsProperty = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

type PositionProperty = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

type QuotesProperty = Globals | "none" | string;

type ResizeProperty = Globals | "both" | "horizontal" | "none" | "vertical";

type RightProperty<TLength> = Globals | TLength | "auto" | string;

type RotateProperty = Globals | "none" | string;

type RowGapProperty<TLength> = Globals | TLength | "normal" | string;

type RubyAlignProperty = Globals | "center" | "space-around" | "space-between" | "start";

type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

type RubyPositionProperty = Globals | "inter-character" | "over" | "under";

type ScaleProperty = Globals | "none" | string | number;

type ScrollBehaviorProperty = Globals | "auto" | "smooth";

type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | "none" | string;

type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;

type ScrollSnapPointsXProperty = Globals | "none" | string;

type ScrollSnapPointsYProperty = Globals | "none" | string;

type ScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

type ScrollSnapTypeXProperty = Globals | "mandatory" | "none" | "proximity";

type ScrollSnapTypeYProperty = Globals | "mandatory" | "none" | "proximity";

type ShapeMarginProperty<TLength> = Globals | TLength | string;

type ShapeOutsideProperty = Globals | Box | "margin-box" | "none" | string;

type TabSizeProperty<TLength> = Globals | TLength | number;

type TableLayoutProperty = Globals | "auto" | "fixed";

type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

type TextAlignLastProperty = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

type TextCombineUprightProperty = Globals | "all" | "digits" | "none" | string;

type TextDecorationProperty = Globals | Color | "blink" | "dashed" | "dotted" | "double" | "line-through" | "none" | "overline" | "solid" | "underline" | "wavy" | string;

type TextDecorationColorProperty = Globals | Color;

type TextDecorationLineProperty = Globals | "blink" | "line-through" | "none" | "overline" | "underline" | string;

type TextDecorationSkipProperty = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

type TextDecorationSkipInkProperty = Globals | "auto" | "none";

type TextDecorationStyleProperty = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

type TextEmphasisProperty = Globals | Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

type TextEmphasisColorProperty = Globals | Color;

type TextEmphasisStyleProperty = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

type TextIndentProperty<TLength> = Globals | TLength | string;

type TextJustifyProperty = Globals | "auto" | "inter-character" | "inter-word" | "none";

type TextOrientationProperty = Globals | "mixed" | "sideways" | "upright";

type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

type TextRenderingProperty = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

type TextShadowProperty = Globals | "none" | string;

type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

type TextTransformProperty = Globals | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

type TextUnderlinePositionProperty = Globals | "auto" | "left" | "right" | "under" | string;

type TopProperty<TLength> = Globals | TLength | "auto" | string;

type TouchActionProperty =
  | Globals
  | "-ms-manipulation"
  | "-ms-pinch-zoom"
  | "auto"
  | "manipulation"
  | "none"
  | "pan-down"
  | "pan-left"
  | "pan-right"
  | "pan-up"
  | "pan-x"
  | "pan-y"
  | "pinch-zoom"
  | string;

type TransformProperty = Globals | "none" | string;

type TransformBoxProperty = Globals | "border-box" | "fill-box" | "view-box";

type TransformOriginProperty<TLength> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | string;

type TransformStyleProperty = Globals | "flat" | "preserve-3d";

type TransitionProperty = Globals | SingleTransition | string;

type TransitionPropertyProperty = Globals | "all" | "none" | string;

type TransitionTimingFunctionProperty = Globals | SingleTimingFunction | string;

type TranslateProperty<TLength> = Globals | TLength | "none" | string;

type UnicodeBidiProperty =
  | Globals
  | "-moz-isolate"
  | "-moz-isolate-override"
  | "-moz-plaintext"
  | "-webkit-isolate"
  | "bidi-override"
  | "embed"
  | "isolate"
  | "isolate-override"
  | "normal"
  | "plaintext";

type UserSelectProperty = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";

type VerticalAlignProperty<TLength> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

type WhiteSpaceProperty = Globals | "-moz-pre-wrap" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

type WidthProperty<TLength> =
  | Globals
  | TLength
  | "-moz-available"
  | "-moz-fit-content"
  | "-moz-max-content"
  | "-moz-min-content"
  | "-webkit-fit-content"
  | "-webkit-max-content"
  | "-webkit-min-content"
  | "auto"
  | "available"
  | "fit-content"
  | "intrinsic"
  | "max-content"
  | "min-content"
  | "min-intrinsic"
  | string;

type WillChangeProperty = Globals | AnimateableFeature | "auto" | string;

type WordBreakProperty = Globals | "break-all" | "break-word" | "keep-all" | "normal";

type WordSpacingProperty<TLength> = Globals | TLength | "normal" | string;

type WordWrapProperty = Globals | "break-word" | "normal";

type WritingModeProperty = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

type ZIndexProperty = Globals | "auto" | number;

type ZoomProperty = Globals | "normal" | "reset" | string | number;

type MozAppearanceProperty =
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

type MozBindingProperty = Globals | "none" | string;

type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

type MozBorderRightColorsProperty = Globals | Color | "none" | string;

type MozBorderTopColorsProperty = Globals | Color | "none" | string;

type MozContextPropertiesProperty = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

type MozFloatEdgeProperty = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

type MozImageRegionProperty = Globals | "auto" | string;

type MozOrientProperty = Globals | "block" | "horizontal" | "inline" | "vertical";

type MozOutlineRadiusProperty<TLength> = Globals | TLength | string;

type MozOutlineRadiusBottomleftProperty<TLength> = Globals | TLength | string;

type MozOutlineRadiusBottomrightProperty<TLength> = Globals | TLength | string;

type MozOutlineRadiusTopleftProperty<TLength> = Globals | TLength | string;

type MozOutlineRadiusToprightProperty<TLength> = Globals | TLength | string;

type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

type MozTextBlinkProperty = Globals | "blink" | "none";

type MozUserFocusProperty = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

type MozUserInputProperty = Globals | "auto" | "disabled" | "enabled" | "none";

type MozUserModifyProperty = Globals | "read-only" | "read-write" | "write-only";

type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

type MozWindowShadowProperty = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

type MsAcceleratorProperty = Globals | "false" | "true";

type MsBlockProgressionProperty = Globals | "bt" | "lr" | "rl" | "tb";

type MsContentZoomChainingProperty = Globals | "chained" | "none";

type MsContentZoomSnapProperty = Globals | "mandatory" | "none" | "proximity" | string;

type MsContentZoomSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

type MsContentZoomingProperty = Globals | "none" | "zoom";

type MsFlowFromProperty = Globals | "none" | string;

type MsFlowIntoProperty = Globals | "none" | string;

type MsHighContrastAdjustProperty = Globals | "auto" | "none";

type MsHyphenateLimitCharsProperty = Globals | "auto" | string | number;

type MsHyphenateLimitLinesProperty = Globals | "no-limit" | number;

type MsHyphenateLimitZoneProperty<TLength> = Globals | TLength | string;

type MsImeAlignProperty = Globals | "after" | "auto";

type MsOverflowStyleProperty = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

type MsScrollChainingProperty = Globals | "chained" | "none";

type MsScrollLimitXMaxProperty<TLength> = Globals | TLength | "auto";

type MsScrollLimitXMinProperty<TLength> = Globals | TLength;

type MsScrollLimitYMaxProperty<TLength> = Globals | TLength | "auto";

type MsScrollLimitYMinProperty<TLength> = Globals | TLength;

type MsScrollRailsProperty = Globals | "none" | "railed";

type MsScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

type MsScrollTranslationProperty = Globals | "none" | "vertical-to-horizontal";

type MsScrollbar3dlightColorProperty = Globals | Color;

type MsScrollbarArrowColorProperty = Globals | Color;

type MsScrollbarBaseColorProperty = Globals | Color;

type MsScrollbarDarkshadowColorProperty = Globals | Color;

type MsScrollbarFaceColorProperty = Globals | Color;

type MsScrollbarHighlightColorProperty = Globals | Color;

type MsScrollbarShadowColorProperty = Globals | Color;

type MsScrollbarTrackColorProperty = Globals | Color;

type MsTextAutospaceProperty = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

type MsTouchSelectProperty = Globals | "grippers" | "none";

type MsUserSelectProperty = Globals | "element" | "none" | "text";

type MsWrapFlowProperty = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

type MsWrapMarginProperty<TLength> = Globals | TLength;

type MsWrapThroughProperty = Globals | "none" | "wrap";

type WebkitBorderBeforeProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

type WebkitBorderBeforeColorProperty = Globals | Color;

type WebkitBorderBeforeStyleProperty = Globals | BrStyle | string;

type WebkitBorderBeforeWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

type WebkitBoxReflectProperty<TLength> = Globals | TLength | "above" | "below" | "left" | "right" | string;

type WebkitLineClampProperty = Globals | "none" | number;

type WebkitMaskProperty = Globals | "none" | string;

type WebkitMaskAttachmentProperty = Globals | Attachment | string;

type WebkitMaskClipProperty = Globals | "border" | "border-box" | "content" | "content-box" | "padding" | "padding-box" | "text" | string;

type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

type WebkitMaskImageProperty = Globals | "none" | string;

type WebkitMaskOriginProperty = Globals | "border" | "content" | "padding" | string;

type WebkitMaskPositionProperty<TLength> = Globals | MaskPosition<TLength> | string;

type WebkitMaskPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | string;

type WebkitMaskPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | string;

type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

type WebkitMaskRepeatXProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

type WebkitMaskRepeatYProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

type WebkitTapHighlightColorProperty = Globals | Color;

type WebkitTextFillColorProperty = Globals | Color;

type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;

type WebkitTextStrokeColorProperty = Globals | Color;

type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

type WebkitTouchCalloutProperty = Globals | "default" | "none";

type WebkitUserModifyProperty = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

type AlignmentBaselineProperty =
  | Globals
  | "after-edge"
  | "alphabetic"
  | "auto"
  | "baseline"
  | "before-edge"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "text-after-edge"
  | "text-before-edge";

type BaselineShiftProperty<TLength> = Globals | TLength | "baseline" | "sub" | "super" | string;

type ClipRuleProperty = Globals | "evenodd" | "nonzero";

type ColorInterpolationProperty = Globals | "auto" | "linearRGB" | "sRGB";

type ColorRenderingProperty = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

type DominantBaselineProperty =
  | Globals
  | "alphabetic"
  | "auto"
  | "central"
  | "hanging"
  | "ideographic"
  | "mathematical"
  | "middle"
  | "no-change"
  | "reset-size"
  | "text-after-edge"
  | "text-before-edge"
  | "use-script";

type FillProperty = Globals | Paint;

type FillRuleProperty = Globals | "evenodd" | "nonzero";

type FloodColorProperty = Globals | Color | "currentColor";

type GlyphOrientationVerticalProperty = Globals | "auto" | string | number;

type LightingColorProperty = Globals | Color | "currentColor";

type MarkerProperty = Globals | "none" | string;

type MarkerEndProperty = Globals | "none" | string;

type MarkerMidProperty = Globals | "none" | string;

type MarkerStartProperty = Globals | "none" | string;

type ShapeRenderingProperty = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

type StopColorProperty = Globals | Color | "currentColor";

type StrokeProperty = Globals | Paint;

type StrokeDasharrayProperty<TLength> = Globals | Dasharray<TLength> | "none";

type StrokeDashoffsetProperty<TLength> = Globals | TLength | string;

type StrokeLinecapProperty = Globals | "butt" | "round" | "square";

type StrokeLinejoinProperty = Globals | "bevel" | "miter" | "round";

type StrokeWidthProperty<TLength> = Globals | TLength | string;

type TextAnchorProperty = Globals | "end" | "middle" | "start";

type VectorEffectProperty = Globals | "non-scaling-stroke" | "none";

type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

type CounterStyleSpeakAsProperty = "auto" | "bullets" | "numbers" | "spell-out" | "words" | string;

type CounterStyleSystemProperty = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | string;

type FontFaceFontFeatureSettingsProperty = "normal" | string;

type FontFaceFontDisplayProperty = "auto" | "block" | "fallback" | "optional" | "swap";

type FontFaceFontStretchProperty =
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded";

type FontFaceFontStyleProperty = "italic" | "normal" | "oblique";

type FontFaceFontVariantProperty =
  | EastAsianVariantValues
  | "all-petite-caps"
  | "all-small-caps"
  | "common-ligatures"
  | "contextual"
  | "diagonal-fractions"
  | "discretionary-ligatures"
  | "full-width"
  | "historical-forms"
  | "historical-ligatures"
  | "lining-nums"
  | "no-common-ligatures"
  | "no-contextual"
  | "no-discretionary-ligatures"
  | "no-historical-ligatures"
  | "none"
  | "normal"
  | "oldstyle-nums"
  | "ordinal"
  | "petite-caps"
  | "proportional-nums"
  | "proportional-width"
  | "ruby"
  | "slashed-zero"
  | "small-caps"
  | "stacked-fractions"
  | "tabular-nums"
  | "titling-caps"
  | "unicase"
  | string;

type FontFaceFontVariationSettingsProperty = "normal";

type FontFaceFontWeightProperty = "bold" | "normal" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type PageBleedProperty<TLength> = TLength | "auto";

type PageMarksProperty = "crop" | "cross" | "none" | string;

type ViewportHeightProperty<TLength> = ViewportLength<TLength> | string;

type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

type ViewportWidthProperty<TLength> = ViewportLength<TLength> | string;

type ViewportZoomProperty = "auto" | string | number;

type ViewportMaxZoomProperty = "auto" | string | number;

type ViewportMinZoomProperty = "auto" | string | number;

type ViewportUserZoomProperty = "fixed" | "zoom";

type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small";

type AnimateableFeature = "contents" | "scroll-position" | string;

type Attachment = "fixed" | "local" | "scroll";

type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | string;

type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | string;

type BlendMode =
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

type Box = "border-box" | "content-box" | "padding-box";

type BrStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

type BrWidth<TLength> = TLength | "medium" | "thick" | "thin";

type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | string;

type CompositeStyle =
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

type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";

type ContentList = Quote | "contents" | string;

type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

type CubicBezierTimingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | string;

type Dasharray<TLength> = TLength | string | number;

type DeprecatedSystemColor =
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

type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "subgrid" | "table";

type DisplayInternal =
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

type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

type DisplayOutside = "block" | "inline" | "run-in";

type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

type FinalBgLayer<TLength> = Color | BgPosition<TLength> | RepeatStyle | Attachment | Box | "none" | string;

type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";

type GridLine = "auto" | string | number;

type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | string;

type MaskPosition<TLength> = TLength | "center" | "left" | "right" | string;

type MaskingMode = "alpha" | "luminance" | "match-source";

type NamedColor =
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

type Paint = Color | "child" | "context-fill" | "context-stroke" | "none" | string;

type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | string;

type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | string;

type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";

type SingleAnimation = SingleTimingFunction | SingleAnimationDirection | SingleAnimationFillMode | "infinite" | "none" | "paused" | "running" | string | number;

type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

type SingleTimingFunction = CubicBezierTimingFunction | StepTimingFunction | "linear" | string;

type SingleTransition = SingleTimingFunction | "all" | "none" | string;

type StepTimingFunction = "step-end" | "step-start" | string;

type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | string;

type ViewportLength<TLength> = TLength | "auto" | string;
