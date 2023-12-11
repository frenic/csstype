declare const META: unique symbol;
type Meta<T extends {}> = {
  readonly [META]?: T;
};

type Min1Items<T> = [T, ...T[]];
type Min2Items<T> = [T, T, ...T[]];

/**
 * MDN CSS data
 *
 * {@link https://github.com/mdn/data/tree/master/css}
 */
declare namespace MDN {
  /**
   * For short-hand properties, some fields on {@link Property} become a tuple
   * of long-hand properties that make up the short-hand value.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L3-L14}
   */
  type PropertyReference<
    Type,
    Field extends keyof Property,
    PropertyNames extends string | Min1Items<string> = keyof Properties & string,
  > =
    | Type
    | ((PropertyNames extends string ? Min1Items<PropertyNames> : PropertyNames) & Meta<{ type: Type; field: Field }>);

  type PropertyReferenceType<P extends any> = P extends Meta<{ type: infer Type }> ? Type : never;
  type PropertyReferenceField<P extends any> = P extends Meta<{ field: infer Field }> ? Field : never;

  type A = PropertyReference<'a' | 'b', 'animationType'>;
  type f = PropertyReferenceField<A>;
  type t = PropertyReferenceType<A>;

  /**
   * The standardization status of the feature.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L272-L279}
   */
  type Status = 'standard' | 'nonstandard' | 'experimental' | 'obsolete';

  /**
   * The MDN CSS docs organize individual features in modules like "CSS Fonts"
   * or "CSS Animations"
   *
   * {@link https://github.com/mdn/data/blob/master/css/definitions.json}
   */
  type Group =
    | 'Basic Selectors'
    | 'Combinators'
    | 'Compositing and Blending'
    | 'CSS Angles'
    | 'CSS Animations'
    | 'CSS Backgrounds and Borders'
    | 'CSS Box Model'
    | 'CSS Box Alignment'
    | 'CSS Break'
    | 'CSS Charsets'
    | 'CSS Color'
    | 'CSS Columns'
    | 'CSS Conditional Rules'
    | 'CSS Containment'
    | 'CSS Counter Styles'
    | 'CSS Device Adaptation'
    | 'CSS Display'
    | 'CSS Flexible Box Layout'
    | 'CSS Flexible Lengths'
    | 'CSS Fonts'
    | 'CSS Fragmentation'
    | 'CSS Frequencies'
    | 'CSS Generated Content'
    | 'CSS Grid Layout'
    | 'CSS Houdini'
    | 'CSS Images'
    | 'CSS Inline'
    | 'CSS Lengths'
    | 'CSS Lists and Counters'
    | 'CSS Logical Properties'
    | 'CSS Masking'
    | 'CSS Miscellaneous'
    | 'CSS Motion Path'
    | 'CSS Namespaces'
    | 'CSS Overflow'
    | 'CSS Pages'
    | 'CSS Positioning'
    | 'CSS Regions'
    | 'CSS Resolutions'
    | 'CSS Ruby'
    | 'CSS Scroll Anchoring'
    | 'CSS Scrollbars'
    | 'CSS Scroll Snap'
    | 'CSS Shadow Parts'
    | 'CSS Shapes'
    | 'CSS Speech'
    | 'CSS Table'
    | 'CSS Text'
    | 'CSS Text Decoration'
    | 'CSS Times'
    | 'CSS Transforms'
    | 'CSS Transitions'
    | 'CSS Types'
    | 'CSS Units'
    | 'CSS Basic User Interface'
    | 'CSS Variables'
    | 'CSS Will Change'
    | 'CSS Writing Modes'
    | 'CSSOM View'
    | 'Filter Effects'
    | 'Grouping Selectors'
    | 'MathML'
    | 'Media Queries'
    | 'Microsoft Extensions'
    | 'Mozilla Extensions'
    | 'Pointer Events'
    | 'Pseudo'
    | 'Pseudo-classes'
    | 'Pseudo-elements'
    | 'Selectors'
    | 'WebKit Extensions';

  /**
   * The media groups the property applies to.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L306-L336}
   */
  type Medium =
    | 'all'
    | 'aural'
    | 'continuous'
    | 'interactive'
    | 'none'
    | 'noPracticalMedia'
    | 'paged'
    | 'visual'
    | 'visualInContinuousMediaNoEffectInOverflowColumns';

  /**
   * The animation type of the property.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L15-L42}
   */
  type AnimationType =
    | 'angleBasicShapeOrPath'
    | 'angleOrBasicShapeOrPath'
    | 'basicShapeOtherwiseNo'
    | 'byComputedValueType'
    | 'color'
    | 'discrete'
    | 'eachOfShorthandPropertiesExceptUnicodeBiDiAndDirection'
    | 'filterList'
    | 'fontStretch'
    | 'fontWeight'
    | 'integer'
    | 'length'
    | 'lpc'
    | 'notAnimatable'
    | 'numberOrLength'
    | 'number'
    | 'position'
    | 'rectangle'
    | 'repeatableListOfSimpleListOfLpc'
    | 'shadowList'
    | 'simpleListOfLpc'
    | 'simpleListOfLpcDifferenceLpc'
    | 'transform'
    | 'visibility';

  /**
   * Defines what the percentage actually refers to when a percentage is set as
   * a value on the property. `"no"` means that the property can't accept a
   * percentage as a value.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L43-L89}
   */
  type Percentages =
    | 'blockSizeOfContainingBlock'
    | 'dependsOnLayoutModel'
    | 'inlineSizeOfContainingBlock'
    | 'lengthsAsPercentages'
    | 'logicalHeightOfContainingBlock'
    | 'logicalWidthOfContainingBlock'
    | 'logicalHeightOrWidthOfContainingBlock'
    | 'maxZoomFactor'
    | 'minZoomFactor'
    | 'no'
    | 'referToBorderBox'
    | 'referToContainingBlockHeight'
    | 'referToDimensionOfBorderBox'
    | 'referToDimensionOfContentArea'
    | 'referToElementFontSize'
    | 'referToFlexContainersInnerMainSize'
    | 'referToHeightOfBackgroundPositioningAreaMinusBackgroundImageHeight'
    | 'referToLineBoxWidth'
    | 'referToLineHeight'
    | 'referToParentElementsFontSize'
    | 'referToSizeOfBackgroundPositioningAreaMinusBackgroundImageSize'
    | 'referToSizeOfBorderImage'
    | 'referToSizeOfBoundingBox'
    | 'referToSizeOfContainingBlock'
    | 'referToSizeOfElement'
    | 'referToSizeOfFont'
    | 'referToSizeOfMaskBorderImage'
    | 'referToSizeOfMaskPaintingArea'
    | 'referToTotalPathLength'
    | 'referToWidthAndHeightOfElement'
    | 'referToWidthOfAffectedGlyph'
    | 'referToWidthOfBackgroundPositioningAreaMinusBackgroundImageHeight'
    | 'referToWidthOfContainingBlock'
    | 'referToWidthOrHeightOfBorderImageArea'
    | 'referToReferenceBoxWhenSpecifiedOtherwiseBorderBox'
    | 'regardingHeightOfGeneratedBoxContainingBlockPercentages0'
    | 'regardingHeightOfGeneratedBoxContainingBlockPercentagesNone'
    | 'regardingHeightOfGeneratedBoxContainingBlockPercentagesRelativeToContainingBlock'
    | 'relativeToBackgroundPositioningArea'
    | 'relativeToMaskBorderImageArea'
    | 'relativeToScrollContainerPaddingBoxAxis'
    | 'relativeToTheScrollContainersScrollport'
    | 'relativeToWidthAndHeight';

  /**
   * The computed value of the property.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L90-L159}
   */
  type Computed =
    | 'absoluteLength'
    | 'absoluteLength0ForNone'
    | 'absoluteLength0IfColumnRuleStyleNoneOrHidden'
    | 'absoluteLengthOr0IfBorderBottomStyleNoneOrHidden'
    | 'absoluteLengthOr0IfBorderLeftStyleNoneOrHidden'
    | 'absoluteLengthOr0IfBorderRightStyleNoneOrHidden'
    | 'absoluteLengthOr0IfBorderTopStyleNoneOrHidden'
    | 'absoluteLengthOrAsSpecified'
    | 'absoluteLengthOrKeyword'
    | 'absoluteLengthOrNone'
    | 'absoluteLengthOrNormal'
    | 'absoluteLengthOrPercentage'
    | 'absoluteLengthsSpecifiedColorAsSpecified'
    | 'absoluteLengthZeroIfBorderStyleNoneOrHidden'
    | 'absoluteLengthZeroOrLarger'
    | 'absoluteURIOrNone'
    | 'angleRoundedToNextQuarter'
    | 'asAutoOrColor'
    | 'asDefinedForBasicShapeWithAbsoluteURIOtherwiseAsSpecified'
    | 'asLength'
    | 'asSpecified'
    | 'asSpecifiedAppliesToEachProperty'
    | 'asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent'
    | 'asSpecifiedExceptMatchParent'
    | 'asSpecifiedExceptPositionedFloatingAndRootElementsKeywordMaybeDifferent'
    | 'asSpecifiedRelativeToAbsoluteLengths'
    | 'asSpecifiedURLsAbsolute'
    | 'asSpecifiedWithExceptionOfResolution'
    | 'asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn'
    | 'asSpecifiedWithVarsSubstituted'
    | 'autoOnAbsolutelyPositionedElementsValueOfAlignItemsOnParent'
    | 'autoOrRectangle'
    | 'colorPlusThreeAbsoluteLengths'
    | 'computedColor'
    | 'consistsOfTwoDimensionKeywords'
    | 'consistsOfTwoKeywordsForOriginAndOffsets'
    | 'forLengthAbsoluteValueOtherwisePercentage'
    | 'invertForTranslucentColorRGBAOtherwiseRGB'
    | 'keywordOrNumericalValueBolderLighterTransformedToRealValue'
    | 'keywordPlusIntegerIfDigits'
    | 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto'
    | 'listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin'
    | 'listEachItemHasTwoKeywordsOnePerDimension'
    | 'listEachItemTwoKeywordsOriginOffsets'
    | 'noneOrImageWithAbsoluteURI'
    | 'normalizedAngle'
    | 'normalOnElementsForPseudosNoneAbsoluteURIStringOrAsSpecified'
    | 'oneToFourPercentagesOrAbsoluteLengthsPlusFill'
    | 'optimumMinAndMaxValueOfAbsoluteLengthPercentageOrNormal'
    | 'optimumValueOfAbsoluteLengthOrNormal'
    | 'percentageAsSpecifiedAbsoluteLengthOrNone'
    | 'percentageAsSpecifiedOrAbsoluteLength'
    | 'percentageAutoOrAbsoluteLength'
    | 'percentageOrAbsoluteLengthPlusKeywords'
    | 'sameAsBoxOffsets'
    | 'sameAsMaxWidthAndMaxHeight'
    | 'sameAsMinWidthAndMinHeight'
    | 'sameAsWidthAndHeight'
    | 'specifiedIntegerOrAbsoluteLength'
    | 'specifiedValueClipped0To1'
    | 'specifiedValueNumberClipped0To1'
    | 'theComputedLength'
    | 'theKeywordListStyleImageNoneOrComputedValue'
    | 'translucentValuesRGBAOtherwiseRGB'
    | 'twoAbsoluteLengthOrPercentages'
    | 'twoAbsoluteLengths';

  /**
   * To which elements the property can be applied to.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L160-L247}
   */
  type AppliesTo =
    | 'absolutelyPositionedElements'
    | 'allElements'
    | 'allElementsAcceptingWidthOrHeight'
    | 'allElementsAndPseudos'
    | 'allElementsAndText'
    | 'allElementsButNonReplacedAndTableColumns'
    | 'allElementsButNonReplacedAndTableRows'
    | 'allElementsCreatingNativeWindows'
    | 'allElementsExceptGeneratedContentOrPseudoElements'
    | 'allElementsExceptInlineBoxesAndInternalRubyOrTableBoxes'
    | 'allElementsExceptInternalTableDisplayTypes'
    | 'allElementsExceptNonReplacedInlineElementsTableRowsColumnsRowColumnGroups'
    | 'allElementsExceptTableDisplayTypes'
    | 'allElementsExceptTableElementsWhenCollapse'
    | 'allElementsExceptTableRowColumnGroupsTableRowsColumns'
    | 'allElementsExceptTableRowGroupsRowsColumnGroupsAndColumns'
    | 'allElementsNoEffectIfDisplayNone'
    | 'allElementsSomeValuesNoEffectOnNonInlineElements'
    | 'allElementsSVGContainerElements'
    | 'allElementsSVGContainerGraphicsAndGraphicsReferencingElements'
    | 'allElementsThatCanReferenceImages'
    | 'allElementsTreeAbidingPseudoElementsPageMarginBoxes'
    | 'allElementsUAsNotRequiredWhenCollapse'
    | 'anyElementEffectOnProgressAndMeter'
    | 'beforeAndAfterPseudos'
    | 'blockContainerElements'
    | 'blockContainers'
    | 'blockContainersAndMultiColumnContainers'
    | 'blockContainersExceptMultiColumnContainers'
    | 'blockContainersExceptTableWrappers'
    | 'blockContainersFlexContainersGridContainers'
    | 'blockElementsInNormalFlow'
    | 'blockLevelElements'
    | 'blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems'
    | 'boxElements'
    | 'childrenOfBoxElements'
    | 'directChildrenOfElementsWithDisplayMozBoxMozInlineBox'
    | 'elementsForWhichLayoutContainmentCanApply'
    | 'elementsWithDisplayBoxOrInlineBox'
    | 'elementsWithDisplayMarker'
    | 'elementsWithDisplayMozBoxMozInlineBox'
    | 'elementsWithOverflowNotVisibleAndReplacedElements'
    | 'exclusionElements'
    | 'firstLetterPseudoElementsAndInlineLevelFirstChildren'
    | 'flexContainers'
    | 'flexItemsAndAbsolutelyPositionedFlexContainerChildren'
    | 'flexItemsAndInFlowPseudos'
    | 'flexItemsGridItemsAbsolutelyPositionedContainerChildren'
    | 'flexItemsGridItemsAndAbsolutelyPositionedBoxes'
    | 'floats'
    | 'gridContainers'
    | 'gridContainersWithMasonryLayout'
    | 'gridContainersWithMasonryLayoutInTheirBlockAxis'
    | 'gridContainersWithMasonryLayoutInTheirInlineAxis'
    | 'gridItemsAndBoxesWithinGridContainer'
    | 'iframeElements'
    | 'images'
    | 'inFlowBlockLevelElements'
    | 'inFlowChildrenOfBoxElements'
    | 'inlineLevelAndTableCellElements'
    | 'listItems'
    | 'maskElements'
    | 'multicolElements'
    | 'multiColumnElementsFlexContainersGridContainers'
    | 'multilineFlexContainers'
    | 'nonReplacedBlockAndInlineBlockElements'
    | 'nonReplacedBlockElements'
    | 'nonReplacedElements'
    | 'nonReplacedInlineElements'
    | 'positionedElements'
    | 'replacedElements'
    | 'rubyAnnotationsContainers'
    | 'rubyBasesAnnotationsBaseAnnotationContainers'
    | 'sameAsMargin'
    | 'sameAsWidthAndHeight'
    | 'scrollContainers'
    | 'scrollingBoxes'
    | 'tableCaptionElements'
    | 'tableCellElements'
    | 'tableElements'
    | 'textElements'
    | 'textFields'
    | 'transformableElements'
    | 'xulImageElements';

  /**
   * The canonical order for the property.
   *
   * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L260-L271}
   * {@link https://developer.mozilla.org/en-US/docs/Glossary/Canonical_order}
   */
  type Order =
    | 'canonicalOrder'
    | 'lengthOrPercentageBeforeKeywordIfBothPresent'
    | 'lengthOrPercentageBeforeKeywords'
    | 'oneOrTwoValuesLengthAbsoluteKeywordsPercentages'
    | 'orderOfAppearance'
    | 'percentagesOrLengthsFollowedByFill'
    | 'perGrammar'
    | 'uniqueOrder';

  /**
   * {@link https://github.com/mdn/data/blob/master/css/properties.md}
   * {@link https://github.com/mdn/data/blob/master/css/properties.schema.json}
   */
  interface Property {
    /**
     * This is the formal syntax of the property and is usually found in the
     * specification. It might contain references to {@link Syntax} data.
     *
     * @remarks
     * For more information see also
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax | Value definition syntax}
     * on MDN and the
     * {@link https://www.w3.org/TR/css3-values/#value-defs | CSS Values and Units}
     * specification.
     */
    syntax: string;

    /**
     * The media groups this property applies to, e.g. "all, visual" (multiple
     * values are comma-separated).
     *
     * {@link https://github.com/mdn/data/blob/v2.0.20/css/properties.schema.json#L306-L336}
     */
    media: Medium | Min2Items<'interactive' | 'paged' | 'visual'>;

    /**
     * Whether or not the property is inherited.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance}
     */
    inherited: boolean;

    /**
     * If it is a single enum value (appropriate for long-hand properties), this
     * is the animation type of the property.
     *
     * If it is an array (appropriate for short-hand properties), these are the
     * properties the animation type is taken from.
     */
    animationType: PropertyReference<AnimationType, 'animationType'>;

    /**
     * If it is a single enum value (appropriate for long-hand properties), this
     * defines what the percentage actually refers to when a percentage is set
     * as a value on the property. `"no"` means that the property can't accept a
     * percentage as a value.
     *
     * If it is an array (appropriate for short-hand properties), these are the
     * long-hand properties making up part of the short-hand value that
     * percentages can be set as values for.
     */
    percentages: PropertyReference<Percentages, 'percentages'>;

    /**
     * Contains the name of the module(s) the property is defined in.
     *
     * @remarks
     * CSS is organized in modules like "CSS Fonts" or "CSS Animations". MDN
     * organizes features in these groups as well.
     */
    groups: Min1Items<Group>;

    /**
     * If it is a string (appropriate for long-hand properties), this is the
     * initial value of the property.
     *
     * If it is an array (appropriate for short-hand properties), these are the
     * properties the initial value is taken from.
     */
    initial: PropertyReference<string, 'initial'>;

    /**
     * To which elements the property can be applied to.
     *
     * @see AppliesTo
     */
    appliesto: AppliesTo;

    /**
     * To which elements the property also applies to.
     */
    alsoAppliesTo?: Min1Items<'::first-letter' | '::first-line' | '::placeholder'>;

    /**
     * If it is a single enum value (appropriate for long-hand properties), this
     * is the computed value of the property.
     *
     * If it is an array (appropriate for short-hand properties), these are the
     * properties the value is computed from.
     *
     * @see Computed
     */
    computed: PropertyReference<Computed, 'computed'>;

    /**
     * The canonical order for the property.
     *
     * @see Order
     * {@link https://developer.mozilla.org/en-US/docs/Glossary/Canonical_order}
     */
    order: Order;

    /**
     * Whether or not the property creates a stacking context.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context}
     */
    stacking?: boolean;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;

    /**
     * A URL linking to the property's page on MDN.
     *
     * @remarks
     * This URL must omit the localization part of the URL (such as `en-US/`).
     */
    mdn_url?: `https://developer.mozilla.org/docs/${string}`;
  }

  /**
   * @see Property
   * {@link https://github.com/mdn/data/blob/master/css/properties.md}
   * {@link https://github.com/mdn/data/blob/master/css/properties.schema.json}
   */
  interface Properties {
    [property: string]: Property;
  }

  /**
   * {@link https://github.com/mdn/data/blob/master/css/syntaxes.md}
   * {@link https://github.com/mdn/data/blob/master/css/syntaxes.schema.json}
   */
  interface Syntax {
    /**
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax}
     * @see Types
     */
    syntax: string;
  }

  /**
   * @see Syntax
   * {@link https://github.com/mdn/data/blob/master/css/syntaxes.md}
   * {@link https://github.com/mdn/data/blob/master/css/syntaxes.schema.json}
   */
  interface Syntaxes {
    [property: string]: Syntax;
  }

  /**
   * CSS Selectors define which elements CSS rulesets will be applied to.
   *
   * {@link https://github.com/mdn/data/blob/master/css/selectors.md}
   * {@link https://github.com/mdn/data/blob/master/css/selectors.schema.json}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors}
   */
  interface Selector {
    /**
     * The syntax of the selector (e.g. `::after` with two colons indicating a
     * pseudo-element, `:hover` with one colon indicating a pseudo-class, or
     * `A ~ B` indicating a combinator).
     */
    syntax: string;

    /**
     * Contains the name of the module(s) the selector is defined in.
     *
     * @remarks
     * CSS is organized in modules like "CSS Units" or "CSS Lengths". MDN
     * organizes features in these groups as well.
     */
    groups: Min1Items<Group>;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;

    /**
     * A URL linking to the selector's page on MDN.
     *
     * @remarks
     * This URL must omit the localization part of the URL (such as `en-US/`).
     */
    mdn_url?: `https://developer.mozilla.org/docs/Web/CSS/${string}`;
  }

  /**
   * @see Selector
   * {@link https://github.com/mdn/data/blob/master/css/selectors.md}
   * {@link https://github.com/mdn/data/blob/master/css/selectors.schema.json}
   */
  interface Selectors {
    [selector: string]: Selector;
  }

  /**
   * CSS basic data types define the kinds of values (keywords and units)
   * accepted by CSS properties and functions.
   *
   * {@link https://github.com/mdn/data/blob/master/css/types.md}
   * {@link https://github.com/mdn/data/blob/master/css/types.schema.json}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types}
   */
  interface Type {
    /**
     * Contains the name of the module(s) the selector is defined in.
     *
     * @remarks
     * CSS is organized in modules like "CSS Types" or "CSS Colors". MDN
     * organizes features in these groups as well.
     */
    groups: Min1Items<Group>;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;

    /**
     * A URL linking to the type's page on MDN.
     *
     * @remarks
     * This URL must omit the localization part of the URL (such as `en-US/`).
     */
    mdn_url?: `https://developer.mozilla.org/docs/Web/CSS/${string}`;
  }

  /**
   * @see Type
   * {@link https://github.com/mdn/data/blob/master/css/types.md}
   * {@link https://github.com/mdn/data/blob/master/css/types.schema.json}
   */
  interface Types {
    [name: string]: any;
  }

  /**
   * Units are CSS units like `em` or `px`.
   *
   * @remarks
   * Most of them are defined in the
   * {@link https://drafts.csswg.org/css-values/ | CSS Values and Units specification}.
   *
   * {@link https://github.com/mdn/data/blob/master/css/units.md}
   * {@link https://github.com/mdn/data/blob/master/css/units.schema.json}
   */
  interface Unit {
    /**
     * Contains the name of the module(s) the unit is defined in.
     *
     * @remarks
     * CSS is organized in modules like "CSS Units" or "CSS Lengths". MDN
     * organizes features in these groups as well.
     */
    groups: Min1Items<Group>;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;
  }

  /**
   * @see Unit
   * {@link https://github.com/mdn/data/blob/master/css/units.md}
   * {@link https://github.com/mdn/data/blob/master/css/units.schema.json}
   */
  interface Units {
    [name: string]: any;
  }

  /**
   * @see AtRule
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.md}
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.schema.json}
   */
  interface Descriptor {
    /**
     * The syntax / possible values of the descriptor.
     */
    syntax: string;

    /**
     * The media groups this descriptor applies to, e.g. "all, visual" (multiple
     * values are comma-separated).
     *
     * {@link https://github.com/mdn/data/blob/v2.0.20/css/at-rules.schema.json#L54-L79}
     */
    media: 'all' | 'continuous' | 'paged' | 'visual' | Min2Items<'continuous' | 'paged' | 'visual'>;

    /**
     * If it is an array, the elements are the other descriptors this descriptor
     * is taking the percentages from. The array elements must be in the
     * {@link Descriptors} list.
     *
     * If it is a string, it indicates the percentage value of the descriptor.
     */
    percentages: string | Min1Items<string>;

    /**
     * If it is an array, the elements are the other descriptors this descriptor
     * is taking the initial values from. The array elements must be in the
     * {@link Descriptors} list
     *
     * If it is a string, it indicates the initial value of the descriptor.
     */
    initial: string | Min1Items<string>;

    /**
     * If it is an array, the elements are the other descriptors this descriptor
     * is computed from. The array elements must be in the {@link Descriptors}
     * list.
     *
     * If it is a string, it indicates the computed value of the descriptor.
     *
     * @see Computed
     */
    computed: Computed | Min1Items<Computed>;

    /**
     * The canonical order for the property.
     *
     * @see Order
     * {@link https://github.com/mdn/data/blob/v2.0.20/css/at-rules.schema.json#L89-L94}
     * {@link https://developer.mozilla.org/en-US/docs/Glossary/Canonical_order}
     */
    order: `orderOfAppearance` | `uniqueOrder`;

    /**
     * Whether or not the property creates a stacking context.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context}
     */
    stacking?: boolean;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;

    /**
     * A URL linking to the property's page on MDN.
     *
     * @remarks
     * This URL must omit the localization part of the URL (such as `en-US/`).
     */
    mdn_url?: `https://developer.mozilla.org/docs/${string}`;
  }

  /**
   * @see AtRule
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.md}
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.schema.json}
   */
  interface Descriptors {
    [descriptor: string]: Descriptor;
  }

  /**
   * An at-rule is a CSS statement beginning with an at sign (`@`) that
   * instructs CSS how to behave. There are several available identifiers
   * defining what CSS should do in certain situations.
   *
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.md}
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.schema.json}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule}
   */
  interface AtRule {
    /**
     * This is the formal syntax of the at-rule and is usually found in the
     * specification.
     */
    syntax: string;

    /**
     * Contains the name of the module(s) the at-rule is defined in.
     *
     * @remarks
     * CSS is organized in modules like "CSS Fonts" or "CSS Animations". MDN
     * organizes features in these groups as well.
     */
    groups: Min1Items<Group>;

    /**
     * The standardization status of the feature.
     *
     * @see Status
     */
    status: Status;

    /**
     * A URL linking to the at-rules's page on MDN.
     *
     * @remarks
     * This URL must omit the localization part of the URL (such as `en-US/`).
     */
    mdn_url?: `https://developer.mozilla.org/docs/Web/CSS/${string}`;

    /**
     * These are the CSSOM interfaces that belong to the at-rule.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model}
     */
    interfaces?: string[];

    /**
     * When included, contains one or more objects that describe the different
     * descriptors available on the at-rule.
     *
     * @see Descriptors
     * @see Descriptor
     */
    descriptors?: Descriptors;
  }

  /**
   * @see AtRule
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.md}
   * {@link https://github.com/mdn/data/blob/master/css/at-rules.schema.json}
   */
  interface AtRules {
    [name: string]: AtRule;
  }

  /**
   * {@link https://github.com/mdn/data/blob/master/l10n/css.json}
   */
  type L10N = {
    [key in Medium | AnimationType | Percentages | Computed | AppliesTo | Order]: {
      'en-US': string;
    };
  };
}

declare module 'mdn-data/css/properties.json' {
  var properties: MDN.Properties;
  export = properties;
}

declare module 'mdn-data/css/syntaxes.json' {
  var syntaxes: MDN.Syntaxes;
  export = syntaxes;
}

declare module 'mdn-data/css/selectors.json' {
  var selectors: MDN.Selectors;
  export = selectors;
}

declare module 'mdn-data/css/types.json' {
  var types: MDN.Types;
  export = types;
}

declare module 'mdn-data/css/at-rules.json' {
  var atRules: MDN.AtRules;
  export = atRules;
}

declare module 'mdn-data/l10n/css.json' {
  var l10n: MDN.L10N;
  export = l10n;
}
