"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = site.nav.map((item) => item.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[color-mix(in_srgb,var(--color-panel)_88%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          className="font-display text-lg font-semibold tracking-tight text-[var(--color-accent)] no-underline"
        >
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {site.nav.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={href} className="relative">
                <a
                  href={href}
                  className={`no-underline transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {label}
                </a>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-[var(--color-accent)]" />
                )}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          className="rounded-md border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
