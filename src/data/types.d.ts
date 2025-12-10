/**
 * An integer is one or more decimal digits, `0` through `9`, such as `1024` or
 * `-55`. An integer may be preceded by a `+` or `-` symbol, with no space
 * between the symbol and the integer.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#integers}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/integer}
 *
 * @note
 * This type actually permits any number, including decimals like `0.123`. Once
 * TypeScript template literal types support more sophisticated constraints,
 * this can be tightened.
 *
 * {@link https://github.com/microsoft/TypeScript/issues/41160}
 * {@link https://github.com/microsoft/TypeScript/issues/43505}
 */
export type Integer = `${number}`;

export type Zero = '0' | '-0' | '+0';

/**
 * A `<number>` represents a real number, which may or may not have a decimal
 * point with a fractional component, for example `0.255`, `128` or `-1.2`.
 * Numbers may also be preceded by a `+` or `-` symbol.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#numbers}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/number}
 */
export type Number = `${number}`;

/**
 * A `<percentage>` is a type that represents a fraction of some other value.
 *
 * Percentage values are always relative to another quantity, for example a
 * `<length>`. Each property that allows percentages also defines the quantity
 * to which the percentage refers. This quantity can be a value of another
 * property of the same element, the value of a property of an ancestor element,
 * a measurement of a containing block, or something else.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#percentages}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/percentage}
 */
export type Percentage<TNumber extends Number | number = Number> = `${TNumber}%`;

/**
 * A `<dimension>` is a `<number>` with a {@link Unit} attached to it, for
 * example `45deg`, `100ms`, or `10px`. The attached unit identifier is case
 * insensitive. There is never a space or any other characters between the
 * number and the unit identifier: i.e. `1 cm` is not valid.
 *
 * {@link https://develraoper.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#dimensions}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/dimension}
 */
export type Dimension<TUnit extends string = Unit, TNumber extends Number | number = Number> = `${TNumber}${TUnit}`;

/**
 * @see Dimension
 */
export type Unit = LengthUnit | AngleUnit | TimeUnit | FrequencyUnit | ResolutionUnit;

/**
 * Where a distance unit, also known as a length, is allowed as a value for a
 * property, this is described as the `<length>` type. There are two types of
 * lengths in CSS: relative and absolute.
 *
 * @remarks
 * When including a length value, if the length is `0`, the unit identifier is
 * not required. Otherwise, the unit identifier is required, is case
 * insensitive, and must come immediately after the numeric part of the value,
 * with no space in-between.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#distance_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type Length<TUnit extends LengthUnit, TNumber extends Number | number = Number> =
  | Dimension<TUnit, TNumber>
  | (`${TNumber}` & Zero);

/**
 * {@inheritDoc Length}
 * @see RelativeLengthUnit
 * @see AbsoluteLengthUnit
 */
export type LengthUnit = RelativeLengthUnit | AbsoluteLengthUnit;

/**
 * Relative length units specify a length in relation to something else. For
 * example, `em` is relative to the font size on the element and `vh` is
 * relative to the viewport height.
 *
 * @see Length
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#distance_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type RelativeLengthUnit = FontRelativeLengthUnit | ViewportPercentageLengthUnit;

/**
 * Font-relative lengths define the `<length>` value in terms of the size of a
 * particular character or font attribute in the font currently in effect in an
 * element or its parent.
 *
 * @see RelativeLengthUnit
 * @see Length
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#font-relative_lengths}
 */
export type FontRelativeLengthUnit = 'cap' | 'ch' | 'em' | 'ex' | 'ic' | 'lh' | 'rem' | 'rlh';

/**
 * Viewport-percentage lengths define the `<length>` value relative to the size
 * of the viewport, i.e., the visible portion of the document. Viewport lengths
 * are invalid in `@page` declaration blocks.
 *
 * @see RelativeLengthUnit
 * @see Length
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length#viewport-percentage_lengths}
 */
export type ViewportPercentageLengthUnit = 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';

/**
 * Absolute length units represent a physical measurement when the physical
 * properties of the output medium are known, such as for print layout. This is
 * done by anchoring one of the units to a physical unit, and then defining the
 * others relative to it. The anchor is done differently for low-resolution
 * devices, such as screens, versus high-resolution devices, such as printers.
 *
 * @remarks
 * For low-dpi devices, the unit `px` represents the physical _reference pixel_;
 * other units are defined relative to it. Thus, `1in` is defined as `96px`,
 * which equals `72pt`. The consequence of this definition is that on such
 * devices, dimensions described in inches (`in`), centimeters (`cm`), or
 * millimeters (`mm`) don't necessarily match the size of the physical unit with
 * the same name.
 *
 * For high-dpi devices, inches (`in`), centimeters (`cm`), and millimeters
 * (`mm`) are the same as their physical counterparts. Therefore, the `px` unit
 * is defined relative to them (1/96 of 1 inch).
 *
 * @see Length
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#distance_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length}
 */
export type AbsoluteLengthUnit = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'px';

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#angle_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/angle}
 */
export type Angle<TUnit extends AngleUnit, TNumber extends Number | number = Number> = Dimension<TUnit, TNumber>;

/**
 * {@inheritDoc Angle}
 */
export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn';

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#time_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time}
 */
export type Time<TUnit extends TimeUnit, TNumber extends Number | number = Number> = Dimension<TUnit, TNumber>;

/**
 * {@inheritDoc Time}
 */
export type TimeUnit = 's' | 'ms';

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#frequency_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/frequency}
 */
export type Frequency<TUnit extends FrequencyUnit, TNumber extends Number | number = Number> = Dimension<
  TUnit,
  TNumber
>;

/**
 * {@inheritDoc Frequency}
 */
export type FrequencyUnit = 'Hz' | 'kHz';

/**
 * Resolution units are represented by the type `<resolution>`. They represent
 * the size of a single dot in a graphical representation, such as a screen, by
 * indicating how many of these dots fit in a CSS inch, centimeter, or pixel.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#resolution_units}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/resolution}
 */
export type Resolution<TUnit extends ResolutionUnit, TNumber extends Number | number = Number> = Dimension<
  TUnit,
  TNumber
>;

/**
 * {@inheritDoc Resolution}
 */
export type ResolutionUnit = 'dpi' | 'dpcm' | 'dppx' | 'x';

/**
 * The `<length-percentage>` CSS data type represents a value that can be either
 * a {@link Length | `<length>`} or a {@link Percentage | `<percentage>`}.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#mixing_percentages_and_dimensions}
 */
export type LengthPercentage<TLength extends Length<any>, TPercentage extends Percentage> = TLength | TPercentage;

/**
 * The `<frequency-percentage>` CSS data type represents a value that can be
 * either a {@link Frequency | `<frequency>`} or a
 * {@link Percentage | `<percentage>`}.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/frequency-percentage}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#mixing_percentages_and_dimensions}
 */
export type FrequencyPercentage<TFrequency extends Frequency<any>, TPercentage extends Percentage> =
  | TFrequency
  | TPercentage;

/**
 * The `<angle-percentage>` CSS data type represents a value that can be either
 * an {@link Angle | `<angle>`} or a {@link Percentage | `<percentage>`}.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/angle-percentage}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#mixing_percentages_and_dimensions}
 */
export type AnglePercentage<TAngle extends Angle<any>, TPercentage extends Percentage> = TAngle | TPercentage;

/**
 * The `<time-percentage>` CSS data type represents a value that can be either a
 * {@link Time | `<time>`} or a {@link Percentage | `<percentage>`}.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/time-percentage}
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#mixing_percentages_and_dimensions}
 */
export type TimePercentage<TTime extends Time<any>, TPercentage extends Percentage> = TTime | TPercentage;

/**
 * The `<string>` CSS data type represents a sequence of characters. Strings are
 * used in numerous CSS properties, such as `content`, `font-family`, and
 * `quotes`.
 *
 * @note
 * The `<string>` data type is composed of any number of Unicode characters
 * surrounded by either double (`"`) or single (`'`) quotes. However, certain
 * characters must be escaped.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/string}
 */
export type String<T extends string> = `"${T}"` | `'${T}'`;

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions}
 */
export type Function<Name extends string, Params extends string> = `${Name}(${Params})`;

export namespace Function {
  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/url()}
   */
  export type url<T extends String<string> | (string & {})> = Function<'url', T>;
}
