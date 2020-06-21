import React from 'react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Post({
  title = '',
  date = '',
  isSummary = false,
  slug = '/',
  children = null,
}) {
  return (
    <section className={styles.post}>
      <hgroup>
        {isSummary ? (
          <Link href={`/blog/${slug}`}>
            <a>
              <h2 className={styles.postTitle}>{title}</h2>
            </a>
          </Link>
        ) : (
          <h2 className={styles.postTitle}>{title}</h2>
        )}
        <h3>{date}</h3>
      </hgroup>
      {isSummary ? (
        <p>
          {children}{' '}
          <Link href={`/blog/${slug}`}>
            <a className="blog">Read more</a>
          </Link>
        </p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: children }} />
      )}
    </section>
  );
}
