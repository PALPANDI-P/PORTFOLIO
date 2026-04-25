import { Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down" | "left" | "right" | "none" = "none", delay: number = 0): Variants => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};

export const zoomIn = (delay: number, duration: number): Variants => {
    return {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                delay: delay,
                duration: duration,
                stiffness: 100,
                damping: 20,
            },
        },
    };
};

export const textVariant = (delay: number = 0): Variants => {
    return {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const slideIn = (direction: string, type: "tween" | "spring" | "inertia", delay: number, duration: number): Variants => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const floating = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse" as const,
        },
    },
};
