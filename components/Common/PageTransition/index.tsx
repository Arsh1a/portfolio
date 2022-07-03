import React from "react";
import { motion } from "framer-motion";
import { pageAnimationVariant } from "../../../utils/framer";

interface Props {
  children: React.ReactNode;
}

const PageTransition = ({ children }: Props) => {
  return (
    <motion.div
      variants={pageAnimationVariant}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
export default PageTransition;
