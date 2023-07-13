import { Header, Footer, FixedWidget } from '@/components';
import '@/styles/globals.css';
import { theme } from '@/styles/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <FixedWidget />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
