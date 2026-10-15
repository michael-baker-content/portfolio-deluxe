# Michael Baker — Portfolio

**[View the portfolio](https://michaelbaker.vercel.app)** · [Experience](https://michaelbaker.vercel.app/experience) · [Case studies](https://michaelbaker.vercel.app/case-studies)

A personal portfolio connecting professional experience in web production, technical publishing, and online education with independent applications and tools. The site gives visitors two paths: understand the experience behind the work, or explore what Michael is building.

## What it presents

- **Professional experience:** content production, editorial systems, accessibility work, and collaboration across publishing teams.
- **Selected projects:** Sketchlet, BakerParks / SF Parks Explorer, BakerLinks, and tools for personal hobbies.
- **Case studies:** project context, responsibilities, implementation decisions, current results, limitations, and next steps, with application and repository links where available.

The portfolio is actively evolving. Some project cards still use stock imagery while product screenshots and more detailed evidence are being collected. The deployed site may differ from local changes awaiting publication.

## How it works

The frontend uses **React, Vite, and Tailwind CSS**. A **Vercel serverless endpoint** reads and writes a JSON content document in **Vercel Blob**; **Formspree** handles contact submissions.

- **Shared content model:** structured project records drive homepage cards, the searchable case-study index, and reusable detail pages.
- **Editorial control:** visibility, priority, category, and stage govern presentation. Display order is independent of whether a project is Active, Supported, or Background.
- **Owner editing:** an admin dashboard supports content editing and JSON export. Writes require a private admin token; this is an owner-only gate, not a multi-user account system.
- **Fallback content:** the site starts with repository defaults and loads saved content at runtime where enabled. If the content API is unavailable, defaults remain usable.
- **Validation:** content normalization and sanitization handle incomplete records, legacy content, and unsafe URL schemes. Automated tests cover these behaviors and API authorization/configuration paths.
- **Interface details:** responsive layouts, a skip link, visible keyboard focus, labeled form fields, and reduced-motion styles support navigation and reading. These features do not constitute a full accessibility audit.

## Run locally

Use a Node.js version compatible with the installed Vite release and npm. The repository records npm 11.6.2 as its package manager.

```sh
git clone https://github.com/michael-baker-content/portfolio-deluxe.git
cd portfolio-deluxe
npm ci
npm run dev
```

Open the local URL printed by Vite. Ordinary development uses content from `src/data` and does not load the Vercel content API. The public pages can be previewed without configuring storage or contact services.

```sh
npm test
npm run build
npm run preview
```

The build output is `dist`. Preview runs on port 4173. For development specifically on port 3000, use `npm run dev:3000`; the port must be available.

### Optional service configuration

Copy `.env.example` to `.env.local` if that file does not already exist, then replace its placeholder values with your configuration. Do not overwrite an existing local configuration.

| Variable | Purpose |
| --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | Public Formspree endpoint for the name, email, and message form. |
| `VITE_ENABLE_CONTENT_API` | Set to `true` to load saved content during local development. Production enables loading automatically. |
| `BLOB_READ_WRITE_TOKEN` | Server-side credential for Vercel Blob content storage. |
| `ADMIN_TOKEN` | Private token required to save dashboard edits through the API. |

Keep server credentials out of client-side `VITE_` variables and version control. Restart development after changing environment configuration.

To test the dashboard save/load flow locally, install and authenticate the Vercel CLI, configure the server environment, and run the Vercel development server. In PowerShell:

```powershell
$env:VITE_ENABLE_CONTENT_API = "true"
npm run dev:vercel
```

Plain Vite serves the frontend but does not run `api/content.js`.

## Content and project structure

Capability labels provide a second way to browse projects without changing their curated order. Edit the slug mappings in `src/data/projectCapabilities.js` to group work under data modeling and analysis, interaction and interface design, or content and publishing systems. A project can belong to multiple groups. These editorial navigation labels are maintained in code rather than the content dashboard.


| Location | Responsibility |
| --- | --- |
| `src/App.jsx` | Routes and runtime content loading. |
| `src/pages/HomePage.jsx` | Introduction, selected projects, and contact form. |
| `src/pages/ExperiencePage.jsx` | Professional background and responsibilities. |
| `src/pages/CaseStudiesPage.jsx` | Project search, filters, and sorting. |
| `src/pages/ProjectPage.jsx` | Shared case-study detail layout. |
| `src/pages/AdminPage.jsx` | Owner content editor. |
| `src/data/profile.js` | Profile copy, experience content, links, and contact configuration. |
| `src/data/projects.js` | Project narratives, metadata, images, and links. |
| `src/lib/contentModel.js` | Default content, normalization, and derived project lists. |
| `src/lib/sanitizeContent.js` | Content validation, URL sanitization, and legacy migrations. |
| `api/content.js` | Content reads and authorized writes through Vercel Blob. |
| `src/components`, `src/styles.css` | Reusable interface elements and styling. |
| `public` | Static assets, favicon, and static-host routing fallback. |
| `test` | Node test suite. |
| `source-materials` | Archived references and prototypes outside the active application. |

Public routes include `/`, `/experience`, `/case-studies`, and `/projects/:slug`. The former `/taste` URL also opens Experience. The editor is at `/admin`.

### Editing case studies

Project records support summaries, problems, outcomes, roles, timelines, collaborators, tools, decisions, narrative sections, next steps, optional metrics, and application/repository links.

- `visibility: "listed"` includes a project in public lists.
- `visibility: "hidden"` removes it from lists **but leaves its direct route accessible**. It is not a privacy control.
- `priority` determines default order; lower numbers appear first. The homepage initially shows the first four listed projects.
- `stage` and `emphasisLabel` describe project status without changing priority.
- `category` supports filtering; `cardImage` supplies the card image and alternative text.

The hidden `/projects/template` entry provides a drafting pattern. Related applications have their own repositories; their code should not be mixed into this portfolio.

### Saved content versus repository defaults

Dashboard changes live in Vercel Blob and are **not automatically committed to Git**. Saved fields generally take precedence over defaults, with normalization restoring missing projects and selected legacy or incomplete fields. A code deployment alone does not replace previously saved copy.

Before publishing revised content, compare the saved document with `src/data/profile.js` and `src/data/projects.js`. Local Vite previews can show different copy because API loading is disabled by default.

Use **Download JSON** in the dashboard to export the current editor document, or retrieve saved content:

```sh
npm run content:pull
```

By default, this reads `https://michaelbaker.vercel.app/api/content` and writes `content-snapshots/latest-content.json`. To use another endpoint or destination:

```sh
npm run content:pull -- https://your-preview-url.vercel.app/api/content content-snapshots/preview-content.json
```

Review snapshots before incorporating them into repository defaults.

## Deployment

### Vercel

Import the repository using the Vite build settings:

- Build command: `npm run build`
- Output directory: `dist`
- Contact configuration: `VITE_FORMSPREE_ENDPOINT`
- Dashboard configuration: Vercel Blob storage, `BLOB_READ_WRITE_TOKEN`, and `ADMIN_TOKEN`

`vercel.json` provides the single-page application route fallback while preserving API and asset paths. Once deployed, visit `/admin` to load saved content or start from defaults, edit, and save using the admin token.

### Static hosting

The frontend can also be hosted as static files with a route fallback. `public/_redirects` supplies that fallback for hosts such as Cloudflare Pages. The Vercel content endpoint does not run on a static-only host; dashboard persistence requires a compatible backend. Without one, the public site uses repository defaults.

### Before publishing

1. Check the changed pages locally, including narrow layouts and navigation.
2. Run `npm test` and `npm run build`.
3. Review project visibility, factual claims, links, and any saved-content differences.
4. Keep `.env.local`, dependencies, build output, caches, and archived package-manager artifacts out of the commit.

## Credits

This project began as a fork of [machadop1407/beautiful-react-tailwind-portfolio](https://github.com/machadop1407/beautiful-react-tailwind-portfolio), which supplied the initial React/Tailwind portfolio foundation.

The current implementation adds the experience and project paths, structured case studies, search and filtering, owner content editing, validation and fallback behavior, and a revised visual identity. The repository retains the name `portfolio-deluxe` from that development history.
