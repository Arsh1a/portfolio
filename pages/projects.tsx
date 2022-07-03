import type { NextPage } from "next";
import PageTransition from "../components/Common/PageTransition";
import Projects from "../components/ProjectsPage";

const ProjectsPage: NextPage = () => {
  return (
    <PageTransition>
      <Projects />
    </PageTransition>
  );
};

export default ProjectsPage;
