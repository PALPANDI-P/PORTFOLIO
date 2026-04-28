"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Code2, Brain, Layout, Wrench, UserCircle, Globe } from "lucide-react";

const skills = [
    {
        category: "Programming Languages",
        icon: Code2,
        items: ["Java", "Python", "C++", "SQL"],
        color: "from-primary/10 to-transparent",
    },
    {
        category: "Web Design",
        icon: Layout,
        items: ["HTML", "CSS"],
        color: "from-primary/10 to-transparent",
    },
    {
        category: "Tools & Platforms",
        icon: Wrench,
        items: ["Visual Studio Code", "PyCharm", "Microsoft Office", "Git", "GitHub"],
        color: "from-primary/10 to-transparent",
    },
    {
        category: "Core Competencies",
        icon: Brain,
        items: ["Time Management", "Critical Thinking", "Problem Solving", "Creative Thinking", "Innovation"],
        color: "from-primary/10 to-transparent",
    },
    {
        category: "Soft Skills",
        icon: UserCircle,
        items: ["Teamwork / Community", "Fast Learning", "Adaptability"],
        color: "from-primary/10 to-transparent",
    },
    {
        category: "Languages",
        icon: Globe,
        items: ["Tamil", "English"],
        color: "from-primary/10 to-transparent",
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-transparent relative overflow-hidden">
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
                        Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)] font-display">
                        Technical <span className="text-primary">Stacks</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", idx * 0.1)}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-[32px] bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 relative overflow-hidden group transition-all duration-500 hover:bg-[var(--foreground)]/[0.04]"
                        >
                            <div className="mb-8 p-4 bg-primary/5 rounded-2xl w-fit text-primary">
                                <skill.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-6 tracking-tight text-[var(--foreground)]">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skill.items.map((item, i) => (
                                    <span 
                                        key={i}
                                        className="px-3.5 py-1.5 bg-[var(--foreground)]/5 backdrop-blur-sm rounded-xl text-[9px] font-bold uppercase tracking-widest text-[var(--foreground)]/60 border border-[var(--foreground)]/5"
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
