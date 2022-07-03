import React from "react";
import Container from "../Common/Container";
import Project from "./Project";

interface Props {}

const Projects = ({}: Props) => {
  return (
    <section>
      <Container>
        <h1 className="text-4xl font-bold mb-1">Projects</h1>
        <p className="mb-16 text-xl sm:text-2xl">
          Developing open-source projects are a way for me to grow as a developer and to share my
          creations.
        </p>
        <div>
          <Project
            title="Bracker"
            description="An open source bug tracking system that helps you manage and deal with bugs
            easier and deliver great products on time. I've used MERN stack to build this project."
            image="/images/bracker.webp"
            technologies={["React", "Next.js", "TypeScript", "Redux", "Express.js", "MongoDB"]}
            url="https://bracker.ir/"
            github="https://github.com/Arsh1a/Bracker/"
          />
          <Project
            left
            title="Crypto Notifier"
            description="Crypto-notifier is a web application that notifies the user when a cryptocurrency
            price goes up by the defined amount using Cryptocompare.com API."
            image="/images/crypto.webp"
            technologies={["React", "TypeScript", "PWA"]}
            url="https://arsh1a.github.io/crypto-notifier/"
            github="https://github.com/Arsh1a/crypto-notifier"
          />
          <Project
            title="React Pearl"
            description="Pearl is a lightweight and modern React UI Component library that provides useful customizable components."
            image="/images/pearl.webp"
            technologies={["React", "TypeScript", "Storybook"]}
            url="https://arsh1a.github.io/react-pearl/"
            github="https://github.com/Arsh1a/react-pearl"
          />
        </div>
      </Container>
    </section>
  );
};
export default Projects;
