"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import ContactInput from "./contact-input";
import ContactHeader from "./contact-header";
import { HiSparkles } from "react-icons/hi2";
import { Button } from "@/components/ui/moving-border-btn";

export default function ContactUs() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      animate="visible"
      className="flex relative flex-col items-center justify-center md:px-20 mt-20 md:mt-40 w-full pt-24 h-[90vh]"
    >
      <div className="z-50 flex">
        <ContactHeader />
      </div>
      <div className="font-sans w-full text-base text-white sm:px-10 z-50">
        <div className="grid md:grid-cols-2 md:pl-12">
          <motion.div variants={slideInFromLeft(0.5)} className="w-full ">
            <ContactInput />
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="w-full md:flex flex-col pt-32 px-10 text-gray-100 md:mt-0 md:ml-auto hidden "
          >
            <h3 className="mb-4 text-5xl font-extrabold ">
              Get In <span className="gradient-text"> Touch </span>
            </h3>
            <p className="mb-4  opacity-70 text-lg font-medium">
              We genuinely care about you and wellbeing. <br /> Let us know how
              we can serve you better. <br /> If you&apos;d like to know more
              about my work or proccess feel free <br /> to get touch.Email us
              with any questions or inquiries. <br /> We would happy to answer
              your questions and try to response to your <br /> questions and
              inquiries as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="h-full w-[90%] absolute">
        <div className="w-full h-full z-[10] opacity-20 absolute flex items-center justify-center bg-cover">
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
