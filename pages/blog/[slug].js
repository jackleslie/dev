import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Layout, Post } from '../../components';

export default function BlogPost({ frontmatter, markdownBody }) {
  if (!frontmatter) {
    return <></>;
  }

  const { title, date } = frontmatter;

  return (
    <Layout siteTitle={title} pageTitle="Blog">
      <Post title={title} date={date}>
        <ReactMarkdown source={markdownBody} />
      </Post>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
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
