import React, { useCallback, lazy, Suspense, useMemo } from "react";
import { personalInfo } from "../data/portfolioData";

// Lazy load the heavy 3D component
const Cube3D = lazy(() => import("./Cube3D"));

const Hero = ({ onNavigate }) => {
  const handleViewProjects = useCallback(
    () => onNavigate("projects"),
    [onNavigate],
  );
  // Memoize backgrounds to prevent recreation
  const colorMap = { "cyan-500": "#06b6d4", "purple-500": "#a855f7" };
  const backgrounds = useMemo(() => [
    { className: "top-1/4 left-1/4", color: "cyan-500", delay: "0s" },
    { className: "bottom-1/4 right-1/4", color: "purple-500", delay: "1s" },
  ], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        {backgrounds.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute ${bg.className} w-96 h-96 rounded-full blur-[80px]`}
            style={{
              backgroundColor: colorMap[bg.color],
              animation: `float 6s ease-in-out infinite`,
              animationDelay: bg.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I&apos;m{" "}
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
              {/* Download CV link — placeholder until a valid PDF is provided */}
              <button
                disabled
                className="px-8 py-3 bg-white/5 text-white/40 border border-white/10 rounded-lg font-medium cursor-not-allowed flex items-center gap-2"
                title="CV file not yet available"
              >
                Download CV
              </button>
            </div>
          </div>

          <div
            className="h-[500px] lg:h-[600px] w-full relative"
          >
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <Cube3D onFaceClick={onNavigate} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
