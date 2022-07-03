import Image from "next/image";
import React, { useState } from "react";
import Menu from "../../../Common/Icons/Menu";
import { motion } from "framer-motion";
import Close from "../../../Common/Icons/Close";
import Link from "next/link";

interface Props {}

const MobileMenu = ({}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex md:hidden items-center">
      <Menu className="cursor-pointer" width={30} height={30} onClick={() => setIsOpen(true)} />
      <motion.div
        className="z-50 fixed opacity-0 h-full w-60 top-0 right-0 bg-neutral-100"
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.5,
        }}
        variants={{
          closed: {
            opacity: 0,
            x: 350,
          },
          open: {
            opacity: 1,
            x: 0,
          },
        }}
      >
        <div className="relative">
          <div className="text-xl absolute right-6 top-8 cursor-pointer">
            <Close height={30} width={30} onClick={() => setIsOpen(false)} />
          </div>
          <ul className="h-screen pt-20 flex flex-col gap-10 items-center text-2xl">
            <li
              className="cursor-pointer hover:opacity-50 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li
              className="cursor-pointer hover:opacity-50 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/projects" passHref>
                Projects
              </Link>
            </li>
            <li
              className="cursor-pointer hover:opacity-50 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/about" passHref>
                About
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
