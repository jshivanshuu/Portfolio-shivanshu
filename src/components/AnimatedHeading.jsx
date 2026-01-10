import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({ text, gradientClasses, borderColors }) => {
    // borderColors should be an array of hex codes or color values for the conic gradient
    // e.g., ["#E2CBFF", "#393BB2"]

    const [c1, c2] = borderColors || ["#E2CBFF", "#393BB2"];

    return (
        <div className="relative flex justify-center mb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
            >
                {/* Outer Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientClasses} rounded-xl blur opacity-45 group-hover:opacity-95 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>

                {/* Border Container */}
                <div className="relative p-[2px] bg-primary ring-1 ring-gray-900/5 rounded-xl leading-none flex items-center justify-center">
                    {/* Moving Gradient Border */}
                    <span className="absolute inset-0 rounded-xl overflow-hidden">
                        <span
                            className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] opacity-70 block w-[400%] h-[400%] top-[-150%] left-[-150%]"
                            style={{
                                background: `conic-gradient(from 90deg at 50% 50%, ${c1} 0%, ${c2} 50%, ${c1} 100%)`
                            }}
                        ></span>
                    </span>

                    {/* Inner Content */}
                    <div className="relative z-20 flex items-center bg-primary px-8 py-4 rounded-lg">
                        <h2 className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${gradientClasses} bg-clip-text text-transparent`}>
                            {text}
                        </h2>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AnimatedHeading;
