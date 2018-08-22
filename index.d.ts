export interface StandardLonghandProperties<TLength = string | 0> {
  /**
   * The CSS **`align-content`** property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty;
  /**
   * The CSS **`align-items`** property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like `justify-content` but in the perpendicular direction.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **52**  | **20**  | **7** _-x-_ | **12** | **11** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty;
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **36**  | **20**  |   No   | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty;
  /**
   * The **`animation-delay`** CSS property specifies when an animation should start. You can begin the animation at a future point in time, immediately and from its beginning, or immediately and partway through the animation cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **43** | **16**  |  **9**  | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString;
  /**
   * The **`animation-direction`** CSS property specifies whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty;
  /**
   * The **`animation-duration`** CSS property specifies the length of time that an animation should take to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString;
  /**
   * The **`animation-fill-mode`** CSS property specifies how a CSS animation should apply styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty;
  /**
   * The **`animation-iteration-count`** CSS property specifies  the number of times an animation cycle should be played before stopping. If multiple values are specified, each time the animation is played the next value in the list is used, cycling back to the first value after the last one is used.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty;
  /**
   * The **`animation-name`** CSS property specifies one or more animations that should be applied to an element. Each name indicates an `@keyframes` at-rule that defines the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty;
  /**
   * The **`animation-play-state`** CSS property specifies whether an **animation is running or paused**. In JavaScript, this can be queried to determine whether or not the animation is currently running. In addition, you can use JavaScript to set its value to pause or resume playback of an animation.
   *
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **43** | **16**  |  Yes   | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty;
  /**
   * The `**animation-timing-function**` CSS property specifies how a CSS animation should progress over the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * |  n/a   |   No    | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty;
  /**
   * The **`backface-visibility`** CSS property determines whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty;
  /**
   * If a `background-image` is specified, the **`background-attachment`** CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty;
  /**
   * The **`background-blend-mode`** CSS property determines how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty;
  /**
   * The **`background-clip`** CSS property specifies if an element's background, whether a `<color>` or an `<image>`, extends underneath its border.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty;
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_, i.e., the origin position of an image specified using the `background-image` property.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty;
  /**
   * The **`background-position`** CSS property sets the initial position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength>;
  /**
   * The **`background-repeat`** CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty;
  /**
   * The **`background-size`** CSS property specifies the size of the element's background image. The image can be left to its natural size, stretched to a new size, or constrained to fit the available space while preserving its intrinsic proportions.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  blockOverflow?: BlockOverflowProperty;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength>;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-bottom` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty;
  /**
   * The **`border-bottom-left-radius`** CSS property sets the rounding of the bottom-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property sets the rounding of the bottom-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength>;
  /**
   * The **`border-collapse`** CSS property specifies whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty;
  /**
   * The **`border-image-outset`** CSS property specifies the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions are used to form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty;
  /**
   * The **`border-image-source`** CSS property specifies the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty;
  /**
   * The **`border-image-width`** CSS property specifies the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength>;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox            | Safari | Edge | IE  |
   * | :----: | :--------------------------: | :----: | :--: | :-: |
   * |   No   |            **41**            |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox             | Safari | Edge | IE  |
   * | :----: | :----------------------------: | :----: | :--: | :-: |
   * |   No   |             **41**             |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-left` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right `border`. Note that in many cases the shorthand CSS properties  `border-color` or `border-right` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength>;
  /**
   * The **`border-spacing`** CSS property specifies the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-top` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty;
  /**
   * The **`border-top-left-radius`** CSS property sets the rounding of the top-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property sets the rounding of the top-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength>;
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  /** **Initial value**: `stretch` */
  boxAlign?: BoxAlignProperty;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
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
   * The **`box-shadow`** CSS property is used to add shadow effects around an element's frame. You can specify multiple effects separated by commas if you wish to do so. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty;
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty;
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty;
  /**
   * The **`break-before`** CSS property defines how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty;
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty;
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret—the visible indicator of the point at which the next character typed by the user will be inserted—within an element such as `<input>` or one with the `contenteditable` attribute set. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty;
  /**
   * The **`clear`** CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The `clear` property applies to both floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * The `**clip-path**` CSS property creates a clipping region that defines what part of an element should be displayed. More specifically, those portions that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari | Edge | IE  |
   * | :------: | :-----: | :----: | :--: | :-: |
   * |  **55**  | **3.5** |   No   |  No  | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text content and text decorations. It also sets the `currentcolor` value, which may be used as an indirect value on _other_ properties, and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  |  Yes   | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  /**
   * The **`color-adjust`** CSS property gives the web author control over what if anything the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  colorAdjust?: ColorAdjustProperty;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari |  Edge  | IE  |
   * | :----: | :------: | :----: | :----: | :-: |
   * |  Yes   |  **52**  |  n/a   | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome |  Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :-------: | :-----: | :----: | :----: |
   * | **50** |  **52**   | **10**  | **12** | **10** |
   * |        | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty;
  /**
   * The **`column-rule-style`** CSS property sets the style of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty;
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |  Yes   | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty;
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. If the width of the container is narrower than the specified value, the actual column width may be smaller. The container will have as many columns as can fit without any of them having a width less than the `column-width` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  contain?: ContainProperty;
  /**
   * The **`content`** CSS property is used with the `::before` and `::after` pseudo-elements to generate content in an element. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge |  IE   |
   * | :----: | :-----: | :----: | :--: | :---: |
   * | **2**  |  **1**  | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty;
  /**
   * The **`cursor`** CSS property specifies which mouse cursor to display when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * The **`display`** CSS property specifies the type of rendering box used for an element. In HTML, default `display` property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is `inline`, including SVG elements.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * The **`empty-cells`** CSS property specifies how the user agent should render borders and backgrounds around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty;
  /**
   * The **`filter`** CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  | IE  |
   * | :------: | :-----: | :---------: | :----: | :-: |
   * |  **53**  | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * The **`flex-basis`** CSS property specifies the initial **main size** of a flex item. This property determines the size of the content-box unless specified otherwise using `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength>;
  /**
   * The **`flex-direction`** CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty;
  /**
   * The **`flex-grow`** CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |              IE              |
   * | :------: | :-----: | :-----------: | :----: | :--------------------------: |
   * |  **29**  | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * | 21 _-x-_ |         |               |        |                              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber;
  /**
   * The **`flex-shrink`** CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default size of flex items is larger than the flex container.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **29**  | **20**  | **8** _-x-_ | **12** | **10** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber;
  /**
   * The CSS **`flex-wrap`** property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **29**  | **28**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty;
  /**
   * The **`float`** CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty;
  /**
   * The **`font-feature-settings`** CSS property gives you control over advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty;
  /**
   * The **`font-kerning`** CSS property controls the usage of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty;
  /**
   * The **`font-language-override`** CSS property controls the usage of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty;
  /**
   * The **`font-optical-sizing`** CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **62**  |  n/a   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: FontOpticalSizingProperty;
  /**
   * The **`font-size`** CSS property specifies the size of the font. Setting this property may change the size of other items, too, since it is used to compute the value of `em`, `ex`, and various other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength>;
  /**
   * The **`font-size-adjust`** CSS property specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters. This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **48** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty;
  /**
   * The **`font-style`** CSS property specifies whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty;
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty;
  /**
   * The **`font-variant-caps`** CSS property controls the usage of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty;
  /**
   * The **`font-variant-east-asian`** CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty;
  /**
   * The **`font-variant-position`** CSS property controls the usage of alternate, smaller glyphs that are positioned as superscript or subscript relative to the baseline of the font (which remains unchanged). These glyphs are likely to be used in `<sub>` and `<sup>` elements.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **62** | **62**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty;
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **52**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **52**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength>;
  /** **Initial value**: `none` */
  hangingPunctuation?: HangingPunctuationProperty;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     | Edge |      IE      |
   * | :------: | :-----: | :-----------: | :--: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty;
  /**
   * The **`image-rendering`** CSS property indicates the algorithm to use when scaling images. When applied to an element, the property applies to the element itself, to any images supplied in its other properties, and to its descendant elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **3.6** |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty;
  /** **Initial value**: `1dppx` */
  imageResolution?: ImageResolutionProperty;
  /**
   * The `initial-letter` CSS property specifies styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty;
  /** **Initial value**: `auto` */
  initialLetterAlign?: InitialLetterAlignProperty;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main axis of their container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **52**  | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty;
  /**
   * The CSS **`justify-self`** property defines the way of justifying a box inside its container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * The **`letter-spacing`** CSS property specifies the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength>;
  /**
   * The **`line-break`** CSS property is used to specify how (or if) to break lines when working with punctuation and symbols. This only affects text in Chinese, Japanese, or Korean (CJK).
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge  |   IE    |
   * | :-----: | :-----: | :----: | :----: | :-----: |
   * | **58**  |   No    |  Yes   | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty;
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength>;
  /** **Initial value**: `0` */
  lineHeightStep?: LineHeightStepProperty<TLength>;
  /**
   * The **`list-style-image`** CSS property specifies an image to be used as the list item marker. It is often more convenient to use the shorthand `list-style`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty;
  /**
   * The **`list-style-position`** CSS property specifies the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty;
  /**
   * The **`list-style-type`** CSS property specifies the appearance of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome            |        Firefox        |            Safari            | Edge | IE  |
   * | :--------------------------: | :-------------------: | :--------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-end)_ |        **41**         | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome             |         Firefox         |             Safari             | Edge | IE  |
   * | :----------------------------: | :---------------------: | :----------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-start)_ |         **41**          | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
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
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty;
  /**
   * The **`mask-mode`** CSS property determines whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty;
  /**
   * The **`mask-origin`** CSS property determines the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer defined by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength>;
  /**
   * The **`mask-repeat`** CSS property defines how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **53**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength>;
  /**
   * The **`mask-type`** CSS property determines whether the mask defined by an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **24** | **35**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty;
  /** **Initial value**: `0` */
  maxBlockSize?: MaxBlockSizeProperty<TLength>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * |  Yes   | **41**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `none` */
  maxLines?: MaxLinesProperty;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **3**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength>;
  /**
   * The **`mix-blend-mode`** CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength>;
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty;
  /**
   * The **`object-fit`** CSS property specifies how the contents of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  |  Yes   | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `auto` */
  offsetAnchor?: OffsetAnchorProperty<TLength>;
  /**
   * The **`offset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength>;
  /**
   * The **`offset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength>;
  /**
   * The **`offset-inline-end`** CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength>;
  /**
   * The **`offset-inline-start`** CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength>;
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty;
  /** **Initial value**: `auto` */
  offsetPosition?: OffsetPositionProperty<TLength>;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty;
  /**
   * The **`opacity`** CSS property specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * The **`order`** CSS property specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are laid out in ascending order according to their `order` values. Elements with the same `order` value are laid out in the order in which they appear in the source code.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * The **`orphans`** CSS property specifies the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an `outline` and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty;
  /**
   * The **`outline-width`** CSS property sets the width (thickness) of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength>;
  /**
   * The **`overflow`** CSS property specifies what to do when an element's content is too large to fit in its block formatting context. It is a shorthand for the `overflow-x` and `overflow-y` properties.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
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
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |      Firefox      |       Safari        |         Edge         |          IE           |
   * | :-----------------: | :---------------: | :-----------------: | :------------------: | :-------------------: |
   * | **1** _(word-wrap)_ |      **49**       | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty;
  /**
   * The **`overflow-x`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty;
  /**
   * The **`overflow-y`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty;
  /**
   * The **`overscroll-behavior`** CSS property is shorthand for the `overscroll-behavior-x` and `overscroll-behavior-y` properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty;
  /**
   * The **`overscroll-behavior-x`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty;
  /**
   * The **`overscroll-behavior-y`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength>;
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome             |        Firefox         |            Safari             | Edge | IE  |
   * | :---------------------------: | :--------------------: | :---------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-end)_ |         **41**         | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome              |         Firefox          |             Safari              | Edge | IE  |
   * | :-----------------------------: | :----------------------: | :-----------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-start)_ |          **41**          | **3** _(-webkit-padding-start)_ |  No  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength>;
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength>;
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **60**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari |  Edge  |   IE   |
   * | :------: | :------: | :----: | :----: | :----: |
   * |  **45**  |  **16**  |  Yes   | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength>;
  /**
   * The `**place-content**` CSS shorthand property sets both the `align-content` and `justify-content` properties.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** |   Yes   |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty;
  /**
   * The **`pointer-events`** CSS property specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty;
  /**
   * The **`position`** CSS property specifies how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * The **`quotes`** CSS property indicates how user agents should render quotation marks.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which direction(s).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: RowGapProperty<TLength>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty;
  /** **Initial value**: `separate` */
  rubyMerge?: RubyMergeProperty;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * The **`scroll-behavior`** CSS property specifies the scrolling behavior for a scrolling box when scrolling is triggered by one of the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty;
  /**
   * The **`scroll-snap-type`** CSS property defines how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |     Edge     |      IE      |
   * | :----: | :-----: | :---------: | :----------: | :----------: |
   * |   No   | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty;
  /**
   * The **`shape-image-threshold`** CSS property defines the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber;
  /**
   * The **`shape-margin`** CSS property specifies a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength>;
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength>;
  /**
   * The **`table-layout`** CSS property specifies the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty;
  /**
   * The **`text-align`** CSS property describes how inline content like text is aligned in its parent block element. `text-align` does not control the alignment of block elements, only their inline content.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty;
  /**
   * The **`text-align-last`** CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **47** | **49**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty;
  /**
   * The **`text-combine-upright`** CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |                   IE                   |
   * | :----: | :-----: | :----: | :----: | :------------------------------------: |
   * | **48** | **48**  |  Yes   | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty;
  /**
   * The **`text-decoration-color`** CSS property sets the color of the decorative additions to text that are specified by `text-decoration-line`; these include underlines and overlines, strikethroughs, and wavy lines like those typically used to indicate content is misspelled (for example). The specified color applies to all such decorative lines in the scope of the property's value.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty;
  /**
   * The **`text-decoration-skip`** CSS property specifies what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * | 57-64  |   No    | **8** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are specified; there is no way to define different styles for each of the lines defined by `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty;
  /**
   * The **`text-emphasis-color`** CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty;
  /**
   * The **`text-emphasis-position`** CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString;
  /**
   * The **`text-emphasis-style`** CSS property defines the type of emphasis used. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty;
  /**
   * The **`text-indent`** CSS property specifies the amount of indentation (empty space) that is put before lines of text in a block. By default, this controls the indentation of only the first formatted line of the block, but the `hanging` and `each-line` keywords can be used to change this behavior.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength>;
  /**
   * The **`text-justify`** CSS property defines what type of justification should be applied to text when it is justified (i.e., when `text-align``: justify;` is set on it).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty;
  /**
   * The **`text-orientation`** CSS property defines the orientation of the text characters in a line. This property only has an effect in vertical mode, that is, when `writing-mode` is not `horizontal-tb`. It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **48** | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty;
  /**
   * The **`text-overflow`** CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **3**  | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * The **`touch-action`** CSS property specifies whether, and in what ways, a given region can be manipulated by the user via a touchscreen (for instance, by panning or zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  |   No   | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate a given element. This is achieved by modifying the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari   |     Edge     |   IE    |
   * | :----: | :-----: | :-------: | :----------: | :-----: |
   * | **36** | **16**  |   **9**   | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome |  Firefox  |    Safari     |  Edge  |   IE    |
   * | :----: | :-------: | :-----------: | :----: | :-----: |
   * |  Yes   |  **16**   | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength>;
  /**
   * The **`transform-style`** CSS property determines if the children of an element are positioned in the 3D-space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  | IE  |
   * | :----------: | :------: | :----: | :----: | :-: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty;
  /**
   * The **`transition-delay`** CSS property specifies the amount of time to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString;
  /**
   * The **`transition-duration`** CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString;
  /**
   * The **`transition-property`** CSS property specifies the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty;
  /**
   * The **`transition-timing-function`** CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox    |    Safari     |     Edge     |   IE   |
   * | :-----: | :----------: | :-----------: | :----------: | :----: |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty;
  /**
   * The **`vertical-align`** CSS property specifies the vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength>;
  /**
   * The **`visibility`** CSS property can show or hide an element without affecting the layout of a document (i.e., space is created for elements regardless of whether they are visible or not). The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * The **`white-space`** CSS property determines how whitespace inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty;
  /**
   * The **`widows`** CSS property specifies the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * The **`width`** CSS property specifies the width of an element. By default, the property defines the width of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * The **`will-change`** CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty;
  /**
   * The **`word-break`** CSS property specifies whether or not the browser should insert line breaks wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  |  Yes   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty;
  /**
   * The **`word-spacing`** CSS property specifies the spacing behavior between tags and words.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength>;
  /**
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty;
  /**
   * The **`writing-mode`** CSS property defines whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * **Initial value**: `horizontal-tb`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  |     IE      |
   * | :---------: | :-----: | :-----------: | :----: | :---------: |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty;
  /**
   * The **`z-index`** CSS property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * |  Yes   |   No    | **4**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: ZoomProperty;
}

export interface StandardShorthandProperties<TLength = string | 0> {
  /**
   * The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **37** | **27**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Globals;
  /**
   * The **`animation`** CSS property is a shorthand property for the various animation properties: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * The **`background`** CSS property is a short way to declare all background style options at once, including color, image, origin and size, repeat method, and other features.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * The **`border`** CSS property is a shorthand for setting all individual border property values in a single declaration: `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength>;
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-color`, `border-bottom-style`, and `border-bottom-width`. These properties describe an element's bottom `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength>;
  /**
   * The **`border-color`** CSS property is a shorthand property for setting the colors on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty;
  /**
   * The **`border-image`** CSS property lets you draw an image in place of an element's `border-style`.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength>;
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-color`, `border-left-style`, and `border-left-width`. These properties describe an element's left `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength>;
  /**
   * The **`border-radius`** CSS property lets you round the corners of an element's outer border edge. You can specify a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength>;
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-color`, `border-right-style`, and `border-right-width`. These properties describe an element's right `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength>;
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty;
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-color`, `border-top-style`, and `border-top-width`. These properties describe an element's top `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength>;
  /**
   * The **`border-width`** CSS property is a shorthand property for setting the widths on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength>;
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength>;
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * The **`flex`** CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  |  20-61  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` individual properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty;
  /**
   * The **`font`** CSS property is either a shorthand property for setting `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`; or a way to set the element's font to a system font, using specific keywords.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  /**
   * The **`gap`** CSS property specifies the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: GapProperty<TLength>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty;
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty;
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty;
  /** **Initial value**: `none` */
  lineClamp?: LineClampProperty;
  /**
   * The **`list-style`** CSS property is a shorthand for setting the individual values that define how a list is displayed: `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for setting all individual margins at once: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * The **`mask`** CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   Yes   | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  maskBorder?: MaskBorderProperty;
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * The **`outline`** CSS property is a shorthand for setting various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for setting all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * The **`text-decoration`** CSS property specifies the appearance of decorative lines used on text. It is a shorthand for setting one or more individual text-decoration values in a single declaration, which include `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty;
  /**
   * The **`text-emphasis`** CSS property is a shorthand property for setting `text-emphasis-style` and `text-emphasis-color` in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
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
  /** **Initial value**: `auto` */
  msAlignSelf?: AlignSelfProperty;
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
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  WebkitAppearance?: WebkitAppearanceProperty;
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
  /** **Initial value**: `economy` */
  WebkitColorAdjust?: ColorAdjustProperty;
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
  /** **Initial value**: `nowrap` */
  WebkitFlexWrap?: FlexWrapProperty;
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
  /** **Initial value**: `auto auto` */
  WebkitMaskSize?: WebkitMaskSizeProperty<TLength>;
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
  /** **Initial value**: `0` */
  WebkitShapeMargin?: ShapeMarginProperty<TLength>;
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
  WebkitMask?: WebkitMaskProperty<TLength>;
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
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty;
  /**
   * **Initial value**: `ButtonText`
   *
   * @deprecated
   */
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty;
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty;
  /**
   * **Initial value**: `ThreeDFace`
   *
   * @deprecated
   */
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty;
  /**
   * **Initial value**: `ThreeDHighlight`
   *
   * @deprecated
   */
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty;
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty;
  /**
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty;
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
   * The CSS **`align-content`** property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty;
  /**
   * The CSS **`align-items`** property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like `justify-content` but in the perpendicular direction.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **52**  | **20**  | **7** _-x-_ | **12** | **11** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty;
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **36**  | **20**  |   No   | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty;
  /**
   * The **`animation-delay`** CSS property specifies when an animation should start. You can begin the animation at a future point in time, immediately and from its beginning, or immediately and partway through the animation cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **43** | **16**  |  **9**  | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString;
  /**
   * The **`animation-direction`** CSS property specifies whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty;
  /**
   * The **`animation-duration`** CSS property specifies the length of time that an animation should take to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString;
  /**
   * The **`animation-fill-mode`** CSS property specifies how a CSS animation should apply styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty;
  /**
   * The **`animation-iteration-count`** CSS property specifies  the number of times an animation cycle should be played before stopping. If multiple values are specified, each time the animation is played the next value in the list is used, cycling back to the first value after the last one is used.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty;
  /**
   * The **`animation-name`** CSS property specifies one or more animations that should be applied to an element. Each name indicates an `@keyframes` at-rule that defines the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty;
  /**
   * The **`animation-play-state`** CSS property specifies whether an **animation is running or paused**. In JavaScript, this can be queried to determine whether or not the animation is currently running. In addition, you can use JavaScript to set its value to pause or resume playback of an animation.
   *
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **43** | **16**  |  Yes   | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty;
  /**
   * The `**animation-timing-function**` CSS property specifies how a CSS animation should progress over the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty;
  /**
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty;
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * |  n/a   |   No    | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty;
  /**
   * The **`backface-visibility`** CSS property determines whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty;
  /**
   * If a `background-image` is specified, the **`background-attachment`** CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty;
  /**
   * The **`background-blend-mode`** CSS property determines how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty;
  /**
   * The **`background-clip`** CSS property specifies if an element's background, whether a `<color>` or an `<image>`, extends underneath its border.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty;
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty;
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty;
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_, i.e., the origin position of an image specified using the `background-image` property.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty;
  /**
   * The **`background-position`** CSS property sets the initial position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength>;
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength>;
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength>;
  /**
   * The **`background-repeat`** CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty;
  /**
   * The **`background-size`** CSS property specifies the size of the element's background image. The image can be left to its natural size, stretched to a new size, or constrained to fit the available space while preserving its intrinsic proportions.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength>;
  /** **Initial value**: `clip` */
  "block-overflow"?: BlockOverflowProperty;
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength>;
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty;
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty;
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength>;
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty;
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty;
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength>;
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-bottom` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty;
  /**
   * The **`border-bottom-left-radius`** CSS property sets the rounding of the bottom-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength>;
  /**
   * The **`border-bottom-right-radius`** CSS property sets the rounding of the bottom-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength>;
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty;
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength>;
  /**
   * The **`border-collapse`** CSS property specifies whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty;
  /**
   * The **`border-image-outset`** CSS property specifies the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength>;
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty;
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions are used to form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty;
  /**
   * The **`border-image-source`** CSS property specifies the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty;
  /**
   * The **`border-image-width`** CSS property specifies the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength>;
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty;
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox            | Safari | Edge | IE  |
   * | :----: | :--------------------------: | :----: | :--: | :-: |
   * |   No   |            **41**            |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty;
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength>;
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox             | Safari | Edge | IE  |
   * | :----: | :----------------------------: | :----: | :--: | :-: |
   * |   No   |             **41**             |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty;
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty;
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength>;
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-left` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty;
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty;
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength>;
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right `border`. Note that in many cases the shorthand CSS properties  `border-color` or `border-right` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty;
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty;
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength>;
  /**
   * The **`border-spacing`** CSS property specifies the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength>;
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-top` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty;
  /**
   * The **`border-top-left-radius`** CSS property sets the rounding of the top-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength>;
  /**
   * The **`border-top-right-radius`** CSS property sets the rounding of the top-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength>;
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty;
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength>;
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength>;
  /** **Initial value**: `stretch` */
  "box-align"?: BoxAlignProperty;
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
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
   * The **`box-shadow`** CSS property is used to add shadow effects around an element's frame. You can specify multiple effects separated by commas if you wish to do so. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty;
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty;
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty;
  /**
   * The **`break-before`** CSS property defines how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty;
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty;
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty;
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret—the visible indicator of the point at which the next character typed by the user will be inserted—within an element such as `<input>` or one with the `contenteditable` attribute set. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty;
  /**
   * The **`clear`** CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The `clear` property applies to both floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty;
  /**
   * The `**clip-path**` CSS property creates a clipping region that defines what part of an element should be displayed. More specifically, those portions that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari | Edge | IE  |
   * | :------: | :-----: | :----: | :--: | :-: |
   * |  **55**  | **3.5** |   No   |  No  | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty;
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text content and text decorations. It also sets the `currentcolor` value, which may be used as an indirect value on _other_ properties, and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  |  Yes   | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty;
  /**
   * The **`color-adjust`** CSS property gives the web author control over what if anything the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  "color-adjust"?: ColorAdjustProperty;
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty;
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari |  Edge  | IE  |
   * | :----: | :------: | :----: | :----: | :-: |
   * |  Yes   |  **52**  |  n/a   | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty;
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome |  Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :-------: | :-----: | :----: | :----: |
   * | **50** |  **52**   | **10**  | **12** | **10** |
   * |        | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength>;
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty;
  /**
   * The **`column-rule-style`** CSS property sets the style of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty;
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength>;
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |  Yes   | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty;
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. If the width of the container is narrower than the specified value, the actual column width may be smaller. The container will have as many columns as can fit without any of them having a width less than the `column-width` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength>;
  /** **Initial value**: `none` */
  contain?: ContainProperty;
  /**
   * The **`content`** CSS property is used with the `::before` and `::after` pseudo-elements to generate content in an element. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty;
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge |  IE   |
   * | :----: | :-----: | :----: | :--: | :---: |
   * | **2**  |  **1**  | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty;
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty;
  /**
   * The **`cursor`** CSS property specifies which mouse cursor to display when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty;
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty;
  /**
   * The **`display`** CSS property specifies the type of rendering box used for an element. In HTML, default `display` property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is `inline`, including SVG elements.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty;
  /**
   * The **`empty-cells`** CSS property specifies how the user agent should render borders and backgrounds around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty;
  /**
   * The **`filter`** CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  | IE  |
   * | :------: | :-----: | :---------: | :----: | :-: |
   * |  **53**  | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty;
  /**
   * The **`flex-basis`** CSS property specifies the initial **main size** of a flex item. This property determines the size of the content-box unless specified otherwise using `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength>;
  /**
   * The **`flex-direction`** CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty;
  /**
   * The **`flex-grow`** CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |              IE              |
   * | :------: | :-----: | :-----------: | :----: | :--------------------------: |
   * |  **29**  | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * | 21 _-x-_ |         |               |        |                              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber;
  /**
   * The **`flex-shrink`** CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default size of flex items is larger than the flex container.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **29**  | **20**  | **8** _-x-_ | **12** | **10** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber;
  /**
   * The CSS **`flex-wrap`** property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **29**  | **28**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty;
  /**
   * The **`float`** CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty;
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty;
  /**
   * The **`font-feature-settings`** CSS property gives you control over advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty;
  /**
   * The **`font-kerning`** CSS property controls the usage of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty;
  /**
   * The **`font-language-override`** CSS property controls the usage of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty;
  /**
   * The **`font-optical-sizing`** CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **62**  |  n/a   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  "font-optical-sizing"?: FontOpticalSizingProperty;
  /**
   * The **`font-size`** CSS property specifies the size of the font. Setting this property may change the size of other items, too, since it is used to compute the value of `em`, `ex`, and various other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength>;
  /**
   * The **`font-size-adjust`** CSS property specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters. This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **48** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty;
  /**
   * The **`font-style`** CSS property specifies whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty;
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty;
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty;
  /**
   * The **`font-variant-caps`** CSS property controls the usage of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty;
  /**
   * The **`font-variant-east-asian`** CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty;
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty;
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty;
  /**
   * The **`font-variant-position`** CSS property controls the usage of alternate, smaller glyphs that are positioned as superscript or subscript relative to the baseline of the font (which remains unchanged). These glyphs are likely to be used in `<sub>` and `<sup>` elements.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty;
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **62** | **62**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty;
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty;
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **52**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength>;
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty;
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **52**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength>;
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty;
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty;
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty;
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty;
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty;
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength>;
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength>;
  /** **Initial value**: `none` */
  "hanging-punctuation"?: HangingPunctuationProperty;
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength>;
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     | Edge |      IE      |
   * | :------: | :-----: | :-----------: | :--: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty;
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty;
  /**
   * The **`image-rendering`** CSS property indicates the algorithm to use when scaling images. When applied to an element, the property applies to the element itself, to any images supplied in its other properties, and to its descendant elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **3.6** |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty;
  /** **Initial value**: `1dppx` */
  "image-resolution"?: ImageResolutionProperty;
  /**
   * The `initial-letter` CSS property specifies styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty;
  /** **Initial value**: `auto` */
  "initial-letter-align"?: InitialLetterAlignProperty;
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength>;
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty;
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main axis of their container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **52**  | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty;
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty;
  /**
   * The CSS **`justify-self`** property defines the way of justifying a box inside its container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty;
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength>;
  /**
   * The **`letter-spacing`** CSS property specifies the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength>;
  /**
   * The **`line-break`** CSS property is used to specify how (or if) to break lines when working with punctuation and symbols. This only affects text in Chinese, Japanese, or Korean (CJK).
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge  |   IE    |
   * | :-----: | :-----: | :----: | :----: | :-----: |
   * | **58**  |   No    |  Yes   | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty;
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength>;
  /** **Initial value**: `0` */
  "line-height-step"?: LineHeightStepProperty<TLength>;
  /**
   * The **`list-style-image`** CSS property specifies an image to be used as the list item marker. It is often more convenient to use the shorthand `list-style`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty;
  /**
   * The **`list-style-position`** CSS property specifies the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty;
  /**
   * The **`list-style-type`** CSS property specifies the appearance of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty;
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength>;
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength>;
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength>;
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome            |        Firefox        |            Safari            | Edge | IE  |
   * | :--------------------------: | :-------------------: | :--------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-end)_ |        **41**         | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength>;
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome             |         Firefox         |             Safari             | Edge | IE  |
   * | :----------------------------: | :---------------------: | :----------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-start)_ |         **41**          | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength>;
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength>;
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength>;
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
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
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty;
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty;
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty;
  /**
   * The **`mask-mode`** CSS property determines whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty;
  /**
   * The **`mask-origin`** CSS property determines the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty;
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer defined by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength>;
  /**
   * The **`mask-repeat`** CSS property defines how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty;
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **53**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength>;
  /**
   * The **`mask-type`** CSS property determines whether the mask defined by an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **24** | **35**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty;
  /** **Initial value**: `0` */
  "max-block-size"?: MaxBlockSizeProperty<TLength>;
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength>;
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * |  Yes   | **41**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength>;
  /** **Initial value**: `none` */
  "max-lines"?: MaxLinesProperty;
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength>;
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength>;
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **3**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength>;
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength>;
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength>;
  /**
   * The **`mix-blend-mode`** CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty;
  /**
   * The **`object-fit`** CSS property specifies how the contents of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  |  Yes   | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty;
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength>;
  /** **Initial value**: `auto` */
  "offset-anchor"?: OffsetAnchorProperty<TLength>;
  /**
   * The **`offset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength>;
  /**
   * The **`offset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength>;
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength>;
  /**
   * The **`offset-inline-end`** CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength>;
  /**
   * The **`offset-inline-start`** CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength>;
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty;
  /** **Initial value**: `auto` */
  "offset-position"?: OffsetPositionProperty<TLength>;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty;
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty;
  /**
   * The **`opacity`** CSS property specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber;
  /**
   * The **`order`** CSS property specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are laid out in ascending order according to their `order` values. Elements with the same `order` value are laid out in the order in which they appear in the source code.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber;
  /**
   * The **`orphans`** CSS property specifies the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber;
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty;
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an `outline` and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength>;
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty;
  /**
   * The **`outline-width`** CSS property sets the width (thickness) of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength>;
  /**
   * The **`overflow`** CSS property specifies what to do when an element's content is too large to fit in its block formatting context. It is a shorthand for the `overflow-x` and `overflow-y` properties.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
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
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |      Firefox      |       Safari        |         Edge         |          IE           |
   * | :-----------------: | :---------------: | :-----------------: | :------------------: | :-------------------: |
   * | **1** _(word-wrap)_ |      **49**       | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty;
  /**
   * The **`overflow-x`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty;
  /**
   * The **`overflow-y`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty;
  /**
   * The **`overscroll-behavior`** CSS property is shorthand for the `overscroll-behavior-x` and `overscroll-behavior-y` properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty;
  /**
   * The **`overscroll-behavior-x`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty;
  /**
   * The **`overscroll-behavior-y`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty;
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength>;
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength>;
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength>;
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome             |        Firefox         |            Safari             | Edge | IE  |
   * | :---------------------------: | :--------------------: | :---------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-end)_ |         **41**         | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength>;
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome              |         Firefox          |             Safari              | Edge | IE  |
   * | :-----------------------------: | :----------------------: | :-----------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-start)_ |          **41**          | **3** _(-webkit-padding-start)_ |  No  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength>;
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength>;
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength>;
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength>;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty;
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **60**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty;
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari |  Edge  |   IE   |
   * | :------: | :------: | :----: | :----: | :----: |
   * |  **45**  |  **16**  |  Yes   | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength>;
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength>;
  /**
   * The `**place-content**` CSS shorthand property sets both the `align-content` and `justify-content` properties.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** |   Yes   |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty;
  /**
   * The **`pointer-events`** CSS property specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty;
  /**
   * The **`position`** CSS property specifies how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty;
  /**
   * The **`quotes`** CSS property indicates how user agents should render quotation marks.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty;
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which direction(s).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty;
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength>;
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty;
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  "row-gap"?: RowGapProperty<TLength>;
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty;
  /** **Initial value**: `separate` */
  "ruby-merge"?: RubyMergeProperty;
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty;
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty;
  /**
   * The **`scroll-behavior`** CSS property specifies the scrolling behavior for a scrolling box when scrolling is triggered by one of the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty;
  /**
   * The **`scroll-snap-type`** CSS property defines how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |     Edge     |      IE      |
   * | :----: | :-----: | :---------: | :----------: | :----------: |
   * |   No   | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty;
  /**
   * The **`shape-image-threshold`** CSS property defines the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber;
  /**
   * The **`shape-margin`** CSS property specifies a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength>;
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty;
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength>;
  /**
   * The **`table-layout`** CSS property specifies the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty;
  /**
   * The **`text-align`** CSS property describes how inline content like text is aligned in its parent block element. `text-align` does not control the alignment of block elements, only their inline content.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty;
  /**
   * The **`text-align-last`** CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **47** | **49**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty;
  /**
   * The **`text-combine-upright`** CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |                   IE                   |
   * | :----: | :-----: | :----: | :----: | :------------------------------------: |
   * | **48** | **48**  |  Yes   | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty;
  /**
   * The **`text-decoration-color`** CSS property sets the color of the decorative additions to text that are specified by `text-decoration-line`; these include underlines and overlines, strikethroughs, and wavy lines like those typically used to indicate content is misspelled (for example). The specified color applies to all such decorative lines in the scope of the property's value.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty;
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty;
  /**
   * The **`text-decoration-skip`** CSS property specifies what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * | 57-64  |   No    | **8** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty;
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty;
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are specified; there is no way to define different styles for each of the lines defined by `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty;
  /**
   * The **`text-emphasis-color`** CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty;
  /**
   * The **`text-emphasis-position`** CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString;
  /**
   * The **`text-emphasis-style`** CSS property defines the type of emphasis used. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty;
  /**
   * The **`text-indent`** CSS property specifies the amount of indentation (empty space) that is put before lines of text in a block. By default, this controls the indentation of only the first formatted line of the block, but the `hanging` and `each-line` keywords can be used to change this behavior.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength>;
  /**
   * The **`text-justify`** CSS property defines what type of justification should be applied to text when it is justified (i.e., when `text-align``: justify;` is set on it).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty;
  /**
   * The **`text-orientation`** CSS property defines the orientation of the text characters in a line. This property only has an effect in vertical mode, that is, when `writing-mode` is not `horizontal-tb`. It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **48** | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty;
  /**
   * The **`text-overflow`** CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty;
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **3**  | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty;
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty;
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty;
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty;
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty;
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength>;
  /**
   * The **`touch-action`** CSS property specifies whether, and in what ways, a given region can be manipulated by the user via a touchscreen (for instance, by panning or zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  |   No   | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty;
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate a given element. This is achieved by modifying the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari   |     Edge     |   IE    |
   * | :----: | :-----: | :-------: | :----------: | :-----: |
   * | **36** | **16**  |   **9**   | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty;
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty;
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome |  Firefox  |    Safari     |  Edge  |   IE    |
   * | :----: | :-------: | :-----------: | :----: | :-----: |
   * |  Yes   |  **16**   | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength>;
  /**
   * The **`transform-style`** CSS property determines if the children of an element are positioned in the 3D-space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  | IE  |
   * | :----------: | :------: | :----: | :----: | :-: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty;
  /**
   * The **`transition-delay`** CSS property specifies the amount of time to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString;
  /**
   * The **`transition-duration`** CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString;
  /**
   * The **`transition-property`** CSS property specifies the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty;
  /**
   * The **`transition-timing-function`** CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty;
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength>;
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty;
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox    |    Safari     |     Edge     |   IE   |
   * | :-----: | :----------: | :-----------: | :----------: | :----: |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty;
  /**
   * The **`vertical-align`** CSS property specifies the vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength>;
  /**
   * The **`visibility`** CSS property can show or hide an element without affecting the layout of a document (i.e., space is created for elements regardless of whether they are visible or not). The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty;
  /**
   * The **`white-space`** CSS property determines how whitespace inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty;
  /**
   * The **`widows`** CSS property specifies the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber;
  /**
   * The **`width`** CSS property specifies the width of an element. By default, the property defines the width of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength>;
  /**
   * The **`will-change`** CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty;
  /**
   * The **`word-break`** CSS property specifies whether or not the browser should insert line breaks wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  |  Yes   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty;
  /**
   * The **`word-spacing`** CSS property specifies the spacing behavior between tags and words.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength>;
  /**
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty;
  /**
   * The **`writing-mode`** CSS property defines whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * **Initial value**: `horizontal-tb`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  |     IE      |
   * | :---------: | :-----: | :-----------: | :----: | :---------: |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty;
  /**
   * The **`z-index`** CSS property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty;
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * |  Yes   |   No    | **4**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: ZoomProperty;
}

export interface StandardShorthandPropertiesHyphen<TLength = string | 0> {
  /**
   * The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **37** | **27**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Globals;
  /**
   * The **`animation`** CSS property is a shorthand property for the various animation properties: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty;
  /**
   * The **`background`** CSS property is a short way to declare all background style options at once, including color, image, origin and size, repeat method, and other features.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength>;
  /**
   * The **`border`** CSS property is a shorthand for setting all individual border property values in a single declaration: `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength>;
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength>;
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength>;
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-color`, `border-bottom-style`, and `border-bottom-width`. These properties describe an element's bottom `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength>;
  /**
   * The **`border-color`** CSS property is a shorthand property for setting the colors on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty;
  /**
   * The **`border-image`** CSS property lets you draw an image in place of an element's `border-style`.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty;
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength>;
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength>;
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-color`, `border-left-style`, and `border-left-width`. These properties describe an element's left `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength>;
  /**
   * The **`border-radius`** CSS property lets you round the corners of an element's outer border edge. You can specify a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength>;
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-color`, `border-right-style`, and `border-right-width`. These properties describe an element's right `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength>;
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty;
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-color`, `border-top-style`, and `border-top-width`. These properties describe an element's top `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength>;
  /**
   * The **`border-width`** CSS property is a shorthand property for setting the widths on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength>;
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength>;
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength>;
  /**
   * The **`flex`** CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  |  20-61  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength>;
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` individual properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty;
  /**
   * The **`font`** CSS property is either a shorthand property for setting `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`; or a way to set the element's font to a system font, using specific keywords.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty;
  /**
   * The **`gap`** CSS property specifies the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: GapProperty<TLength>;
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty;
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty;
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty;
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty;
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty;
  /** **Initial value**: `none` */
  "line-clamp"?: LineClampProperty;
  /**
   * The **`list-style`** CSS property is a shorthand for setting the individual values that define how a list is displayed: `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty;
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for setting all individual margins at once: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength>;
  /**
   * The **`mask`** CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   Yes   | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength>;
  "mask-border"?: MaskBorderProperty;
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength>;
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength>;
  /**
   * The **`outline`** CSS property is a shorthand for setting various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength>;
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for setting all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength>;
  /**
   * The **`text-decoration`** CSS property specifies the appearance of decorative lines used on text. It is a shorthand for setting one or more individual text-decoration values in a single declaration, which include `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty;
  /**
   * The **`text-emphasis`** CSS property is a shorthand property for setting `text-emphasis-style` and `text-emphasis-color` in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty;
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
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
  /** **Initial value**: `auto` */
  "-ms-align-self"?: AlignSelfProperty;
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
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  "-webkit-appearance"?: WebkitAppearanceProperty;
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
  /** **Initial value**: `economy` */
  "-webkit-color-adjust"?: ColorAdjustProperty;
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
  /** **Initial value**: `nowrap` */
  "-webkit-flex-wrap"?: FlexWrapProperty;
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
  /** **Initial value**: `auto auto` */
  "-webkit-mask-size"?: WebkitMaskSizeProperty<TLength>;
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
  /** **Initial value**: `0` */
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength>;
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
  "-webkit-mask"?: WebkitMaskProperty<TLength>;
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
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty;
  /**
   * **Initial value**: `ButtonText`
   *
   * @deprecated
   */
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty;
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty;
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty;
  /**
   * **Initial value**: `ThreeDFace`
   *
   * @deprecated
   */
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty;
  /**
   * **Initial value**: `ThreeDHighlight`
   *
   * @deprecated
   */
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty;
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty;
  /**
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty;
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
   * The CSS **`align-content`** property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent?: AlignContentProperty | AlignContentProperty[];
  /**
   * The CSS **`align-items`** property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like `justify-content` but in the perpendicular direction.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **52**  | **20**  | **7** _-x-_ | **12** | **11** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **36**  | **20**  |   No   | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * The **`animation-delay`** CSS property specifies when an animation should start. You can begin the animation at a future point in time, immediately and from its beginning, or immediately and partway through the animation cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **43** | **16**  |  **9**  | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay?: GlobalsString | GlobalsString[];
  /**
   * The **`animation-direction`** CSS property specifies whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  animationDirection?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * The **`animation-duration`** CSS property specifies the length of time that an animation should take to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  animationDuration?: GlobalsString | GlobalsString[];
  /**
   * The **`animation-fill-mode`** CSS property specifies how a CSS animation should apply styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * The **`animation-iteration-count`** CSS property specifies  the number of times an animation cycle should be played before stopping. If multiple values are specified, each time the animation is played the next value in the list is used, cycling back to the first value after the last one is used.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  animationIterationCount?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * The **`animation-name`** CSS property specifies one or more animations that should be applied to an element. Each name indicates an `@keyframes` at-rule that defines the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * The **`animation-play-state`** CSS property specifies whether an **animation is running or paused**. In JavaScript, this can be queried to determine whether or not the animation is currently running. In addition, you can use JavaScript to set its value to pause or resume playback of an animation.
   *
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **43** | **16**  |  Yes   | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * The `**animation-timing-function**` CSS property specifies how a CSS animation should progress over the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * |  n/a   |   No    | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  backdropFilter?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * The **`backface-visibility`** CSS property determines whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * If a `background-image` is specified, the **`background-attachment`** CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  backgroundAttachment?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * The **`background-blend-mode`** CSS property determines how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * The **`background-clip`** CSS property specifies if an element's background, whether a `<color>` or an `<image>`, extends underneath its border.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  backgroundClip?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  backgroundColor?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_, i.e., the origin position of an image specified using the `background-image` property.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * The **`background-position`** CSS property sets the initial position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  backgroundPositionX?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  backgroundPositionY?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * The **`background-repeat`** CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * The **`background-size`** CSS property specifies the size of the element's background image. The image can be left to its natural size, stretched to a new size, or constrained to fit the available space while preserving its intrinsic proportions.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  blockOverflow?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  borderBlockEndColor?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  borderBlockEndStyle?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  borderBlockEndWidth?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  borderBlockStartColor?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  borderBlockStartStyle?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  borderBlockStartWidth?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-bottom` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * The **`border-bottom-left-radius`** CSS property sets the rounding of the bottom-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * The **`border-bottom-right-radius`** CSS property sets the rounding of the bottom-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  borderBottomStyle?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * The **`border-collapse`** CSS property specifies whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  borderCollapse?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * The **`border-image-outset`** CSS property specifies the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  borderImageOutset?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  borderImageRepeat?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions are used to form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * The **`border-image-source`** CSS property specifies the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * The **`border-image-width`** CSS property specifies the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  borderImageWidth?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  borderInlineEndColor?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox            | Safari | Edge | IE  |
   * | :----: | :--------------------------: | :----: | :--: | :-: |
   * |   No   |            **41**            |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  borderInlineEndStyle?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  borderInlineEndWidth?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox             | Safari | Edge | IE  |
   * | :----: | :----------------------------: | :----: | :--: | :-: |
   * |   No   |             **41**             |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  borderInlineStartColor?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  borderInlineStartStyle?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  borderInlineStartWidth?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-left` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  borderLeftStyle?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  borderLeftWidth?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right `border`. Note that in many cases the shorthand CSS properties  `border-color` or `border-right` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  borderRightStyle?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * The **`border-spacing`** CSS property specifies the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-top` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * The **`border-top-left-radius`** CSS property sets the rounding of the top-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * The **`border-top-right-radius`** CSS property sets the rounding of the top-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  borderTopRightRadius?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  borderTopStyle?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  /** **Initial value**: `stretch` */
  boxAlign?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
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
   * The **`box-shadow`** CSS property is used to add shadow effects around an element's frame. You can specify multiple effects separated by commas if you wish to do so. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  boxShadow?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  breakAfter?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * The **`break-before`** CSS property defines how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  breakBefore?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  breakInside?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  captionSide?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret—the visible indicator of the point at which the next character typed by the user will be inserted—within an element such as `<input>` or one with the `contenteditable` attribute set. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  caretColor?: CaretColorProperty | CaretColorProperty[];
  /**
   * The **`clear`** CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The `clear` property applies to both floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * The `**clip-path**` CSS property creates a clipping region that defines what part of an element should be displayed. More specifically, those portions that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari | Edge | IE  |
   * | :------: | :-----: | :----: | :--: | :-: |
   * |  **55**  | **3.5** |   No   |  No  | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  clipPath?: ClipPathProperty | ClipPathProperty[];
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text content and text decorations. It also sets the `currentcolor` value, which may be used as an indirect value on _other_ properties, and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  |  Yes   | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  /**
   * The **`color-adjust`** CSS property gives the web author control over what if anything the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  colorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari |  Edge  | IE  |
   * | :----: | :------: | :----: | :----: | :-: |
   * |  Yes   |  **52**  |  n/a   | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome |  Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :-------: | :-----: | :----: | :----: |
   * | **50** |  **52**   | **10**  | **12** | **10** |
   * |        | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  columnGap?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  columnRuleColor?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * The **`column-rule-style`** CSS property sets the style of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  columnRuleStyle?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  columnRuleWidth?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |  Yes   | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  columnSpan?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. If the width of the container is narrower than the specified value, the actual column width may be smaller. The container will have as many columns as can fit without any of them having a width less than the `column-width` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  columnWidth?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  contain?: ContainProperty | ContainProperty[];
  /**
   * The **`content`** CSS property is used with the `::before` and `::after` pseudo-elements to generate content in an element. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge |  IE   |
   * | :----: | :-----: | :----: | :--: | :---: |
   * | **2**  |  **1**  | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  counterReset?: CounterResetProperty | CounterResetProperty[];
  /**
   * The **`cursor`** CSS property specifies which mouse cursor to display when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * The **`display`** CSS property specifies the type of rendering box used for an element. In HTML, default `display` property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is `inline`, including SVG elements.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * The **`empty-cells`** CSS property specifies how the user agent should render borders and backgrounds around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * The **`filter`** CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  | IE  |
   * | :------: | :-----: | :---------: | :----: | :-: |
   * |  **53**  | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * The **`flex-basis`** CSS property specifies the initial **main size** of a flex item. This property determines the size of the content-box unless specified otherwise using `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  flexBasis?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * The **`flex-direction`** CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * The **`flex-grow`** CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |              IE              |
   * | :------: | :-----: | :-----------: | :----: | :--------------------------: |
   * |  **29**  | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * | 21 _-x-_ |         |               |        |                              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`flex-shrink`** CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default size of flex items is larger than the flex container.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **29**  | **20**  | **8** _-x-_ | **12** | **10** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  flexShrink?: GlobalsNumber | GlobalsNumber[];
  /**
   * The CSS **`flex-wrap`** property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **29**  | **28**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * The **`float`** CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * The **`font-feature-settings`** CSS property gives you control over advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  fontFeatureSettings?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * The **`font-kerning`** CSS property controls the usage of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning?: FontKerningProperty | FontKerningProperty[];
  /**
   * The **`font-language-override`** CSS property controls the usage of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * The **`font-optical-sizing`** CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **62**  |  n/a   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  fontOpticalSizing?: FontOpticalSizingProperty | FontOpticalSizingProperty[];
  /**
   * The **`font-size`** CSS property specifies the size of the font. Setting this property may change the size of other items, too, since it is used to compute the value of `em`, `ex`, and various other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * The **`font-size-adjust`** CSS property specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters. This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **48** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch?: FontStretchProperty | FontStretchProperty[];
  /**
   * The **`font-style`** CSS property specifies whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle?: FontStyleProperty | FontStyleProperty[];
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  fontSynthesis?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant?: FontVariantProperty | FontVariantProperty[];
  /**
   * The **`font-variant-caps`** CSS property controls the usage of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * The **`font-variant-east-asian`** CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  fontVariantEastAsian?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * The **`font-variant-position`** CSS property controls the usage of alternate, smaller glyphs that are positioned as superscript or subscript relative to the baseline of the font (which remains unchanged). These glyphs are likely to be used in `<sub>` and `<sup>` elements.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **62** | **62**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  fontVariationSettings?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight?: FontWeightProperty | FontWeightProperty[];
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **52**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  gridAutoColumns?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **52**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  gridAutoRows?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  gridColumnEnd?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  gridRowEnd?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  gridTemplateAreas?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  gridTemplateColumns?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  gridTemplateRows?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  /** **Initial value**: `none` */
  hangingPunctuation?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     | Edge |      IE      |
   * | :------: | :-----: | :-----------: | :--: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  imageOrientation?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * The **`image-rendering`** CSS property indicates the algorithm to use when scaling images. When applied to an element, the property applies to the element itself, to any images supplied in its other properties, and to its descendant elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **3.6** |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  imageRendering?: ImageRenderingProperty | ImageRenderingProperty[];
  /** **Initial value**: `1dppx` */
  imageResolution?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * The `initial-letter` CSS property specifies styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  initialLetter?: InitialLetterProperty | InitialLetterProperty[];
  /** **Initial value**: `auto` */
  initialLetterAlign?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  inlineSize?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main axis of their container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **52**  | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * The CSS **`justify-self`** property defines the way of justifying a box inside its container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  justifySelf?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * The **`letter-spacing`** CSS property specifies the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * The **`line-break`** CSS property is used to specify how (or if) to break lines when working with punctuation and symbols. This only affects text in Chinese, Japanese, or Korean (CJK).
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge  |   IE    |
   * | :-----: | :-----: | :----: | :----: | :-----: |
   * | **58**  |   No    |  Yes   | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak?: LineBreakProperty | LineBreakProperty[];
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  lineHeight?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  /** **Initial value**: `0` */
  lineHeightStep?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * The **`list-style-image`** CSS property specifies an image to be used as the list item marker. It is often more convenient to use the shorthand `list-style`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  listStyleImage?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * The **`list-style-position`** CSS property specifies the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * The **`list-style-type`** CSS property specifies the appearance of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  marginBlockEnd?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  marginBlockStart?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  marginBottom?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome            |        Firefox        |            Safari            | Edge | IE  |
   * | :--------------------------: | :-------------------: | :--------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-end)_ |        **41**         | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  marginInlineEnd?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome             |         Firefox         |             Safari             | Edge | IE  |
   * | :----------------------------: | :---------------------: | :----------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-start)_ |         **41**          | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  marginInlineStart?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
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
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  maskClip?: MaskClipProperty | MaskClipProperty[];
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  maskComposite?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage?: MaskImageProperty | MaskImageProperty[];
  /**
   * The **`mask-mode`** CSS property determines whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  maskMode?: MaskModeProperty | MaskModeProperty[];
  /**
   * The **`mask-origin`** CSS property determines the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  maskOrigin?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer defined by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  maskPosition?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * The **`mask-repeat`** CSS property defines how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  maskRepeat?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **53**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  maskSize?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * The **`mask-type`** CSS property determines whether the mask defined by an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **24** | **35**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  maskType?: MaskTypeProperty | MaskTypeProperty[];
  /** **Initial value**: `0` */
  maxBlockSize?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * |  Yes   | **41**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  maxInlineSize?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  maxLines?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  maxWidth?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **3**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  minInlineSize?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * The **`mix-blend-mode`** CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  mixBlendMode?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  motionDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  motionPath?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  motionRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`object-fit`** CSS property specifies how the contents of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  |  Yes   | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  objectFit?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  objectPosition?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `auto` */
  offsetAnchor?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * The **`offset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  offsetBlockEnd?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * The **`offset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  offsetBlockStart?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  offsetDistance?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * The **`offset-inline-end`** CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  offsetInlineEnd?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * The **`offset-inline-start`** CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  offsetInlineStart?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  offsetPath?: OffsetPathProperty | OffsetPathProperty[];
  /** **Initial value**: `auto` */
  offsetPosition?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotate?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  offsetRotation?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`opacity`** CSS property specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`order`** CSS property specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are laid out in ascending order according to their `order` values. Elements with the same `order` value are laid out in the order in which they appear in the source code.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`orphans`** CSS property specifies the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an `outline` and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  outlineOffset?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  outlineStyle?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * The **`outline-width`** CSS property sets the width (thickness) of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  outlineWidth?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * The **`overflow`** CSS property specifies what to do when an element's content is too large to fit in its block formatting context. It is a shorthand for the `overflow-x` and `overflow-y` properties.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
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
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |      Firefox      |       Safari        |         Edge         |          IE           |
   * | :-----------------: | :---------------: | :-----------------: | :------------------: | :-------------------: |
   * | **1** _(word-wrap)_ |      **49**       | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  overflowWrap?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * The **`overflow-x`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX?: OverflowXProperty | OverflowXProperty[];
  /**
   * The **`overflow-y`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY?: OverflowYProperty | OverflowYProperty[];
  /**
   * The **`overscroll-behavior`** CSS property is shorthand for the `overscroll-behavior-x` and `overscroll-behavior-y` properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  overscrollBehavior?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * The **`overscroll-behavior-x`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  overscrollBehaviorX?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * The **`overscroll-behavior-y`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  overscrollBehaviorY?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  paddingBlockEnd?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  paddingBlockStart?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  paddingBottom?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome             |        Firefox         |            Safari             | Edge | IE  |
   * | :---------------------------: | :--------------------: | :---------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-end)_ |         **41**         | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  paddingInlineEnd?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome              |         Firefox          |             Safari              | Edge | IE  |
   * | :-----------------------------: | :----------------------: | :-----------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-start)_ |          **41**          | **3** _(-webkit-padding-start)_ |  No  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  paddingInlineStart?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  paddingLeft?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  paddingRight?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  paddingTop?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **60**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  paintOrder?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari |  Edge  |   IE   |
   * | :------: | :------: | :----: | :----: | :----: |
   * |  **45**  |  **16**  |  Yes   | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * The `**place-content**` CSS shorthand property sets both the `align-content` and `justify-content` properties.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** |   Yes   |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * The **`pointer-events`** CSS property specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  pointerEvents?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * The **`position`** CSS property specifies how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * The **`quotes`** CSS property indicates how user agents should render quotation marks.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which direction(s).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  rowGap?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  rubyAlign?: RubyAlignProperty | RubyAlignProperty[];
  /** **Initial value**: `separate` */
  rubyMerge?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  rubyPosition?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * The **`scroll-behavior`** CSS property specifies the scrolling behavior for a scrolling box when scrolling is triggered by one of the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * The **`scroll-snap-type`** CSS property defines how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |     Edge     |      IE      |
   * | :----: | :-----: | :---------: | :----------: | :----------: |
   * |   No   | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  scrollSnapType?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * The **`shape-image-threshold`** CSS property defines the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  shapeImageThreshold?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`shape-margin`** CSS property specifies a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  shapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  shapeOutside?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  tabSize?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * The **`table-layout`** CSS property specifies the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * The **`text-align`** CSS property describes how inline content like text is aligned in its parent block element. `text-align` does not control the alignment of block elements, only their inline content.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign?: TextAlignProperty | TextAlignProperty[];
  /**
   * The **`text-align-last`** CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **47** | **49**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * The **`text-combine-upright`** CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |                   IE                   |
   * | :----: | :-----: | :----: | :----: | :------------------------------------: |
   * | **48** | **48**  |  Yes   | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * The **`text-decoration-color`** CSS property sets the color of the decorative additions to text that are specified by `text-decoration-line`; these include underlines and overlines, strikethroughs, and wavy lines like those typically used to indicate content is misspelled (for example). The specified color applies to all such decorative lines in the scope of the property's value.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  textDecorationLine?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * The **`text-decoration-skip`** CSS property specifies what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * | 57-64  |   No    | **8** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  textDecorationSkip?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  textDecorationSkipInk?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are specified; there is no way to define different styles for each of the lines defined by `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * The **`text-emphasis-color`** CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  textEmphasisColor?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * The **`text-emphasis-position`** CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition?: GlobalsString | GlobalsString[];
  /**
   * The **`text-emphasis-style`** CSS property defines the type of emphasis used. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * The **`text-indent`** CSS property specifies the amount of indentation (empty space) that is put before lines of text in a block. By default, this controls the indentation of only the first formatted line of the block, but the `hanging` and `each-line` keywords can be used to change this behavior.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * The **`text-justify`** CSS property defines what type of justification should be applied to text when it is justified (i.e., when `text-align``: justify;` is set on it).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * The **`text-orientation`** CSS property defines the orientation of the text characters in a line. This property only has an effect in vertical mode, that is, when `writing-mode` is not `horizontal-tb`. It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **48** | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  textOrientation?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * The **`text-overflow`** CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  textOverflow?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **3**  | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  textRendering?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow?: TextShadowProperty | TextShadowProperty[];
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  textSizeAdjust?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform?: TextTransformProperty | TextTransformProperty[];
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * The **`touch-action`** CSS property specifies whether, and in what ways, a given region can be manipulated by the user via a touchscreen (for instance, by panning or zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  |   No   | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction?: TouchActionProperty | TouchActionProperty[];
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate a given element. This is achieved by modifying the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari   |     Edge     |   IE    |
   * | :----: | :-----: | :-------: | :----------: | :-----: |
   * | **36** | **16**  |   **9**   | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  transformBox?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome |  Firefox  |    Safari     |  Edge  |   IE    |
   * | :----: | :-------: | :-----------: | :----: | :-----: |
   * |  Yes   |  **16**   | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  transformOrigin?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * The **`transform-style`** CSS property determines if the children of an element are positioned in the 3D-space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  | IE  |
   * | :----------: | :------: | :----: | :----: | :-: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  transformStyle?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * The **`transition-delay`** CSS property specifies the amount of time to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay?: GlobalsString | GlobalsString[];
  /**
   * The **`transition-duration`** CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration?: GlobalsString | GlobalsString[];
  /**
   * The **`transition-property`** CSS property specifies the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * The **`transition-timing-function`** CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  unicodeBidi?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox    |    Safari     |     Edge     |   IE   |
   * | :-----: | :----------: | :-----------: | :----------: | :----: |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  userSelect?: UserSelectProperty | UserSelectProperty[];
  /**
   * The **`vertical-align`** CSS property specifies the vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  verticalAlign?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * The **`visibility`** CSS property can show or hide an element without affecting the layout of a document (i.e., space is created for elements regardless of whether they are visible or not). The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * The **`white-space`** CSS property determines how whitespace inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  whiteSpace?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * The **`widows`** CSS property specifies the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`width`** CSS property specifies the width of an element. By default, the property defines the width of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * The **`will-change`** CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  willChange?: WillChangeProperty | WillChangeProperty[];
  /**
   * The **`word-break`** CSS property specifies whether or not the browser should insert line breaks wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  |  Yes   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak?: WordBreakProperty | WordBreakProperty[];
  /**
   * The **`word-spacing`** CSS property specifies the spacing behavior between tags and words.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  wordSpacing?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap?: WordWrapProperty | WordWrapProperty[];
  /**
   * The **`writing-mode`** CSS property defines whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * **Initial value**: `horizontal-tb`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  |     IE      |
   * | :---------: | :-----: | :-----------: | :----: | :---------: |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode?: WritingModeProperty | WritingModeProperty[];
  /**
   * The **`z-index`** CSS property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  zIndex?: ZIndexProperty | ZIndexProperty[];
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * |  Yes   |   No    | **4**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesFallback<TLength = string | 0> {
  /**
   * The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **37** | **27**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Globals | Globals[];
  /**
   * The **`animation`** CSS property is a shorthand property for the various animation properties: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * The **`background`** CSS property is a short way to declare all background style options at once, including color, image, origin and size, repeat method, and other features.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * The **`border`** CSS property is a shorthand for setting all individual border property values in a single declaration: `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  borderBlockEnd?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  borderBlockStart?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-color`, `border-bottom-style`, and `border-bottom-width`. These properties describe an element's bottom `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  borderBottom?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * The **`border-color`** CSS property is a shorthand property for setting the colors on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  borderColor?: BorderColorProperty | BorderColorProperty[];
  /**
   * The **`border-image`** CSS property lets you draw an image in place of an element's `border-style`.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage?: BorderImageProperty | BorderImageProperty[];
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  borderInlineEnd?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  borderInlineStart?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-color`, `border-left-style`, and `border-left-width`. These properties describe an element's left `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * The **`border-radius`** CSS property lets you round the corners of an element's outer border edge. You can specify a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  borderRadius?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-color`, `border-right-style`, and `border-right-width`. These properties describe an element's right `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  borderStyle?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-color`, `border-top-style`, and `border-top-width`. These properties describe an element's top `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * The **`border-width`** CSS property is a shorthand property for setting the widths on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  borderWidth?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  columnRule?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * The **`flex`** CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  |  20-61  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` individual properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  flexFlow?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * The **`font`** CSS property is either a shorthand property for setting `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`; or a way to set the element's font to a system font, using specific keywords.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  /**
   * The **`gap`** CSS property specifies the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea?: GridAreaProperty | GridAreaProperty[];
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn?: GridColumnProperty | GridColumnProperty[];
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow?: GridRowProperty | GridRowProperty[];
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  gridTemplate?: GridTemplateProperty | GridTemplateProperty[];
  /** **Initial value**: `none` */
  lineClamp?: LineClampProperty | LineClampProperty[];
  /**
   * The **`list-style`** CSS property is a shorthand for setting the individual values that define how a list is displayed: `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle?: ListStyleProperty | ListStyleProperty[];
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for setting all individual margins at once: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * The **`mask`** CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   Yes   | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  maskBorder?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * The **`outline`** CSS property is a shorthand for setting various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for setting all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * The **`text-decoration`** CSS property specifies the appearance of decorative lines used on text. It is a shorthand for setting one or more individual text-decoration values in a single declaration, which include `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * The **`text-emphasis`** CSS property is a shorthand property for setting `text-emphasis-style` and `text-emphasis-color` in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
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
  /** **Initial value**: `auto` */
  msAlignSelf?: AlignSelfProperty | AlignSelfProperty[];
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
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  WebkitAppearance?: WebkitAppearanceProperty | WebkitAppearanceProperty[];
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
  /** **Initial value**: `economy` */
  WebkitColorAdjust?: ColorAdjustProperty | ColorAdjustProperty[];
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
  /** **Initial value**: `nowrap` */
  WebkitFlexWrap?: FlexWrapProperty | FlexWrapProperty[];
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
  /** **Initial value**: `auto auto` */
  WebkitMaskSize?: WebkitMaskSizeProperty<TLength> | WebkitMaskSizeProperty<TLength>[];
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
  /** **Initial value**: `0` */
  WebkitShapeMargin?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
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
  WebkitMask?: WebkitMaskProperty<TLength> | WebkitMaskProperty<TLength>[];
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
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  msScrollbar3dlightColor?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  /**
   * **Initial value**: `ButtonText`
   *
   * @deprecated
   */
  msScrollbarArrowColor?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  msScrollbarBaseColor?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  msScrollbarDarkshadowColor?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  /**
   * **Initial value**: `ThreeDFace`
   *
   * @deprecated
   */
  msScrollbarFaceColor?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  /**
   * **Initial value**: `ThreeDHighlight`
   *
   * @deprecated
   */
  msScrollbarHighlightColor?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  msScrollbarShadowColor?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  /**
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  msScrollbarTrackColor?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
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
   * The CSS **`align-content`** property defines how the browser distributes space between and around content items along the cross-axis of their container, which is serving as a flexbox container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-content
   */
  "align-content"?: AlignContentProperty | AlignContentProperty[];
  /**
   * The CSS **`align-items`** property defines how the browser distributes space between and around flex items along the cross-axis of their container. This means it works like `justify-content` but in the perpendicular direction.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **52**  | **20**  | **7** _-x-_ | **12** | **11** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  "align-items"?: AlignItemsProperty | AlignItemsProperty[];
  /**
   * The **`align-self`** CSS property aligns flex items of the current flex line overriding the `align-items` value. If any of the item's cross-axis margin is set to `auto`, then `align-self` is ignored.
   *
   * **Initial value**: `auto`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **36**  | **20**  |   No   | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :------: | :----: | :----------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _-x-_ |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/align-self
   */
  "align-self"?: AlignSelfProperty | AlignSelfProperty[];
  /**
   * The **`animation-delay`** CSS property specifies when an animation should start. You can begin the animation at a future point in time, immediately and from its beginning, or immediately and partway through the animation cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **43** | **16**  |  **9**  | **12** | **10** |
   * |        | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  "animation-delay"?: GlobalsString | GlobalsString[];
  /**
   * The **`animation-direction`** CSS property specifies whether an animation should play forwards, backwards, or alternating back and forth.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  "animation-direction"?: AnimationDirectionProperty | AnimationDirectionProperty[];
  /**
   * The **`animation-duration`** CSS property specifies the length of time that an animation should take to complete one cycle.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **43**  | **16**  | **4** _-x-_ | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  "animation-duration"?: GlobalsString | GlobalsString[];
  /**
   * The **`animation-fill-mode`** CSS property specifies how a CSS animation should apply styles to its target before and after its execution.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  "animation-fill-mode"?: AnimationFillModeProperty | AnimationFillModeProperty[];
  /**
   * The **`animation-iteration-count`** CSS property specifies  the number of times an animation cycle should be played before stopping. If multiple values are specified, each time the animation is played the next value in the list is used, cycling back to the first value after the last one is used.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  "animation-iteration-count"?: AnimationIterationCountProperty | AnimationIterationCountProperty[];
  /**
   * The **`animation-name`** CSS property specifies one or more animations that should be applied to an element. Each name indicates an `@keyframes` at-rule that defines the property values for the animation sequence.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  "animation-name"?: AnimationNameProperty | AnimationNameProperty[];
  /**
   * The **`animation-play-state`** CSS property specifies whether an **animation is running or paused**. In JavaScript, this can be queried to determine whether or not the animation is currently running. In addition, you can use JavaScript to set its value to pause or resume playback of an animation.
   *
   * **Initial value**: `running`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **43** | **16**  |  Yes   | **12** | **10** |
   * |        | 5 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  "animation-play-state"?: AnimationPlayStateProperty | AnimationPlayStateProperty[];
  /**
   * The `**animation-timing-function**` CSS property specifies how a CSS animation should progress over the duration of each cycle.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  "animation-timing-function"?: AnimationTimingFunctionProperty | AnimationTimingFunctionProperty[];
  /**
   * **Initial value**: `auto`
   *
   * |   Chrome    |   Firefox   |   Safari    |     Edge     | IE  |
   * | :---------: | :---------: | :---------: | :----------: | :-: |
   * | **1** _-x-_ | **1** _-x-_ | **3** _-x-_ | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/appearance
   */
  appearance?: AppearanceProperty | AppearanceProperty[];
  /**
   * The **`backdrop-filter`** CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * |  n/a   |   No    | **9** _-x-_ | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backdrop-filter
   */
  "backdrop-filter"?: BackdropFilterProperty | BackdropFilterProperty[];
  /**
   * The **`backface-visibility`** CSS property determines whether the back face of an element is visible when turned towards the user.
   *
   * **Initial value**: `visible`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  "backface-visibility"?: BackfaceVisibilityProperty | BackfaceVisibilityProperty[];
  /**
   * If a `background-image` is specified, the **`background-attachment`** CSS property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-attachment
   */
  "background-attachment"?: BackgroundAttachmentProperty | BackgroundAttachmentProperty[];
  /**
   * The **`background-blend-mode`** CSS property determines how an element's background images should blend with each other and with the element's background color.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **35** | **30**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  "background-blend-mode"?: BackgroundBlendModeProperty | BackgroundBlendModeProperty[];
  /**
   * The **`background-clip`** CSS property specifies if an element's background, whether a `<color>` or an `<image>`, extends underneath its border.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-clip
   */
  "background-clip"?: BackgroundClipProperty | BackgroundClipProperty[];
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  "background-color"?: BackgroundColorProperty | BackgroundColorProperty[];
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  "background-image"?: BackgroundImageProperty | BackgroundImageProperty[];
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_, i.e., the origin position of an image specified using the `background-image` property.
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  "background-origin"?: BackgroundOriginProperty | BackgroundOriginProperty[];
  /**
   * The **`background-position`** CSS property sets the initial position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  "background-position"?: BackgroundPositionProperty<TLength> | BackgroundPositionProperty<TLength>[];
  /**
   * The **`background-position-x`** CSS property sets the initial horizontal position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `left`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-x
   */
  "background-position-x"?: BackgroundPositionXProperty<TLength> | BackgroundPositionXProperty<TLength>[];
  /**
   * The **`background-position-y`** CSS property sets the initial vertical position, relative to the background position layer defined by `background-origin`, for each defined background image.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   | **49**  |  Yes   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position-y
   */
  "background-position-y"?: BackgroundPositionYProperty<TLength> | BackgroundPositionYProperty<TLength>[];
  /**
   * The **`background-repeat`** CSS property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  "background-repeat"?: BackgroundRepeatProperty | BackgroundRepeatProperty[];
  /**
   * The **`background-size`** CSS property specifies the size of the element's background image. The image can be left to its natural size, stretched to a new size, or constrained to fit the available space while preserving its intrinsic proportions.
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  | **4.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  "background-size"?: BackgroundSizeProperty<TLength> | BackgroundSizeProperty<TLength>[];
  /** **Initial value**: `clip` */
  "block-overflow"?: BlockOverflowProperty | BlockOverflowProperty[];
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  "block-size"?: BlockSizeProperty<TLength> | BlockSizeProperty<TLength>[];
  /**
   * The **`border-block-end-color`** CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-color
   */
  "border-block-end-color"?: BorderBlockEndColorProperty | BorderBlockEndColorProperty[];
  /**
   * The **`border-block-end-style`** CSS property defines the style of the logical block end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-style
   */
  "border-block-end-style"?: BorderBlockEndStyleProperty | BorderBlockEndStyleProperty[];
  /**
   * The **`border-block-end-width`** CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end-width
   */
  "border-block-end-width"?: BorderBlockEndWidthProperty<TLength> | BorderBlockEndWidthProperty<TLength>[];
  /**
   * The **`border-block-start-color`** CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-color
   */
  "border-block-start-color"?: BorderBlockStartColorProperty | BorderBlockStartColorProperty[];
  /**
   * The **`border-block-start-style`** CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-style
   */
  "border-block-start-style"?: BorderBlockStartStyleProperty | BorderBlockStartStyleProperty[];
  /**
   * The **`border-block-start-width`** CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start-width
   */
  "border-block-start-width"?: BorderBlockStartWidthProperty<TLength> | BorderBlockStartWidthProperty<TLength>[];
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-bottom` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  "border-bottom-color"?: BorderBottomColorProperty | BorderBottomColorProperty[];
  /**
   * The **`border-bottom-left-radius`** CSS property sets the rounding of the bottom-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius
   */
  "border-bottom-left-radius"?: BorderBottomLeftRadiusProperty<TLength> | BorderBottomLeftRadiusProperty<TLength>[];
  /**
   * The **`border-bottom-right-radius`** CSS property sets the rounding of the bottom-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius
   */
  "border-bottom-right-radius"?: BorderBottomRightRadiusProperty<TLength> | BorderBottomRightRadiusProperty<TLength>[];
  /**
   * The **`border-bottom-style`** CSS property sets the line style of an element's bottom `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-style
   */
  "border-bottom-style"?: BorderBottomStyleProperty | BorderBottomStyleProperty[];
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  "border-bottom-width"?: BorderBottomWidthProperty<TLength> | BorderBottomWidthProperty<TLength>[];
  /**
   * The **`border-collapse`** CSS property specifies whether cells inside a `<table>` have shared or separate borders.
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-collapse
   */
  "border-collapse"?: BorderCollapseProperty | BorderCollapseProperty[];
  /**
   * The **`border-image-outset`** CSS property specifies the distance by which an element's border image is set out from its border box.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-outset
   */
  "border-image-outset"?: BorderImageOutsetProperty<TLength> | BorderImageOutsetProperty<TLength>[];
  /**
   * The **`border-image-repeat`** CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-repeat
   */
  "border-image-repeat"?: BorderImageRepeatProperty | BorderImageRepeatProperty[];
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions are used to form the components of an element's border image.
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  "border-image-slice"?: BorderImageSliceProperty | BorderImageSliceProperty[];
  /**
   * The **`border-image-source`** CSS property specifies the source image used to create an element's border image.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  "border-image-source"?: BorderImageSourceProperty | BorderImageSourceProperty[];
  /**
   * The **`border-image-width`** CSS property specifies the width of an element's border image.
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  "border-image-width"?: BorderImageWidthProperty<TLength> | BorderImageWidthProperty<TLength>[];
  /**
   * The **`border-inline-end-color`** CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-color
   */
  "border-inline-end-color"?: BorderInlineEndColorProperty | BorderInlineEndColorProperty[];
  /**
   * The **`border-inline-end-style`** CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox            | Safari | Edge | IE  |
   * | :----: | :--------------------------: | :----: | :--: | :-: |
   * |   No   |            **41**            |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-end-style)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-style
   */
  "border-inline-end-style"?: BorderInlineEndStyleProperty | BorderInlineEndStyleProperty[];
  /**
   * The **`border-inline-end-width`** CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end-width
   */
  "border-inline-end-width"?: BorderInlineEndWidthProperty<TLength> | BorderInlineEndWidthProperty<TLength>[];
  /**
   * The **`border-inline-start-color`** CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-color`, `border-right-color`, `border-bottom-color`, or `border-left-color` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox             | Safari | Edge | IE  |
   * | :----: | :----------------------------: | :----: | :--: | :-: |
   * |   No   |             **41**             |   No   | n/a  | No  |
   * |        | 38 _(-moz-border-start-color)_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-color
   */
  "border-inline-start-color"?: BorderInlineStartColorProperty | BorderInlineStartColorProperty[];
  /**
   * The **`border-inline-start-style`** CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-style`, `border-right-style`, `border-bottom-style`, or `border-left-style` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-style
   */
  "border-inline-start-style"?: BorderInlineStartStyleProperty | BorderInlineStartStyleProperty[];
  /**
   * The **`border-inline-start-width`** CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the `border-top-width`, `border-right-width`, `border-bottom-width`, or `border-left-width` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start-width
   */
  "border-inline-start-width"?: BorderInlineStartWidthProperty<TLength> | BorderInlineStartWidthProperty<TLength>[];
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-left` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  "border-left-color"?: BorderLeftColorProperty | BorderLeftColorProperty[];
  /**
   * The **`border-left-style`** CSS property sets the line style of an element's left `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-style
   */
  "border-left-style"?: BorderLeftStyleProperty | BorderLeftStyleProperty[];
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  "border-left-width"?: BorderLeftWidthProperty<TLength> | BorderLeftWidthProperty<TLength>[];
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right `border`. Note that in many cases the shorthand CSS properties  `border-color` or `border-right` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  "border-right-color"?: BorderRightColorProperty | BorderRightColorProperty[];
  /**
   * The **`border-right-style`** CSS property sets the line style of an element's right `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-style
   */
  "border-right-style"?: BorderRightStyleProperty | BorderRightStyleProperty[];
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  "border-right-width"?: BorderRightWidthProperty<TLength> | BorderRightWidthProperty<TLength>[];
  /**
   * The **`border-spacing`** CSS property specifies the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  "border-spacing"?: BorderSpacingProperty<TLength> | BorderSpacingProperty<TLength>[];
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top `border`. Note that in many cases the shorthand CSS properties `border-color` or `border-top` are more convenient and preferable.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  "border-top-color"?: BorderTopColorProperty | BorderTopColorProperty[];
  /**
   * The **`border-top-left-radius`** CSS property sets the rounding of the top-left corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius
   */
  "border-top-left-radius"?: BorderTopLeftRadiusProperty<TLength> | BorderTopLeftRadiusProperty<TLength>[];
  /**
   * The **`border-top-right-radius`** CSS property sets the rounding of the top-right corner of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius
   */
  "border-top-right-radius"?: BorderTopRightRadiusProperty<TLength> | BorderTopRightRadiusProperty<TLength>[];
  /**
   * The **`border-top-style`** CSS property sets the line style of an element's top `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-style
   */
  "border-top-style"?: BorderTopStyleProperty | BorderTopStyleProperty[];
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of a box.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  "border-top-width"?: BorderTopWidthProperty<TLength> | BorderTopWidthProperty<TLength>[];
  /**
   * The **`bottom`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/bottom
   */
  bottom?: BottomProperty<TLength> | BottomProperty<TLength>[];
  /** **Initial value**: `stretch` */
  "box-align"?: BoxAlignProperty | BoxAlignProperty[];
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   *
   * **Initial value**: `slice`
   *
   * |    Chrome    | Firefox | Safari  | Edge | IE  |
   * | :----------: | :-----: | :-----: | :--: | :-: |
   * | **22** _-x-_ | **32**  | **6.1** |  No  | No  |
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
   * The **`box-shadow`** CSS property is used to add shadow effects around an element's frame. You can specify multiple effects separated by commas if you wish to do so. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  "box-shadow"?: BoxShadowProperty | BoxShadowProperty[];
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ |         |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  "box-sizing"?: BoxSizingProperty | BoxSizingProperty[];
  /**
   * The **`break-after`** CSS property defines how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-after
   */
  "break-after"?: BreakAfterProperty | BreakAfterProperty[];
  /**
   * The **`break-before`** CSS property defines how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-before
   */
  "break-before"?: BreakBeforeProperty | BreakBeforeProperty[];
  /**
   * The **`break-inside`** CSS property defines how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/break-inside
   */
  "break-inside"?: BreakInsideProperty | BreakInsideProperty[];
  /**
   * The **`caption-side`** CSS property puts the content of a table's `<caption>` on the specified side. The values are relative to the `writing-mode` of the table.
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caption-side
   */
  "caption-side"?: CaptionSideProperty | CaptionSideProperty[];
  /**
   * The **`caret-color`** CSS property sets the color of the insertion caret—the visible indicator of the point at which the next character typed by the user will be inserted—within an element such as `<input>` or one with the `contenteditable` attribute set. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **57** | **53**  | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/caret-color
   */
  "caret-color"?: CaretColorProperty | CaretColorProperty[];
  /**
   * The **`clear`** CSS property specifies whether an element can be next to floating elements that precede it or must be moved down (cleared) below them. The `clear` property applies to both floating and non-floating elements.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear?: ClearProperty | ClearProperty[];
  /**
   * The `**clip-path**` CSS property creates a clipping region that defines what part of an element should be displayed. More specifically, those portions that are inside the region are shown, while those outside are hidden.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari | Edge | IE  |
   * | :------: | :-----: | :----: | :--: | :-: |
   * |  **55**  | **3.5** |   No   |  No  | No  |
   * | 24 _-x-_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/clip-path
   */
  "clip-path"?: ClipPathProperty | ClipPathProperty[];
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text content and text decorations. It also sets the `currentcolor` value, which may be used as an indirect value on _other_ properties, and is the default for other color properties, such as `border-color`.
   *
   * **Initial value**: Varies from one browser to another
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  |  Yes   | **12** | Yes |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color?: ColorProperty | ColorProperty[];
  /**
   * The **`color-adjust`** CSS property gives the web author control over what if anything the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
   *
   * **Initial value**: `economy`
   *
   * |    Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :----------: | :-----: | :---------: | :--: | :-: |
   * | **49** _-x-_ | **48**  | **6** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/color-adjust
   */
  "color-adjust"?: ColorAdjustProperty | ColorAdjustProperty[];
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  "column-count"?: ColumnCountProperty | ColumnCountProperty[];
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox  | Safari |  Edge  | IE  |
   * | :----: | :------: | :----: | :----: | :-: |
   * |  Yes   |  **52**  |  n/a   | **12** | n/a |
   * |        | 13 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  "column-fill"?: ColumnFillProperty | ColumnFillProperty[];
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **63**  |   No   | n/a  | No  |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * ---
   *
   * _Supported in Multi-column Layout_
   *
   * | Chrome |  Firefox  | Safari  |  Edge  |   IE   |
   * | :----: | :-------: | :-----: | :----: | :----: |
   * | **50** |  **52**   | **10**  | **12** | **10** |
   * |        | 1.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  "column-gap"?: ColumnGapProperty<TLength> | ColumnGapProperty<TLength>[];
  /**
   * The **`column-rule-color`** CSS property sets the color of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** | **10** |
   * |        | 3.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-color
   */
  "column-rule-color"?: ColumnRuleColorProperty | ColumnRuleColorProperty[];
  /**
   * The **`column-rule-style`** CSS property sets the style of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-style
   */
  "column-rule-style"?: ColumnRuleStyleProperty | ColumnRuleStyleProperty[];
  /**
   * The **`column-rule-width`** CSS property sets the width of the rule (line) drawn between columns in a multi-column layout.
   *
   * **Initial value**: `medium`
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule-width
   */
  "column-rule-width"?: ColumnRuleWidthProperty<TLength> | ColumnRuleWidthProperty<TLength>[];
  /**
   * The **`column-span`** CSS property makes it possible for an element to span across all columns when its value is set to `all`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** |   No    |  Yes   | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-span
   */
  "column-span"?: ColumnSpanProperty | ColumnSpanProperty[];
  /**
   * The **`column-width`** CSS property specifies the ideal column width in a multi-column layout. If the width of the container is narrower than the specified value, the actual column width may be smaller. The container will have as many columns as can fit without any of them having a width less than the `column-width` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome |  Firefox  |   Safari    |  Edge  |   IE   |
   * | :----: | :-------: | :---------: | :----: | :----: |
   * | **50** |  **50**   | **3** _-x-_ | **12** | **10** |
   * |        | 1.5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-width
   */
  "column-width"?: ColumnWidthProperty<TLength> | ColumnWidthProperty<TLength>[];
  /** **Initial value**: `none` */
  contain?: ContainProperty | ContainProperty[];
  /**
   * The **`content`** CSS property is used with the `::before` and `::after` pseudo-elements to generate content in an element. Objects inserted using the `content` property are _anonymous replaced elements._
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/content
   */
  content?: ContentProperty | ContentProperty[];
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge |  IE   |
   * | :----: | :-----: | :----: | :--: | :---: |
   * | **2**  |  **1**  | **3**  | n/a  | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  "counter-increment"?: CounterIncrementProperty | CounterIncrementProperty[];
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **3.1** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  "counter-reset"?: CounterResetProperty | CounterResetProperty[];
  /**
   * The **`cursor`** CSS property specifies which mouse cursor to display when the mouse pointer is over an element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/cursor
   */
  cursor?: CursorProperty | CursorProperty[];
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction?: DirectionProperty | DirectionProperty[];
  /**
   * The **`display`** CSS property specifies the type of rendering box used for an element. In HTML, default `display` property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is `inline`, including SVG elements.
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  display?: DisplayProperty | DisplayProperty[];
  /**
   * The **`empty-cells`** CSS property specifies how the user agent should render borders and backgrounds around `<table>` cells that have no visible content.
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  "empty-cells"?: EmptyCellsProperty | EmptyCellsProperty[];
  /**
   * The **`filter`** CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  | IE  |
   * | :------: | :-----: | :---------: | :----: | :-: |
   * |  **53**  | **35**  | **6** _-x-_ | **12** | No  |
   * | 18 _-x-_ |         |             |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter?: FilterProperty | FilterProperty[];
  /**
   * The **`flex-basis`** CSS property specifies the initial **main size** of a flex item. This property determines the size of the content-box unless specified otherwise using `box-sizing`.
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-basis
   */
  "flex-basis"?: FlexBasisProperty<TLength> | FlexBasisProperty<TLength>[];
  /**
   * The **`flex-direction`** CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  "flex-direction"?: FlexDirectionProperty | FlexDirectionProperty[];
  /**
   * The **`flex-grow`** CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox |    Safari     |  Edge  |              IE              |
   * | :------: | :-----: | :-----------: | :----: | :--------------------------: |
   * |  **29**  | **20**  | **6.1** _-x-_ | **12** | **11** _(-ms-flex-positive)_ |
   * | 21 _-x-_ |         |               |        |                              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  "flex-grow"?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`flex-shrink`** CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the `flex-shrink` number, when the default size of flex items is larger than the flex container.
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :------: | :-----: | :---------: | :----: | :----: |
   * |  **29**  | **20**  | **8** _-x-_ | **12** | **10** |
   * | 21 _-x-_ |         |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-shrink
   */
  "flex-shrink"?: GlobalsNumber | GlobalsNumber[];
  /**
   * The CSS **`flex-wrap`** property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines. If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **29**  | **28**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-wrap
   */
  "flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
  /**
   * The **`float`** CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float?: FloatProperty | FloatProperty[];
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  "font-family"?: FontFamilyProperty | FontFamilyProperty[];
  /**
   * The **`font-feature-settings`** CSS property gives you control over advanced typographic features in OpenType fonts.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-feature-settings
   */
  "font-feature-settings"?: FontFeatureSettingsProperty | FontFeatureSettingsProperty[];
  /**
   * The **`font-kerning`** CSS property controls the usage of the kerning information stored in a font.
   *
   * **Initial value**: `auto`
   *
   * |    Chrome    | Firefox | Safari | Edge | IE  |
   * | :----------: | :-----: | :----: | :--: | :-: |
   * | **32** _-x-_ | **32**  | **7**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  "font-kerning"?: FontKerningProperty | FontKerningProperty[];
  /**
   * The **`font-language-override`** CSS property controls the usage of language-specific glyphs in a typeface.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   * |        | 4 _-x-_ |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  "font-language-override"?: FontLanguageOverrideProperty | FontLanguageOverrideProperty[];
  /**
   * The **`font-optical-sizing`** CSS property allows developers to control whether browsers render text with slightly differing visual representations to optimize viewing at different sizes, or not. This only works for fonts that have an optical size variation axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **62**  |  n/a   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-optical-sizing
   */
  "font-optical-sizing"?: FontOpticalSizingProperty | FontOpticalSizingProperty[];
  /**
   * The **`font-size`** CSS property specifies the size of the font. Setting this property may change the size of other items, too, since it is used to compute the value of `em`, `ex`, and various other relative `<length>` units.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  "font-size"?: FontSizeProperty<TLength> | FontSizeProperty<TLength>[];
  /**
   * The **`font-size-adjust`** CSS property specifies that the font size should be chosen based on the height of lowercase letters rather than the height of capital letters. This is useful since the legibility of fonts, especially at small sizes, is determined more by the size of lowercase letters than by the size of capital letters.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   |  **1**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  "font-size-adjust"?: FontSizeAdjustProperty | FontSizeAdjustProperty[];
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **48** |  **9**  | **11** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  "font-stretch"?: FontStretchProperty | FontStretchProperty[];
  /**
   * The **`font-style`** CSS property specifies whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  "font-style"?: FontStyleProperty | FontStyleProperty[];
  /**
   * The **`font-synthesis`** CSS property controls which missing typefaces, bold or italic, may be synthesized by the browser.
   *
   * **Initial value**: `weight style`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  | **9**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-synthesis
   */
  "font-synthesis"?: FontSynthesisProperty | FontSynthesisProperty[];
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  "font-variant"?: FontVariantProperty | FontVariantProperty[];
  /**
   * The **`font-variant-caps`** CSS property controls the usage of alternate glyphs for capital letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **52** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  "font-variant-caps"?: FontVariantCapsProperty | FontVariantCapsProperty[];
  /**
   * The **`font-variant-east-asian`** CSS property controls the usage of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  "font-variant-east-asian"?: FontVariantEastAsianProperty | FontVariantEastAsianProperty[];
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  | Edge | IE  |
   * | :------: | :-----: | :-----: | :--: | :-: |
   * |  **34**  | **34**  | **9.1** |  No  | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  "font-variant-ligatures"?: FontVariantLigaturesProperty | FontVariantLigaturesProperty[];
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **52** | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  "font-variant-numeric"?: FontVariantNumericProperty | FontVariantNumericProperty[];
  /**
   * The **`font-variant-position`** CSS property controls the usage of alternate, smaller glyphs that are positioned as superscript or subscript relative to the baseline of the font (which remains unchanged). These glyphs are likely to be used in `<sub>` and `<sup>` elements.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **34**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  "font-variant-position"?: FontVariantPositionProperty | FontVariantPositionProperty[];
  /**
   * The **`font-variation-settings`** CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **62** | **62**  | **11** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variation-settings
   */
  "font-variation-settings"?: FontVariationSettingsProperty | FontVariationSettingsProperty[];
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **2**  |  **1**  | **1.3** | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  "font-weight"?: FontWeightProperty | FontWeightProperty[];
  /**
   * The **`grid-auto-columns`** CSS property specifies the size of an implicitly-created grid column track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |          Edge           |             IE              |
   * | :----: | :-----: | :------: | :---------------------: | :-------------------------: |
   * | **57** | **52**  | **10.1** |         **16**          | **10** _(-ms-grid-columns)_ |
   * |        |         |          | 12 _(-ms-grid-columns)_ |                             |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-columns
   */
  "grid-auto-columns"?: GridAutoColumnsProperty<TLength> | GridAutoColumnsProperty<TLength>[];
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  "grid-auto-flow"?: GridAutoFlowProperty | GridAutoFlowProperty[];
  /**
   * The **`grid-auto-rows`** CSS property specifies the size of an implicitly-created grid row track.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |         Edge         |            IE            |
   * | :----: | :-----: | :------: | :------------------: | :----------------------: |
   * | **57** | **52**  | **10.1** |        **16**        | **10** _(-ms-grid-rows)_ |
   * |        |         |          | 12 _(-ms-grid-rows)_ |                          |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-rows
   */
  "grid-auto-rows"?: GridAutoRowsProperty<TLength> | GridAutoRowsProperty<TLength>[];
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  "grid-column-end"?: GridColumnEndProperty | GridColumnEndProperty[];
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  "grid-column-start"?: GridColumnStartProperty | GridColumnStartProperty[];
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  "grid-row-end"?: GridRowEndProperty | GridRowEndProperty[];
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  "grid-row-start"?: GridRowStartProperty | GridRowStartProperty[];
  /**
   * The **`grid-template-areas`** CSS property specifies named grid areas.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-areas
   */
  "grid-template-areas"?: GridTemplateAreasProperty | GridTemplateAreasProperty[];
  /**
   * The **`grid-template-columns`** CSS property defines the line names and track sizing functions of the grid columns.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-columns
   */
  "grid-template-columns"?: GridTemplateColumnsProperty<TLength> | GridTemplateColumnsProperty<TLength>[];
  /**
   * The **`grid-template-rows`** CSS property defines the line names and track sizing functions of the grid rows.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template-rows
   */
  "grid-template-rows"?: GridTemplateRowsProperty<TLength> | GridTemplateRowsProperty<TLength>[];
  /** **Initial value**: `none` */
  "hanging-punctuation"?: HangingPunctuationProperty | HangingPunctuationProperty[];
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height?: HeightProperty<TLength> | HeightProperty<TLength>[];
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |    Safari     | Edge |      IE      |
   * | :------: | :-----: | :-----------: | :--: | :----------: |
   * |  **55**  | **43**  | **5.1** _-x-_ | n/a  | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ |               |      |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens?: HyphensProperty | HyphensProperty[];
  /**
   * The **`image-orientation`** CSS property specifies a layout-independent correction to the orientation of an image. It should _not_ be used for any other orientation adjustments; instead, the `transform` property should be used with the `rotate` `<transform-function>`.
   *
   * **Initial value**: `0deg`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **26**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-orientation
   */
  "image-orientation"?: ImageOrientationProperty | ImageOrientationProperty[];
  /**
   * The **`image-rendering`** CSS property indicates the algorithm to use when scaling images. When applied to an element, the property applies to the element itself, to any images supplied in its other properties, and to its descendant elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **3.6** |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/image-rendering
   */
  "image-rendering"?: ImageRenderingProperty | ImageRenderingProperty[];
  /** **Initial value**: `1dppx` */
  "image-resolution"?: ImageResolutionProperty | ImageResolutionProperty[];
  /**
   * The `initial-letter` CSS property specifies styling for dropped, raised, and sunken initial letters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **9**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/initial-letter
   */
  "initial-letter"?: InitialLetterProperty | InitialLetterProperty[];
  /** **Initial value**: `auto` */
  "initial-letter-align"?: InitialLetterAlignProperty | InitialLetterAlignProperty[];
  /**
   * The **`inline-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/inline-size
   */
  "inline-size"?: InlineSizeProperty<TLength> | InlineSizeProperty<TLength>[];
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  isolation?: IsolationProperty | IsolationProperty[];
  /**
   * The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main axis of their container.
   *
   * **Initial value**: `normal`
   *
   * ---
   *
   * _Supported in Flex Layout_
   *
   * |  Chrome  | Firefox | Safari |  Edge  |   IE   |
   * | :------: | :-----: | :----: | :----: | :----: |
   * |  **52**  | **20**  | **9**  | **12** | **11** |
   * | 21 _-x-_ |         |        |        |        |
   *
   * ---
   *
   * _Supported in Grid Layout_
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | n/a |
   *
   * ---
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  "justify-content"?: JustifyContentProperty | JustifyContentProperty[];
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  "justify-items"?: JustifyItemsProperty | JustifyItemsProperty[];
  /**
   * The CSS **`justify-self`** property defines the way of justifying a box inside its container along the appropriate axis.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |  n/a   | **45**  |  n/a   | **16** | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  "justify-self"?: JustifySelfProperty | JustifySelfProperty[];
  /**
   * The **`left`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/left
   */
  left?: LeftProperty<TLength> | LeftProperty<TLength>[];
  /**
   * The **`letter-spacing`** CSS property specifies the spacing behavior between text characters.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  "letter-spacing"?: LetterSpacingProperty<TLength> | LetterSpacingProperty<TLength>[];
  /**
   * The **`line-break`** CSS property is used to specify how (or if) to break lines when working with punctuation and symbols. This only affects text in Chinese, Japanese, or Korean (CJK).
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge  |   IE    |
   * | :-----: | :-----: | :----: | :----: | :-----: |
   * | **58**  |   No    |  Yes   | **14** | **5.5** |
   * | 1 _-x-_ |         |        |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  "line-break"?: LineBreakProperty | LineBreakProperty[];
  /**
   * The **`line-height`** CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/line-height
   */
  "line-height"?: LineHeightProperty<TLength> | LineHeightProperty<TLength>[];
  /** **Initial value**: `0` */
  "line-height-step"?: LineHeightStepProperty<TLength> | LineHeightStepProperty<TLength>[];
  /**
   * The **`list-style-image`** CSS property specifies an image to be used as the list item marker. It is often more convenient to use the shorthand `list-style`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  "list-style-image"?: ListStyleImageProperty | ListStyleImageProperty[];
  /**
   * The **`list-style-position`** CSS property specifies the position of the `::marker` relative to a list item.
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  "list-style-position"?: ListStylePositionProperty | ListStylePositionProperty[];
  /**
   * The **`list-style-type`** CSS property specifies the appearance of a list item element.
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  "list-style-type"?: ListStyleTypeProperty | ListStyleTypeProperty[];
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  "margin-block-end"?: MarginBlockEndProperty<TLength> | MarginBlockEndProperty<TLength>[];
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  "margin-block-start"?: MarginBlockStartProperty<TLength> | MarginBlockStartProperty<TLength>[];
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  "margin-bottom"?: MarginBottomProperty<TLength> | MarginBottomProperty<TLength>[];
  /**
   * The **`margin-inline-end`** CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome            |        Firefox        |            Safari            | Edge | IE  |
   * | :--------------------------: | :-------------------: | :--------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-end)_ |        **41**         | **3** _(-webkit-margin-end)_ | n/a  | No  |
   * |                              | 3 _(-moz-margin-end)_ |                              |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-end
   */
  "margin-inline-end"?: MarginInlineEndProperty<TLength> | MarginInlineEndProperty<TLength>[];
  /**
   * The **`margin-inline-start`** CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the `margin-top`, `margin-right`, `margin-bottom`, or `margin-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome             |         Firefox         |             Safari             | Edge | IE  |
   * | :----------------------------: | :---------------------: | :----------------------------: | :--: | :-: |
   * | **2** _(-webkit-margin-start)_ |         **41**          | **3** _(-webkit-margin-start)_ | n/a  | No  |
   * |                                | 3 _(-moz-margin-start)_ |                                |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline-start
   */
  "margin-inline-start"?: MarginInlineStartProperty<TLength> | MarginInlineStartProperty<TLength>[];
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  "margin-left"?: MarginLeftProperty<TLength> | MarginLeftProperty<TLength>[];
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  "margin-right"?: MarginRightProperty<TLength> | MarginRightProperty<TLength>[];
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value will place it farther than normal from its neighbors, while a negative value will place it closer.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
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
   * The **`mask-clip`** CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-clip
   */
  "mask-clip"?: MaskClipProperty | MaskClipProperty[];
  /**
   * The **`mask-composite`** CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
   *
   * **Initial value**: `add`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-composite
   */
  "mask-composite"?: MaskCompositeProperty | MaskCompositeProperty[];
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   *
   * **Initial value**: `none`
   *
   * |   Chrome    | Firefox |   Safari    |  Edge  | IE  |
   * | :---------: | :-----: | :---------: | :----: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  "mask-image"?: MaskImageProperty | MaskImageProperty[];
  /**
   * The **`mask-mode`** CSS property determines whether the mask reference defined by `mask-image` is treated as a luminance or alpha mask.
   *
   * **Initial value**: `match-source`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **53**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-mode
   */
  "mask-mode"?: MaskModeProperty | MaskModeProperty[];
  /**
   * The **`mask-origin`** CSS property determines the origin of a mask.
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **53**  |  Yes   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-origin
   */
  "mask-origin"?: MaskOriginProperty | MaskOriginProperty[];
  /**
   * The **`mask-position`** CSS property sets the initial position, relative to the mask position layer defined by `mask-origin`, for each defined mask image.
   *
   * **Initial value**: `center`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-position
   */
  "mask-position"?: MaskPositionProperty<TLength> | MaskPositionProperty<TLength>[];
  /**
   * The **`mask-repeat`** CSS property defines how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
   *
   * **Initial value**: `no-repeat`
   *
   * |   Chrome    | Firefox |   Safari    | Edge | IE  |
   * | :---------: | :-----: | :---------: | :--: | :-: |
   * | **1** _-x-_ | **53**  | **4** _-x-_ | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-repeat
   */
  "mask-repeat"?: MaskRepeatProperty | MaskRepeatProperty[];
  /**
   * The **`mask-size`** CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **53**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-size
   */
  "mask-size"?: MaskSizeProperty<TLength> | MaskSizeProperty<TLength>[];
  /**
   * The **`mask-type`** CSS property determines whether the mask defined by an SVG `<mask>` element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **24** | **35**  |  n/a   | n/a  | n/a |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-type
   */
  "mask-type"?: MaskTypeProperty | MaskTypeProperty[];
  /** **Initial value**: `0` */
  "max-block-size"?: MaxBlockSizeProperty<TLength> | MaxBlockSizeProperty<TLength>[];
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  "max-height"?: MaxHeightProperty<TLength> | MaxHeightProperty<TLength>[];
  /**
   * The **`max-inline-size`** CSS property defines the horizontal or vertical maximum size of an element's block depending on its writing mode. It corresponds to the `max-width` or the `max-height` property depending on the value defined for `writing-mode`. If the writing mode is vertically oriented, the value of `max-inline-size` relates to the maximal height of the element, otherwise it relates to the maximal width of the element. It relates to `max-block-size`, which defines the other dimension of the element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * |  Yes   | **41**  | **10.1** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-inline-size
   */
  "max-inline-size"?: MaxInlineSizeProperty<TLength> | MaxInlineSizeProperty<TLength>[];
  /** **Initial value**: `none` */
  "max-lines"?: MaxLinesProperty | MaxLinesProperty[];
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  "max-width"?: MaxWidthProperty<TLength> | MaxWidthProperty<TLength>[];
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  "min-block-size"?: MinBlockSizeProperty<TLength> | MinBlockSizeProperty<TLength>[];
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **3**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  "min-height"?: MinHeightProperty<TLength> | MinHeightProperty<TLength>[];
  /**
   * The **`min-inline-size`** CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-inline-size
   */
  "min-inline-size"?: MinInlineSizeProperty<TLength> | MinInlineSizeProperty<TLength>[];
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  "min-width"?: MinWidthProperty<TLength> | MinWidthProperty<TLength>[];
  /**
   * The **`mix-blend-mode`** CSS property describes how an element's content should blend with the content of the element's direct parent and the element's background.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **41** | **32**  | **8**  |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode
   */
  "mix-blend-mode"?: MixBlendModeProperty | MixBlendModeProperty[];
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "motion-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "motion-path"?: OffsetPathProperty | OffsetPathProperty[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "motion-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`object-fit`** CSS property specifies how the contents of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  |  Yes   | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-fit
   */
  "object-fit"?: ObjectFitProperty | ObjectFitProperty[];
  /**
   * The **`object-position`** CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **31** | **36**  | **10** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/object-position
   */
  "object-position"?: ObjectPositionProperty<TLength> | ObjectPositionProperty<TLength>[];
  /** **Initial value**: `auto` */
  "offset-anchor"?: OffsetAnchorProperty<TLength> | OffsetAnchorProperty<TLength>[];
  /**
   * The **`offset-block-end`** CSS property defines the logical block end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-end
   */
  "offset-block-end"?: OffsetBlockEndProperty<TLength> | OffsetBlockEndProperty<TLength>[];
  /**
   * The **`offset-block-start`** CSS property defines the logical block start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-block-start
   */
  "offset-block-start"?: OffsetBlockStartProperty<TLength> | OffsetBlockStartProperty<TLength>[];
  /**
   * The **`offset-distance`** CSS property specifies a position along an `offset-path`.
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **55**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-distance)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-distance
   */
  "offset-distance"?: OffsetDistanceProperty<TLength> | OffsetDistanceProperty<TLength>[];
  /**
   * The **`offset-inline-end`** CSS property defines the logical inline end offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-end
   */
  "offset-inline-end"?: OffsetInlineEndProperty<TLength> | OffsetInlineEndProperty<TLength>[];
  /**
   * The **`offset-inline-start`** CSS property defines the logical inline start offset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top`, `right`, `bottom`, or `left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-inline-start
   */
  "offset-inline-start"?: OffsetInlineStartProperty<TLength> | OffsetInlineStartProperty<TLength>[];
  /**
   * The **`offset-path`** CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the `offset-distance` property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of "0" for `offset-distance` and an initial direction which specifies the rotation of the object to the initial position.
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox | Safari | Edge | IE  |
   * | :----------------: | :-----: | :----: | :--: | :-: |
   * |       **55**       |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-path)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-path
   */
  "offset-path"?: OffsetPathProperty | OffsetPathProperty[];
  /** **Initial value**: `auto` */
  "offset-position"?: OffsetPositionProperty<TLength> | OffsetPositionProperty<TLength>[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotate"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`offset-rotate`** CSS property defines the direction of the element while positioning along the offset path.
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari | Edge | IE  |
   * | :--------------------: | :-----: | :----: | :--: | :-: |
   * |         **56**         |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion-rotation)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset-rotate
   */
  "offset-rotation"?: OffsetRotateProperty | OffsetRotateProperty[];
  /**
   * The **`opacity`** CSS property specifies the level of transparency of an element, that is, the degree to which the content behind the element is visible.
   *
   * **Initial value**: `1.0`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`order`** CSS property specifies the order used to lay out a flex or grid item in its flex or grid container. Items within the same container are laid out in ascending order according to their `order` values. Elements with the same `order` value are laid out in the order in which they appear in the source code.
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  order?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`orphans`** CSS property specifies the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   *
   * **Initial value**: `invert`, for browsers supporting it, `currentColor` for the other
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  "outline-color"?: OutlineColorProperty | OutlineColorProperty[];
  /**
   * The **`outline-offset`** CSS property sets the amount of space between an `outline` and the edge or border of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **1**  | **1.5** | **1.2** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-offset
   */
  "outline-offset"?: OutlineOffsetProperty<TLength> | OutlineOffsetProperty<TLength>[];
  /**
   * The **`outline-style`** CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-style
   */
  "outline-style"?: OutlineStyleProperty | OutlineStyleProperty[];
  /**
   * The **`outline-width`** CSS property sets the width (thickness) of an element's outline. An outline is a line that is drawn around an element, outside the `border`.
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-width
   */
  "outline-width"?: OutlineWidthProperty<TLength> | OutlineWidthProperty<TLength>[];
  /**
   * The **`overflow`** CSS property specifies what to do when an element's content is too large to fit in its block formatting context. It is a shorthand for the `overflow-x` and `overflow-y` properties.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
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
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |      Firefox      |       Safari        |         Edge         |          IE           |
   * | :-----------------: | :---------------: | :-----------------: | :------------------: | :-------------------: |
   * | **1** _(word-wrap)_ |      **49**       | **1** _(word-wrap)_ | **12** _(word-wrap)_ | **5.5** _(word-wrap)_ |
   * |                     | 3.5 _(word-wrap)_ |                     |                      |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "overflow-wrap"?: OverflowWrapProperty | OverflowWrapProperty[];
  /**
   * The **`overflow-x`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the left and right edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  "overflow-x"?: OverflowXProperty | OverflowXProperty[];
  /**
   * The **`overflow-y`** CSS property specifies whether to clip content, render a scroll bar, or display overflow content of a block-level element, when it overflows at the top and bottom edges.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **1.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  "overflow-y"?: OverflowYProperty | OverflowYProperty[];
  /**
   * The **`overscroll-behavior`** CSS property is shorthand for the `overscroll-behavior-x` and `overscroll-behavior-y` properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior
   */
  "overscroll-behavior"?: OverscrollBehaviorProperty | OverscrollBehaviorProperty[];
  /**
   * The **`overscroll-behavior-x`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-x
   */
  "overscroll-behavior-x"?: OverscrollBehaviorXProperty | OverscrollBehaviorXProperty[];
  /**
   * The **`overscroll-behavior-y`** CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **63** | **59**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior-y
   */
  "overscroll-behavior-y"?: OverscrollBehaviorYProperty | OverscrollBehaviorYProperty[];
  /**
   * The **`padding-block-end`** CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-end
   */
  "padding-block-end"?: PaddingBlockEndProperty<TLength> | PaddingBlockEndProperty<TLength>[];
  /**
   * The **`padding-block-start`** CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-block-start
   */
  "padding-block-start"?: PaddingBlockStartProperty<TLength> | PaddingBlockStartProperty<TLength>[];
  /**
   * The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-bottom
   */
  "padding-bottom"?: PaddingBottomProperty<TLength> | PaddingBottomProperty<TLength>[];
  /**
   * The **`padding-inline-end`** CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |            Chrome             |        Firefox         |            Safari             | Edge | IE  |
   * | :---------------------------: | :--------------------: | :---------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-end)_ |         **41**         | **3** _(-webkit-padding-end)_ | n/a  | No  |
   * |                               | 3 _(-moz-padding-end)_ |                               |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-end
   */
  "padding-inline-end"?: PaddingInlineEndProperty<TLength> | PaddingInlineEndProperty<TLength>[];
  /**
   * The **`padding-inline-start`** CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation. It corresponds to the `padding-top`, `padding-right`, `padding-bottom`, or `padding-left` property depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.
   *
   * **Initial value**: `0`
   *
   * |             Chrome              |         Firefox          |             Safari              | Edge | IE  |
   * | :-----------------------------: | :----------------------: | :-----------------------------: | :--: | :-: |
   * | **2** _(-webkit-padding-start)_ |          **41**          | **3** _(-webkit-padding-start)_ |  No  | No  |
   * |                                 | 3 _(-moz-padding-start)_ |                                 |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-inline-start
   */
  "padding-inline-start"?: PaddingInlineStartProperty<TLength> | PaddingInlineStartProperty<TLength>[];
  /**
   * The **`padding-left`** CSS property sets the width of the padding area on the left side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-left
   */
  "padding-left"?: PaddingLeftProperty<TLength> | PaddingLeftProperty<TLength>[];
  /**
   * The **`padding-right`** CSS property sets the width of the padding area on the right side of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-right
   */
  "padding-right"?: PaddingRightProperty<TLength> | PaddingRightProperty<TLength>[];
  /**
   * The **`padding-top`** CSS property sets the height of the padding area on the top of an element.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding-top
   */
  "padding-top"?: PaddingTopProperty<TLength> | PaddingTopProperty<TLength>[];
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  "page-break-after"?: PageBreakAfterProperty | PageBreakAfterProperty[];
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  "page-break-before"?: PageBreakBeforeProperty | PageBreakBeforeProperty[];
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **19**  | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  "page-break-inside"?: PageBreakInsideProperty | PageBreakInsideProperty[];
  /**
   * The **`paint-order`** CSS property lets you control the order in which the fill and stroke (and painting markers) of text content and shapes are drawn.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **60**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/paint-order
   */
  "paint-order"?: PaintOrderProperty | PaintOrderProperty[];
  /**
   * The **`perspective`** CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari |  Edge  |   IE   |
   * | :------: | :------: | :----: | :----: | :----: |
   * |  **45**  |  **16**  |  Yes   | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective
   */
  perspective?: PerspectiveProperty<TLength> | PerspectiveProperty<TLength>[];
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   *
   * **Initial value**: `50% 50%`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  |   IE   |
   * | :----------: | :------: | :----: | :----: | :----: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | **10** |
   * |              | 10 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  "perspective-origin"?: PerspectiveOriginProperty<TLength> | PerspectiveOriginProperty<TLength>[];
  /**
   * The `**place-content**` CSS shorthand property sets both the `align-content` and `justify-content` properties.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **59** |   Yes   |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  "place-content"?: PlaceContentProperty | PlaceContentProperty[];
  /**
   * The **`pointer-events`** CSS property specifies under what circumstances (if any) a particular graphic element can become the target of mouse events.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/pointer-events
   */
  "pointer-events"?: PointerEventsProperty | PointerEventsProperty[];
  /**
   * The **`position`** CSS property specifies how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position?: PositionProperty | PositionProperty[];
  /**
   * The **`quotes`** CSS property indicates how user agents should render quotation marks.
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes?: QuotesProperty | QuotesProperty[];
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which direction(s).
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **1**  |         | **3**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize?: ResizeProperty | ResizeProperty[];
  /**
   * The **`right`** CSS property participates in specifying the horizontal position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/right
   */
  right?: RightProperty<TLength> | RightProperty<TLength>[];
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate?: RotateProperty | RotateProperty[];
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's rows.
   *
   * **Initial value**: `normal`
   *
   * |       Chrome        |       Firefox       |          Safari           |  Edge  | IE  |
   * | :-----------------: | :-----------------: | :-----------------------: | :----: | :-: |
   * |       **66**        |       **61**        | **10.1** _(grid-row-gap)_ | **16** | No  |
   * | 57 _(grid-row-gap)_ | 52 _(grid-row-gap)_ |                           |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  "row-gap"?: RowGapProperty<TLength> | RowGapProperty<TLength>[];
  /**
   * The `**ruby-align**` CSS property defines the distribution of the different ruby elements over the base.
   *
   * **Initial value**: `space-around`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **38**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-align
   */
  "ruby-align"?: RubyAlignProperty | RubyAlignProperty[];
  /** **Initial value**: `separate` */
  "ruby-merge"?: RubyMergeProperty | RubyMergeProperty[];
  /**
   * The `**ruby-position**` CSS property defines the position of a ruby element relatives to its base element. It can be position over the element (`over`), under it (`under`), or between the characters, on their right side (`inter-character`).
   *
   * **Initial value**: `over`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * |   No   | **38**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/ruby-position
   */
  "ruby-position"?: RubyPositionProperty | RubyPositionProperty[];
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale?: ScaleProperty | ScaleProperty[];
  /**
   * The **`scroll-behavior`** CSS property specifies the scrolling behavior for a scrolling box when scrolling is triggered by one of the navigation or CSSOM scrolling APIs.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  n/a   | **36**  |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  "scroll-behavior"?: ScrollBehaviorProperty | ScrollBehaviorProperty[];
  /**
   * The **`scroll-snap-type`** CSS property defines how strictly snap points are enforced on the scroll container in case there is one.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari    |     Edge     |      IE      |
   * | :----: | :-----: | :---------: | :----------: | :----------: |
   * |   No   | **39**  | **9** _-x-_ | **12** _-x-_ | **10** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  "scroll-snap-type"?: ScrollSnapTypeProperty | ScrollSnapTypeProperty[];
  /**
   * The **`shape-image-threshold`** CSS property defines the alpha channel threshold used to extract the shape using an image as the value for `shape-outside`.
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-image-threshold
   */
  "shape-image-threshold"?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`shape-margin`** CSS property specifies a margin for a CSS shape created using `shape-outside`.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |     Safari     | Edge | IE  |
   * | :----: | :-----: | :------------: | :--: | :-: |
   * | **37** | **62**  | **10.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-margin
   */
  "shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
  /**
   * The **`shape-outside`** CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; `shape-outside` provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | **37** | **62**  | **10.1** | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/shape-outside
   */
  "shape-outside"?: ShapeOutsideProperty | ShapeOutsideProperty[];
  /**
   * The **`tab-size`** CSS property is used to customize the width of a tab (`U+0009`) character.
   *
   * **Initial value**: `8`
   *
   * | Chrome |   Firefox   | Safari  | Edge | IE  |
   * | :----: | :---------: | :-----: | :--: | :-: |
   * | **21** | **4** _-x-_ | **6.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/tab-size
   */
  "tab-size"?: TabSizeProperty<TLength> | TabSizeProperty<TLength>[];
  /**
   * The **`table-layout`** CSS property specifies the algorithm used to lay out `<table>` cells, rows, and columns.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  "table-layout"?: TableLayoutProperty | TableLayoutProperty[];
  /**
   * The **`text-align`** CSS property describes how inline content like text is aligned in its parent block element. `text-align` does not control the alignment of block elements, only their inline content.
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  "text-align"?: TextAlignProperty | TextAlignProperty[];
  /**
   * The **`text-align-last`** CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **47** | **49**  |   No   | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  "text-align-last"?: TextAlignLastProperty | TextAlignLastProperty[];
  /**
   * The **`text-combine-upright`** CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |                   IE                   |
   * | :----: | :-----: | :----: | :----: | :------------------------------------: |
   * | **48** | **48**  |  Yes   | **15** | **11** _(-ms-text-combine-horizontal)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  "text-combine-upright"?: TextCombineUprightProperty | TextCombineUprightProperty[];
  /**
   * The **`text-decoration-color`** CSS property sets the color of the decorative additions to text that are specified by `text-decoration-line`; these include underlines and overlines, strikethroughs, and wavy lines like those typically used to indicate content is misspelled (for example). The specified color applies to all such decorative lines in the scope of the property's value.
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  "text-decoration-color"?: TextDecorationColorProperty | TextDecorationColorProperty[];
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   | **36**  |  Yes   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  "text-decoration-line"?: TextDecorationLineProperty | TextDecorationLineProperty[];
  /**
   * The **`text-decoration-skip`** CSS property specifies what parts of an element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |   Safari    | Edge | IE  |
   * | :----: | :-----: | :---------: | :--: | :-: |
   * | 57-64  |   No    | **8** _-x-_ |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip
   */
  "text-decoration-skip"?: TextDecorationSkipProperty | TextDecorationSkipProperty[];
  /**
   * The **`text-decoration-skip-ink`** CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-skip-ink
   */
  "text-decoration-skip-ink"?: TextDecorationSkipInkProperty | TextDecorationSkipInkProperty[];
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are specified; there is no way to define different styles for each of the lines defined by `text-decoration-line`.
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **57** | **36**  |  Yes   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  "text-decoration-style"?: TextDecorationStyleProperty | TextDecorationStyleProperty[];
  /**
   * The **`text-emphasis-color`** CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the `text-emphasis` shorthand.
   *
   * **Initial value**: `currentcolor`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  "text-emphasis-color"?: TextEmphasisColorProperty | TextEmphasisColorProperty[];
  /**
   * The **`text-emphasis-position`** CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.
   *
   * **Initial value**: `over right`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  "text-emphasis-position"?: GlobalsString | GlobalsString[];
  /**
   * The **`text-emphasis-style`** CSS property defines the type of emphasis used. It can also be set, and reset, using the `text-emphasis` shorthand.
   *
   * **Initial value**: `none`
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  "text-emphasis-style"?: TextEmphasisStyleProperty | TextEmphasisStyleProperty[];
  /**
   * The **`text-indent`** CSS property specifies the amount of indentation (empty space) that is put before lines of text in a block. By default, this controls the indentation of only the first formatted line of the block, but the `hanging` and `each-line` keywords can be used to change this behavior.
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  "text-indent"?: TextIndentProperty<TLength> | TextIndentProperty<TLength>[];
  /**
   * The **`text-justify`** CSS property defines what type of justification should be applied to text when it is justified (i.e., when `text-align``: justify;` is set on it).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * |  n/a   | **55**  |   No   | **14** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  "text-justify"?: TextJustifyProperty | TextJustifyProperty[];
  /**
   * The **`text-orientation`** CSS property defines the orientation of the text characters in a line. This property only has an effect in vertical mode, that is, when `writing-mode` is not `horizontal-tb`. It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
   *
   * **Initial value**: `mixed`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **48** | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-orientation
   */
  "text-orientation"?: TextOrientationProperty | TextOrientationProperty[];
  /**
   * The **`text-overflow`** CSS property determines how overflowed content that is not displayed is signaled to users. It can be clipped, display an ellipsis ('`…`', `U+2026 Horizontal Ellipsis`), or display a custom string.
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-overflow
   */
  "text-overflow"?: TextOverflowProperty | TextOverflowProperty[];
  /**
   * The **`text-rendering`** CSS property provides information to the rendering engine about what to optimize for when rendering text.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **4**  |  **3**  | **5**  | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-rendering
   */
  "text-rendering"?: TextRenderingProperty | TextRenderingProperty[];
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  "text-shadow"?: TextShadowProperty | TextShadowProperty[];
  /**
   * The **`text-size-adjust`** CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |     Edge     | IE  |
   * | :----: | :-----: | :----: | :----------: | :-: |
   * | **54** |   No    |   No   | **12** _-x-_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-size-adjust
   */
  "text-size-adjust"?: TextSizeAdjustProperty | TextSizeAdjustProperty[];
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  "text-transform"?: TextTransformProperty | TextTransformProperty[];
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **33** |   No    |   No   | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  "text-underline-position"?: TextUnderlinePositionProperty | TextUnderlinePositionProperty[];
  /**
   * The **`top`** CSS property participates in specifying the vertical position of a _positioned element_. It has no effect on non-positioned elements.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/top
   */
  top?: TopProperty<TLength> | TopProperty<TLength>[];
  /**
   * The **`touch-action`** CSS property specifies whether, and in what ways, a given region can be manipulated by the user via a touchscreen (for instance, by panning or zooming features built into the browser).
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  |   No   | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  "touch-action"?: TouchActionProperty | TouchActionProperty[];
  /**
   * The **`transform`** CSS property lets you rotate, scale, skew, or translate a given element. This is achieved by modifying the coordinate space of the CSS visual formatting model.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari   |     Edge     |   IE    |
   * | :----: | :-----: | :-------: | :----------: | :-----: |
   * | **36** | **16**  |   **9**   | **12** _-x-_ | **10**  |
   * |        |         | 3.1 _-x-_ |              | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform
   */
  transform?: TransformProperty | TransformProperty[];
  /**
   * The **`transform-box`** CSS property defines the layout box to which the `transform` and `transform-origin` properties relate.
   *
   * **Initial value**: `border-box `
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **64** | **55**  |  n/a   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-box
   */
  "transform-box"?: TransformBoxProperty | TransformBoxProperty[];
  /**
   * The **`transform-origin`** CSS property sets the origin for an element's transformations.
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome |  Firefox  |    Safari     |  Edge  |   IE    |
   * | :----: | :-------: | :-----------: | :----: | :-----: |
   * |  Yes   |  **16**   | **3.1** _-x-_ | **12** | **10**  |
   * |        | 3.5 _-x-_ |               |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-origin
   */
  "transform-origin"?: TransformOriginProperty<TLength> | TransformOriginProperty<TLength>[];
  /**
   * The **`transform-style`** CSS property determines if the children of an element are positioned in the 3D-space or are flattened in the plane of the element.
   *
   * **Initial value**: `flat`
   *
   * |    Chrome    | Firefox  | Safari |  Edge  | IE  |
   * | :----------: | :------: | :----: | :----: | :-: |
   * | **12** _-x-_ |  **16**  |  Yes   | **12** | No  |
   * |              | 10 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transform-style
   */
  "transform-style"?: TransformStyleProperty | TransformStyleProperty[];
  /**
   * The **`transition-delay`** CSS property specifies the amount of time to wait before starting a property's transition effect when its value changes.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  "transition-delay"?: GlobalsString | GlobalsString[];
  /**
   * The **`transition-duration`** CSS property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |   Safari    |  Edge  |   IE   |
   * | :-----: | :-----: | :---------: | :----: | :----: |
   * | **26**  | **16**  | **3** _-x-_ | **12** | **10** |
   * | 1 _-x-_ | 4 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  "transition-duration"?: GlobalsString | GlobalsString[];
  /**
   * The **`transition-property`** CSS property specifies the CSS properties to which a transition effect should be applied.
   *
   * **Initial value**: all
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  "transition-property"?: TransitionPropertyProperty | TransitionPropertyProperty[];
  /**
   * The **`transition-timing-function`** CSS property is used to describe how the intermediate values of the CSS properties being affected by a transition effect are calculated.
   *
   * **Initial value**: `ease`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **26** | **16**  |  Yes   | **12** | **10** |
   * |        | 4 _-x-_ |        |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  "transition-timing-function"?: TransitionTimingFunctionProperty | TransitionTimingFunctionProperty[];
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |  Yes   |   n/a   |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate?: TranslateProperty<TLength> | TranslateProperty<TLength>[];
  /**
   * The **`unicode-bidi`** CSS property, together with the `direction` property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The `unicode-bidi` property overrides this algorithm and allows the developer to control the text embedding.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/unicode-bidi
   */
  "unicode-bidi"?: UnicodeBidiProperty | UnicodeBidiProperty[];
  /**
   * The `**user-select**` CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox    |    Safari     |     Edge     |   IE   |
   * | :-----: | :----------: | :-----------: | :----------: | :----: |
   * | **54**  | **49** _-x-_ | **3.1** _-x-_ | **12** _-x-_ | **10** |
   * | 6 _-x-_ |              |               |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/user-select
   */
  "user-select"?: UserSelectProperty | UserSelectProperty[];
  /**
   * The **`vertical-align`** CSS property specifies the vertical alignment of an inline or table-cell box.
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  "vertical-align"?: VerticalAlignProperty<TLength> | VerticalAlignProperty<TLength>[];
  /**
   * The **`visibility`** CSS property can show or hide an element without affecting the layout of a document (i.e., space is created for elements regardless of whether they are visible or not). The property can also hide rows or columns in a `<table>`.
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/visibility
   */
  visibility?: VisibilityProperty | VisibilityProperty[];
  /**
   * The **`white-space`** CSS property determines how whitespace inside an element is handled.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/white-space
   */
  "white-space"?: WhiteSpaceProperty | WhiteSpaceProperty[];
  /**
   * The **`widows`** CSS property specifies the minimum number of lines in a block container that must be shown at the _top_ of a page, region, or column. This property is normally used to control how breaks occur.
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **25** |   No    |   No   | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/widows
   */
  widows?: GlobalsNumber | GlobalsNumber[];
  /**
   * The **`width`** CSS property specifies the width of an element. By default, the property defines the width of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the width of the border area.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * |  Yes   |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  width?: WidthProperty<TLength> | WidthProperty<TLength>[];
  /**
   * The **`will-change`** CSS property provides a way for authors to hint browsers about the kind of changes to be expected on an element, so that the browser can set up appropriate optimizations ahead of time before the element is actually changed. These kind of optimizations can increase the responsiveness of a page by doing potentially expensive work ahead of time before they are actually required.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * | **36** | **36**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/will-change
   */
  "will-change"?: WillChangeProperty | WillChangeProperty[];
  /**
   * The **`word-break`** CSS property specifies whether or not the browser should insert line breaks wherever the text would otherwise overflow its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  |  Yes   | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  "word-break"?: WordBreakProperty | WordBreakProperty[];
  /**
   * The **`word-spacing`** CSS property specifies the spacing behavior between tags and words.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  "word-spacing"?: WordSpacingProperty<TLength> | WordSpacingProperty<TLength>[];
  /**
   * The `**overflow-wrap**` CSS property specifies whether or not the browser should insert line breaks within words to prevent text from overflowing its content box.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **3.5** | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  "word-wrap"?: WordWrapProperty | WordWrapProperty[];
  /**
   * The **`writing-mode`** CSS property defines whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   *
   * **Initial value**: `horizontal-tb`
   *
   * |   Chrome    | Firefox |    Safari     |  Edge  |     IE      |
   * | :---------: | :-----: | :-----------: | :----: | :---------: |
   * | **8** _-x-_ | **41**  | **5.1** _-x-_ | **12** | **9** _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  "writing-mode"?: WritingModeProperty | WritingModeProperty[];
  /**
   * The **`z-index`** CSS property specifies the z-order of a positioned element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one.
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/z-index
   */
  "z-index"?: ZIndexProperty | ZIndexProperty[];
  /**
   * The non-standard **`zoom`** CSS property can be used to control the magnification level of an element. `transform: scale()` should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * |  Yes   |   No    | **4**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/zoom
   */
  zoom?: ZoomProperty | ZoomProperty[];
}

export interface StandardShorthandPropertiesHyphenFallback<TLength = string | 0> {
  /**
   * The `**all**` CSS shorthand property sets all of an element's properties (other than `unicode-bidi` and `direction`) to their initial or inherited values, or to the values specified in another stylesheet origin.
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * | **37** | **27**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/all
   */
  all?: Globals | Globals[];
  /**
   * The **`animation`** CSS property is a shorthand property for the various animation properties: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **43** | **16**  | **4** _-x-_ | **12** | **10** |
   * |        | 5 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation?: AnimationProperty | AnimationProperty[];
  /**
   * The **`background`** CSS property is a short way to declare all background style options at once, including color, image, origin and size, repeat method, and other features.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/background
   */
  background?: BackgroundProperty<TLength> | BackgroundProperty<TLength>[];
  /**
   * The **`border`** CSS property is a shorthand for setting all individual border property values in a single declaration: `border-width`, `border-style`, and `border-color`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border?: BorderProperty<TLength> | BorderProperty<TLength>[];
  /**
   * The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-end
   */
  "border-block-end"?: BorderBlockEndProperty<TLength> | BorderBlockEndProperty<TLength>[];
  /**
   * The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-block-start
   */
  "border-block-start"?: BorderBlockStartProperty<TLength> | BorderBlockStartProperty<TLength>[];
  /**
   * The **`border-bottom`** CSS property is a shorthand that sets the values of `border-bottom-color`, `border-bottom-style`, and `border-bottom-width`. These properties describe an element's bottom `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom
   */
  "border-bottom"?: BorderBottomProperty<TLength> | BorderBottomProperty<TLength>[];
  /**
   * The **`border-color`** CSS property is a shorthand property for setting the colors on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  "border-color"?: BorderColorProperty | BorderColorProperty[];
  /**
   * The **`border-image`** CSS property lets you draw an image in place of an element's `border-style`.
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  "border-image"?: BorderImageProperty | BorderImageProperty[];
  /**
   * The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-end
   */
  "border-inline-end"?: BorderInlineEndProperty<TLength> | BorderInlineEndProperty<TLength>[];
  /**
   * The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **41**  |   No   | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-inline-start
   */
  "border-inline-start"?: BorderInlineStartProperty<TLength> | BorderInlineStartProperty<TLength>[];
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-color`, `border-left-style`, and `border-left-width`. These properties describe an element's left `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  "border-left"?: BorderLeftProperty<TLength> | BorderLeftProperty<TLength>[];
  /**
   * The **`border-radius`** CSS property lets you round the corners of an element's outer border edge. You can specify a single radius to make circular corners, or two radii to make elliptical corners.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-radius
   */
  "border-radius"?: BorderRadiusProperty<TLength> | BorderRadiusProperty<TLength>[];
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-color`, `border-right-style`, and `border-right-width`. These properties describe an element's right `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  "border-right"?: BorderRightProperty<TLength> | BorderRightProperty<TLength>[];
  /**
   * The **`border-style`** CSS property is a shorthand property that sets the line style for all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-style
   */
  "border-style"?: BorderStyleProperty | BorderStyleProperty[];
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-color`, `border-top-style`, and `border-top-width`. These properties describe an element's top `border`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  "border-top"?: BorderTopProperty<TLength> | BorderTopProperty<TLength>[];
  /**
   * The **`border-width`** CSS property is a shorthand property for setting the widths on all four sides of an element's border.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  "border-width"?: BorderWidthProperty<TLength> | BorderWidthProperty<TLength>[];
  /**
   * The **`column-rule`** CSS property sets the width, style, and color of the rule (line) drawn between columns in a multi-column layout.
   *
   * | Chrome |  Firefox  |   Safari    |     Edge     |   IE   |
   * | :----: | :-------: | :---------: | :----------: | :----: |
   * | **50** |  **52**   | **3** _-x-_ | **12** _-x-_ | **10** |
   * |        | 3.5 _-x-_ |             |              |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/column-rule
   */
  "column-rule"?: ColumnRuleProperty<TLength> | ColumnRuleProperty<TLength>[];
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   *
   * | Chrome | Firefox |   Safari    |  Edge  |   IE   |
   * | :----: | :-----: | :---------: | :----: | :----: |
   * | **50** | **52**  | **3** _-x-_ | **12** | **10** |
   * |        | 9 _-x-_ |             |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  columns?: ColumnsProperty<TLength> | ColumnsProperty<TLength>[];
  /**
   * The **`flex`** CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |    IE    |
   * | :------: | :-----: | :-------: | :----: | :------: |
   * |  **29**  |  20-61  |   **9**   | **12** |  **11**  |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex?: FlexProperty<TLength> | FlexProperty<TLength>[];
  /**
   * The **`flex-flow`** CSS property is a shorthand property for `flex-direction` and `flex-wrap` individual properties.
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :------: | :-----: | :-------: | :----: | :----: |
   * |  **29**  | **28**  |   **9**   | **12** | **11** |
   * | 21 _-x-_ |         | 6.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-flow
   */
  "flex-flow"?: FlexFlowProperty | FlexFlowProperty[];
  /**
   * The **`font`** CSS property is either a shorthand property for setting `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`; or a way to set the element's font to a system font, using specific keywords.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font?: FontProperty | FontProperty[];
  /**
   * The **`gap`** CSS property specifies the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   *
   * |     Chrome      |     Firefox     |        Safari         |  Edge  | IE  |
   * | :-------------: | :-------------: | :-------------------: | :----: | :-: |
   * |     **66**      |     **61**      | **10.1** _(grid-gap)_ | **16** | No  |
   * | 57 _(grid-gap)_ | 52 _(grid-gap)_ |                       |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap?: GapProperty<TLength> | GapProperty<TLength>[];
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid?: GridProperty | GridProperty[];
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  "grid-area"?: GridAreaProperty | GridAreaProperty[];
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  "grid-column"?: GridColumnProperty | GridColumnProperty[];
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  "grid-row"?: GridRowProperty | GridRowProperty[];
  /**
   * The **`grid-template`** CSS property is a shorthand property for defining grid columns, rows, and areas.
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-template
   */
  "grid-template"?: GridTemplateProperty | GridTemplateProperty[];
  /** **Initial value**: `none` */
  "line-clamp"?: LineClampProperty | LineClampProperty[];
  /**
   * The **`list-style`** CSS property is a shorthand for setting the individual values that define how a list is displayed: `list-style-type`, `list-style-image`, and `list-style-position`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  "list-style"?: ListStyleProperty | ListStyleProperty[];
  /**
   * The **`margin`** CSS property sets the margin area on all four sides of an element. It is a shorthand for setting all individual margins at once: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/margin
   */
  margin?: MarginProperty<TLength> | MarginProperty<TLength>[];
  /**
   * The **`mask`** CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   Yes   | **4**  | **12** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/mask
   */
  mask?: MaskProperty<TLength> | MaskProperty<TLength>[];
  "mask-border"?: MaskBorderProperty | MaskBorderProperty[];
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  motion?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * The **`offset`** CSS property is a shorthand property for animating an element along a defined path.
   *
   * |    Chrome     | Firefox | Safari | Edge | IE  |
   * | :-----------: | :-----: | :----: | :--: | :-: |
   * |    **55**     |   n/a   |  n/a   | n/a  | n/a |
   * | 46 _(motion)_ |         |        |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/offset
   */
  offset?: OffsetProperty<TLength> | OffsetProperty<TLength>[];
  /**
   * The **`outline`** CSS property is a shorthand for setting various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline?: OutlineProperty<TLength> | OutlineProperty<TLength>[];
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for setting all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding?: PaddingProperty<TLength> | PaddingProperty<TLength>[];
  /**
   * The **`text-decoration`** CSS property specifies the appearance of decorative lines used on text. It is a shorthand for setting one or more individual text-decoration values in a single declaration, which include `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  "text-decoration"?: TextDecorationProperty | TextDecorationProperty[];
  /**
   * The **`text-emphasis`** CSS property is a shorthand property for setting `text-emphasis-style` and `text-emphasis-color` in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.
   *
   * |    Chrome    | Firefox |    Safari     | Edge | IE  |
   * | :----------: | :-----: | :-----------: | :--: | :-: |
   * | **25** _-x-_ | **46**  | **6.1** _-x-_ | n/a  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  "text-emphasis"?: TextEmphasisProperty | TextEmphasisProperty[];
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
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
  /** **Initial value**: `auto` */
  "-ms-align-self"?: AlignSelfProperty | AlignSelfProperty[];
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
  /** **Initial value**: `none` (but this value is overridden in the user agent CSS) */
  "-webkit-appearance"?: WebkitAppearanceProperty | WebkitAppearanceProperty[];
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
  /** **Initial value**: `economy` */
  "-webkit-color-adjust"?: ColorAdjustProperty | ColorAdjustProperty[];
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
  /** **Initial value**: `nowrap` */
  "-webkit-flex-wrap"?: FlexWrapProperty | FlexWrapProperty[];
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
  /** **Initial value**: `auto auto` */
  "-webkit-mask-size"?: WebkitMaskSizeProperty<TLength> | WebkitMaskSizeProperty<TLength>[];
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
  /** **Initial value**: `0` */
  "-webkit-shape-margin"?: ShapeMarginProperty<TLength> | ShapeMarginProperty<TLength>[];
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
  "-webkit-mask"?: WebkitMaskProperty<TLength> | WebkitMaskProperty<TLength>[];
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
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  "-ms-scrollbar-3dlight-color"?: MsScrollbar3dlightColorProperty | MsScrollbar3dlightColorProperty[];
  /**
   * **Initial value**: `ButtonText`
   *
   * @deprecated
   */
  "-ms-scrollbar-arrow-color"?: MsScrollbarArrowColorProperty | MsScrollbarArrowColorProperty[];
  /**
   * **Initial value**: depends on user agent
   *
   * @deprecated
   */
  "-ms-scrollbar-base-color"?: MsScrollbarBaseColorProperty | MsScrollbarBaseColorProperty[];
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  "-ms-scrollbar-darkshadow-color"?: MsScrollbarDarkshadowColorProperty | MsScrollbarDarkshadowColorProperty[];
  /**
   * **Initial value**: `ThreeDFace`
   *
   * @deprecated
   */
  "-ms-scrollbar-face-color"?: MsScrollbarFaceColorProperty | MsScrollbarFaceColorProperty[];
  /**
   * **Initial value**: `ThreeDHighlight`
   *
   * @deprecated
   */
  "-ms-scrollbar-highlight-color"?: MsScrollbarHighlightColorProperty | MsScrollbarHighlightColorProperty[];
  /**
   * **Initial value**: `ThreeDDarkShadow`
   *
   * @deprecated
   */
  "-ms-scrollbar-shadow-color"?: MsScrollbarShadowColorProperty | MsScrollbarShadowColorProperty[];
  /**
   * **Initial value**: `Scrollbar`
   *
   * @deprecated
   */
  "-ms-scrollbar-track-color"?: MsScrollbarTrackColorProperty | MsScrollbarTrackColorProperty[];
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
  msMaxZoom?: ViewportMaxZoomProperty;
  msMinHeight?: ViewportMinHeightProperty<TLength>;
  msMinWidth?: ViewportMinWidthProperty<TLength>;
  msMinZoom?: ViewportMinZoomProperty;
  msOrientation?: ViewportOrientationProperty;
  msUserZoom?: ViewportUserZoomProperty;
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
  "-ms-max-zoom"?: ViewportMaxZoomProperty;
  "-ms-min-height"?: ViewportMinHeightProperty<TLength>;
  "-ms-min-width"?: ViewportMinWidthProperty<TLength>;
  "-ms-min-zoom"?: ViewportMinZoomProperty;
  "-ms-orientation"?: ViewportOrientationProperty;
  "-ms-user-zoom"?: ViewportUserZoomProperty;
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
  msMaxZoom?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  msMinHeight?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  msMinWidth?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  msMinZoom?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  msOrientation?: ViewportOrientationProperty | ViewportOrientationProperty[];
  msUserZoom?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
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
  "-ms-max-zoom"?: ViewportMaxZoomProperty | ViewportMaxZoomProperty[];
  "-ms-min-height"?: ViewportMinHeightProperty<TLength> | ViewportMinHeightProperty<TLength>[];
  "-ms-min-width"?: ViewportMinWidthProperty<TLength> | ViewportMinWidthProperty<TLength>[];
  "-ms-min-zoom"?: ViewportMinZoomProperty | ViewportMinZoomProperty[];
  "-ms-orientation"?: ViewportOrientationProperty | ViewportOrientationProperty[];
  "-ms-user-zoom"?: ViewportUserZoomProperty | ViewportUserZoomProperty[];
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
  | "::slotted"
  | ":dir"
  | ":host"
  | ":host-context"
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
  | ":-ms-input-placeholder"
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
  | "::-ms-reveal"
  | "::-ms-thumb"
  | "::-ms-ticks-after"
  | "::-ms-ticks-before"
  | "::-ms-tooltip"
  | "::-ms-track"
  | "::-ms-value"
  | "::-webkit-backdrop"
  | "::-webkit-input-placeholder"
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

export type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "unset";

type GlobalsString = Globals | string;

type GlobalsNumber = Globals | number;

export type AlignContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

export type AlignItemsProperty = Globals | SelfPosition | "baseline" | "normal" | "stretch" | string;

export type AlignSelfProperty = Globals | SelfPosition | "auto" | "baseline" | "normal" | "stretch" | string;

export type AnimationProperty = Globals | SingleAnimation | string;

export type AnimationDirectionProperty = Globals | SingleAnimationDirection | string;

export type AnimationFillModeProperty = Globals | SingleAnimationFillMode | string;

export type AnimationIterationCountProperty = Globals | "infinite" | string | number;

export type AnimationNameProperty = Globals | "none" | string;

export type AnimationPlayStateProperty = Globals | "paused" | "running" | string;

export type AnimationTimingFunctionProperty = Globals | SingleTimingFunction | string;

export type AppearanceProperty = Globals | "none";

export type AzimuthProperty =
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

export type BackdropFilterProperty = Globals | "none" | string;

export type BackfaceVisibilityProperty = Globals | "hidden" | "visible";

export type BackgroundProperty<TLength> = Globals | FinalBgLayer<TLength> | string;

export type BackgroundAttachmentProperty = Globals | Attachment | string;

export type BackgroundBlendModeProperty = Globals | BlendMode | string;

export type BackgroundClipProperty = Globals | Box | string;

export type BackgroundColorProperty = Globals | Color;

export type BackgroundImageProperty = Globals | "none" | string;

export type BackgroundOriginProperty = Globals | Box | string;

export type BackgroundPositionProperty<TLength> = Globals | BgPosition<TLength> | string;

export type BackgroundPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | string;

export type BackgroundPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | string;

export type BackgroundRepeatProperty = Globals | RepeatStyle | string;

export type BackgroundSizeProperty<TLength> = Globals | BgSize<TLength> | string;

export type BlockOverflowProperty = Globals | "clip" | "ellipsis" | string;

export type BlockSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

export type BorderProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderBlockEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderBlockEndColorProperty = Globals | Color;

export type BorderBlockEndStyleProperty = Globals | BrStyle | string;

export type BorderBlockEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type BorderBlockStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderBlockStartColorProperty = Globals | Color;

export type BorderBlockStartStyleProperty = Globals | BrStyle | string;

export type BorderBlockStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type BorderBottomProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderBottomColorProperty = Globals | Color;

export type BorderBottomLeftRadiusProperty<TLength> = Globals | TLength | string;

export type BorderBottomRightRadiusProperty<TLength> = Globals | TLength | string;

export type BorderBottomStyleProperty = Globals | BrStyle;

export type BorderBottomWidthProperty<TLength> = Globals | BrWidth<TLength>;

export type BorderCollapseProperty = Globals | "collapse" | "separate";

export type BorderColorProperty = Globals | Color | string;

export type BorderImageProperty = Globals | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

export type BorderImageOutsetProperty<TLength> = Globals | TLength | string | number;

export type BorderImageRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

export type BorderImageSliceProperty = Globals | string | number;

export type BorderImageSourceProperty = Globals | "none" | string;

export type BorderImageWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

export type BorderInlineEndProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderInlineEndColorProperty = Globals | Color;

export type BorderInlineEndStyleProperty = Globals | BrStyle | string;

export type BorderInlineEndWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type BorderInlineStartProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderInlineStartColorProperty = Globals | Color;

export type BorderInlineStartStyleProperty = Globals | BrStyle | string;

export type BorderInlineStartWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type BorderLeftProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderLeftColorProperty = Globals | Color;

export type BorderLeftStyleProperty = Globals | BrStyle;

export type BorderLeftWidthProperty<TLength> = Globals | BrWidth<TLength>;

export type BorderRadiusProperty<TLength> = Globals | TLength | string;

export type BorderRightProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderRightColorProperty = Globals | Color;

export type BorderRightStyleProperty = Globals | BrStyle;

export type BorderRightWidthProperty<TLength> = Globals | BrWidth<TLength>;

export type BorderSpacingProperty<TLength> = Globals | TLength | string;

export type BorderStyleProperty = Globals | BrStyle | string;

export type BorderTopProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type BorderTopColorProperty = Globals | Color;

export type BorderTopLeftRadiusProperty<TLength> = Globals | TLength | string;

export type BorderTopRightRadiusProperty<TLength> = Globals | TLength | string;

export type BorderTopStyleProperty = Globals | BrStyle;

export type BorderTopWidthProperty<TLength> = Globals | BrWidth<TLength>;

export type BorderWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type BottomProperty<TLength> = Globals | TLength | "auto" | string;

export type BoxAlignProperty = Globals | "baseline" | "center" | "end" | "start" | "stretch";

export type BoxDecorationBreakProperty = Globals | "clone" | "slice";

export type BoxDirectionProperty = Globals | "inherit" | "normal" | "reverse";

export type BoxLinesProperty = Globals | "multiple" | "single";

export type BoxOrientProperty = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

export type BoxPackProperty = Globals | "center" | "end" | "justify" | "start";

export type BoxShadowProperty = Globals | "none" | string;

export type BoxSizingProperty = Globals | "border-box" | "content-box";

export type BreakAfterProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

export type BreakBeforeProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso";

export type BreakInsideProperty = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

export type CaptionSideProperty = Globals | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top";

export type CaretColorProperty = Globals | Color | "auto";

export type ClearProperty = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

export type ClipProperty = Globals | "auto" | string;

export type ClipPathProperty = Globals | GeometryBox | "none" | string;

export type ColorProperty = Globals | Color;

export type ColorAdjustProperty = Globals | "economy" | "exact";

export type ColumnCountProperty = Globals | "auto" | number;

export type ColumnFillProperty = Globals | "auto" | "balance" | "balance-all";

export type ColumnGapProperty<TLength> = Globals | TLength | "normal" | string;

export type ColumnRuleProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type ColumnRuleColorProperty = Globals | Color;

export type ColumnRuleStyleProperty = Globals | BrStyle | string;

export type ColumnRuleWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type ColumnSpanProperty = Globals | "all" | "none";

export type ColumnWidthProperty<TLength> = Globals | TLength | "auto";

export type ColumnsProperty<TLength> = Globals | TLength | "auto" | string | number;

export type ContainProperty = Globals | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | string;

export type ContentProperty = Globals | ContentList | "none" | "normal" | string;

export type CounterIncrementProperty = Globals | "none" | string;

export type CounterResetProperty = Globals | "none" | string;

export type CursorProperty =
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

export type DirectionProperty = Globals | "ltr" | "rtl";

export type DisplayProperty = Globals | DisplayOutside | DisplayInside | DisplayInternal | DisplayLegacy | "contents" | "list-item" | "none" | string;

export type EmptyCellsProperty = Globals | "hide" | "show";

export type FilterProperty = Globals | "none" | string;

export type FlexProperty<TLength> = Globals | TLength | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | "none" | string | number;

export type FlexBasisProperty<TLength> = Globals | TLength | "-webkit-auto" | "auto" | "available" | "content" | "fit-content" | "max-content" | "min-content" | string;

export type FlexDirectionProperty = Globals | "column" | "column-reverse" | "row" | "row-reverse";

export type FlexFlowProperty = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | string;

export type FlexWrapProperty = Globals | "nowrap" | "wrap" | "wrap-reverse";

export type FloatProperty = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

export type FontProperty = Globals | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | string;

export type FontFamilyProperty = Globals | GenericFamily | string;

export type FontFeatureSettingsProperty = Globals | "normal" | string;

export type FontKerningProperty = Globals | "auto" | "none" | "normal";

export type FontLanguageOverrideProperty = Globals | "normal" | string;

export type FontOpticalSizingProperty = Globals | "auto" | "none";

export type FontSizeProperty<TLength> = Globals | AbsoluteSize | TLength | "larger" | "smaller" | string;

export type FontSizeAdjustProperty = Globals | "none" | number;

export type FontStretchProperty = Globals | FontStretchAbsolute;

export type FontStyleProperty = Globals | "italic" | "normal" | "oblique" | string;

export type FontSynthesisProperty = Globals | "none" | "style" | "weight" | string;

export type FontVariantProperty =
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

export type FontVariantAlternatesProperty = Globals | "historical-forms" | "normal" | string;

export type FontVariantCapsProperty = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

export type FontVariantEastAsianProperty = Globals | EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | string;

export type FontVariantLigaturesProperty =
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

export type FontVariantNumericProperty =
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

export type FontVariantPositionProperty = Globals | "normal" | "sub" | "super";

export type FontVariationSettingsProperty = Globals | "normal" | string;

export type FontWeightProperty = Globals | FontWeightAbsolute | "bolder" | "lighter";

export type GapProperty<TLength> = Globals | TLength | "normal" | string;

export type GridProperty = Globals | "none" | string;

export type GridAreaProperty = Globals | GridLine | string;

export type GridAutoColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

export type GridAutoFlowProperty = Globals | "column" | "dense" | "row" | string;

export type GridAutoRowsProperty<TLength> = Globals | TrackBreadth<TLength> | string;

export type GridColumnProperty = Globals | GridLine | string;

export type GridColumnEndProperty = Globals | GridLine;

export type GridColumnGapProperty<TLength> = Globals | TLength | string;

export type GridColumnStartProperty = Globals | GridLine;

export type GridGapProperty<TLength> = Globals | TLength | string;

export type GridRowProperty = Globals | GridLine | string;

export type GridRowEndProperty = Globals | GridLine;

export type GridRowGapProperty<TLength> = Globals | TLength | string;

export type GridRowStartProperty = Globals | GridLine;

export type GridTemplateProperty = Globals | "none" | string;

export type GridTemplateAreasProperty = Globals | "none" | string;

export type GridTemplateColumnsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

export type GridTemplateRowsProperty<TLength> = Globals | TrackBreadth<TLength> | "none" | string;

export type HangingPunctuationProperty = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | string;

export type HeightProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

export type HyphensProperty = Globals | "auto" | "manual" | "none";

export type ImageOrientationProperty = Globals | "flip" | "from-image" | string;

export type ImageRenderingProperty = Globals | "-moz-crisp-edges" | "-o-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated";

export type ImageResolutionProperty = Globals | "from-image" | string;

export type ImeModeProperty = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

export type InitialLetterProperty = Globals | "normal" | string | number;

export type InitialLetterAlignProperty = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

export type InlineSizeProperty<TLength> = Globals | TLength | "auto" | "available" | "fit-content" | "max-content" | "min-content" | string;

export type IsolationProperty = Globals | "auto" | "isolate";

export type JustifyContentProperty = Globals | ContentDistribution | ContentPosition | "left" | "normal" | "right" | string;

export type JustifyItemsProperty = Globals | SelfPosition | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | string;

export type JustifySelfProperty = Globals | SelfPosition | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | string;

export type LeftProperty<TLength> = Globals | TLength | "auto" | string;

export type LetterSpacingProperty<TLength> = Globals | TLength | "normal";

export type LineBreakProperty = Globals | "auto" | "loose" | "normal" | "strict";

export type LineClampProperty = Globals | "none" | number;

export type LineHeightProperty<TLength> = Globals | TLength | "normal" | string | number;

export type LineHeightStepProperty<TLength> = Globals | TLength;

export type ListStyleProperty = Globals | "inside" | "none" | "outside" | string;

export type ListStyleImageProperty = Globals | "none" | string;

export type ListStylePositionProperty = Globals | "inside" | "outside";

export type ListStyleTypeProperty = Globals | "none" | string;

export type MarginProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginBottomProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginLeftProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginRightProperty<TLength> = Globals | TLength | "auto" | string;

export type MarginTopProperty<TLength> = Globals | TLength | "auto" | string;

export type MaskProperty<TLength> = Globals | MaskLayer<TLength> | string;

export type MaskBorderProperty = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | string | number;

export type MaskBorderModeProperty = Globals | "alpha" | "luminance";

export type MaskBorderOutsetProperty<TLength> = Globals | TLength | string | number;

export type MaskBorderRepeatProperty = Globals | "repeat" | "round" | "space" | "stretch" | string;

export type MaskBorderSliceProperty = Globals | string | number;

export type MaskBorderSourceProperty = Globals | "none" | string;

export type MaskBorderWidthProperty<TLength> = Globals | TLength | "auto" | string | number;

export type MaskClipProperty = Globals | GeometryBox | "no-clip" | string;

export type MaskCompositeProperty = Globals | CompositingOperator | string;

export type MaskImageProperty = Globals | "none" | string;

export type MaskModeProperty = Globals | MaskingMode | string;

export type MaskOriginProperty = Globals | GeometryBox | string;

export type MaskPositionProperty<TLength> = Globals | Position<TLength> | string;

export type MaskRepeatProperty = Globals | RepeatStyle | string;

export type MaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;

export type MaskTypeProperty = Globals | "alpha" | "luminance";

export type MaxBlockSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

export type MaxHeightProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

export type MaxInlineSizeProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

export type MaxLinesProperty = Globals | "none" | number;

export type MaxWidthProperty<TLength> = Globals | TLength | "fill-available" | "fit-content" | "max-content" | "min-content" | "none" | string;

export type MinBlockSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

export type MinHeightProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

export type MinInlineSizeProperty<TLength> = Globals | TLength | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

export type MinWidthProperty<TLength> = Globals | TLength | "-webkit-fill-available" | "auto" | "fill-available" | "fit-content" | "max-content" | "min-content" | string;

export type MixBlendModeProperty = Globals | BlendMode;

export type OffsetProperty<TLength> = Globals | Position<TLength> | GeometryBox | "auto" | "none" | string;

export type OffsetDistanceProperty<TLength> = Globals | TLength | string;

export type OffsetPathProperty = Globals | GeometryBox | "none" | string;

export type OffsetRotateProperty = Globals | "auto" | "reverse" | string;

export type ObjectFitProperty = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

export type ObjectPositionProperty<TLength> = Globals | Position<TLength>;

export type OffsetAnchorProperty<TLength> = Globals | Position<TLength> | "auto";

export type OffsetBlockEndProperty<TLength> = Globals | TLength | "auto" | string;

export type OffsetBlockStartProperty<TLength> = Globals | TLength | "auto" | string;

export type OffsetInlineEndProperty<TLength> = Globals | TLength | "auto" | string;

export type OffsetInlineStartProperty<TLength> = Globals | TLength | "auto" | string;

export type OffsetPositionProperty<TLength> = Globals | Position<TLength> | "auto";

export type OutlineProperty<TLength> = Globals | Color | BrStyle | BrWidth<TLength> | "auto" | "invert" | string;

export type OutlineColorProperty = Globals | Color | "invert";

export type OutlineOffsetProperty<TLength> = Globals | TLength;

export type OutlineStyleProperty = Globals | BrStyle | "auto";

export type OutlineWidthProperty<TLength> = Globals | BrWidth<TLength>;

export type OverflowProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

export type OverflowAnchorProperty = Globals | "auto" | "none";

export type OverflowBlockProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

export type OverflowClipBoxProperty = Globals | "content-box" | "padding-box";

export type OverflowInlineProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

export type OverflowWrapProperty = Globals | "break-word" | "normal";

export type OverflowXProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

export type OverflowYProperty = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible" | string;

export type OverscrollBehaviorProperty = Globals | "auto" | "contain" | "none" | string;

export type OverscrollBehaviorXProperty = Globals | "auto" | "contain" | "none";

export type OverscrollBehaviorYProperty = Globals | "auto" | "contain" | "none";

export type PaddingProperty<TLength> = Globals | TLength | string;

export type PaddingBlockEndProperty<TLength> = Globals | TLength | string;

export type PaddingBlockStartProperty<TLength> = Globals | TLength | string;

export type PaddingBottomProperty<TLength> = Globals | TLength | string;

export type PaddingInlineEndProperty<TLength> = Globals | TLength | string;

export type PaddingInlineStartProperty<TLength> = Globals | TLength | string;

export type PaddingLeftProperty<TLength> = Globals | TLength | string;

export type PaddingRightProperty<TLength> = Globals | TLength | string;

export type PaddingTopProperty<TLength> = Globals | TLength | string;

export type PageBreakAfterProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

export type PageBreakBeforeProperty = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

export type PageBreakInsideProperty = Globals | "auto" | "avoid";

export type PaintOrderProperty = Globals | "fill" | "markers" | "normal" | "stroke" | string;

export type PerspectiveProperty<TLength> = Globals | TLength | "none";

export type PerspectiveOriginProperty<TLength> = Globals | Position<TLength>;

export type PlaceContentProperty = Globals | ContentDistribution | ContentPosition | "baseline" | "normal" | string;

export type PointerEventsProperty = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

export type PositionProperty = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

export type QuotesProperty = Globals | "none" | string;

export type ResizeProperty = Globals | "both" | "horizontal" | "none" | "vertical";

export type RightProperty<TLength> = Globals | TLength | "auto" | string;

export type RotateProperty = Globals | "none" | string;

export type RowGapProperty<TLength> = Globals | TLength | "normal" | string;

export type RubyAlignProperty = Globals | "center" | "space-around" | "space-between" | "start";

export type RubyMergeProperty = Globals | "auto" | "collapse" | "separate";

export type RubyPositionProperty = Globals | "inter-character" | "over" | "under";

export type ScaleProperty = Globals | "none" | string | number;

export type ScrollBehaviorProperty = Globals | "auto" | "smooth";

export type ScrollSnapCoordinateProperty<TLength> = Globals | Position<TLength> | "none" | string;

export type ScrollSnapDestinationProperty<TLength> = Globals | Position<TLength>;

export type ScrollSnapPointsXProperty = Globals | "none" | string;

export type ScrollSnapPointsYProperty = Globals | "none" | string;

export type ScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

export type ScrollSnapTypeXProperty = Globals | "mandatory" | "none" | "proximity";

export type ScrollSnapTypeYProperty = Globals | "mandatory" | "none" | "proximity";

export type ShapeMarginProperty<TLength> = Globals | TLength | string;

export type ShapeOutsideProperty = Globals | Box | "margin-box" | "none" | string;

export type TabSizeProperty<TLength> = Globals | TLength | number;

export type TableLayoutProperty = Globals | "auto" | "fixed";

export type TextAlignProperty = Globals | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start";

export type TextAlignLastProperty = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

export type TextCombineUprightProperty = Globals | "all" | "digits" | "none" | string;

export type TextDecorationProperty = Globals | Color | "blink" | "dashed" | "dotted" | "double" | "line-through" | "none" | "overline" | "solid" | "underline" | "wavy" | string;

export type TextDecorationColorProperty = Globals | Color;

export type TextDecorationLineProperty = Globals | "blink" | "line-through" | "none" | "overline" | "underline" | string;

export type TextDecorationSkipProperty = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | string;

export type TextDecorationSkipInkProperty = Globals | "auto" | "none";

export type TextDecorationStyleProperty = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

export type TextEmphasisProperty = Globals | Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

export type TextEmphasisColorProperty = Globals | Color;

export type TextEmphasisStyleProperty = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | string;

export type TextIndentProperty<TLength> = Globals | TLength | string;

export type TextJustifyProperty = Globals | "auto" | "inter-character" | "inter-word" | "none";

export type TextOrientationProperty = Globals | "mixed" | "sideways" | "upright";

export type TextOverflowProperty = Globals | "clip" | "ellipsis" | string;

export type TextRenderingProperty = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

export type TextShadowProperty = Globals | "none" | string;

export type TextSizeAdjustProperty = Globals | "auto" | "none" | string;

export type TextTransformProperty = Globals | "capitalize" | "full-width" | "lowercase" | "none" | "uppercase";

export type TextUnderlinePositionProperty = Globals | "auto" | "left" | "right" | "under" | string;

export type TopProperty<TLength> = Globals | TLength | "auto" | string;

export type TouchActionProperty =
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

export type TransformProperty = Globals | "none" | string;

export type TransformBoxProperty = Globals | "border-box" | "fill-box" | "view-box";

export type TransformOriginProperty<TLength> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | string;

export type TransformStyleProperty = Globals | "flat" | "preserve-3d";

export type TransitionProperty = Globals | SingleTransition | string;

export type TransitionPropertyProperty = Globals | "all" | "none" | string;

export type TransitionTimingFunctionProperty = Globals | SingleTimingFunction | string;

export type TranslateProperty<TLength> = Globals | TLength | "none" | string;

export type UnicodeBidiProperty =
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

export type UserSelectProperty = Globals | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text";

export type VerticalAlignProperty<TLength> = Globals | TLength | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | string;

export type VisibilityProperty = Globals | "collapse" | "hidden" | "visible";

export type WhiteSpaceProperty = Globals | "-moz-pre-wrap" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";

export type WidthProperty<TLength> =
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

export type WillChangeProperty = Globals | AnimateableFeature | "auto" | string;

export type WordBreakProperty = Globals | "break-all" | "break-word" | "keep-all" | "normal";

export type WordSpacingProperty<TLength> = Globals | TLength | "normal" | string;

export type WordWrapProperty = Globals | "break-word" | "normal";

export type WritingModeProperty = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

export type ZIndexProperty = Globals | "auto" | number;

export type ZoomProperty = Globals | "normal" | "reset" | string | number;

export type MozAppearanceProperty =
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

export type MozBindingProperty = Globals | "none" | string;

export type MozBorderBottomColorsProperty = Globals | Color | "none" | string;

export type MozBorderLeftColorsProperty = Globals | Color | "none" | string;

export type MozBorderRightColorsProperty = Globals | Color | "none" | string;

export type MozBorderTopColorsProperty = Globals | Color | "none" | string;

export type MozContextPropertiesProperty = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | string;

export type MozFloatEdgeProperty = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

export type MozImageRegionProperty = Globals | "auto" | string;

export type MozOrientProperty = Globals | "block" | "horizontal" | "inline" | "vertical";

export type MozOutlineRadiusProperty<TLength> = Globals | TLength | string;

export type MozOutlineRadiusBottomleftProperty<TLength> = Globals | TLength | string;

export type MozOutlineRadiusBottomrightProperty<TLength> = Globals | TLength | string;

export type MozOutlineRadiusTopleftProperty<TLength> = Globals | TLength | string;

export type MozOutlineRadiusToprightProperty<TLength> = Globals | TLength | string;

export type MozStackSizingProperty = Globals | "ignore" | "stretch-to-fit";

export type MozTextBlinkProperty = Globals | "blink" | "none";

export type MozUserFocusProperty = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

export type MozUserInputProperty = Globals | "auto" | "disabled" | "enabled" | "none";

export type MozUserModifyProperty = Globals | "read-only" | "read-write" | "write-only";

export type MozWindowDraggingProperty = Globals | "drag" | "no-drag";

export type MozWindowShadowProperty = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

export type MsAcceleratorProperty = Globals | "false" | "true";

export type MsBlockProgressionProperty = Globals | "bt" | "lr" | "rl" | "tb";

export type MsContentZoomChainingProperty = Globals | "chained" | "none";

export type MsContentZoomSnapProperty = Globals | "mandatory" | "none" | "proximity" | string;

export type MsContentZoomSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

export type MsContentZoomingProperty = Globals | "none" | "zoom";

export type MsFlowFromProperty = Globals | "none" | string;

export type MsFlowIntoProperty = Globals | "none" | string;

export type MsHighContrastAdjustProperty = Globals | "auto" | "none";

export type MsHyphenateLimitCharsProperty = Globals | "auto" | string | number;

export type MsHyphenateLimitLinesProperty = Globals | "no-limit" | number;

export type MsHyphenateLimitZoneProperty<TLength> = Globals | TLength | string;

export type MsImeAlignProperty = Globals | "after" | "auto";

export type MsOverflowStyleProperty = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

export type MsScrollChainingProperty = Globals | "chained" | "none";

export type MsScrollLimitXMaxProperty<TLength> = Globals | TLength | "auto";

export type MsScrollLimitXMinProperty<TLength> = Globals | TLength;

export type MsScrollLimitYMaxProperty<TLength> = Globals | TLength | "auto";

export type MsScrollLimitYMinProperty<TLength> = Globals | TLength;

export type MsScrollRailsProperty = Globals | "none" | "railed";

export type MsScrollSnapTypeProperty = Globals | "mandatory" | "none" | "proximity";

export type MsScrollTranslationProperty = Globals | "none" | "vertical-to-horizontal";

export type MsScrollbar3dlightColorProperty = Globals | Color;

export type MsScrollbarArrowColorProperty = Globals | Color;

export type MsScrollbarBaseColorProperty = Globals | Color;

export type MsScrollbarDarkshadowColorProperty = Globals | Color;

export type MsScrollbarFaceColorProperty = Globals | Color;

export type MsScrollbarHighlightColorProperty = Globals | Color;

export type MsScrollbarShadowColorProperty = Globals | Color;

export type MsScrollbarTrackColorProperty = Globals | Color;

export type MsTextAutospaceProperty = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

export type MsTouchSelectProperty = Globals | "grippers" | "none";

export type MsUserSelectProperty = Globals | "element" | "none" | "text";

export type MsWrapFlowProperty = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

export type MsWrapMarginProperty<TLength> = Globals | TLength;

export type MsWrapThroughProperty = Globals | "none" | "wrap";

export type WebkitAppearanceProperty =
  | Globals
  | "button"
  | "button-bevel"
  | "caret"
  | "checkbox"
  | "default-button"
  | "inner-spin-button"
  | "listbox"
  | "listitem"
  | "media-controls-background"
  | "media-controls-fullscreen-background"
  | "media-current-time-display"
  | "media-enter-fullscreen-button"
  | "media-exit-fullscreen-button"
  | "media-fullscreen-button"
  | "media-mute-button"
  | "media-overlay-play-button"
  | "media-play-button"
  | "media-seek-back-button"
  | "media-seek-forward-button"
  | "media-slider"
  | "media-sliderthumb"
  | "media-time-remaining-display"
  | "media-toggle-closed-captions-button"
  | "media-volume-slider"
  | "media-volume-slider-container"
  | "media-volume-sliderthumb"
  | "menulist"
  | "menulist-button"
  | "menulist-text"
  | "menulist-textfield"
  | "meter"
  | "none"
  | "progress-bar"
  | "progress-bar-value"
  | "push-button"
  | "radio"
  | "searchfield"
  | "searchfield-cancel-button"
  | "searchfield-decoration"
  | "searchfield-results-button"
  | "searchfield-results-decoration"
  | "slider-horizontal"
  | "slider-vertical"
  | "sliderthumb-horizontal"
  | "sliderthumb-vertical"
  | "square-button"
  | "textarea"
  | "textfield";

export type WebkitBorderBeforeProperty<TLength> = Globals | BrWidth<TLength> | BrStyle | Color | string;

export type WebkitBorderBeforeColorProperty = Globals | Color;

export type WebkitBorderBeforeStyleProperty = Globals | BrStyle | string;

export type WebkitBorderBeforeWidthProperty<TLength> = Globals | BrWidth<TLength> | string;

export type WebkitBoxReflectProperty<TLength> = Globals | TLength | "above" | "below" | "left" | "right" | string;

export type WebkitLineClampProperty = Globals | "none" | number;

export type WebkitMaskProperty<TLength> = Globals | Position<TLength> | RepeatStyle | Box | "border" | "content" | "none" | "padding" | "text" | string;

export type WebkitMaskAttachmentProperty = Globals | Attachment | string;

export type WebkitMaskClipProperty = Globals | Box | "border" | "content" | "padding" | "text" | string;

export type WebkitMaskCompositeProperty = Globals | CompositeStyle | string;

export type WebkitMaskImageProperty = Globals | "none" | string;

export type WebkitMaskOriginProperty = Globals | Box | "border" | "content" | "padding" | string;

export type WebkitMaskPositionProperty<TLength> = Globals | Position<TLength> | string;

export type WebkitMaskPositionXProperty<TLength> = Globals | TLength | "center" | "left" | "right" | string;

export type WebkitMaskPositionYProperty<TLength> = Globals | TLength | "bottom" | "center" | "top" | string;

export type WebkitMaskRepeatProperty = Globals | RepeatStyle | string;

export type WebkitMaskRepeatXProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

export type WebkitMaskRepeatYProperty = Globals | "no-repeat" | "repeat" | "round" | "space";

export type WebkitMaskSizeProperty<TLength> = Globals | BgSize<TLength> | string;

export type WebkitOverflowScrollingProperty = Globals | "auto" | "touch";

export type WebkitTapHighlightColorProperty = Globals | Color;

export type WebkitTextFillColorProperty = Globals | Color;

export type WebkitTextStrokeProperty<TLength> = Globals | Color | TLength | string;

export type WebkitTextStrokeColorProperty = Globals | Color;

export type WebkitTextStrokeWidthProperty<TLength> = Globals | TLength;

export type WebkitTouchCalloutProperty = Globals | "default" | "none";

export type WebkitUserModifyProperty = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

export type AlignmentBaselineProperty =
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

export type BaselineShiftProperty<TLength> = Globals | TLength | "baseline" | "sub" | "super" | string;

export type ClipRuleProperty = Globals | "evenodd" | "nonzero";

export type ColorInterpolationProperty = Globals | "auto" | "linearRGB" | "sRGB";

export type ColorRenderingProperty = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

export type DominantBaselineProperty =
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

export type FillProperty = Globals | Paint;

export type FillRuleProperty = Globals | "evenodd" | "nonzero";

export type FloodColorProperty = Globals | Color | "currentColor";

export type GlyphOrientationVerticalProperty = Globals | "auto" | string | number;

export type LightingColorProperty = Globals | Color | "currentColor";

export type MarkerProperty = Globals | "none" | string;

export type MarkerEndProperty = Globals | "none" | string;

export type MarkerMidProperty = Globals | "none" | string;

export type MarkerStartProperty = Globals | "none" | string;

export type ShapeRenderingProperty = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

export type StopColorProperty = Globals | Color | "currentColor";

export type StrokeProperty = Globals | Paint;

export type StrokeDasharrayProperty<TLength> = Globals | Dasharray<TLength> | "none";

export type StrokeDashoffsetProperty<TLength> = Globals | TLength | string;

export type StrokeLinecapProperty = Globals | "butt" | "round" | "square";

export type StrokeLinejoinProperty = Globals | "bevel" | "miter" | "round";

export type StrokeWidthProperty<TLength> = Globals | TLength | string;

export type TextAnchorProperty = Globals | "end" | "middle" | "start";

export type VectorEffectProperty = Globals | "non-scaling-stroke" | "none";

type CounterStyleRangeProperty = "auto" | "infinite" | string | number;

type CounterStyleSpeakAsProperty = "auto" | "bullets" | "numbers" | "spell-out" | "words" | string;

type CounterStyleSystemProperty = "additive" | "alphabetic" | "cyclic" | "fixed" | "numeric" | "symbolic" | string;

type FontFaceFontFeatureSettingsProperty = "normal" | string;

type FontFaceFontDisplayProperty = "auto" | "block" | "fallback" | "optional" | "swap";

type FontFaceFontStretchProperty = FontStretchAbsolute | string;

type FontFaceFontStyleProperty = "italic" | "normal" | "oblique" | string;

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

type FontFaceFontVariationSettingsProperty = "normal" | string;

type FontFaceFontWeightProperty = FontWeightAbsolute | string;

type PageBleedProperty<TLength> = TLength | "auto";

type PageMarksProperty = "crop" | "cross" | "none" | string;

type ViewportHeightProperty<TLength> = ViewportLength<TLength> | string;

type ViewportMaxHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMaxZoomProperty = "auto" | string | number;

type ViewportMinHeightProperty<TLength> = ViewportLength<TLength>;

type ViewportMinWidthProperty<TLength> = ViewportLength<TLength>;

type ViewportMinZoomProperty = "auto" | string | number;

type ViewportOrientationProperty = "auto" | "landscape" | "portrait";

type ViewportUserZoomProperty = "-ms-zoom" | "fixed" | "zoom";

type ViewportWidthProperty<TLength> = ViewportLength<TLength> | string;

type ViewportZoomProperty = "auto" | string | number;

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

type FontStretchAbsolute =
  | "condensed"
  | "expanded"
  | "extra-condensed"
  | "extra-expanded"
  | "normal"
  | "semi-condensed"
  | "semi-expanded"
  | "ultra-condensed"
  | "ultra-expanded"
  | string;

type FontWeightAbsolute = "bold" | "normal" | number;

type GenericFamily = "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif";

type GeometryBox = Box | "fill-box" | "margin-box" | "stroke-box" | "view-box";

type GridLine = "auto" | string | number;

type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | string;

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
