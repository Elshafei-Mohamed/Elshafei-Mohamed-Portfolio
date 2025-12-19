import React, { useState, useCallback, lazy, Suspense, useMemo } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown } from "lucide-react";

// Lazy load the heavy 3D component
const Cube3D = lazy(() => import("./Cube3D"));

const Hero = ({ onNavigate }) => {
  const [isHoveringCube, setIsHoveringCube] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHoveringCube(true), []);
  const handleMouseLeave = useCallback(() => setIsHoveringCube(false), []);
  const handleViewProjects = useCallback(
    () => onNavigate("projects"),
    [onNavigate],
  );
  const handleScrollToAbout = useCallback(
    () => onNavigate("about"),
    [onNavigate],
  );

  // Memoize backgrounds to prevent recreation
  const backgrounds = useMemo(() => [
    { top: "1/4", left: "1/4", color: "cyan-500", delay: "" },
    { bottom: "1/4", right: "1/4", color: "purple-500", delay: "delay-1000" },
  ], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute ${bg.top ? `top-${bg.top}` : ""} ${bg.bottom ? `bottom-${bg.bottom}` : ""} ${
              bg.left ? `left-${bg.left}` : ""
            } ${bg.right ? `right-${bg.right}` : ""} w-96 h-96 bg-${bg.color} rounded-full filter blur-[80px] ${bg.delay}`}
            style={{
              animation: `float 6s ease-in-out infinite`,
              animationDelay: idx === 1 ? '1s' : '0s'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {personalInfo.title}
            </h2>

            <p className="text-lg text-gray-400 max-w-xl">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleViewProjects}
                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium  duration-300 transform hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                View My Work
              </button>
              <a
                href={personalInfo.resume}
                download
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-lg font-medium transition-all duration-300 transform flex items-center gap-2"
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            className="h-[500px] lg:h-[600px] w-full relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <Cube3D onFaceClick={onNavigate} />
            </Suspense>
            {!isHoveringCube}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
