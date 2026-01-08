import React from 'react';
import { motion } from 'framer-motion';
import SectionBackground from './SectionBackground';

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-primary text-secondary relative overflow-hidden">
            <SectionBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 p-4"
            >
                <h2 className="text-xl md:text-2xl font-light tracking-widest text-[#a1a1aa] mb-4">
                    HELLO, I AM
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#a1a1aa] bg-clip-text text-transparent">
                    Shivanshu Jha
                </h1>
                <p className="text-lg md:text-xl text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
                    A passionate developer building digital experiences that matter.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
        </section>
    );
};

export default Hero;
