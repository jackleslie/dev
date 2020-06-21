import React from 'react';
import matter from 'gray-matter';
import { Layout, Post } from '../../components';

export default function Blog({ posts = [] }) {
  return (
    <Layout siteTitle="Jack Leslie / Blog" pageTitle="Blog">
      {posts.map(({ title, date, summary, slug }) => (
        <Post key={slug} title={title} date={date} slug={slug} isSummary>
          {summary}
        </Post>
      ))}
    </Layout>
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
      const { title, date, summary } = document.data;
      return {
        title,
        date,
        summary,
        slug,
      };
    });

    return data;
  })(require.context('../../posts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
