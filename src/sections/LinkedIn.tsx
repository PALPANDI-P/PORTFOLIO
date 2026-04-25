"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Linkedin, ExternalLink, ShieldCheck, UserPlus } from "lucide-react";
import Image from "next/image";

export const LinkedinSection = () => {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="glass p-6 md:p-12 rounded-[30px] md:rounded-[50px] border-blue-500/10 flex flex-col items-center text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
                >
                    {/* Animated Background Pulse */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />

                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="relative w-40 h-40 mb-8">
                            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-125 animate-pulse" />
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                fill
                                priority
                                sizes="(max-width: 768px) 160px, 160px"
                                className="rounded-full border-8 border-white/5 object-cover object-[center_15%] relative"
                            />
                            <div className="absolute bottom-2 right-2 bg-blue-600 p-2 rounded-full border-4 border-background text-white">
                                <Linkedin size={18} fill="currentColor" />
                            </div>
                            {/* Hybrid Status Badge */}
                            <div className="absolute -top-2 -right-4 glass px-3 py-1.5 rounded-xl border-white/10 flex items-center gap-2 shadow-xl bg-emerald-500/10 backdrop-blur-xl">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Hybrid</span>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                            Palpandi P <span className="text-blue-500 font-semibold italic text-lg flex items-center gap-1">
                                (Verified <ShieldCheck size={16} />)
                            </span>
                        </h2>
                        <p className="text-xl font-medium text-muted-foreground mb-6">
                            AI & ML Intern | Artificial Intelligence and MCA Student
                        </p>
                        <p className="max-w-xl mx-auto text-muted-foreground mb-10 text-lg leading-relaxed">
                            Motivated Artificial Intelligence and MCA student with strong skills in web development and machine learning concepts. Open to Hybrid Roles.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/palpandii"
                                target="_blank"
                                className="flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
                            >
                                Let&apos;s Connect <UserPlus size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/palpandii"
                                target="_blank"
                                className="flex items-center gap-2 px-10 py-4 glass rounded-full font-bold border-blue-500/20 hover:bg-white/10 transition-all hover:-translate-y-1"
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
