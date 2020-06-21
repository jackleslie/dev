import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Jack Leslie personal website" />
          <meta name="author" content="Jack Leslie" />
          <meta property="og:image" content="/favicon.ico" />
          <meta
            property="og:description"
            content="Final year Computer Science student at the University of St Andrews, frontend developer and JavaScript enthusiast."
          />
          <meta property="og:title" content="Jack Leslie" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <script
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{
              __html: `
              ;(function () {
                try {
                  var storedDarkMode = window.localStorage.getItem('jackleslie-dark-mode') == 1
                  var systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
                  var emptyStorage = window.localStorage.length === 0
                  var isDark = storedDarkMode || (emptyStorage && systemDarkMode)
                  if (isDark) {
                    document.documentElement.classList.add('dark')
                  }
                  window.localStorage.setItem('jackleslie-dark-mode', Number(isDark));
                } catch (err) {}
              })()
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
