# Sketchlet portfolio content brief

Prepared October 14, 2026. Scope: content recommendations, not portfolio edits.

## Editorial direction

Make the case study about turning a small daily drawing idea into a dependable public product. The current page explains the premise, but its most distinctive evidence lives in the production decisions: preserving work, adapting input to fingers, making publication unambiguous, and developing identity and community without requiring an account to begin.

Suggested central claim: **A playful daily drawing ritual, built through careful decisions about tools, trust, and participation.**

Treat short visits, creative confidence, repeat participation, and social connection as design goals. The reviewed material does not establish improved retention, faster completion, learning gains, or growth caused by these features.

## Evidence and status

Reviewed the local portfolio at `http://127.0.0.1:5173/projects/sketchlet`, the local Sketchlet checkout, its commit history through `4293a41`, and the public [Info page](https://sketchlet.app/info). The checkout's Git remote matches [michael-baker-content/sketchlet](https://github.com/michael-baker-content/sketchlet). GitHub could not be fetched independently during this review; repository evidence below comes from the local checkout.

Distinguish these evidence levels when publishing:

- **Publicly visible:** the live Info page presents the drawing guide and free-draw entry point. Its October 13 announcement advertises email/Google sign-in and cross-device drawing collections, and calls groups a feature in development. Reading those statements does not verify the full authenticated experience.
- **Implemented in reviewed source:** drawing, draft recovery, sharing, accounts/linking, moderation, and automated regression coverage have concrete implementations. Source presence alone does not prove a particular version is deployed.
- **Local work in progress:** group membership files and related changes are uncommitted in this checkout. Group feeds and dedicated admin group management remain future stages.
- **Not established:** adoption, engagement improvements, real-device performance results, and completion of the account/group release checklists. Tests were inspected, not run, for this editorial review.

The README still calls accounts pre-release, while the live announcement advertises sign-in. Use “optional sign-in is publicly advertised” in internal reporting; verify the production flow before labeling every account capability shipped. Some older deployment-checklist details also lag current source, so do not use documentation alone as release evidence.

## Corrections to the current portfolio

| Current content | Recommended change | Why |
| --- | --- | --- |
| React in Tools | HTML, CSS, JavaScript, Canvas API; optionally Vercel, Neon, Clerk | Sketchlet's package and source do not use React. Keep frameworks used by the portfolio itself separate. |
| “Training materials” | “Drawing-tool guide and a separate practice canvas” | Names the actual learning support. Do not imply a tested curriculum or guided onboarding course. |
| “The project now has ... user accounts” | Describe optional sign-in, then distinguish current account implementation from verified deployment | The public announcement and repository release notes differ in certainty. |
| “Without leaving the creative flow” | “A dedicated Info page explains tool behavior, with free draw for practice” | The guide is a separate page; it is not proven in-editor instruction. |
| “More social features” | “Build group drawing views on the membership foundation” | More specific than a generic social roadmap, while acknowledging unfinished feeds. |
| “Frontend prototyping” | Consider “Product direction, interaction design, content design, and implementation” | The work now includes persistence, identity, publishing, and operations. Confirm this accurately describes personal responsibility. |

Separate implementation tools from capabilities. “User accounts” and “daily game design” belong under product scope, not the technical stack.

## Suggested page copy

### Opening

Sketchlet is a daily drawing playground built around one shared prompt and many possible interpretations. Inspired by the repeatable rhythm of Wordle, it gives people a reason to draw, a place to share their work, and something new to return to tomorrow. The production journey has focused on making that small creative ritual dependable—from restoring an unfinished canvas to keeping practice, publication, and sharing distinct.

### Problem

A daily drawing game needs enough expressive range to make each prompt interesting, but a short visit should not require learning a professional art application. The challenge is to make the tools approachable while keeping their behavior predictable: a finger should not hide the mark, an interrupted session should not lose its work, and saving an image should not accidentally publish it.

### Current result

Sketchlet has grown into a public drawing site with a daily prompt, expressive canvas tools, a gallery, and a published guide with access to free draw. The implementation supports date-specific drafts, separate download and submission actions, and shareable drawing links and image cards. Optional sign-in is now advertised on the live site; group experiences are the next development stage. The focus remains on a reliable creative loop, with repeat use and social participation still to be evaluated.

### Decision 1: Make returning to a drawing predictable

The daily rhythm creates a practical problem: today's prompt, yesterday's unfinished work, and an already-submitted drawing need different treatment. Sketchlet keeps drafts attached to their original prompt date and chooses the opening experience from the visitor's state. A fresh day begins with instructions, an unfinished drawing resumes in the editor, and a completed day opens the submitted work. This connects the promise of a quick daily visit to concrete recovery and navigation behavior.

Evidence: [home startup](../src/page-startup.js), [draft storage](../src/draft-storage.js), [draft detection tests](../tests/draft-storage.test.js). Include screenshots of the three entry states rather than an unsupported claim about reduced drop-off.

### Decision 2: Design for the finger, not just the canvas

Touch input introduced a different constraint from a mouse: the finger covers the mark. Sketchlet offsets finger drawing 24 screen pixels upward and provides space below the canvas to reach its bottom edge. Mouse and pen remain directly aligned. Compact controls and full-screen drawing make room for the canvas, while undo and drawing state survive layout changes.

Evidence: [pointer handling](../src/pointer-input.js), [input tests](../tests/pointer-input.test.js), [browser regression cases](../checks/browser/pages.spec.js). Show a short phone recording of the offset and bottom edge. Say “adapted for touch”; reserve “faster” or “smoother on phones” for measured device evidence.

### Decision 3: Give practice its own place

One final submission per day gives the game a clear boundary, but it should not end experimentation. Free draw uses the same tools in a separate persistent canvas. A person can start blank or continue from a flattened copy of a submitted image without changing the gallery original. The drawing guide explains practical behavior, including translucent marker strokes and why gaps in a boundary allow fill to escape.

Evidence: [public drawing guide](https://sketchlet.app/info#drawing-guide), [free-draw controller](../src/free-draw-page.js), [information-page content](../backend/information-pages.mjs). Describe this as learning support by design; its effect on confidence or successful tool use has not been measured.

### Decision 4: Make publication and sharing explicit

Downloading a PNG keeps a local image; saving to the gallery publishes the day's final entry after confirmation. Sharing then offers two different outputs: a link back to the drawing or an artwork-focused image card. Link previews use the Sketchlet logo, while the card includes the selected artwork, creator, prompt, and date. The current card omits ratings, and a download fallback supports browsers that cannot copy images.

Evidence: [submission flow](../src/submission.js), [share cards](../src/share-card.js), [social metadata](../backend/social.mjs). Pair the submission confirmation with a share-card example. Explain the choices without claiming sharing has increased acquisition.

### Decision 5: Build continuity before expanding community

Guests can participate without registering, but browser identity has limits: moving to another device or domain does not automatically reconnect earlier work. Account development addresses that continuity through explicit review of guest drawings and choices when two drawings belong to the same day. The next social layer builds on group membership and approval rules; group drawing feeds are still ahead.

Evidence: [account and recovery notes](../docs/ACCOUNTS.md), [merge review](../src/merge-review.js), [group status](../docs/GROUPS.md). Label account recovery as implemented with production verification to confirm, and group membership as local work in progress. Do not suggest unlisted groups make individual drawings private.

## Show the production journey

Use a compact sequence of turning points, backed by local commit dates. These are development milestones, not confirmed deployment dates or evidence of specific user research.

| Date | Development evidence | Portfolio meaning |
| --- | --- | --- |
| Oct 3 | `c3cc8cb`: initial app with Neon and Vercel support | Establish the daily drawing product and persistence foundation. |
| Oct 4–7 | Drawing-tool, page architecture, performance/testing, loading, and cursor changes | Explain how a playful premise led to detailed interaction and reliability work. |
| Oct 8–10 | Refactoring, fill/palette adjustments, social links, share-card design | Show refinement of predictable tools and intentional sharing. |
| Oct 12 | Authentication work and `74664bd`: free draw | Explain durable identity alongside room to experiment beyond the daily limit. |
| Oct 13 | Announcements and profile consistency | Show the shift toward operating and explaining a public product. |
| Current local work | Uncommitted group membership implementation | Present the next stage with its limits: membership first, feeds and admin oversight later. |

An optional short section on operating the site can connect visitor reports, reversible moderation, announcements, and contact to the responsibility of maintaining a shared gallery. Keep it secondary to the drawing experience.

## Evidence to collect next

1. **Entry and recovery:** capture fresh-day, resumed-draft, and completed-day screens; demonstrate reload recovery with a disposable drawing.
2. **Touch behavior:** record a real phone showing mark visibility, bottom-edge access, and return from full-screen. Existing automated checks are not real-device performance measurements.
3. **Learning:** observe whether a new visitor can distinguish marker, pencil, line, and fill after using the guide and practice canvas. Record confusion before claiming learning gains.
4. **Sharing:** capture the exact confirmation, link destination, and image-card fallback. Later measure whether recipients start a drawing, with an appropriate measurement plan.
5. **Continuity and community:** complete the documented account checks and group verification before updating their release labels. Test whether people can recover their work and understand membership approval.

Avoid adding invented metrics or retrospective user quotations. Where motivations are inferred from the implementation, confirm them with Michael before presenting them as the original design rationale.

## Keep the story aligned with production

For each major portfolio claim, maintain a small record: **goal → decision → source or artifact → release status → validation → last reviewed date**. Update it after a meaningful release rather than copying the whole backlog into the page.

Use “implemented” when code exists, “available” after checking the deployed behavior, and outcome language such as “improved” only after collecting comparative evidence. Keep an explicit “Next” section for group feeds, admin group oversight, and unresolved usability questions. Revisit the portfolio when those milestones change.

Recommended page order: opening and live link; problem and current result; four or five illustrated decisions; compact production timeline; current limits and next questions. This gives the portfolio a defensible story while leaving room for the project to keep evolving.
