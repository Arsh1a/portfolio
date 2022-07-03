import React from "react";
import Container from "../Common/Container";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

const Hero = ({}: Props) => {
  return (
    <section className="mt-20">
      <Container className="relative">
        <div className="hero-blob absolute"></div>
        <AnimatePresence initial={true}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-80 md:h-96 flex items-center"
          >
            <h1 className="text-4xl md:text-6xl">
              I&apos;m Arshia Faraji, a front-end developer,
              <br />
              specialized in developing web interfaces and applications.
            </h1>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};
export default Hero;
