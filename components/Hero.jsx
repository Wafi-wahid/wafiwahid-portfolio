import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-5 py-20 md:px-8"
    >
      <div className="animate-rise relative z-10 max-w-2xl">
        <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Developer portfolio
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white no-underline transition hover:bg-[var(--color-accent-hover)]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] no-underline transition hover:border-[var(--color-accent)]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute right-4 top-1/4 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.35),transparent_70%)] md:right-16 md:h-72 md:w-72"
      />
    </section>
  );
}
