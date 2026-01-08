import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const skills = [
    { category: "Cyber Security", items: ["Wireshark", "Nmap", "Metasploit", "Burp Suite"] },
    { category: " Platforms", items: ["Windows", "Linux"] },
    { category: "Tools", items: ["Git", "VS Code", "Virtual Machines",] },
    { category: "Languages", items: ["Python", "JavaScript", "C++", "Bash", "HTML", "CSS"] },
];

const Skills = () => {
    return (
        <section className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-glass-white backdrop-blur-md p-6 rounded-2xl border border-glass-white/10 hover:border-accent/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-accent">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
