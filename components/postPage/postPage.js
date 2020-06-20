import React from 'react';
import Head from 'next/head';
import Header from '../header/header';
import Post from '../post/post';

export default function PostPage({ title = '', date = '', children = null }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <Header title="Blog" />

      <Post title={title} date={date}>
        {children}
      </Post>
    </main>
  );
}
