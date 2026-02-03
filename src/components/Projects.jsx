import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

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
        title: "False-Front (ongoing)",
        description: "Advanced deceptive technology system for cybersecurity defense.",
        tags: ["Cybersecurity", "Deception Tech", "Defense"],
        link: "#"
    },
];

import AnimatedHeading from './AnimatedHeading';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />
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
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
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
