// @flow strict
import * as CSS from './';

const css: CSS.Properties<*> = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '1px',
  flexDirection: 'row',
  opacity: 1,
  top: '1px',
  fontWeight: 'normal',
  width: 0,
  height: '1px',
  MozAppearance: 'button',
  msOverflowStyle: 'scrollbar',
};

const cssWithFallbackValues: CSS.PropertiesFallback<*> = {
  flexGrow: [1],
  flexShrink: [1],
  flexBasis: ['1px'],
  flexDirection: ['row'],
  opacity: [1],
  top: ['1px'],
  fontWeight: ['normal'],
  width: [0],
  height: ['1px'],
  MozAppearance: ['button'],
  msOverflowStyle: ['scrollbar'],
};

const cssWithHyphenProperties: CSS.PropertiesHyphen<*> = {
  'flex-grow': 1,
  'flex-shrink': 0,
  'flex-basis': '1px',
  'flex-direction': 'row',
  opacity: 1,
  top: '1px',
  'font-weight': 'normal',
  width: 0,
  height: '1px',
  '-moz-appearance': 'button',
  '-ms-overflow-style': 'scrollbar',
};

const cssWithBothCamelAndHyphenProperties: {|
  ...CSS.Properties<*>,
  ...CSS.PropertiesHyphen<*>,
|} = {
  animation: '',
};

const atRuleFontFace: CSS.FontFace = {
  fontFamily: '',
  fontWeight: 'normal',
};

type X =
  | CSS.Globals
  | CSS.BorderColorProperty
  | CSS.BorderStyleProperty
  | CSS.BorderWidthProperty<string>
  | CSS.BorderBlockStartStyleProperty
  | CSS.BackgroundImageProperty
  | CSS.BackgroundPositionProperty<string>
  | CSS.BackgroundSizeProperty<string>
  | CSS.BackgroundRepeatProperty
  | CSS.BackgroundOriginProperty
  | CSS.BackgroundClipProperty
  | CSS.BackgroundAttachmentProperty
  | CSS.ColorProperty
  | CSS.WidthProperty<string>;
