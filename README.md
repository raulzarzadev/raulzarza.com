# raulzarza.com

Minimalist landing, blog, and directory for Raúl Zarza’s distributed portfolio. The site is bilingual (ES/EN), highlights subdomain projects like `autows`, and will eventually consume long-form content from Strapi.

## Stack

- [Astro 5](https://astro.build) rendered statically and deployed on Vercel.
- Tailwind CSS v4 + shadcn tokens for a tight visual system.
- shadcn/ui button primitive + `clsx`/`tailwind-merge` helpers.
- pnpm as the package manager.

## Project structure

```text
src/
├── components/
│   ├── cards/
│   │   ├── PostCard.astro
│   │   └── ProjectCard.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   └── button.ts
│   ├── Footer.astro
│   ├── Header.astro
│   ├── LanguageToggle.astro
│   └── SectionHeading.astro
├── content/
│   └── site.ts          # copy, i18n helpers, sample data
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro      # redirects to /es
│   └── [lang]/          # /es/... and /en/... routes
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── posts/index.astro
│       └── projects/index.astro
├── lib/
│   └── utils.ts
└── styles/
	└── global.css
```

## Commands

```sh
pnpm install    # install deps
pnpm dev        # start local dev server on http://localhost:4321
pnpm build      # generate static output into dist/
pnpm preview    # serve the production build
```

## Next steps

1. Connect Strapi (posts/projects collections) and replace the placeholder content.
2. Add newsletter form (Buttondown/ConvertKit) + Giscus component for comments.
3. Wire analytics + consent banner before launching to production.
