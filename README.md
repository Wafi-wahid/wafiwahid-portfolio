# Wafi Wahid — Developer Portfolio

Next.js static portfolio (App Router + Tailwind). Built for free static hosting (e.g. GitHub Pages).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify static export (what you’ll deploy)

```bash
npm run build
npm run preview
```

`next build` writes static files to `out/`. Preview serves that folder. Confirm:

- Hero, About, Projects, Blog, Contact render
- Nav smooth-scrolls to sections
- Dark/light theme persists after refresh
- Contact opens your mail client via `mailto:`

## Deploy later (GitHub Pages)

1. Run `npm run build`
2. Publish the `out/` folder (or point Pages at it)
3. If the site is not at the domain root, set `basePath` / `assetPrefix` in `next.config.mjs` to your repo path (e.g. `/wafiwahid-portfolio`)

## Edit content

Update copy, projects, and posts in [`data/site.js`](data/site.js).
