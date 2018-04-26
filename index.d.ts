export interface StandardLonghandProperties<TLength = string | 0> {
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty;
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty;
  /**
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty;
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty;
  /**
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty;
  /**
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty;
  /**
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty;
  /**
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  /**
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  /**
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty;
  /**
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  blockOverflow?: BlockOverflowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  /**
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  /**
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty;
  /**
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty;
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  /** **Initial value**: `stretch` */
  boxAlign?: BoxAlignProperty;
  /**
   * **Initial value**: `slice`
   *
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: BoxDecorationBreakProperty;
  /** **Initial value**: `1` */
  boxFlexGroup?: GlobalsNumber;
  /** **Initial value**: `single` */
  boxLines?: BoxLinesProperty;
  /** **Initial value**: `1` */
  boxOrdinalGroup?: GlobalsNumber;
  /**
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty;
  /**
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty;
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty;
  /**
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  /** **Initial value**: `economy` */
  colorAdjust?: ColorAdjustProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty;
  /**
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  contain?: ContainProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength>;
  /**
   * **Initial value**: `row`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber;
  /**
   * **Initial value**: `1`
   *
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber;
  /**
   * **Initial value**: `nowrap`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty;
  /**
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  /**
   * **Initial value**: `row`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  /** **Initial value**: `none` */
  hangingPunctuation?: HangingPunctuationProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * **Initial value**: `manual`
   *
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty;
  /** **Initial value**: `1dppx` */
  imageResolution?: ImageResolutionProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty;
  /** **Initial value**: `auto` */
  initialLetterAlign?: InitialLetterAlignProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty;
  /**
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength>;
  /** **Initial value**: `none` */
  lineHeightStep?: LineHeightStepProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty;
  /**
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty;
  /**
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                       | Firefox               | Safari                       | Edge | IE  |
   * | ---------------------------- | --------------------- | ---------------------------- | ---- | --- |
   * | **2** _(-webkit-margin-end)_ | **41**                | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                         | Firefox                 | Safari                         | Edge | IE  |
   * | ------------------------------ | ----------------------- | ------------------------------ | ---- | --- |
   * | **2** _(-webkit-margin-start)_ | **41**                  | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: MarginTopProperty<TLength>;
  /** **Initial value**: `alpha` */
  maskBorderMode?: MaskBorderModeProperty;
  /** **Initial value**: `0` */
  maskBorderOutset?: MaskBorderOutsetProperty<TLength>;
  /** **Initial value**: `stretch` */
  maskBorderRepeat?: MaskBorderRepeatProperty;
  /** **Initial value**: `0` */
  maskBorderSlice?: MaskBorderSliceProperty;
  /** **Initial value**: `none` */
  maskBorderSource?: MaskBorderSourceProperty;
  /** **Initial value**: `auto` */
  maskBorderWidth?: MaskBorderWidthProperty<TLength>;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty;
  /**
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty;
  /**
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty;
  /**
   * **Initial value**: `center`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength>;
  /**
   * **Initial value**: `no-repeat`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength>;
  /**
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty;
  /** **Initial value**: `0` */
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `none` */
  maxLines?: MaxLinesProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty;
  /**
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty;
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `auto` */
  offsetAnchor?: OffsetAnchorProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty;
  /** **Initial value**: `auto` */
  offsetPosition?: OffsetPositionProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty;
  /**
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * **Initial value**: `0`
   *
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength>;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty;
  /** **Initial value**: `auto` */
  overflowAnchor?: OverflowAnchorProperty;
  /** **Initial value**: `auto` */
  overflowBlock?: OverflowBlockProperty;
  /** **Initial value**: `padding-box` */
  overflowClipBox?: OverflowClipBoxProperty;
  /** **Initial value**: `auto` */
  overflowInline?: OverflowInlineProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty;
  /**
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  /** **Initial value**: `normal` */
  rowGap?: RowGapProperty<TLength>;
  /**
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty;
  /** **Initial value**: `separate` */
  rubyMerge?: RubyMergeProperty;
  /**
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty;
  /**
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty;
  /**
   * **Initial value**: `8`
   *
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty;
  /**
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty;
  /**
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  /**
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty;
  /**
   * **Initial value**: `over right`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty;
  /**
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty;
  /**
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty;
  /**
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty;
  /**
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength>;
  /**
   * **Initial value**: `flat`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString;
  /**
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty;
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty;
  /**
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength>;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty;
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty;
  /**
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty;
  /** **Initial value**: `normal` */
  zoom?: ZoomProperty;
}

export interface StandardShorthandProperties<TLength = string | 0> {
  all?: Globals;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty;
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty;
  /** **Initial value**: `none` */
  lineClamp?: LineClampProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty;
}

export interface StandardProperties<TLength = string | 0> extends StandardLonghandProperties<TLength>, StandardShorthandProperties<TLength> {}

export interface VendorLonghandProperties<TLength = string | 0> {
  /** **Initial value**: `0s` */
  MozAnimationDelay?: GlobalsString;
  /** **Initial value**: `normal` */
  MozAnimationDirection?: AnimationDirectionProperty;
  /** **Initial value**: `0s` */
  MozAnimationDuration?: GlobalsString;
  /** **Initial value**: `none` */
  MozAnimationFillMode?: AnimationFillModeProperty;
  /** **Initial value**: `1` */
  MozAnimationIterationCount?: AnimationIterationCountProperty;
  /** **Initial value**: `none` */
  MozAnimationName?: AnimationNameProperty;
  /** **Initial value**: `running` */
  MozAnimationPlayState?: AnimationPlayStateProperty;
  /** **Initial value**: `ease` */
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty;
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  MozAppearance?: MozAppearanceProperty;
  /** **Initial value**: `visible` */
  MozBackfaceVisibility?: BackfaceVisibilityProperty;
  /** **Initial value**: `none` */
  MozBinding?: MozBindingProperty;
  /** **Initial value**: `none` */
  MozBorderBottomColors?: MozBorderBottomColorsProperty;
  /** **Initial value**: `currentcolor` */
  MozBorderEndColor?: BorderInlineEndColorProperty;
  /** **Initial value**: `none` */
  MozBorderEndStyle?: BorderInlineEndStyleProperty;
  /** **Initial value**: `medium` */
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength>;
  /** **Initial value**: `none` */
  MozBorderLeftColors?: MozBorderLeftColorsProperty;
  /** **Initial value**: `none` */
  MozBorderRightColors?: MozBorderRightColorsProperty;
  /** **Initial value**: `currentcolor` */
  MozBorderStartColor?: BorderInlineStartColorProperty;
  /** **Initial value**: `none` */
  MozBorderStartStyle?: BorderInlineStartStyleProperty;
  /** **Initial value**: `none` */
  MozBorderTopColors?: MozBorderTopColorsProperty;
  /** **Initial value**: `content-box` */
  MozBoxSizing?: BoxSizingProperty;
  /** **Initial value**: `auto` */
  MozColumnCount?: ColumnCountProperty;
  /** **Initial value**: `balance` */
  MozColumnFill?: ColumnFillProperty;
  /** **Initial value**: `normal` */
  MozColumnGap?: ColumnGapProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  MozColumnRuleColor?: ColumnRuleColorProperty;
  /** **Initial value**: `none` */
  MozColumnRuleStyle?: ColumnRuleStyleProperty;
  /** **Initial value**: `medium` */
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  /** **Initial value**: `auto` */
  MozColumnWidth?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  MozContextProperties?: MozContextPropertiesProperty;
  /** **Initial value**: `content-box` */
  MozFloatEdge?: MozFloatEdgeProperty;
  /** **Initial value**: `normal` */
  MozFontFeatureSettings?: FontFeatureSettingsProperty;
  /** **Initial value**: `normal` */
  MozFontLanguageOverride?: FontLanguageOverrideProperty;
  /** **Initial value**: `0` */
  MozForceBrokenImageIcon?: GlobalsNumber;
  /** **Initial value**: `manual` */
  MozHyphens?: HyphensProperty;
  /** **Initial value**: `auto` */
  MozImageRegion?: MozImageRegionProperty;
  /** **Initial value**: `0` */
  MozMarginEnd?: MarginInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  MozMarginStart?: MarginInlineStartProperty<TLength>;
  /** **Initial value**: `inline` */
  MozOrient?: MozOrientProperty;
  /** **Initial value**: `0` */
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength>;
  /** **Initial value**: `0` */
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength>;
  /** **Initial value**: `0` */
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength>;
  /** **Initial value**: `0` */
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength>;
  /** **Initial value**: `0` */
  MozPaddingEnd?: PaddingInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  MozPaddingStart?: PaddingInlineStartProperty<TLength>;
  /** **Initial value**: `none` */
  MozPerspective?: PerspectiveProperty<TLength>;
  /** **Initial value**: `50% 50%` */
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  /** **Initial value**: `stretch-to-fit` */
  MozStackSizing?: MozStackSizingProperty;
  /** **Initial value**: `8` */
  MozTabSize?: TabSizeProperty<TLength>;
  /** **Initial value**: `none` */
  MozTextBlink?: MozTextBlinkProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  MozTextSizeAdjust?: TextSizeAdjustProperty;
  /** **Initial value**: `50% 50% 0` */
  MozTransformOrigin?: TransformOriginProperty<TLength>;
  /** **Initial value**: `flat` */
  MozTransformStyle?: TransformStyleProperty;
  /** **Initial value**: `0s` */
  MozTransitionDelay?: GlobalsString;
  /** **Initial value**: `0s` */
  MozTransitionDuration?: GlobalsString;
  /** **Initial value**: all */
  MozTransitionProperty?: TransitionPropertyProperty;
  /** **Initial value**: `ease` */
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty;
  /** **Initial value**: `none` */
  MozUserFocus?: MozUserFocusProperty;
  /** **Initial value**: `auto` */
  MozUserInput?: MozUserInputProperty;
  /** **Initial value**: `read-only` */
  MozUserModify?: MozUserModifyProperty;
  /** **Initial value**: `auto` */
  MozUserSelect?: UserSelectProperty;
  /** **Initial value**: `drag` */
  MozWindowDragging?: MozWindowDraggingProperty;
  /** **Initial value**: `default` */
  MozWindowShadow?: MozWindowShadowProperty;
  /** **Initial value**: `false` */
  msAccelerator?: MsAcceleratorProperty;
  /** **Initial value**: `tb` */
  msBlockProgression?: MsBlockProgressionProperty;
  /** **Initial value**: `none` */
  msContentZoomChaining?: MsContentZoomChainingProperty;
  /** **Initial value**: `400%` */
  msContentZoomLimitMax?: GlobalsString;
  /** **Initial value**: `100%` */
  msContentZoomLimitMin?: GlobalsString;
  /** **Initial value**: `snapInterval(0%, 100%)` */
  msContentZoomSnapPoints?: GlobalsString;
  /** **Initial value**: `none` */
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty;
  /** **Initial value**: zoom for the top level element, none for all other elements */
  msContentZooming?: MsContentZoomingProperty;
  /** **Initial value**: "" (the empty string) */
  msFilter?: GlobalsString;
  /** **Initial value**: `row` */
  msFlexDirection?: FlexDirectionProperty;
  /** **Initial value**: `0` */
  msFlexPositive?: GlobalsNumber;
  /** **Initial value**: `none` */
  msFlowFrom?: MsFlowFromProperty;
  /** **Initial value**: `none` */
  msFlowInto?: MsFlowIntoProperty;
  /** **Initial value**: `auto` */
  msGridColumns?: GridAutoColumnsProperty<TLength>;
  /** **Initial value**: `auto` */
  msGridRows?: GridAutoRowsProperty<TLength>;
  /** **Initial value**: `auto` */
  msHighContrastAdjust?: MsHighContrastAdjustProperty;
  /** **Initial value**: `auto` */
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty;
  /** **Initial value**: `no-limit` */
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty;
  /** **Initial value**: `0` */
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength>;
  /** **Initial value**: `manual` */
  msHyphens?: HyphensProperty;
  /** **Initial value**: `auto` */
  msImeAlign?: MsImeAlignProperty;
  /** **Initial value**: `auto` */
  msLineBreak?: LineBreakProperty;
  /** **Initial value**: `0` */
  msOrder?: GlobalsNumber;
  /** **Initial value**: `auto` */
  msOverflowStyle?: MsOverflowStyleProperty;
  /** **Initial value**: `visible` */
  msOverflowX?: OverflowXProperty;
  /** **Initial value**: `visible` */
  msOverflowY?: OverflowYProperty;
  /** **Initial value**: `chained` */
  msScrollChaining?: MsScrollChainingProperty;
  /** **Initial value**: `auto` */
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength>;
  /** **Initial value**: `0` */
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength>;
  /** **Initial value**: `auto` */
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength>;
  /** **Initial value**: `0` */
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength>;
  /** **Initial value**: `railed` */
  msScrollRails?: MsScrollRailsProperty;
  /** **Initial value**: `snapInterval(0px, 100%)` */
  msScrollSnapPointsX?: GlobalsString;
  /** **Initial value**: `snapInterval(0px, 100%)` */
  msScrollSnapPointsY?: GlobalsString;
  /** **Initial value**: `none` */
  msScrollSnapType?: MsScrollSnapTypeProperty;
  /** **Initial value**: `none` */
  msScrollTranslation?: MsScrollTranslationProperty;
  /** **Initial value**: depends on user agent */
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
  /** **Initial value**: depends on user agent */
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
  /** **Initial value**: `none` */
  msTextAutospace?: MsTextAutospaceProperty;
  /** **Initial value**: `none` */
  msTextCombineHorizontal?: TextCombineUprightProperty;
  /** **Initial value**: `clip` */
  msTextOverflow?: TextOverflowProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  msTextSizeAdjust?: TextSizeAdjustProperty;
  /** **Initial value**: `auto` */
  msTouchAction?: TouchActionProperty;
  /** **Initial value**: `grippers` */
  msTouchSelect?: MsTouchSelectProperty;
  /** **Initial value**: `none` */
  msTransform?: TransformProperty;
  /** **Initial value**: `50% 50% 0` */
  msTransformOrigin?: TransformOriginProperty<TLength>;
  /** **Initial value**: `text` */
  msUserSelect?: MsUserSelectProperty;
  /** **Initial value**: `normal` */
  msWordBreak?: WordBreakProperty;
  /** **Initial value**: `auto` */
  msWrapFlow?: MsWrapFlowProperty;
  /** **Initial value**: `0` */
  msWrapMargin?: MsWrapMarginProperty<TLength>;
  /** **Initial value**: `wrap` */
  msWrapThrough?: MsWrapThroughProperty;
  /** **Initial value**: `horizontal-tb` */
  msWritingMode?: WritingModeProperty;
  /** **Initial value**: `auto auto` */
  OBackgroundSize?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `fill` */
  OObjectFit?: ObjectFitProperty;
  /** **Initial value**: `50% 50%` */
  OObjectPosition?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `8` */
  OTabSize?: TabSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  OTextOverflow?: TextOverflowProperty;
  /** **Initial value**: `50% 50% 0` */
  OTransformOrigin?: TransformOriginProperty<TLength>;
  /** **Initial value**: `normal` */
  WebkitAlignContent?: AlignContentProperty;
  /** **Initial value**: `normal` */
  WebkitAlignItems?: AlignItemsProperty;
  /** **Initial value**: `auto` */
  WebkitAlignSelf?: AlignSelfProperty;
  /** **Initial value**: `0s` */
  WebkitAnimationDelay?: GlobalsString;
  /** **Initial value**: `normal` */
  WebkitAnimationDirection?: AnimationDirectionProperty;
  /** **Initial value**: `0s` */
  WebkitAnimationDuration?: GlobalsString;
  /** **Initial value**: `none` */
  WebkitAnimationFillMode?: AnimationFillModeProperty;
  /** **Initial value**: `1` */
  WebkitAnimationIterationCount?: AnimationIterationCountProperty;
  /** **Initial value**: `none` */
  WebkitAnimationName?: AnimationNameProperty;
  /** **Initial value**: `running` */
  WebkitAnimationPlayState?: AnimationPlayStateProperty;
  /** **Initial value**: `ease` */
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty;
  /** **Initial value**: `auto` */
  WebkitAppearance?: AppearanceProperty;
  /** **Initial value**: `none` */
  WebkitBackdropFilter?: BackdropFilterProperty;
  /** **Initial value**: `visible` */
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty;
  /** **Initial value**: `auto auto` */
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty;
  /** **Initial value**: `none` */
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty;
  /** **Initial value**: `medium` */
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  /** **Initial value**: `100%` */
  WebkitBorderImageSlice?: BorderImageSliceProperty;
  /** **Initial value**: `0` */
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  /** **Initial value**: `slice` */
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty;
  /** **Initial value**: `none` */
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitBoxShadow?: BoxShadowProperty;
  /** **Initial value**: `content-box` */
  WebkitBoxSizing?: BoxSizingProperty;
  /** **Initial value**: `none` */
  WebkitClipPath?: ClipPathProperty;
  /** **Initial value**: `auto` */
  WebkitColumnCount?: ColumnCountProperty;
  /** **Initial value**: `normal` */
  WebkitColumnGap?: ColumnGapProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  WebkitColumnRuleColor?: ColumnRuleColorProperty;
  /** **Initial value**: `none` */
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty;
  /** **Initial value**: `medium` */
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitColumnSpan?: ColumnSpanProperty;
  /** **Initial value**: `auto` */
  WebkitColumnWidth?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitFilter?: FilterProperty;
  /** **Initial value**: `auto` */
  WebkitFlexBasis?: FlexBasisProperty<TLength>;
  /** **Initial value**: `row` */
  WebkitFlexDirection?: FlexDirectionProperty;
  /** **Initial value**: `0` */
  WebkitFlexGrow?: GlobalsNumber;
  /** **Initial value**: `1` */
  WebkitFlexShrink?: GlobalsNumber;
  /** **Initial value**: `normal` */
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty;
  /** **Initial value**: `auto` */
  WebkitFontKerning?: FontKerningProperty;
  /** **Initial value**: `normal` */
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty;
  /** **Initial value**: `manual` */
  WebkitHyphens?: HyphensProperty;
  /** **Initial value**: `normal` */
  WebkitJustifyContent?: JustifyContentProperty;
  /** **Initial value**: `auto` */
  WebkitLineBreak?: LineBreakProperty;
  /** **Initial value**: `0` */
  WebkitMarginEnd?: MarginInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitMarginStart?: MarginInlineStartProperty<TLength>;
  /** **Initial value**: `scroll` */
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty;
  /** **Initial value**: `border` */
  WebkitMaskClip?: WebkitMaskClipProperty;
  /** **Initial value**: `source-over` */
  WebkitMaskComposite?: WebkitMaskCompositeProperty;
  /** **Initial value**: `none` */
  WebkitMaskImage?: WebkitMaskImageProperty;
  /** **Initial value**: `padding` */
  WebkitMaskOrigin?: WebkitMaskOriginProperty;
  /** **Initial value**: `0% 0%` */
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength>;
  /** **Initial value**: `0%` */
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength>;
  /** **Initial value**: `0%` */
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength>;
  /** **Initial value**: `repeat` */
  WebkitMaskRepeat?: WebkitMaskRepeatProperty;
  /** **Initial value**: `repeat` */
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty;
  /** **Initial value**: `repeat` */
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty;
  /** **Initial value**: `0` */
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitOrder?: GlobalsNumber;
  /** **Initial value**: `auto` */
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty;
  /** **Initial value**: `0` */
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitPerspective?: PerspectiveProperty<TLength>;
  /** **Initial value**: `50% 50%` */
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitScrollSnapType?: ScrollSnapTypeProperty;
  /** **Initial value**: `0.0` */
  WebkitShapeImageThreshold?: GlobalsNumber;
  /** **Initial value**: `0` */
  WebkitShapeMargin?: ShapeMarginProperty<TLength>;
  /** **Initial value**: `none` */
  WebkitShapeOutside?: ShapeOutsideProperty;
  /** **Initial value**: `black` */
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty;
  /** **Initial value**: `none` */
  WebkitTextCombine?: TextCombineUprightProperty;
  /** **Initial value**: `currentcolor` */
  WebkitTextDecorationColor?: TextDecorationColorProperty;
  /** **Initial value**: `none` */
  WebkitTextDecorationLine?: TextDecorationLineProperty;
  /** **Initial value**: `objects` */
  WebkitTextDecorationSkip?: TextDecorationSkipProperty;
  /** **Initial value**: `solid` */
  WebkitTextDecorationStyle?: TextDecorationStyleProperty;
  /** **Initial value**: `currentcolor` */
  WebkitTextEmphasisColor?: TextEmphasisColorProperty;
  /** **Initial value**: `over right` */
  WebkitTextEmphasisPosition?: GlobalsString;
  /** **Initial value**: `none` */
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty;
  /** **Initial value**: `currentcolor` */
  WebkitTextFillColor?: WebkitTextFillColorProperty;
  /** **Initial value**: `mixed` */
  WebkitTextOrientation?: TextOrientationProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  WebkitTextSizeAdjust?: TextSizeAdjustProperty;
  /** **Initial value**: `currentcolor` */
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty;
  /** **Initial value**: `0` */
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength>;
  /** **Initial value**: `default` */
  WebkitTouchCallout?: WebkitTouchCalloutProperty;
  /** **Initial value**: `none` */
  WebkitTransform?: TransformProperty;
  /** **Initial value**: `50% 50% 0` */
  WebkitTransformOrigin?: TransformOriginProperty<TLength>;
  /** **Initial value**: `flat` */
  WebkitTransformStyle?: TransformStyleProperty;
  /** **Initial value**: `0s` */
  WebkitTransitionDelay?: GlobalsString;
  /** **Initial value**: `0s` */
  WebkitTransitionDuration?: GlobalsString;
  /** **Initial value**: all */
  WebkitTransitionProperty?: TransitionPropertyProperty;
  /** **Initial value**: `ease` */
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty;
  /** **Initial value**: `read-only` */
  WebkitUserModify?: WebkitUserModifyProperty;
  /** **Initial value**: `auto` */
  WebkitUserSelect?: UserSelectProperty;
  /** **Initial value**: `horizontal-tb` */
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
  /**
   * **Initial value**: `center`
   *
   * @deprecated
   */
  azimuth?: AzimuthProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  boxOrient?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: BoxPackProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: ClipProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  fontVariantAlternates?: FontVariantAlternatesProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: GridColumnGapProperty<TLength>;
  /** @deprecated */
  gridGap?: GridGapProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: GridRowGapProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: ImeModeProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength>;
  /**
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: ScrollSnapPointsXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: ScrollSnapPointsYProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: ScrollSnapTypeXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: ScrollSnapTypeYProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  textCombineHorizontal?: TextCombineUprightProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  KhtmlBoxOrient?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: BoxPackProperty;
  /**
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty;
  /**
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: BackgroundSizeProperty<TLength>;
  /** @deprecated */
  MozBorderRadius?: BorderRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  MozBoxOrient?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: BoxPackProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: BoxShadowProperty;
  /**
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  MozOpacity?: GlobalsNumber;
  /** @deprecated */
  MozOutline?: OutlineProperty<TLength>;
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  MozOutlineColor?: OutlineColorProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: OutlineStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: OutlineWidthProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozResize?: ResizeProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: TextAlignLastProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: TextDecorationColorProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: TextDecorationLineProperty;
  /**
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: TextDecorationStyleProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: ImeModeProperty;
  /** @deprecated */
  OAnimation?: AnimationProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: GlobalsString;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: AnimationDirectionProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: AnimationFillModeProperty;
  /**
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: AnimationIterationCountProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: AnimationNameProperty;
  /**
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: AnimationPlayStateProperty;
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: TransformProperty;
  /** @deprecated */
  OTransition?: TransitionProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: GlobalsString;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: GlobalsString;
  /**
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: TransitionPropertyProperty;
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: TransitionTimingFunctionProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  WebkitBoxOrient?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: BoxPackProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
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
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty;
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty;
  /**
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty;
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty;
  /**
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty;
  /**
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty;
  /**
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty;
  /**
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength>;
  /**
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength>;
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength>;
  /**
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty;
  /**
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  "block-overflow"?: BlockOverflowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>;
  /**
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength>;
  /**
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty;
  /**
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty;
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  /** **Initial value**: `stretch` */
  "box-align"?: BoxAlignProperty;
  /**
   * **Initial value**: `slice`
   *
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  "box-decoration-break"?: BoxDecorationBreakProperty;
  /** **Initial value**: `1` */
  "box-flex-group"?: GlobalsNumber;
  /** **Initial value**: `single` */
  "box-lines"?: BoxLinesProperty;
  /** **Initial value**: `1` */
  "box-ordinal-group"?: GlobalsNumber;
  /**
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty;
  /**
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty;
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty;
  /**
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  /** **Initial value**: `economy` */
  "color-adjust"?: ColorAdjustProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty;
  /**
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength>;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  contain?: ContainProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength>;
  /**
   * **Initial value**: `row`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber;
  /**
   * **Initial value**: `1`
   *
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber;
  /**
   * **Initial value**: `nowrap`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty;
  /**
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength>;
  /**
   * **Initial value**: `row`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength>;
  /** **Initial value**: `none` */
  "hanging-punctuation"?: HangingPunctuationProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * **Initial value**: `manual`
   *
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty;
  /** **Initial value**: `1dppx` */
  "image-resolution"?: ImageResolutionProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty;
  /** **Initial value**: `auto` */
  "initial-letter-align"?: InitialLetterAlignProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty;
  /**
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength>;
  /** **Initial value**: `none` */
  "line-height-step"?: LineHeightStepProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty;
  /**
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty;
  /**
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                       | Firefox               | Safari                       | Edge | IE  |
   * | ---------------------------- | --------------------- | ---------------------------- | ---- | --- |
   * | **2** _(-webkit-margin-end)_ | **41**                | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                         | Firefox                 | Safari                         | Edge | IE  |
   * | ------------------------------ | ----------------------- | ------------------------------ | ---- | --- |
   * | **2** _(-webkit-margin-start)_ | **41**                  | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  "margin-top"?: MarginTopProperty<TLength>;
  /** **Initial value**: `alpha` */
  "mask-border-mode"?: MaskBorderModeProperty;
  /** **Initial value**: `0` */
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength>;
  /** **Initial value**: `stretch` */
  "mask-border-repeat"?: MaskBorderRepeatProperty;
  /** **Initial value**: `0` */
  "mask-border-slice"?: MaskBorderSliceProperty;
  /** **Initial value**: `none` */
  "mask-border-source"?: MaskBorderSourceProperty;
  /** **Initial value**: `auto` */
  "mask-border-width"?: MaskBorderWidthProperty<TLength>;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty;
  /**
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty;
  /**
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty;
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty;
  /**
   * **Initial value**: `center`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength>;
  /**
   * **Initial value**: `no-repeat`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength>;
  /**
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty;
  /** **Initial value**: `0` */
  "max-block-size"?: MaxBlockSizeProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `none` */
  "max-lines"?: MaxLinesProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty;
  /**
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty;
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `auto` */
  "offset-anchor"?: OffsetAnchorProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty;
  /** **Initial value**: `auto` */
  "offset-position"?: OffsetPositionProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty;
  /**
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * **Initial value**: `0`
   *
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength>;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty;
  /** **Initial value**: `auto` */
  "overflow-anchor"?: OverflowAnchorProperty;
  /** **Initial value**: `auto` */
  "overflow-block"?: OverflowBlockProperty;
  /** **Initial value**: `padding-box` */
  "overflow-clip-box"?: OverflowClipBoxProperty;
  /** **Initial value**: `auto` */
  "overflow-inline"?: OverflowInlineProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty;
  /**
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  /** **Initial value**: `normal` */
  "row-gap"?: RowGapProperty<TLength>;
  /**
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty;
  /** **Initial value**: `separate` */
  "ruby-merge"?: RubyMergeProperty;
  /**
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty;
  /**
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty;
  /**
   * **Initial value**: `8`
   *
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty;
  /**
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty;
  /**
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty;
  /**
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty;
  /**
   * **Initial value**: `over right`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty;
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty;
  /**
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty;
  /**
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty;
  /**
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty;
  /**
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength>;
  /**
   * **Initial value**: `flat`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString;
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString;
  /**
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty;
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty;
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty;
  /**
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength>;
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty;
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty;
  /**
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty;
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty;
  /** **Initial value**: `normal` */
  zoom?: ZoomProperty;
}

export interface StandardShorthandPropertiesHyphen<TLength = string | 0> {
  all?: Globals;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty;
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength>;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength>;
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  gap?: GapProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty;
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty;
  /** **Initial value**: `none` */
  "line-clamp"?: LineClampProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  "mask-border"?: MaskBorderProperty;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty;
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty;
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty;
}

export interface StandardPropertiesHyphen<TLength = string | 0> extends StandardLonghandPropertiesHyphen<TLength>, StandardShorthandPropertiesHyphen<TLength> {}

export interface VendorLonghandPropertiesHyphen<TLength = string | 0> {
  /** **Initial value**: `0s` */
  "-moz-animation-delay"?: GlobalsString;
  /** **Initial value**: `normal` */
  "-moz-animation-direction"?: AnimationDirectionProperty;
  /** **Initial value**: `0s` */
  "-moz-animation-duration"?: GlobalsString;
  /** **Initial value**: `none` */
  "-moz-animation-fill-mode"?: AnimationFillModeProperty;
  /** **Initial value**: `1` */
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty;
  /** **Initial value**: `none` */
  "-moz-animation-name"?: AnimationNameProperty;
  /** **Initial value**: `running` */
  "-moz-animation-play-state"?: AnimationPlayStateProperty;
  /** **Initial value**: `ease` */
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty;
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  "-moz-appearance"?: MozAppearanceProperty;
  /** **Initial value**: `visible` */
  "-moz-backface-visibility"?: BackfaceVisibilityProperty;
  /** **Initial value**: `none` */
  "-moz-binding"?: MozBindingProperty;
  /** **Initial value**: `none` */
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty;
  /** **Initial value**: `currentcolor` */
  "-moz-border-end-color"?: BorderInlineEndColorProperty;
  /** **Initial value**: `none` */
  "-moz-border-end-style"?: BorderInlineEndStyleProperty;
  /** **Initial value**: `medium` */
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength>;
  /** **Initial value**: `none` */
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty;
  /** **Initial value**: `none` */
  "-moz-border-right-colors"?: MozBorderRightColorsProperty;
  /** **Initial value**: `currentcolor` */
  "-moz-border-start-color"?: BorderInlineStartColorProperty;
  /** **Initial value**: `none` */
  "-moz-border-start-style"?: BorderInlineStartStyleProperty;
  /** **Initial value**: `none` */
  "-moz-border-top-colors"?: MozBorderTopColorsProperty;
  /** **Initial value**: `content-box` */
  "-moz-box-sizing"?: BoxSizingProperty;
  /** **Initial value**: `auto` */
  "-moz-column-count"?: ColumnCountProperty;
  /** **Initial value**: `balance` */
  "-moz-column-fill"?: ColumnFillProperty;
  /** **Initial value**: `normal` */
  "-moz-column-gap"?: ColumnGapProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  "-moz-column-rule-color"?: ColumnRuleColorProperty;
  /** **Initial value**: `none` */
  "-moz-column-rule-style"?: ColumnRuleStyleProperty;
  /** **Initial value**: `medium` */
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  /** **Initial value**: `auto` */
  "-moz-column-width"?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  "-moz-context-properties"?: MozContextPropertiesProperty;
  /** **Initial value**: `content-box` */
  "-moz-float-edge"?: MozFloatEdgeProperty;
  /** **Initial value**: `normal` */
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty;
  /** **Initial value**: `normal` */
  "-moz-font-language-override"?: FontLanguageOverrideProperty;
  /** **Initial value**: `0` */
  "-moz-force-broken-image-icon"?: GlobalsNumber;
  /** **Initial value**: `manual` */
  "-moz-hyphens"?: HyphensProperty;
  /** **Initial value**: `auto` */
  "-moz-image-region"?: MozImageRegionProperty;
  /** **Initial value**: `0` */
  "-moz-margin-end"?: MarginInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-margin-start"?: MarginInlineStartProperty<TLength>;
  /** **Initial value**: `inline` */
  "-moz-orient"?: MozOrientProperty;
  /** **Initial value**: `0` */
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-padding-end"?: PaddingInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  "-moz-padding-start"?: PaddingInlineStartProperty<TLength>;
  /** **Initial value**: `none` */
  "-moz-perspective"?: PerspectiveProperty<TLength>;
  /** **Initial value**: `50% 50%` */
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength>;
  /** **Initial value**: `stretch-to-fit` */
  "-moz-stack-sizing"?: MozStackSizingProperty;
  /** **Initial value**: `8` */
  "-moz-tab-size"?: TabSizeProperty<TLength>;
  /** **Initial value**: `none` */
  "-moz-text-blink"?: MozTextBlinkProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-moz-text-size-adjust"?: TextSizeAdjustProperty;
  /** **Initial value**: `50% 50% 0` */
  "-moz-transform-origin"?: TransformOriginProperty<TLength>;
  /** **Initial value**: `flat` */
  "-moz-transform-style"?: TransformStyleProperty;
  /** **Initial value**: `0s` */
  "-moz-transition-delay"?: GlobalsString;
  /** **Initial value**: `0s` */
  "-moz-transition-duration"?: GlobalsString;
  /** **Initial value**: all */
  "-moz-transition-property"?: TransitionPropertyProperty;
  /** **Initial value**: `ease` */
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty;
  /** **Initial value**: `none` */
  "-moz-user-focus"?: MozUserFocusProperty;
  /** **Initial value**: `auto` */
  "-moz-user-input"?: MozUserInputProperty;
  /** **Initial value**: `read-only` */
  "-moz-user-modify"?: MozUserModifyProperty;
  /** **Initial value**: `auto` */
  "-moz-user-select"?: UserSelectProperty;
  /** **Initial value**: `drag` */
  "-moz-window-dragging"?: MozWindowDraggingProperty;
  /** **Initial value**: `default` */
  "-moz-window-shadow"?: MozWindowShadowProperty;
  /** **Initial value**: `false` */
  "-ms-accelerator"?: MsAcceleratorProperty;
  /** **Initial value**: `tb` */
  "-ms-block-progression"?: MsBlockProgressionProperty;
  /** **Initial value**: `none` */
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty;
  /** **Initial value**: `400%` */
  "-ms-content-zoom-limit-max"?: GlobalsString;
  /** **Initial value**: `100%` */
  "-ms-content-zoom-limit-min"?: GlobalsString;
  /** **Initial value**: `snapInterval(0%, 100%)` */
  "-ms-content-zoom-snap-points"?: GlobalsString;
  /** **Initial value**: `none` */
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty;
  /** **Initial value**: zoom for the top level element, none for all other elements */
  "-ms-content-zooming"?: MsContentZoomingProperty;
  /** **Initial value**: "" (the empty string) */
  "-ms-filter"?: GlobalsString;
  /** **Initial value**: `row` */
  "-ms-flex-direction"?: FlexDirectionProperty;
  /** **Initial value**: `0` */
  "-ms-flex-positive"?: GlobalsNumber;
  /** **Initial value**: `none` */
  "-ms-flow-from"?: MsFlowFromProperty;
  /** **Initial value**: `none` */
  "-ms-flow-into"?: MsFlowIntoProperty;
  /** **Initial value**: `auto` */
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength>;
  /** **Initial value**: `auto` */
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength>;
  /** **Initial value**: `auto` */
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty;
  /** **Initial value**: `auto` */
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty;
  /** **Initial value**: `no-limit` */
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty;
  /** **Initial value**: `0` */
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength>;
  /** **Initial value**: `manual` */
  "-ms-hyphens"?: HyphensProperty;
  /** **Initial value**: `auto` */
  "-ms-ime-align"?: MsImeAlignProperty;
  /** **Initial value**: `auto` */
  "-ms-line-break"?: LineBreakProperty;
  /** **Initial value**: `0` */
  "-ms-order"?: GlobalsNumber;
  /** **Initial value**: `auto` */
  "-ms-overflow-style"?: MsOverflowStyleProperty;
  /** **Initial value**: `visible` */
  "-ms-overflow-x"?: OverflowXProperty;
  /** **Initial value**: `visible` */
  "-ms-overflow-y"?: OverflowYProperty;
  /** **Initial value**: `chained` */
  "-ms-scroll-chaining"?: MsScrollChainingProperty;
  /** **Initial value**: `auto` */
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength>;
  /** **Initial value**: `0` */
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength>;
  /** **Initial value**: `auto` */
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength>;
  /** **Initial value**: `0` */
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength>;
  /** **Initial value**: `railed` */
  "-ms-scroll-rails"?: MsScrollRailsProperty;
  /** **Initial value**: `snapInterval(0px, 100%)` */
  "-ms-scroll-snap-points-x"?: GlobalsString;
  /** **Initial value**: `snapInterval(0px, 100%)` */
  "-ms-scroll-snap-points-y"?: GlobalsString;
  /** **Initial value**: `none` */
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty;
  /** **Initial value**: `none` */
  "-ms-scroll-translation"?: MsScrollTranslationProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty;
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty;
  /** **Initial value**: `none` */
  "-ms-text-autospace"?: MsTextAutospaceProperty;
  /** **Initial value**: `none` */
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty;
  /** **Initial value**: `clip` */
  "-ms-text-overflow"?: TextOverflowProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-ms-text-size-adjust"?: TextSizeAdjustProperty;
  /** **Initial value**: `auto` */
  "-ms-touch-action"?: TouchActionProperty;
  /** **Initial value**: `grippers` */
  "-ms-touch-select"?: MsTouchSelectProperty;
  /** **Initial value**: `none` */
  "-ms-transform"?: TransformProperty;
  /** **Initial value**: `50% 50% 0` */
  "-ms-transform-origin"?: TransformOriginProperty<TLength>;
  /** **Initial value**: `text` */
  "-ms-user-select"?: MsUserSelectProperty;
  /** **Initial value**: `normal` */
  "-ms-word-break"?: WordBreakProperty;
  /** **Initial value**: `auto` */
  "-ms-wrap-flow"?: MsWrapFlowProperty;
  /** **Initial value**: `0` */
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength>;
  /** **Initial value**: `wrap` */
  "-ms-wrap-through"?: MsWrapThroughProperty;
  /** **Initial value**: `horizontal-tb` */
  "-ms-writing-mode"?: WritingModeProperty;
  /** **Initial value**: `auto auto` */
  "-o-background-size"?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `fill` */
  "-o-object-fit"?: ObjectFitProperty;
  /** **Initial value**: `50% 50%` */
  "-o-object-position"?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `8` */
  "-o-tab-size"?: TabSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  "-o-text-overflow"?: TextOverflowProperty;
  /** **Initial value**: `50% 50% 0` */
  "-o-transform-origin"?: TransformOriginProperty<TLength>;
  /** **Initial value**: `normal` */
  "-webkit-align-content"?: AlignContentProperty;
  /** **Initial value**: `normal` */
  "-webkit-align-items"?: AlignItemsProperty;
  /** **Initial value**: `auto` */
  "-webkit-align-self"?: AlignSelfProperty;
  /** **Initial value**: `0s` */
  "-webkit-animation-delay"?: GlobalsString;
  /** **Initial value**: `normal` */
  "-webkit-animation-direction"?: AnimationDirectionProperty;
  /** **Initial value**: `0s` */
  "-webkit-animation-duration"?: GlobalsString;
  /** **Initial value**: `none` */
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty;
  /** **Initial value**: `1` */
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty;
  /** **Initial value**: `none` */
  "-webkit-animation-name"?: AnimationNameProperty;
  /** **Initial value**: `running` */
  "-webkit-animation-play-state"?: AnimationPlayStateProperty;
  /** **Initial value**: `ease` */
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty;
  /** **Initial value**: `auto` */
  "-webkit-appearance"?: AppearanceProperty;
  /** **Initial value**: `none` */
  "-webkit-backdrop-filter"?: BackdropFilterProperty;
  /** **Initial value**: `visible` */
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty;
  /** **Initial value**: `auto auto` */
  "-webkit-background-size"?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty;
  /** **Initial value**: `none` */
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty;
  /** **Initial value**: `medium` */
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  /** **Initial value**: `100%` */
  "-webkit-border-image-slice"?: BorderImageSliceProperty;
  /** **Initial value**: `0` */
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  /** **Initial value**: `slice` */
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty;
  /** **Initial value**: `none` */
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-box-shadow"?: BoxShadowProperty;
  /** **Initial value**: `content-box` */
  "-webkit-box-sizing"?: BoxSizingProperty;
  /** **Initial value**: `none` */
  "-webkit-clip-path"?: ClipPathProperty;
  /** **Initial value**: `auto` */
  "-webkit-column-count"?: ColumnCountProperty;
  /** **Initial value**: `normal` */
  "-webkit-column-gap"?: ColumnGapProperty<TLength>;
  /** **Initial value**: `currentcolor` */
  "-webkit-column-rule-color"?: ColumnRuleColorProperty;
  /** **Initial value**: `none` */
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty;
  /** **Initial value**: `medium` */
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-column-span"?: ColumnSpanProperty;
  /** **Initial value**: `auto` */
  "-webkit-column-width"?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-filter"?: FilterProperty;
  /** **Initial value**: `auto` */
  "-webkit-flex-basis"?: FlexBasisProperty<TLength>;
  /** **Initial value**: `row` */
  "-webkit-flex-direction"?: FlexDirectionProperty;
  /** **Initial value**: `0` */
  "-webkit-flex-grow"?: GlobalsNumber;
  /** **Initial value**: `1` */
  "-webkit-flex-shrink"?: GlobalsNumber;
  /** **Initial value**: `normal` */
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty;
  /** **Initial value**: `auto` */
  "-webkit-font-kerning"?: FontKerningProperty;
  /** **Initial value**: `normal` */
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty;
  /** **Initial value**: `manual` */
  "-webkit-hyphens"?: HyphensProperty;
  /** **Initial value**: `normal` */
  "-webkit-justify-content"?: JustifyContentProperty;
  /** **Initial value**: `auto` */
  "-webkit-line-break"?: LineBreakProperty;
  /** **Initial value**: `0` */
  "-webkit-margin-end"?: MarginInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-margin-start"?: MarginInlineStartProperty<TLength>;
  /** **Initial value**: `scroll` */
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty;
  /** **Initial value**: `border` */
  "-webkit-mask-clip"?: WebkitMaskClipProperty;
  /** **Initial value**: `source-over` */
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty;
  /** **Initial value**: `none` */
  "-webkit-mask-image"?: WebkitMaskImageProperty;
  /** **Initial value**: `padding` */
  "-webkit-mask-origin"?: WebkitMaskOriginProperty;
  /** **Initial value**: `0% 0%` */
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength>;
  /** **Initial value**: `0%` */
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength>;
  /** **Initial value**: `0%` */
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength>;
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty;
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty;
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty;
  /** **Initial value**: `0` */
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-order"?: GlobalsNumber;
  /** **Initial value**: `auto` */
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty;
  /** **Initial value**: `0` */
  "-webkit-padding-end"?: PaddingInlineEndProperty<TLength>;
  /** **Initial value**: `0` */
  "-webkit-padding-start"?: PaddingInlineStartProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-perspective"?: PerspectiveProperty<TLength>;
  /** **Initial value**: `50% 50%` */
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty;
  /** **Initial value**: `0.0` */
  "-webkit-shape-image-threshold"?: GlobalsNumber;
  /** **Initial value**: `0` */
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength>;
  /** **Initial value**: `none` */
  "-webkit-shape-outside"?: ShapeOutsideProperty;
  /** **Initial value**: `black` */
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty;
  /** **Initial value**: `none` */
  "-webkit-text-combine"?: TextCombineUprightProperty;
  /** **Initial value**: `currentcolor` */
  "-webkit-text-decoration-color"?: TextDecorationColorProperty;
  /** **Initial value**: `none` */
  "-webkit-text-decoration-line"?: TextDecorationLineProperty;
  /** **Initial value**: `objects` */
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty;
  /** **Initial value**: `solid` */
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty;
  /** **Initial value**: `currentcolor` */
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty;
  /** **Initial value**: `over right` */
  "-webkit-text-emphasis-position"?: GlobalsString;
  /** **Initial value**: `none` */
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty;
  /** **Initial value**: `currentcolor` */
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty;
  /** **Initial value**: `mixed` */
  "-webkit-text-orientation"?: TextOrientationProperty;
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty;
  /** **Initial value**: `currentcolor` */
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty;
  /** **Initial value**: `0` */
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength>;
  /** **Initial value**: `default` */
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty;
  /** **Initial value**: `none` */
  "-webkit-transform"?: TransformProperty;
  /** **Initial value**: `50% 50% 0` */
  "-webkit-transform-origin"?: TransformOriginProperty<TLength>;
  /** **Initial value**: `flat` */
  "-webkit-transform-style"?: TransformStyleProperty;
  /** **Initial value**: `0s` */
  "-webkit-transition-delay"?: GlobalsString;
  /** **Initial value**: `0s` */
  "-webkit-transition-duration"?: GlobalsString;
  /** **Initial value**: all */
  "-webkit-transition-property"?: TransitionPropertyProperty;
  /** **Initial value**: `ease` */
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty;
  /** **Initial value**: `read-only` */
  "-webkit-user-modify"?: WebkitUserModifyProperty;
  /** **Initial value**: `auto` */
  "-webkit-user-select"?: UserSelectProperty;
  /** **Initial value**: `horizontal-tb` */
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
  /**
   * **Initial value**: `center`
   *
   * @deprecated
   */
  azimuth?: AzimuthProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "box-direction"?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "box-flex"?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "box-orient"?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "box-pack"?: BoxPackProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: ClipProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "font-variant-alternates"?: FontVariantAlternatesProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-column-gap"?: GridColumnGapProperty<TLength>;
  /** @deprecated */
  "grid-gap"?: GridGapProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-row-gap"?: GridRowGapProperty<TLength>;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "ime-mode"?: ImeModeProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength>;
  /**
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "text-combine-horizontal"?: TextCombineUprightProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-khtml-box-direction"?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-khtml-box-flex"?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-khtml-box-orient"?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-khtml-box-pack"?: BoxPackProperty;
  /**
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty;
  /**
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  "-moz-background-size"?: BackgroundSizeProperty<TLength>;
  /** @deprecated */
  "-moz-border-radius"?: BorderRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomleft"?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomright"?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topleft"?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topright"?: BorderTopRightRadiusProperty<TLength>;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-moz-box-direction"?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-box-flex"?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-moz-box-orient"?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-moz-box-pack"?: BoxPackProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-box-shadow"?: BoxShadowProperty;
  /**
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  "-moz-opacity"?: GlobalsNumber;
  /** @deprecated */
  "-moz-outline"?: OutlineProperty<TLength>;
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  "-moz-outline-color"?: OutlineColorProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-outline-style"?: OutlineStyleProperty;
  /**
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  "-moz-outline-width"?: OutlineWidthProperty<TLength>;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-resize"?: ResizeProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-moz-text-align-last"?: TextAlignLastProperty;
  /**
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  "-moz-text-decoration-color"?: TextDecorationColorProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-text-decoration-line"?: TextDecorationLineProperty;
  /**
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  "-moz-text-decoration-style"?: TextDecorationStyleProperty;
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-ms-ime-mode"?: ImeModeProperty;
  /** @deprecated */
  "-o-animation"?: AnimationProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-delay"?: GlobalsString;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-o-animation-direction"?: AnimationDirectionProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-duration"?: GlobalsString;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-fill-mode"?: AnimationFillModeProperty;
  /**
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-o-animation-iteration-count"?: AnimationIterationCountProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-name"?: AnimationNameProperty;
  /**
   * **Initial value**: `running`
   *
   * @deprecated
   */
  "-o-animation-play-state"?: AnimationPlayStateProperty;
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-transform"?: TransformProperty;
  /** @deprecated */
  "-o-transition"?: TransitionProperty;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-delay"?: GlobalsString;
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-duration"?: GlobalsString;
  /**
   * **Initial value**: all
   *
   * @deprecated
   */
  "-o-transition-property"?: TransitionPropertyProperty;
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty;
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-webkit-box-direction"?: BoxDirectionProperty;
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-webkit-box-flex"?: GlobalsNumber;
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-webkit-box-orient"?: BoxOrientProperty;
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-webkit-box-pack"?: BoxPackProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty;
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
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
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty | AlignContentProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  /** **Initial value**: `stretch` */
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * **Initial value**: `slice`
   *
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** **Initial value**: `1` */
  boxFlexGroup?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `single` */
  boxLines?: BoxLinesProperty | BoxLinesProperty[];
  /** **Initial value**: `1` */
  boxOrdinalGroup?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty | CaretColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty | ClipPathProperty[];
  /**
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  /** **Initial value**: `economy` */
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  contain?: ContainProperty | ContainProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty | CounterResetProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * **Initial value**: `row`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `nowrap`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  /**
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * **Initial value**: `row`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  /** **Initial value**: `none` */
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * **Initial value**: `manual`
   *
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  /** **Initial value**: `1dppx` */
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  /** **Initial value**: `auto` */
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  /** **Initial value**: `none` */
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                       | Firefox               | Safari                       | Edge | IE  |
   * | ---------------------------- | --------------------- | ---------------------------- | ---- | --- |
   * | **2** _(-webkit-margin-end)_ | **41**                | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                         | Firefox                 | Safari                         | Edge | IE  |
   * | ------------------------------ | ----------------------- | ------------------------------ | ---- | --- |
   * | **2** _(-webkit-margin-start)_ | **41**                  | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  marginTop?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  /** **Initial value**: `alpha` */
  maskBorderMode?: MaskBorderModeProperty | MaskBorderModeProperty[];
  /** **Initial value**: `0` */
  maskBorderOutset?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  /** **Initial value**: `stretch` */
  maskBorderRepeat?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  /** **Initial value**: `0` */
  maskBorderSlice?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  /** **Initial value**: `none` */
  maskBorderSource?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  /** **Initial value**: `auto` */
  maskBorderWidth?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty | MaskClipProperty[];
  /**
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty | MaskImageProperty[];
  /**
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty | MaskModeProperty[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * **Initial value**: `center`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * **Initial value**: `no-repeat`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  /** **Initial value**: `0` */
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  maxLines?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `auto` */
  offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  /** **Initial value**: `auto` */
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty | OverflowProperty[];
  /** **Initial value**: `auto` */
  overflowAnchor?: OverflowAnchorProperty | OverflowAnchorProperty[];
  /** **Initial value**: `auto` */
  overflowBlock?: OverflowBlockProperty | OverflowBlockProperty[];
  /** **Initial value**: `padding-box` */
  overflowClipBox?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  /** **Initial value**: `auto` */
  overflowInline?: OverflowInlineProperty | OverflowInlineProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty | OverflowXProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty | OverflowYProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  /** **Initial value**: `normal` */
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  /** **Initial value**: `separate` */
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * **Initial value**: `8`
   *
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty | TextAlignProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * **Initial value**: `over right`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty | TextShadowProperty[];
  /**
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty | TextTransformProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty | TouchActionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * **Initial value**: `flat`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty | UserSelectProperty[];
  /**
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty | WillChangeProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  /**
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty | WritingModeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty | ZIndexProperty[];
  /** **Initial value**: `normal` */
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty | BorderColorProperty[];
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty | BorderImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty | GridAreaProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty | GridRowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  /** **Initial value**: `none` */
  lineClamp?: LineClampProperty | LineClampProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty | ListStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesFallback<TLength = string | 0> extends StandardLonghandPropertiesFallback<TLength>, StandardShorthandPropertiesFallback<TLength> {}

export interface VendorLonghandPropertiesFallback<TLength = string | 0> {
  /** **Initial value**: `0s` */
  MozAnimationDelay?: GlobalsString | GlobalsString[];
  /** **Initial value**: `normal` */
  MozAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** **Initial value**: `0s` */
  MozAnimationDuration?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  MozAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** **Initial value**: `1` */
  MozAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** **Initial value**: `none` */
  MozAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  /** **Initial value**: `running` */
  MozAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** **Initial value**: `ease` */
  MozAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  MozAppearance?: MozAppearanceProperty | MozAppearanceProperty[];
  /** **Initial value**: `visible` */
  MozBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /** **Initial value**: `none` */
  MozBinding?: MozBindingProperty | MozBindingProperty[];
  /** **Initial value**: `none` */
  MozBorderBottomColors?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  /** **Initial value**: `currentcolor` */
  MozBorderEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /** **Initial value**: `none` */
  MozBorderEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /** **Initial value**: `medium` */
  MozBorderEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  MozBorderLeftColors?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  /** **Initial value**: `none` */
  MozBorderRightColors?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  /** **Initial value**: `currentcolor` */
  MozBorderStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /** **Initial value**: `none` */
  MozBorderStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /** **Initial value**: `none` */
  MozBorderTopColors?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  /** **Initial value**: `content-box` */
  MozBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  /** **Initial value**: `auto` */
  MozColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  /** **Initial value**: `balance` */
  MozColumnFill?: ColumnFillProperty | ColumnFillProperty[];
  /** **Initial value**: `normal` */
  MozColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  MozColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /** **Initial value**: `none` */
  MozColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /** **Initial value**: `medium` */
  MozColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /** **Initial value**: `auto` */
  MozColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  MozContextProperties?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  /** **Initial value**: `content-box` */
  MozFloatEdge?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  /** **Initial value**: `normal` */
  MozFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /** **Initial value**: `normal` */
  MozFontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /** **Initial value**: `0` */
  MozForceBrokenImageIcon?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `manual` */
  MozHyphens?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `auto` */
  MozImageRegion?: MozImageRegionProperty | MozImageRegionProperty[];
  /** **Initial value**: `0` */
  MozMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  MozMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /** **Initial value**: `inline` */
  MozOrient?: MozOrientProperty | MozOrientProperty[];
  /** **Initial value**: `0` */
  MozOutlineRadiusBottomleft?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  /** **Initial value**: `0` */
  MozOutlineRadiusBottomright?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  /** **Initial value**: `0` */
  MozOutlineRadiusTopleft?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  /** **Initial value**: `0` */
  MozOutlineRadiusTopright?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  /** **Initial value**: `0` */
  MozPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  MozPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /** **Initial value**: `none` */
  MozPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /** **Initial value**: `50% 50%` */
  MozPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /** **Initial value**: `stretch-to-fit` */
  MozStackSizing?: MozStackSizingProperty | MozStackSizingProperty[];
  /** **Initial value**: `8` */
  MozTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  MozTextBlink?: MozTextBlinkProperty | MozTextBlinkProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  MozTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `50% 50% 0` */
  MozTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `flat` */
  MozTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  /** **Initial value**: `0s` */
  MozTransitionDelay?: GlobalsString | GlobalsString[];
  /** **Initial value**: `0s` */
  MozTransitionDuration?: GlobalsString | GlobalsString[];
  /** **Initial value**: all */
  MozTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** **Initial value**: `ease` */
  MozTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** **Initial value**: `none` */
  MozUserFocus?: MozUserFocusProperty | MozUserFocusProperty[];
  /** **Initial value**: `auto` */
  MozUserInput?: MozUserInputProperty | MozUserInputProperty[];
  /** **Initial value**: `read-only` */
  MozUserModify?: MozUserModifyProperty | MozUserModifyProperty[];
  /** **Initial value**: `auto` */
  MozUserSelect?: UserSelectProperty | UserSelectProperty[];
  /** **Initial value**: `drag` */
  MozWindowDragging?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  /** **Initial value**: `default` */
  MozWindowShadow?: MozWindowShadowProperty | MozWindowShadowProperty[];
  /** **Initial value**: `false` */
  msAccelerator?: MsAcceleratorProperty | MsAcceleratorProperty[];
  /** **Initial value**: `tb` */
  msBlockProgression?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  /** **Initial value**: `none` */
  msContentZoomChaining?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  /** **Initial value**: `400%` */
  msContentZoomLimitMax?: GlobalsString | GlobalsString[];
  /** **Initial value**: `100%` */
  msContentZoomLimitMin?: GlobalsString | GlobalsString[];
  /** **Initial value**: `snapInterval(0%, 100%)` */
  msContentZoomSnapPoints?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  msContentZoomSnapType?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  /** **Initial value**: zoom for the top level element, none for all other elements */
  msContentZooming?: MsContentZoomingProperty | MsContentZoomingProperty[];
  /** **Initial value**: "" (the empty string) */
  msFilter?: GlobalsString | GlobalsString[];
  /** **Initial value**: `row` */
  msFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  /** **Initial value**: `0` */
  msFlexPositive?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `none` */
  msFlowFrom?: MsFlowFromProperty | MsFlowFromProperty[];
  /** **Initial value**: `none` */
  msFlowInto?: MsFlowIntoProperty | MsFlowIntoProperty[];
  /** **Initial value**: `auto` */
  msGridColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /** **Initial value**: `auto` */
  msGridRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /** **Initial value**: `auto` */
  msHighContrastAdjust?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  /** **Initial value**: `auto` */
  msHyphenateLimitChars?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  /** **Initial value**: `no-limit` */
  msHyphenateLimitLines?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  /** **Initial value**: `0` */
  msHyphenateLimitZone?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  /** **Initial value**: `manual` */
  msHyphens?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `auto` */
  msImeAlign?: MsImeAlignProperty | MsImeAlignProperty[];
  /** **Initial value**: `auto` */
  msLineBreak?: LineBreakProperty | LineBreakProperty[];
  /** **Initial value**: `0` */
  msOrder?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `auto` */
  msOverflowStyle?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  /** **Initial value**: `visible` */
  msOverflowX?: OverflowXProperty | OverflowXProperty[];
  /** **Initial value**: `visible` */
  msOverflowY?: OverflowYProperty | OverflowYProperty[];
  /** **Initial value**: `chained` */
  msScrollChaining?: MsScrollChainingProperty | MsScrollChainingProperty[];
  /** **Initial value**: `auto` */
  msScrollLimitXMax?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  /** **Initial value**: `0` */
  msScrollLimitXMin?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  /** **Initial value**: `auto` */
  msScrollLimitYMax?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  /** **Initial value**: `0` */
  msScrollLimitYMin?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  /** **Initial value**: `railed` */
  msScrollRails?: MsScrollRailsProperty | MsScrollRailsProperty[];
  /** **Initial value**: `snapInterval(0px, 100%)` */
  msScrollSnapPointsX?: GlobalsString | GlobalsString[];
  /** **Initial value**: `snapInterval(0px, 100%)` */
  msScrollSnapPointsY?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  msScrollSnapType?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  /** **Initial value**: `none` */
  msScrollTranslation?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  /** **Initial value**: depends on user agent */
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  /** **Initial value**: `none` */
  msTextAutospace?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  /** **Initial value**: `none` */
  msTextCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** **Initial value**: `clip` */
  msTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  msTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `auto` */
  msTouchAction?: TouchActionProperty | TouchActionProperty[];
  /** **Initial value**: `grippers` */
  msTouchSelect?: MsTouchSelectProperty | MsTouchSelectProperty[];
  /** **Initial value**: `none` */
  msTransform?: TransformProperty | TransformProperty[];
  /** **Initial value**: `50% 50% 0` */
  msTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `text` */
  msUserSelect?: MsUserSelectProperty | MsUserSelectProperty[];
  /** **Initial value**: `normal` */
  msWordBreak?: WordBreakProperty | WordBreakProperty[];
  /** **Initial value**: `auto` */
  msWrapFlow?: MsWrapFlowProperty | MsWrapFlowProperty[];
  /** **Initial value**: `0` */
  msWrapMargin?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  /** **Initial value**: `wrap` */
  msWrapThrough?: MsWrapThroughProperty | MsWrapThroughProperty[];
  /** **Initial value**: `horizontal-tb` */
  msWritingMode?: WritingModeProperty | WritingModeProperty[];
  /** **Initial value**: `auto auto` */
  OBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `fill` */
  OObjectFit?: ObjectFitProperty | ObjectFitProperty[];
  /** **Initial value**: `50% 50%` */
  OObjectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `8` */
  OTabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  OTextOverflow?: TextOverflowProperty | TextOverflowProperty[];
  /** **Initial value**: `50% 50% 0` */
  OTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `normal` */
  WebkitAlignContent?: AlignContentProperty | AlignContentProperty[];
  /** **Initial value**: `normal` */
  WebkitAlignItems?: AlignItemsProperty | AlignItemsProperty[];
  /** **Initial value**: `auto` */
  WebkitAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
  /** **Initial value**: `0s` */
  WebkitAnimationDelay?: GlobalsString | GlobalsString[];
  /** **Initial value**: `normal` */
  WebkitAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** **Initial value**: `0s` */
  WebkitAnimationDuration?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  WebkitAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** **Initial value**: `1` */
  WebkitAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** **Initial value**: `none` */
  WebkitAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  /** **Initial value**: `running` */
  WebkitAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** **Initial value**: `ease` */
  WebkitAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** **Initial value**: `auto` */
  WebkitAppearance?: AppearanceProperty | AppearanceProperty[];
  /** **Initial value**: `none` */
  WebkitBackdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  /** **Initial value**: `visible` */
  WebkitBackfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /** **Initial value**: `auto auto` */
  WebkitBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  WebkitBorderBeforeColor?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  /** **Initial value**: `none` */
  WebkitBorderBeforeStyle?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  /** **Initial value**: `medium` */
  WebkitBorderBeforeWidth?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitBorderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitBorderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /** **Initial value**: `100%` */
  WebkitBorderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /** **Initial value**: `0` */
  WebkitBorderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitBorderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /** **Initial value**: `slice` */
  WebkitBoxDecorationBreak?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** **Initial value**: `none` */
  WebkitBoxReflect?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /** **Initial value**: `content-box` */
  WebkitBoxSizing?: BoxSizingProperty | BoxSizingProperty[];
  /** **Initial value**: `none` */
  WebkitClipPath?: ClipPathProperty | ClipPathProperty[];
  /** **Initial value**: `auto` */
  WebkitColumnCount?: ColumnCountProperty | ColumnCountProperty[];
  /** **Initial value**: `normal` */
  WebkitColumnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  WebkitColumnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /** **Initial value**: `none` */
  WebkitColumnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /** **Initial value**: `medium` */
  WebkitColumnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitColumnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  /** **Initial value**: `auto` */
  WebkitColumnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitFilter?: FilterProperty | FilterProperty[];
  /** **Initial value**: `auto` */
  WebkitFlexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /** **Initial value**: `row` */
  WebkitFlexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  /** **Initial value**: `0` */
  WebkitFlexGrow?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `1` */
  WebkitFlexShrink?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `normal` */
  WebkitFontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /** **Initial value**: `auto` */
  WebkitFontKerning?: FontKerningProperty | FontKerningProperty[];
  /** **Initial value**: `normal` */
  WebkitFontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /** **Initial value**: `manual` */
  WebkitHyphens?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `normal` */
  WebkitJustifyContent?: JustifyContentProperty | JustifyContentProperty[];
  /** **Initial value**: `auto` */
  WebkitLineBreak?: LineBreakProperty | LineBreakProperty[];
  /** **Initial value**: `0` */
  WebkitMarginEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitMarginStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /** **Initial value**: `scroll` */
  WebkitMaskAttachment?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  /** **Initial value**: `border` */
  WebkitMaskClip?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  /** **Initial value**: `source-over` */
  WebkitMaskComposite?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  /** **Initial value**: `none` */
  WebkitMaskImage?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  /** **Initial value**: `padding` */
  WebkitMaskOrigin?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  /** **Initial value**: `0% 0%` */
  WebkitMaskPosition?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  /** **Initial value**: `0%` */
  WebkitMaskPositionX?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  /** **Initial value**: `0%` */
  WebkitMaskPositionY?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  /** **Initial value**: `repeat` */
  WebkitMaskRepeat?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  /** **Initial value**: `repeat` */
  WebkitMaskRepeatX?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  /** **Initial value**: `repeat` */
  WebkitMaskRepeatY?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  /** **Initial value**: `0` */
  WebkitMaxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitOrder?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `auto` */
  WebkitOverflowScrolling?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  /** **Initial value**: `0` */
  WebkitPaddingEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  WebkitPaddingStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitPerspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /** **Initial value**: `50% 50%` */
  WebkitPerspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitScrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /** **Initial value**: `0.0` */
  WebkitShapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `0` */
  WebkitShapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /** **Initial value**: `none` */
  WebkitShapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /** **Initial value**: `black` */
  WebkitTapHighlightColor?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  /** **Initial value**: `none` */
  WebkitTextCombine?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** **Initial value**: `currentcolor` */
  WebkitTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /** **Initial value**: `none` */
  WebkitTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /** **Initial value**: `objects` */
  WebkitTextDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /** **Initial value**: `solid` */
  WebkitTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /** **Initial value**: `currentcolor` */
  WebkitTextEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /** **Initial value**: `over right` */
  WebkitTextEmphasisPosition?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  WebkitTextEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /** **Initial value**: `currentcolor` */
  WebkitTextFillColor?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  /** **Initial value**: `mixed` */
  WebkitTextOrientation?: TextOrientationProperty | TextOrientationProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  WebkitTextSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `currentcolor` */
  WebkitTextStrokeColor?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  /** **Initial value**: `0` */
  WebkitTextStrokeWidth?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  /** **Initial value**: `default` */
  WebkitTouchCallout?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  /** **Initial value**: `none` */
  WebkitTransform?: TransformProperty | TransformProperty[];
  /** **Initial value**: `50% 50% 0` */
  WebkitTransformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `flat` */
  WebkitTransformStyle?: TransformStyleProperty | TransformStyleProperty[];
  /** **Initial value**: `0s` */
  WebkitTransitionDelay?: GlobalsString | GlobalsString[];
  /** **Initial value**: `0s` */
  WebkitTransitionDuration?: GlobalsString | GlobalsString[];
  /** **Initial value**: all */
  WebkitTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** **Initial value**: `ease` */
  WebkitTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** **Initial value**: `read-only` */
  WebkitUserModify?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  /** **Initial value**: `auto` */
  WebkitUserSelect?: UserSelectProperty | UserSelectProperty[];
  /** **Initial value**: `horizontal-tb` */
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
  /**
   * **Initial value**: `center`
   *
   * @deprecated
   */
  azimuth?: AzimuthProperty | AzimuthProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  boxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: ClipProperty | ClipProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  fontVariantAlternates?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  /** @deprecated */
  gridGap?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: ImeModeProperty | ImeModeProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  /**
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  textCombineHorizontal?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  KhtmlBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  MozBackgroundInlinePolicy?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /**
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** @deprecated */
  MozBorderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  MozBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  MozOpacity?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  MozOutline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  MozOutlineColor?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozResize?: ResizeProperty | ResizeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  OAnimation?: AnimationProperty | AnimationProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: TransformProperty | TransformProperty[];
  /** @deprecated */
  OTransition?: TransitionProperty | TransitionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  WebkitBoxOrient?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  WebkitScrollSnapPointsX?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
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
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty | AlignContentProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **21** | **20**  | **7** _-x-_ | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **36**   | **20**  | No     | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **43** | **16**  | **9**   | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **43** | **16**  | Yes    | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome      | Firefox     | Safari      | Edge         | IE  |
   * | ----------- | ----------- | ----------- | ------------ | --- |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE  |
   * | ------ | ------- | ----------- | ------ | --- |
   * | n/a    | No      | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **35** | **30**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **4**   | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **49**  | Yes    | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **3**   | **4**   | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  "block-overflow"?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox                      | Safari | Edge | IE  |
   * | ------ | ---------------------------- | ------ | ---- | --- |
   * | No     | **41**                       | No     | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox                        | Safari | Edge | IE  |
   * | ------ | ------------------------------ | ------ | ---- | --- |
   * | No     | **41**                         | No     | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  /** **Initial value**: `stretch` */
  "box-align"?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * **Initial value**: `slice`
   *
   * | Chrome       | Firefox | Safari  | Edge | IE  |
   * | ------------ | ------- | ------- | ---- | --- |
   * | **22** _-x-_ | **32**  | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  "box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** **Initial value**: `1` */
  "box-flex-group"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `single` */
  "box-lines"?: BoxLinesProperty | BoxLinesProperty[];
  /** **Initial value**: `1` */
  "box-ordinal-group"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **4**   | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge | IE  |
   * | ------ | ------- | -------- | ---- | --- |
   * | **57** | **53**  | **11.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty | CaretColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari | Edge | IE  |
   * | -------- | ------- | ------ | ---- | --- |
   * | **55**   | **3.5** | No     | No   | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  /**
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | **1**   | Yes    | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  /** **Initial value**: `economy` */
  "color-adjust"?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari | Edge   | IE  |
   * | ------ | -------- | ------ | ------ | --- |
   * | Yes    | **52**   | n/a    | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **50** | No      | Yes    | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox   | Safari      | Edge   | IE     |
   * | ------ | --------- | ----------- | ------ | ------ |
   * | **50** | **50**    | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  contain?: ContainProperty | ContainProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE    |
   * | ------ | ------- | ------ | ---- | ----- |
   * | **2**  | **1**   | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty | CounterResetProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox | Safari      | Edge   | IE  |
   * | -------- | ------- | ----------- | ------ | --- |
   * | **53**   | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE     |
   * | ------------ | ------- | ------- | ------ | ------ |
   * | **21** _-x-_ | **22**  | **9**   | **12** | **11** |
   * |              |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * **Initial value**: `row`
   *
   * | Chrome       | Firefox | Safari  | Edge   | IE       |
   * | ------------ | ------- | ------- | ------ | -------- |
   * | **21** _-x-_ | **20**  | **9**   | **12** | **11**   |
   * |              |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome       | Firefox | Safari        | Edge   | IE                           |
   * | ------------ | ------- | ------------- | ------ | ---------------------------- |
   * | **21** _-x-_ | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `1`
   *
   * | Chrome       | Firefox | Safari      | Edge   | IE     |
   * | ------------ | ------- | ----------- | ------ | ------ |
   * | **21** _-x-_ | **20**  | **8** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `nowrap`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **29** | **28**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **48**   | **34**   | 4-6    | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome       | Firefox | Safari | Edge | IE  |
   * | ------------ | ------- | ------ | ---- | --- |
   * | **32** _-x-_ | **32**  | **7**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty | FontKerningProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **1**   | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **48** | **9**   | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  /**
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | **9**  | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **52** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari  | Edge | IE  |
   * | -------- | ------- | ------- | ---- | --- |
   * | **34**   | **34**  | **9.1** | No   | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **52** | **34**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **34**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **62** | n/a     | **11** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **2**  | **1**   | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                    | IE                          |
   * | ------ | ------- | -------- | ----------------------- | --------------------------- |
   * | **57** | **52**  | **10.1** | **16**                  | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * **Initial value**: `row`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge                 | IE                       |
   * | ------ | ------- | -------- | -------------------- | ------------------------ |
   * | **57** | **52**  | **10.1** | **16**               | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  /** **Initial value**: `none` */
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * **Initial value**: `manual`
   *
   * | Chrome   | Firefox | Safari        | Edge | IE           |
   * | -------- | ------- | ------------- | ---- | ------------ |
   * | **55**   | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **26**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **3.6** | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  /** **Initial value**: `1dppx` */
  "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | No      | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[];
  /** **Initial value**: `auto` */
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome   | Firefox | Safari | Edge   | IE     |
   * | -------- | ------- | ------ | ------ | ------ |
   * | **29**   | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | n/a    | **45**  | n/a    | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari | Edge   | IE      |
   * | ------- | ------- | ------ | ------ | ------- |
   * | **58**  | No      | Yes    | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty | LineBreakProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  /** **Initial value**: `none` */
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                       | Firefox               | Safari                       | Edge | IE  |
   * | ---------------------------- | --------------------- | ---------------------------- | ---- | --- |
   * | **2** _(-webkit-margin-end)_ | **41**                | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                         | Firefox                 | Safari                         | Edge | IE  |
   * | ------------------------------ | ----------------------- | ------------------------------ | ---- | --- |
   * | **2** _(-webkit-margin-start)_ | **41**                  | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  "margin-top"?: MarginTopProperty<TLength> | MarginTopProperty<TLength>[];
  /** **Initial value**: `alpha` */
  "mask-border-mode"?: MaskBorderModeProperty | MaskBorderModeProperty[];
  /** **Initial value**: `0` */
  "mask-border-outset"?: MaskBorderOutsetProperty<TLength> | MaskBorderOutsetProperty<TLength>[];
  /** **Initial value**: `stretch` */
  "mask-border-repeat"?: MaskBorderRepeatProperty | MaskBorderRepeatProperty[];
  /** **Initial value**: `0` */
  "mask-border-slice"?: MaskBorderSliceProperty | MaskBorderSliceProperty[];
  /** **Initial value**: `none` */
  "mask-border-source"?: MaskBorderSourceProperty | MaskBorderSourceProperty[];
  /** **Initial value**: `auto` */
  "mask-border-width"?: MaskBorderWidthProperty<TLength> | MaskBorderWidthProperty<TLength>[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty | MaskClipProperty[];
  /**
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome      | Firefox | Safari      | Edge   | IE  |
   * | ----------- | ------- | ----------- | ------ | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty | MaskImageProperty[];
  /**
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **53**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty | MaskModeProperty[];
  /**
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **53**  | Yes    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * **Initial value**: `center`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * **Initial value**: `no-repeat`
   *
   * | Chrome      | Firefox | Safari      | Edge | IE  |
   * | ----------- | ------- | ----------- | ---- | --- |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **53**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **24** | **35**  | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[];
  /** **Initial value**: `0` */
  "max-block-size"?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari         | Edge | IE  |
   * | ------ | ------- | -------------- | ---- | --- |
   * | Yes    | **41**  | **10.1** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  "max-lines"?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3**   | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **41** | **32**  | **8**  | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | Yes    | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `auto` */
  "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **55**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome             | Firefox | Safari | Edge | IE  |
   * | ------------------ | ------- | ------ | ---- | --- |
   * | **55**             | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[];
  /** **Initial value**: `auto` */
  "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome                 | Firefox | Safari | Edge | IE  |
   * | ---------------------- | ------- | ------ | ---- | --- |
   * | **56**                 | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome   | Firefox | Safari  | Edge   | IE       |
   * | -------- | ------- | ------- | ------ | -------- |
   * | **29**   | **20**  | **9**   | **12** | **11**   |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow?: OverflowProperty | OverflowProperty[];
  /** **Initial value**: `auto` */
  "overflow-anchor"?: OverflowAnchorProperty | OverflowAnchorProperty[];
  /** **Initial value**: `auto` */
  "overflow-block"?: OverflowBlockProperty | OverflowBlockProperty[];
  /** **Initial value**: `padding-box` */
  "overflow-clip-box"?: OverflowClipBoxProperty | OverflowClipBoxProperty[];
  /** **Initial value**: `auto` */
  "overflow-inline"?: OverflowInlineProperty | OverflowInlineProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome              | Firefox           | Safari              | Edge                 | IE                    |
   * | ------------------- | ----------------- | ------------------- | -------------------- | --------------------- |
   * | **1** _(word-wrap)_ | **49**            | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty | OverflowXProperty[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty | OverflowYProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **63** | **59**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                        | Firefox                | Safari                        | Edge | IE  |
   * | ----------------------------- | ---------------------- | ----------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-end)_ | **41**                 | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome                          | Firefox                  | Safari                          | Edge | IE  |
   * | ------------------------------- | ------------------------ | ------------------------------- | ---- | --- |
   * | **2** _(-webkit-padding-start)_ | **41**                   | **3** _(-webkit-padding-start)_ | No   | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1**   | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **60**  | Yes    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome   | Firefox  | Safari | Edge   | IE     |
   * | -------- | -------- | ------ | ------ | ------ |
   * | **45**   | **16**   | Yes    | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * **Initial value**: `50% 50%`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE     |
   * | ------------ | -------- | ------ | ------ | ------ |
   * | **12** _-x-_ | **16**   | Yes    | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **59** | Yes     | n/a    | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  /** **Initial value**: `normal` */
  "row-gap"?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **38**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[];
  /** **Initial value**: `separate` */
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | No     | **38**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | n/a    | **36**  | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge         | IE           |
   * | ------ | ------- | ----------- | ------------ | ------------ |
   * | No     | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | Yes    | No      | **7** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | **37** | n/a     | **8** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * **Initial value**: `8`
   *
   * | Chrome | Firefox     | Safari  | Edge | IE  |
   * | ------ | ----------- | ------- | ---- | --- |
   * | **21** | **4** _-x-_ | **6.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **14** | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty | TextAlignProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **47** | **49**  | No     | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE                                     |
   * | ------ | ------- | ------ | ------ | -------------------------------------- |
   * | **48** | **48**  | Yes    | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox | Safari      | Edge | IE  |
   * | ------ | ------- | ----------- | ---- | --- |
   * | 57-64  | No      | **8** _-x-_ | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | No      | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **57** | **36**  | Yes    | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * **Initial value**: `over right`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | n/a    | **55**  | No     | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **48** | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **7**   | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **4**  | **3**   | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE     |
   * | ------ | ------- | ------- | ------ | ------ |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty | TextShadowProperty[];
  /**
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari | Edge         | IE  |
   * | ------ | ------- | ------ | ------------ | --- |
   * | **54** | No      | No     | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty | TextTransformProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **33** | No      | No     | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE       |
   * | ------ | ------- | ------ | ------ | -------- |
   * | **36** | **52**  | No     | **12** | **11**   |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty | TouchActionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari    | Edge         | IE      |
   * | ------ | ------- | --------- | ------------ | ------- |
   * | **36** | **16**  | **9**     | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | **64** | **55**  | n/a    | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome | Firefox   | Safari        | Edge   | IE      |
   * | ------ | --------- | ------------- | ------ | ------- |
   * | Yes    | **16**    | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * **Initial value**: `flat`
   *
   * | Chrome       | Firefox  | Safari | Edge   | IE  |
   * | ------------ | -------- | ------ | ------ | --- |
   * | **12** _-x-_ | **16**   | Yes    | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari      | Edge   | IE     |
   * | ------- | ------- | ----------- | ------ | ------ |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari | Edge   | IE     |
   * | ------ | ------- | ------ | ------ | ------ |
   * | **26** | **16**  | Yes    | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | Yes    | n/a     | No     | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge   | IE      |
   * | ------ | ------- | ------- | ------ | ------- |
   * | **2**  | **1**   | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox      | Safari        | Edge         | IE     |
   * | ------- | ------------ | ------------- | ------------ | ------ |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty | UserSelectProperty[];
  /**
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **25** | No      | No     | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | Yes    | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | ------ | ------- | ------- | ---- | --- |
   * | **36** | **36**  | **9.1** | No   | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty | WillChangeProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **15**  | Yes    | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty | WordBreakProperty[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty | WordWrapProperty[];
  /**
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome      | Firefox | Safari        | Edge   | IE          |
   * | ----------- | ------- | ------------- | ------ | ----------- |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty | ZIndexProperty[];
  /** **Initial value**: `normal` */
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesHyphenFallback<TLength = string | 0> {
  all?: Globals | Globals[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty | BorderColorProperty[];
  /**
   * | Chrome  | Firefox   | Safari  | Edge   | IE     |
   * | ------- | --------- | ------- | ------ | ------ |
   * | **16**  | **15**    | **6**   | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty | BorderImageProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | ------ | ------- | ------ | ---- | --- |
   * | No     | **41**  | No     | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE    |
   * | ------- | ------- | ------- | ------ | ----- |
   * | **4**   | **4**   | **5**   | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE      |
   * | ------ | ------- | ------ | ------ | ------- |
   * | **1**  | **1**   | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * | Chrome | Firefox   | Safari      | Edge         | IE     |
   * | ------ | --------- | ----------- | ------------ | ------ |
   * | **50** | **52**    | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari      | Edge   | IE     |
   * | ------ | ------- | ----------- | ------ | ------ |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE       |
   * | -------- | ------- | --------- | ------ | -------- |
   * | **29**   | **20**  | **9**     | **12** | **11**   |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * | Chrome   | Firefox | Safari    | Edge   | IE     |
   * | -------- | ------- | --------- | ------ | ------ |
   * | **29**   | **28**  | **9**     | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty | GridAreaProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty | GridColumnProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty | GridRowProperty[];
  /**
   * | Chrome | Firefox | Safari   | Edge   | IE  |
   * | ------ | ------- | -------- | ------ | --- |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[];
  /** **Initial value**: `none` */
  "line-clamp"?: LineClampProperty | LineClampProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty | ListStyleProperty[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE  |
   * | ------ | ------- | ------ | ------ | --- |
   * | **1**  | Yes     | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  "mask-border"?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome        | Firefox | Safari | Edge | IE  |
   * | ------------- | ------- | ------ | ---- | --- |
   * | **55**        | n/a     | n/a    | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari  | Edge   | IE    |
   * | ------ | ------- | ------- | ------ | ----- |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * | Chrome | Firefox | Safari | Edge   | IE    |
   * | ------ | ------- | ------ | ------ | ----- |
   * | **1**  | **1**   | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * | Chrome       | Firefox | Safari        | Edge | IE  |
   * | ------------ | ------- | ------------- | ---- | --- |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * | Chrome  | Firefox | Safari  | Edge   | IE     |
   * | ------- | ------- | ------- | ------ | ------ |
   * | **26**  | **16**  | **6.1** | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition?: TransitionProperty | TransitionProperty[];
}

export interface StandardPropertiesHyphenFallback<TLength = string | 0>
  extends StandardLonghandPropertiesHyphenFallback<TLength>,
    StandardShorthandPropertiesHyphenFallback<TLength> {}

export interface VendorLonghandPropertiesHyphenFallback<TLength = string | 0> {
  /** **Initial value**: `0s` */
  "-moz-animation-delay"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `normal` */
  "-moz-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** **Initial value**: `0s` */
  "-moz-animation-duration"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  "-moz-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** **Initial value**: `1` */
  "-moz-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** **Initial value**: `none` */
  "-moz-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /** **Initial value**: `running` */
  "-moz-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** **Initial value**: `ease` */
  "-moz-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  "-moz-appearance"?: MozAppearanceProperty | MozAppearanceProperty[];
  /** **Initial value**: `visible` */
  "-moz-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /** **Initial value**: `none` */
  "-moz-binding"?: MozBindingProperty | MozBindingProperty[];
  /** **Initial value**: `none` */
  "-moz-border-bottom-colors"?: MozBorderBottomColorsProperty | MozBorderBottomColorsProperty[];
  /** **Initial value**: `currentcolor` */
  "-moz-border-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /** **Initial value**: `none` */
  "-moz-border-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /** **Initial value**: `medium` */
  "-moz-border-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  "-moz-border-left-colors"?: MozBorderLeftColorsProperty | MozBorderLeftColorsProperty[];
  /** **Initial value**: `none` */
  "-moz-border-right-colors"?: MozBorderRightColorsProperty | MozBorderRightColorsProperty[];
  /** **Initial value**: `currentcolor` */
  "-moz-border-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /** **Initial value**: `none` */
  "-moz-border-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /** **Initial value**: `none` */
  "-moz-border-top-colors"?: MozBorderTopColorsProperty | MozBorderTopColorsProperty[];
  /** **Initial value**: `content-box` */
  "-moz-box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  /** **Initial value**: `auto` */
  "-moz-column-count"?: ColumnCountProperty | ColumnCountProperty[];
  /** **Initial value**: `balance` */
  "-moz-column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  /** **Initial value**: `normal` */
  "-moz-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  "-moz-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /** **Initial value**: `none` */
  "-moz-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /** **Initial value**: `medium` */
  "-moz-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /** **Initial value**: `auto` */
  "-moz-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  "-moz-context-properties"?: MozContextPropertiesProperty | MozContextPropertiesProperty[];
  /** **Initial value**: `content-box` */
  "-moz-float-edge"?: MozFloatEdgeProperty | MozFloatEdgeProperty[];
  /** **Initial value**: `normal` */
  "-moz-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /** **Initial value**: `normal` */
  "-moz-font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /** **Initial value**: `0` */
  "-moz-force-broken-image-icon"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `manual` */
  "-moz-hyphens"?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `auto` */
  "-moz-image-region"?: MozImageRegionProperty | MozImageRegionProperty[];
  /** **Initial value**: `0` */
  "-moz-margin-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-margin-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /** **Initial value**: `inline` */
  "-moz-orient"?: MozOrientProperty | MozOrientProperty[];
  /** **Initial value**: `0` */
  "-moz-outline-radius-bottomleft"?: MozOutlineRadiusBottomleftProperty<TLength> | MozOutlineRadiusBottomleftProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-outline-radius-bottomright"?: MozOutlineRadiusBottomrightProperty<TLength> | MozOutlineRadiusBottomrightProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-outline-radius-topleft"?: MozOutlineRadiusTopleftProperty<TLength> | MozOutlineRadiusTopleftProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-outline-radius-topright"?: MozOutlineRadiusToprightProperty<TLength> | MozOutlineRadiusToprightProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-padding-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  "-moz-padding-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /** **Initial value**: `none` */
  "-moz-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /** **Initial value**: `50% 50%` */
  "-moz-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /** **Initial value**: `stretch-to-fit` */
  "-moz-stack-sizing"?: MozStackSizingProperty | MozStackSizingProperty[];
  /** **Initial value**: `8` */
  "-moz-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  "-moz-text-blink"?: MozTextBlinkProperty | MozTextBlinkProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-moz-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `50% 50% 0` */
  "-moz-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `flat` */
  "-moz-transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  /** **Initial value**: `0s` */
  "-moz-transition-delay"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `0s` */
  "-moz-transition-duration"?: GlobalsString | GlobalsString[];
  /** **Initial value**: all */
  "-moz-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** **Initial value**: `ease` */
  "-moz-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** **Initial value**: `none` */
  "-moz-user-focus"?: MozUserFocusProperty | MozUserFocusProperty[];
  /** **Initial value**: `auto` */
  "-moz-user-input"?: MozUserInputProperty | MozUserInputProperty[];
  /** **Initial value**: `read-only` */
  "-moz-user-modify"?: MozUserModifyProperty | MozUserModifyProperty[];
  /** **Initial value**: `auto` */
  "-moz-user-select"?: UserSelectProperty | UserSelectProperty[];
  /** **Initial value**: `drag` */
  "-moz-window-dragging"?: MozWindowDraggingProperty | MozWindowDraggingProperty[];
  /** **Initial value**: `default` */
  "-moz-window-shadow"?: MozWindowShadowProperty | MozWindowShadowProperty[];
  /** **Initial value**: `false` */
  "-ms-accelerator"?: MsAcceleratorProperty | MsAcceleratorProperty[];
  /** **Initial value**: `tb` */
  "-ms-block-progression"?: MsBlockProgressionProperty | MsBlockProgressionProperty[];
  /** **Initial value**: `none` */
  "-ms-content-zoom-chaining"?: MsContentZoomChainingProperty | MsContentZoomChainingProperty[];
  /** **Initial value**: `400%` */
  "-ms-content-zoom-limit-max"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `100%` */
  "-ms-content-zoom-limit-min"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `snapInterval(0%, 100%)` */
  "-ms-content-zoom-snap-points"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  "-ms-content-zoom-snap-type"?: MsContentZoomSnapTypeProperty | MsContentZoomSnapTypeProperty[];
  /** **Initial value**: zoom for the top level element, none for all other elements */
  "-ms-content-zooming"?: MsContentZoomingProperty | MsContentZoomingProperty[];
  /** **Initial value**: "" (the empty string) */
  "-ms-filter"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `row` */
  "-ms-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  /** **Initial value**: `0` */
  "-ms-flex-positive"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `none` */
  "-ms-flow-from"?: MsFlowFromProperty | MsFlowFromProperty[];
  /** **Initial value**: `none` */
  "-ms-flow-into"?: MsFlowIntoProperty | MsFlowIntoProperty[];
  /** **Initial value**: `auto` */
  "-ms-grid-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /** **Initial value**: `auto` */
  "-ms-grid-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /** **Initial value**: `auto` */
  "-ms-high-contrast-adjust"?: MsHighContrastAdjustProperty | MsHighContrastAdjustProperty[];
  /** **Initial value**: `auto` */
  "-ms-hyphenate-limit-chars"?: MsHyphenateLimitCharsProperty | MsHyphenateLimitCharsProperty[];
  /** **Initial value**: `no-limit` */
  "-ms-hyphenate-limit-lines"?: MsHyphenateLimitLinesProperty | MsHyphenateLimitLinesProperty[];
  /** **Initial value**: `0` */
  "-ms-hyphenate-limit-zone"?: MsHyphenateLimitZoneProperty<TLength> | MsHyphenateLimitZoneProperty<TLength>[];
  /** **Initial value**: `manual` */
  "-ms-hyphens"?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `auto` */
  "-ms-ime-align"?: MsImeAlignProperty | MsImeAlignProperty[];
  /** **Initial value**: `auto` */
  "-ms-line-break"?: LineBreakProperty | LineBreakProperty[];
  /** **Initial value**: `0` */
  "-ms-order"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `auto` */
  "-ms-overflow-style"?: MsOverflowStyleProperty | MsOverflowStyleProperty[];
  /** **Initial value**: `visible` */
  "-ms-overflow-x"?: OverflowXProperty | OverflowXProperty[];
  /** **Initial value**: `visible` */
  "-ms-overflow-y"?: OverflowYProperty | OverflowYProperty[];
  /** **Initial value**: `chained` */
  "-ms-scroll-chaining"?: MsScrollChainingProperty | MsScrollChainingProperty[];
  /** **Initial value**: `auto` */
  "-ms-scroll-limit-x-max"?: MsScrollLimitXMaxProperty<TLength> | MsScrollLimitXMaxProperty<TLength>[];
  /** **Initial value**: `0` */
  "-ms-scroll-limit-x-min"?: MsScrollLimitXMinProperty<TLength> | MsScrollLimitXMinProperty<TLength>[];
  /** **Initial value**: `auto` */
  "-ms-scroll-limit-y-max"?: MsScrollLimitYMaxProperty<TLength> | MsScrollLimitYMaxProperty<TLength>[];
  /** **Initial value**: `0` */
  "-ms-scroll-limit-y-min"?: MsScrollLimitYMinProperty<TLength> | MsScrollLimitYMinProperty<TLength>[];
  /** **Initial value**: `railed` */
  "-ms-scroll-rails"?: MsScrollRailsProperty | MsScrollRailsProperty[];
  /** **Initial value**: `snapInterval(0px, 100%)` */
  "-ms-scroll-snap-points-x"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `snapInterval(0px, 100%)` */
  "-ms-scroll-snap-points-y"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  "-ms-scroll-snap-type"?: MsScrollSnapTypeProperty | MsScrollSnapTypeProperty[];
  /** **Initial value**: `none` */
  "-ms-scroll-translation"?: MsScrollTranslationProperty | MsScrollTranslationProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  /** **Initial value**: depends on user agent */
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
  /** **Initial value**: `none` */
  "-ms-text-autospace"?: MsTextAutospaceProperty | MsTextAutospaceProperty[];
  /** **Initial value**: `none` */
  "-ms-text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** **Initial value**: `clip` */
  "-ms-text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-ms-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `auto` */
  "-ms-touch-action"?: TouchActionProperty | TouchActionProperty[];
  /** **Initial value**: `grippers` */
  "-ms-touch-select"?: MsTouchSelectProperty | MsTouchSelectProperty[];
  /** **Initial value**: `none` */
  "-ms-transform"?: TransformProperty | TransformProperty[];
  /** **Initial value**: `50% 50% 0` */
  "-ms-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `text` */
  "-ms-user-select"?: MsUserSelectProperty | MsUserSelectProperty[];
  /** **Initial value**: `normal` */
  "-ms-word-break"?: WordBreakProperty | WordBreakProperty[];
  /** **Initial value**: `auto` */
  "-ms-wrap-flow"?: MsWrapFlowProperty | MsWrapFlowProperty[];
  /** **Initial value**: `0` */
  "-ms-wrap-margin"?: MsWrapMarginProperty<TLength> | MsWrapMarginProperty<TLength>[];
  /** **Initial value**: `wrap` */
  "-ms-wrap-through"?: MsWrapThroughProperty | MsWrapThroughProperty[];
  /** **Initial value**: `horizontal-tb` */
  "-ms-writing-mode"?: WritingModeProperty | WritingModeProperty[];
  /** **Initial value**: `auto auto` */
  "-o-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `fill` */
  "-o-object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  /** **Initial value**: `50% 50%` */
  "-o-object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `8` */
  "-o-tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  "-o-text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  /** **Initial value**: `50% 50% 0` */
  "-o-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `normal` */
  "-webkit-align-content"?: AlignContentProperty | AlignContentProperty[];
  /** **Initial value**: `normal` */
  "-webkit-align-items"?: AlignItemsProperty | AlignItemsProperty[];
  /** **Initial value**: `auto` */
  "-webkit-align-self"?: AlignSelfProperty | AlignSelfProperty[];
  /** **Initial value**: `0s` */
  "-webkit-animation-delay"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `normal` */
  "-webkit-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /** **Initial value**: `0s` */
  "-webkit-animation-duration"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  "-webkit-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /** **Initial value**: `1` */
  "-webkit-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /** **Initial value**: `none` */
  "-webkit-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /** **Initial value**: `running` */
  "-webkit-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /** **Initial value**: `ease` */
  "-webkit-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /** **Initial value**: `auto` */
  "-webkit-appearance"?: AppearanceProperty | AppearanceProperty[];
  /** **Initial value**: `none` */
  "-webkit-backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  /** **Initial value**: `visible` */
  "-webkit-backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /** **Initial value**: `auto auto` */
  "-webkit-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  "-webkit-border-before-color"?: WebkitBorderBeforeColorProperty | WebkitBorderBeforeColorProperty[];
  /** **Initial value**: `none` */
  "-webkit-border-before-style"?: WebkitBorderBeforeStyleProperty | WebkitBorderBeforeStyleProperty[];
  /** **Initial value**: `medium` */
  "-webkit-border-before-width"?: WebkitBorderBeforeWidthProperty<TLength> | WebkitBorderBeforeWidthProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /** **Initial value**: `100%` */
  "-webkit-border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /** **Initial value**: `0` */
  "-webkit-border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /** **Initial value**: `slice` */
  "-webkit-box-decoration-break"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /** **Initial value**: `none` */
  "-webkit-box-reflect"?: WebkitBoxReflectProperty<TLength> | WebkitBoxReflectProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /** **Initial value**: `content-box` */
  "-webkit-box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  /** **Initial value**: `none` */
  "-webkit-clip-path"?: ClipPathProperty | ClipPathProperty[];
  /** **Initial value**: `auto` */
  "-webkit-column-count"?: ColumnCountProperty | ColumnCountProperty[];
  /** **Initial value**: `normal` */
  "-webkit-column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /** **Initial value**: `currentcolor` */
  "-webkit-column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /** **Initial value**: `none` */
  "-webkit-column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /** **Initial value**: `medium` */
  "-webkit-column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  /** **Initial value**: `auto` */
  "-webkit-column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-filter"?: FilterProperty | FilterProperty[];
  /** **Initial value**: `auto` */
  "-webkit-flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /** **Initial value**: `row` */
  "-webkit-flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  /** **Initial value**: `0` */
  "-webkit-flex-grow"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `1` */
  "-webkit-flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `normal` */
  "-webkit-font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /** **Initial value**: `auto` */
  "-webkit-font-kerning"?: FontKerningProperty | FontKerningProperty[];
  /** **Initial value**: `normal` */
  "-webkit-font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /** **Initial value**: `manual` */
  "-webkit-hyphens"?: HyphensProperty | HyphensProperty[];
  /** **Initial value**: `normal` */
  "-webkit-justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  /** **Initial value**: `auto` */
  "-webkit-line-break"?: LineBreakProperty | LineBreakProperty[];
  /** **Initial value**: `0` */
  "-webkit-margin-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-margin-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /** **Initial value**: `scroll` */
  "-webkit-mask-attachment"?: WebkitMaskAttachmentProperty | WebkitMaskAttachmentProperty[];
  /** **Initial value**: `border` */
  "-webkit-mask-clip"?: WebkitMaskClipProperty | WebkitMaskClipProperty[];
  /** **Initial value**: `source-over` */
  "-webkit-mask-composite"?: WebkitMaskCompositeProperty | WebkitMaskCompositeProperty[];
  /** **Initial value**: `none` */
  "-webkit-mask-image"?: WebkitMaskImageProperty | WebkitMaskImageProperty[];
  /** **Initial value**: `padding` */
  "-webkit-mask-origin"?: WebkitMaskOriginProperty | WebkitMaskOriginProperty[];
  /** **Initial value**: `0% 0%` */
  "-webkit-mask-position"?: WebkitMaskPositionProperty<TLength> | WebkitMaskPositionProperty<TLength>[];
  /** **Initial value**: `0%` */
  "-webkit-mask-position-x"?: WebkitMaskPositionXProperty<TLength> | WebkitMaskPositionXProperty<TLength>[];
  /** **Initial value**: `0%` */
  "-webkit-mask-position-y"?: WebkitMaskPositionYProperty<TLength> | WebkitMaskPositionYProperty<TLength>[];
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat"?: WebkitMaskRepeatProperty | WebkitMaskRepeatProperty[];
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat-x"?: WebkitMaskRepeatXProperty | WebkitMaskRepeatXProperty[];
  /** **Initial value**: `repeat` */
  "-webkit-mask-repeat-y"?: WebkitMaskRepeatYProperty | WebkitMaskRepeatYProperty[];
  /** **Initial value**: `0` */
  "-webkit-max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-order"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `auto` */
  "-webkit-overflow-scrolling"?: WebkitOverflowScrollingProperty | WebkitOverflowScrollingProperty[];
  /** **Initial value**: `0` */
  "-webkit-padding-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /** **Initial value**: `0` */
  "-webkit-padding-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-perspective"?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /** **Initial value**: `50% 50%` */
  "-webkit-perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /** **Initial value**: `0.0` */
  "-webkit-shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  /** **Initial value**: `0` */
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /** **Initial value**: `none` */
  "-webkit-shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /** **Initial value**: `black` */
  "-webkit-tap-highlight-color"?: WebkitTapHighlightColorProperty | WebkitTapHighlightColorProperty[];
  /** **Initial value**: `none` */
  "-webkit-text-combine"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /** **Initial value**: `currentcolor` */
  "-webkit-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /** **Initial value**: `none` */
  "-webkit-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /** **Initial value**: `objects` */
  "-webkit-text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /** **Initial value**: `solid` */
  "-webkit-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /** **Initial value**: `currentcolor` */
  "-webkit-text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /** **Initial value**: `over right` */
  "-webkit-text-emphasis-position"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `none` */
  "-webkit-text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /** **Initial value**: `currentcolor` */
  "-webkit-text-fill-color"?: WebkitTextFillColorProperty | WebkitTextFillColorProperty[];
  /** **Initial value**: `mixed` */
  "-webkit-text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  /** **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable). */
  "-webkit-text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /** **Initial value**: `currentcolor` */
  "-webkit-text-stroke-color"?: WebkitTextStrokeColorProperty | WebkitTextStrokeColorProperty[];
  /** **Initial value**: `0` */
  "-webkit-text-stroke-width"?: WebkitTextStrokeWidthProperty<TLength> | WebkitTextStrokeWidthProperty<TLength>[];
  /** **Initial value**: `default` */
  "-webkit-touch-callout"?: WebkitTouchCalloutProperty | WebkitTouchCalloutProperty[];
  /** **Initial value**: `none` */
  "-webkit-transform"?: TransformProperty | TransformProperty[];
  /** **Initial value**: `50% 50% 0` */
  "-webkit-transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /** **Initial value**: `flat` */
  "-webkit-transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  /** **Initial value**: `0s` */
  "-webkit-transition-delay"?: GlobalsString | GlobalsString[];
  /** **Initial value**: `0s` */
  "-webkit-transition-duration"?: GlobalsString | GlobalsString[];
  /** **Initial value**: all */
  "-webkit-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /** **Initial value**: `ease` */
  "-webkit-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /** **Initial value**: `read-only` */
  "-webkit-user-modify"?: WebkitUserModifyProperty | WebkitUserModifyProperty[];
  /** **Initial value**: `auto` */
  "-webkit-user-select"?: UserSelectProperty | UserSelectProperty[];
  /** **Initial value**: `horizontal-tb` */
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
  /**
   * **Initial value**: `center`
   *
   * @deprecated
   */
  azimuth?: AzimuthProperty | AzimuthProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "box-flex"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "box-pack"?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: ClipProperty | ClipProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "font-variant-alternates"?: FontVariantAlternatesProperty | FontVariantAlternatesProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-column-gap"?: GridColumnGapProperty<TLength> | GridColumnGapProperty<TLength>[];
  /** @deprecated */
  "grid-gap"?: GridGapProperty<TLength> | GridGapProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "grid-row-gap"?: GridRowGapProperty<TLength> | GridRowGapProperty<TLength>[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "ime-mode"?: ImeModeProperty | ImeModeProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-coordinate"?: ScrollSnapCoordinateProperty<TLength> | ScrollSnapCoordinateProperty<TLength>[];
  /**
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  "scroll-snap-destination"?: ScrollSnapDestinationProperty<TLength> | ScrollSnapDestinationProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-points-y"?: ScrollSnapPointsYProperty | ScrollSnapPointsYProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-x"?: ScrollSnapTypeXProperty | ScrollSnapTypeXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "scroll-snap-type-y"?: ScrollSnapTypeYProperty | ScrollSnapTypeYProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "text-combine-horizontal"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-khtml-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-khtml-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-khtml-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-khtml-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `slice`
   *
   * @deprecated
   */
  "-moz-background-inline-policy"?: BoxDecorationBreakProperty | BoxDecorationBreakProperty[];
  /**
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  "-moz-background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** @deprecated */
  "-moz-border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomleft"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-bottomright"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topleft"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-border-radius-topright"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-moz-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-moz-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-moz-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-moz-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * **Initial value**: `1.0`
   *
   * @deprecated
   */
  "-moz-opacity"?: GlobalsNumber | GlobalsNumber[];
  /** @deprecated */
  "-moz-outline"?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * @deprecated
   */
  "-moz-outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  "-moz-outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-resize"?: ResizeProperty | ResizeProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-moz-text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  "-moz-text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-moz-text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  "-moz-text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  "-ms-ime-mode"?: ImeModeProperty | ImeModeProperty[];
  /** @deprecated */
  "-o-animation"?: AnimationProperty | AnimationProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-delay"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-o-animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-animation-duration"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * **Initial value**: `1`
   *
   * @deprecated
   */
  "-o-animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * **Initial value**: `running`
   *
   * @deprecated
   */
  "-o-animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-o-transform"?: TransformProperty | TransformProperty[];
  /** @deprecated */
  "-o-transition"?: TransitionProperty | TransitionProperty[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-delay"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  "-o-transition-duration"?: GlobalsString | GlobalsString[];
  /**
   * **Initial value**: all
   *
   * @deprecated
   */
  "-o-transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  "-o-transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  "-webkit-box-direction"?: BoxDirectionProperty | BoxDirectionProperty[];
  /**
   * **Initial value**: `0`
   *
   * @deprecated
   */
  "-webkit-box-flex"?: GlobalsNumber | GlobalsNumber[];
  /**
   * **Initial value**: `inline-axis` (`horizontal` in XUL)
   *
   * @deprecated
   */
  "-webkit-box-orient"?: BoxOrientProperty | BoxOrientProperty[];
  /**
   * **Initial value**: `start`
   *
   * @deprecated
   */
  "-webkit-box-pack"?: BoxPackProperty | BoxPackProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
  "-webkit-scroll-snap-points-x"?: ScrollSnapPointsXProperty | ScrollSnapPointsXProperty[];
  /**
   * **Initial value**: `none`
   *
   * @deprecated
   */
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
