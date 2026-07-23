import { site } from "@/data/site";

export default function Blog() {
  return (
    <section id="blog" className="fade-in mx-auto max-w-5xl px-5 py-20 md:px-8">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Blog</h2>
      <p className="mt-2 max-w-2xl text-[var(--color-muted)]">Notes on engineering and growth.</p>

      <div className="mt-12 space-y-10">
        {site.posts.map((post) => (
          <article key={post.title} className="max-w-2xl border-l-2 border-[var(--color-accent)] pl-5">
            <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
              {post.title}
            </h3>
            <p className="mt-2 leading-relaxed text-[var(--color-muted)]">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
