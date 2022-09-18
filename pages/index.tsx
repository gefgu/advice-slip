import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Slip</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.quoteBox}>
        <h2 className={styles.subHeading}>Advice #117</h2>
        <h1 className={styles.quote}>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </h1>
        <Image src="/pattern-divider-desktop.svg" height={16} width={444} />
        <button className={styles.button}><Image src="/icon-dice.svg" width={24} height={24} layout="responsive"/></button>
      </main>
    </div>
  );
};

export default Home;
