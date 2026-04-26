"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Github, Star, GitBranch, ExternalLink } from "lucide-react";
import Image from "next/image";

const repos = [
    { name: "captcha-graphical-passwords", language: "Python", stars: 12, forks: 4, description: "A New Security Primitive Based on Hard AI Problems." },
    { name: "automated-news-classification", language: "Python", stars: 15, forks: 6, description: "Built a machine learning model to classify news articles automatically." },
];

export const GithubSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-[var(--foreground)]/[0.02] p-6 md:p-12 rounded-[30px] md:rounded-[50px] border border-[var(--foreground)]/5 flex flex-col md:flex-row items-center gap-8 md:gap-16 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

                    {/* Profile Card */}
                    <div className="md:w-1/3 flex flex-col items-center text-center relative z-10">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 flex items-center justify-center">
                            {/* Layered Circles */}
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl scale-125" />
                            <div className="absolute inset-0 border-2 border-[var(--foreground)]/10 rounded-full scale-110" />
                            
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--foreground)]/10 p-1 flex-shrink-0">
                                <Image
                                    src="/profile.jpg"
                                    alt="GitHub Profile"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 128px, 160px"
                                    className="rounded-full object-cover object-[center_15%]"
                                />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold mb-3 flex items-center gap-3 text-[var(--foreground)]">
                            @PALPANDI-P <Github size={32} className="text-primary" />
                        </h2>
                        <p className="text-lg text-[var(--foreground)]/60 mb-8 font-medium">Motivated Artificial Intelligence and MCA student | Specializing in Web Development & Machine Learning.</p>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/PALPANDI-P"
                            target="_blank"
                            className="flex items-center gap-3 px-8 py-3 rounded-full bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 transition-all font-bold shadow-lg"
                        >
                            View All Repos <ExternalLink size={18} />
                        </motion.a>
                    </div>

                    {/* Repositories */}
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 relative z-10">
                        {repos.map((repo, idx) => (
                            <motion.a
                                key={repo.name}
                                href={`https://github.com/PALPANDI-P/${repo.name}`}
                                target="_blank"
                                variants={fadeIn("left", idx * 0.1)}
                                whileHover={{ x: 10 }}
                                className="p-8 bg-[var(--foreground)]/[0.02] rounded-3xl border border-[var(--foreground)]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all group hover:border-primary/20 hover:bg-[var(--foreground)]/[0.04]"
                            >
                                <div className="flex-grow">
                                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors text-[var(--foreground)]">{repo.name}</h3>
                                    <p className="text-[var(--foreground)]/40 font-medium">{repo.description}</p>
                                </div>
                                <div className="flex items-center gap-6 min-w-[120px] justify-end">
                                    <span className="flex items-center gap-2 text-[var(--foreground)]/60 font-bold">
                                        <Star size={18} className="text-primary" /> {repo.stars}
                                    </span>
                                    <span className="flex items-center gap-2 font-bold text-[var(--foreground)]/60">
                                        <GitBranch size={18} /> {repo.forks}
                                    </span>
                                    <span className="px-3 py-1 rounded-lg bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 text-[10px] font-bold uppercase tracking-widest text-[var(--foreground)]/40">
                                        {repo.language}
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
