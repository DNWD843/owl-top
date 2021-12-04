import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return  {...initialProps};
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>My first NextJS app</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
