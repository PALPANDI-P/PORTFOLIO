"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-[var(--foreground)]/5 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-2xl font-bold text-[var(--foreground)] tracking-tighter">PALPANDI<span className="text-[var(--foreground)]/40">.in</span></div>

                    <div className="flex items-center gap-8 text-[10px] font-bold text-[var(--foreground)]/40 uppercase tracking-[0.2em]">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/PALPANDI-P" target="_blank" className="p-3 bg-[var(--foreground)]/5 rounded-full hover:bg-primary/10 transition-colors text-[var(--foreground)]/60 hover:text-primary"><Github size={18} /></a>
                        <a href="https://www.linkedin.com/in/palpandii" target="_blank" className="p-3 bg-[var(--foreground)]/5 rounded-full hover:bg-primary/10 transition-colors text-[var(--foreground)]/60 hover:text-primary"><Linkedin size={18} /></a>
                        <a href="mailto:mr.palpandii@gmail.com" className="p-3 bg-[var(--foreground)]/5 rounded-full hover:bg-primary/10 transition-colors text-[var(--foreground)]/60 hover:text-primary"><Mail size={18} /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--foreground)]/5">
                    <p className="text-[10px] text-[var(--foreground)]/20 font-bold uppercase tracking-widest">
                        © 2026 Palpandi P. MCA STUDENT & AI ENTHUSIAST.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group text-[10px] font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors text-[var(--foreground)]/40"
                    >
                        Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};
