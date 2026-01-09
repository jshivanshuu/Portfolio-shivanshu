import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const achievements = [
    { year: "2024", title: "Hackathon Winner", description: "Won 1st place in Global AI Hackathon." },
    { year: "2023", title: "Open Source Contributor", description: "Major contributions to popular React libraries." },
    { year: "2022", title: "Certified Cloud Architect", description: "Achieved AWS Solutions Architect certification." },
];

const Achievements = () => {
    return (
        <section id="milestones" className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent"
                >
                    Milestones
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] hover:border-accent/50 transition-all duration-300 group"
                        >
                            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono font-bold text-sm">
                                {item.year}
                            </span>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[#a1a1aa] leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
