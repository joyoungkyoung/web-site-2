import { Header, Footer, FixedWidget } from '@/components';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';
import { Decimal, DecimalInline, SpoqaHanSans } from '@/styles/fonts';

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={classNames(SpoqaHanSans.variable, Decimal.variable, DecimalInline.variable)}>
        <Header />
        <FixedWidget />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
