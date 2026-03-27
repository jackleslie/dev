import React from "react";
import { Layout } from "../components/layout/layout";

export default function Index() {
  return (
    <Layout>
      <p>
        I&apos;m a senior software engineer at{' '}
        <a href="https://wise.com" className="wise">
          Wise
        </a>{' '}
        working in the Send product team. If you want to get in touch you can{' '}
        <a href="mailto:info@jackleslie.dev" className="gmail">
          email
        </a>{' '}
        me.
      </p>
    </Layout>
  );
}
