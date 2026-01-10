import React from 'react';
import SectionBackground from './SectionBackground';

import AnimatedHeading from './AnimatedHeading';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-8 bg-primary text-center text-secondary border-t border-white/5 relative overflow-hidden">
            <SectionBackground />
            <div className="relative z-10">
                <AnimatedHeading
                    text="Let's Connect"
                    gradientClasses="from-yellow-400 to-orange-500"
                    borderColors={["#facc15", "#f97316"]} // Yellow-400, Orange-500
                />
                <p className="text-[#a1a1aa] mb-8 max-w-xl mx-auto">
                    Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
                    <a
                        href="mailto:jhashivanshu5521@gmail.com"
                        className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors"
                    >
                        Email Me
                    </a>
                    <a
                        href="tel:+916393055276"
                        className="inline-block px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                    >
                        +91-6393055276
                    </a>
                </div>
                <p className="text-[#a1a1aa] text-sm">
                    jhashivanshu5521@gmail.com
                </p>

                <footer className="mt-20 text-[#a1a1aa] text-sm">
                    © {new Date().getFullYear()} Shivanshu Jha. All rights reserved.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
