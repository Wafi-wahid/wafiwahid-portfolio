import { site } from "@/data/site";

function Column({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <article key={`${item.title}-${item.period}`} className="card-surface p-5 md:p-6">
            <p className="text-sm font-semibold text-[var(--color-brand)]">{item.period}</p>
            <h4 className="mt-2 font-display text-lg font-bold text-[var(--color-ink)]">{item.title}</h4>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{item.place}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="section-kicker">Resume</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Experience & <span className="gradient-text">education</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Column title="Experience" items={site.experience} />
        <Column title="Education" items={site.education} />
      </div>

      <div id="about" className="card-surface mt-12 p-6 md:p-10">
        <p className="section-kicker">About me</p>
        <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
          Who&apos;s behind the <span className="gradient-text">work</span>
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          {site.about}
        </p>
      </div>
    </section>
  );
}
