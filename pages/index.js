import React from "react";
import Head from "next/head";
import "./style.css";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <article>
        <h1>Jack Leslie</h1>
        <p>
          Final year Computer Science student at the University of St Andrews,
          Frontend developer and JavaScript enthusiast.
        </p>
        <p>
          Incoming graduate Fullstack developer at{" "}
          <a href="https://transferwise.com" target="_blank">
            TransferWise
          </a>
          . You can find me on GitHub, Twitter, Keybase and you can reach out by
          email.
        </p>
      </article>
    </main>
  </div>
);

export default Home;
