---
title: "Building Fantasy Basketball Dashboard"
description: "A dev blog about turning a custom fantasy sports format into a self-hosted dashboard with standings, rosters, and scoring logic."
pubDate: 2026-06-02
tags:
  - flask
  - dashboard
  - python
  - railway
---

Fantasy Basketball Dashboard is a self-hosted app for a custom fantasy sports competition. The domain is basketball, but the product pattern is broader: take a competition that might otherwise live in spreadsheets and chat threads, then make its state visible.

The app is about clarity. Who is ahead? Why? What roster details explain the leaderboard? What data supports the standings?

## How It Works

The project uses Python, Flask, a database layer that can run locally with SQLite, and PostgreSQL in production on Railway.

The main product surfaces are leaderboard views, roster or participant pages, and scoring logic. The database has to translate league concepts into durable records: teams, players, rosters, categories, standings, and update timing.

## Interesting Challenge

The interesting challenge is translating rules into a product.

Custom fantasy formats often have edge cases. If the rules are not modeled clearly, the dashboard becomes just another place to argue about the numbers. The app needs to make the state inspectable enough that people can trust what they are seeing.

That means the dashboard is not only a display layer. It is part of the league's operating system.

## How It Fits The Larger Project

This case study expands the portfolio beyond frontend presentation. It shows backend modeling, deployment, data transformation, and dashboard thinking.

It also fits the larger theme of the portfolio: make complex state easier to understand at the moment someone needs it.

## Questions To Confirm

- What exact fantasy format and scoring rules does the app support?
- Does the app currently pull from `nba-api` live, periodically, or through manual updates?
- Which leaderboard or roster screenshot best explains the product?
