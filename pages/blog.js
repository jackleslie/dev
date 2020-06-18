import React from 'react';
import Head from 'next/head';
import { Header } from '../components';

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Jack Leslie / Blog</title>
      </Head>

      <Header title="Blog" />

      <h2>The Curious Case of PropTypes</h2>

      <p>
        <a className="blog" href="https://github.com/facebook/prop-types">
          PropTypes
        </a>{' '}
        started off its life being exposed in the core React module, but has since been extracted
        into its own package. This has not slowed down popularity however, it is in the top 10 most
        depended on packages on NPM.
      </p>
    </main>
  );
}
