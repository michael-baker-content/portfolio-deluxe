# Portfolio Deluxe

Portfolio Deluxe is a React, Vite, and Tailwind portfolio system for presenting projects as evidence. It is built for Michael Baker's work, but it is also intended to be a useful 2.0 evolution of the portfolio starter it came from.

This project began as a fork of [`machadop1407/beautiful-react-tailwind-portfolio`](https://github.com/machadop1407/beautiful-react-tailwind-portfolio). The original repo is valuable because it gives you the familiar modern portfolio foundation: a hero, navigation, skills, project cards, responsive layout, visual polish, and a contact path. Portfolio Deluxe keeps that spirit, then pushes the site toward a stronger content system: case studies, searchable work, richer project metadata, contact context, and a homepage that makes the candidate behind the work easier to understand.

## What It Adds

- A candidate-focused homepage with sections for positioning, strengths, selected work, capabilities, working style, and contact.
- Data-driven case-study cards and shared project detail pages.
- A filterable `/case-studies` page with search, category filtering, and sorting.
- Replaceable decorative card imagery for each visible case study.
- A Formspree-ready contact form with name, email, role, location, case-study interest, and message fields.
- A protected `/admin` content dashboard for editing homepage copy and case-study content without touching code.
- Footer links for GitHub, the project blog, case studies, and other future destinations.
- Hidden draft/template case studies so new work can be prepared before it appears publicly.

## Good Starting Moves

If you are adapting this from the fork, start with content before visual tweaks:

1. Update `src/data/profile.js` with your candidate story, strengths, links, and contact form configuration.
2. Replace the project records in `src/data/projects.js` with 3-6 real projects that show different kinds of evidence.
3. Keep unfinished work as `visibility: "hidden"` until the case study is ready.
4. Use `priority` to control display order and `category` to make the case-study filters useful.
5. Swap the `cardImage` URLs for your own images, screenshots, or better stock placeholders.
6. Add your Formspree endpoint in `.env.local` so visitors can contact you without leaving the portfolio.
7. Add Vercel Blob and `ADMIN_TOKEN` if you want browser-based editing through `/admin`.
8. Only after the content feels true, tune colors, typography, spacing, and hero art.

## Project Structure

- `index.html` mounts the Vite app and declares the favicon.
- `src/main.jsx` boots React.
- `src/App.jsx` routes the homepage, `/case-studies`, and `/projects/:slug`.
- `src/pages/HomePage.jsx` contains the homepage sections and contact form.
- `src/pages/AdminPage.jsx` contains the protected content dashboard UI.
- `src/pages/CaseStudiesPage.jsx` renders the searchable/filterable case-study index.
- `src/pages/ProjectPage.jsx` renders shared case-study detail pages.
- `src/components` contains reusable UI pieces.
- `src/data/profile.js` contains homepage copy, capabilities, footer links, and Formspree config.
- `src/data/projects.js` contains case-study content and display metadata.
- `src/lib/contentModel.js` normalizes code defaults and dashboard-saved content into one shape.
- `api/content.js` reads and writes dashboard content through Vercel Blob.
- `src/styles.css` contains Tailwind layers and custom utilities.
- `public/assets/hero` contains the current layered hero placeholder assets.

## Case Studies

Case-study content lives in `src/data/projects.js`.

Each case study supports:

- Display controls: `visibility`, `priority`, and `category`.
- Card metadata: `slug`, `label`, `title`, `description`, `status`, `tone`, `evidence`, and `cardImage`.
- Detail-page overview: `summary`, `problem`, `outcome`, `role`, `timeline`, `collaborators`, and `tools`.
- Metric cards: `metrics`.
- Lists: `decisions` and `nextSteps`.
- Narrative blocks: `sections`.
- Optional app and repository links via `appHref` and `repoHref`.

Visibility controls:

- `visibility: "listed"` shows a project on the homepage and `/case-studies`.
- `visibility: "hidden"` keeps a project available by direct route but removes it from public lists.
- `priority` controls ordering; lower numbers appear first.
- `category` powers the case-study index filter.

The hidden template case study at `/projects/template` is intentionally placeholder content. Use it as a pattern when drafting new case studies.

## Contact Form

The contact form is wired for Formspree through a Vite environment variable.

Create `.env.local`:

```powershell
Copy-Item .env.example .env.local
```

Then replace the placeholder with your real Formspree endpoint:

```powershell
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Restart the dev server after changing environment variables.

## Admin Dashboard

The dashboard lives at `/admin`. It edits a JSON content document stored in Vercel Blob. The public site loads that saved content at runtime; if no saved content exists yet, it falls back to the code defaults in `src/data`.

To enable it on Vercel:

1. Add Vercel Blob storage to the project.
2. Make sure `BLOB_READ_WRITE_TOKEN` is available to the project. Vercel Blob can create this for you.
3. Add your own private `ADMIN_TOKEN` environment variable.
4. Deploy.
5. Visit `/admin`, paste the admin token, load saved content or start from defaults, edit, and save.

Keep `ADMIN_TOKEN` private. It is not a user account system; it is a simple owner-only token gate for a personal portfolio dashboard.

### Syncing Dashboard Content Back To The Repo

Dashboard edits are stored in Vercel Blob, not automatically committed to Git. Use either sync path when you want a local copy of the live content:

- In `/admin`, use **Download JSON** to save the current editor content.
- From this repo, run:

```powershell
npm run content:pull
```

By default, the script fetches `https://michaelbaker.vercel.app/api/content` and writes `content-snapshots/latest-content.json`.

You can also target another URL or output path:

```powershell
npm run content:pull -- https://your-preview-url.vercel.app/api/content content-snapshots/preview-content.json
```

Review the pulled JSON before deciding whether to fold any changes back into `src/data/profile.js` or `src/data/projects.js`.

## Local Development

Install dependencies:

```powershell
npm install
```

Run the local site:

```powershell
npm run dev
```

If you specifically want port `3000`, stop anything already running there, then use:

```powershell
npm run dev:3000
```

Build the deployable static site:

```powershell
npm run build
```

If the local npm launcher points at a broken user-level npm install, use the Node-bundled npm CLI directly:

```powershell
node "<node-install-dir>\node_modules\npm\bin\npm-cli.js" install
node "<node-install-dir>\node_modules\npm\bin\npm-cli.js" run build
```

## Deployment

This is a static Vite app. The production build output is `dist`.

### Vercel

Recommended first host.

1. Import the GitHub repo into Vercel.
2. Use the Vite defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add the environment variable:
   - `VITE_FORMSPREE_ENDPOINT`
4. Deploy.

`vercel.json` includes a rewrite so direct visits to routes like `/case-studies` and `/projects/music` serve the React app instead of returning 404.

### Cloudflare Pages

Good second host and a useful comparison point.

1. Create a Cloudflare Pages project from the GitHub repo.
2. Use:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Add the environment variable:
   - `VITE_FORMSPREE_ENDPOINT`
4. Deploy.

`public/_redirects` is copied into `dist` during the Vite build and gives Cloudflare Pages the same SPA route fallback.

## Related Local Projects

Related app projects may live outside this folder. In Michael's local workspace:

- Music app: `../Music`
- Greeting Card app: `../Greeting`

The Portfolio project may link to those apps, but their app code should not be mixed back into this repo root.

## Source Materials

`source-materials` is for archived references, old prototypes, and files that are useful context but not part of the active Portfolio app.

Current source-material groups:

- `source-materials/music-show-explorer`: legacy Music app materials kept for reference.
- `source-materials/static-prototype`: the previous static prototype.
- `source-materials/package-manager-artifacts`: old package-manager artifacts. This folder is ignored by Git and is not part of the active project.
- `source-materials/empty-folders`: recovered empty folder names from earlier cleanup.

## Push Checklist

Before pushing to GitHub:

1. Confirm the app runs locally at the URL printed by `npm run dev`.
2. Confirm `.env.local` is not staged.
3. Run `npm run build`.
4. Check that `node_modules`, `dist`, `.npm-cache`, and `source-materials/package-manager-artifacts` are not staged.
5. Review case-study visibility so drafts are not accidentally public.
