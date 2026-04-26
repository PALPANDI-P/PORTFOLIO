"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { fadeIn } from "@/animations/variants";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Alagappa University",
        period: "Jul 2024 – Present",
        location: "Karaikudi",
        details: [
            "Current GPA: 7.9",
            "Specializing in advanced computational methodologies and algorithms.",
            "Focusing on AI concepts, data science, and modern development paradigms.",
        ],
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Madurai Kamaraj University College",
        period: "Jun 2021 – May 2024",
        location: "Madurai",
        details: [
            "Graduated with GPA: 7.6",
            "Developed strong foundational skills in Java, Python, and C++.",
            "Participated in multiple collaborative projects and improved problem-solving skills.",
        ],
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-24"
                >
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-neutral-800" /> 
                        Academic Background
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Education <span className="text-neutral-500">History</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.2 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-neutral-900/50 border border-white/5 p-8 md:p-12 rounded-[32px] hover:border-white/10 hover:bg-neutral-900 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-neutral-500 font-bold text-xs uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><GraduationCap size={14} /> {edu.institution}</span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                                        <span className="flex items-center gap-2 space-x-2"><MapPin size={14} /> {edu.location}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white">{edu.degree}</h3>
                                    
                                    <ul className="grid gap-3 pt-4">
                                        {edu.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-4 text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white opacity-20 flex-shrink-0" />
                                                <span className="text-sm md:text-base">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-6 py-2.5 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        {edu.period}
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
