"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

interface Itech {
  title: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  linkTitle: string;
  tech: Itech[];
  img: any;
  link: string;
  des: string;
  time: number;
  index: number;
}

export default function ProjectCard({
  title,
  des,
  tech,
  img,
  linkTitle,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          layout="fill"
        />
      </div>

      <div className="relative z-20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-[#b49bff] transition-colors">
            {title}
          </h3>
          <Link
            href={link}
            target="_blank"
            className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors"
          >
            <HiArrowUpRight className="w-4 h-4 text-[#b49bff]" />
          </Link>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {des}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech && tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-gray-800/50 border border-gray-700/50"
              style={{ color: tech.color }}
            >
              {tech.title}
            </span>
          ))}
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b49bff] to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
        </div>
      </div>

      {/* Glassmorphism effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />
    </motion.div>
  );
}
