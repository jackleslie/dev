import React from 'react';
import { Converter } from 'showdown';
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
      const content = values[index];
      const converter = new Converter({ metadata: true });
      converter.makeHtml(content.default);
      const { title, date, summary } = converter.getMetadata();

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
