"use client";

import React from "react";
import { motion } from "framer-motion";

export const Starfield = ({ count = 50 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: Math.random() * 0.5 + 0.2 }}
                    animate={{ 
                        opacity: [null, Math.random() * 0.8 + 0.2, Math.random() * 0.5 + 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: Math.random() * 3 + 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 2 + 1 + "px",
                        height: Math.random() * 2 + 1 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%",
                    }}
                />
            ))}
        </div>
    );
};
