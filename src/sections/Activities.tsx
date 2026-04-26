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
        <section id="activities" className="py-32 relative overflow-hidden bg-black">

            
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
                        Ecosystem & Impact
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        Professional <span className="text-neutral-500">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid gap-12 lg:gap-20">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative"
                        >
                            <div className="grid lg:grid-cols-12 gap-10 items-center">
                                {/* Visual Card - Span 7 */}
                                <div className="lg:col-span-7 relative overflow-hidden rounded-[32px] aspect-[16/10] border border-white/5 bg-neutral-900 group-hover:border-white/20 transition-all duration-700">
                                    <Image 
                                        src={activity.image} 
                                        alt={activity.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 800px"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    
                                    <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
                                        {activity.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 text-white/70">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Sub-label Overlay */}
                                    <div className="absolute top-8 left-8 flex items-center gap-3 px-4 py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-transform group-hover:-translate-y-1">
                                        <activity.icon size={14} /> {activity.host}
                                    </div>
                                </div>

                                {/* Content Card - Span 5 */}
                                <div className="lg:col-span-5 space-y-8 lg:pl-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 text-neutral-500 text-xs font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-2"><Calendar size={14} /> {activity.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-neutral-800" />
                                            <span className="flex items-center gap-2"><Target size={14} /> {activity.host}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                            {activity.title}
                                        </h3>
                                        <p className="text-xl text-neutral-400 font-medium">
                                            {activity.subtitle}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        {activity.highlights.map((point, i) => (
                                            <div 
                                                key={i}
                                                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-colors group/item"
                                            >
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white opacity-20 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.2em] pt-4 border-t border-white/5 w-full group"
                                    >
                                        Case Study Coming Soon 
                                        <ChevronRight size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* subtle divider line for mobile */}
                            <div className="mt-12 lg:hidden w-full h-[1px] bg-neutral-900" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
