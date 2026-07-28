import Image from "next/image";
import { site } from "@/data/site";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-5 pb-8 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-[#8750f7] to-[#6d28d9] px-6 py-10 text-white md:flex md:items-center md:justify-between md:px-10">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Let&apos;s work together</h2>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#6d28d9] no-underline transition hover:scale-[1.02] md:mt-0"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="font-display text-lg font-bold text-[var(--color-ink)]">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{site.description}</p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-ink)]">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-[var(--color-muted)] no-underline hover:text-[var(--color-brand)]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-ink)]">Services</h3>
            <ul className="mt-4 space-y-2">
              {site.services.slice(0, 4).map((service) => (
                <li key={service.title} className="text-sm text-[var(--color-muted)]">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--color-ink)]">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-line)] px-5 py-6 text-center text-sm text-[var(--color-muted)] md:px-8">
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </div>
      </div>
    </footer>
  );
}
