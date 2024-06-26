"use client";
import { SocialHandles } from "../../utils/constants/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState<string>("about-me");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });
      setIsActive(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[100] md:px-24"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <motion.a
          variants={slideInFromLeft(0.5)}
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/glaxy.png"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin hidden md:block"
          />

          <span className="font-bold ml-[10px]  gradient-text">
            Mohit Singh | Developer
          </span>
        </motion.a>

        <motion.div
          variants={slideInFromTop}
          className="w-max h-full md:flex flex-row items-center hidden justify-between md:mr-20"
        >
          <div className="font-medium text-sm flex gap-12 items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className={`${
                isActive === "about-me" ? "gradient-text font-bold" : ""
              } cursor-pointer`}
            >
              About Me
            </a>
            <a
              href="#skills"
              className={`${
                isActive === "skills" ? "gradient-text font-bold" : ""
              } cursor-pointer`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${
                isActive === "projects" ? "gradient-text font-bold" : ""
              } cursor-pointer`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`${
                isActive === "contact" ? "gradient-text font-bold" : ""
              } cursor-pointer`}
            >
              ContactUs
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-row gap-2 "
        >
          {SocialHandles.map((social) => (
            <Link href={social.link} key={social.name} target="_blank">
              <Image
                className="hover:animate-bounce w-[25px] h-[60px] md:w-[35px] cursor-pointer "
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
