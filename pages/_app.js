import React from 'react';
import '../styles/global.css';
import '../styles/syntax.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
