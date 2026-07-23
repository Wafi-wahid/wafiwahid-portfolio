import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-5 py-8 md:px-8">
      <div className="flex flex-col items-start justify-between gap-4 text-sm text-[var(--color-muted)] md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex gap-5">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-muted)] no-underline transition hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-muted)] no-underline transition hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
