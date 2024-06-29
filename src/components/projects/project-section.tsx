"use client";
import React from "react";
import ProjectCard from "./project-card";
import { projectData } from "@/utils/constants/projects-tech";
import ProjectHeader from "./project-header";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-20 min-h-max pt-28"
      id="projects"
    >
      <ProjectHeader />
      <div className="h-max my-2 py-12 justify-center w-full flex flex-col flex-wrap gap-36 md:gap-0 md:flex-row items-center">
        {projectData.map((data: any) => {
          return (
            <ProjectCard
              key={data.id}
              title={data.title}
              linkTitle={data.linkTitle}
              des={data.des}
              imgSrc={data.img}
              link={data.link}
              tech_stack={data.tech}
              time={data.time}
            />
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
