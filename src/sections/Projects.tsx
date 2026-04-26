"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { ExternalLink, Github, Monitor, Layers, Cpu } from "lucide-react";
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
        <section id="projects" className="py-32 bg-black relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-24"
                >
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-neutral-800" /> 
                        Engineering Showcase
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Featured <span className="text-neutral-500">Creations</span>
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
                            className="group relative bg-white/[0.02] rounded-[40px] overflow-hidden border border-white/5 flex flex-col hover:border-white/10 transition-all duration-700"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-72 sm:h-80 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={idx === 0}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-md">
                                    <motion.a 
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.github} 
                                        className="bg-white text-black px-8 py-4 rounded-2xl flex items-center gap-2 font-black text-sm transition-all"
                                    >
                                        <Github size={18} /> Code
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.demo} 
                                        className="bg-neutral-800 text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-black text-sm transition-all border border-white/10"
                                    >
                                        <ExternalLink size={18} /> Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-10 sm:p-12 flex flex-col flex-grow bg-gradient-to-b from-white/[0.03] to-transparent">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white transition-colors border border-white/5">
                                        {idx % 2 === 0 ? <Cpu size={22} /> : <Layers size={22} />}
                                    </div>
                                    <h3 className="text-3xl font-black text-white leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-neutral-400 mb-10 leading-relaxed flex-grow text-lg">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-4 py-2 rounded-xl bg-white/5 text-[10px] uppercase font-black tracking-widest text-neutral-500 border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all transition-colors"
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
                    className="mt-24 text-center"
                >
                    <a 
                        href="https://github.com/PALPANDI-P" 
                        target="_blank"
                        className="inline-flex items-center gap-4 border border-white/10 px-12 py-5 rounded-[24px] font-black text-lg text-white hover:bg-white hover:text-black transition-all"
                    >
                        Explore More Repository <Github size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
