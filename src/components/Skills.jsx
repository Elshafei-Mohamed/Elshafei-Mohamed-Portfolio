import React from "react";
import { skillLayers } from "../data/portfolioData";

/**
 * Skills presented as the layers of a product, read top to bottom.
 * One connected diagram instead of category cards: the rail ties the
 * layers together so the section reads as one stack you can build.
 */
function Skills() {
  return (
    <section id="skills" className="bg-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <header className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            02 / Capabilities
          </p>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-primary">
            One stack, four layers.
          </h2>
          <p className="mt-3 max-w-[65ch] text-secondary leading-relaxed">
            Read it top to bottom: the layers of a product I can build, and
            the technologies I have actually used in each.
          </p>
        </header>

        <div className="relative rounded-[12px] border border-line bg-surface overflow-hidden">
          {/* Connecting rail behind the layer nodes */}
          <span
            className="hidden sm:block absolute left-[29px] top-8 bottom-8 w-px bg-line"
            aria-hidden="true"
          />

          {skillLayers.map((layer, i) => (
            <div
              key={layer.label}
              className="group relative flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 p-6 border-b border-line last:border-b-0"
            >
              {/* Layer node + label */}
              <div className="flex items-start gap-4 sm:w-56 shrink-0">
                <span
                  className="mt-[5px] w-2.5 h-2.5 rounded-full border border-line-strong bg-bg group-hover:border-accent transition-colors duration-150 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-primary leading-snug">
                    {layer.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{layer.note}</p>
                </div>
              </div>

              {/* Technologies */}
              <ul role="list" className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:pt-6 grow">
                {layer.items.map((item, j) => (
                  <li key={item} className="flex items-center gap-3">
                    {j > 0 && (
                      <span className="text-faint select-none" aria-hidden="true">
                        /
                      </span>
                    )}
                    <span className="font-mono text-sm text-secondary hover:text-accent transition-colors duration-150 cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs text-faint">
          Roadmap: a mobile layer, plus deeper backend frameworks.
        </p>
      </div>
    </section>
  );
}

export default React.memo(Skills);
