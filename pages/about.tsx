import type { NextPage } from "next";
import About from "../components/AboutPage";
import PageTransition from "../components/Common/PageTransition";

const ProjectsPage: NextPage = () => {
  return (
    <PageTransition>
      <About />
    </PageTransition>
  );
};

export default ProjectsPage;
