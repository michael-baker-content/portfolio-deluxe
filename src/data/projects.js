const stockImage = (id, alt) => ({
  src: id.startsWith("http") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`,
  alt,
});

export const projects = [
  {
    slug: "portfolio",
    visibility: "listed",
    priority: 50,
    category: "Portfolio system",
    label: "Portfolio case study",
    title: "Portfolio Case Study",
    description:
      "A case study about evolving the forked 1.0 portfolio into a themed experiment, then folding that experiment back into a more useful 2.0 site.",
    cardImage: stockImage("photo-1497366754035-f200968a6e72", "A desk workspace with a laptop, notebook, and planning materials."),
    detailHref: "/projects/portfolio",
    repoHref: "https://github.com/michael-baker-content/portfolio-deluxe",
    tone: "gold",
    status: "Portfolio system",
    timeline: "2026",
    role: "Information architecture, creative direction, frontend engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["React", "Vite", "Tailwind", "Structured content"],
    evidence: ["1.0 lineage", "Theme exploration", "2.0 content model"],
    metrics: [
      { label: "Case studies", value: "10+" },
      { label: "Related apps", value: "3" },
      { label: "Content source", value: "Data-driven" },
    ],
    summary:
      "Portfolio Deluxe began as a React/Tailwind fork and became a working content product for presenting projects as evidence. The build tracks the shift from starter-site aesthetics to structured data, filters, admin editing, deployment, and a clearer candidate story.",
    problem:
      "The original template had a useful modern portfolio structure, but it still behaved like a template. The first personalized version proved that the site could carry a distinct visual voice, but it also made the main portfolio feel more like a theme experiment than a durable system for explaining work.",
    outcome:
      "The current site preserves the fork's familiar portfolio promise while adding a richer content model, a filterable case-study index, direct contact, a Taste page, a protected admin dashboard, and a deployment path that can support ongoing edits.",
    decisions: [
      "Keep the 1.0 structure visible: hero, navigation, work, skills, case studies, and contact.",
      "Move the 'occasionally strange' direction from the main site identity into documented design evidence.",
      "Use structured project data so cards, filters, project pages, and admin edits can share the same source.",
      "Treat the homepage as a candidate pitch and the case-study pages as deeper evidence.",
      "Add backend editing through Vercel Blob without removing the code defaults that make the site portable.",
    ],
    sections: [
      {
        title: "Starting Point",
        body:
          "The fork supplied a strong 1.0 baseline: a recognizable modern portfolio shape, Tailwind styling, responsive navigation, animated polish, project cards, and a contact path. That made it a useful starter, but the content still needed a stronger point of view and a more flexible structure.",
      },
      {
        title: "Theme Experiment",
        body:
          "The first redesign explored a brighter, more theatrical identity. It proved the site could carry a distinct voice, but it also clarified that the main site should not be only an aesthetic experiment. That work now functions as evidence of visual direction rather than the entire brand.",
      },
      {
        title: "Content System",
        body:
          "The 2.0 version is organized around structured content. Each project carries display controls, metadata, links, metrics, decisions, and narrative sections, so homepage cards, filters, project pages, and admin editing all share one model.",
      },
      {
        title: "Backend Editing",
        body:
          "The admin dashboard turns the portfolio into a small content-management workflow. Saved content can live in Vercel Blob, while the code still contains defaults and tests that keep the site safe when backend content is missing or incomplete.",
      },
    ],
    nextSteps: [
      "Add before-and-after screenshots from the fork and the themed version.",
      "Document the visual decisions behind the 'occasionally strange' pass.",
      "Add a short reusable guide for turning the 1.0 fork into other 2.0 portfolio directions.",
    ],
  },
  {
    slug: "music",
    visibility: "listed",
    priority: 10,
    category: "Local discovery",
    label: "Case study",
    title: "Mike's List",
    description:
      "A local event-discovery tool that turns show listings into richer artist context, review queues, and venue intelligence.",
    cardImage: stockImage("photo-1501386761578-eac5c94b800a", "A live music crowd facing a brightly lit stage."),
    detailHref: "/projects/music",
    appHref: "https://mikeslist.xyz",
    repoHref: "https://github.com/michael-baker-content/mikeslist",
    tone: "spotlight",
    status: "Local discovery tool",
    timeline: "2026",
    role: "Product design, data modeling, prototype engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Local data stores", "Wikidata", "Google Places"],
    evidence: ["Artist enrichment", "Venue review", "Source trails"],
    metrics: [
      { label: "Primary workflow", value: "Review queue" },
      { label: "Data types", value: "Artists, venues, events" },
      { label: "Source posture", value: "Traceable" },
    ],
    summary:
      "Mike's List turns local show listings into a reviewable discovery system. The project is less about making another event calendar and more about answering better questions: who is this artist, how local are they, where can someone support them directly, and how confident should we be in the data?",
    problem:
      "Local concert listings are useful but thin. They usually tell you what is happening, but not enough about whether the artist is local, what kind of act they are, which source should be trusted, or what still needs human review.",
    outcome:
      "The app now frames discovery as a source-aware review workflow: artist and venue records can be enriched, checked, credited, and improved without pretending every automated match is correct.",
    decisions: [
      "Treat imported listings as leads, not finished truth.",
      "Keep artist, venue, and event data separate so each record can carry its own review state.",
      "Favor direct artist-support links and source trails over platform-only discovery.",
      "Leave ambiguous matches unresolved until there is enough evidence to make a confident call.",
      "Give the project its own identity, URL, and repository so the product can stand apart from the portfolio.",
    ],
    sections: [
      {
        title: "Discovery Layer",
        body:
          "The core product idea is that a listing should be the beginning of discovery, not the end of it. A show entry can point to an event, but the app tries to add the context that makes a person more likely to care: artist identity, local relevance, support links, and source confidence.",
      },
      {
        title: "Review Queue",
        body:
          "The review queue is the product's practical center. It gives uncertain records a place to live while they are checked, rather than forcing bad certainty into the data model. That matters because music listings often contain aliases, partial names, shared venue details, and fragile source trails.",
      },
      {
        title: "Venue Intelligence",
        body:
          "Venue data adds another layer of usefulness. The project can distinguish between the event itself and the place hosting it, which opens the door to richer venue pages, source review, and eventually better recommendations by geography or scene.",
      },
      {
        title: "Editorial Use",
        body:
          "Mike's List shows how automated enrichment, editorial review, and local discovery can work together without hiding uncertainty from the user.",
      },
    ],
    nextSteps: [
      "Improve event identity and change tracking.",
      "Add stronger venue review flows.",
      "Turn repeated enrichment patterns into reusable review tools.",
    ],
  },
  {
    slug: "greeting",
    visibility: "hidden",
    priority: 80,
    category: "Creative tool",
    label: "Case study",
    title: "Greeting Card App",
    description:
      "A separate card-making project for shaping personal messages into playful, shareable compositions.",
    detailHref: "/projects/greeting",
    appHref: "../Greeting/index.html",
    repoHref: "https://github.com/michael-baker-content/michaels-cards",
    tone: "coral",
    status: "Creative tool",
    timeline: "2026",
    role: "Creative direction, interaction design, prototype engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["Frontend prototype", "Prompted composition", "Visual themes"],
    evidence: ["Message shaping", "Visual play", "Shareable output"],
    metrics: [
      { label: "Core format", value: "Cards" },
      { label: "Design focus", value: "Tone" },
      { label: "Output goal", value: "Shareable" },
    ],
    summary:
      "The Greeting app is a place to explore cards as small, emotional interfaces: compact, expressive, and designed around the moment someone wants to send.",
    problem:
      "Most generated messages either feel generic or overproduced. The interesting challenge is helping a person get to something specific without sanding off their voice.",
    outcome:
      "The app gives the portfolio a companion project for experimenting with tone, composition, and lightweight creative tools.",
    decisions: [
      "Keep the interaction closer to making than filling out a form.",
      "Use playful visual constraints instead of endless options.",
      "Let the card format carry personality while the tool stays direct.",
    ],
    sections: [
      {
        title: "Interaction Premise",
        body:
          "Greeting starts from the idea that a message tool should feel like making something, not completing a questionnaire. The interaction should help a person find a tone without flattening the personal detail that made them start.",
      },
      {
        title: "Creative Constraint",
        body:
          "The card format gives the project a useful constraint: compact composition, readable emotion, and a clear output. That boundary keeps the tool focused while still leaving room for visual play.",
      },
      {
        title: "Portfolio Value",
        body:
          "As a case study, Greeting shows how creative direction and interface design can work together in a small product experience where tone, format, and action all matter.",
      },
    ],
    nextSteps: [
      "Add card collections by occasion.",
      "Create export/share flows.",
      "Develop a clearer visual system for themes and formats.",
    ],
  },
  {
    slug: "nba-roto-tracker",
    visibility: "listed",
    priority: 90,
    category: "Dashboard",
    label: "Case study",
    title: "Fantasy Basketball Dashboard",
    description:
      "A dashboard for turning a custom fantasy sports competition into clear standings, roster views, and live performance signals.",
    cardImage: stockImage("photo-1546519638-68e109498ffc", "Basketball players competing near the hoop on an indoor court."),
    detailHref: "/projects/nba-roto-tracker",
    repoHref: "https://github.com/michael-baker-content/nba-roto-tracker",
    tone: "blue",
    status: "Public app",
    timeline: "2026",
    role: "Dashboard design, backend modeling, frontend implementation",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["Python", "Flask", "SQLite", "PostgreSQL", "Railway", "nba-api"],
    evidence: ["Leaderboard design", "Roster pages", "Scoring model"],
    metrics: [
      { label: "Stack", value: "Flask" },
      { label: "Data layer", value: "SQLite/Postgres" },
      { label: "Pattern", value: "Live dashboard" },
    ],
    summary:
      "Fantasy Basketball Dashboard turns a custom fantasy sports format into a self-hosted web app with standings, roster pages, and live leaderboard signals. It translates rules, stats, participants, and season state into something a league can inspect without relying on spreadsheets or chat updates.",
    problem:
      "Custom fantasy competitions often live in spreadsheets or chat threads. That makes standings hard to inspect, difficult to share, and easy to misread when rosters, scoring categories, or rules change.",
    outcome:
      "The app creates a dedicated home for participant state, scoring logic, roster detail, and leaderboard review while keeping the deployment path practical through Flask, a database layer, and Railway.",
    decisions: [
      "Use a small Flask app instead of a heavier framework so the scoring model stays easy to reason about.",
      "Keep local SQLite simple while allowing PostgreSQL in production.",
      "Make detail and leaderboard views separate so users can inspect both summary and supporting evidence.",
      "Treat the app as an operational dashboard, not just a technical demo.",
      "Model the competition rules explicitly so the leaderboard can be trusted and explained.",
    ],
    sections: [
      {
        title: "Dashboard Utility",
        body:
          "The project is valuable because it formalizes a custom competition workflow. Instead of asking users to trust a manually updated sheet, the app gives the group a shared place to inspect standings, roster state, and the evidence behind movement on the leaderboard.",
      },
      {
        title: "Data Shape",
        body:
          "The data model has to translate league concepts into durable records: teams, players, rosters, scoring categories, standings, and update timing. That relationship between rules and data is the heart of the product.",
      },
      {
        title: "Deployment Path",
        body:
          "Railway gives the project a realistic production target while preserving a simple local development loop. SQLite keeps early iteration low-friction, while PostgreSQL gives production a more durable home.",
      },
      {
        title: "Operational Clarity",
        body:
          "The win is not just that the app calculates standings. It makes a custom competition legible by putting backend modeling in service of a user-facing state problem.",
      },
    ],
    nextSteps: [
      "Add screenshots of the leaderboard and detail pages.",
      "Document the scoring rules and update flow.",
      "Add a short note about moving from SQLite locally to PostgreSQL on Railway.",
    ],
  },
  {
    slug: "cine2helper",
    visibility: "listed",
    priority: 100,
    category: "Media database",
    label: "Case study",
    title: "Movie Database Project",
    description:
      "A focused movie lookup experience that turns a large entertainment database into fast, useful decision support.",
    cardImage: stockImage("photo-1489599849927-2ee91cede3ba", "Rows of red seats inside a movie theater."),
    detailHref: "/projects/cine2helper",
    repoHref: "https://github.com/michael-baker-content/cine2helper",
    tone: "coral",
    status: "Public tool",
    timeline: "2026",
    role: "Interaction design, React/Next.js implementation, API integration",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["TypeScript", "React", "Next.js", "TMDB API", "Vercel"],
    evidence: ["Movie lookup", "TMDB integration", "Decision support"],
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Data source", value: "TMDB" },
      { label: "Pattern", value: "Focused search" },
    ],
    summary:
      "Movie Database Project is a focused lookup tool built around a specific entertainment workflow. It uses TMDB data and a modern React/Next.js stack, but the product idea is narrower than a general movie database: help someone make faster, better decisions from just the metadata that matters in the moment.",
    problem:
      "Search tools are often too broad for high-context decisions. A user may need targeted recall support, quick scanning, and clear metadata rather than another sprawling entertainment encyclopedia.",
    outcome:
      "The app frames external movie data around the decisions a user needs to make in the moment, turning lookup into lightweight decision support.",
    decisions: [
      "Use TMDB for broad movie metadata instead of building a custom data source.",
      "Prioritize fast scanning over encyclopedic detail.",
      "Deploy through Vercel to keep sharing and iteration simple.",
      "Keep the project scoped to a specific workflow so the interface can stay direct.",
      "Use TypeScript so API responses and UI expectations stay easier to reason about.",
    ],
    sections: [
      {
        title: "Focused Context",
        body:
          "The app works because it starts from the constraints of a specific task. The best interface is not the one with the most film data; it is the one that helps a user act quickly and confidently.",
      },
      {
        title: "Lookup Design",
        body:
          "Search results, metadata, and interaction timing are shaped around decision support instead of passive browsing. The goal is to reduce the distance between remembering a movie and knowing whether it is useful for the current choice.",
      },
      {
        title: "Technical Fit",
        body:
          "Next.js, TypeScript, TMDB, and Vercel make sense for a small public helper where typed API integration and deployability matter more than backend complexity.",
      },
      {
        title: "Focused Scope",
        body:
          "Movie Database Project shows restraint. It filters a large external database through a narrow product need instead of copying it wholesale into a generic interface.",
      },
    ],
    nextSteps: [
      "Add screenshots or flow diagrams of the lookup workflow.",
      "Clarify the exact decisions the app supports.",
      "Document TMDB API constraints and error handling.",
    ],
  },
  {
    slug: "bakeruniversity",
    visibility: "listed",
    priority: 30,
    category: "Learning platform",
    label: "Case study",
    title: "Baker University",
    description:
      "A Next.js learning platform exploring courses, rich lessons, math rendering, and editable learning content.",
    cardImage: stockImage("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200", "People walking near a university building and graduation lawn."),
    detailHref: "/projects/bakeruniversity",
    repoHref: "https://github.com/michael-baker-content/bakeruniversity",
    tone: "gold",
    status: "Public platform",
    timeline: "2026",
    role: "Learning product design, frontend architecture, content editor exploration",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["TypeScript", "React", "Next.js", "Tailwind", "KaTeX", "Tiptap"],
    evidence: ["LMS structure", "Rich text editing", "Math rendering"],
    metrics: [
      { label: "Product type", value: "LMS" },
      { label: "Editor", value: "Tiptap" },
      { label: "Math", value: "KaTeX" },
    ],
    summary:
      "Baker University is a learning-platform prototype for turning structured lessons, rich explanation, and technical notation into a coherent course experience. It combines my online education background with a modern web stack that can support authoring, presentation, and future learner workflows.",
    problem:
      "Learning products need a difficult balance: enough structure to guide someone through material, enough flexibility to support rich teaching, and enough editorial control that the course does not collapse into a pile of disconnected pages.",
    outcome:
      "The platform creates a test bed for course navigation, lesson authoring, math rendering, and reusable learning content. It is a place to ask what a small, personally owned LMS could become if the authoring experience is treated as part of the product.",
    decisions: [
      "Use Next.js and TypeScript for a durable foundation that can grow beyond a static course shell.",
      "Explore Tiptap because lesson authoring needs richer structure than plain text alone can comfortably provide.",
      "Include KaTeX so the platform can support technical lessons, formulas, and math-heavy explanations.",
      "Treat course structure, editing, and learner navigation as connected product problems.",
      "Draw on online art education experience: examples, sequencing, critique, and context should shape the interface.",
    ],
    sections: [
      {
        title: "Learning Shape",
        body:
          "The product challenge is not just displaying lessons. It is giving learning a shape: courses, units, lessons, examples, and supporting material need to feel ordered without making the experience rigid.",
      },
      {
        title: "Authoring Experience",
        body:
          "The authoring experience is part of the product. Tiptap makes it possible to imagine lessons with structured blocks, embedded examples, and richer formatting, but the editor still has to protect clarity and keep the act of creating lessons manageable.",
      },
      {
        title: "Technical Teaching",
        body:
          "KaTeX support matters because it expands the kind of learning content the platform can handle. The goal is not only prose lessons, but technical explanation that can include notation, examples, and careful step-by-step reasoning.",
      },
      {
        title: "Learning System",
        body:
          "This connects my teaching background to web development. It treats learning systems as content products: structured, authored, navigable, and designed for people trying to understand something difficult.",
      },
    ],
    nextSteps: [
      "Add screenshots of lesson and editing states.",
      "Define the first real course example.",
      "Clarify whether the next milestone is learner progress, authoring workflow, or publishing.",
    ],
  },
  {
    slug: "bakerlinks",
    visibility: "listed",
    priority: 20,
    category: "Publishing platform",
    label: "Case study",
    title: "BakerLinks",
    description:
      "A free link-in-bio platform built with Next.js, Vercel, and Supabase.",
    cardImage: stockImage("photo-1516321497487-e288fb19713f", "A laptop workspace used for publishing and managing online links."),
    detailHref: "/projects/bakerlinks",
    repoHref: "https://github.com/michael-baker-content/bakerlinks",
    tone: "spotlight",
    status: "Public platform",
    timeline: "2026",
    role: "Product design, full-stack prototyping, social publishing workflow",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["TypeScript", "React", "Next.js", "Tailwind", "Vercel", "Supabase"],
    evidence: ["Profile pages", "Link management", "Free publishing model"],
    metrics: [
      { label: "Product type", value: "Link-in-bio" },
      { label: "Backend", value: "Supabase" },
      { label: "Deploy", value: "Vercel" },
    ],
    summary:
      "BakerLinks is a free link-in-bio platform experiment built around a simple product promise: make it easy for someone to publish a clean, useful profile page without paying for the privilege of sharing links.",
    problem:
      "Many link-in-bio tools are either overbuilt, paywalled, or too generic. The challenge is to make a small publishing workflow that feels trustworthy, flexible, and easy to understand without turning into a full website builder.",
    outcome:
      "The project tests profile publishing, link management, hosted data, and public pages through a practical Next.js, Supabase, and Vercel stack while keeping the core experience focused on fast publishing.",
    decisions: [
      "Use Supabase for hosted data and authentication patterns instead of building the backend from scratch.",
      "Keep public profile pages in Next.js so they are fast, shareable, and easy to deploy.",
      "Focus the first version on publishing clarity before advanced personalization.",
      "Treat the free model as a design constraint: the product should not depend on hiding basic usefulness behind a paywall.",
      "Keep the interface closer to a publishing tool than a social network.",
    ],
    sections: [
      {
        title: "Publishing Flow",
        body:
          "The product rises or falls on the path from setup to a useful public page. The interesting workflow is not just adding links; it is helping someone decide what belongs on the page, what order it should appear in, and how the result reads to a visitor.",
      },
      {
        title: "Platform Choices",
        body:
          "Supabase and Vercel reduce operational weight, which matters for a small platform experiment. The stack keeps attention on product decisions: profile data, publishing states, editable links, and public presentation.",
      },
      {
        title: "Product Position",
        body:
          "The product position is intentionally plainspoken: a free link page should feel useful before it feels monetized. That gives the project a clearer audience than a generic landing-page builder.",
      },
      {
        title: "Small Platform",
        body:
          "BakerLinks puts full-stack product thinking into a small package: user promise, database-backed editing, public pages, deployment, and the tradeoff between simplicity and customization.",
      },
    ],
    nextSteps: [
      "Add examples of public profile pages.",
      "Document the data model for links and profiles.",
      "Clarify the product position against common link-in-bio tools.",
    ],
  },
  {
    slug: "saske",
    visibility: "listed",
    priority: 110,
    category: "Interactive tracker",
    label: "Case study",
    title: "RPG Character Tracker",
    description:
      "A dynamic character-tracking interface for dense role-playing systems, built around calculated values and play-facing clarity.",
    cardImage: stockImage("photo-1605870445919-838d190e8e1b", "Role-playing dice arranged on a tabletop."),
    detailHref: "/projects/saske",
    repoHref: "https://github.com/michael-baker-content/saske",
    tone: "blue",
    status: "Public tool",
    timeline: "2026",
    role: "Interactive tool design, rules modeling, JavaScript implementation",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Pathfinder 2E", "RPG systems"],
    evidence: ["Dynamic tracker", "Rules support", "Player workflow"],
    metrics: [
      { label: "Domain", value: "RPG tools" },
      { label: "System", value: "Rules-heavy" },
      { label: "Core object", value: "Tracker" },
    ],
    summary:
      "RPG Character Tracker is a character-management project for dense tabletop rules systems. It began from Pathfinder 2E, where character state contains many calculated, conditional, and frequently referenced values, and it explores how a dynamic interface can make that information easier to use during play.",
    problem:
      "Rules-heavy role-playing characters contain a lot of interdependent information. Static sheets can make it hard to see what changed, what is derived, what is conditional, and what the player actually needs during a session.",
    outcome:
      "The project creates a custom interface for character information that can respond to the rules system and the needs of the table, with dynamic behavior where static reference becomes friction.",
    decisions: [
      "Start with a specific rules system instead of designing a generic tracker.",
      "Prioritize dynamic behavior where rules density creates friction.",
      "Use JavaScript to keep the project lightweight and adaptable.",
      "Treat table usability as the product goal, not just rules completeness.",
      "Keep the interface organized around player action rather than sourcebook structure.",
    ],
    sections: [
      {
        title: "Rules Density",
        body:
          "The design problem comes from rules density. Pathfinder-style characters include derived values, modifiers, proficiency changes, resources, and context-specific decisions. The app is strongest where dynamic handling removes repeated lookup or manual recalculation.",
      },
      {
        title: "Player Workflow",
        body:
          "A good character sheet supports action at the table. That means the interface should help a player find what they need quickly, understand what changed, and avoid breaking the rhythm of play.",
      },
      {
        title: "System Scope",
        body:
          "Because role-playing systems vary widely, choosing one rules-heavy system gives the app a strong constraint. It makes the project easier to evaluate because the tool can be judged against real play needs instead of abstract flexibility.",
      },
      {
        title: "Usable State",
        body:
          "RPG Character Tracker shows how interface design can clarify a dense knowledge system. The same pattern applies beyond games: make complex state visible, actionable, and easier to trust.",
      },
    ],
    nextSteps: [
      "Add screenshots of the sheet in play-facing states.",
      "Document the most important calculated fields.",
      "Clarify what is manual, automated, and intentionally out of scope.",
    ],
  },
  {
    slug: "notion-clean",
    visibility: "listed",
    priority: 120,
    category: "Workflow utility",
    label: "Case study",
    title: "Notion Archive Cleaner",
    description:
      "A utility for stripping Notion's auto-appended UUIDs from exported zip archives.",
    cardImage: stockImage("photo-1450101499163-c8848c66ca85", "Paper files and folders arranged for archival organization."),
    detailHref: "/projects/notion-clean",
    repoHref: "https://github.com/michael-baker-content/notion-clean",
    tone: "coral",
    status: "Public utility",
    timeline: "2026",
    role: "Workflow automation, scripting, file-cleanup utility design",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Python", "HTML", "Notion exports", "Scripts"],
    evidence: ["Zip cleanup", "Filename normalization", "Export workflow"],
    metrics: [
      { label: "Input", value: "Notion zip" },
      { label: "Output", value: "Clean names" },
      { label: "Mode", value: "Utility" },
    ],
    summary:
      "Notion Archive Cleaner is a small workflow utility built around one sharp annoyance: exported Notion files often include auto-appended UUIDs that make archives harder to read, publish, and maintain. The project turns a repetitive cleanup chore into a safer, repeatable process.",
    problem:
      "Notion exports are useful, but their generated filenames can be noisy. Manual cleanup is tedious and error-prone, especially when an archive contains many pages, nested folders, links, and assets.",
    outcome:
      "The utility gives the cleanup job a repeatable path, turning a messy export archive into a more human-readable file structure while keeping the scope narrow enough to remain understandable.",
    decisions: [
      "Keep the tool focused on a narrow recurring workflow.",
      "Support scripting patterns that can be repeated across exports.",
      "Treat filename clarity as the main product value.",
      "Avoid turning a small utility into an oversized content-management project.",
      "Preserve the user's archive structure while removing the parts that make it harder to read.",
    ],
    sections: [
      {
        title: "Workflow Fit",
        body:
          "The strongest product story is the before-and-after workflow: exported files with UUID noise versus a cleaned archive that is easier to inspect, move, publish, and keep.",
      },
      {
        title: "Utility Scope",
        body:
          "This project is valuable because it stays small. It solves a specific file hygiene problem rather than trying to replace Notion or redesign export semantics.",
      },
      {
        title: "Automation Value",
        body:
          "A lightweight cleanup tool can save repeated manual effort and reduce mistakes in a publishing or archiving process. The product value is not flash; it is relief from a recurring friction point.",
      },
      {
        title: "Careful Utility",
        body:
          "Notion Archive Cleaner shows that small utilities still require product judgment. File operations need clarity, caution, and respect for the user's material.",
      },
    ],
    nextSteps: [
      "Add a before-and-after filename example.",
      "Document supported export shapes and edge cases.",
      "Clarify when to use the JavaScript path, Python path, or browser UI.",
    ],
  },
  {
    slug: "github-repo-journal",
    visibility: "listed",
    priority: 40,
    category: "Technical writing",
    label: "Case study",
    title: "GitHub Repo Journal",
    description:
      "An Astro blog for writing about recent GitHub repos, creative coding experiments, and technical explorations.",
    cardImage: stockImage("photo-1499750310107-5fef28a66643", "A laptop and notebook set up for writing technical notes."),
    detailHref: "/projects/github-repo-journal",
    appHref: "https://michael-baker-content.github.io/",
    repoHref: "https://github.com/michael-baker-content/michael-baker-content.github.io",
    tone: "gold",
    status: "Public blog",
    timeline: "2026",
    role: "Writing system, static-site design, technical documentation",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["Astro", "React", "KaTeX", "p5.js", "GitHub Pages"],
    evidence: ["Repo writeups", "Static publishing", "Technical experiments"],
    metrics: [
      { label: "Framework", value: "Astro" },
      { label: "Host", value: "GitHub Pages" },
      { label: "Content", value: "Repo notes" },
    ],
    summary:
      "GitHub Repo Journal is a static blog for turning repository activity into a readable body of work. It gives recent projects a narrative layer: what sparked the build, how it works, what decisions mattered, and where the experiment could go next.",
    problem:
      "A GitHub profile can show activity, but it rarely explains intent. Without writing, prototypes can look disconnected even when they are part of a larger learning arc, product idea, or technical exploration.",
    outcome:
      "The Astro site connects repositories to essays, notes, technical examples, and creative experiments. It turns code history into something a reader can follow.",
    decisions: [
      "Use Astro because the site is content-first but still needs room for interactive components.",
      "Support KaTeX and p5.js so technical explanation and creative coding can live in the same publishing system.",
      "Treat repo writeups as a bridge between code history, portfolio narrative, and public learning.",
      "Keep the site deployable through GitHub Pages so publishing stays lightweight.",
      "Use posts to explain the reasoning that a repository alone cannot show.",
    ],
    sections: [
      {
        title: "Narrative Layer",
        body:
          "The blog turns repository activity into a readable body of work. It gives the reader context for why a project exists, what changed during the build, and what kind of judgment the project demonstrates.",
      },
      {
        title: "Content Flexibility",
        body:
          "Astro, React, KaTeX, and p5.js support a broad range of post types: technical notes, project retrospectives, math-heavy explanations, and interactive sketches. That flexibility matters because the projects are not all the same kind of work.",
      },
      {
        title: "Portfolio Connection",
        body:
          "The blog can carry the deeper reflection that would overcrowd a portfolio card. Case studies can stay focused, while blog posts explain process, challenges, and what I learned from building.",
      },
      {
        title: "Readable Work",
        body:
          "GitHub Repo Journal shows that the work is not only being built; it is being interpreted. That combination of making and explaining is central to the larger portfolio.",
      },
    ],
    nextSteps: [
      "Add links between portfolio case studies and blog posts.",
      "Define a standard post format for repo retrospectives.",
      "Add screenshots or embeds for creative coding examples.",
    ],
  },
  {
    slug: "template",
    visibility: "hidden",
    priority: 999,
    category: "Template",
    label: "Template",
    title: "Template Case Study",
    description:
      "A reusable placeholder case study that shows the section pattern before final project content exists.",
    detailHref: "/projects/template",
    tone: "blue",
    status: "Draft template",
    timeline: "TBD",
    role: "Project role, collaborators, and contribution summary",
    collaborators: ["Lorem ipsum"],
    tools: ["Tool one", "Tool two", "Tool three"],
    evidence: ["Placeholder metric", "Process note", "Launch artifact"],
    metrics: [
      { label: "Metric", value: "Lorem" },
      { label: "Signal", value: "Ipsum" },
      { label: "Outcome", value: "Dolor" },
    ],
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    problem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.",
    outcome:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.",
    decisions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Maecenas faucibus mollis interdum.",
      "Nullam id dolor id nibh ultricies vehicula ut id elit.",
      "Aenean lacinia bibendum nulla sed consectetur.",
    ],
    sections: [
      {
        title: "Context",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.",
      },
      {
        title: "Approach",
        body:
          "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      },
      {
        title: "Result",
        body:
          "Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
      },
    ],
    nextSteps: [
      "Replace placeholder copy with project-specific context.",
      "Add real screenshots, metrics, and source links.",
      "Turn decisions into evidence-backed design rationale.",
    ],
  },
];

export const listedProjects = projects
  .filter((project) => project.visibility !== "hidden")
  .sort((first, second) => first.priority - second.priority);

export const caseStudyCategories = [...new Set(listedProjects.map((project) => project.category))];

export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
