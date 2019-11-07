import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Jack Leslie</title>
          <meta name="description" content="Jack Leslie personal website" />
          <meta
            name="keywords"
            content="Frontend,Student,Graduate,JavaScript"
          />
          <meta name="author" content="Jack Leslie" />
          <link rel="stylesheet" href="./style.css"></link>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-133938630-1"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
