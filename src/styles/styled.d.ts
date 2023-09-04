import 'styled-components';
import { TColorsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: TColorsTypes;
  }
}
