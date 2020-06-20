import React from 'react';
import Head from 'next/head';
import { Header, Post } from '../components';

export default function Blog() {
  return (
    <main>
      <Head>
        <title>Jack Leslie / Blog</title>
      </Head>

      <Header title="Blog" />

      <Post
        title="The Curious Case of PropTypes"
        date="20th June 2020"
        summary="PropTypes is one of the most popular NPM modules today, 
        but unknowlingly causes many packages to suffer from bloat. Why is
        this package end up in production code when it is only used for development?"
        slug="prop-types"
      />
    </main>
  );
}
