---
title: "Building Bay Area Show Explorer"
description: "A dev blog about turning local concert listings into a reviewable music-discovery workflow."
pubDate: 2026-06-02
tags:
  - music
  - local-discovery
  - data-quality
  - javascript
---

Bay Area Show Explorer started from a familiar local-discovery problem: concert listings are useful, but they are thin. They tell you what is happening, but they often do not explain who the artist is, whether they are local, where to support them, or how trustworthy the imported data is.

The project became more interesting when I stopped thinking of it as only a calendar and started thinking of it as a review workflow.

## How It Works

The app separates artists, venues, and events into different data concerns. A show listing can point to an event, but artist and venue records can carry richer context, source links, enrichment notes, and review states.

That matters because local music data is messy. Artist names collide. Venues can have incomplete or inconsistent information. Search results can look plausible and still be wrong. The app needs room for uncertainty.

Instead of treating imported listings as finished truth, Bay Area Show Explorer treats them as leads. Records can be enriched, reviewed, and kept traceable back to sources.

## Interesting Challenge

The hardest challenge is ambiguity. The product has to resist the temptation to act more certain than the data really is.

That makes the review queue important. It gives incomplete or questionable records a place to live without polluting the rest of the experience. A good data product does not only add more information. It also explains what is known, what is guessed, and what still needs judgment.

## How It Fits The Larger Project

This case study shows the portfolio's recurring theme: turning messy inputs into useful structure. It is also a strong example of content judgment in a technical product. The real value is not only collecting concert information; it is shaping the information so a person can decide what to trust and what to explore.

## Questions To Confirm

- What was the original listing source or workflow that sparked the first version?
- Which enrichment source has been most useful so far: Wikidata, Google Places, direct artist links, or another source?
- What is the clearest before-and-after screenshot for the review workflow?
