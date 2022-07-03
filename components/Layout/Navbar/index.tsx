import React, { useState } from "react";
import Container from "../../Common/Container";
import Link from "next/link";
import Button from "../../Common/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

interface Props {}

const Navbar = ({}: Props) => {
  return (
    <nav>
      <Container className="flex justify-between align-middle">
        <Link href="/" passHref>
          <Logo />
        </Link>
        <MobileMenu />
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li>
            <Link href="/" passHref>
              <a className="hover:bg-neutral-100 px-6 py-3 rounded-xl">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              <a className="hover:bg-neutral-100 px-6 py-3 rounded-xl">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className="hover:bg-neutral-100 px-6 py-3 rounded-xl">About</a>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default Navbar;
