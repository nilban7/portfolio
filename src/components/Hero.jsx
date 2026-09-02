import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ["ENGINEER", "HACKER", "DEVELOPER", "TRADER", "SINGER", "STRATEGIST", "PAINTER", "MARKETER", "ROBOTICIST"];

export default function Hero() {
    const { scrollYProgress } = useScroll({
        offset: ["start start", "40vh start"]
    });

    // Background scale, fade, and blur
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.1]); // Light overlay for readability

    // Text specific scroll animations for a "sticky depth fade" effect
    const textY = useTransform(scrollYProgress, [0, 1], [0, 0]); // Pinned vertically
    const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // Shrinks slightly backward
    const textTracking = useTransform(scrollYProgress, [0, 1], ["0.05em", "0.05em"]); // Unchanged tracking
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Fade out faster than background
    const textBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]); // Dissolve effect

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center will-change-transform"
            style={{
                scale,
                opacity,
                filter: blur
            }}
        >
            {/* Background Portrait Image */}
            <img
                src="/niladri-banerjee-hero.png"
                alt="Niladri Banerjee - Software Developer, AI Engineer, and Robotics Engineer"
                title="Niladri Banerjee"
                className="absolute inset-0 w-full h-full object-cover object-[25%_center] md:object-center -z-20 select-none pointer-events-none"
                loading="eager"
                fetchPriority="high"
            />

            {/* Dynamic Overlay for Enhanced Readability */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50 md:from-transparent md:to-black/30 -z-10 will-change-transform"
                style={{ opacity: overlayOpacity }}
            />

            {/* Edge Fade Gradients for Seamless Blending with Dark Theme */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent z-0 pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-32 md:w-48 bg-gradient-to-r from-background/80 md:from-transparent to-transparent z-0 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-32 md:w-48 bg-gradient-to-l from-background/80 md:from-transparent to-transparent z-0 pointer-events-none" />

            {/* Hero Content Wrapper positioned in the right empty space on desktop */}
            <motion.div
                className="z-10 absolute inset-0 flex items-center justify-center md:justify-end px-6 sm:px-12 md:pr-16 lg:pr-24 xl:pr-32 will-change-transform"
                style={{
                    y: textY,
                    scale: textScale,
                    opacity: textOpacity,
                    filter: textBlur
                }}
            >
                <div className="w-full md:w-[55%] lg:w-[50%] xl:w-[46%] flex flex-col items-center md:items-start text-center md:text-left bg-black/35 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-none shadow-2xl md:shadow-none">
                    <motion.h1
                        className="text-white font-black text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-tight md:leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] whitespace-normal"
                        style={{ letterSpacing: textTracking }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        NILADRI BANERJEE
                    </motion.h1>

                    {/* Animated Roller Subtitle */}
                    <div className="h-[40px] sm:h-[48px] md:h-[60px] mt-4 md:mt-6 overflow-hidden relative flex items-center justify-center md:justify-start w-full pointer-events-none">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={currentWordIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute text-[#FFD700] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase whitespace-nowrap"
                            >
                                {words[currentWordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}
