import React from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import "../styles/global.css";
import "../styles/syntax.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Jack Leslie personal website" />
        <meta name="author" content="Jack Leslie" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          property="og:description"
          content="Graduate software engineer at Wise"
        />
        <meta property="og:title" content="Jack Leslie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
