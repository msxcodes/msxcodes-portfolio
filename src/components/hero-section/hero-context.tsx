"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import { HiSparkles, HiCommandLine, } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { HiCursorClick } from "react-icons/hi";

const codeSnippet = `// Full Stack Developer who loves coding
import { useState, useEffect } from 'react';
import { Skills, Projects } from './skills';

function MohitSingh() {
  const [isAvailable, setIsAvailable] = useState(true);
  
  return (
    <FullStackDeveloper 
      location="India"
      openToWork={true}
      passion="Building amazing web apps"
      {...skills}
    />
  );
}

// Always coding, always learning 🚀
export default MohitSingh;`;


const HeroContent = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative w-full">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-24 md:py-32 min-h-screen gap-10"
      >
        {/* Left Section - Enhanced */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 z-20">
          {/* Status Badge */}
          <motion.div
            variants={slideInFromTop}
            className="flex items-center gap-2 bg-[#0A0A0A]/50 border border-[#7042f88b] rounded-2xl p-4 backdrop-blur-sm hover:bg-[#7042f81a] transition-all duration-300 w-fit"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0A]/50 border border-[#7042f88b]">
              <HiSparkles className="text-[#b49bff] size-4 animate-pulse" />
              <span className="gradient-text text-sm font-medium">Available for Work</span>
            </div>
          </motion.div>

          {/* Main Title with Animation */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-3"
          >
            <h2 className="text-lg text-gray-400">Hi there, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Mohit </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
                Singh
              </span>
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              />
              <h3 className="text-xl text-gray-300">Full Stack Developer</h3>
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-300 leading-relaxed max-w-[600px] bg-[#0A0A0A]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"
          >
            <span className="text-[#b49bff] font-semibold">Crafting digital experiences</span> with
            modern web technologies. Specializing in building exceptional web applications
            that combine <span className="text-cyan-400">elegant interfaces</span> with
            <span className="text-purple-400"> powerful functionality</span>.
            <br /><br />
            Let's transform your vision into reality! 🚀
          </motion.p>

          {/* Interactive Buttons */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* Primary CTA */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
              <button className="relative flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] rounded-2xl text-white font-medium">
                <span>Download Resume</span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </button>
            </motion.a>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-2xl bg-[#0A0A0A]/50 border border-[#7042f88b] hover:bg-[#7042f81a] text-white font-medium transition-all duration-300 flex items-center gap-2"
            >
              Let's Talk
              <HiCursorClick className="text-[#b49bff] animate-bounce" />
            </motion.button>

            {/* Social Links */}
            <div className="flex gap-4 ml-1">
              {[
                { icon: <FaGithub />, url: "https://github.com", color: "hover:text-purple-400" },
                { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:text-blue-400" },
                { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:text-cyan-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-[#0A0A0A]/50 border border-[#7042f88b] 
                    hover:bg-[#7042f81a] transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="flex gap-6 mt-4"
          >
            {[
              { label: "Years", value: "3+" },
              { label: "Projects", value: "50+" },
              { label: "Technologies", value: "15+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Section - Animated Code Cards */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full lg:w-1/2 flex justify-center items-center z-20"
        >
          <div className="relative w-full max-w-[600px] aspect-[4/3]">
            {/* Terminal Card with Glassmorphism */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full overflow-hidden rounded-2xl"
              style={{
                background: 'rgba(17, 17, 17, 0.7)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(112, 66, 248, 0.2)',
                boxShadow: '0 8px 32px 0 rgba(112, 66, 248, 0.1)',
              }}
            >
              {/* Code Content with Dots */}
              <div className="relative p-4 text-sm overflow-x-auto custom-scrollbar">
                {/* Dots */}
                <div className="absolute top-2 left-3 flex gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-[#FF605C] opacity-80 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD44] opacity-80 hover:opacity-100 transition-opacity" />
                  <div className="w-3 h-3 rounded-full bg-[#00CA4E] opacity-80 hover:opacity-100 transition-opacity" />
                </div>

                {/* Code with padding for dots */}
                <div className="pt-6">
                  <SyntaxHighlighter
                    language="typescript"
                    style={{
                      ...oneDark,
                      'pre[class*="language-"]': {
                        background: 'transparent',
                      },
                      'code[class*="language-"]': {
                        background: 'transparent',
                        color: '#e5e7eb', // Light gray for default text
                      },
                      'token.keyword': {
                        color: '#c678dd' // Purple for keywords
                      },
                      'token.function': {
                        color: '#61afef' // Blue for functions
                      },
                      'token.string': {
                        color: '#98c379' // Green for strings
                      },
                      'token.comment': {
                        color: '#7f848e' // Lighter gray for comments
                      },
                      'token.constant': {
                        color: '#e5c07b' // Yellow for constants
                      },
                      'token.punctuation': {
                        color: '#7f848e' // Gray for punctuation
                      },
                      'token.variable': {
                        color: '#e06c75' // Red for variables
                      },
                      'token.operator': {
                        color: '#56b6c2' // Cyan for operators
                      },
                      'token.property': {
                        color: '#e06c75' // Red for properties
                      },
                      'token.builtin': {
                        color: '#e5c07b' // Yellow for built-in functions
                      }
                    }}
                    customStyle={{
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontSize: '0.875rem',
                      textShadow: 'none',
                    }}
                    showLineNumbers={true}
                    lineNumberStyle={{
                      color: 'rgba(112, 66, 248, 0.4)',
                      marginRight: '1rem',
                      textShadow: 'none',
                      minWidth: '2.5em',
                    }}
                    className="custom-syntax-highlighter"
                  >
                    {codeSnippet}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-[#7042f88b] rounded-full flex justify-center"
        >
          <div className="w-1 h-1 bg-[#7042f88b] rounded-full mt-2" />
        </motion.div>
        <span className="text-[#b49bff] text-sm">Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default HeroContent;

/* Gradient animation */

