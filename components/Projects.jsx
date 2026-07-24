"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  const projects = useMemo(() => {
    if (filter === "All") return site.projects;
    return site.projects.filter((p) => p.category === filter);
  }, [filter]);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="section-kicker">My recent works</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
            Projects that <span className="gradient-text">live online</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {site.projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === item
                  ? "bg-[var(--color-brand)] text-white"
                  : "border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {displayedProjects.map((project) => (
          <article
            key={project.title}
            className="card-surface group overflow-hidden transition hover:-translate-y-1 hover:border-[var(--color-brand)]"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="rounded-full bg-[var(--color-panel)]/90 px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                  {project.category}
                </span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/90 p-2 text-[var(--color-brand)] hover:bg-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="text-xs font-medium uppercase tracking-wider text-[var(--color-brand)]">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-all hover:border-[var(--color-brand)] hover:bg-[var(--color-surface)]"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span>See More Projects</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
