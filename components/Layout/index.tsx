import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
