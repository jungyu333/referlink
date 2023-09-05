import { DefaultTheme } from 'styled-components';

const colors = {
  //main color
  primary1: '#028DE9',
  primary2: '#007AD6',

  //gray color
  gray1: '#605F5F59',
  gray2: '#605F5F',
  gray3: '#414040',
  gray4: '#201F1F',

  //black color
  black: '#000000',

  //white color
  white: '#FFFFFF',
};

export type TColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
