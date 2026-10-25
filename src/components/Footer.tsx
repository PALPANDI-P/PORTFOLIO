"use client";

import React from "react";
import { Github, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-[var(--foreground)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="text-xl font-display font-bold text-white tracking-tight"
                        >
                            palpandi<span className="text-[var(--accent)]">.</span>
                        </a>
                        <p className="text-xs text-white/30 mt-1.5 font-medium">
                            Python Developer · AI/ML Engineer · Chennai, India
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        {[
                            { name: "About", href: "#about" },
                            { name: "Work", href: "#projects" },
                            { name: "Skills", href: "#skills" },
                            { name: "Experience", href: "#internship" },
                            { name: "Contact", href: "#contact" },
                        ].map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(link.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-xs font-semibold text-white/30 hover:text-white/70 transition-colors uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-2">
                        {[
                            { icon: Github, href: "https://github.com/PALPANDI-P", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/palpandii/", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:mr.palpandii@gmail.com", label: "Email" },
                            { icon: Instagram, href: "https://www.instagram.com/pxlu.in", label: "Instagram" },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                aria-label={label}
                                className="p-2.5 rounded-xl bg-white/5 text-white/30 hover:bg-white/10 hover:text-white/70 transition-all"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[0.65rem] text-white/20 font-medium uppercase tracking-widest">
                        © 2026 Palpandi P. Built with Next.js & Tailwind CSS.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors"
                    >
                        Back to top
                        <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
