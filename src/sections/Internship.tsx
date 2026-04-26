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
        <section id="internship" className="py-32 relative overflow-hidden bg-transparent">
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
                        Professional Experience
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)] font-display">
                        Internship <span className="text-primary">Milestones</span>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {internships.map((intern, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.2 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 p-8 md:p-10 rounded-[24px] hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="space-y-3 flex-grow">
                                    <div className="flex items-center gap-3 text-[var(--foreground)]/40 font-bold text-[10px] uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><Briefcase size={12} className="text-primary" /> {intern.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-[var(--foreground)]/10" />
                                        <span className="flex items-center gap-2"><MapPin size={12} /> {intern.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">{intern.role}</h3>
                                    
                                    <ul className="grid gap-2.5 pt-3">
                                        {intern.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[var(--foreground)]/60 leading-relaxed">
                                                <div className="mt-2 w-1 h-1 rounded-full bg-primary/20 flex-shrink-0" />
                                                <span className="text-sm md:text-base font-medium">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-bold text-[9px] uppercase tracking-widest">
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
