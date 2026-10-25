"use client";

import React from "react";
import { motion } from "framer-motion";

const seeded = (i: number, salt: number) => {
    const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
    return x - Math.floor(x);
};

export const Starfield = ({ count = 50 }: { count?: number }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(count)].map((_, i) => {
                const opacityInitial = seeded(i, 1) * 0.5 + 0.2;
                const opacityMid = seeded(i, 2) * 0.8 + 0.2;
                const opacityEnd = seeded(i, 3) * 0.5 + 0.2;
                const duration = seeded(i, 4) * 3 + 2;
                const size = seeded(i, 5) * 2 + 1;
                const top = seeded(i, 6) * 100;
                const left = seeded(i, 7) * 100;
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: opacityInitial }}
                        animate={{
                            opacity: [null, opacityMid, opacityEnd],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: size + "px",
                            height: size + "px",
                            top: top + "%",
                            left: left + "%",
                        }}
                    />
                );
            })}
        </div>
    );
};
