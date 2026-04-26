"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";


import { Brain, Cpu, Database, Globe } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05]" />
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Visual Section */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative aspect-square max-w-[400px] mx-auto"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-[var(--foreground)]/5 rounded-[60px]"
                                />
                                <div className="grid grid-cols-2 gap-3 p-4 w-full h-full relative z-20">
                                    {[
                                        { title: "Computer Vision", icon: Globe },
                                        { title: "Deep Learning", icon: Brain },
                                        { title: "Data Analytics", icon: Database },
                                        { title: "Model Arch", icon: Cpu }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02, y: -3 }}
                                            className="bg-[var(--foreground)]/[0.02] backdrop-blur-md rounded-[24px] p-5 border border-[var(--foreground)]/5 flex flex-col items-center justify-center gap-2 transition-all"
                                        >
                                            <div className="p-2.5 rounded-xl bg-[var(--foreground)]/[0.05] text-[var(--foreground)] border border-[var(--foreground)]/5">
                                                <skill.icon className="w-5 h-5" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--foreground)]/40 text-center">
                                                {skill.title}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[var(--foreground)]/40 font-bold tracking-[0.3em] uppercase text-[9px]">Intellectual DNA</span>
                                <div className="h-[1px] w-10 bg-[var(--foreground)]/10" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--foreground)] leading-[0.95] font-display mb-8">
                                Behind <br /> 
                                <span className="text-primary">The Code</span>
                            </h2>
                            <div className="space-y-6 text-[var(--foreground)]/60 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                                <p>
                                    <span className="text-[var(--foreground)] font-extrabold text-primary">Motivated Artificial Intelligence and MCA student</span> with strong skills in web development and machine learning concepts. Proficient in Java, Python, and C++.
                                </p>
                                <p>
                                    Experienced in building <span className="text-primary font-bold">responsive, mobile-friendly user interfaces</span> and <span className="text-primary font-bold">modern web layouts</span>. Fast learner with strong communication, teamwork, and problem-solving abilities.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
