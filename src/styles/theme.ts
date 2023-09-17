import { DefaultTheme } from 'styled-components';

const colors = {
  //main color
  primary1: '#028DE9',
  primary2: '#007AD6',

  //gray color
  gray0: '#605F5F0D',
  gray1: '#605F5F59',
  gray2: '#605F5F',
  gray3: '#414040',
  gray4: '#201F1F',

  //black color
  black: '#000000',

  //white color
  white: '#FFFFFF',

  //error color
  error: '#D32F2F',
};

const fonts = {
  display: '700 48px/140% "Noto Sans KR", sans-serif',
  headline1: '700 34px/100% "Noto Sans KR", sans-serif',
  headline2: '700 24px/100% "Noto Sans KR", sans-serif',
  subtitle1: '700 20px/100% "Noto Sans KR", sans-serif',
  subtitle2: '400 18px/100% "Noto Sans KR", sans-serif',
  body: '400 16px/130% "Noto Sans KR", sans-serif',
  body2: '700 16px/100% "Noto Sans KR", sans-serif',
  caption: '400 13px/150% "Noto Sans KR", sans-serif',
};

export type TColorsTypes = typeof colors;
export type TFontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
