import React from "react";
import Head from "next/head";
import classnames from "classnames";

import { useDarkMode } from "../hooks";

export default () => {
  const [dark, toggleDark] = useDarkMode();

  const themeColor = dark ? "#222222" : "#ffffff";
  const icon = dark ? "dark.ico" : "light.ico";

  return (
    <main>
      <Head>
        <meta name="theme-color" content={themeColor} />
        <link rel="icon" href={icon} />
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
          <div className={classnames("moon", { crescent: dark })} />
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
