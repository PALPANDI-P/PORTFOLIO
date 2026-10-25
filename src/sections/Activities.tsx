"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Calendar, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

const certifications = [
    {
        title: "Principles of Generative AI",
        subtitle: "Professional Credential",
        issuer: "Infosys Springboard",
        date: "May 2026",
        image: "/certs/infosys-springboard-cert.jpg",
        tags: ["Generative AI", "LLMs", "Prompt Engineering"],
        badge: "AI / GenAI",
    },
    {
        title: "Artificial Intelligence Internship Certificate",
        subtitle: "Internship Award & Credential",
        issuer: "Mindenious",
        date: "Mar – Apr 2025",
        image: "/certs/mindenious-ai-cert.jpg",
        tags: ["Machine Learning", "Neural Networks", "AI Research"],
        badge: "AI Internship",
    },
    {
        title: "Data Science Certification",
        subtitle: "Professional Credential",
        issuer: "Infosys Springboard",
        date: "Nov 2023",
        image: "/certs/infosys-springboard-cert.jpg",
        tags: ["Data Science", "Analytics", "EDA", "Pipelines"],
        badge: "Data Science",
    },
    {
        title: "CyberShikshaa Fundamentals",
        subtitle: "Certificate of Achievement",
        issuer: "Microsoft & DSCI",
        date: "Apr 2024",
        image: "/certs/cybershikshaa-cert.jpg",
        tags: ["Cybersecurity", "Network Safety", "Awareness"],
        badge: "Security",
    },
];

export const Activities = () => {
    return (
        <section id="activities" className="py-28 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label mb-4">Accreditation</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight text-[var(--foreground)]">
                                Verified <br />
                                <span className="italic font-serif font-normal text-[var(--accent)]">certifications.</span>
                            </h2>
                            <p className="text-sm md:text-base text-[var(--muted-foreground)] mt-2">
                                Official credentials and internship awards earned across AI, Data Science, and Cybersecurity.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.1 + idx * 0.08)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="group relative bg-[var(--card)] rounded-3xl border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-500 flex flex-col justify-between shadow-lg hover:-translate-y-1"
                        >
                            {/* Certificate Image Preview */}
                            <div className="relative aspect-[4/3] w-full bg-[#111114] overflow-hidden border-b border-[var(--border)]">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                <div className="absolute top-3 right-3">
                                    <span className="px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-[var(--accent)] border border-white/10">
                                        {cert.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs text-[var(--accent)] font-semibold mb-1">
                                        <Award size={13} />
                                        <span>{cert.issuer}</span>
                                    </div>

                                    <h3 className="font-display font-extrabold text-base text-[var(--foreground)] tracking-tight line-clamp-2 leading-snug">
                                        {cert.title}
                                    </h3>

                                    <div className="flex items-center gap-1 text-[0.68rem] font-mono text-[var(--muted-foreground)] mt-2 mb-4">
                                        <Calendar size={11} />
                                        <span>{cert.date}</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-[var(--border)] flex flex-wrap gap-1">
                                    {cert.tags.map(t => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 rounded-md bg-[var(--foreground)]/5 text-[0.6rem] font-mono text-[var(--muted-foreground)]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
