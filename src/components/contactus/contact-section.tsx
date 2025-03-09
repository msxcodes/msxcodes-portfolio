"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import ContactInput from "./contact-input";
import ContactHeader from "./contact-header";
import { HiSparkles, HiCommandLine, HiQrCode } from "react-icons/hi2";
import { Button } from "@/components/ui/moving-border-btn";
import { FaTerminal } from "react-icons/fa";

export default function ContactUs() {
  const [hoverState, setHoverState] = useState(false);

  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate="visible"
      className="flex relative flex-col items-center justify-center md:px-20 mt-16 md:mt-0 w-full pt-12 h-full"
    >
      <div className="z-50 flex">
        <ContactHeader />
      </div>
      <div className="font-mono w-full text-base text-white sm:px-10 z-50">
        <div className="grid md:grid-cols-2 md:pl-12 gap-8">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full rounded-lg p-6 shadow-lg shadow-purple-500/10"
          >
            <div className="flex items-center mt-2 border-b border-purple-500/30 pb-2">
              <FaTerminal className="text-purple-500 mr-2" />
              <span className="text-green-400">$</span>
              <span className="text-purple-400 ml-2">contact</span>
              <span className="text-blue-400">.submit()</span>
            </div>
            <ContactInput />
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="w-full md:flex items-center justify-center mb-24 flex-col px-10 text-gray-100 md:mt-0 md:ml-auto hidden"
          >
            <div className=" rounded-lg p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center mb-4">
                <HiCommandLine className="text-purple-500 mr-2 text-xl" />
                <h3 className="text-4xl font-extrabold">
                  <span className="text-white">get_in_</span>
                  <span className="gradient-text">touch()</span>
                </h3>
              </div>

              <div className="font-mono opacity-80 text-base leading-relaxed">
                <p className="mb-3 border-l-2 border-purple-500 pl-3">
                  <span className="text-purple-400">/**</span>
                </p>
                <p className="mb-2 pl-5">
                  <span className="text-green-400">* </span>
                  <span className="text-gray-300">I'm always open to discussing new projects,</span>
                </p>
                <p className="mb-2 pl-5">
                  <span className="text-green-400">* </span>
                  <span className="text-gray-300">creative ideas or opportunities to be part</span>
                </p>
                <p className="mb-2 pl-5">
                  <span className="text-green-400">* </span>
                  <span className="text-gray-300">of your tech visions.</span>
                </p>
                <p className="mb-3 pl-5">
                  <span className="text-green-400">* </span>
                  <span className="text-gray-300">Response time: ~24hrs</span>
                </p>
                <p className="mb-3 border-l-2 border-purple-500 pl-3">
                  <span className="text-purple-400">*/</span>
                </p>
              </div>

              <motion.div
                className="mt-6 p-3 border border-purple-500/30 rounded-md bg-black/40"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={() => setHoverState(true)}
                onHoverEnd={() => setHoverState(false)}
              >
                <AnimatePresence>
                  {hoverState ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <span className="text-cyan-400">$ </span>
                      <span className="text-purple-400">npm </span>
                      <span className="text-blue-400">install </span>
                      <span className="text-green-400">collaboration</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center flex items-center justify-center"
                    >
                      <HiQrCode className="text-purple-500 mr-2" />
                      <span>Let's build something amazing together</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-full w-[90%] absolute">
        <div className="w-full h-full z-20 opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </motion.section>
  );
}
