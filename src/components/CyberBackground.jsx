import React from 'react';
import { motion } from 'framer-motion';

const CyberBackground = React.memo(() => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0d0d0d] pointer-events-none">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,30,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,30,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Shield Icon (Defense) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1 }}
                className="absolute top-10 right-[10%] text-emerald-500 transform rotate-12"
            >
                <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </motion.div>

            {/* Lock Icon (Security) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.03 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-20 left-[5%] text-cyan-500 transform -rotate-12"
            >
                <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                </svg>
            </motion.div>

            {/* Bar Chart (Analysis) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.04 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-[40%] left-[15%] text-purple-500"
            >
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
                </svg>
            </motion.div>

            {/* Data Stream Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <motion.path
                    d="M0 100 Q 250 50 500 100 T 1000 100"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>
    );
});

export default CyberBackground;
