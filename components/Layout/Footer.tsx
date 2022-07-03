import { motion } from "framer-motion";
import React from "react";
import Container from "../Common/Container";
import Arrow from "../Common/Icons/Arrow";

interface Props {}

const Footer = ({}: Props) => {
  const goToTop = () => {
    console.log("Ive been pressed");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mb-6">
      <Container>
        <div className="flex gap-3 justify-center md:justify-between items-center bg-neutral-800 text-white py-6 px-12 rounded-2xl">
          <ul className="flex gap-2 sm:gap-4 text-sm sm:text-base">
            <li className="py-2 px-2 sm:px-6 cursor-pointer hover:bg-neutral-700 rounded-lg">
              <a href="mailto:arshiafaraji22@gmail.com">Email</a>
            </li>
            <li className="py-2 px-2 sm:px-6 cursor-pointer hover:bg-neutral-700 rounded-lg">
              <a href="https://github.com/Arsh1a/">Github</a>
            </li>
            <li className="py-2 px-2 sm:px-6 cursor-pointer hover:bg-neutral-700 rounded-lg">
              <a href="https://www.linkedin.com/in/arshia-faraji/">LinkedIn</a>
            </li>
          </ul>
          <div className="hidden md:flex cursor-pointer" onClick={goToTop}>
            <motion.div
              whileHover={{
                transition: { duration: 1, repeat: Infinity },
                y: [0, -10, 0],
              }}
            >
              <Arrow fill="white" height={25} width={25} />
            </motion.div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
