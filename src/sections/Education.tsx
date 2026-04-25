"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Starfield } from "@/components/Starfield";

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
        <section id="education" className="py-32 relative overflow-hidden">
            <Starfield count={40} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16">
                    <h2 className="text-4xl md:text-6xl font-light tracking-wide text-[#e8e8ea] mb-4">
                        Education
                    </h2>
                    <div className="w-10 h-[1px] bg-[#1a1a1f]" />
                </div>

                <div className="grid gap-6">
                    {education.map((edu, idx) => (
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
                                    <h3 className="text-xl font-light text-[#e8e8ea] mb-1">{edu.degree}</h3>
                                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider">
                                        <span className="flex items-center gap-1.5"><GraduationCap size={14} className="text-[#5a5a62]" /> {edu.institution}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#3a3a42]" />
                                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#5a5a62]" /> {edu.location}</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} className="text-xs font-medium text-[#6a6a72] px-4 py-1.5 rounded-full">
                                    {edu.period}
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {edu.details.map((detail, i) => (
                                    <li key={i} className="text-sm text-[#6a6a72] font-light flex items-start gap-2">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-[#3a3a42] flex-shrink-0" />
                                        {detail}
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
