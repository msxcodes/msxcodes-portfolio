"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border-btn";
import { FlipWords } from "@/components/ui/flip-words";
import { HiSparkles } from "react-icons/hi2";

const words = ["NextJs", "ReactJs", "NodeJs", "Express"];

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 px-8 mt-32 md:mt-40  w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col md:gap-5 justify-center  m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] flex opacity-[0.9]"
        >
          <HiSparkles className="text-[#b49bff] mr-[5px] md:mr-[10px] size-3 md:size-5" />
          <h1 className="gradient-text text-[10px] md:text-[13px]">
            Fullstack Web Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 md:mt-6 text-3xl md:text-5xl font-bold text-white md:max-w-[600px] w-auto  h-auto"
        >
          <span>
            Providing best websites exprience with{" "}
            <FlipWords className="" words={words} />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs md:text-[1rem]  text-gray-400 font-medium my-5 max-w-[600px]"
        >
          Hi, Myself Mohit Singh <br /> Welcome to my corrner of the internet.
          I,m glad that you&apos;re here! <br className="hidden md:block" />{" "}
          I&apos;m a developer based in India with experience in JavaScript, and
          expertise in frameworks like NextJs and ReactJs. For backend Node.js
          and Express.js. <br /> Let&apos;s work together to bring your ideas to
          life!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="shadow-lg w-max shadow-[#2A0E61]/50 "
          href="/resume.pdf"
          target="_blank"
        >
          <Button
            borderRadius="1rem"
            className=" text-white text-[0.9rem]  border-[#7042f88b] transition-all duration-300 gradient-text"
          >
            <span className="size-full flex items-center justify-center hover:font-semibold transition-all duration-300">
              Download CV
            </span>
          </Button>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
