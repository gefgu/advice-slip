import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";
import { motion } from "framer-motion";

interface HomeProps {
  id?: number;
  advice?: string;
}

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data } = useSWR("https://api.adviceslip.com/advice", fetcher);

  const advice: HomeProps | undefined = data?.slip;

  return (
    <div className={styles.container}>
      <Head>
        <title>Advice Slip</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.quoteBox}>
        <h2 className={styles.subHeading}>Advice #{advice?.id}</h2>
        <h1 className={styles.quote}>{data?.slip && `"${advice?.advice}"`}</h1>
        <Image src="/pattern-divider-desktop.svg" height={16} width={444} />
        <motion.button
          className={styles.button}
          whileHover={{ rotate: 180, transition: { duration: 1 } }}
          whileTap={{ scale: 1.2, transition: { duration: 1 } }}
        >
          <Image
            src="/icon-dice.svg"
            width={24}
            height={24}
            layout="responsive"
          />
        </motion.button>
      </main>
    </div>
  );
};

export default Home;
