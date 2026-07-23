"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="section-kicker">My quality services</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Solutions I provide for your <span className="gradient-text">work</span>
        </h2>
      </div>

      <div className="mt-12 space-y-3">
        {site.services.map((service, index) => {
          const isActive = active === index;
          return (
            <button
              key={service.number}
              type="button"
              onClick={() => setActive(index)}
              onMouseEnter={() => setActive(index)}
              className={`flex w-full flex-col gap-3 rounded-2xl px-5 py-5 text-left transition-all duration-300 md:flex-row md:items-center md:gap-8 md:px-8 ${
                isActive
                  ? "bg-gradient-to-r from-[#8750f7] to-[#6d28d9] text-white shadow-xl shadow-[#2a1454]/40"
                  : "border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-ink)]"
              }`}
            >
              <span className={`font-display text-sm font-bold ${isActive ? "text-white/80" : "text-[var(--color-brand)]"}`}>
                {service.number}
              </span>
              <h3 className="font-display text-xl font-bold md:min-w-[14rem] md:text-2xl">{service.title}</h3>
              <p className={`flex-1 text-sm leading-relaxed md:text-base ${isActive ? "text-white/90" : "text-[var(--color-muted)]"}`}>
                {service.description}
              </p>
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-lg ${
                  isActive ? "border-white/40 text-white" : "border-[var(--color-line)] text-[var(--color-brand)]"
                }`}
                aria-hidden
              >
                ↗
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
