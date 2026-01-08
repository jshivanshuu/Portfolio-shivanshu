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
        <section className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />

            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
                >
                    Milestones
                </motion.h2>

                <div className="relative border-l-2 border-accent/30 ml-4 md:ml-0 space-y-12">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_#00D1FF]" />
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <span className="text-accent font-mono font-bold text-xl">{item.year}</span>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                            </div>
                            <p className="text-[#a1a1aa] text-lg">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
