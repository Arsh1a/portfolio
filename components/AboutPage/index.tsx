import React from "react";
import Contact from "../Common/Contact";
import Container from "../Common/Container";

interface Props {}

const About = ({}: Props) => {
  return (
    <section>
      <Container className="mb-16">
        <h1 className="text-4xl font-bold mb-1">About Me</h1>
        <p className="text-xl sm:text-2xl mb-5">
          I’m Arshia Faraji, a developer working on all things front-end and little bit of back-end.
          I have experience developing applications for the web, from simple landing pages to
          complex web applications. My focus is on creating engaging, accessible & performant
          interfaces for humans.
        </p>
        <p className="text-xl sm:text-2xl mb-5">
          Here are a few technologies I&apos;ve been working with recently:
        </p>
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <ul className="list-disc list-inside text-xl">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <ul className="list-disc list-inside text-xl">
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </Container>
      <Contact />
    </section>
  );
};
export default About;
