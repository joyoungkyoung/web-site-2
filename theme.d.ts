import { Theme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }
  interface PaletteOptions {
    black: PaletteOptions['palette'];
  }
  export function createTheme(options: ThemeOptions): Theme;
}

declare module '@mui/material' {
  interface TextFieldPropsColorOverrides {
    black: true;
  }

  interface ButtonPropsColorOverrides {
    black: true;
  }
}
