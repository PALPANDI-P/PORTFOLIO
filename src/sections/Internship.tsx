"use client";

import { Starfield } from "@/components/Starfield";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

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
        <section id="internship" className="py-32 relative overflow-hidden">
            <Starfield count={40} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16">
                    <h2 className="text-4xl md:text-6xl font-light tracking-wide text-[#e8e8ea] mb-4">
                        Internship
                    </h2>
                    <div className="w-10 h-[1px] bg-[#1a1a1f]" />
                </div>

                <div className="grid gap-6">
                    {internships.map((intern, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-light text-[#e8e8ea] mb-1">{intern.role}</h3>
                                    <div className="flex items-center gap-3 text-xs text-[#6a6a72] font-medium uppercase tracking-wider">
                                        <span className="flex items-center gap-1.5 text-[#5a5a62] py-0.5 px-1.5 rounded" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}><Briefcase size={14} /> {intern.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#3a3a42]" />
                                        <span className="flex items-center gap-1.5 text-[#5a5a62] py-0.5 px-1.5 rounded" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}><MapPin size={14} /> {intern.location}</span>
                                    </div>
                                </div>
                                <div className="text-xs font-medium text-[#6a6a72] bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                                    {intern.period}
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {intern.highlights.map((highlight, i) => (
                                    <li key={i} className="text-sm text-[#6a6a72] font-light flex items-start gap-2">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-[#3a3a42] flex-shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
