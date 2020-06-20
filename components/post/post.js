import React from 'react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Post({ title = '', date = '', summary = '', slug = '/', children = null }) {
  return (
    <section className={styles.post}>
      <hgroup>
        {summary ? (
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
      {children || <p>{summary}</p>}
    </section>
  );
}
