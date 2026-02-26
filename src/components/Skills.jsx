import React from 'react';
import { motion } from 'framer-motion';
import CyberBackground from './CyberBackground';

import AnimatedHeading from './AnimatedHeading';

const skills = [
    { category: "Programming Languages", items: ["C++", "Python", "Bash"] },
    { category: "Technologies/Tools", items: ["GitHub", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Ethical Hacking Tools", "Networking Tools"] },
    { category: "Operating Systems", items: ["Windows", "Linux"] },
    { category: "Soft Skills", items: ["Teamwork", "Problem-Solving", "Communication", "Adaptability"] },
    { category: "ML", items: ["TensorFlow", "Scikit learn", "Regression", "Classification", "Deep Learning Models", "Optimization Methods"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-8 bg-primary text-secondary relative overflow-hidden">
            <CyberBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <AnimatedHeading
                    text="Technical Skills"
                    gradientClasses="from-emerald-400 to-cyan-500"
                    borderColors={["#34d399", "#06b6d4"]} // Emerald-400, Cyan-500
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
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
