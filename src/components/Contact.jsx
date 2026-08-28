import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, BookOpen, ExternalLink } from 'lucide-react';

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/niladriban",
        icon: Linkedin,
        label: "LinkedIn"
    },
    {
        name: "GitHub",
        url: "https://github.com/nilban7",
        icon: Github,
        label: "GitHub"
    },
    {
        name: "Kolkata Engineer",
        url: "https://kolkata.engineer",
        icon: Globe,
        label: "kolkata.engineer"
    },
    {
        name: "Kolkata.ltd",
        url: "https://kolkata.ltd",
        icon: Globe,
        label: "kolkata.ltd"
    },
    {
        name: "ORCID",
        url: "https://orcid.org/0009-0004-0079-9251",
        icon: ExternalLink,
        label: "ORCID iD"
    },
    {
        name: "Gravatar",
        url: "https://gravatar.com/vibrantloudlyfaf17230d5",
        icon: Globe,
        label: "Gravatar"
    },
    {
        name: "Wikidata",
        url: "https://www.wikidata.org/wiki/Q141201198",
        icon: ExternalLink,
        label: "Wikidata (Q141201198)"
    },
    {
        name: "Knowlepedia",
        url: "https://knowlepedia.org/wiki/Niladri_Banerjee",
        icon: BookOpen,
        label: "Knowlepedia"
    }
];

export default function Contact() {
    return (
        <section className="w-full py-32 bg-transparent z-10 relative">
            <div className="max-w-4xl mx-auto w-full px-6 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full text-center flex flex-col items-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
                        Let's Build Something Great
                    </h2>
                    <div className="w-16 h-1 bg-accent" />
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="w-full max-w-2xl flex flex-col space-y-12 mb-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="relative group">
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-transparent border-b border-secondary/30 py-4 text-primary text-lg focus:outline-none focus:border-accent transition-colors duration-500 peer placeholder-transparent"
                            placeholder="Name"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-0 top-4 text-secondary text-lg pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-accent peer-focus:text-sm peer-valid:-top-6 peer-valid:text-secondary peer-valid:text-sm"
                        >
                            Name
                        </label>
                    </div>

                    <div className="relative group">
                        <input
                            type="email"
                            id="email"
                            required
                            className="w-full bg-transparent border-b border-secondary/30 py-4 text-primary text-lg focus:outline-none focus:border-accent transition-colors duration-500 peer placeholder-transparent"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 top-4 text-secondary text-lg pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-accent peer-focus:text-sm peer-valid:-top-6 peer-valid:text-secondary peer-valid:text-sm"
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative group">
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full bg-transparent border-b border-secondary/30 py-4 text-primary text-lg focus:outline-none focus:border-accent transition-colors duration-500 peer placeholder-transparent resize-none"
                            placeholder="Message"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-0 top-4 text-secondary text-lg pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-accent peer-focus:text-sm peer-valid:-top-6 peer-valid:text-secondary peer-valid:text-sm"
                        >
                            Message
                        </label>
                    </div>

                    <motion.button
                        whileHover={{ y: -4, backgroundColor: 'rgba(198, 167, 94, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full md:w-auto self-center px-12 py-4 border border-accent text-accent font-medium tracking-widest uppercase transition-colors duration-300 hover:bg-accent/10"
                    >
                        Send Message
                    </motion.button>
                </motion.form>

                {/* Profiles & Entity Links */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-8"
                >
                    {socialLinks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-secondary/20 bg-card/40 hover:border-accent/60 hover:text-accent transition-all duration-300 text-secondary text-sm group"
                            >
                                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                <span>{item.label}</span>
                            </a>
                        );
                    })}
                </motion.div>

            </div>

            {/* Footer */}
            <footer className="w-full text-center mt-24 pb-8">
                <p className="text-sm font-light text-primary opacity-100 tracking-wider">
                    © Made with ❤️ by Niladri Banerjee
                </p>
            </footer>

        </section>
    );
}
