import React from "react";
import { personalInfo } from "../data/portfolioData";

const journey = [
  {
    step: "Started",
    text: "Building websites with HTML, CSS, and JavaScript. Obsessed with how interfaces actually work.",
  },
  {
    step: "Went deep",
    text: "Specialized in React and modern frontend. Shipped client sites, dashboards, and interactive tools.",
  },
  {
    step: "Now",
    text: "Building complete products: features, APIs, data, and AI integrations. EduScan is the proof.",
  },
];

function About() {
  const { bio, principles, image } = personalInfo;

  return (
    <section id="about" className="bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Portrait */}
          <div className="lg:col-span-4">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="rounded-[12px] w-full max-w-xs h-auto object-cover aspect-[4/5] border border-line"
            />
            <p className="mt-4 font-mono text-xs text-muted">{personalInfo.name}</p>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-8">
            <header>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                03 / About
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-primary">
                From interfaces to products.
              </h2>
            </header>

            {/* Journey */}
            <ol role="list" className="mt-9">
              {journey.map((item, i) => (
                <li key={item.step} className="relative flex gap-5 pb-7 last:pb-0">
                  <div className="flex flex-col items-center" aria-hidden="true">
                    <span className="w-8 h-8 rounded-full border border-line-strong bg-raised flex items-center justify-center font-mono text-xs text-accent shrink-0">
                      {i + 1}
                    </span>
                    {i < journey.length - 1 && <span className="w-px grow bg-line mt-1" />}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-primary">{item.step}</h3>
                    <p className="mt-1 text-secondary leading-relaxed max-w-[62ch]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-9 text-base text-secondary leading-relaxed max-w-[68ch]">{bio}</p>

            {/* Principles */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {principles.map((principle) => (
                <div key={principle.title} className="rounded-[12px] border border-line bg-bg p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {principle.title}
                  </p>
                  <p className="mt-2.5 text-sm text-secondary leading-relaxed">{principle.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);
