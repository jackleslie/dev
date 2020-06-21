import React from 'react';
import Head from 'next/head';
import matter from 'gray-matter';
import { Header, Post } from '../components';

export default function Blog({ posts = [] }) {
  return (
    <main>
      <Head>
        <title>Jack Leslie / Blog</title>
      </Head>

      <Header title="Blog" />

      {posts.map(({ frontmatter, slug }) => (
        <Post title={frontmatter.title} date={frontmatter.date} slug={slug} isSummary>
          {frontmatter.summary}
        </Post>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
