# Case-study editorial reference

Captured before the readability pass on October 15, 2026. This is internal reference material, not public page copy. The source briefs remain the underlying evidence. No new production checks or user research were performed during the copy edit.

Preserve these limits in future revisions: implemented code is not proof of deployment; Sketchlet account recovery and groups need release verification; BakerParks deployment parity and manual accessibility testing remain open. Neither project has established comparative user outcomes. Do not turn goals into measured results.

The prior records below retain detailed review dates, limitations, and validation tasks for reference.

```js
    slug: "sketchlet",
    visibility: "listed",
    stage: "featured",
    priority: 10,
    category: "Creative tool",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Sketchlet",
    description:
      "A daily drawing playground shaped by practical decisions about draft recovery, touch input, practice, and publication.",
    cardImage: stockImage("photo-1513475382585-d06e58bcb0e0", "Colored pencils arranged for a drawing session."),
    detailHref: "/projects/sketchlet",
    appHref: "https://sketchlet.app",
    repoHref: "https://github.com/michael-baker-content/sketchlet",
    tone: "coral",
    status: "Public site · active development",
    timeline: "October 2026–present",
    role: "Product direction, drawing-tool design, and implementation",
    collaborators: ["Michael Baker"],
    tools: ["HTML", "CSS", "JavaScript", "Canvas API", "Vercel", "Neon", "Clerk"],
    evidence: ["Draft recovery", "Touch input", "Practice canvas", "Explicit publication"],
    metrics: [],
    summary:
      "Sketchlet is a daily drawing playground built around one shared prompt and many possible interpretations. Inspired by the repeatable rhythm of Wordle, it gives people a reason to draw, a place to share their work, and something new to return to tomorrow. The work focuses on making that small creative ritual dependable: preserving an unfinished canvas, adapting tools to touch, and keeping practice, publication, and sharing distinct.",
    problem:
      "A daily drawing game needs expressive tools without asking visitors to learn a professional art application. The tools also need predictable behavior: a finger should not hide the mark, an interrupted session should not lose its work, and saving an image should not accidentally publish it.",
    outcome:
      "Sketchlet is a public drawing site with a daily prompt, canvas tools, a gallery, and a published drawing-tool guide with access to free draw. The implementation includes date-specific draft recovery and separate download, submission, and sharing actions. Optional sign-in is publicly advertised; full account recovery still needs production verification. Group experiences remain in development.",
    decisions: [
      "Keep each draft attached to its prompt date and distinguish a fresh visit, an unfinished drawing, and a completed submission.",
      "Offset finger input so the mark remains visible, while keeping mouse and pen input directly aligned.",
      "Give practice a separate persistent canvas and explain tool behavior in a dedicated drawing guide.",
      "Separate downloading an image from publishing a final entry, with confirmation before gallery submission.",
      "Allow guest participation and develop account continuity before expanding into group drawing experiences.",
    ],
    sections: [
      {
        title: "Returning to an unfinished drawing",
        body:
          "The daily rhythm creates three different entry states. In the reviewed implementation, a fresh day begins with instructions, an unfinished drawing resumes in the editor, and a completed day opens the submitted work. Drafts remain attached to their original prompt date, so yesterday’s unfinished canvas does not become today’s entry. Recovery and navigation are part of making a short daily visit dependable.",
      },
      {
        title: "Drawing with a finger",
        body:
          "A finger covers the mark in a way a mouse pointer does not. Sketchlet’s input handling offsets finger drawing 24 screen pixels upward and provides space below the canvas to reach its bottom edge. Mouse and pen remain directly aligned. Compact controls and full-screen drawing make room for the canvas, while drawing state and undo history survive layout changes. These are adaptations for touch; real-device usability and performance still need evaluation.",
      },
      {
        title: "A separate place to practice",
        body:
          "One final submission per day gives the game a boundary without ending experimentation. Free draw uses the same tools in a separate persistent canvas. The implementation lets a person start blank or continue from a flattened copy of a submitted drawing without changing the gallery original. A dedicated Info page explains practical tool behavior, including translucent marker strokes and why gaps in a boundary allow fill to escape. This is learning support by design, rather than a measured learning outcome.",
      },
      {
        title: "Making publication explicit",
        body:
          "Downloading a PNG keeps a local image. Saving to the gallery publishes the day’s final entry after confirmation. The sharing implementation offers a link back to the drawing or an artwork-focused image card with the creator, prompt, and date. Link previews use the Sketchlet logo; image cards omit ratings. A download fallback supports browsers that cannot copy images. These separate actions make the destination of a drawing explicit.",
      },
      {
        title: "Continuity before community",
        body:
          "Guests can participate without registering, but browser identity does not automatically reconnect their work on another device or domain. Account development includes reviewing guest drawings and resolving conflicts when two drawings belong to the same day. Sign-in is advertised publicly, while recovery and linking flows still require production verification. As of the October 14 review, group membership was local work in progress; group drawing feeds and dedicated admin management remained future work.",
      },
      {
        title: "What the evidence establishes",
        body:
          "This account draws on an October 14, 2026 review of the local source, development history, and public Info page. Source review establishes implementation, not that every feature is deployed or verified end to end. Regression tests were inspected but not run for that review. Short visits, creative confidence, repeat participation, and social connection remain design goals; improvements in retention, completion, learning, or growth have not been established.",
      },
    ],
    nextSteps: [
      "Verify account recovery and guest-drawing linking in production before presenting every account capability as released.",
      "Complete and verify group membership, then build group drawing views and dedicated admin oversight on that foundation.",
      "Check draft recovery and touch behavior on real devices, including bottom-edge access and returning from full-screen drawing.",
      "Observe new visitors using the guide and practice canvas, and record where tool behavior or publication choices cause confusion.",
      "Capture the entry states, submission confirmation, and share-card fallback as visible evidence for this case study.",
    ],
  },
  {
    slug: "bakerparks",
    visibility: "listed",
    stage: "featured",
    priority: 20,
    category: "Civic information",
    label: "Case study",
    emphasisLabel: "Active",
    title: "BakerParks",
    description: "An independent San Francisco parks guide that turns fragmented public data into searchable destinations, with source links, original photography, and paths to official services.",
    cardImage: stockImage("photo-1500530855697-b586d89ba3ee", "A green public park with open grass, trees, and water."),
    detailHref: "/projects/bakerparks",
    appHref: "https://bakerparks.vercel.app",
    repoHref: "https://github.com/michael-baker-content/sf-parks",
    tone: "blue",
    status: "Working prototype · active development",
    timeline: "2026",
    role: "Information architecture, accessibility-focused UX, local data modeling, photography",
    collaborators: [
      "Michael Baker"
    ],
    tools: [
      "Next.js",
      "MapLibre",
      "511 GTFS data",
      "SQLite",
      "Vercel Blob"
    ],
    evidence: [
      "Source-linked data",
      "Shareable filters",
      "Reviewed map corrections",
      "Original photography"
    ],
    metrics: [],
    summary: "BakerParks, called SF Parks Explorer in the application and repository, began after I read an article about frustration with the SF Parks website. It brings selected public records, park information, maps, and scheduled transit context into one discovery experience. The aim is to help residents and visitors understand their options while keeping policies, registration, permits, and reservations with the City of San Francisco.",
    problem: "Planning a park visit can mean piecing together property records, amenity listings, facility pages, maps, transit schedules, and separate reservation systems. Those sources serve different institutional purposes. The challenge is to translate them into useful choices without disguising uncertainty or creating a competing official service.",
    outcome: "The implementation reviewed on October 14, 2026 generates 249 destination records, with nine area and 41 populated neighborhood landing records. It supports search, shareable filters, optional maps, source links, and nearby scheduled transit context. A local-only editor manages notices, imagery, and coordinate corrections. These figures describe implemented scope, not measured resident impact; parity between the reviewed source and the public deployment remains to be checked.",
    decisions: [
      "Keep discovery separate from official transactions, linking visitors to City services for registration, permits, and reservations.",
      "Separate imported source records, normalized data, and public destination pages so presentation decisions retain their provenance.",
      "Offer conventional search, shareable filters, and complete text results alongside an optional map.",
      "Record coordinate corrections with supporting evidence and reuse the reviewed location across maps, directions, and transit calculations.",
      "Give temporary notices and photographs an editorial workflow separate from generated destination data."
    ],
    sections: [
      {
        "title": "A useful boundary around public services",
        "body": "The project adds a discovery layer rather than replacing the City’s services. A destination page can bring together amenities, images, location, source links, and next steps, but reservations, program registration, permits, and policy remain with the relevant official service. Search and browsing use deterministic data and static generation without requiring generative-AI calls for each visitor query."
      },
      {
        "title": "From administrative records to destinations",
        "body": "Properties, facilities, functional areas, and assets are distinct source concepts. The project keeps a source registry and imported records separate from normalization and the presentation model that generates destination pages. That separation preserves source links and provides a place for reviewed corrections without silently rewriting imported material. Source freshness still depends on imports and editorial review."
      },
      {
        "title": "Browsing by the visit someone has in mind",
        "body": "Explore translates records into conventional search, activity entry points, amenities, area, neighborhood, ZIP code, minimum acreage, and amenity-count filters. Filter state is encoded in the URL so a search can be shared. Text results remain available when the map is closed. This taxonomy is designed and implemented; whether its categories match residents’ expectations still needs task-based evaluation."
      },
      {
        "title": "Correcting plausible but wrong coordinates",
        "body": "A coordinate can be validly formatted yet put a park in water or on the wrong side of an island. The override workflow records a replacement coordinate, supporting map URL, reason, reviewer, and date. The reviewed location is reused for MapLibre markers, Google Maps directions and embeds, and transit proximity calculations. These are documented corrections for reviewed exceptions, not a claim that every destination has been independently audited."
      },
      {
        "title": "Maintaining notices and original photography",
        "body": "Evergreen place data and temporary conditions need different maintenance workflows. A local-only editor supports expiring notices, image visibility and order, attribution, and reviewed coordinate overrides. My own park photography adds firsthand context; open-license images retain creator, source, and license information, and generic illustrations are distinguished from destination photographs. The editor is intentionally separate from the public site, rather than a public multi-user CMS."
      },
      {
        "title": "Accessibility and transit: precise promises",
        "body": "The repository documents semantic structure, visible focus states, reduced-motion support, narrow-screen reflow checks, and automated accessibility coverage. Manual screen-reader, keyboard, zoom, and physical-device evaluation remain open. Nearby Muni, BART, and Caltrain context comes from scheduled 511 GTFS data processed at build time; it is not real-time arrival information. Resident task success, comparative usability, and adoption have not yet been established."
      }
    ],
    nextSteps: [
      "Check the live deployment against the reviewed source and record its revision before presenting every implemented feature as publicly available.",
      "Observe residents finding an activity, comparing destinations, planning transit, and following an official reservation link; use the findings to refine filters and terminology.",
      "Complete manual keyboard, screen-reader, zoom, and physical-device checks and document specific accessibility issues.",
      "Continue park visits and original photography, with dated reviews of source data, transit imports, imagery, and official links."
    ],
  },
  {

```
