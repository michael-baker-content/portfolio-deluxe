---
title: "Building Portfolio Deluxe"
description: "A dev blog about turning a forked portfolio starter into a richer case-study system, admin dashboard, and candidate-facing portfolio."
pubDate: 2026-06-02
tags:
  - portfolio
  - react
  - vite
  - content-system
---

Portfolio Deluxe started as a fork of `machadop1407/beautiful-react-tailwind-portfolio`, but the useful development work has been turning that starter into something more personal and more durable.

The original repo gave me a strong 1.0 shape: hero, navigation, skills, project cards, visual polish, and a contact path. That was enough to begin from, but not enough to explain the kind of work I am actually doing now. I needed the site to become less of a static portfolio page and more of a living system for presenting projects as evidence.

## How It Works

The project now uses structured project data to drive the homepage, the filterable case-study index, and each individual project page. Each case study carries metadata such as visibility, priority, category, status, tools, evidence, metrics, decisions, links, and narrative sections.

That structure lets the same project record appear in several different contexts without rewriting markup. A project can be shown on the homepage, filtered on `/case-studies`, opened at `/projects/:slug`, hidden as a draft, or moved up and down the priority order.

The newer backend layer adds a protected admin dashboard. The public app can load saved content from Vercel Blob, while the code still keeps safe defaults. That makes the portfolio editable without giving up the stability of versioned source content.

## Interesting Challenge

The biggest challenge has been separating three stories that kept overlapping:

- The story of the forked portfolio starter.
- The story of the visual theme experiments.
- The story of me as a candidate.

The 2.0 direction became clearer once those stories were allowed to live in different places. The homepage can focus on my candidate pitch. The Portfolio case study can explain the transformation from 1.0 starter to 2.0 system. The Taste page can speak more directly about judgment, content, and experience.

## What This Adds To The Larger Project

Portfolio Deluxe is the hub. It holds the case studies, points to the other apps, and gives the work a structure that can grow. It also demonstrates the same skills the portfolio claims: content modeling, frontend craft, deployment, admin workflows, and practical product judgment.

## Questions To Confirm

- Which screenshots should represent the original fork, the theme experiment, and the current 2.0 version?
- Should the Portfolio case study include a public comparison table of 1.0 versus 2.0 features?
- How much should the post name Codex as a collaborator versus keeping the emphasis on the product decisions?
