import { Header, Footer, FixedWidget } from '@/components';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      duration: 400,
      delay: 0,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <FixedWidget />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
