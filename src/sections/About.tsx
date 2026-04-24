"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Starfield } from "@/components/Starfield";

import { Brain, Cpu, Database, Binary, Globe, Award, Target, MessageSquare } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-black">
            <Starfield count={60} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-center">
                    
                    {/* Visual Section - 5 Columns */}
                    <div className="lg:col-span-5 relative group">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="relative aspect-square"
                        >
                            {/* The "Core" Visual - Stealth Style */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Orbiting Rings */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border border-white/5 rounded-[80px]"
                                />
                                <motion.div 
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 border border-white/[0.03] rounded-[70px] border-dashed"
                                />

                                {/* Floating Cards Matrix */}
                                <div className="grid grid-cols-2 gap-4 p-4 w-full h-full relative z-20">
                                    {[
                                        { title: "Computer Vision", icon: Globe },
                                        { title: "Deep Learning", icon: Brain },
                                        { title: "Data Analytics", icon: Database },
                                        { title: "Model Arch", icon: Cpu }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="glass rounded-[32px] p-6 border-white/5 flex flex-col items-center justify-center gap-3 transition-all hover:border-white/20 hover:bg-white/[0.03] backdrop-blur-xl"
                                        >
                                            <div className="p-3 rounded-2xl bg-white/[0.05] text-white border border-white/5">
                                                <skill.icon className="w-6 h-6" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors text-center">
                                                {skill.title}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Center Stealth Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                                <div className="w-20 h-20 glass rounded-full border-white/10 flex items-center justify-center shadow-2xl">
                                    <Binary className="text-white opacity-20" size={32} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Status Floating Box */}
                        <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 glass px-8 py-5 rounded-2xl border-white/10 flex items-center gap-4 shadow-2xl bg-black/50"
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Availability</span>
                                <span className="text-sm font-black text-white whitespace-nowrap">Open to Hybrid Roles</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Section - 7 Columns */}
                    <div className="lg:col-span-7 flex flex-col gap-12">
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-neutral-500 font-black tracking-[0.4em] uppercase text-[10px]">Intellectual DNA</span>
                                <div className="h-[1px] w-12 bg-neutral-800" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter text-white">
                                Bridging Logic with <br />
                                <span className="text-neutral-500">Intelligent Systems</span>
                            </h2>
                            <div className="space-y-8 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                                <p>
                                    <span className="text-white font-black underline decoration-white/10 decoration-4 underline-offset-8 transition-colors hover:decoration-white/30">Motivated Artificial Intelligence and MCA student</span> with strong skills in web development and machine learning concepts. Proficient in Java, Python, and C++.
                                </p>
                                <p>
                                    Experienced in building <span className="text-white">responsive, mobile-friendly user interfaces</span> and modern web layouts. Fast learner with strong communication, teamwork, and problem-solving abilities.
                                </p>
                            </div>
                        </motion.div>

                        {/* Bento Style Metric Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { val: "7.9", label: "MCA GPA (Alagappa University)", icon: Target },
                                { val: "7.6", label: "BCA GPA (Madurai Kamaraj)", icon: Award },
                                { val: "Fluent", label: "Tamil & English Languages", icon: MessageSquare }
                            ].map((met, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeIn("up", 0.4 + i * 0.1)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="p-8 glass rounded-[32px] border-white/5 hover:border-white/20 transition-all flex flex-col gap-6 group bg-white/[0.02]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white transition-colors border border-white/5">
                                            <met.icon size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-3xl font-black text-white tracking-tighter">{met.val}</div>
                                        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-snug">
                                            {met.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
