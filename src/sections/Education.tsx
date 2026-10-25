"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, Calendar } from "lucide-react";
import { fadeIn } from "@/animations/variants";

const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Alagappa University",
        period: "Jul 2024 – Present",
        location: "Sivaganga, Tamil Nadu",
        score: "GPA: 7.9",
        focus: "Advanced Computational Methodologies, AI/ML, Data Science",
        status: "current",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Madurai Kamaraj University College",
        period: "Jun 2021 – Apr 2024",
        location: "Madurai, Tamil Nadu",
        score: "GPA: 7.3",
        focus: "Foundational CS, Java, Python, C++, Development",
        status: "completed",
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-20 bg-[var(--secondary)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="section-label mb-4">Academic Journey</div>
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-[var(--foreground)]">
                        Education <span className="italic font-serif font-normal text-[var(--muted-foreground)]">pathway.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.15 + idx * 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-[var(--background)] rounded-3xl p-7 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all"
                        >
                            {edu.status === "current" && (
                                <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[0.6rem] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">Current</span>
                                </div>
                            )}

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-[var(--foreground)]/5 text-[var(--foreground)] group-hover:bg-[var(--accent)]/10 group-hover:text-[var(--accent)] transition-colors flex-shrink-0">
                                    <GraduationCap size={22} strokeWidth={1.5} />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <h3 className="text-base font-bold text-[var(--foreground)] leading-tight mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm font-semibold text-[var(--accent)] mb-3">{edu.institution}</p>

                                    <div className="grid grid-cols-2 gap-2.5 mb-3">
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                                            <Calendar size={11} />
                                            {edu.period}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                                            <MapPin size={11} />
                                            {edu.location}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-[var(--foreground)]/6 border border-[var(--border)] rounded-full">
                                            <Award size={11} className="text-[var(--accent)]" />
                                            <span className="text-xs font-bold text-[var(--foreground)]">{edu.score}</span>
                                        </div>
                                    </div>

                                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                                        {edu.focus}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
