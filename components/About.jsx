import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="fade-in mx-auto max-w-5xl px-5 py-20 md:px-8">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">About</h2>
      <p className="mt-2 max-w-2xl text-[var(--color-muted)]">Who I am and what I care about.</p>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]">
        {site.about}
      </p>
      <ul className="mt-10 flex flex-wrap gap-3">
        {site.skills.map((skill) => (
          <li
            key={skill}
            className="border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
