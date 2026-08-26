import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import {
  featuredProjects,
  moreProjects,
  futureProjects,
  earlierProjects,
} from "../data/portfolioData";

/* ── Section header: mono index label + heading ─────────────── */
const SectionHeader = ({ index, label, title, lede }) => (
  <header className="mb-12">
    <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
      {index} / {label}
    </p>
    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-primary">{title}</h2>
    {lede && <p className="mt-3 max-w-[65ch] text-secondary leading-relaxed">{lede}</p>}
  </header>
);

/* ── Project links ──────────────────────────────────────────── */
const DemoLink = ({ project }) => (
  <a
    href={project.demo}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${project.title}, open live demo`}
    className="inline-flex items-center gap-1.5 h-10 px-5 rounded-[12px] bg-primary text-bg text-sm font-medium hover:bg-accent transition-colors duration-150"
  >
    Live demo
    <ArrowUpRight size={16} aria-hidden="true" />
  </a>
);

const GithubLink = ({ project }) => (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${project.title}, view source on GitHub`}
    className="inline-flex items-center gap-2 h-10 px-5 rounded-[12px] border border-line-strong text-sm font-medium text-primary hover:border-accent transition-colors duration-150"
  >
    <Github size={16} aria-hidden="true" />
    Code
  </a>
);

/* ── Featured / future: large alternating showcase ──────────── */
const Showcase = ({ project, index }) => {
  const flipped = Boolean(index) && index % 2 === 1;
  const numbered = typeof index === "number";

  return (
    <article className="group">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-center">
        {/* Visual */}
        <a
          href={project.demo || project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}, open ${project.demo ? "live demo" : "repository"}`}
          className={`lg:col-span-7 block rounded-[12px] overflow-hidden border border-line hover:border-line-strong transition-colors duration-150 bg-surface ${
            flipped ? "lg:order-2" : ""
          }`}
        >
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : undefined}
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-150 ease-out"
          />
        </a>

        {/* Copy */}
        <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
          <div className="flex items-baseline gap-4">
            {numbered && (
              <span className="font-mono text-sm text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {project.summary}
            </p>
          </div>

          <h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-primary">
            {project.title}
          </h3>

          <p className="mt-5 text-secondary leading-relaxed max-w-[58ch]">
            {project.description}
          </p>

          <ul role="list" className="mt-7 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-xs text-muted">
            {project.technologies.map((tech, i) => (
              <li key={tech}>
                {i > 0 && <span className="mr-2" aria-hidden="true">/</span>}
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {project.demo && <DemoLink project={project} />}
            {project.github && <GithubLink project={project} />}
          </div>
        </div>
      </div>
    </article>
  );
};

/* ── More tier: medium cards ────────────────────────────────── */
const MoreCard = ({ project }) => (
  <article className="rounded-[12px] border border-line bg-raised overflow-hidden">
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={project.image.width}
      height={project.image.height}
      loading="lazy"
      decoding="async"
      className="w-full h-44 object-cover border-b border-line"
    />
    <div className="p-5">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.summary}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-primary">{project.title}</h3>
      <p className="mt-2 text-sm text-secondary leading-relaxed">{project.description}</p>
      <ul role="list" className="mt-4 flex flex-wrap gap-x-2 font-mono text-xs text-muted">
        {project.technologies.map((tech, i) => (
          <li key={tech}>
            {i > 0 && <span className="mr-2" aria-hidden="true">/</span>}
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-4">
        {project.demo && <DemoLink project={project} />}
        {project.github && <GithubLink project={project} />}
      </div>
    </div>
  </article>
);

/* ── Earlier work: compact archive rows ─────────────────────── */
const EarlierRow = ({ project }) => (
  <li className="group flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-line last:border-0">
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={112}
      height={63}
      loading="lazy"
      decoding="async"
      className="w-full max-w-[168px] sm:w-28 h-auto sm:h-16 object-cover rounded-[12px] border border-line shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-150"
    />

    <div className="grow min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium text-primary">{project.title}</h3>
        <span className="font-mono text-xs text-muted">{project.technologies.join(" / ")}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted line-clamp-1">{project.description}</p>
    </div>

    <div className="flex items-center gap-4 shrink-0 sm:pl-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}, source code on GitHub`}
          className="text-muted hover:text-primary transition-colors duration-150"
        >
          <Github size={17} aria-hidden="true" />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}, open live demo`}
          className="text-muted hover:text-accent transition-colors duration-150"
        >
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      )}
    </div>
  </li>
);

/* ── Section ─────────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="work" className="bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <SectionHeader
          index="01"
          label="Selected Work"
          title="Things I've built."
          lede="A short list of projects that best show how I design, build, and ship. Everything else lives in the archive below."
        />

        {/* Featured */}
        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <Showcase key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More tier — hidden entirely when empty */}
        {moreProjects.length > 0 && (
          <>
            <div className="mt-20 pt-10 border-t border-line">
              <h3 className="text-lg font-semibold tracking-tight text-primary">More projects</h3>
            </div>
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project) => (
                <MoreCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Future tier — hidden entirely when empty */}
        {futureProjects.length > 0 && (
          <>
            <div className="mt-20 pt-10 border-t border-line">
              <h3 className="text-lg font-semibold tracking-tight text-primary">In the works</h3>
              <p className="mt-2 text-sm text-muted max-w-xl">
                The current generation of projects. Newer stack, deeper scope.
              </p>
            </div>
            <div className="mt-8 space-y-16">
              {futureProjects.map((project) => (
                <Showcase key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Earlier work */}
        <div className="mt-20 pt-10 border-t border-line">
          <p className="font-mono text-xs uppercase tracking-widest text-faint">Archive</p>
          <h3 className="mt-3 text-lg font-semibold tracking-tight text-primary">Earlier work</h3>
          <p className="mt-2 text-sm text-muted max-w-xl">
            Older and smaller builds, kept for the record. They show the path,
            not where I am now.
          </p>
        </div>

        <ul role="list" className="mt-6 max-w-4xl">
          {earlierProjects.map((project) => (
            <EarlierRow key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default React.memo(Projects);
