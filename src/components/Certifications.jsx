import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const certifications = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        link: "https://aws.amazon.com/certification/",
        description: "Validated expertise in designing distributed systems on AWS."
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2023",
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
        description: "Professional certification for advanced React and frontend development."
    },
    {
        title: "Google UX Design Professional",
        issuer: "Google",
        date: "2022",
        link: "https://www.coursera.org/professional-certificates/google-ux-design",
        description: "Mastered the foundations of UX design and research."
    },
    {
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2022",
        link: "https://frontendmasters.com",
        description: "Deep dive into advanced React patterns and performance optimization."
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                >
                    Certifications
                </motion.h2>

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
