"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download, Sparkles, Terminal, FileText } from "lucide-react";
import Image from "next/image";

const roles = [
    "AI/ML Engineer",
    "Python Developer",
    "Google Gemini LLM Integrator",
    "NLP & Semantic Analyst",
    "FastAPI & Flask Backend Developer"
];

const marqueeItems = [
    "PYTHON",
    "MACHINE LEARNING",
    "GOOGLE GEMINI 1.5 FLASH",
    "NLP & TEXT CLASSIFICATION",
    "FASTAPI & FLASK",
    "SCIKIT-LEARN",
    "SQLITE & POSTGRESQL",
    "REST APIS",
    "INFOSYS SPRINGBOARD",
    "CHENNAI, TAMIL NADU"
];

export const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && charIndex <= currentRole.length) {
            setDisplayed(currentRole.slice(0, charIndex));
            timeout = setTimeout(() => setCharIndex(c => c + 1), 60);
        } else if (!isDeleting && charIndex > currentRole.length) {
            timeout = setTimeout(() => setIsDeleting(true), 2200);
        } else if (isDeleting && charIndex >= 0) {
            setDisplayed(currentRole.slice(0, charIndex));
            timeout = setTimeout(() => setCharIndex(c => c - 1), 35);
        } else {
            setIsDeleting(false);
            setRoleIndex(i => (i + 1) % roles.length);
            setCharIndex(0);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--background)] pt-24 md:pt-28"
        >
            {/* Subtle dot grid */}
            <div className="absolute inset-0 bg-grid opacity-60 dark:opacity-30 pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[var(--accent)]/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[var(--foreground)]/3 rounded-full blur-[110px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full my-auto relative z-10 py-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Left Column — Editorial Intro */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col"
                    >
                        {/* Top Badges / Sub-header */}
                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
                                    Open to Opportunities
                                </span>
                            </div>

                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] text-[0.68rem] font-medium text-[var(--muted-foreground)]">
                                <MapPin size={12} className="text-[var(--accent)]" />
                                <span>Chennai, Tamil Nadu · Open to Hybrid</span>
                            </div>
                        </motion.div>

                        {/* Display Headline */}
                        <motion.div variants={itemVariants}>
                            <div className="font-mono text-xs text-[var(--muted-foreground)] tracking-widest uppercase mb-3 flex items-center gap-2">
                                <Terminal size={13} className="text-[var(--accent)]" />
                                <span>developer & ai/ml engineer</span>
                            </div>
                            <h1 className="font-display font-extrabold tracking-tight leading-[0.98] text-[var(--foreground)]">
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-[var(--muted-foreground)] font-light mb-1">
                                    hey, I&apos;m
                                </span>
                                <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-[92px] text-[var(--foreground)] tracking-tight">
                                    Palpandi<span className="text-[var(--accent)]">.</span>
                                </span>
                            </h1>
                        </motion.div>

                        {/* Interactive Dynamic Typewriter Role */}
                        <motion.div variants={itemVariants} className="mt-5 mb-5">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm">
                                <Sparkles size={16} className="text-[var(--accent)] animate-spin-slow" />
                                <span className="text-sm md:text-base font-medium text-[var(--muted-foreground)]">
                                    Focus:{" "}
                                    <strong className="text-[var(--foreground)] font-bold">
                                        {displayed}
                                        <span className="animate-pulse text-[var(--accent)]">|</span>
                                    </strong>
                                </span>
                            </div>
                        </motion.div>

                        {/* Bio / Summary directly aligned with user's resume */}
                        <motion.div variants={itemVariants}>
                            <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl">
                                AI/ML Engineer and Python Developer with two AI/ML internships delivering end-to-end
                                machine learning pipelines, NLP systems, and full-stack AI applications with{" "}
                                <span className="text-[var(--foreground)] font-semibold">Google Gemini 1.5 Flash</span> and{" "}
                                <span className="text-[var(--foreground)] font-semibold">FastAPI</span>.
                            </p>
                        </motion.div>

                        {/* Metric Highlights Pill Row */}
                        <motion.div variants={itemVariants} className="mt-6 grid grid-cols-3 gap-3 max-w-lg">
                            <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
                                <div className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">88%</div>
                                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">NLP Accuracy</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
                                <div className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">2</div>
                                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">AI Internships</div>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-[var(--card)] border border-[var(--border)]">
                                <div className="text-xl sm:text-2xl font-extrabold text-[var(--accent)]">MCA</div>
                                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">7.9 CGPA</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="group flex items-center gap-2.5 px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-full hover:opacity-90 transition-all text-sm shadow-md"
                            >
                                View selected works
                                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="flex items-center gap-2 px-6 py-3.5 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-full hover:bg-[var(--foreground)]/5 transition-all text-sm"
                            >
                                <Mail size={15} />
                                Get in touch
                            </a>

                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="flex items-center gap-2 px-5 py-3.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-semibold text-sm transition-colors rounded-full hover:bg-[var(--foreground)]/5"
                            >
                                <FileText size={15} className="text-[var(--accent)]" />
                                Resume & Bio
                            </a>
                        </motion.div>

                        {/* Social profiles row */}
                        <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com/PALPANDI-P"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/40 transition-all"
                            >
                                <Github size={13} />
                                <span>github.com/PALPANDI-P</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/palpandii/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/40 transition-all"
                            >
                                <Linkedin size={13} className="text-[#0077b5]" />
                                <span>linkedin/palpandii</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column — Polaroid Instant Photo Card with Reference Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 flex justify-center lg:justify-end py-6"
                    >
                        <div className="relative group select-none max-w-[340px] sm:max-w-[370px] w-full">

                            {/* Secondary Polaroid stacked behind (tilted right, matching user's reference) */}
                            <div 
                                className="absolute inset-0 bg-white/90 dark:bg-[#202024] rounded-lg shadow-xl rotate-[4.5deg] translate-x-3 translate-y-3 border border-black/5 dark:border-white/10 opacity-75 group-hover:rotate-[6.5deg] group-hover:translate-x-4 transition-all duration-500 pointer-events-none"
                                aria-hidden="true"
                            >
                                <div className="p-3.5 pb-12 h-full flex flex-col">
                                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900 rounded-[3px] opacity-40" />
                                </div>
                            </div>

                            {/* Primary Polaroid Card (tilted subtly left, floating gently) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-white dark:bg-[#18181b] p-3.5 sm:p-4 pb-12 sm:pb-14 rounded-lg shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22),0_4px_16px_rgba(0,0,0,0.08)] border border-black/5 dark:border-white/10 -rotate-[2.5deg] group-hover:rotate-0 transition-transform duration-500"
                            >
                                {/* Photo aperture */}
                                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[3px] bg-neutral-900 border border-black/10">
                                    <Image
                                        src="/gitpic.png"
                                        alt="Palpandi P — usually thinking about an interaction."
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 320px, 380px"
                                        className="object-cover object-[center_16%] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                    />
                                    {/* Subtle photographic vignette */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-black/5" />
                                </div>

                                {/* Polaroid bottom chin with italic quote */}
                                <div className="pt-3.5 sm:pt-4 px-1">
                                    <p className="font-serif italic text-neutral-800 dark:text-neutral-200 text-sm sm:text-[0.98rem] tracking-tight leading-snug">
                                        usually thinking about an interaction.
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Seamless Infinite Marquee Strip (Samay Maurya Inspiration) */}
            <div className="w-full border-y border-[var(--border)] bg-[var(--card)]/50 backdrop-blur-sm py-4 overflow-hidden relative z-10">
                <div className="flex select-none gap-8 whitespace-nowrap animate-marquee">
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-8 text-[0.72rem] sm:text-xs font-mono font-semibold tracking-[0.25em] text-[var(--muted-foreground)] uppercase">
                            <span>{item}</span>
                            <span className="text-[var(--accent)]">✦</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
