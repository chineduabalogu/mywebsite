import type { AppProps } from "next/app";
import { AppWrapper } from "../context/state";

import "../styles/globals.css";
import "../styles/showmelove.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
