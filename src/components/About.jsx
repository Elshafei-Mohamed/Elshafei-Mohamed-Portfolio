import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Code, Sparkles, Rocket } from "lucide-react";

const About = () => {
  const highlights = useMemo(() => [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable solutions" },
    { icon: Sparkles, title: "Creative Solutions", description: "Turning ideas into reality with innovation" },
    { icon: Rocket, title: "Fast Delivery", description: "Delivering high-quality projects on time" },
  ], []);

  const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0f] relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          {...fadeIn}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            {...fadeIn}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl blur-2xl opacity-30 pointer-events-none"></div>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                loading="lazy"
                decoding="async"
                className="relative rounded-2xl w-full h-auto shadow-2xl border-2 border-white/10"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            {...fadeIn}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              I'm a <span className="text-cyan-400">{personalInfo.title}</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Highlights */}
            <div className="grid gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-linear-to-br from-cyan-500 to-purple-500 rounded-lg">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
