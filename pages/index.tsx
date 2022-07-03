import type { NextPage } from "next";
import PageTransition from "../components/Common/PageTransition";
import Contact from "../components/Common/Contact";
import Hero from "../components/MainPage/Hero";
import RecentProjects from "../components/MainPage/RecentProjects";

const Home: NextPage = () => {
  return (
    <PageTransition>
      <Hero />
      <RecentProjects />
      <Contact />
    </PageTransition>
  );
};

export default Home;
