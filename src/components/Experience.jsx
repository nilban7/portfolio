import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        role: "Head of Marketing and Public Relations (Lead)",
        company: "GDG On-Campus Techno Main Salt Lake",
        period: "Oct 2025 - Present",
        description: "Responsible for building and managing brand presence both online and offline. Crafting effective communication strategies, integrated marketing, and strategic public relations planning."
    },
    {
        role: "Bachelor of Technology - BTech, ECE",
        company: "Techno Main - Salt Lake",
        period: "Sep 2023 - Present",
        description: "Studying Electrical, Electronic and Communications Engineering."
    },
    {
        role: "High School (ISC & ICSE, Science)",
        company: "St. Xavier's Institution",
        period: "Apr 2020 - Apr 2023",
        description: "Passed in ICSE & ISC with A+ grade. HEAD boy of school. Active in Executive Student Council and Cultural Club (XAVI CARNIVAL)."
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="w-full py-40 bg-transparent relative z-10 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full px-6 relative">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-32 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">TIMELINE</h2>
                </motion.div>

                <div className="relative">
                    {/* Central Line Base */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-secondary/20 shadow-none transform -translate-x-1/2" />

                    {/* Central Line Animated */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent transform -translate-x-1/2 origin-top will-change-transform"
                        style={{ height: pathHeight }}
                    />

                    {/* Experience Entries */}
                    <div className="flex flex-col space-y-24 md:space-y-32">
                        {experiences.map((exp, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="relative w-full flex justify-center">

                                    {/* The Point on the Line */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, margin: "-20%" }}
                                        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-background border-2 border-accent rounded-full z-20 mt-2"
                                    />

                                    {/* Content Container */}
                                    <div className={`w-full flex ${isEven ? 'justify-end md:justify-start' : 'justify-end'} z-10`}>

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: 0,
                                                y: 40
                                            }}
                                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                            className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                                        >
                                            <h4 className="text-xl font-light text-accent tracking-widest mb-2 uppercase">
                                                {exp.period}
                                            </h4>
                                            <h3 className="text-3xl font-bold text-primary mb-3">
                                                {exp.role}
                                            </h3>
                                            <h5 className="text-xl text-primary/80 mb-6 font-medium">
                                                {exp.company}
                                            </h5>
                                            <p className="text-secondary leading-relaxed font-light">
                                                {exp.description}
                                            </p>
                                        </motion.div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
