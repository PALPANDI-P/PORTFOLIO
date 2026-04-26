"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/animations/variants";
import { Zap, ChevronRight, GraduationCap, Flame, Target, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

const activities = [
    {
        title: "Artificial Intelligence",
        subtitle: "Professional Certification",
        host: "Mindenious",
        date: "Apr 2025",
        image: "/certs/mindnious-cert.jpg",
        tags: ["AI", "Machine Learning"],
        highlights: [
            "Comprehensive training and certification in Artificial Intelligence.",
            "Explored cutting-edge AI modeling techniques and neural networks.",
            "Gained practical experience with modern AI tools and frameworks.",
        ],
        icon: GraduationCap,
        accent: "white"
    },
    {
        title: "CyberShikshaa Fundamentals",
        subtitle: "Professional Certification",
        host: "Microsoft & DSCI",
        date: "Jan 2024",
        image: "/certs/cybershikshaa-cert.jpg",
        tags: ["Cybersecurity", "Awareness"],
        highlights: [
            "Completed the CyberShikshaa Fundamentals program by Microsoft, DSCI, and Quick Heal Academy.",
            "Developed strong foundational knowledge in cybersecurity principles.",
            "Learned essential practices for maintaining digital security and privacy.",
        ],
        icon: Target,
        accent: "white"
    },
    {
        title: "Data Science",
        subtitle: "Professional Certification",
        host: "Infosys Springboard",
        date: "Nov 2023",
        image: "/certs/infosys-cert.jpg",
        tags: ["Data Science", "Analytics"],
        highlights: [
            "Completed rigorous Data Science program via Infosys Springboard.",
            "Developed strong foundation in data analysis and visualization.",
            "Applied machine learning concepts to solve complex data challenges.",
        ],
        icon: Target,
        accent: "white"
    }
];

export const Activities = () => {
    return (
        <section id="activities" className="py-32 bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-[0.02] dark:opacity-[0.05]" />
            </div>
            
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
                        Ecosystem & Impact
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
                        Professional <span className="text-[var(--foreground)]/40">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid gap-10 lg:gap-16">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 items-center">
                                {/* Visual Card - Span 7 */}
                                <div className="lg:col-span-7 relative overflow-hidden rounded-2xl aspect-[16/10] border border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.02] transition-all duration-500">
                                    <Image 
                                        src={activity.image} 
                                        alt={activity.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    
                                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                        {activity.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase tracking-widest border border-white/10 text-white/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Sub-label Overlay */}
                                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-1.5 bg-primary text-primary-foreground rounded-lg text-[9px] font-bold uppercase tracking-widest">
                                        <activity.icon size={12} /> {activity.host}
                                    </div>
                                </div>

                                {/* Content Card - Span 5 */}
                                <div className="lg:col-span-5 space-y-6 lg:pl-8">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-[var(--foreground)]/40 text-[10px] font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-2"><Calendar size={12} className="text-primary" /> {activity.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-[var(--foreground)]/10" />
                                            <span className="flex items-center gap-2"><Target size={12} /> {activity.host}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] leading-tight tracking-tight group-hover:text-primary transition-colors">
                                            {activity.title}
                                        </h3>
                                        <p className="text-lg text-[var(--foreground)]/60 font-medium">
                                            {activity.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {activity.highlights.map((point, i) => (
                                            <div 
                                                key={i}
                                                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 hover:border-primary/20 transition-all"
                                            >
                                                <div className="mt-1.5 w-1 h-1 rounded-full bg-primary/20 flex-shrink-0" />
                                                <p className="text-[var(--foreground)]/60 text-sm leading-relaxed font-medium">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-[var(--foreground)]/40 text-[10px] font-bold uppercase tracking-[0.2em] pt-4 border-t border-[var(--foreground)]/5 w-full group/btn"
                                    >
                                        Case Study Coming Soon 
                                        <ChevronRight size={14} className="text-[var(--foreground)]/20 group-hover/btn:text-primary transition-colors" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
