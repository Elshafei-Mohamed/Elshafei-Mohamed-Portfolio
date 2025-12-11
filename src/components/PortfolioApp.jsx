import React from "react";
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

function PortfolioApp() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navigation onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About id="about" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default PortfolioApp;