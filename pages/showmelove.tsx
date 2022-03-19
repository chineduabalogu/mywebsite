import type { NextPage } from "next";
import Head from "next/head";

import { useAppContext } from "../context/state";
import ShowMeLoveMain from "../components/show-me-love";

const ShowMelove: NextPage = () => {
  const { theme }: any = useAppContext();

  return (
    <div className={`sml-app-container ${theme}`}>
      <Head>
        <title>Show me love</title>
        <meta name="description" content="Show your boy some love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sml-container">
        <ShowMeLoveMain />
      </main>
    </div>
  );
};

export default ShowMelove;
