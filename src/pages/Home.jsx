import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <Hero />
            <Skills />
            <Certifications />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
