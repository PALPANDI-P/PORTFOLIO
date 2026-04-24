"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Brain, Rocket, ChevronDown } from "lucide-react";
import { fadeIn } from "@/animations/variants";
import { Starfield } from "@/components/Starfield";

const slides = [
    {
        tag: "Digital Ecosystems",
        title: "ARTIFICIAL INTELLIGENCE &",
        highlight: "MCA STUDENT",
        description: "Motivated Artificial Intelligence and MCA student with strong skills in web development and machine learning concepts.",
        cta: "Explore Research",
        link: "#projects",
    },
    {
        tag: "Web Development",
        title: "BUILDING RESPONSIVE",
        highlight: "INTERFACES",
        description: "Experienced in building responsive, mobile-friendly user interfaces and modern web layouts.",
        cta: "Career Journey",
        link: "#experience",
    }
];

export const Hero = () => {
    const [current, setCurrent] = useState(0);
    const { scrollY } = useScroll();
    
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">
            <Starfield count={80} />
            
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.05]" />
            
            {/* Massive Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ y: y1, opacity, scale }}
                        className="flex flex-col items-center text-center"
                    >
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-12"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">{slides[current].tag}</span>
                        </motion.div>

                        <h1 className="flex flex-col gap-2 mb-10">
                            <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight italic">
                                {slides[current].title}
                            </span>
                            <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-600 leading-tight">
                                {slides[current].highlight}
                            </span>
                        </h1>

                        <p className="max-w-2xl text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed mb-16">
                            {slides[current].description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={slides[current].link}
                                className="px-12 py-6 bg-white text-black rounded-[24px] font-black text-lg tracking-tight hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all"
                            >
                                {slides[current].cta}
                            </motion.a>
                            
                            <div className="flex items-center gap-10">
                                {[
                                    { icon: Github, href: "https://github.com/PALPANDI-P" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/in/palpandii" },
                                    { icon: Mail, href: "mailto:mr.palpandii@gmail.com" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        whileHover={{ y: -5, color: "#fff" }}
                                        className="text-neutral-500 transition-colors"
                                    >
                                        <social.icon size={28} strokeWidth={1.5} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">Initialize Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-transparent" />
            </motion.div>
        </section>
    );
};
