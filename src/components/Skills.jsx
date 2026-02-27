import { motion } from 'framer-motion';

const skills = [
    "Embedded Systems",
    "AI Development",
    "Full Stack Engineering",
    "Robotics",
    "Cybersecurity",
    "Machine Learning",
    "Java Development",
    "Radio Frequency",
    "Data Analysis"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Skills() {
    return (
        <section className="w-full py-16 md:py-24 bg-transparent px-6 md:px-24 z-10 relative">
            <div className="max-w-7xl mx-auto w-full">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">EXPERTISE</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -6,
                                backgroundColor: "#111111",
                                boxShadow: "0 0 20px rgba(198, 167, 94, 0.15)",
                                borderColor: "rgba(198, 167, 94, 0.6)"
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-card border border-accent/20 rounded-xl p-10 flex flex-col justify-center items-center text-center cursor-pointer group will-change-transform"
                        >
                            <h3 className="text-xl font-medium text-primary/90 group-hover:text-accent transition-colors duration-300">
                                {skill}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
