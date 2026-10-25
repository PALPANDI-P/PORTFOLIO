"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Briefcase, MapPin, Calendar, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";

const internships = [
    {
        role: "AI Engineer Intern",
        company: "Infosys Springboard",
        period: "Sep 2026 – Present",
        duration: "Current Role",
        location: "Remote",
        type: "Remote",
        status: "active",
        description: "Developing intelligent AI solutions for financial document analysis and building high-performance backend pipelines for semantic information retrieval.",
        highlights: [
            "Contributed to the development of AI solutions for financial document analysis",
            "Built backend APIs and implemented advanced techniques for intelligent information retrieval",
            "Streamlined research workflows and improved the consistency of financial metrics, increasing the efficiency of financial analysis processes",
        ],
        tech: ["Python", "FastAPI", "Information Retrieval", "Financial NLP", "Vector Embeddings", "REST APIs"],
        image: "/financial-ai-pipeline.jpg",
        imageAlt: "Infosys Springboard AI Financial Analysis & Intelligent Retrieval Pipeline",
    },
    {
        role: "AI/ML Intern",
        company: "Trishik Business Solutions",
        period: "Dec 2025 – Mar 2026",
        duration: "4 Months",
        location: "Madurai, Tamil Nadu",
        type: "On-site",
        status: "completed",
        description: "Hands-on engineering of end-to-end data workflows, ETL pipelines, and supervised ML classification models in an Agile industry environment.",
        highlights: [
            "Collected and curated real-world datasets from web scraping, public APIs, and CSV/JSON sources; built automated data extraction and preprocessing workflows for structured and unstructured data to streamline the ML training pipeline",
            "Exported and organized processed datasets into CSV, JSON, and Excel formats for downstream model consumption and reporting, enabling team-wide accessibility and reproducibility",
            "Developed and evaluated ML classification models in Python and scikit-learn, running Exploratory Data Analysis (EDA) and feature engineering to surface patterns, correlations, and outliers before training",
        ],
        tech: ["Python", "scikit-learn", "pandas", "NumPy", "EDA", "Web Scraping", "Classification Models"],
        image: "/certs/trishik-letter.jpg",
        imageAlt: "Trishik Business Solutions Internship Completion Certificate",
    },
    {
        role: "Artificial Intelligence Intern",
        company: "Mindenious",
        period: "Mar 2025 – Apr 2025",
        duration: "2 Months",
        location: "Remote",
        type: "Remote",
        status: "completed",
        description: "Engaged in AI and Machine Learning foundations, critical thinking, technical research, and neural model evaluations through structured problem solving.",
        highlights: [
            "Deep-dived into AI and Machine Learning concepts, algorithms, and theoretical principles",
            "Conducted critical research and library evaluations across modern Python AI ecosystems",
            "Completed rigorous coding challenges and algorithmic evaluation benchmarks",
        ],
        tech: ["Python", "AI Theory", "Machine Learning", "Neural Concepts", "Model Benchmarks"],
        image: "/certs/mindenious-ai-cert.jpg",
        imageAlt: "Mindenious Artificial Intelligence Internship Award Certificate",
    },
];

export const Internship = () => {
    return (
        <section id="internship" className="py-28 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label mb-4">Career Track</div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight text-[var(--foreground)]">
                        Experience &<br />
                        <span className="italic font-serif font-normal text-[var(--accent)]">internships.</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Continuous vertical timeline track */}
                    <div className="absolute left-[1.15rem] md:left-[1.35rem] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {internships.map((intern, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn("up", 0.15 + idx * 0.1)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="md:pl-14">
                                    {/* Timeline indicator node */}
                                    <div className="absolute left-0 top-7 w-[1.8rem] h-[1.8rem] rounded-full bg-[var(--background)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors hidden md:flex items-center justify-center shadow-sm">
                                        <div className={`w-2 h-2 rounded-full ${intern.status === "active" ? "bg-emerald-500 animate-ping" : "bg-[var(--accent)]"}`} />
                                    </div>

                                    <div className="bg-[var(--card)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-500 shadow-md">
                                        <div className="grid md:grid-cols-12">

                                            {/* Details Left Pane */}
                                            <div className="md:col-span-7 lg:col-span-8 p-7 lg:p-9 flex flex-col justify-between">
                                                <div>
                                                    {/* Badges & Meta */}
                                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                                        <span className={`px-2.5 py-1 rounded-full text-[0.62rem] font-bold uppercase tracking-wider ${
                                                            intern.status === "active"
                                                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                                                : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                                                        }`}>
                                                            {intern.status === "active" ? "Current Position" : intern.type}
                                                        </span>
                                                        <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)] border border-[var(--border)] px-2.5 py-1 rounded-full">
                                                            {intern.duration}
                                                        </span>
                                                    </div>

                                                    {/* Role Title */}
                                                    <h3 className="text-xl lg:text-2xl font-display font-extrabold text-[var(--foreground)] tracking-tight">
                                                        {intern.role}
                                                    </h3>

                                                    {/* Company & Meta info */}
                                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 mb-4">
                                                        <span className="flex items-center gap-1.5 text-sm font-bold text-[var(--accent)]">
                                                            <Briefcase size={14} />
                                                            {intern.company}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                                                            <MapPin size={12} />
                                                            {intern.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)]">
                                                            <Calendar size={12} />
                                                            {intern.period}
                                                        </span>
                                                    </div>

                                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5 font-normal">
                                                        {intern.description}
                                                    </p>

                                                    {/* Bullet Points directly from Resume */}
                                                    <div className="space-y-2.5 mb-6">
                                                        {intern.highlights.map((point, i) => (
                                                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--foreground)]/80 leading-relaxed">
                                                                <CheckCircle2 size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                                                <span>{point}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Tech Stack Pills */}
                                                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)]">
                                                    {intern.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className="px-2.5 py-1 rounded-lg bg-[var(--foreground)]/5 border border-[var(--border)] text-[0.65rem] font-mono font-medium text-[var(--muted-foreground)]"
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Preview Document / Pipeline Image Right Pane */}
                                            <div className="md:col-span-5 lg:col-span-4 relative min-h-[260px] md:min-h-full bg-[#0a0a0c] overflow-hidden flex items-center justify-center p-3 border-t md:border-t-0 md:border-l border-[var(--border)]">
                                                <div className="relative w-full h-full min-h-[240px] rounded-2xl overflow-hidden">
                                                    <Image
                                                        src={intern.image}
                                                        alt={intern.imageAlt}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 35vw"
                                                        className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                                    
                                                    {/* Document label */}
                                                    <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-md rounded-xl p-2.5 border border-white/10 text-white text-center">
                                                        <span className="text-[0.65rem] font-mono text-white/70 tracking-wider uppercase flex items-center justify-center gap-1.5">
                                                            <Award size={12} className="text-[var(--accent)]" />
                                                            {intern.company} Evidence
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
