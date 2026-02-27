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
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover -z-20"
                src="/assets/Ocean_Sea_3840x2160.mp4"
            />

            {/* Dynamic Overlay */}
            <motion.div
                className="absolute inset-0 bg-black -z-10 will-change-transform"
                style={{ opacity: overlayOpacity }}
            />

            {/* Edge Fade Gradients */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-0 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-0 pointer-events-none" />

            {/* Hero Content Wrapper for Scroll Animations */}
            <motion.div
                className="z-10 absolute flex flex-col items-center justify-center will-change-transform"
                style={{
                    y: textY,
                    scale: textScale,
                    opacity: textOpacity,
                    filter: textBlur
                }}
            >
                <motion.h1
                    className="text-primary font-bold text-6xl md:text-8xl will-change-transform whitespace-nowrap"
                    style={{ letterSpacing: textTracking }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    NILADRI BANERJEE
                </motion.h1>

                {/* Animated Roller Subtitle */}
                <div className="h-[40px] md:h-[60px] mt-4 md:mt-6 overflow-hidden relative flex items-center justify-center w-full pointer-events-none">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={currentWordIndex}
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -40, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute text-[#FFD700] drop-shadow-md text-2xl md:text-4xl font-normal md:font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap"
                        >
                            {words[currentWordIndex]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.section>
    );
}
