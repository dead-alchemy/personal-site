# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is David Nicholas's personal website (dnicholas.me): a Next.js 16 (React 19, pages router) site with a homepage, an "About Me" page, a resume page, and a hand-written blog where each post is its own `.jsx` page rather than markdown content. Styling is transitioning to Tailwind CSS v4 + shadcn/ui (`components/ui/`, `components.json`, `lib/utils.js`); the legacy SCSS Modules setup (`styles/*.module.scss`, `styles/globals.scss`) still styles the existing pages and will be migrated page-by-page during the visual redesign.

## Commands

- `yarn dev` — start the local dev server
- `yarn build` — production build
- `yarn start` — serve the production build
- `yarn lint` — run ESLint directly (`next lint` was removed in Next 16); config is the flat `eslint.config.mjs`, extending `eslint-config-next/core-web-vitals`

There is no test suite configured in this repo.

## Architecture

- **Pages router** (`pages/`): each file is a route. `pages/_app.js` wraps every page with the persistent `Nav` component and imports global styles (`styles/normalize.css`, `styles/globals.scss`).
- **Blog posts are code, not content files**: each post lives at `pages/blog/<slug>.jsx` and renders its body as JSX wrapped in `components/BlogTemplate.jsx`, passing a `title` object (`title`, `description`, `dateTime`, `humanDate`, `url`) that `BlogTitle.jsx` uses to render the page `<Head>` (title, OG tags, canonical URL) and the visible post header/date.
- **Blog index is a hardcoded array**: `pages/blog/index.jsx` lists every post in a manually maintained `entries` array (display title, description, date, slug). Adding a new post requires both creating `pages/blog/<slug>.jsx` and adding an entry here — there is no automatic discovery of blog files.
- **Components** (`components/`): import each shared component directly from its own file (e.g. `import BlogTemplate from "../../components/BlogTemplate"`). There used to be a `components/index.js` barrel re-exporting everything, but under Next 16's bundlers (both Turbopack and webpack) a pure re-export barrel file like that silently resolves named imports to `undefined` at runtime — the barrel was removed for this reason; don't reintroduce one. shadcn components under `components/ui/` follow shadcn's own convention of being imported directly by path (`@/components/ui/button`) — same rule applies.
- **Styling**: SCSS Modules colocated per component/page (`Name.module.scss`), imported as `styles` and referenced via `styles["class-name"]` (bracket syntax, not dot access, since class names use hyphens/underscores). Shared color tokens live in `styles/colors.scss` as SCSS variables (`$color-<hue>-<shade>`, hue 0 = neutral, 1 = red/pink, 2 = green, 3 = blue, 4 = yellow).
- **Static assets** (`public/`): fonts, icons, and photos (notably `public/pictures/pets/` and `public/pictures/home/`) referenced by absolute path (e.g. `/pictures/pets/IMG_0430.jpg`).
- Deployed on Vercel (canonical domain `https://www.dnicholas.me`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
