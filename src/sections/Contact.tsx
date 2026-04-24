"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Starfield } from "@/components/Starfield";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            <Starfield count={40} />
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-24"
                >
                    <span className="text-[11px] font-black tracking-[0.4em] uppercase text-neutral-500 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-neutral-800" /> 
                        Connection
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Let&apos;s Talk <span className="text-neutral-500">Innovation</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col space-y-12"
                    >
                        <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed">
                            Open to strategic partnerships, research AI collaborations, and high-impact full-stack engineering roles.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: "Phone", value: "82209 25062", href: "tel:+918220925062" },
                                { icon: Mail, label: "Direct Email", value: "mr.palpandii@gmail.com", href: "mailto:mr.palpandii@gmail.com" },
                                { icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu", href: "https://maps.google.com/?q=Madurai,Tamil+Nadu,India" },
                                { icon: Linkedin, label: "LinkedIn Network", value: "Palpandi P", href: "https://www.linkedin.com/in/palpandii" },
                                { icon: Github, label: "GitHub Repositories", value: "PALPANDI-P", href: "https://github.com/PALPANDI-P" }
                            ].map((channel, i) => (
                                <a 
                                    key={i}
                                    href={channel.href}
                                    target="_blank"
                                    className="flex items-center gap-6 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
                                >
                                    <div className="p-4 rounded-2xl bg-white/5 text-neutral-500 group-hover:bg-white group-hover:text-black transition-all">
                                        <channel.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-1">{channel.label}</h4>
                                        <p className="text-white font-bold text-lg">{channel.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white/[0.02] p-8 md:p-14 rounded-[40px] border border-white/5 relative"
                    >
                        {status === "success" ? (
                            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-8 animate-zoomIn">
                                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/10">
                                    <CheckCircle size={48} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white">Transmission Received</h3>
                                    <p className="text-neutral-400 max-w-sm mx-auto">Thank you for reaching out. I&apos;ll get back to you across the frequency shortly.</p>
                                </div>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-widest border-b border-white pb-2 hover:border-transparent transition-all"
                                >
                                    Clear Matrix & Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-1">Entity Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-white transition-all text-white font-medium"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-1">Digital Identity</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="name@company.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:border-white transition-all text-white font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 ml-1">Project Concept</label>
                                    <textarea
                                        required
                                        placeholder="Briefly outline your vision..."
                                        className="w-full h-40 bg-white/5 border border-white/10 rounded-[32px] p-8 focus:outline-none focus:border-white transition-all text-white font-medium resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full group relative overflow-hidden bg-white text-black py-6 rounded-[24px] font-black text-lg transition-all active:scale-95 disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {status === "loading" ? "SYNCHRONIZING..." : "INITIATE TRANSMISSION"}
                                        {status !== "loading" && <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />}
                                    </span>
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
