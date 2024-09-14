import React from "react";
import Link from "next/link";
import { Layout } from "../components";

export default function Index() {
  return (
    <Layout siteTitle="Jack Leslie">
      <p>
        I&apos;m a frontend developer at{" "}
        <a href="https://wise.com" className="wise">
          Wise
        </a>{" "}
        working in the Send Money product team. I also sometimes take photos;
        you can look at them on my <Link href="/gallery">gallery</Link>.
      </p>
      <p>
        If you want to get in touch you can{" "}
        <a href="mailto:jackjdleslie@gmail.com" className="gmail">
          email
        </a>{" "}
        me.
      </p>
    </Layout>
  );
}
