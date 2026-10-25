"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
    {
        index: "01",
        title: "Resume Optimizer AI",
        subtitle: "Full-Stack ATS Optimization Platform with Google Gemini 1.5 Flash",
        period: "Jan – Jun 2026",
        description:
            "A full-stack ATS resume-optimization platform powered by Google Gemini 1.5 Flash (LLM integration) and a Python Flask REST API backend. It parses PDF, DOCX, and TXT resumes, conducts deep semantic job description analysis, and uses prompt-engineered workflows to rewrite bullets using the executive STAR method.",
        bullets: [
            "Full-stack ATS resume-optimization platform on Google Gemini 1.5 Flash with REST APIs for resume parsing (PDF/DOCX/TXT), JD semantic analysis, and prompt-engineered STAR-method bullet rewriting",
            "Designed a weighted JD keyword-scoring engine that extracts multi-word technical phrases and ranks relevance by category weight, frequency, and rarity (capped at 25 terms to prevent keyword stuffing)",
            "Implemented a dynamic PDF/DOCX export engine (multi-column, timeline, and sidebar layouts), JWT-based 2FA authentication, and a custom admin panel; deployed on Vercel with PostgreSQL/SQLite fallback",
        ],
        metrics: [
            { label: "ATS Score", value: "94%" },
            { label: "LLM Model", value: "Gemini 1.5 Flash" },
            { label: "Auth", value: "JWT + 2FA" },
        ],
        tech: ["Python", "Flask", "React 18", "Google Gemini AI", "SQLAlchemy", "REST APIs", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/PALPANDI-P/Resume-Optimizer",
        demo: "https://resume-optimizer-alpha-eosin.vercel.app",
        image: "/projects/resume-optimizer.jpg",
        status: "Production Ready",
        role: "Solo Full-Stack AI Developer",
    },
    {
        index: "02",
        title: "Automated News Classification (NEWSCAT)",
        subtitle: "End-to-End Multi-Modal NLP Classification Pipeline",
        period: "Jan – Apr 2026",
        description:
            "An end-to-end NLP classification pipeline that categorizes multi-modal content (text, scanned articles, audio news broadcasts) into structured editorial categories. Built on 2,000+ articles with rigorous exploratory data analysis, tokenization, stopword removal, and TF-IDF feature extraction.",
        bullets: [
            "Built an end-to-end NLP pipeline (EDA, text cleaning, tokenization, stopword removal, TF-IDF feature extraction) on a 4-category, 2,000+ article dataset",
            "Trained and compared Naive Bayes, Logistic Regression, and SVM classifiers, achieving 88% test accuracy through cross-validation and feature engineering",
            "Integrated EasyOCR for optical character recognition on scanned papers, Whisper speech-to-text, and FastAPI backend endpoints for real-time inference",
            "Evaluated models comprehensively with precision, recall, F1-score, and confusion matrix visualizations",
        ],
        metrics: [
            { label: "Test Accuracy", value: "88%" },
            { label: "Dataset Size", value: "2,000+ Articles" },
            { label: "Categories", value: "4 Topic Classes" },
        ],
        tech: ["Python", "scikit-learn", "FastAPI", "NLTK", "TF-IDF", "EasyOCR", "Whisper", "OpenCV"],
        github: "https://github.com/PALPANDI-P/NEWSCAT",
        demo: "https://newscat.vercel.app",
        image: "/projects/newscat-demo.png",
        status: "Live & Deployed",
        role: "AI/ML & NLP Engineer",
    },
    {
        index: "03",
        title: "Career Tracker",
        subtitle: "Job Application Management & Pipeline Analytics Platform",
        period: "Jan – Present",
        description:
            "A comprehensive job search management platform engineered to streamline the full recruitment lifecycle. Features an interactive Kanban pipeline, interview scheduling calendar, ATS compatibility radar charts, and automated stage follow-up alerts.",
        bullets: [
            "Engineered interactive Kanban stages (Saved, Applied, Interviewing, Offer, Rejected) with real-time status logging and SQLite/PostgreSQL persistence",
            "Integrated an ATS compatibility radar chart measuring resume-to-job keyword alignment, category coverage, and keyword density scores",
            "Built automated follow-up scheduling, interview milestone calendars, and salary benchmark logging to optimize application conversion rates",
            "Structured export engine allowing job seekers to download complete application records and interview logs in JSON, CSV, and formatted PDF summaries",
        ],
        metrics: [
            { label: "Stages Tracked", value: "5 Pipeline Stages" },
            { label: "Analytics", value: "Radar & Conversion" },
            { label: "Storage", value: "SQLite / Postgres" },
        ],
        tech: ["Python", "FastAPI", "SQLite", "React", "Data Pipelines", "REST APIs", "Analytics"],
        github: "https://github.com/PALPANDI-P/Career-Tracker",
        demo: "https://career-tracker-ashen.vercel.app",
        image: "/projects/career-tracker.jpg",
        status: "Active Platform",
        role: "Full-Stack Developer",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-28 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label mb-4">Engineering Portfolio</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight text-[var(--foreground)]">
                                Selected <br />
                                <span className="italic font-serif font-normal text-[var(--accent)]">works.</span>
                            </h2>
                            <p className="text-sm md:text-base text-[var(--muted-foreground)] mt-3 max-w-xl">
                                Real-world applications built with Python, Google Gemini LLM integration,
                                NLP pipelines, and full-stack architectures.
                            </p>
                        </div>
                        <a
                            href="https://github.com/PALPANDI-P"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--accent)]/50 transition-all group"
                        >
                            <span>Browse all GitHub repositories</span>
                            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--accent)]" />
                        </a>
                    </div>
                </motion.div>

                {/* Detailed Project Cards */}
                <div className="space-y-16">
                    {featuredProjects.map((project, idx) => (
                        <motion.article
                            key={project.index}
                            variants={fadeIn("up", 0.15)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all duration-500 shadow-xl"
                        >
                            <div className="grid lg:grid-cols-12 gap-0">

                                {/* Left / Right Image Column based on alternating index */}
                                <div className={`lg:col-span-6 relative overflow-hidden min-h-[300px] lg:min-h-full bg-[#0a0a0d] ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative w-full h-full min-h-[320px] lg:min-h-[460px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover object-center filter contrast-[1.04] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                        {/* Top badge on image */}
                                        <div className="absolute top-4 left-4 flex items-center gap-2">
                                            <span className="px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/10 flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                {project.status}
                                            </span>
                                            <span className="px-3 py-1 rounded-full text-[0.65rem] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-white/70 border border-white/10">
                                                {project.period}
                                            </span>
                                        </div>

                                        {/* Bottom watermark / title overlay on image */}
                                        <div className="absolute bottom-4 inset-x-4 flex items-end justify-between pointer-events-none">
                                            <div>
                                                <div className="text-[0.65rem] font-mono text-[var(--accent)] uppercase tracking-widest font-semibold">
                                                    {project.role}
                                                </div>
                                                <div className="text-lg font-display font-bold text-white">
                                                    {project.title}
                                                </div>
                                            </div>
                                            <span className="text-4xl lg:text-5xl font-mono font-black text-white/20">
                                                {project.index}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Text & Details Column */}
                                <div className={`lg:col-span-6 p-7 sm:p-9 lg:p-10 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <div>
                                        {/* Header */}
                                        <div className="flex items-center justify-between gap-4 mb-2">
                                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                                                Case Study / {project.index}
                                            </span>
                                            <span className="text-xs text-[var(--muted-foreground)] font-mono">
                                                {project.role}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl sm:text-3xl font-display font-black text-[var(--foreground)] tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-[var(--muted-foreground)] mt-1 mb-4">
                                            {project.subtitle}
                                        </p>

                                        {/* Metric Highlights Pill Grid */}
                                        <div className="grid grid-cols-3 gap-2 py-3 mb-5 border-y border-[var(--border)]">
                                            {project.metrics.map((m, i) => (
                                                <div key={i} className="text-center p-2 rounded-xl bg-[var(--foreground)]/3">
                                                    <div className="text-xs sm:text-sm font-mono font-bold text-[var(--foreground)]">{m.value}</div>
                                                    <div className="text-[0.62rem] text-[var(--muted-foreground)] uppercase tracking-wider">{m.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Bullets directly from resume */}
                                        <div className="space-y-2 mb-6">
                                            {project.bullets.map((bullet, i) => (
                                                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--foreground)]/80 leading-relaxed">
                                                    <CheckCircle2 size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                                                    <span>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech & Action Buttons */}
                                    <div>
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 rounded-lg bg-[var(--foreground)]/5 border border-[var(--border)] text-[0.62rem] font-mono font-medium text-[var(--muted-foreground)] uppercase"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border)]">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                                            >
                                                <Github size={14} />
                                                <span>Source Code</span>
                                            </a>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--foreground)] hover:border-[var(--accent)]/50 transition-colors"
                                            >
                                                <ExternalLink size={14} className="text-[var(--accent)]" />
                                                <span>Live Demo</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
};
