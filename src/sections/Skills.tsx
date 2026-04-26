"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Code2, Brain, Layout, Wrench, UserCircle, Globe } from "lucide-react";

const skills = [
    {
        category: "Programming Languages",
        icon: <Code2 className="text-white" size={32} />,
        items: ["Java", "Python", "C++", "SQL"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Web Design",
        icon: <Layout className="text-white" size={32} />,
        items: ["HTML", "CSS"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Tools & Platforms",
        icon: <Wrench className="text-white" size={32} />,
        items: ["Visual Studio Code", "PyCharm", "Microsoft Office", "Git", "GitHub"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Core Competencies",
        icon: <Brain className="text-white" size={32} />,
        items: ["Time Management", "Critical Thinking", "Problem Solving", "Creative Thinking", "Innovation"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Soft Skills",
        icon: <UserCircle className="text-white" size={32} />,
        items: ["Teamwork / Community", "Fast Learning", "Adaptability"],
        color: "from-white/10 to-white/5",
    },
    {
        category: "Languages",
        icon: <Globe className="text-white" size={32} />,
        items: ["Tamil", "English"],
        color: "from-white/10 to-white/5",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-black relative overflow-hidden">

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
                        Capabilities
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Technical <span className="text-neutral-500">Stacks</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", idx * 0.1)}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[40px] glass border-white/5 relative overflow-hidden group transition-all duration-500 bg-white/[0.02]"
                        >
                            <div className="mb-10 p-5 bg-white/5 rounded-3xl w-fit group-hover:bg-white/10 transition-colors duration-500 border border-white/5">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-8 tracking-tight text-white">{skill.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item, i) => (
                                    <span 
                                        key={i}
                                        className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/50 border border-white/5 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
