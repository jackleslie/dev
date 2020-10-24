import React from 'react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Post({
  title = '',
  date = '',
  isTldr = false,
  slug = '/',
  children = null,
}) {
  return (
    <section className={styles.post}>
      <hgroup>
        {isTldr ? (
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <h3>{date}</h3>
      </hgroup>
      {isTldr ? (
        <p>
          <b>tl;dr: </b>
          {children}{' '}
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a>Read more</a>
          </Link>
        </p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: children }} />
      )}
    </section>
  );
}
