"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiArrowUpRight, HiEye, HiClock } from "react-icons/hi2";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaRobot, FaMobileAlt } from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
import { PiLightningFill, PiCodeSimpleBold } from "react-icons/pi";
import { cn } from "@/utils/cn";

interface Itech {
  title: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  category: string;
  tech: Itech[];
  img: any;
  githubLink?: string;
  liveLink?: string;
  linkTitle?: string;
  des: string;
  time: number;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  des,
  tech,
  img,
  category,
  githubLink,
  liveLink,
  linkTitle,
  time,
  index,
  featured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D effect
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });
  const brightness = useSpring(useTransform(y, [-100, 100], [1.1, 0.9]), { stiffness: 300, damping: 30 });

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Determine hosting platform icon
  const getHostingIcon = () => {
    if (liveLink?.includes('vercel')) return <SiVercel className="w-3.5 h-3.5" />;
    if (liveLink?.includes('netlify')) return <SiNetlify className="w-3.5 h-3.5" />;
    return <FaExternalLinkAlt className="w-3 h-3" />;
  };

  // Format time (months) to readable format
  const formatTime = (months: number) => {
    if (months < 1) return `${Math.round(months * 30)} days`;
    if (months === 1) return "1 month";
    return `${months} months`;
  };

  // Get category icon
  const getCategoryIcon = () => {
    switch (category?.toLowerCase()) {
      case 'website':
        return <FaLaptopCode className="w-3.5 h-3.5" />;
      case 'app':
        return <FaMobileAlt className="w-3 h-3" />;
      default:
        return <FaRobot className="w-3.5 h-3.5" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 1, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        filter: `brightness(${brightness.get()})`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-800/60 rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20",
        featured && "md:col-span-2 md:row-span-2"
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 left-3 z-30 bg-gradient-to-r from-purple-600 to-blue-500 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg flex items-center gap-1 backdrop-blur-md">
          <PiLightningFill className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-3 right-3 z-30 bg-gray-800/70 px-3 py-1 rounded-full text-xs font-medium text-gray-300 shadow-lg flex items-center gap-1 backdrop-blur-md border border-gray-700/50">
        {getCategoryIcon()}
        {category}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 z-10" />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          layout="fill"
          priority={featured}
        />

        {/* Overlay on hover - Show tech stack instead of buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 z-20 flex items-center justify-center backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap justify-center gap-2 max-w-[90%]"
              >
                {tech && tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 1, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-gray-800/80 border border-gray-700/50 flex items-center gap-1.5 hover:border-gray-600 transition-all duration-300 shadow-lg"
                    style={{ color: tech.color }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                    {tech.title}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#b49bff] transition-colors">
            {title}
          </h3>
          <Link
            href={liveLink ? liveLink : githubLink || "#"}
            target="_blank"
            className="p-2 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors transform hover:rotate-12 duration-300"
          >
            <HiArrowUpRight className="w-4 h-4 text-[#b49bff]" />
          </Link>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {des}
        </p>

        {/* Bottom Info Section */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-800/50 pt-3">
          <div className="flex items-center gap-3">
            {githubLink && (
              <Link href={githubLink} target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                <FaGithub className="w-3.5 h-3.5" />
                <span>Repo</span>
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                {getHostingIcon()}
                <span>Demo</span>
              </Link>
            )}
          </div>

          {time > 0 && (
            <div className="flex items-center gap-1 text-gray-500">
              <HiClock className="w-3 h-3" />
              <span>{formatTime(time)}</span>
            </div>
          )}
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b49bff] to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b49bff] via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-transparent to-transparent" />
        </div>
      </div>

      {/* Code pattern background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <pre className="text-[6px] text-white/50 p-4 font-mono">
            {`function Project() {
  const tech = [${tech?.map(t => `"${t.title}"`).join(', ')}];
  const buildProject = async () => {
    await setupEnvironment();
    const result = tech.reduce((acc, technology) => {
      return acc + implement(technology);
    }, initialSetup());
    return deploy(result);
  };
  return <Component {...buildProject()} />;
}`}
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
