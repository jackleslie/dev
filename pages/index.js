import React from 'react';
import Link from 'next/link';
import { Layout } from '../components';

export default function Index() {
  return (
    <Layout siteTitle="Jack Leslie">
      <p>
        Final year Computer Science student at the University of St Andrews, frontend developer and
        JavaScript enthusiast.
      </p>
      <p>
        I was an intern at{' '}
        <a href="https://transferwise.com" className="transferwise">
          TransferWise
        </a>{' '}
        and will be returning as a graduate software engineer.
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
