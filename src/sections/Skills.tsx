"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animations/variants";
import { Code, Brain, Cpu, Server, Database, Wrench, BarChart3, Sparkles } from "lucide-react";

const skillGroups = [
    {
        category: "Languages",
        icon: Code,
        items: ["Python", "Java", "C++", "SQL"],
    },
    {
        category: "Machine Learning & AI",
        icon: Brain,
        items: ["Scikit-learn", "Google Gemini AI", "Prompt Engineering", "Large Language Models (LLMs)", "Supervised Learning", "Naive Bayes", "Logistic Regression", "SVM", "GridSearchCV", "Cross-Validation"],
    },
    {
        category: "Natural Language Processing (NLP)",
        icon: Cpu,
        items: ["NLTK", "Tokenization", "Stopword Removal", "Text Classification", "Semantic Analysis", "Data Preprocessing", "RAG", "BERT", "Transformers"],
    },
    {
        category: "Data Science & Pipelines",
        icon: Database,
        items: ["pandas", "NumPy", "EDA", "Feature Engineering", "Statistical Analysis", "TF-IDF", "Data Wrangling", "Data Pipelines"],
    },
    {
        category: "Full-Stack & Backend",
        icon: Server,
        items: ["Flask", "FastAPI", "REST APIs", "API Design", "SQLAlchemy (ORM)", "JWT Authentication", "React 18", "CSS"],
    },
    {
        category: "Tools & Platforms",
        icon: Wrench,
        items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Vercel", "PostgreSQL", "SQLite"],
    },
    {
        category: "Visualization",
        icon: BarChart3,
        items: ["Matplotlib", "Seaborn"],
    },
    {
        category: "Currently Building Expertise In",
        icon: Sparkles,
        items: ["MLflow/MLOps", "Transformers", "BERT", "Agentic AI", "LangChain"],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-28 bg-[var(--foreground)] text-[var(--background)] relative overflow-hidden">
            {/* Subtle noise overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-noise pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="text-[0.68rem] font-mono font-bold uppercase tracking-[0.25em] text-[var(--accent)] mb-3">
                        Technical Stacks
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
                                Technical <br />
                                <span className="italic font-serif font-normal text-white/40">capabilities.</span>
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-white/50 max-w-md font-mono">
                            End-to-end machine learning engineering, LLM prompting, NLP classification, and backend API architectures.
                        </p>
                    </div>
                </motion.div>

                {/* Skill Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillGroups.map((group, idx) => {
                        const Icon = group.icon;
                        const isHighlight = group.category.includes("Currently Building");

                        return (
                            <motion.div
                                key={group.category}
                                variants={fadeIn("up", 0.1 + idx * 0.05)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                                    isHighlight
                                        ? "bg-white/[0.04] border-[var(--accent)]/40 hover:border-[var(--accent)]"
                                        : "bg-white/[0.02] border-white/5 hover:border-white/15"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center gap-2.5 mb-4">
                                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                            isHighlight ? "bg-[var(--accent)]/20 text-[var(--accent)]" : "bg-white/5 text-white/70"
                                        }`}>
                                            <Icon size={16} />
                                        </div>
                                        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                            {group.category}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className={`text-[0.68rem] px-2.5 py-1 rounded-lg font-mono transition-colors ${
                                                    isHighlight
                                                        ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                                                        : "bg-white/5 text-white/70 border border-white/5 hover:border-white/20 hover:text-white"
                                                }`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
