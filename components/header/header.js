import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function Header({ title = '' }) {
  const toggle = () => {
    const isDark = window.localStorage.getItem('jackleslie-dark-mode') != 0;
    window.localStorage.setItem('jackleslie-dark-mode', isDark ? 0 : 1);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <article>
      {title ? (
        <hgroup className={styles.path}>
          <Link href="/">
            <a>
              <h1 className={styles.pathRoot}>Jack Leslie</h1>
            </a>
          </Link>
          <Link href={`/${title.toLowerCase()}`}>
            <a>
              <h1> / {title}</h1>
            </a>
          </Link>
        </hgroup>
      ) : (
        <Link href="/">
          <a>
            <h1>Jack Leslie</h1>
          </a>
        </Link>
      )}

      <button
        className={styles.toggle}
        aria-label="Toggle Theme"
        title="Toggle Theme"
        type="button"
        onClick={toggle}
      >
        <div aria-label="Sun" className={styles.sun} />
        <div aria-label="Moon" className={styles.moon} />
      </button>
    </article>
  );
}
