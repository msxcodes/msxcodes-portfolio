import { slideInFromLeft } from '@/utils/motions/montion'
import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { RiTerminalBoxFill, RiCommandLine } from 'react-icons/ri'

export default function LeftSideHero() {
    return (
        <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-8 lg:gap-10 z-20 px-4 sm:px-6 lg:px-8">

            {/* Main Content */}
            <motion.div
                variants={slideInFromLeft(0.8)}
                className="space-y-3 sm:space-y-4"
            >
                {/* Name & Title */}
                <div className="space-y-3 sm:space-y-4">
                    <div className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-mono overflow-x-auto whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400">~/</span>
                        <span className="text-purple-400">$</span>
                        <span className="text-purple-400">class</span>
                        <span className="text-cyan-400">Developer</span>
                        <span className="text-purple-400">extends</span>
                        <span className="text-orange-400">Engineer</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        <span className="text-gray-400/90 text-2xl sm:text-3xl">I'm </span>
                        <span className="opacity-80">
                            Mohit Singh
                        </span>
                    </h1>
                </div>
                {/* About Section */}
                <div className="space-y-4 sm:space-y-6 font-mono text-sm sm:text-base">
                    {/* Function Declaration */}
                    <div className="space-y-2">
                        <div className="text-xs sm:text-sm text-gray-400">// Let me introduce myself</div>
                        <div className="space-y-1">
                            <div className="text-sm sm:text-base">
                                <span className="text-purple-500">async function</span>
                                <span className="text-cyan-500"> getMohitProfile</span>
                                <span className="text-gray-300">() {`{`}</span>
                            </div>
                            <div className="pl-2 sm:pl-4 space-y-2">
                                <div>
                                    <span className="text-purple-500">const</span>
                                    <span className="text-cyan-500"> developer</span>
                                    <span className="text-gray-300"> = {`{`}</span>
                                </div>
                                <div className="pl-2 sm:pl-4 space-y-1">
                                    <div className="break-words">
                                        <span className="text-emerald-400">title:</span>
                                        <span className="text-amber-400"> "Full Stack Developer | AI/ML Engineer"</span>,
                                    </div>
                                    <div>
                                        <span className="text-emerald-400">specialization:</span>
                                        <span className="text-gray-300"> {`{`}</span>
                                    </div>
                                    <div className="pl-2 sm:pl-4">
                                        <span className="text-emerald-400">webDev:</span>
                                        <span className="text-pink-400"> "Full Stack Web Development"</span>,
                                    </div>
                                    <div className="pl-2 sm:pl-4">
                                        <span className="text-emerald-400">appDev:</span>
                                        <span className="text-blue-400"> "Cross-Platform App Development"</span>,
                                    </div>
                                    <div className="pl-2 sm:pl-4">
                                        <span className="text-emerald-400">ai/ml:</span>
                                        <span className="text-violet-400"> "Machine Learning & AI Solutions"</span>
                                    </div>
                                    <span className="text-gray-300"> {`}`}</span>

                                    <div className="break-words">
                                        <span className="text-emerald-400">status:</span>
                                        <span className="text-orange-400"> "Always learning, forever coding 🚀"</span>
                                    </div>
                                </div>
                                <div className="text-gray-300">{`}`};</div>

                                <div>
                                    <span className="text-purple-500">return</span>
                                    <span className="text-cyan-500"> developer</span>;
                                </div>
                            </div>
                            <div className="text-gray-300">{`}`}</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Actions */}
            <motion.div
                variants={slideInFromLeft(1.2)}
                className="flex flex-col gap-4 sm:gap-5 relative"
            >
                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                {/* Primary Actions */}
                <div className="grid grid-cols-12 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
                    {/* GitHub Button */}
                    <motion.a
                        href="https://github.com/msxcodes"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="col-span-6 relative overflow-hidden group h-full"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 h-full
                        bg-gray-900/40 backdrop-blur-md rounded-lg
                        border border-white/5 group-hover:border-purple-500/30
                        shadow-[0_4px_20px_-4px_rgba(128,90,213,0.3)] group-hover:shadow-[0_8px_25px_-5px_rgba(128,90,213,0.5)]
                        transition-all duration-300 ease-out"
                        >
                            <FaGithub className="text-lg sm:text-xl text-white group-hover:text-purple-400 transition-colors" />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">GitHub</span>
                                <span className="text-xs text-gray-400">@msxcodes</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </motion.a>

                    {/* Resume Button */}
                    <motion.a
                        href="/resume.pdf"
                        target="_blank"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="col-span-6 relative overflow-hidden group h-full"
                    >
                        <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 h-full
                        bg-gray-900/40 backdrop-blur-md rounded-lg
                        border border-white/5 group-hover:border-blue-500/30
                        shadow-[0_4px_20px_-4px_rgba(59,130,246,0.3)] group-hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.5)]
                        transition-all duration-300 ease-out"
                        >
                            <RiTerminalBoxFill className="text-lg sm:text-xl text-blue-400 group-hover:text-blue-300 transition-colors" />
                            <span className="inline text-sm font-medium text-white group-hover:text-blue-300 transition-colors">Resume</span>

                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                className="sm:block"
                            >
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </motion.a>

                    {/* Buy Me a Coffee */}
                    <motion.a
                        href="https://buymeacoffee.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="col-span-12 relative overflow-hidden group h-full"
                    >
                        <div className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 h-full
                        bg-gray-900/40 backdrop-blur-md rounded-lg
                        border border-white/5 group-hover:border-amber-500/30
                        shadow-[0_4px_20px_-4px_rgba(245,158,11,0.3)] group-hover:shadow-[0_8px_25px_-5px_rgba(245,158,11,0.5)]
                        transition-all duration-300 ease-out"
                        >
                            <span className="text-sm font-medium text-amber-400 group-hover:text-amber-300 transition-colors">Buy me a coffee</span>
                            <motion.div
                                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                className="text-lg"
                            >
                                ☕
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                    </motion.a>
                </div>
                {/* Social Links */}
            </motion.div>
        </div>
    )
}
