"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Brain, Cpu, Database, Sparkles, Terminal, CheckCircle2, MapPin, GraduationCap, Award, ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

export const About = () => {
    return (
        <section id="about" className="py-28 relative overflow-hidden bg-transparent">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Visual Section — Modern Bento Stack: Developer Terminal + Candid Snapshot */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Card 1: Interactive Developer Terminal Blueprint */}
                            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-xl shadow-xl overflow-hidden">
                                {/* macOS Terminal Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-[var(--foreground)]/[0.04] border-b border-[var(--border)]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--muted-foreground)]">
                                        <Terminal size={12} className="text-[var(--accent)]" />
                                        <span>palpandi_profile.py</span>
                                    </div>
                                    <div className="w-8" />
                                </div>

                                {/* Code Content */}
                                <div className="p-5 font-mono text-xs sm:text-[0.82rem] leading-relaxed text-[var(--foreground)]/80 space-y-1.5 select-text overflow-x-auto">
                                    <div className="text-[var(--muted-foreground)]">// Profile Blueprint & Core Architecture</div>
                                    <div>
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">class </span>
                                        <span className="text-blue-600 dark:text-blue-400 font-bold">Palpandi</span>:
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-emerald-600 dark:text-emerald-400">degree</span> = <span className="text-amber-600 dark:text-amber-300">&quot;MCA Graduate&quot;</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-emerald-600 dark:text-emerald-400">role</span> = <span className="text-amber-600 dark:text-amber-300">&quot;AI/ML &amp; Python Developer&quot;</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-emerald-600 dark:text-emerald-400">location</span> = <span className="text-amber-600 dark:text-amber-300">&quot;Chennai, India 📍&quot;</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-emerald-600 dark:text-emerald-400">focus</span> = [
                                        <span className="text-amber-600 dark:text-amber-300">&quot;FastAPI&quot;</span>, 
                                        <span className="text-amber-600 dark:text-amber-300">&quot;Gemini 1.5&quot;</span>, 
                                        <span className="text-amber-600 dark:text-amber-300">&quot;NLP&quot;</span>]
                                    </div>
                                    <div className="pl-4 pt-1">
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">def </span>
                                        <span className="text-blue-600 dark:text-blue-400 font-bold">build_solution</span>(self):
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-purple-600 dark:text-purple-400 font-bold">return </span>
                                        <span className="text-emerald-600 dark:text-emerald-300">&quot;Practical, production-grade AI software&quot;</span>
                                    </div>
                                </div>

                                {/* Terminal Output / Status Strip */}
                                <div className="px-5 py-3 bg-[var(--foreground)]/[0.02] border-t border-[var(--border)] flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>Status: Open to Opportunities</span>
                                    </div>
                                    <span className="text-[var(--muted-foreground)] font-mono text-[0.7rem]">Python 3.11</span>
                                </div>
                            </div>

                            {/* Card 2: Candid Work Snapshot (Desk & Coffee) + Accolades Strip */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {/* Candid Snapshot Polaroid */}
                                <div className="group/snap bg-white dark:bg-[#1a1a1e] p-3 pb-8 rounded-xl shadow-lg border border-[var(--border)] relative -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="relative aspect-[4/3.8] w-full rounded-lg overflow-hidden bg-neutral-900 border border-black/5">
                                        <Image
                                            src="/office-image-2.png"
                                            alt="Palpandi P at workstation"
                                            fill
                                            sizes="220px"
                                            className="object-cover object-center group-hover/snap:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="font-serif italic text-neutral-800 dark:text-neutral-200 text-xs mt-2.5 text-center">
                                        &quot;teamwork makes dream work&quot;
                                    </p>
                                </div>

                                {/* Verified Credentials Bento Box */}
                                <div className="flex flex-col justify-between gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]/60 backdrop-blur-sm">
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0 mt-0.5">
                                                <Award size={15} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[var(--foreground)]">Infosys Springboard</div>
                                                <div className="text-[0.72rem] text-[var(--muted-foreground)]">AI &amp; Python Intern</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-2.5">
                                            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 flex-shrink-0 mt-0.5">
                                                <GraduationCap size={15} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold text-[var(--foreground)]">MCA Post-Graduate</div>
                                                <div className="text-[0.72rem] text-[var(--muted-foreground)]">Master of Computer Apps</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between text-[0.7rem] font-semibold text-[var(--muted-foreground)]">
                                        <span className="flex items-center gap-1">
                                            <MapPin size={11} className="text-[var(--accent)]" /> Chennai, India
                                        </span>
                                        <span className="text-emerald-500 font-bold">Verified</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Section — Modern, Best Visible, Design-Based Details */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Section Eyebrow */}
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] font-mono font-bold tracking-wider uppercase text-[0.68rem]">
                                    01 // ENGINEERING PROFILE
                                </span>
                                <div className="h-px flex-grow bg-gradient-to-r from-[var(--border)] to-transparent" />
                            </div>

                            {/* Headline */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--foreground)] font-display leading-[1.08] mb-3">
                                    Behind <span className="text-[var(--accent)]">The Code</span>
                                </h2>
                                <p className="text-base sm:text-lg text-[var(--muted-foreground)] font-medium leading-relaxed max-w-2xl">
                                    Bridging cutting-edge AI models with rock-solid Python backend architectures to turn complex concepts into dependable, high-impact software.
                                </p>
                            </div>

                            {/* Profile Bio Paragraph */}
                            <div className="text-[var(--foreground)]/80 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                                <p>
                                    I am an <strong className="text-[var(--foreground)] font-bold">MCA graduate and AI/ML Developer</strong> based in Chennai. Rather than treating artificial intelligence as isolated algorithms in research notebooks, my focus is designing complete, production-grade applications that combine robust <strong className="text-[var(--foreground)] font-bold">FastAPI &amp; Flask backends</strong>, structured databases, and responsive interfaces.
                                </p>
                                <p>
                                    From building an ATS resume optimization engine with <strong className="text-[var(--accent)] font-semibold">Google Gemini 1.5 Flash LLM</strong> to architecting multi-modal news classification pipelines achieving <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">88% accuracy</strong> via EasyOCR and Whisper speech-to-text, I bring strong analytical thinking and fast iteration to every codebase.
                                </p>
                            </div>

                            {/* 3 High-Visibility Capability Cards */}
                            <div className="grid grid-cols-1 gap-3.5 pt-2">
                                {/* Card 1: Applied LLMs & NLP */}
                                <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Brain size={20} />
                                        </div>
                                        <div className="space-y-1.5 flex-grow">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] font-display">
                                                    Applied AI &amp; Generative LLM Pipelines
                                                </h3>
                                                <span className="text-[0.68rem] font-mono text-[var(--accent)] font-semibold uppercase tracking-wider">Production</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                                                Practical experience integrating Google Gemini 1.5 Flash for automated ATS resume scoring, STAR-method bullet point rewriting, and context-aware natural language generation.
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {["Gemini 1.5 Flash", "Flask", "React", "ATS Scoring", "NLP"].map(tag => (
                                                    <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--foreground)]/[0.04] text-[0.68rem] font-medium text-[var(--foreground)]/70 border border-[var(--border)]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Multi-Modal Audio & Vision Processing */}
                                <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Cpu size={20} />
                                        </div>
                                        <div className="space-y-1.5 flex-grow">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] font-display">
                                                    Multi-Modal Vision &amp; Speech Classification
                                                </h3>
                                                <span className="text-[0.68rem] font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">88% Acc</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                                                Built automated multi-modal news classification pipeline extracting optical text with EasyOCR, transcribing audio streams via OpenAI Whisper, and classifying across categories with scikit-learn.
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {["FastAPI", "EasyOCR", "Whisper", "OpenCV", "scikit-learn"].map(tag => (
                                                    <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--foreground)]/[0.04] text-[0.68rem] font-medium text-[var(--foreground)]/70 border border-[var(--border)]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Backend Engineering & Structured APIs */}
                                <div className="p-4 sm:p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--card)] hover:border-[var(--accent)]/40 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform flex-shrink-0">
                                            <Database size={20} />
                                        </div>
                                        <div className="space-y-1.5 flex-grow">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] font-display">
                                                    Fast Backend Architecture &amp; Data Persistence
                                                </h3>
                                                <span className="text-[0.68rem] font-mono text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">REST / SQL</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed">
                                                Designing high-throughput asynchronous APIs with FastAPI, structured SQLite/PostgreSQL schemas, JWT 2FA token security, and interactive Kanban pipeline data stores.
                                            </p>
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {["Python", "FastAPI", "PostgreSQL", "SQLite", "JWT Auth"].map(tag => (
                                                    <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--foreground)]/[0.04] text-[0.68rem] font-medium text-[var(--foreground)]/70 border border-[var(--border)]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Strip */}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-xs hover:opacity-90 transition-opacity"
                                >
                                    <span>Explore Featured Projects</span>
                                    <ArrowUpRight size={14} />
                                </a>

                                <a
                                    href="https://github.com/PALPANDI-P"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] font-bold text-xs hover:border-[var(--accent)] transition-colors"
                                >
                                    <Code2 size={14} className="text-[var(--accent)]" />
                                    <span>Browse GitHub @PALPANDI-P</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
