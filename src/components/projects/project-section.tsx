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
      className="flex flex-col items-center justify-center py-20 min-h-screen relative"
      id="projects"
    >
      <ProjectHeader />

      <div className="h-max w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projectData.map((data: any, index: number) => (
            <ProjectCard
              key={data.id}
              {...data}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full filter blur-[128px]" />
      </div>
    </motion.section>
  );
};

export default Projects;
