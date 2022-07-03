import Image from "next/image";
import React from "react";
import Github from "../../Common/Icons/Github";
import NewTab from "../../Common/Icons/NewTab";
import { motion, AnimatePresence } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: React.ReactNode;
  className: string;
  url: string;
  github?: string;
}

const RecentProject = ({ title, description, className = "", url, github, ...rest }: Props) => {
  return (
    <AnimatePresence initial={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        className={
          "w-full text-white sm:h-80 rounded-xl flex flex-col justify-center p-10 gap-3 " +
          className
        }
      >
        <h3 className="text-4xl font-bold">{title}</h3>
        {description}
        <div className="flex gap-5">
          <a
            className="hover:opacity-70 transition duration-300"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <NewTab fill="white" />
          </a>
          {github && (
            <a
              className="hover:opacity-70 transition duration-300"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Github fill="white" />
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default RecentProject;
