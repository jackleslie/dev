import React from 'react';
import Head from 'next/head';
import Header from '../header/header';

export default function Layout({ siteTitle = '', pageTitle = '', children = null }) {
  return (
    <main>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header title={pageTitle} />

      {children}
    </main>
  );
}
