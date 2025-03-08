"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motions/montion";
import { LibrariesAndFrameworks, ProgrammingLanguages, DeveloperTools } from "@/utils/constants/constants";
import SkillsHeader from "./skills-header";
import SkillCard from "./skills-card";

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="skills"
      className="flex flex-col items-center py-10 sm:py-16 md:py-20 relative z-50 min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <SkillsHeader />

      {/* Skills Grid Container */}
      <div className="w-full max-w-6xl mx-auto grid gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
        {/* Frameworks/Libraries */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="skill-category-container"
        >
          <h3 className="text-lg sm:text-xl font-mono mb-3 sm:mb-4 text-purple-400 px-2">Frameworks/Libraries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {LibrariesAndFrameworks.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Languages & Others */}
        <motion.div
          variants={slideInFromRight(0.3)}
          className="skill-category-container"
        >
          <h3 className="text-lg sm:text-xl font-mono mb-3 sm:mb-4 text-green-400 px-2">Languages & Others</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {ProgrammingLanguages.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>
        </motion.div>

        {/* Developer Tools */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="skill-category-container"
        >
          <h3 className="text-lg sm:text-xl font-mono mb-3 sm:mb-4 text-blue-400 px-2">Developer Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {DeveloperTools.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>
    </motion.section>
  );
};

export default Skills;
