import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import styles from './layout.module.css';

export default function Layout({ siteTitle = '', pageTitle = '', children = null }) {
  return (
    <main className={styles.layout}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header title={pageTitle} />

      {children}
    </main>
  );
}
