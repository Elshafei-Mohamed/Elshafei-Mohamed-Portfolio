import React, { useEffect, useRef, useState, useCallback } from "react";
import { skills } from "../data/portfolioData";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiPlay, FiPause } from "react-icons/fi";

// Static constants outside component
const duplicatedSkills = [...skills, ...skills];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverEffect = {
  y: -5,
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
};

const maskStyle = {
  maskImage:
    "linear-linear(to right, transparent, #000 10%, #000 90%, transparent)",
  WebkitMaskImage:
    "linear-linear(to right, transparent, #000 10%, #000 90%, transparent)",
};

const Skills = ({ id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const scrollAmountRef = useRef(0);

  const [speed, setSpeed] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Track viewport visibility for animation control
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInViewport(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleSpeedChange = useCallback(
    (e) => setSpeed(Number(e.target.value)),
    []
  );

  // Optimized scroll animation - pause when not in viewport
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth / 2;

    const animate = (timestamp) => {
      // Only animate if in viewport and not hovered
      if (isInViewport && !isHovered) {
        if (lastTimeRef.current !== 0) {
          const deltaTime = timestamp - lastTimeRef.current;
          scrollAmountRef.current += (speed * deltaTime) / 16.67;
          if (scrollAmountRef.current >= maxScroll) scrollAmountRef.current = 0;
          container.scrollLeft = scrollAmountRef.current;
        }
        lastTimeRef.current = timestamp;
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Pause animation when not visible or hovered
        if (isHovered) {
          scrollAmountRef.current = container.scrollLeft;
        }
        lastTimeRef.current = 0; // Reset to allow smooth restart
        // Check periodically if we should resume
        const checkResume = () => {
          if (isInViewport && !isHovered) {
            animationRef.current = requestAnimationFrame(animate);
          }
        };
        const timeoutId = setTimeout(checkResume, 200);
        return () => clearTimeout(timeoutId);
      }
    };

    if (isInViewport && !isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, isHovered, isInViewport]);

  return (
    <section
      ref={ref}
      id={id}
      className="py-16 bg-linear-to-b from-[#0a0a0f] to-[#14141f] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with on a daily basis
          </p>
        </motion.div>

        {/* Scrollable Skills */}
        <div className="">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 py-8 bg-trans overflow-x-scroll no-scrollbar"
            style={maskStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className="shrink-0 w-32 h-32 rounded-xl bg-linear-to-br from-[#1a1a2e] to-[#16213e] p-6 flex flex-col items-center justify-center border border-[#2a2a3a] hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  variants={itemVariants}
                  whileHover={hoverEffect}
                >
                  <div className="text-4xl mb-2 text-blue-400">
                    <IconComponent />
                  </div>
                  <span className="text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* linear edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      {/* Speed Control */}
      <div className="flex flex-col items-center mt-8">
        <input
          type="range"
          min="0.2"
          max="3"
          step="0.1"
          value={speed}
          onChange={handleSpeedChange}
          className="w-72 accent-blue-500"
        />
        <div className="flex items-center mt-2 text-gray-300">
          <span className="mr-2">Speed: {speed.toFixed(1)}x</span>
          {isHovered ? (
            <div className="flex items-center text-blue-400">
              <FiPause className="mr-1" /> <span>Paused</span>
            </div>
          ) : (
            <div className="flex items-center text-green-400">
              <FiPlay className="mr-1" /> <span>Playing</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
