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
      "This project began as a fork of a polished React/Tailwind portfolio template. The first major redesign pushed it into the bright, editorial 'occasionally strange' direction; this case study captures that move as a deliberate theme experiment inside the broader Portfolio 2.0 build.",
    problem:
      "The original template had a useful modern portfolio structure, but the first personalized version leaned so far into the 'occasionally strange' theme that the main site started to feel less like the source portfolio and more like a separate creative project.",
    outcome:
      "The main site now returns to the 1.0 fork's high-level portfolio promise while preserving the themed redesign as a documented case study about voice, visual direction, and product positioning.",
    decisions: [
      "Keep the 1.0 structure visible: hero, navigation, work, skills, case studies, and contact.",
      "Move the 'occasionally strange' concept from site identity into the Portfolio Case Study.",
      "Use structured project data so the theme, case-study copy, and navigation can change without rewriting page markup.",
      "Treat the redesign as evidence of creative direction rather than the permanent brand of the portfolio.",
    ],
    sections: [
      {
        title: "Starting Point",
        body:
          "The fork supplied a strong 1.0 baseline: a recognizable modern portfolio shape, Tailwind styling, responsive navigation, animated polish, project cards, and a contact path. That made it a useful starter, but the content still behaved like a template.",
      },
      {
        title: "Theme Experiment",
        body:
          "The first redesign explored a brighter, more theatrical 'occasionally strange' identity. It proved the site could carry a distinct voice, but it also made the main portfolio feel farther away from the forked project than intended.",
      },
      {
        title: "2.0 Direction",
        body:
          "The current direction keeps the 1.0 portfolio promise visible while moving the themed redesign into this case study. The result is a clearer public site with room to document experiments as evidence of creative direction.",
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
    title: "Bay Area Show Explorer",
    description:
      "A local music discovery tool that turns listings into richer artist context, review queues, and venue intelligence.",
    cardImage: stockImage("photo-1501386761578-eac5c94b800a", "A live music crowd facing a brightly lit stage."),
    detailHref: "/projects/music",
    appHref: "../Music/index.html",
    repoHref: "https://github.com/michael-baker-content/bay-area-music-calendar",
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
      "The Music app started as a show-listing prototype and grew into a small information system for understanding who is playing, where they are playing, and what still needs human review.",
    problem:
      "Local concert listings are useful but thin. They rarely explain whether an artist is local, where to support them directly, or how confident the data is.",
    outcome:
      "The app adds artist and venue stores, review states, source links, and enrichment workflows while keeping the original listings credited and traceable.",
    decisions: [
      "Treat imported data as provisional until reviewed.",
      "Favor direct artist-support links over platform-only discovery.",
      "Keep ambiguous matches unresolved instead of pretending every search result is correct.",
      "Separate the Music app from Portfolio so future work starts in the right project root.",
    ],
    sections: [
      {
        title: "Discovery Problem",
        body:
          "The app is built around the gap between a listing and a useful recommendation. A show entry can tell someone what is happening, but it rarely explains why the artist matters, how local the act is, or which source should be trusted.",
      },
      {
        title: "Review Workflow",
        body:
          "The project treats enrichment as a reviewable workflow instead of a single import step. Artist and venue data can be gathered, compared, marked for review, and kept traceable back to sources.",
      },
      {
        title: "Portfolio Value",
        body:
          "As a case study, Music shows product judgment around data quality, editorial usefulness, and the practical split between automated enrichment and human review.",
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
      "Fantasy Basketball Dashboard turns a custom competition format into a self-hosted web app with standings, participant pages, and a leaderboard that can be checked throughout the season.",
    problem:
      "Custom competitions often live in spreadsheets or chat threads. That makes standings hard to inspect, harder to share, and easy to misread when rosters, scoring categories, or rules change.",
    outcome:
      "The app creates a dedicated home for participant state, scoring logic, and live leaderboard review while keeping the deployment path practical through Railway.",
    decisions: [
      "Use a small Flask app instead of a heavier framework so the scoring model stays easy to reason about.",
      "Keep local SQLite simple while allowing PostgreSQL in production.",
      "Make detail and leaderboard views separate so users can inspect both summary and supporting evidence.",
      "Treat the app as an operational dashboard, not just a technical demo.",
    ],
    sections: [
      {
        title: "Dashboard Utility",
        body:
          "The project is valuable because it formalizes a custom competition workflow. Instead of asking users to trust a manually updated sheet, the app gives the group a single place to inspect participant state and standings.",
      },
      {
        title: "Data Shape",
        body:
          "The case study should explain how participants, scoring categories, and leaderboard calculations map into the database and the UI. That relationship is the heart of the product.",
      },
      {
        title: "Deployment Path",
        body:
          "Railway gives the project a realistic production target while preserving a simple local development loop. That makes the app easier to maintain between league updates.",
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
      "Movie Database Project supports a focused entertainment workflow: making fast, informed choices from movie metadata without forcing users into a sprawling database experience.",
    problem:
      "Search tools are often too broad for high-context decisions. The user needs targeted recall support, not a general movie database experience.",
    outcome:
      "The app frames external movie data around the decisions a user needs to make in the moment, turning lookup into lightweight decision support.",
    decisions: [
      "Use TMDB for broad movie metadata instead of building a custom data source.",
      "Prioritize fast scanning over encyclopedic detail.",
      "Deploy through Vercel to keep sharing and iteration simple.",
      "Keep the project scoped to a specific workflow so the interface can stay direct.",
    ],
    sections: [
      {
        title: "Focused Context",
        body:
          "The app works because it starts from the constraints of a specific task. The best interface is not the one with the most film data; it is the one that helps a user act quickly.",
      },
      {
        title: "Lookup Design",
        body:
          "The case study can show how search results, metadata, and interaction timing are shaped around decision support instead of passive browsing.",
      },
      {
        title: "Technical Fit",
        body:
          "Next.js, TypeScript, TMDB, and Vercel make sense for a small public helper where typed API integration and deployability matter more than backend complexity.",
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
      "Baker University is a learning-platform experiment built to explore how lessons, course structure, rich text, and mathematical notation can live together in a modern web app.",
    problem:
      "Learning products need both structure and expressiveness. A course app has to organize material clearly while still supporting rich explanations, formulas, and editing workflows.",
    outcome:
      "The platform creates a space to test course navigation, lesson authoring, and learning-content presentation with a stack that can support future expansion.",
    decisions: [
      "Use Next.js and TypeScript for a durable app foundation.",
      "Explore Tiptap for rich lesson editing instead of plain markdown only.",
      "Include KaTeX so technical learning content can support mathematical notation.",
      "Treat the project as both product prototype and learning-system research.",
    ],
    sections: [
      {
        title: "Learning Model",
        body:
          "The case study should explain how the app models courses, lessons, and learner progress or orientation. The product value lives in making learning paths feel navigable.",
      },
      {
        title: "Authoring Experience",
        body:
          "Rich lesson editing is a central design problem. Tiptap introduces flexibility, but the interface still has to protect clarity and keep content creation manageable.",
      },
      {
        title: "Content Range",
        body:
          "KaTeX support signals that the platform can handle more than simple prose lessons. That makes the project a stronger learning-platform prototype.",
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
      "BakerLinks explores a free link-in-bio product: simple profile publishing, editable links, and a practical stack for getting social landing pages online quickly.",
    problem:
      "Many link-in-bio tools are either overbuilt, paywalled, or too generic. The challenge is making a lightweight publishing workflow that still feels trustworthy and customizable.",
    outcome:
      "The project tests a modern hosted stack for profile pages and link management while keeping the product promise simple: publish useful links without friction.",
    decisions: [
      "Use Supabase for a hosted backend instead of building auth and storage from scratch.",
      "Keep the frontend in Next.js so profile pages can be fast and shareable.",
      "Focus the first version on publishing clarity before advanced customization.",
      "Treat the free model as a product constraint, not just a pricing note.",
    ],
    sections: [
      {
        title: "Publishing Flow",
        body:
          "The product rises or falls on how quickly someone can create a useful public profile. The case study should show the path from signup or setup to a shareable page.",
      },
      {
        title: "Platform Choices",
        body:
          "Supabase and Vercel reduce operational weight, which matters for a small platform experiment. The stack keeps attention on product design instead of infrastructure.",
      },
      {
        title: "Differentiation",
        body:
          "The case study can sharpen what makes BakerLinks different: free access, control, simplicity, or a more creator-friendly workflow.",
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
      "RPG Character Tracker is a character-management project focused on making a dense rules system easier to use through dynamic calculations and clearer player-facing structure.",
    problem:
      "Rules-heavy role-playing characters contain a lot of interdependent information. Static sheets can make it hard to see what changed, what is derived, and what a player needs during play.",
    outcome:
      "The project creates a custom interface for character information that can respond to the needs of the rules system and the table.",
    decisions: [
      "Start with a specific rules system instead of designing a generic tracker.",
      "Prioritize dynamic behavior where rules density creates friction.",
      "Use JavaScript to keep the project lightweight and adaptable.",
      "Treat table usability as the product goal, not just rules completeness.",
    ],
    sections: [
      {
        title: "Rules Density",
        body:
          "The case study should explain which rules or character values benefit most from dynamic handling. That will make the design problem concrete.",
      },
      {
        title: "Player Workflow",
        body:
          "A good character sheet supports action at the table. The project should highlight what a player needs to find quickly during play.",
      },
      {
        title: "System Scope",
        body:
          "Because role-playing systems vary widely, choosing one rules-heavy system gives the app a strong constraint and makes the solution easier to evaluate.",
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
      "Notion Archive Cleaner is a small workflow utility built around one sharp annoyance: exported Notion files often include auto-appended UUIDs that make archives harder to read, publish, and maintain.",
    problem:
      "Notion exports are useful, but their generated filenames can be noisy. Manual cleanup is tedious and error-prone, especially when an archive contains many pages and assets.",
    outcome:
      "The utility gives the cleanup job a repeatable path, turning a messy export archive into a more human-readable file structure.",
    decisions: [
      "Keep the tool focused on a narrow recurring workflow.",
      "Support scripting patterns that can be repeated across exports.",
      "Treat filename clarity as the main product value.",
      "Avoid turning a small utility into an oversized content-management project.",
    ],
    sections: [
      {
        title: "Workflow Fit",
        body:
          "The best case study angle is the before-and-after workflow: exported files with UUID noise versus a cleaned archive that is easier to inspect and move.",
      },
      {
        title: "Utility Scope",
        body:
          "This project is valuable because it stays small. It solves a specific file hygiene problem rather than trying to replace Notion or redesign export semantics.",
      },
      {
        title: "Automation Value",
        body:
          "The case study can show how a lightweight script saves repeated manual effort and reduces mistakes in a publishing or archiving process.",
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
      "GitHub Repo Journal is a static blog for making the work around recent repositories more legible: what each project explores, what choices were made, and what might come next.",
    problem:
      "A GitHub profile can show activity, but it rarely explains intent. Without writing, prototypes can look disconnected even when they are part of a larger learning or product arc.",
    outcome:
      "The Astro site gives project exploration a narrative layer, connecting repositories to essays, notes, examples, and experiments.",
    decisions: [
      "Use Astro for a content-first site that can still include interactive components.",
      "Support KaTeX and p5.js so technical and creative explorations can live in the same publishing system.",
      "Treat repo writeups as a bridge between code history and portfolio narrative.",
      "Keep the site deployable through GitHub Pages.",
    ],
    sections: [
      {
        title: "Narrative Layer",
        body:
          "The blog turns repository activity into a readable body of work. That makes the case study useful as a companion to the portfolio itself.",
      },
      {
        title: "Content Flexibility",
        body:
          "Astro, React, KaTeX, and p5.js support a broad range of post types, from technical notes to interactive sketches.",
      },
      {
        title: "Portfolio Connection",
        body:
          "The project can become a source of deeper context for case studies, giving each repo a place for reflection that does not overcrowd the main portfolio.",
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
