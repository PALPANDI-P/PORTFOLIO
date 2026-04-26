"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { ExternalLink, Github, Layers, Cpu } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Captcha as Graphical Passwords",
        description: "A New Security Primitive Based on Hard AI Problems. Developed a CAPTCHA-based graphical password system leveraging AI complexity for enhanced security.",
        tech: ["Python", "AI", "Security"],
        github: "https://github.com/PALPANDI-P",
        demo: "https://github.com/PALPANDI-P",
        image: "/projects/violence-detection.png",
    },
    {
        title: "Automated News Classification",
        description: "Built a machine learning model to classify news articles into categories automatically using advanced techniques.",
        tech: ["Python", "Machine Learning", "NLP"],
        github: "https://github.com/PALPANDI-P",
        demo: "https://newscat.vercel.app",
        image: "/projects/newscat-demo.png",
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-20"
                >
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[var(--foreground)]/40 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-primary/20" /> 
                        Engineering Showcase
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)] font-display">
                        Featured <span className="text-primary">Creations</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", idx * 0.1)}
                            className="group relative bg-[var(--foreground)]/[0.02] rounded-[32px] overflow-hidden border border-[var(--foreground)]/5 flex flex-col hover:border-primary/20 transition-all duration-500"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-72 sm:h-80 overflow-hidden bg-[var(--foreground)]/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
                                    <motion.a 
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.github} 
                                        className="bg-white text-black px-8 py-4 rounded-xl flex items-center gap-2 font-bold text-sm transition-all"
                                    >
                                        <Github size={18} /> Code
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={project.demo} 
                                        className="bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-xl flex items-center gap-2 font-bold text-sm border border-white/10 transition-all"
                                    >
                                        <ExternalLink size={18} /> Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8 sm:p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        {idx % 2 === 0 ? <Cpu size={20} /> : <Layers size={20} />}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-[var(--foreground)]/60 mb-8 leading-relaxed flex-grow text-lg font-medium">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3.5 py-1.5 rounded-xl bg-[var(--foreground)]/5 text-[9px] uppercase font-bold tracking-widest text-[var(--foreground)]/40 border border-[var(--foreground)]/5"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a 
                        href="https://github.com/PALPANDI-P" 
                        target="_blank"
                        className="inline-flex items-center gap-4 border border-[var(--foreground)]/10 px-10 py-4 rounded-2xl font-bold text-lg text-[var(--foreground)]/60 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
                    >
                        Explore More Repository <Github size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
