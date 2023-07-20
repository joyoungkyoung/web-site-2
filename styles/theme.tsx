import { createTheme } from '@mui/material';
import { Decimal, DecimalInline, SpoqaHanSans } from '@/fonts';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#feeb8f',
    },
    black: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: [SpoqaHanSans.style.fontFamily, Decimal.style.fontFamily, DecimalInline.style.fontFamily].join(','),
    h2: {
      fontSize: '46px',
    },
    h4: {
      fontSize: '24px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#13130A',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace: 'pre-wrap',
          wordBreak: 'keep-all',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          ':hover': {
            ':before': {
              borderWidth: '1px !important',
            },
          },
        },
      },
    },
  },
});
