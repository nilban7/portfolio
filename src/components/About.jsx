import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Paragraph = ({ text, progress, range, colorClass = "text-primary" }) => {
    // Split the text string into an array of words
    const words = text.split(" ");
    
    return (
        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed md:leading-snug tracking-tight flex flex-wrap gap-x-2 md:gap-x-3 mb-10 w-full max-w-4xl">
            {words.map((word, i) => {
                // Calculate proportional scroll range for each word within the paragraph's allotted scroll percentage
                const start = range[0] + (i / words.length) * (range[1] - range[0]);
                const end = start + ((range[1] - range[0]) / words.length);
                return <Word key={i} word={word} progress={progress} range={[start, end]} colorClass={colorClass} />;
            })}
        </p>
    );
};

const Word = ({ word, progress, range, colorClass }) => {
    // Reveal text opacity gracefully based on scroll position mapped from 10% to 100% white
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <motion.span style={{ opacity }} className={`${colorClass} will-change-opacity`}>
            {word}
        </motion.span>
    );
};

export default function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"] // Animation scrub window
    });

    return (
        <section 
            ref={containerRef} 
            className="w-full min-h-[110vh] flex flex-col items-center bg-transparent px-6 md:px-24 pt-32 pb-12 z-10 relative"
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col justify-start">
                
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-start mb-24 md:mb-32 w-full"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">ABOUT</h2>
                    <div className="w-16 h-1 mt-6 bg-accent" />
                </motion.div>

                {/* Kinetic Content Directly Below Heading */}
                <div className="flex flex-col space-y-4">
                    <Paragraph 
                        text="I’m Niladri Banerjee — I build systems that think." 
                        progress={scrollYProgress} 
                        range={[0, 0.3]} 
                        colorClass="text-accent"
                    />
                    <Paragraph 
                        text="With a foundation in Electronics & Communication Engineering, I work across AI, Embedded Intelligence, and modern web infrastructure." 
                        progress={scrollYProgress} 
                        range={[0.3, 0.8]} 
                    />
                    <Paragraph 
                        text="My goal is not just to develop products — but to architect impact-driven technology." 
                        progress={scrollYProgress} 
                        range={[0.8, 1]} 
                    />
                </div>
                
            </div>
        </section>
    );
}
