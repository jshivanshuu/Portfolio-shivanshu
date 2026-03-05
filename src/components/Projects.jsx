import React from 'react';
import { motion } from 'framer-motion';
import CyberBackground from './CyberBackground';

const projects = [
    {
        title: "OSINT Dashboard",
        description: "CyberSecurity Dashboard for OSINT threat detection and analysis.",
        tags: ["Python", "Flask", "Cybersecurity"],
        link: "https://github.com/jshivanshuu/osint-threat-intelligence-main/tree/main/osint-threat-intelligence-main"
    },
    {
        title: "Internship Recommender",
        description: "ML-based recommendation system for internships based on preferences.",
        tags: ["Python", "Machine Learning", "TF-IDF Vectorizer"],
        link: "#"
    },
    {
        title: "False-Front",
        description: "Advanced deceptive technology system for cybersecurity defense.",
        tags: ["Cybersecurity", "Deception Tech", "Defense"],
        link: "https://github.com/jshivanshuu/False-Front"
    },
];

import AnimatedHeading from './AnimatedHeading';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-8 bg-[#0f0f0f] text-secondary relative overflow-hidden">
            <CyberBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <AnimatedHeading
                    text="Featured Work"
                    gradientClasses="from-purple-400 to-pink-600"
                    borderColors={["#c084fc", "#db2777"]} // Purple-400, Pink-600
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform duration-300"
                        >
                            <div className="h-48 bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                <span className="text-gray-500 text-4xl">Project UI</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#a1a1aa] hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                            title="View GitHub Repository"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-[#a1a1aa] mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 border border-white/10 rounded text-[#a1a1aa]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
