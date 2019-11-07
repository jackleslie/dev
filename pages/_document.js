import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Jack Leslie personal website" />
          <meta
            name="keywords"
            content="Frontend,Student,Graduate,JavaScript"
          />
          <meta name="author" content="Jack Leslie" />
          <link rel="stylesheet" href="./style.css"></link>
          <link rel="icon" href="./favicon.ico" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-133938630-1"
          ></script>
        </Head>
        <body>
          <script
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: `
              ;(function () {
                try {
                  var isDark = window.localStorage.getItem('jackleslie-dark-mode')
                  if (isDark == 1) {
                    document.documentElement.classList.add('dark')
                  }
                } catch (err) {}
              })()
            `
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}