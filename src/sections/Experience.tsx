"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        role: "Artificial Intelligence and Machine Learning Intern",
        company: "Trishik Business Solutions",
        period: "Jan 2026 – Apr 2026",
        location: "Madurai",
        achievements: [
            "Currently gaining hands-on exposure to Artificial Intelligence and Machine Learning.",
            "Working on real-world AI modeling and practical machine learning applications.",
            "Building robust logic and workflows in professional environments.",
        ],
    },
    {
        role: "Master of Computer Applications (MCA)",
        company: "Alagappa University",
        period: "Jul 2024 – Present",
        location: "Sivaganga",
        achievements: [
            "Current GPA: 7.9",
            "Specializing in advanced computational methodologies and algorithms.",
            "Focusing on AI concepts, data science, and modern development paradigms.",
        ],
    },
    {
        role: "Bachelor of Computer Applications (BCA)",
        company: "Madurai Kamaraj University College",
        period: "Jun 2021 – May 2024",
        location: "Madurai",
        achievements: [
            "Graduated with GPA: 7.6",
            "Developed strong foundational skills in Java, Python, and C++.",
            "Participated in multiple collaborative projects and improved problem-solving skills.",
        ],
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-24"
                >
                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-white/10" /> 
                        Career Path
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        Professional <span className="text-white/40">Journey</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.2 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[32px] hover:border-white/10 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white/40 font-bold text-xs uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><Briefcase size={14} /> {exp.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/10" />
                                        <span className="flex items-center gap-2 space-x-2"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    
                                    <ul className="grid gap-3 pt-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-4 text-white/60 leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                                                <span className="text-sm md:text-base">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-6 py-2.5 bg-white text-black rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-xl">
                                        {exp.period}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
