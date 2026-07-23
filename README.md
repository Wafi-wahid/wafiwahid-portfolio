# Wafi Wahid — Developer Portfolio

Next.js static portfolio with a purple professional theme, light/dark modes, and mobile-responsive layout. Built for free static hosting (e.g. GitHub Pages).

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

- Hero, services, works, resume, skills, blog, and contact render
- Nav works on desktop and mobile (hamburger)
- Dark/light theme persists after refresh
- Contact opens your mail client via `mailto:`

## Deploy later (GitHub Pages)

1. Run `npm run build`
2. Publish the `out/` folder (or point Pages at it)
3. If the site is not at the domain root, set `basePath` / `assetPrefix` in `next.config.mjs` to your repo path (e.g. `/wafiwahid-portfolio`)

## Edit content

Update copy, projects, services, and posts in [`data/site.js`](data/site.js).

## Add your headshot

1. Drop your photo into [`public/`](public/) as `headshot.jpg` (or `.png` / `.webp`)
2. Keep `headshot` in `data/site.js` matching that filename, e.g. `"/headshot.jpg"`
