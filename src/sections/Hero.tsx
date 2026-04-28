"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Facebook, X, ChevronDown } from "lucide-react";


const slides = [
    {
        tag: "Digital Ecosystems",
        title: "PALPANDI P",
        highlight: "MCA STUDENT",
        description: "Motivated Artificial Intelligence student with strong skills in Machine Learning concepts and AI",
        cta: "Explore Work",
        link: "#projects",
    },
    {
        tag: "AI & ML DEVELOPER",
        title: "AI & ML",
        highlight: "ENTHUSIAST",
        description: "Passionate about transforming ideas into intelligent solutions",
        cta: "Career Journey",
        link: "#internship",
    }
];

export const Hero = () => {
    const [current, setCurrent] = useState(0);
    const { scrollY } = useScroll();
    
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);
    const scaleTransform = useTransform(scrollY, [0, 300], [1, 0.9]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            filter: "blur(20px)",
            transition: { duration: 0.8 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0, filter: "blur(10px)" },
        visible: { 
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
        }
    };



    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent selection:bg-primary/30 selection:text-primary-foreground">
            <div className="absolute inset-0 z-0 bg-noise pointer-events-none opacity-[0.03]" />
            
            <div className="absolute inset-0 z-0 dark:bg-black hidden dark:block" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center py-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ y: y1, opacity: opacityTransform, scale: scaleTransform }}
                        className="flex flex-col items-center text-center"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="flex items-center gap-3 px-6 py-2 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-full backdrop-blur-md">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[var(--foreground)]/50 ml-1">{slides[current].tag}</span>
                            </div>
                        </motion.div>

                        <div className="relative group/title">
                            {/* Floating Social Icons Surrounding Name */}
                            <motion.div 
                                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -left-12 lg:-left-24 z-20"
                            >
                                <a href="https://github.com/PALPANDI-P" target="_blank" className="p-3 bg-blue-50/80 dark:bg-[#181717] rounded-full backdrop-blur-md border border-blue-200/50 dark:border-white/10 text-[#181717] dark:text-white shadow-xl hover:scale-125 transition-all block group">
                                    <Github size={20} />
                                </a>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -right-12 lg:-right-24 z-20"
                            >
                                <a href="https://www.linkedin.com/in/palpandii" target="_blank" className="p-3 bg-blue-50/80 dark:bg-white/10 rounded-full backdrop-blur-md border border-[#0077B5]/20 text-[#0077B5] shadow-xl hover:scale-125 transition-all block">
                                    <Linkedin size={20} fill="currentColor" />
                                </a>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, -12, 0], x: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-0 -right-16 lg:-right-32 z-20"
                            >
                                <a href="mailto:mr.palpandii@gmail.com" className="p-3 bg-blue-50/80 dark:bg-white/10 rounded-full backdrop-blur-md border border-[#EA4335]/20 text-[#EA4335] shadow-xl hover:scale-125 transition-all block">
                                    <Mail size={20} />
                                </a>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [0, 12, 0], x: [0, 12, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute top-0 -left-16 lg:-left-32 z-20"
                            >
                                <a href="#" className="p-3 bg-blue-50/80 dark:bg-white/10 rounded-full backdrop-blur-md border border-[#1877F2]/20 text-[#1877F2] shadow-xl hover:scale-125 transition-all block">
                                    <Facebook size={20} fill="currentColor" />
                                </a>
                            </motion.div>

                            <motion.h1 variants={itemVariants} className="flex flex-col items-center gap-0 mb-8">
                                <div className="overflow-hidden">
                                    <motion.span 
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                        className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-[var(--foreground)] leading-[0.9] font-display"
                                    >
                                        {slides[current].title}
                                    </motion.span>
                                </div>
                                <motion.span 
                                    variants={itemVariants}
                                    className="text-lg md:text-2xl lg:text-3xl font-bold tracking-[0.2em] text-primary uppercase font-display mt-2"
                                >
                                    {slides[current].highlight}
                                </motion.span>
                            </motion.h1>
                        </div>

                        <motion.p variants={itemVariants} className="max-w-xl text-base md:text-lg text-[#0369a1] dark:text-[#f8fafc]/60 font-medium leading-relaxed mb-12 px-4">
                            {slides[current].description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                            <motion.a
                                whileHover={{ scale: 1.02, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                href={slides[current].link}
                                className="px-12 py-5 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold text-lg tracking-tight shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all flex items-center gap-3"
                            >
                                {slides[current].cta}
                                <ArrowRight size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <div className="flex flex-col items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                    <span className="text-[10px] font-bold uppercase tracking-[0.8em] text-[var(--foreground)]/10 group-hover:text-primary transition-colors">Discover</span>
                    <motion.div 
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="p-2 rounded-full border border-[var(--foreground)]/5"
                    >
                        <ChevronDown size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};
