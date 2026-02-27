import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Autonomous Autobot",
        category: "ARDUINO & SENSORS",
        year: "2024",
        description: "Developed an Autonomous Obstacle-Avoiding and LINE FOLLOWING Robot, or Autobot, that navigates its environment and avoids obstacles using Arduino and various sensors."
    },
    {
        title: "Portable AI Voice Assistant",
        category: "HARDWARE & AI",
        year: "2024",
        description: "Designed and built a handheld, portable AI-powered voice assistant capable of natural language processing and real-time responses."
    },
    {
        title: "Long Range LoRa Comm Protocol",
        category: "RF & RESEARCH",
        year: "2023",
        description: "Researched and invented custom code for long-range LoRa communication and optimized related communication protocols for embedded systems."
    }
];

export default function Projects() {
    return (
        <section className="w-full py-32 bg-transparent z-10 relative">
            <div className="max-w-[90%] md:max-w-7xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 px-4 md:px-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">SELECTED WORK</h2>
                </motion.div>

                <div className="flex flex-col space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="group relative w-full h-[450px] md:h-[600px] bg-card rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* Image Placeholder Layer - Would contain actual project images */}
                            <div className="absolute inset-0 bg-[#0A0A0A] group-hover:bg-[#111111] transition-colors duration-700" />

                            {/* Background scale effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex flex-col justify-end h-full">
                                <div className="flex justify-between items-end">
                                    <div className="max-w-3xl">
                                        <p className="text-accent font-medium tracking-widest text-sm mb-4">
                                            {project.category} // {project.year}
                                        </p>
                                        <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-secondary group-hover:text-primary/90 transition-colors duration-500 font-light max-w-2xl">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div className="hidden md:flex w-16 h-16 rounded-full border border-secondary/30 items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-all duration-500 transform group-hover:rotate-45">
                                        <ArrowUpRight size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Animated Gold Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] z-30" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
