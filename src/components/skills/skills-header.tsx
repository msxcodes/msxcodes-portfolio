"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import { HiQrCode, HiCommandLine, HiOutlineCommandLine } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';

export default function SkillsHeader() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4">
      <motion.div
        variants={slideInFromTop}
        className="flex items-center space-x-2 py-1.5 px-4 sm:px-6 bg-gray-900/50 rounded-full border border-purple-900/50 hover:border-purple-600/50 transition-colors duration-300 overflow-x-auto max-w-full"
      >
        <HiOutlineCommandLine className="text-[#b49bff] h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
        <code className="text-xs sm:text-sm font-mono text-[#b49bff] flex items-center gap-1 sm:gap-2 whitespace-nowrap">
          <span className="text-cyan-400">const</span>
          <span className="text-[#b49bff]">developer</span>
          <span className="text-white">=</span>
          <span className="text-[#b49bff]">await</span>
          <span className="text-cyan-400">getSkills()</span>
          <span className="text-white">;</span>
        </code>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-4xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3 text-center  text-[#b49bff] px-2"
      >
        Professional Skills & Technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="font-mono text-sm sm:text-base md:text-lg text-gray-400 text-center flex items-center gap-2"
      >
        <span className="text-purple-500">&gt;</span>
        <TypeAnimation
          sequence={[
            'npm install @my/skills --save-dev',
            1000,
            'npm install @my/expertise --save-dev',
            1000,
            'npm install @my/experience --save-dev',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-cyan-400 text-xs sm:text-sm md:text-base truncate"
          repeat={Infinity}
        />
      </motion.div>
    </div>
  );
}
