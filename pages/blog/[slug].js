import React from 'react';
import { Converter } from 'showdown';
import { Layout, Post } from '../../components';

export default function BlogPost({ meta, body }) {
  const { title, date } = meta;

  return (
    <Layout siteTitle={title} pageTitle="Blog">
      <Post title={title} date={date}>
        {body}
      </Post>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const converter = new Converter({ metadata: true });
  const body = converter.makeHtml(content.default);
  const meta = converter.getMetadata();

  return {
    props: {
      meta,
      body,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();

    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
      return slug;
    });

    return data;
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
