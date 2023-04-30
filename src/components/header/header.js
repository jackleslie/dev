import React from 'react';
import Link from 'next/link';

import styles from './header.module.css';
import { useToggle } from '../../hooks';

export default function Header({ title = '' }) {
  const [toggle] = useToggle();

  return (
    <article className={styles.header}>
      {title ? (
        <hgroup className={styles.path}>
          <Link href="/">

            <h1 className={styles.pathRoot}>Jack Leslie</h1>

          </Link>
          <Link href={`/${title.toLowerCase()}`}>

            <h1> / {title}</h1>

          </Link>
        </hgroup>
      ) : (
        (<Link href="/">

          <h1>Jack Leslie</h1>

        </Link>)
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
