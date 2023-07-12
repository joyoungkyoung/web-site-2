import _Doc, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />),
    });

  const initialProps = await _Doc.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};
