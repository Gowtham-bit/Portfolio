import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Education from '../components/home/Education';
import FeaturedWork from '../components/home/FeaturedWork';
import Achievements from '../components/home/Achievements';
import Contact from '../components/home/Contact';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <FeaturedWork />
      <Achievements />
      <Contact />
    </main>
  );
}
