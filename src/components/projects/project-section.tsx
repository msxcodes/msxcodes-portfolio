"use client";
import React, { useState } from "react";
import ProjectCard from "./project-card";
import { projectData } from "@/utils/constants/projects-tech";
import ProjectHeader from "./project-header";
import { motion, AnimatePresence } from "framer-motion";
import { HiAdjustmentsHorizontal, HiArrowPath } from "react-icons/hi2";
import { FaLaptopCode, FaMobileAlt, FaRobot } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Define main project categories with icons
  const projectCategories = [
    { id: "all", label: "All Projects", icon: <HiAdjustmentsHorizontal /> },
    { id: "website", label: "Websites", icon: <FaLaptopCode /> },
    { id: "app", label: "Applications", icon: <FaMobileAlt /> },
    { id: "ai/ml", label: "AI/ML", icon: <FaRobot /> }
  ];

  // Get unique tech categories from projects
  const techCategories = ["all", ...Array.from(new Set(projectData.flatMap(project =>
    project.tech.map(t => t.title.toLowerCase())

  )))].slice(0, 6); // Limit to 6 categories for UI

  const filteredProjects = filter === "all"
    ? projectData
    : projectData.filter(project =>
      project.category?.toLowerCase() === filter ||
      project.tech.some(tech => tech.title.toLowerCase() === filter)
    );

  const handleFilterChange = (category: string) => {
    setIsLoading(true);
    setFilter(category);
    setTimeout(() => setIsLoading(false), 600); // Simulate loading for 600ms
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center py-20 min-h-screen relative z-50"
      id="projects"
    >
      <ProjectHeader />

      {/* Filter Controls */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Main Categories */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`px-3 py-1.5 text-xs rounded-full transition-all whitespace-nowrap flex items-center gap-1.5 ${filter === category.id
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50"
                  }`}
              >
                <span className="text-[#b49bff]">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Tech Filters */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {techCategories.filter(cat => cat !== "all").map((tech) => (
              <button
                key={tech}
                onClick={() => handleFilterChange(tech)}
                className={`px-2 py-1 text-xs rounded-full transition-all whitespace-nowrap ${filter === tech
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                  : "bg-gray-800/30 text-gray-400 border border-gray-700/30 hover:border-gray-600/50"
                  }`}
              >
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </button>
            ))}

            <button
              onClick={() => handleFilterChange("all")}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs px-2 py-1"
            >
              <HiArrowPath className="w-3 h-3" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      {/* Projects Grid */}
      <div className="h-max w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
              {/* Generate skeleton cards based on previous filter count */}
              {Array.from({ length: Math.min(filteredProjects.length || 6, 6) }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            >
              {filteredProjects.map((data: any, index: number) => (
                <motion.div
                  key={data.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <ProjectCard
                    {...data}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-xl text-gray-400">No projects found with this filter</h3>
            <button
              onClick={() => handleFilterChange("all")}
              className="mt-4 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-md hover:bg-purple-500/30 transition-colors"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full filter blur-[128px]" />

        {/* Additional background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-purple-500/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse-slow" />
      </div>
    </motion.section>
  );
};

// Skeleton loading component for project cards
const ProjectCardSkeleton = () => {
  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800/50 h-[400px] relative shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all">
      {/* Image skeleton */}
      <div className="relative aspect-video overflow-hidden bg-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-700/10 to-gray-800/0 skeleton-loading" />
      </div>

      {/* Content skeleton */}
      <div className="p-6">
        {/* Title skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-gray-800/80 rounded-md w-2/3 skeleton-loading" />
          <div className="h-8 w-8 bg-gray-800/80 rounded-full skeleton-loading" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-800/60 rounded-md w-full skeleton-loading" />
          <div className="h-4 bg-gray-800/60 rounded-md w-5/6 skeleton-loading" />
        </div>

        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-800/40 rounded-full w-16 skeleton-loading" />
          ))}
        </div>

        {/* Links skeleton */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800/50">
          <div className="flex gap-3">
            <div className="h-4 bg-gray-800/60 rounded-md w-16 skeleton-loading" />
            <div className="h-4 bg-gray-800/60 rounded-md w-16 skeleton-loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
