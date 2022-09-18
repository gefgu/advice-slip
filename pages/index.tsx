import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface HomeProps {
  id?: number;
  advice?: string;
}

const Home: NextPage = ({ id, advice }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Slip</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.quoteBox}>
        <h2 className={styles.subHeading}>Advice #{id}</h2>
        <h1 className={styles.quote}>{`"${advice}"`}</h1>
        <Image src="/pattern-divider-desktop.svg" height={16} width={444} />
        <button className={styles.button}>
          <Image
            src="/icon-dice.svg"
            width={24}
            height={24}
            layout="responsive"
          />
        </button>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  return { props: { ...data.slip } };
};

export default Home;
