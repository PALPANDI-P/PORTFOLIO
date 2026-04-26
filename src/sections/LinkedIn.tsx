"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Linkedin, ExternalLink, ShieldCheck, UserPlus } from "lucide-react";
import Image from "next/image";

export const LinkedinSection = () => {
    return (
        <section className="py-24 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-[var(--foreground)]/[0.02] p-6 md:p-12 rounded-[30px] md:rounded-[50px] border border-[var(--foreground)]/5 flex flex-col items-center text-center max-w-4xl mx-auto relative overflow-hidden"
                >
                    {/* Background Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
                            {/* Layered Circles */}
                            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150" />
                            <div className="absolute inset-0 border-2 border-[var(--foreground)]/10 rounded-full scale-110" />
                            
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--foreground)]/10 p-1">
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile"
                                    fill
                                    priority
                                    sizes="160px"
                                    className="rounded-full object-cover object-[center_15%]"
                                />
                            </div>
                            
                            <div className="absolute -bottom-2 -right-2 bg-primary p-2.5 rounded-full border-4 border-[var(--background)] text-white z-20">
                                <Linkedin size={20} fill="currentColor" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-[var(--foreground)]">
                            Palpandi P <span className="text-primary font-semibold italic text-lg flex items-center gap-1">
                                (Verified <ShieldCheck size={16} />)
                            </span>
                        </h2>
                        <p className="text-xl font-medium text-[var(--foreground)]/60 mb-6">
                            AI & ML Intern | Artificial Intelligence and MCA Student
                        </p>
                        <p className="max-w-xl mx-auto text-[var(--foreground)]/40 mb-10 text-lg leading-relaxed">
                            Motivated Artificial Intelligence and MCA student with strong skills in web development and machine learning concepts.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/palpandii"
                                target="_blank"
                                className="flex items-center gap-3 px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold transition-all shadow-lg"
                            >
                                Let&apos;s Connect <UserPlus size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/palpandii"
                                target="_blank"
                                className="flex items-center gap-2 px-10 py-4 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-full font-bold hover:bg-[var(--foreground)]/10 transition-all text-[var(--foreground)]"
                            >
                                View Profile <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
