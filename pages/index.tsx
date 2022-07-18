import type { NextPage } from "next";
import PageTransition from "../components/Common/PageTransition";
import Contact from "../components/Common/Contact";
import Hero from "../components/MainPage/Hero";
import RecentProjects from "../components/MainPage/RecentProjects";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <PageTransition>
      <Head>
        <title>Arshia Faraji | Front-end developer</title>
        <meta name="title" content="Arshia Faraji | Front-end developer" />
        <meta
          name="description"
          content="Arshia Faraji is a front-end developer, specialized in developing web interfaces and applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://afaraji.ir/" />
        <meta property="og:title" content="Arshia Faraji | Front-end developer" />
        <meta
          property="og:description"
          content="Arshia Faraji is a front-end developer, specialized in developing web interfaces and applications."
        />

        <meta property="twitter:url" content="https://afaraji.ir/" />
        <meta property="twitter:title" content="Arshia Faraji | Front-end developer" />
        <meta
          property="twitter:description"
          content="Arshia Faraji is a front-end developer, specialized in developing web interfaces and applications."
        />
      </Head>
      <Hero />
      <RecentProjects />
      <Contact />
    </PageTransition>
  );
};

export default Home;
