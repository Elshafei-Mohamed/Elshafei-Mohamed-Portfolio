import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    return filter === "featured" ? projects.filter(p => p.featured) : projects;
  }, [filter]);

  const fadeInUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  const renderTech = useCallback(
    (tech, i) => (
      <span
        key={i}
        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
      >
        {tech}
      </span>
    ),
    []
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-linear-to-b from-[#0a0a0f] to-[#12121a] relative"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          {...fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${filter === "all"
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              filter === "featured"
                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Star size={16} />
            Featured
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUp}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 hover:scale-101 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform transition-scale duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star size={12} fill="white" />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(renderTech)}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
