import { createTheme } from '@mui/material';

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
    fontFamily: ['Decimal', 'SpoqaHanSans', 'Sans-serif'].join(','),
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
  },
});
