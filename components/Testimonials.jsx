"use client";

import { site } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Testimonials() {
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className={`mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-2xl">
        <p className="section-kicker">Client stories</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          What partners <span className="gradient-text">say</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {site.testimonials.map((item) => (
          <blockquote key={item.name} className="card-surface p-6 md:p-8">
            <p className="text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
              “{item.quote}”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#8750f7] to-[#2a1454] text-sm font-bold text-white">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="font-semibold text-[var(--color-ink)]">{item.name}</p>
                <p className="text-sm text-[var(--color-muted)]">{item.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
