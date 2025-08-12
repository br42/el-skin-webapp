
// Override DefaultTheme to get accurate typings for your project.


// create styled-components.d.ts in your project source
// if it isn't being picked up, check tsconfig compilerOptions.types
import type { CSSProp } from 'styled-components';
import { theme } from 'styles/theme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    [prop : string|number|symbol]: unknown
  }
}

declare module 'react' {
  interface DOMAttributes<> {
    css?: CSSProp;
  }
}
