---
title: "Building RPG Character Tracker"
description: "A dev blog about making dense tabletop RPG character data easier to use through a dynamic JavaScript interface."
pubDate: 2026-06-02
tags:
  - javascript
  - ttrpg
  - pathfinder-2e
  - interface-design
---

RPG Character Tracker is a dynamic character-management tool for rules-heavy tabletop systems. It started from Pathfinder 2E, which gives the project a useful constraint: the rules are dense enough that a static sheet can become friction during play.

The broader product question is simple: what should a character sheet do when many values are derived, conditional, or frequently referenced?

## How It Works

The project uses JavaScript to create a lightweight character-tracking interface. The goal is to organize character information around player needs rather than sourcebook structure.

That means the app is strongest where dynamic behavior reduces friction: calculated values, changing resources, conditional modifiers, and information a player needs quickly during a session.

## Interesting Challenge

The hard part is choosing the right amount of automation.

Full rules coverage can become an enormous project. Too little automation and the tool does not justify itself. The useful middle is identifying the moments where dynamic calculation or better organization makes play smoother.

The product should help the table, not become another rulebook to manage.

## How It Fits The Larger Project

This case study shows interface design for dense state. That pattern appears across many products, not only games: make complex information visible, actionable, and easier to trust.

It also gives the portfolio a useful example of domain-specific tooling. The project is not generic, and that specificity makes the design problem clearer.

## Questions To Confirm

- Which Pathfinder 2E character values are currently dynamic?
- Is the tool intended for one character, many characters, or a reusable character-sheet model?
- What play-facing screenshot would best show the value of the tracker?
