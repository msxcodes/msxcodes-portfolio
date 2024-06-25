"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import { HiSparkles } from "react-icons/hi2";

export default function ProjectHeader() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <HiSparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="gradient-text text-[13px]">
          Transforming Ideas into Reality
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[22px] md:text-[28px] text-white gradient-text font-medium my-[10px] text-center "
      >
        Highlighting the best of my work
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[12px] md:text-[18px] text-gray-200 mb-[15px] text-center"
      >
        A Journey Through My Design and Development
      </motion.div>
    </div>
  );
}
