import React from "react";
import Image from "next/image";
import NewTab from "../Common/Icons/NewTab";
import Github from "../Common/Icons/Github";

interface Props {
  left?: boolean;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
  github?: string;
}

const Project = ({ left, title, description, image, technologies, url, github }: Props) => {
  return (
    <div className={`mb-20 flex flex-col lg:flex-row ${left && "lg:flex-row-reverse"}`}>
      <div className="shadow-lg w-full mb-6">
        <Image src={image} alt={title} height={870} width={1920} layout="responsive" />
      </div>
      <div
        className={`flex lg:w-3/5 flex-col lg:-ml-8 z-10 gap-4 ${
          left ? "lg:text-left lg:ml-0 lg:-mr-8" : "lg:text-right"
        }`}
      >
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="bg-neutral-100 p-6 rounded-xl">{description}</p>
        <ul
          className={`flex gap-4 italic font-medium flex-wrap md:flex-nowrap ${
            left ? "lg:justify-start" : "lg:justify-end"
          }`}
        >
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className={`flex gap-5 ${left ? "lg:justify-start" : "lg:justify-end"}`}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:opacity-70 transition duration-300"
          >
            <NewTab />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:opacity-70 transition duration-300"
          >
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
