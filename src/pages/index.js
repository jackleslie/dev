import React from 'react';
import Link from 'next/link';
import { Layout } from '../components';

export default function Index() {
  return (
    <Layout siteTitle="Jack Leslie">
      <p>
        Software engineer at{' '}
        <a href="https://wise.com" className="wise">
          Wise
        </a>
        , working on the Business Growth product team.
      </p>
      <p>
        Sometimes I write about JavaScript and frontend development, you can read my posts on my{' '}
        <Link href="/blog">
          <a>blog</a>
        </Link>
        .
      </p>
      <p>
        If you want to get in touch you can{' '}
        <a href="mailto:jackleslie@protonmail.com" className="protonmail">
          email
        </a>{' '}
        me, and you can find me online through{' '}
        <a href="https://keybase.io/jackleslie" className="keybase">
          Keybase
        </a>
        .
      </p>
    </Layout>
  );
}
