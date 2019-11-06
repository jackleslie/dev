import React from "react";
import Head from "next/head";
import classnames from "classnames";

import { useDarkMode } from "../hooks";

export default () => {
  const [dark, toggleDark] = useDarkMode();
  return (
    <main>
      <Head>
        <title>Jack Leslie</title>
        <link rel="icon" href={dark ? "dark.ico" : "light.ico"} />
        <link rel="stylesheet" href="./style.css"></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-133938630-1"
        ></script>
      </Head>

      <article>
        <h1>Jack Leslie</h1>
        <button
          aria-label="Toggle Theme"
          title="Toggle Theme"
          type="button"
          onClick={toggleDark}
        >
          <div className="sun" />
          <div className={classnames("moon", { moonMoved: dark })} />
        </button>
      </article>

      <p>
        Final year Computer Science student at the University of St Andrews,
        Frontend developer and JavaScript enthusiast.
      </p>
      <p>
        I was an intern at{" "}
        <a href="https://transferwise.com" className="transferwise">
          TransferWise
        </a>{" "}
        and will be returning as a graduate Fullstack developer.
      </p>
      <p>
        If you want to get in touch you can{" "}
        <a href="mailto:jackleslie@protonmail.com" className="protonmail">
          email
        </a>{" "}
        me, and you can find me online through{" "}
        <a href="https://keybase.io/jackleslie" className="keybase">
          Keybase
        </a>
        .
      </p>
    </main>
  );
};
