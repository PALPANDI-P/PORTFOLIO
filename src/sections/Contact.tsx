"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, ArrowRight, Phone, MapPin } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => setStatus("success"), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05]" />
            </div>

            <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.02]" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col mb-20"
                >
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[var(--foreground)]/40 mb-4 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-primary/20" /> 
                        Connection
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
                        Let&apos;s Build Something <br />
                        <span className="text-[var(--foreground)]/40">Exceptional</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col space-y-10"
                    >
                        <p className="text-lg md:text-xl text-[var(--foreground)]/60 font-medium leading-relaxed max-w-lg">
                            Open to strategic partnerships, research AI collaborations, and high-impact full-stack engineering roles.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: Phone, label: "Phone", value: "82209 25062", href: "tel:+918220925062" },
                                { icon: Mail, label: "Direct Email", value: "mr.palpandii@gmail.com", href: "mailto:mr.palpandii@gmail.com" },
                                { icon: MapPin, label: "Location", value: "Madurai, Tamil Nadu", href: "https://maps.google.com/?q=Madurai,Tamil+Nadu,India" },
                                { icon: Linkedin, label: "LinkedIn", value: "Palpandi P", href: "https://www.linkedin.com/in/palpandii" },
                                { icon: Github, label: "GitHub", value: "PALPANDI-P", href: "https://github.com/PALPANDI-P" }
                            ].map((channel, i) => (
                                <a 
                                    key={i}
                                    href={channel.href}
                                    target="_blank"
                                    className="flex items-center gap-5 p-6 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 hover:border-primary/20 transition-all group"
                                >
                                    <div className="p-3 rounded-xl bg-primary/5 text-primary/40 group-hover:text-primary transition-all">
                                        <channel.icon size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-[8px] font-bold text-[var(--foreground)]/40 uppercase tracking-widest mb-0.5">{channel.label}</h4>
                                        <p className="text-[var(--foreground)] font-bold text-base">{channel.value}</p>
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
                        className="lg:col-span-7 bg-[var(--foreground)]/[0.02] p-8 md:p-10 rounded-[32px] border border-[var(--foreground)]/5 relative"
                    >
                        {status === "success" ? (
                            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <CheckCircle size={32} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-[var(--foreground)]">Message Sent</h3>
                                    <p className="text-[var(--foreground)]/60 max-w-xs mx-auto text-sm">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                                </div>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-[var(--foreground)] font-bold uppercase text-[9px] tracking-widest border-b border-[var(--foreground)]/20 pb-1 hover:opacity-70 transition-all"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-bold uppercase tracking-widest text-[var(--foreground)]/40 ml-1">Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-xl p-4 focus:outline-none focus:border-primary/30 transition-all text-[var(--foreground)] font-medium text-sm"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[9px] font-bold uppercase tracking-widest text-[var(--foreground)]/40 ml-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="email@example.com"
                                            className="w-full bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-xl p-4 focus:outline-none focus:border-primary/30 transition-all text-[var(--foreground)] font-medium text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[9px] font-bold uppercase tracking-widest text-[var(--foreground)]/40 ml-1">Message</label>
                                    <textarea
                                        required
                                        placeholder="How can I help you?"
                                        className="w-full h-32 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-2xl p-6 focus:outline-none focus:border-primary/30 transition-all text-[var(--foreground)] font-medium text-sm resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-[var(--foreground)] text-[var(--background)] py-5 rounded-xl font-bold text-base transition-all active:scale-95 disabled:opacity-50"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
