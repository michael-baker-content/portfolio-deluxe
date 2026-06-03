---
title: "Building Notion Archive Cleaner"
description: "A dev blog about a focused utility for cleaning noisy Notion export filenames and making archives easier to read."
pubDate: 2026-06-02
tags:
  - notion
  - utility
  - scripts
  - workflow
---

Notion Archive Cleaner is a small utility for a small but real problem: Notion exports often include auto-appended UUIDs that make filenames harder to read.

That may not sound glamorous, but archive readability matters. If a person exports a workspace so they can keep it, publish it, or move it somewhere else, the file structure should not feel hostile.

## How It Works

The project focuses on cleaning exported archive names. It uses scripting patterns around JavaScript, Python, or browser-based utility code to remove noisy identifiers and make the resulting file structure more human-readable.

The value is in repeatability. Instead of manually renaming many files, the utility turns a fragile cleanup job into a process.

## Interesting Challenge

The challenge is caution.

File cleanup tools need to respect the user's material. They have to think about names, paths, collisions, nested folders, assets, and the possibility that a cleanup rule might be too aggressive.

That makes this a product problem, not just a string manipulation problem.

## How It Fits The Larger Project

This case study shows the value of narrow utilities. Not every useful product needs to become a platform. Sometimes the right answer is a focused tool that removes one recurring annoyance.

It also connects to the larger portfolio theme: turn messy information into a cleaner structure that is easier to use.

## Questions To Confirm

- Which implementation path is primary right now: JavaScript, Python, browser UI, or all three?
- How does the tool handle filename collisions after UUID removal?
- What before-and-after filename examples should appear in the final case study?
