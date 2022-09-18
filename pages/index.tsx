import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Slip</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.quoteBox}>
        <h2>Advice #117</h2>
        <h1>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </h1>
      </main>
    </div>
  );
};

export default Home;
