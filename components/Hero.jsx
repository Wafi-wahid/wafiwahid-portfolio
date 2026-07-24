import { site } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";
import HeroPortrait from "@/components/HeroPortrait";

const pillPositions = [
  "left-0 top-[12%] sm:-left-3",
  "right-0 top-[28%] sm:-right-3",
  "bottom-[28%] left-0 sm:-left-2",
  "bottom-[10%] right-0 sm:-right-2",
];

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-28">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="section-kicker">{site.greeting}</p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl md:text-6xl">
            {site.headline[0]}
            <span className="gradient-text"> + </span>
            <span className="gradient-text">{site.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={site.cvUrl} className="btn-primary">
              Download CV
            </a>
            <a href="#projects" className="btn-outline">
              View my work
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none">
          <div className="absolute inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(135,80,247,0.45),transparent_68%)] blur-2xl" />

          <div className="glow-ring relative scale-75 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-3">
            <HeroPortrait />
          </div>

          {site.pills.map((pill, index) => (
            <span
              key={pill}
              className={`animate-float absolute z-20 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-lg ${pillPositions[index]}`}
              style={{ animationDelay: `${index * 0.45}s` }}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)]"
                aria-hidden
              />
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-10 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
