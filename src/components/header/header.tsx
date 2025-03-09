"use client";
import { SocialHandles } from "../../utils/constants/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions/montion";
import Link from "next/link";
import { RiTerminalBoxFill, RiCodeBoxLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [isActive, setIsActive] = useState<string>("about-me");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about-me", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setIsActive(currentSection);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className={`fixed top-0 w-screen z-[100] transition-all duration-300 ${isScrolled ? "bg-black/10 backdrop-blur-md border-b border-white/5" : "bg-transparent"
          }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-16 h-16">
          <div className="w-full h-full flex items-center justify-between">
            {/* Logo Section */}
            <motion.a
              variants={slideInFromLeft(0.5)}
              href="#about-me"
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative w-full h-full bg-black rounded-xl p-2 border border-white/10 flex items-center justify-center">
                  <RiTerminalBoxFill className="w-full h-full text-purple-500 group-hover:text-cyan-500 transition-colors duration-700" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Mohit Singh
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400">Full Stack Developer</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <motion.nav
              variants={slideInFromTop}
              className="hidden md:block"
            >
              <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-2 rounded-full text-sm transition-all duration-300 ${isActive === item.id
                      ? "text-white font-bold"
                      : "text-gray-300 hover:text-white font-bold"
                      }`}
                  >
                    {isActive === item.id && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full -z-10"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>

            {/* Social Links & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={slideInFromRight(0.5)}
                className="hidden sm:flex items-center gap-4"
              >
                <a
                  href="#contact"
                  className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/10 bg-black/20 backdrop-blur-sm hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                >
                  <RiCodeBoxLine className="text-purple-500" />
                  <span>Let's Code</span>
                </a>

                <div className="flex items-center gap-3">
                  {SocialHandles.map((social) => (
                    <Link
                      href={social.link}
                      key={social.name}
                      target="_blank"
                      className="group relative scale-110"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                      <div className="relative p-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300">
                        <Image
                          src={social.src}
                          alt={social.name}
                          width={18}
                          height={18}
                          className="opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                id="menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 md:hidden"
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="w-6 h-6 text-gray-300" />
                ) : (
                  <RiMenu3Line className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-gray-900/95 backdrop-blur-md border-l border-white/10 z-[100] md:hidden"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex flex-col gap-4 mt-16">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${isActive === item.id
                        ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white"
                        : "text-gray-300 hover:bg-white/5"
                        }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                    {SocialHandles.map((social) => (
                      <Link
                        href={social.link}
                        key={social.name}
                        target="_blank"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                      >
                        <Image
                          src={social.src}
                          alt={social.name}
                          width={20}
                          height={20}
                          className="opacity-70"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}