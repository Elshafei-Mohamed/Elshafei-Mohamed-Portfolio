import React, { useState, useCallback, useRef } from "react";
import { skills } from "../data/portfolioData";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const COPIES = 4;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverEffect = {
  y: -5,
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
  transition: { type: "tween", duration: 0.1 },
};

const maskStyle = {
  maskImage:
    "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
};

const Skills = ({ id }) => {
  const [speed, setSpeed] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);
  const durationRef = useRef(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleSpeedChange = useCallback(
    (e) => {
      const val = Number(e.target.value);
      setSpeed(val);
      if (durationRef.current) {
        const dur = val > 0 ? (3 / val).toFixed(2) : "999999";
        durationRef.current.style.setProperty("--md", `${dur}s`);
      }
    },
    []
  );

  // Fallback duration for first render (before ref is set)
  const dur = speed > 0 ? (3 / speed).toFixed(2) : "999999";

  return (
    <section
      id={id}
      className="py-16 bg-linear-to-b from-[#0a0a0f] to-[#14141f] overflow-hidden"
    >
      <div className="container mx-auto px-4">
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

        {/* Marquee Skills */}
        <div className="relative">
          <div
            ref={durationRef}
            className="flex py-8 overflow-hidden"
            style={maskStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex gap-6 shrink-0"
              style={{
                animation: `marquee var(--md, ${dur}s) linear infinite`,
                animationPlayState: isHovered ? "paused" : "running",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              {Array.from({ length: COPIES }).flatMap((_, copyIndex) =>
                skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={`${skill.name}-${skillIndex}-${copyIndex}`}
                      className="shrink-0 w-32 h-32 rounded-xl bg-linear-to-br from-[#1a1a2e] to-[#16213e] p-6 flex flex-col items-center justify-center border border-[#2a2a3a] hover:border-blue-500"
                      variants={copyIndex === 0 ? itemVariants : {}}
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
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Speed Control */}
      <div className="flex flex-col items-center mt-8">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={speed}
          onChange={handleSpeedChange}
          className="w-72 accent-blue-500"
        />
        <div className="flex items-center mt-2 text-gray-300">
          <span className="mr-2">Speed: {speed.toFixed(1)}x</span>
          {isHovered ? (
            <div className="flex items-center text-blue-400">
              <Pause className="mr-1" size={16} /> <span>Paused</span>
            </div>
          ) : (
            <div className="flex items-center text-green-400">
              <Play className="mr-1" size={16} /> <span>Playing</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
