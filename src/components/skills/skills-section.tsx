"use client";
import {
  Backend_skill,
  Backend_skillCard,
  Frontend_skill,
  Frontend_skillCard,
  Languages,
  Other_skill,
} from "@/utils/constants/constants";
import React from "react";
import SkillsHeader from "./skills-header";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motions/montion";
import ThreeDCardDemo from "./skills-card";

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="skills"
      className="flex flex-col items-center py-16 md:py-0 md:justify-center md:gap-3  relative z-50 h-screen"
      style={{ transform: "scale(0.9" }}
    >
      <SkillsHeader />

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="hidden md:flex flex-row gap-6 items-center justify-center mb-2 w-full z-50 "
      >
        <AnimatedTooltip items={Frontend_skill} />
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden md:flex flex-row gap-6 items-center justify-center mb-2 w-full z-50"
      >
        <AnimatedTooltip items={Other_skill} />
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="hidden md:flex flex-row gap-6 items-center justify-center mb-2 w-full z-50"
      >
        <AnimatedTooltip items={Backend_skill} />
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden md:flex flex-row gap-6 items-center justify-center mb-10 w-full z-50"
      >
        <AnimatedTooltip items={Languages} />
      </motion.div>

      <motion.div
        variants={slideInFromLeft(1)}
        className="z-50 absolute bottom-[220px] left-0 md:left-[5%] md:bottom-[0]"
      >
        <ThreeDCardDemo data={Frontend_skillCard} title={"Frontend Skills"} />
      </motion.div>

      <motion.div
        variants={slideInFromRight(1)}
        className="z-50 absolute bottom-[-100px] right-0 md:right-[5%] md:bottom-[0]"
      >
        <ThreeDCardDemo data={Backend_skillCard} title={"Backend & Tools"} />
      </motion.div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/encryption.webm"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
