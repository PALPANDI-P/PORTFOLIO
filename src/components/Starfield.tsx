"use client";

import React, { useState, useEffect } from "react";

const Star = ({ top, left, delay, duration }: { top: string; left: string; delay: string; duration: string }) => (
    <div 
        className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle pointer-events-none"
        style={{ 
            top, 
            left, 
            "--duration": duration,
            animationDelay: delay 
        } as React.CSSProperties}
    />
);

export const Starfield = ({ count = 30 }: { count?: number }) => {
    const [stars, setStars] = useState<{ top: string; left: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: count }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${2 + Math.random() * 3}s`
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setStars(newStars);
    }, [count]);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {stars.map((star, i) => (
                <Star key={i} {...star} />
            ))}
        </div>
    );
};
