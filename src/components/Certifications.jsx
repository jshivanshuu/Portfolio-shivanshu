import React from 'react';
import { motion } from 'framer-motion';
import CyberBackground from './CyberBackground';

const certifications = [
    {
        title: "CEH Certification ",
        issuer: "EC-Council",
        date: "2025",
        link: "https://drive.google.com/file/d/1-sfcM1v5WJr4vXXkIRCVY7EL4Ev9wTnj/view?usp=sharing",
        description: "Validated expertise in understanding cyber security."
    },
    {
        title: "Algorithmic ToolBox by Coursera",
        issuer: "Coursera",
        date: "2025",
        link: "https://drive.google.com/file/d/1eiz9ha-Re8nRjUXxTQJMWXB8vOAUn9hB/view?usp=drive_link",
        description: "Professional certification for advanced algorithms and data structures."
    },
    {
        title: "Fundamentals of peer to peer networks by Coursera",
        issuer: "Coursera",
        date: "2025",
        link: "https://drive.google.com/file/d/1XtH7S93TqnCwnf0FY2jatWgOoGZOx142/view?usp=drive_links",
        description: "Mastered the foundations of peer to peer networks."
    },
    {
        title: "Operating Systems and you:Becoming a power user by Coursera",
        issuer: "Coursera",
        date: "2025",
        link: "https://www.coursera.org/peer-to-peer-networks",
        description: "Mastered the foundations of Operating Systems."
    },
];

import AnimatedHeading from './AnimatedHeading';

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <CyberBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <AnimatedHeading
                    text="Certifications"
                    gradientClasses="from-cyan-400 to-blue-600"
                    borderColors={["#22d3ee", "#2563eb"]} // Cyan-400, Blue-600
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="block bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] hover:border-accent/50 transition-all duration-300 group cursor-pointer h-full"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono font-bold text-xs">
                                    {cert.date}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors line-clamp-2 min-h-[3.5rem]">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-400 mb-3 font-medium">
                                {cert.issuer}
                            </p>
                            <p className="text-[#a1a1aa] text-sm leading-relaxed line-clamp-3">
                                {cert.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
