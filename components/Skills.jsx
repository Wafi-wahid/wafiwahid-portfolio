import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="section-kicker">My skills</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Tools I use with <span className="gradient-text">confidence</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {site.skillLevels.map((skill) => (
          <article
            key={skill.name}
            className="card-surface flex flex-col items-center px-4 py-6 text-center transition hover:-translate-y-1 hover:border-[var(--color-brand)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8750f7]/25 to-[#2a1454]/30 font-display text-lg font-bold text-[var(--color-brand)]">
              {skill.level}%
            </div>
            <h3 className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{skill.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
