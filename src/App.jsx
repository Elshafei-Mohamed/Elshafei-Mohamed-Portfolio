import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-bg focus:rounded-[12px]"
      >
        Skip to content
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <Projects />
          <Skills />
          <About />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
