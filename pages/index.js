import React from "react";
import Head from "next/head";

import { useDarkMode } from "../hooks";

const Home = () => {
  const [dark, toggleDark] = useDarkMode();
  return (
    <main>
      <Head>
        <title>Home</title>
        <link rel="icon" href={dark ? "dark.ico" : "/light.ico"} />
        <link rel="stylesheet" href="./style.css"></link>
      </Head>

      <article>
        <h1>Jack Leslie</h1>
        <button
          aria-label="Toggle Theme"
          title="Toggle Theme"
          type="button"
          onClick={() => toggleDark(!dark)}
        >
          <div className="sun" />
          <div className={`moon ${dark ? "moonMoved" : ""}`} />
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

export default Home;
