import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import HomeMain from "../components/home";
import { useAppContext } from "../context/state";

const Home: NextPage = () => {
  const { theme }: any = useAppContext();

  return (
    <div className={`app-container ${theme}`}>
      <Head>
        <title>Nedu</title>
        <meta name="description" content="Ninja moves only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <HomeMain />
      </main>
    </div>
  );
};

export default Home;
