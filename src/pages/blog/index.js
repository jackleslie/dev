import React from 'react';
import { Converter } from 'showdown';
import { Layout, Post } from '../../components';

export default function Blog({ posts = [] }) {
  return (
    <Layout siteTitle="Jack Leslie / Blog" pageTitle="Blog">
      {posts.map(({ title, date, tldr, slug }) => (
        <Post key={slug} title={title} date={date} slug={slug} isTldr>
          {tldr}
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
      const { title, date, tldr } = converter.getMetadata();

      return {
        title,
        date,
        tldr,
        slug,
      };
    });

    return data.sort((a, b) => new Date(b.date) - new Date(a.date));
  })(require.context('../../../posts', true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
