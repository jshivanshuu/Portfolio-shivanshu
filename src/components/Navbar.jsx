import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            setMobileMenuOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-primary/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, '#hero')}
                    className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                >
                    SJ.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-medium text-gray-300 hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="w-6 flex flex-col gap-1.5 items-end">
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                            className="h-0.5 w-6 bg-white block"
                        />
                        <motion.span
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="h-0.5 w-4 bg-white block"
                        />
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                            className="h-0.5 w-6 bg-white block"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="flex flex-col p-8 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-lg font-medium text-gray-300 hover:text-accent"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
