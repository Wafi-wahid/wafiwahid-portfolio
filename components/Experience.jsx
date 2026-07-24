"use client";

import { site } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      id="resume" 
      className={`mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
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

      <div id="about" className="mx-auto mt-12 max-w-2xl">
        <div className="card-surface p-6 md:p-10">
          <p className="section-kicker text-center">About me</p>
          <h3 className="font-display text-center text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
            Who&apos;s behind the <span className="gradient-text">work</span>
          </h3>
          <p className="mt-4 text-justify text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {site.about}
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="text-sm text-[var(--color-muted)]">
              Want to know me further? Let&apos;s connect on LinkedIn
            </p>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0077b5] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#006097] hover:scale-105"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
