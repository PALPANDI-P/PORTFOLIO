"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#internship" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
    
    const sections = ["home", "about", "skills", "internship", "education", "activities", "projects", "contact"];
    const scrollPos = window.scrollY + 120;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled
            ? "bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="text-base font-bold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              palpandi<span className="text-[var(--accent)]">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId ||
                  (sectionId === "internship" && ["internship", "education"].includes(activeSection));
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-[var(--foreground)]/8 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="https://github.com/PALPANDI-P"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-full hover:bg-[var(--foreground)]/5"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/palpandii/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-full hover:bg-[var(--foreground)]/5"
              >
                <Linkedin size={17} />
              </a>
              <div className="w-[1px] h-4 bg-[var(--border)] mx-1" />
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-full hover:bg-[var(--foreground)]/5"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="ml-2 px-5 py-2 bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold rounded-full hover:opacity-80 transition-opacity"
              >
                Say hey →
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1 md:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[var(--foreground)]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-[99] md:hidden bg-[var(--background)]/95 backdrop-blur-2xl border-b border-[var(--border)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="py-3 px-4 text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] border-b border-[var(--border)] last:border-0 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://github.com/PALPANDI-P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--foreground)]/5 rounded-full text-[var(--muted-foreground)]"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/palpandii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[var(--foreground)]/5 rounded-full text-[var(--muted-foreground)]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                  className="ml-auto px-6 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold rounded-full"
                >
                  Say hey →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
