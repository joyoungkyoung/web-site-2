import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#feeb8f',
    },
  },
  typography: {
    fontFamily: ['Decimal', 'SpoqaHanSans', 'Sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#13130A',
        },
      },
    },
  },
});
