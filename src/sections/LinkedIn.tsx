"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Linkedin, UserPlus, ExternalLink } from "lucide-react";
import Image from "next/image";

export const LinkedinSection = () => {
    return (
        <section className="py-16 bg-[var(--secondary)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-10 bg-[var(--background)] rounded-3xl border border-[var(--border)]"
                >
                    {/* Profile */}
                    <div className="flex items-center gap-5 flex-shrink-0">
                        <div className="relative w-16 h-16 flex-shrink-0">
                            <div className="w-full h-full rounded-2xl overflow-hidden border border-[var(--border)] bg-white">
                                <Image
                                    src="/profile.png"
                                    alt="Palpandi P on LinkedIn"
                                    fill
                                    sizes="64px"
                                    className="object-cover object-top scale-110"
                                    style={{ mixBlendMode: 'multiply' }}
                                />
                            </div>
                            <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center border-2 border-[var(--background)]">
                                <Linkedin size={14} className="text-white" fill="white" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-[var(--foreground)] text-base">Palpandi P</div>
                            <div className="text-xs text-[var(--muted-foreground)] font-medium">Python Developer · AI/ML Engineer</div>
                            <div className="text-xs text-[var(--muted-foreground)] mt-0.5">Chennai, Tamil Nadu · Open to Hybrid</div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-[1px] h-16 bg-[var(--border)]" />

                    {/* Bio */}
                    <div className="flex-grow">
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                            Connect with me on LinkedIn for professional updates, project discussions, and collaboration opportunities in AI/ML, Python development, and NLP engineering.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                        <a
                            href="https://www.linkedin.com/in/palpandii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-[#0077B5] text-white font-semibold text-sm rounded-full hover:bg-[#006097] transition-colors"
                        >
                            <UserPlus size={15} />
                            Connect
                        </a>
                        <a
                            href="https://www.linkedin.com/in/palpandii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm rounded-full hover:bg-[var(--foreground)]/5 transition-colors"
                        >
                            <ExternalLink size={15} />
                            View Profile
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
