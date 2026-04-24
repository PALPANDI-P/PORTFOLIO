"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-3xl font-bold text-gradient">Palpandi.in</div>

                    <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/PALPANDI-P" target="_blank" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/palpandii" target="_blank" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:mr.palpandii@gmail.com" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-sm text-neutral-500">
                        © 2026 Palpandi P. All rights reserved. Built with Next.js & Framer Motion.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 group text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Subtle Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        </footer>
    );
};
