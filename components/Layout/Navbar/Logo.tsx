import React, { ComponentPropsWithRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface Props extends ComponentPropsWithRef<any> {}

const Logo = React.forwardRef<any, Props>(function Logo({ ...rest }, ref) {
  return (
    <motion.h1
      whileHover="hovered"
      className="text-3xl uppercase space-x-3 tracking-widest leading-5 cursor-pointer relative"
      {...rest}
    >
      <span className="font-light text-neutral-400 text-lg">Arshia</span>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        variants={{
          hovered: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="h-1 w-1 bg-black absolute rounded-full right-4 bottom-6"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        variants={{
          hovered: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ delay: 0.1, type: "spring", bounce: 0.5 }}
        className="h-1 w-1 bg-black absolute rounded-full bottom-6"
        style={{ right: "4.5px" }}
      ></motion.div>
      <br />
      Faraji
    </motion.h1>
  );
});
export default Logo;
