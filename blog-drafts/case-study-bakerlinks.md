---
title: "Building BakerLinks"
description: "A dev blog about a free link-in-bio platform built around simple publishing, hosted data, and public profile pages."
pubDate: 2026-06-02
tags:
  - nextjs
  - supabase
  - publishing
  - product
---

BakerLinks is a free link-in-bio platform. The category is familiar, but the product challenge is still interesting: how do you help someone publish a clear, useful page without turning the experience into a bloated website builder or a paywalled funnel?

The first useful job is simple. A person should be able to create a profile, add links, organize them, and share a page that feels trustworthy.

## How It Works

The project uses Next.js for the app and public profile pages, Supabase for hosted backend functionality, Tailwind for interface styling, and Vercel for deployment.

That stack keeps the operational weight low. Supabase handles the backend shape that would otherwise take time to build from scratch. Vercel makes public deployment straightforward. Next.js keeps the profile pages and management interface in one product system.

## Interesting Challenge

The interesting challenge is restraint.

Link-in-bio tools can easily drift into endless customization, analytics, themes, upsells, and platform behavior. BakerLinks is more useful if it keeps the first version focused: publish links quickly, make them easy to manage, and keep the public page readable.

The free model also matters as a product constraint. If the promise is a free publishing tool, the basic usefulness cannot be hidden behind a paywall.

## How It Fits The Larger Project

BakerLinks fits the larger portfolio because it is another publishing system. It asks how scattered material becomes a public-facing structure. That connects it to the portfolio, the GitHub Repo Journal, and the broader theme of making information easier to organize and share.

## Questions To Confirm

- What exact user flow exists today: signup, profile creation, link editing, public page, or all of those?
- Does the project currently use Supabase authentication, database tables, storage, or a smaller subset?
- What would make BakerLinks meaningfully different from common link-in-bio tools?
