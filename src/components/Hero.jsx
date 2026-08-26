import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { heroProjects } from "../data/portfolioData";

/** Data-driven index of the hero-selected work, styled as an editor window. */
const ProjectIndexCard = () => {
  if (heroProjects.length === 0) return null;

  return (
    <div className="rounded-[12px] bg-raised border border-line overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <span
          className="w-2.5 h-2.5 rounded-full bg-line-strong"
          aria-hidden="true"
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-line-strong"
          aria-hidden="true"
        />
        <span
          className="w-2.5 h-2.5 rounded-full bg-accent-deep"
          aria-hidden="true"
        />
        <span className="ml-3 font-mono text-xs text-muted">
          featured.config.js
        </span>
      </div>

      {/* Rows generated from project data */}
      <ul
        role="list"
        className="divide-y divide-line font-mono text-[13px] sm:text-sm"
      >
        {heroProjects.map((p, i) => (
          <li key={p.id}>
            <a
              href={p.demo || p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.title}, open ${p.demo ? "live demo" : "repository"}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors duration-150"
            >
              <span className="text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-primary font-medium">{p.title}</span>
              <span className="hidden sm:inline text-muted truncate">
                {"// "}
                {p.summary}
              </span>
              <ArrowUpRight
                size={15}
                className="ml-auto shrink-0 text-muted"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="px-4 py-2.5 border-t border-line font-mono text-xs text-muted">
        {heroProjects.length} projects · full index below
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-14 items-center">
          {/* Copy */}
          <div>
            <h1
              id="hero-heading"
              className="rise text-[30px] leading-[1.12] sm:text-5xl font-semibold tracking-tight text-primary max-w-xl"
            >
              I build web products that{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-[6px]">
                ship
              </span>
              .
            </h1>

            <p className="rise d1 mt-5 max-w-[62ch] text-base text-secondary leading-relaxed">
              Full Stack Developer working with React and TypeScript. Recently
              shipped{" "}
              <a
                href="#work"
                className="text-primary underline decoration-accent/50 underline-offset-4 hover:decoration-accent transition-colors duration-150"
              >
                EduScan
              </a>
              , an AI-powered platform that turns PDF exams into interactive,
              auto-graded tests.
            </p>

            <div className="rise d2 mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-[12px] bg-primary text-bg text-sm font-medium hover:bg-accent transition-colors duration-150"
              >
                Explore my work
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
                href="/CV/Elshafei_Mohamed_CV.pdf"
                download
                className="inline-flex items-center gap-2 h-10 px-5 rounded-[12px] border border-line-strong text-sm font-medium text-primary hover:border-accent transition-colors duration-150"
              >
                Download CV
              </a>
            </div>

            <p className="rise d3 mt-10 font-mono text-xs text-muted">
              Al-Dakahlia, Egypt · Open to freelance work
            </p>
          </div>

          {/* Proof, rendered from project data */}
          <div className="rise d2">
            <ProjectIndexCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
