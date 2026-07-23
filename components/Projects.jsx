import { site } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="fade-in mx-auto max-w-5xl px-5 py-20 md:px-8">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Projects</h2>
      <p className="mt-2 max-w-2xl text-[var(--color-muted)]">
        Selected work across AI, mobile, and product engineering.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {site.projects.map((project) => (
          <article
            key={project.title}
            className="border-t border-[var(--color-line)] pt-6 transition hover:border-[var(--color-accent)]"
          >
            <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
