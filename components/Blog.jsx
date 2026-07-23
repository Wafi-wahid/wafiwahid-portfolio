import { site } from "@/data/site";

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="section-kicker">Recent blogs</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          Notes from the <span className="gradient-text">journey</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {site.posts.map((post) => (
          <article key={post.title} className="card-surface overflow-hidden transition hover:-translate-y-1 hover:border-[var(--color-brand)]">
            <div className="h-36 bg-gradient-to-br from-[#8750f7]/35 to-[#2a1454]/45" />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                {post.date}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-[var(--color-ink)]">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
