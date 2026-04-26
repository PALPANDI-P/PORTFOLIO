"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Internship", href: "#internship" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#activities" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-8 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "flex items-center gap-1 overflow-hidden rounded-[24px] border transition-all duration-500 pointer-events-auto",
                    scrolled 
                        ? "px-4 py-2 bg-[var(--background)]/80 backdrop-blur-md border-[var(--foreground)]/10 shadow-2xl"
                        : "px-6 py-3 bg-transparent border-transparent"
                )}
            >
                {/* Brand */}
                <div className="mr-6 flex items-center gap-4">
                    <a href="#home" className="text-xl font-bold tracking-tighter text-[var(--foreground)] font-display">
                        PALPANDI<span className="text-primary">.in</span>
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--foreground)]/50 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    <div className="h-4 w-[1px] bg-[var(--foreground)]/10 mx-4" />
                    
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 text-[var(--foreground)]/50 hover:text-primary transition-colors"
                    >
                        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 text-[var(--foreground)]/50 hover:text-primary transition-colors"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-[var(--foreground)]/50"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="fixed inset-0 top-0 left-0 right-0 h-screen bg-black/95 backdrop-blur-2xl z-[-1] flex flex-col items-center justify-center p-8 gap-8 pointer-events-auto"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-bold tracking-tighter text-[var(--foreground)]/40 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
