import React, { lazy, Suspense, useCallback } from "react";
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Footer from './Footer';

// Lazy load heavy components
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));
const Contact = lazy(() => import('./Contact'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function PortfolioApp() {
  const scrollToSection = useCallback((sectionId) => {
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
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Skip-to-content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to content
      </a>

      <Navigation onNavigate={scrollToSection} />
      <main id="main-content">
        <Hero onNavigate={scrollToSection} />
        <About id="about" />
        <Suspense fallback={<LoadingFallback />}>
          <Projects id="projects" />
          <Skills id="skills" />
          <Contact id="contact" />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default React.memo(PortfolioApp);