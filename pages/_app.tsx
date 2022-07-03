import "../styles/globals.scss";
import "../styles/tailwind.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
