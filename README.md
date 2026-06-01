# Michael Baker Portfolio

This is the standalone Portfolio project at `C:\Users\Michael\Documents\Apps\Portfolio`.

The project began as a fork of [`machadop1407/beautiful-react-tailwind-portfolio`](https://github.com/machadop1407/beautiful-react-tailwind-portfolio). The current goal is to keep the useful 1.0 portfolio structure while turning it into a more evidence-driven 2.0 site for Michael Baker's work.

## Current Shape

The active app is a React, Vite, and Tailwind portfolio site with:

- A layered, scroll-reactive hero using placeholder SVG assets in `public/assets/hero`.
- Sticky full-screen homepage sections for lineage, featured work, capabilities, taste, and contact.
- Data-driven project cards and project detail pages.
- Four case studies: Portfolio, Music, Greeting, and a reusable lorem-ipsum template case study.
- Sibling-project links for the Music and Greeting apps, which live outside this repo folder.

## Project Structure

- `index.html` mounts the Vite app.
- `src/main.jsx` boots React.
- `src/App.jsx` routes the homepage and `/projects/:slug` case-study pages.
- `src/pages/HomePage.jsx` contains the homepage layout and scroll hero behavior.
- `src/pages/ProjectPage.jsx` renders shared case-study pages.
- `src/components` contains reusable UI components.
- `src/data` contains navigation, profile, capabilities, and case-study content.
- `src/styles.css` contains Tailwind layers and custom utilities.
- `public/assets/hero` contains the current layered hero placeholder assets.

## Case Studies

Case-study content lives in `src/data/projects.js`.

Each case study currently supports:

- Card metadata: `slug`, `label`, `title`, `description`, `status`, `tone`, and `evidence`.
- Detail-page overview: `summary`, `problem`, `outcome`, and `role`.
- Lists: `decisions` and `nextSteps`.
- Narrative blocks: `sections`.
- Optional app links via `appHref`.

The template case study at `/projects/template` is intentionally placeholder content. Use it as the pattern for future case studies before replacing lorem ipsum with real project detail.

## Local Development

Install dependencies:

```powershell
npm install
```

Run the local site:

```powershell
npm run dev
```

Build the deployable static site:

```powershell
npm run build
```

If the local npm launcher points at a broken user-level npm install, use the Node-bundled npm CLI directly:

```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run build
```

## Sibling Projects

Sibling app projects live outside this folder:

- Music app: `C:\Users\Michael\Documents\Apps\Music`
- Greeting Card app: `C:\Users\Michael\Documents\Apps\Greeting`

The Portfolio project may link to those apps, but their app code should not be mixed back into this repo root.

## Source Materials

`source-materials` is for archived references, old prototypes, and files that are useful context but not part of the active Portfolio app.

Current source-material groups:

- `source-materials/music-show-explorer`: legacy Music app materials kept for reference.
- `source-materials/static-prototype`: the previous static prototype that used the old `portfolio-hero.png` image.
- `source-materials/package-manager-artifacts`: old package-manager artifacts. This folder is ignored by Git and is not part of the active project.
- `source-materials/empty-folders`: recovered empty folder names from earlier cleanup.

## Push Checklist

Before pushing to GitHub:

1. Confirm the app runs locally at `http://127.0.0.1:5173/`.
2. Run `npm run build`.
3. Check that `node_modules`, `dist`, `.npm-cache`, and `source-materials/package-manager-artifacts` are not staged.
4. Review whether `public/assets/portfolio-hero.png` should remain as a source-material dependency for the static prototype or be moved out of `public` later.
