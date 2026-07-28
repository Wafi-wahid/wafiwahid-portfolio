"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] backdrop-blur-lg"
          : "bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <Image
            src={site.logo}
            alt={`${site.name} logo`}
            width={40}
            height={40}
            unoptimized
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-display text-lg font-bold text-[var(--color-ink)]">
            {site.name.split(" ")[0]}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-muted)] no-underline transition hover:text-[var(--color-brand)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-2 text-xs font-semibold text-[var(--color-ink)]"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            Let's Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span className={`h-0.5 bg-[var(--color-ink)] transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-[var(--color-ink)] transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-[var(--color-ink)] transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--color-ink)] no-underline"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
