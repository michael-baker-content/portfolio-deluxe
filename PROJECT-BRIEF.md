# Portfolio 2.0 Brief

## Origin

This project began as a fork of [`machadop1407/beautiful-react-tailwind-portfolio`](https://github.com/machadop1407/beautiful-react-tailwind-portfolio).

The original project is useful because it gives a modern portfolio baseline: React, Vite, Tailwind, responsive navigation, dark mode, animated visual polish, hero/about sections, skills, project cards, and contact flow.

## Product Goal

Build a portfolio site that feels personal enough to represent Michael's taste and practical enough to improve on the original template as a reusable portfolio system.

## Audience

- People evaluating Michael's work, taste, writing, prototypes, and product thinking.
- Michael, using the site as a living hub for active projects.
- Future collaborators who need to understand project intent quickly.

## Version 2.0 Principles

- Personal before generic: keep the structure of a portfolio template, but replace stock developer-portfolio language with specific project evidence.
- Projects as evidence: each project card should explain what the project does, why it exists, what improved, and where to go next.
- Data over markup: project entries, tags, links, and summaries should live in structured data.
- Project clarity: Portfolio, Mike's List, and Greeting are related projects, but their app code and repositories should stay separate.
- Source materials stay separate: old assets, references, and prototypes belong under `source-materials` unless they are active code.
- Accessible by default: navigation, contrast, reduced motion, semantic sections, and keyboard flow should be part of the baseline.

## Near-Term Scope

- Re-establish the app architecture around React, Vite, and Tailwind.
- Restore the high-level portfolio theme of the 1.0 fork while letting theme experiments live as case studies.
- Add structured project data for Portfolio, Mike's List, Greeting, and other case studies.
- Expand the project-detail pattern with screenshots and richer proof.
- Keep the site deployable as a static portfolio.

## Out Of Scope For Now

- Mixing Mike's List or Greeting app code back into the Portfolio root.
- Recreating the original template unchanged.
- Expanding the backend beyond the current owner-only content dashboard before the public portfolio needs it.
