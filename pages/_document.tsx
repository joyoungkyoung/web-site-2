import _Doc, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import { Decimal, DecimalInline, SpoqaHanSans } from '@/styles/fonts';
import classNames from 'classnames';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={classNames(SpoqaHanSans.variable, Decimal.variable, DecimalInline.variable)}>
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
