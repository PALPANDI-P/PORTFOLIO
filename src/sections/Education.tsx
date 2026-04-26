"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { fadeIn } from "@/animations/variants";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Alagappa University",
        period: "Jul 2024 – Present",
        location: "Karaikudi",
        score: "GPA: 7.9",
        specialization: "Advanced Computational Methodologies",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Madurai Kamaraj University College",
        period: "Jun 2021 – May 2024",
        location: "Madurai",
        score: "GPA: 7.6",
        specialization: "Foundational CS & Development",
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden bg-transparent">
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
                        Academic Journey
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-[var(--foreground)] font-display">
                        Education <span className="text-primary">Pathway</span>
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {education.map((edu, idx) => (
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
                                        <span className="flex items-center gap-2"><GraduationCap size={12} className="text-primary" /> {edu.institution}</span>
                                        <span className="w-1 h-1 rounded-full bg-[var(--foreground)]/10" />
                                        <span className="flex items-center gap-2"><MapPin size={12} /> {edu.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">{edu.degree}</h3>
                                    
                                    <div className="flex flex-wrap gap-6 pt-3">
                                        <div className="flex items-center gap-2 text-[var(--foreground)]/60">
                                            <Award size={14} className="text-primary" />
                                            <span className="text-sm md:text-base font-bold">{edu.score}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[var(--foreground)]/60">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                                            <span className="text-sm md:text-base font-medium">{edu.specialization}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="px-5 py-2 bg-[var(--foreground)] text-[var(--background)] rounded-lg font-bold text-[9px] uppercase tracking-widest">
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
