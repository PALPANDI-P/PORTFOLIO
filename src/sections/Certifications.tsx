"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Starfield } from "@/components/Starfield";

const certifications = [
    {
        title: "Artificial Intelligence",
        issuer: "Mindenious",
        date: "Apr 2025",
        tags: ["AI", "Machine Learning"],
    },
    {
        title: "CyberShikshaa Fundamentals",
        issuer: "Microsoft & DSCI",
        date: "Jan 2024",
        tags: ["Cybersecurity", "Awareness"],
    },
    {
        title: "Data Science",
        issuer: "Infosys Springboard",
        date: "Nov 2023",
        tags: ["Data Science", "Analytics"],
    }
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-32 relative overflow-hidden">
            <Starfield count={40} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16">
                    <h2 className="text-4xl md:text-6xl font-light tracking-wide text-[#e8e8ea] mb-4">
                        Certifications
                    </h2>
                    <div className="w-10 h-[1px] bg-[#1a1a1f]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl flex flex-col h-full"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                                <Award size={20} className="text-white/60" />
                            </div>
                            <h3 className="text-lg font-light text-white mb-2">{cert.title}</h3>
                            <p className="text-xs text-muted font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Calendar size={12} /> {cert.date} • {cert.issuer}
                            </p>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {cert.tags.map(tag => (
                                    <span key={tag} className="text-[10px] text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
