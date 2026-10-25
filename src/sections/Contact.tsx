"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Mail, Linkedin, Github, MapPin, Phone, Instagram, ExternalLink, Send, CheckCircle, ArrowUpRight } from "lucide-react";

const channels = [
    { icon: Mail, label: "Email", value: "mr.palpandii@gmail.com", href: "mailto:mr.palpandii@gmail.com", color: "hover:text-red-500" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/palpandii", href: "https://www.linkedin.com/in/palpandii/", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", value: "github.com/PALPANDI-P", href: "https://github.com/PALPANDI-P", color: "hover:text-[var(--foreground)]" },
    { icon: Phone, label: "Phone", value: "+91 82209 25062", href: "tel:+918220925062", color: "hover:text-green-500" },
    { icon: Instagram, label: "Instagram", value: "@pxlu.in", href: "https://www.instagram.com/pxlu.in", color: "hover:text-pink-500" },
    { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu (Open to Hybrid)", href: "https://maps.google.com/?q=Chennai,Tamil+Nadu,India", color: "hover:text-[var(--accent)]" },
];

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate form submission — replace with actual form handler (Formspree, EmailJS, etc.)
        setTimeout(() => setStatus("success"), 1800);
    };

    return (
        <section id="contact" className="py-28 bg-[var(--background)] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-25 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="section-label mb-5">Get in touch</div>
                    <div className="grid md:grid-cols-2 gap-8 items-end">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-tight text-[var(--foreground)]">
                            Let&apos;s build <br />
                            <span className="italic font-serif font-normal text-[var(--accent)]">something.</span>
                        </h2>
                        <p className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-sm">
                            Open to Python Developer, AI/ML Engineer, and Applications Developer roles in Chennai, Tamil Nadu (Open to Hybrid).
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left — Contact info */}
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col gap-3"
                    >
                        {channels.map((channel, i) => (
                            <a
                                key={i}
                                href={channel.href}
                                target={channel.href.startsWith("http") ? "_blank" : undefined}
                                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`group flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:border-[var(--accent)]/30 hover:bg-[var(--card)] transition-all ${channel.color}`}
                            >
                                <div className="p-2.5 rounded-xl bg-[var(--foreground)]/5 transition-colors flex-shrink-0">
                                    <channel.icon size={16} className="text-[var(--muted-foreground)] group-hover:text-current transition-colors" />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-0.5">
                                        {channel.label}
                                    </div>
                                    <div className="text-sm font-semibold text-[var(--foreground)] truncate">
                                        {channel.value}
                                    </div>
                                </div>
                                <ExternalLink size={13} className="text-[var(--muted-foreground)]/40 group-hover:text-current transition-colors flex-shrink-0" />
                            </a>
                        ))}

                        {/* Coding profiles */}
                        <div className="mt-2 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50">
                            <div className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-3">
                                Coding Profiles
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <a href="https://www.codechef.com/users/palu_coder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20 transition-all">
                                    CodeChef <ArrowUpRight size={11} />
                                </a>
                                <a href="https://www.leetcode.com/palpandi-p" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border)] text-xs font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/20 transition-all">
                                    LeetCode <ArrowUpRight size={11} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Contact form */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-[var(--card)] rounded-3xl border border-[var(--border)] p-8 md:p-10">
                            {status === "success" ? (
                                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle size={32} className="text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-[var(--foreground)] mb-2">
                                            Message sent!
                                        </h3>
                                        <p className="text-[var(--muted-foreground)] max-w-xs mx-auto text-sm leading-relaxed">
                                            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                        className="text-sm font-semibold text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-display font-bold text-[var(--foreground)] mb-1">
                                            Send me a message
                                        </h3>
                                        <p className="text-sm text-[var(--muted-foreground)]">
                                            I&apos;ll respond within 24–48 hours.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                                                Your name <span className="text-[var(--accent)]">*</span>
                                            </label>
                                            <input
                                                required
                                                name="name"
                                                type="text"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Jane Smith"
                                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 font-medium focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                                                Email address <span className="text-[var(--accent)]">*</span>
                                            </label>
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="jane@example.com"
                                                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 font-medium focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                                            Subject
                                        </label>
                                        <input
                                            name="subject"
                                            type="text"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder="Collaboration, job opportunity, etc."
                                            className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 font-medium focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                                            Message <span className="text-[var(--accent)]">*</span>
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or opportunity..."
                                            rows={5}
                                            className="w-full bg-[var(--background)] border border-[var(--border)] rounded-2xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]/50 font-medium focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/20 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full flex items-center justify-center gap-2.5 bg-[var(--foreground)] text-[var(--background)] py-4 px-6 rounded-xl font-semibold text-sm hover:opacity-85 disabled:opacity-50 transition-all"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-[var(--background)]/30 border-t-[var(--background)] rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                Send message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-[var(--muted-foreground)]">
                                        Or email me directly at{" "}
                                        <a href="mailto:mr.palpandii@gmail.com" className="text-[var(--accent)] hover:underline font-medium">
                                            mr.palpandii@gmail.com
                                        </a>
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
