"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = useMemo(() => {
    if (filter === "All") return site.projects;
    return site.projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
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
        {projects.map((project) => (
          <article
            key={project.title}
            className="card-surface group overflow-hidden transition hover:-translate-y-1 hover:border-[var(--color-brand)]"
          >
            <div className="flex h-44 items-end bg-gradient-to-br from-[#8750f7]/30 via-[#2a1454]/40 to-transparent p-6">
              <span className="rounded-full bg-[var(--color-panel)]/90 px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                {project.category}
              </span>
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
    </section>
  );
}
