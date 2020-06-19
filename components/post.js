import React from 'react';
import Link from 'next/link';

export default function Post({ title = '', date = '', summary = '', slug = '/', children = null }) {
  return (
    <section>
      <hgroup>
        <Link href={`/blog/${slug}`}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <h3>{date}</h3>
      </hgroup>
      {children || <p>{summary}</p>}
    </section>
  );
}
