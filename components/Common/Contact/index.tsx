import React from "react";
import Container from "../Container";
import Github from "../Icons/Github";
import LinkedIn from "../Icons/LinkedIn";
import Input from "../Input";
import Form from "./Form";

interface Props {}

const Contact = ({}: Props) => {
  return (
    <section id="contact">
      <Container className="flex flex-col md:flex-row gap-16 mb-10">
        <div>
          <h1 className="text-5xl font-bold mb-5 lg:text-6xl">Get In Touch!</h1>
          <p className="text-2xl lg:text-3xl mb-5">
            Whether you have an idea for a project or just want to say hi, feel free to contact me!
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/Arsh1a/" target="_blank" rel="noreferrer">
              <Github
                height={35}
                width={35}
                className="cursor-pointer hover:opacity-70 transition duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/arshia-faraji" target="_blank" rel="noreferrer">
              <LinkedIn
                height={35}
                width={35}
                className="cursor-pointer hover:opacity-70 transition duration-300"
              />
            </a>
          </div>
        </div>
        <Form />
      </Container>
    </section>
  );
};
export default Contact;
