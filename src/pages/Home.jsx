import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-primary min-h-screen">
            <Hero />
            <Skills />
            <Achievements />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
