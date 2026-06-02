---
title: "What I Am Building Now"
description: "A tour through the projects I am developing, how they work, where they fit together, and the product challenges they are helping me explore."
pubDate: 2026-06-02
tags:
  - projects
  - product
  - frontend
  - prototypes
---

I have been building a small ecosystem of web projects that are different on the surface, but connected underneath. Some are practical utilities. Some are publishing systems. Some are dashboards. Some are experiments in how to make complex information easier to understand.

The shared idea is this: I am interested in products that turn messy inputs into useful structure. A concert listing becomes a richer discovery workflow. A set of GitHub repos becomes a readable body of work. A learning idea becomes a course platform. A custom fantasy league becomes a dashboard instead of a spreadsheet.

Recently, the projects have also started to connect at the infrastructure level. Portfolio Deluxe is live on Vercel, the contact form is wired through Formspree, and the portfolio now has a small backend dashboard so I can edit core copy and case-study content without opening a code editor. That changes the portfolio from a static presentation layer into something closer to a working content product.

This post is a snapshot of what I am working on, how the pieces work, the newest features I have added, and the challenges that have made each project interesting.

## Portfolio Deluxe

Portfolio Deluxe is the hub for the rest of the work. It started as a fork of a polished React and Tailwind portfolio starter, but it has grown into something more specific: a candidate-focused portfolio with case studies, filters, project metadata, deployment-ready hosting, a direct contact form, and a small admin dashboard.

The interesting part is not just the visual redesign. The useful part is the content system underneath it. Project cards and case-study pages share structured data, which means the homepage, the filterable case-study index, and individual project pages can all stay in sync. A project can be listed publicly, hidden as a draft, sorted by priority, grouped by category, and expanded into a full narrative without rewriting layout code.

That structure matters because I want the portfolio to behave less like a static brochure and more like a living index of work. As the projects change, the portfolio can absorb them.

The newest feature is the backend dashboard. The public site still has code defaults, but it can now load a saved content document from Vercel Blob at runtime. The `/admin` route lets me edit homepage copy and case-study content in the browser, save through a Vercel Function, and keep the live site current without asking every copy tweak to become a code change. I also added two sync paths: an admin "Download JSON" button and a local `content:pull` script for pulling live content back into the repo.

That creates a useful tension. I want the dashboard to make editing easier, but I do not want to lose the discipline of versioned content. The current approach treats Vercel Blob as the live content source and the repo data as a fallback/default. The next challenge is deciding how often live edits should be pulled back into Git and whether the dashboard should eventually become more structured than a pragmatic editor.

Another recent addition is the contact form. Instead of listing placeholder email addresses or making visitors jump to social links, the site now has a Formspree-backed form with context fields: the person's role, their general location, and whether they are interested in a particular case study. That turns contact into a product surface too. A good contact form should not just transmit a message; it should help the conversation start in the right place.

The hardest content challenge has been separating the story of the portfolio itself from the story of me as a candidate. Some of the early copy focused too much on the fork and the mechanics of rebuilding the site. That belongs in the Portfolio case study. The homepage needs to answer a different question: what kind of person is behind this work, and why should someone keep reading?

## Newest Features In The Portfolio

Several recent updates changed the portfolio from a static showcase into a more flexible working system.

First, the site is now live on Vercel. That forced a useful pass over deployment details: Vite build output, SPA route fallbacks, environment variables, and the difference between local defaults and production configuration. The site now supports direct visits to routes like `/case-studies`, `/projects/music`, and `/admin`.

Second, the contact flow is real. The Formspree integration means someone can contact me directly from the portfolio. The extra context fields make the form more useful than a plain message box because they tell me who is writing, where they are generally located, and what work caught their attention.

Third, the case-study system is easier to browse. The homepage shows a focused set of three case studies first, then offers an expansion control. The full `/case-studies` page supports search, category filtering, and sorting. That split lets the homepage stay readable while the archive can grow.

Fourth, the admin dashboard gives me a content workflow. I can edit homepage copy and case studies in the browser, save to Vercel Blob, download JSON, and pull live content locally when I want to compare or commit changes. It is a small backend, but it changes the character of the project. The portfolio is no longer only an output. It is becoming a tool for maintaining itself.

## Bay Area Show Explorer

Bay Area Show Explorer is a local music discovery tool. At first glance, it is about concerts: who is playing, where they are playing, and what events are coming up. But the more interesting product problem is trust.

Concert listings are useful, but they are often thin. They may name an artist without telling you whether the artist is local, what kind of work they make, where to support them, or how reliable the imported data is. The app treats that thin listing as the start of a review workflow instead of the final product.

The project uses local data stores for artists, venues, and events. It keeps source trails, review states, and enrichment notes so imported information can be checked instead of blindly accepted. That creates a more careful discovery experience: automated where automation helps, but still honest about uncertainty.

The hardest challenge has been ambiguity. Artist names collide. Venue data can be incomplete. Search results can look plausible and still be wrong. The app has to make room for unresolved matches rather than pretending every enrichment step is certain.

That is the bigger lesson: a useful data product is not just about adding more data. It is about showing what is known, what is guessed, and what still needs judgment.

## BakerLinks

BakerLinks is a free link-in-bio platform. The basic product category is familiar: a person creates a profile page and adds links they want to share. The interesting question is how simple that workflow can be without feeling disposable.

The project uses a modern web stack around Next.js, Vercel, and Supabase. That combination keeps the operational weight low: the frontend can be fast and shareable, while the backend can handle profiles and links without building every infrastructure piece from scratch.

The product challenge is restraint. Link-in-bio tools can easily become bloated with customization, analytics, themes, upsells, and growth features. BakerLinks is more interesting when it stays focused on the first useful job: publish a clear public page quickly.

This project fits into my broader work because it is about lightweight publishing. I keep returning to that theme: how do you help someone turn scattered material into a public-facing structure that feels organized, useful, and theirs?

## Baker University

Baker University is a learning-platform experiment built in Next.js. It explores courses, lessons, rich text, math rendering, and editable learning content.

Learning products have a difficult balance to strike. They need structure, because learners need to understand where they are and what comes next. But they also need expressiveness, because lessons are not always simple blocks of text. A real learning system may need formulas, diagrams, examples, embedded media, and editable content.

That is why this project brings together tools like Tiptap and KaTeX. Tiptap creates room for rich lesson authoring. KaTeX supports mathematical notation. Tailwind and React make it possible to shape the interface around the learning flow rather than treating content as a generic page.

The challenge is deciding what kind of learning platform this wants to be. Is the next milestone better course navigation? Better authoring? Learner progress? Publishing? Each direction implies a different product center.

For now, the value of the project is that it gives me a place to explore the relationship between content structure and interface design. Learning products are never just content. They are systems for attention.

## GitHub Repo Journal

The project blog is an Astro site for writing about recent GitHub repos and technical experiments. It exists because code repositories are not very good at explaining intent.

A GitHub profile can show activity. It can show languages, commits, and project names. But it rarely explains why something was built, what tradeoffs mattered, or what the project taught me. The blog adds that missing narrative layer.

Astro is a good fit because the site is content-first but still flexible. It can support essays, technical notes, React components, KaTeX, and creative coding with p5.js. That range matters because not every project needs the same kind of writeup.

The challenge is editorial discipline. A repo writeup should not become a README with more adjectives. It should explain the project in plain terms: what problem it explores, how it works, why the technical choices fit, and what I would do next.

In the overall system, the blog is the reflective layer. The portfolio gives a quick path into the work. The blog gives the work more room to breathe. The newest portfolio features make that relationship stronger: case studies can point to blog posts, and blog posts can explain the decisions that would overcrowd a project card.

## Fantasy Basketball Dashboard

Fantasy Basketball Dashboard is a self-hosted dashboard for a custom fantasy sports competition. The original domain is basketball, but the product pattern is broader: turn a competition that might live in spreadsheets and chat threads into a clear shared interface.

The app uses Python, Flask, and a database layer that can run locally with SQLite and in production with PostgreSQL. It includes leaderboard views, participant or roster pages, and scoring logic that can be checked throughout the season.

The key challenge is translating rules into a data model. Fantasy formats often have custom scoring rules and edge cases. If those rules are not modeled clearly, the dashboard becomes just another place to argue about the numbers.

What makes the project useful as a case study is the movement from manual coordination to operational clarity. The dashboard does not need to be huge. It needs to make the state of the competition inspectable.

## Movie Database Project

Movie Database Project is a focused movie lookup tool built around TMDB data. Instead of trying to recreate a general movie database, it asks a narrower question: how can movie metadata support fast decisions?

That distinction matters. A large entertainment database can be overwhelming. The value of a focused interface is that it filters the database through a specific use case. Search, scanning, and metadata display all need to serve the decision the user is trying to make.

The technical work involves TypeScript, React, Next.js, TMDB integration, and deployment through Vercel. The product work is about scope. The more focused the workflow, the more opinionated the interface can be.

The interesting challenge is resisting the pull of encyclopedic completeness. Sometimes the better product is the one that knows what not to show.

## RPG Character Tracker

RPG Character Tracker is a dynamic character-management interface for rules-heavy role-playing systems. The project started from Pathfinder 2E, but the broader pattern is interactive tracking for complex rule sets.

Static character sheets can be hard to use when many values are derived, conditional, or frequently referenced during play. A dynamic tracker can make those relationships easier to see. It can calculate values, organize information around play-facing needs, and reduce the amount of manual cross-checking.

The challenge is choosing the right level of automation. Full rules coverage can become a huge undertaking. Too little automation and the tool does not justify itself. The sweet spot is identifying the values and workflows where dynamic behavior removes real friction.

This project fits into my larger interests because it is another version of the same problem: make dense information usable in the moment someone needs it.

## Notion Archive Cleaner

Notion Archive Cleaner is a small utility for cleaning exported Notion archives. Notion exports often append UUIDs to filenames, which makes archives harder to read, publish, and maintain.

The utility focuses on a narrow workflow: take a messy export and make it more human-readable. That is not a huge product, but it is a real problem. The value is in making a repeated manual task safer and faster.

The challenge is file hygiene. A cleanup script needs to be careful about names, paths, collisions, and preserving the structure people expect after export. It is a reminder that small utilities still need product thinking. A tool can be simple and still need to respect the user's data.

## The Larger Pattern

Looking across these projects, the pattern is clear to me now.

I am building around a few recurring questions:

- How do you turn scattered information into useful structure?
- How do you make a prototype feel real enough to evaluate?
- How do you explain the decisions behind the work?
- How do you keep tools focused enough that they stay useful?
- How do you make content editable without losing control of the underlying system?

Portfolio Deluxe, Bay Area Show Explorer, BakerLinks, Baker University, the blog, and the smaller utilities all answer those questions from different angles. Together they are becoming more than a collection of repos. They are a practice: product thinking, frontend craft, writing, data structure, deployment, and content operations reinforcing each other.

That is the work I want to keep doing.
