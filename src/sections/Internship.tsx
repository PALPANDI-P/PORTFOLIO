"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { fadeIn } from "@/animations/variants";

const internships = [
    {
        role: "Artificial Intelligence and Machine Learning Intern",
        company: "Trishik Business Solutions",
        period: "Jan 2026 – Apr 2026",
        location: "Madurai",
        highlights: [
            "Gaining hands-on exposure to Artificial Intelligence and Machine Learning.",
            "Working on real-world AI modeling and practical machine learning applications.",
            "Building robust logic and workflows in professional environments.",
        ],
    }
];

export const Internship = () => {
    return (
        <section id="internship" className="py-32 relative overflow-hidden bg-black">
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
                        Professional Experience
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Internship <span className="text-neutral-500">Milestones</span>
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {internships.map((intern, idx) => (
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
                                        <span className="flex items-center gap-2"><Briefcase size={14} /> {intern.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                                        <span className="flex items-center gap-2 space-x-2"><MapPin size={14} /> {intern.location}</span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white">{intern.role}</h3>
                                    
                                    <ul className="grid gap-3 pt-4">
                                        {intern.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-4 text-neutral-400 group-hover:text-neutral-200 transition-colors leading-relaxed">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white opacity-20 flex-shrink-0" />
                                                <span className="text-sm md:text-base">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-6 py-2.5 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        {intern.period}
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
