"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const repos = [
    {
        name: "Resume-Optimizer",
        language: "Python",
        stars: 0,
        forks: 0,
        description: "Full-stack ATS resume optimization platform with Google Gemini 1.5 Flash LLM, STAR-method bullet rewriting, and JWT 2FA.",
        topics: ["Gemini-AI", "Flask", "React", "ATS-Optimization", "NLP"],
        url: "https://github.com/PALPANDI-P/Resume-Optimizer",
    },
    {
        name: "NEWSCAT",
        language: "Python",
        stars: 0,
        forks: 0,
        description: "Multi-modal news classification pipeline (88% accuracy) with EasyOCR text extraction, Whisper audio transcription, and FastAPI.",
        topics: ["FastAPI", "NLP", "scikit-learn", "OCR", "Whisper"],
        url: "https://github.com/PALPANDI-P/NEWSCAT",
    },
    {
        name: "Career-Tracker",
        language: "Python",
        stars: 0,
        forks: 0,
        description: "Comprehensive job application pipeline manager with interactive Kanban stages, interview calendar, and ATS compatibility analytics.",
        topics: ["Python", "FastAPI", "SQLite", "Kanban", "Analytics"],
        url: "https://github.com/PALPANDI-P/Career-Tracker",
    },
];

const langColors: Record<string, string> = {
    Python: "#3572A5",
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
};

export const GithubSection = () => {
    return (
        <section className="py-20 bg-[var(--foreground)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Profile card */}
                    <div className="lg:col-span-4">
                        <div className="flex flex-col items-start">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg">
                                    <Image
                                        src="/gitpic.png"
                                        alt="Palpandi P on GitHub"
                                        fill
                                        sizes="80px"
                                        className="object-cover object-[center_16%]"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <Github size={16} className="text-black" />
                                </div>
                            </div>

                            <div className="mb-2 text-white/40 text-xs font-bold uppercase tracking-widest">GitHub Profile</div>
                            <h2 className="text-2xl font-display font-bold text-white mb-2">@PALPANDI-P</h2>
                            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
                                MCA Graduate · Python Developer · AI/ML Enthusiast. Building practical solutions combining backend architectures, data processing, and applied AI.
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-xl font-black text-white">3+</div>
                                    <div className="text-[0.6rem] text-white/40 font-bold uppercase tracking-wider">Repos</div>
                                </div>
                                <div className="w-[1px] h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-xl font-black text-white">AI</div>
                                    <div className="text-[0.6rem] text-white/40 font-bold uppercase tracking-wider">Focus</div>
                                </div>
                            </div>

                            <a
                                href="https://github.com/PALPANDI-P"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-white/90 transition-colors"
                            >
                                View Profile
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Repos */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Code2 size={16} className="text-white/40" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">Pinned repositories</h3>
                        </div>
                        <div className="space-y-3">
                            {repos.map((repo, idx) => (
                                <motion.a
                                    key={repo.name}
                                    href={repo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={fadeIn("left", idx * 0.08)}
                                    whileHover={{ x: 6 }}
                                    className="flex items-start justify-between p-5 bg-white/4 rounded-2xl border border-white/6 hover:bg-white/7 hover:border-white/14 transition-all group"
                                >
                                    <div className="flex-grow min-w-0 pr-4">
                                        <h4 className="font-bold text-white group-hover:text-white/80 mb-1.5 font-display">
                                            {repo.name}
                                        </h4>
                                        <p className="text-sm text-white/40 mb-3 leading-relaxed">
                                            {repo.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="flex items-center gap-1.5">
                                                <div
                                                    className="w-2.5 h-2.5 rounded-full"
                                                    style={{ backgroundColor: langColors[repo.language] || "#888" }}
                                                />
                                                <span className="text-xs text-white/40 font-medium">{repo.language}</span>
                                            </div>
                                            {repo.topics.map(t => (
                                                <span key={t} className="px-2 py-0.5 rounded-md bg-white/6 text-[0.6rem] font-bold uppercase tracking-widest text-white/30 border border-white/8">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2 flex-shrink-0 text-white/30">
                                        <div className="flex items-center gap-1 text-xs">
                                            <Star size={12} />
                                            <span className="font-bold">{repo.stars}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs">
                                            <GitFork size={12} />
                                            <span className="font-bold">{repo.forks}</span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Contribution hint */}
                        <div className="mt-6 p-5 bg-white/3 rounded-2xl border border-white/6">
                            <p className="text-xs text-white/30 font-medium">
                                📊 See my contribution graph and all public repositories on{" "}
                                <a href="https://github.com/PALPANDI-P" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white underline transition-colors">
                                    github.com/PALPANDI-P
                                </a>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
