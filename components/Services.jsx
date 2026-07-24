"use client";

import { useState, useEffect } from "react";
import { site } from "@/data/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [sectionRef, isSectionVisible] = useScrollAnimation();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % site.services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index) => {
    setActive(index);
  };

  const getCardStyle = (index) => {
    const total = site.services.length;
    const distance = (index - active + total) % total;
    
    if (distance === 0) {
      return {
        scale: 1,
        opacity: 1,
        zIndex: 10,
        x: 0,
      };
    } else if (distance === 1 || distance === total - 1) {
      return {
        scale: 0.85,
        opacity: 0.6,
        zIndex: 5,
        x: distance === 1 ? 35 : -35,
      };
    } else {
      return {
        scale: 0.7,
        opacity: 0.3,
        zIndex: 1,
        x: distance === 2 ? 55 : -55,
      };
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className={`mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28 transition-all duration-700 ${
        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-2xl">
        <p className="section-kicker">My quality services</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Solutions I provide for your <span className="gradient-text">work</span>
        </h2>
      </div>

      <div className="mt-12 relative">
        <div 
          className="relative h-[400px] md:h-[450px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            type="button"
            onClick={() => {
              setActive((prev) => (prev - 1 + site.services.length) % site.services.length);
            }}
            className="absolute left-0 z-20 p-4 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-brand)] hover:bg-[var(--color-surface)] transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {site.services.map((service, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={service.number}
                className="absolute w-full max-w-md transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${style.x}%) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.zIndex,
                }}
                onClick={() => {
                  setActive(index);
                }}
              >
                <div
                  className={`card-surface p-8 md:p-10 transition-all duration-500 ${
                    style.scale === 1
                      ? "shadow-2xl shadow-[#8750f7]/20 border-[#8750f7]"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        style.scale === 1
                          ? "bg-gradient-to-br from-[#8750f7] to-[#6d28d9] text-white shadow-lg"
                          : "bg-[var(--color-surface)] text-[var(--color-brand)]"
                      }`}
                    >
                      <span className="font-display text-xl font-bold">{service.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-[var(--color-ink)] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-muted)] leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => {
              setActive((prev) => (prev + 1) % site.services.length);
            }}
            className="absolute right-0 z-20 p-4 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-brand)] hover:bg-[var(--color-surface)] transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {site.services.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-8 bg-gradient-to-r from-[#8750f7] to-[#6d28d9]"
                  : "w-2 bg-[var(--color-line)] hover:bg-[var(--color-brand)]"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
