const stockImage = (id, alt) => ({
  src: id.startsWith("http") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`,
  alt,
});

export const projects = [
  {
    slug: "portfolio",
    visibility: "listed",
    stage: "background",
    priority: 70,
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
      "Preserve the 1.0 portfolio pattern so visitors can still recognize the source lineage: hero, navigation, work, capabilities, projects, and contact.",
      "Move the more theatrical visual experiment into the case-study story so the main site can feel expressive without becoming only a theme demo.",
      "Make project content data-driven so homepage cards, filters, detail pages, and admin edits all rely on the same model.",
      "Separate the homepage pitch from the case-study evidence: the homepage introduces the candidate, while detail pages explain the work.",
      "Use Vercel Blob for editable live content while keeping code defaults as a durable fallback for local development and recovery.",
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
      "Add a visual timeline showing the original fork, the themed experiment, and the current 2.0 portfolio system.",
      "Publish a short implementation note on how the admin dashboard, default content, and live Blob content work together.",
      "Turn the fork-to-2.0 process into a reusable adaptation guide for people starting from the same source repo.",
    ],
  },
  {
    slug: "sketchlet",
    visibility: "listed",
    stage: "featured",
    priority: 10,
    category: "Creative tool",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Sketchlet",
    description:
      "A Wordle-inspired daily drawing game for people who want a few creative minutes and something shareable at the end.",
    cardImage: stockImage("photo-1513475382585-d06e58bcb0e0", "Colored pencils arranged for a drawing session."),
    detailHref: "/projects/sketchlet",
    appHref: "https://sketchlet.app",
    tone: "coral",
    status: "Active build",
    timeline: "2026",
    role: "Product direction, drawing-tool design, frontend prototyping",
    collaborators: ["Michael Baker"],
    tools: ["React", "Drawing tools", "User accounts", "Training materials", "Daily game design"],
    evidence: ["Rich drawing tools", "Daily creative loop", "Shareable drawings"],
    metrics: [
      { label: "Product type", value: "Daily game" },
      { label: "Core action", value: "Draw" },
      { label: "Audience", value: "Casual creators" },
    ],
    summary:
      "Sketchlet is the current lead project: a daily drawing game inspired by the quick, repeatable pleasure of Wordle. The premise is simple: give people a few creative minutes, a reason to draw, and a shareable result they can send to friends.",
    problem:
      "Many drawing tools are either full creative suites or passive prompt lists. Sketchlet sits between those poles: it needs enough rich tooling to make drawing feel expressive, but it also has to stay light enough for a short daily visit.",
    outcome:
      "The project now has rich drawing tools, training materials, and user accounts, with the product direction centered on daily play, easy sharing, and the social pleasure of seeing what friends made.",
    decisions: [
      "Use the daily-game pattern as the product constraint: the experience should be easy to understand, quick to start, and satisfying to repeat.",
      "Make the drawing tools expressive enough to feel fun without turning a short daily game into a professional art application.",
      "Include training materials so new users can learn the tool behavior without leaving the creative flow.",
      "Support user accounts so drawings, progress, and future social features have a durable home.",
      "Treat sharing as part of the core loop because the product becomes more fun when people can compare what they made.",
    ],
    sections: [
      {
        title: "Daily Game Loop",
        body:
          "Sketchlet began from a Wordle-like idea: a site can earn a place in someone's day by being easy to enter, fun for a few minutes, and worth sharing afterward. The daily loop gives the product a clear rhythm without asking users to treat drawing like homework.",
      },
      {
        title: "Drawing Tools",
        body:
          "The hardest product work is getting the tools to behave as intended. Drawing interactions are unforgiving: small mismatches in feel, timing, brush behavior, or control state can make a playful tool feel broken. The tool layer has to be dependable before the game layer can shine.",
      },
      {
        title: "Learning Support",
        body:
          "Training materials help users understand the drawing environment without turning the app into a formal course. That fits the product's tone: lightweight, helpful, and built for people who may only have a few minutes to play.",
      },
      {
        title: "Social Potential",
        body:
          "The next opportunity is social. Sketchlet can become more memorable when users can share drawings, see what friends made, and build lightweight rituals around returning together.",
      },
    ],
    nextSteps: [
      "Add more social features so users can connect around drawings, not only create them in isolation.",
      "Refine tool behavior until drawing feels predictable, responsive, and fun across input methods.",
      "Clarify the sharing loop so a finished drawing becomes an invitation for someone else to try the daily challenge.",
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
    description:
      "A San Francisco parks guide that adds context, filters, accessibility care, and original photography to public park data.",
    cardImage: stockImage("photo-1500530855697-b586d89ba3ee", "A green public park with open grass, trees, and water."),
    detailHref: "/projects/bakerparks",
    appHref: "https://bakerparks.vercel.app",
    tone: "blue",
    status: "Active build",
    timeline: "2026",
    role: "Information architecture, accessibility-focused UX, local data modeling, photography",
    collaborators: ["Michael Baker"],
    tools: ["San Francisco parks data", "Filtering UX", "Accessibility", "Original photography"],
    evidence: ["Explore filters", "Park profiles", "Original photos"],
    metrics: [
      { label: "Domain", value: "SF parks" },
      { label: "Audience", value: "Locals + tourists" },
      { label: "Core flow", value: "Explore" },
    ],
    summary:
      "BakerParks is an active San Francisco public-parks guide inspired by frustration with the existing SF Parks website. It uses underlying public data as a base, then adds filtering, context, accessibility care, and original photography to help people choose parks with more confidence.",
    problem:
      "Public park information can be technically available but still hard to use. Locals and tourists may want to know what a park offers, how to get there, and whether it fits a specific kind of visit, but the answers are often buried in municipal pages, maps, or scattered informal sources.",
    outcome:
      "The current Explore experience lets users apply filters to find the right park for a visit. As I personally explore more of the San Francisco park landscape, I use my own photographs and impressions to keep improving the site's context and usability.",
    decisions: [
      "Use SF Parks data as a foundation, then add a clearer product layer for people trying to choose where to go.",
      "Make Explore the practical center of the app so users can filter by what they need instead of reading every park page from scratch.",
      "Hold the project to a high accessibility standard because public information should be usable by as many visitors as possible.",
      "Include my own photographs so the pages carry specific visual context instead of feeling like abstract data records.",
      "Let personal exploration inform product improvements, using real visits to notice what the interface should explain next.",
    ],
    sections: [
      {
        title: "Spark",
        body:
          "BakerParks started after I read an article describing frustration with the SF Parks website. The project asks what happens when public data is treated as a starting point rather than the finished experience.",
      },
      {
        title: "Explore Flow",
        body:
          "The Explore feature is the main utility today. It lets users apply filters to narrow the landscape of San Francisco parks and find a place that better matches the visit they have in mind.",
      },
      {
        title: "Accessibility Standard",
        body:
          "The project is aiming for a high accessibility standard. That matters because park information serves a broad public audience, including locals, tourists, and people navigating different access needs.",
      },
      {
        title: "Original Context",
        body:
          "Pages include my own photographs of San Francisco public parks. That gives the site a personal, grounded layer that public data alone cannot provide.",
      },
    ],
    nextSteps: [
      "Continue using the app while personally exploring San Francisco parks, noting where the experience helps and where it leaves questions unanswered.",
      "Use firsthand impressions and photography to improve park pages with clearer context about what each place offers.",
      "Keep refining the Explore filters so locals and tourists can move from curiosity to a good park choice faster.",
    ],
  },
  {
    slug: "mikeslist",
    visibility: "listed",
    stage: "background",
    priority: 50,
    category: "Local discovery",
    label: "Case study",
    emphasisLabel: "Background",
    title: "Mike's List",
    description:
      "A local event-discovery experiment that revealed how much steady editorial labor a useful events calendar requires.",
    cardImage: stockImage("photo-1501386761578-eac5c94b800a", "A live music crowd facing a brightly lit stage."),
    detailHref: "/projects/mikeslist",
    appHref: "https://mikeslist.xyz",
    repoHref: "https://github.com/michael-baker-content/mikeslist",
    tone: "spotlight",
    status: "Local discovery tool",
    timeline: "2026",
    role: "Product design, data modeling, prototype engineering",
    collaborators: ["Michael Baker", "Codex"],
    tools: ["JavaScript", "Local data stores", "Wikidata", "Google Places"],
    evidence: ["Freshness problem", "Artist review", "Source trails"],
    metrics: [
      { label: "Primary challenge", value: "Freshness" },
      { label: "Data types", value: "Artists, venues, events" },
      { label: "Status", value: "Background" },
    ],
    summary:
      "Mike's List began as a local show-discovery tool and quickly became a lesson in the operational reality of events calendars. There is value in the idea, but the product depends on a steady influx of fresh, verified information that I cannot currently provide at the pace the category demands.",
    problem:
      "Events content expires quickly. Last week's listings have little value, and each new week may introduce artists with very little overlap from the week before. The lower the profile of an event, the less likely algorithmically derived artist information is to be accurate.",
    outcome:
      "The project clarified the content-quality bar: local discovery needs human review, source tracking, and a lot of data entry. Mike's List remains a useful background study because it shows where automation helps and where editorial labor is still unavoidable.",
    decisions: [
      "Treat every show listing as time-sensitive content, not a durable evergreen record.",
      "Separate artists, venues, and events so reusable information can persist even when weekly event listings expire.",
      "Assume low-profile events need more human review because automated artist matching becomes less reliable as public data gets thinner.",
      "Make source trails and review states visible so the product does not pretend uncertain enrichment is finished editorial work.",
      "Move the project into the background until there is a sustainable way to provide the steady content operations it needs.",
    ],
    sections: [
      {
        title: "Freshness Problem",
        body:
          "The biggest lesson was how quickly event content loses value. There is very little calling for last week's listings, and a new week of shows may bring a mostly new set of artists to research.",
      },
      {
        title: "Artist Data",
        body:
          "Algorithmic artist enrichment is least reliable where the product most needs help: lower-profile events, partial names, aliases, and artists with limited public information. That creates a lot of manual review before the content reaches a reasonable quality bar.",
      },
      {
        title: "Content Operations",
        body:
          "A useful events calendar is not only a data model or interface. It is a publishing operation. Mike's List made clear that the product would need steady intake, cleanup, correction, and publishing work to stay useful.",
      },
      {
        title: "What Remains",
        body:
          "There is still something interesting here: automation can support local discovery, but the product has to respect the editorial labor needed to make fresh listings trustworthy.",
      },
    ],
    nextSteps: [
      "Keep Mike's List in the background while I focus on projects with a more sustainable maintenance rhythm.",
      "Preserve the lessons about source confidence, review queues, and the limits of automated enrichment.",
      "Revisit the idea only if there is a clearer content pipeline or narrower scope that can support fresh listings without constant manual upkeep.",
    ],
  },
  {
    slug: "making-tools",
    visibility: "listed",
    stage: "supporting",
    priority: 40,
    category: "Hobby tools",
    label: "Case study",
    emphasisLabel: "Active",
    title: "Making Tools",
    description:
      "A grouped case study about solving complex hobby problems with focused helper apps, from fantasy stats to RPG interfaces.",
    cardImage: stockImage("photo-1516321318423-f06f85e504b3", "A laptop workspace with notes and small tools arranged for a technical project."),
    detailHref: "/projects/making-tools",
    tone: "gold",
    status: "Toolmaking series",
    timeline: "2026",
    role: "Interface design, data modeling, statistics tooling, frontend prototyping",
    collaborators: ["Michael Baker"],
    tools: ["JavaScript", "React", "Python", "Flask", "Statistics", "Structured data", "APIs"],
    evidence: ["Fantasy league trackers", "RPG character sheets", "Movie trivia learning", "Daily blackjack"],
    metrics: [
      { label: "Domains", value: "4+" },
      { label: "Pattern", value: "Helper apps" },
      { label: "Core challenge", value: "Complexity" },
    ],
    summary:
      "Making Tools gathers hobby-driven helper apps into one portfolio story. Some of the most complex problems I have solved came from tools I made for my own interests: role-playing game character management, fantasy baseball and basketball league trackers, a learning tool for a movie trivia web game, and a daily blackjack app.",
    problem:
      "Personal hobbies can create surprisingly serious software problems. Fantasy leagues need statistics, rankings, standings, and custom rules. Tabletop role-playing characters carry a dense web of stats and actions. Trivia and card games need practice loops, feedback, and enough structure to help users improve.",
    outcome:
      "This grouped case study shows how I use small, personally motivated products to solve real interface, data, and logic problems. The projects may be playful, but the underlying challenges include statistical modeling, information architecture, and interaction design.",
    decisions: [
      "Group several hobby helper apps together so the portfolio emphasizes the repeatable pattern: find a complicated personal workflow and build a focused tool for it.",
      "Use Python when math-heavy problems call for it, especially fantasy sports tools that depend on player statistics and standings logic.",
      "Treat tabletop character management as an interface design problem, not only a data-entry problem.",
      "Keep each app narrow enough to serve the hobby context that sparked it, whether that is a league, a game night, or a daily practice loop.",
      "Use playful domains as serious product labs because they reveal real rules, edge cases, and user needs.",
    ],
    sections: [
      {
        title: "Fantasy Leagues",
        body:
          "The fantasy baseball and fantasy basketball tools were built for real-life leagues with custom needs. These apps pushed me toward more Python programming because sports data creates math-heavy problems: player statistics, rankings, standings, and the logic needed to make league state trustworthy.",
      },
      {
        title: "Character Sheets",
        body:
          "The role-playing game character sheet app involved some of the most interesting interface work. TTRPG characters have a lot of stats, and I wanted to navigate them nimbly without creating a cluttered mess. The challenge was making dense information feel available without overwhelming the player.",
      },
      {
        title: "Game Learning",
        body:
          "The movie trivia helper and daily blackjack app treat games as learning systems. They are not just databases or scoreboards; they are tools for practice, recall, pattern recognition, and improving through repeated short sessions.",
      },
      {
        title: "Shared Pattern",
        body:
          "The shared skill is not the hobby domain itself. It is the ability to understand a messy workflow, identify where software can reduce friction, and design an interface that makes complicated rules easier to use.",
      },
    ],
    nextSteps: [
      "Decide which helper apps deserve individual deep dives and which should remain examples inside the grouped Making Tools story.",
      "Add screenshots or short notes from the fantasy league trackers, RPG character sheet, movie trivia helper, and daily blackjack app.",
      "Create a visual matrix showing which projects emphasize statistics, interface density, learning loops, or game-state management.",
    ],
  },
  {
    slug: "greeting",
    visibility: "hidden",
    stage: "background",
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
    collaborators: ["Michael Baker"],
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
      "Keep the interaction closer to making than form-filling, so the user feels like they are shaping a message rather than completing intake.",
      "Use a small set of playful visual constraints instead of an endless theme picker.",
      "Let the card format carry personality while the tool stays simple enough to finish quickly.",
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
      "Define a few strong occasion collections so the first version has obvious entry points.",
      "Add export and sharing flows that preserve the card's visual polish outside the app.",
      "Create a tighter visual system for type, color, and layout so cards feel related without becoming repetitive.",
    ],
  },
  {
    slug: "nba-roto-tracker",
    visibility: "listed",
    stage: "background",
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
    collaborators: ["Michael Baker"],
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
      "Use Flask to keep the app small enough that the scoring model and request flow remain easy to inspect.",
      "Support SQLite locally and PostgreSQL in production so development stays light while deployment has a durable database.",
      "Separate leaderboard and roster views so users can inspect both the standings and the evidence behind them.",
      "Treat the app as an operational dashboard for a real league, not only as a coding exercise.",
      "Model competition rules explicitly so standings can be explained instead of merely displayed.",
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
      "Add annotated screenshots of the leaderboard, roster pages, and scoring states.",
      "Document the scoring model in plain language so a league member can understand why standings move.",
      "Explain the local-to-production database path, including what changes between SQLite and PostgreSQL on Railway.",
    ],
  },
  {
    slug: "cine2helper",
    visibility: "listed",
    stage: "background",
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
    collaborators: ["Michael Baker"],
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
      "Use TMDB as the metadata source so the project can focus on workflow design instead of data collection.",
      "Prioritize fast scanning and comparison over encyclopedic movie detail.",
      "Keep the scope tied to a specific decision workflow so the interface can stay opinionated.",
      "Use TypeScript to make API response shapes and UI expectations easier to reason about.",
      "Deploy on Vercel so the project can be shared quickly and iterated without infrastructure drag.",
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
      "Add a short flow diagram showing the lookup path from search to useful decision.",
      "Name the exact user decisions the tool is meant to support, then tune the interface around those moments.",
      "Document TMDB API limits, missing-data states, and error handling so the app's reliability is easier to evaluate.",
    ],
  },
  {
    slug: "bakerversity",
    visibility: "listed",
    stage: "background",
    priority: 80,
    category: "Learning platform",
    label: "Case study",
    title: "Bakerversity",
    description:
      "A Next.js learning platform exploring courses, rich lessons, math rendering, and editable learning content.",
    cardImage: stockImage("https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200", "People walking near a university building and graduation lawn."),
    detailHref: "/projects/bakerversity",
    appHref: "https://bakerversity.vercel.app",
    repoHref: "https://github.com/michael-baker-content/bakerversity",
    tone: "gold",
    status: "Public platform",
    timeline: "2026",
    role: "Learning product design, frontend architecture, content editor exploration",
    collaborators: ["Michael Baker"],
    tools: ["TypeScript", "React", "Next.js", "Tailwind", "KaTeX", "Tiptap"],
    evidence: ["LMS structure", "Rich text editing", "Math rendering"],
    metrics: [
      { label: "Product type", value: "LMS" },
      { label: "Editor", value: "Tiptap" },
      { label: "Math", value: "KaTeX" },
    ],
    summary:
      "Bakerversity is a learning-platform prototype for turning structured lessons, rich explanation, and technical notation into a coherent course experience. It combines my online education background with a modern web stack that can support authoring, presentation, and future learner workflows.",
    problem:
      "Learning products need a difficult balance: enough structure to guide someone through material, enough flexibility to support rich teaching, and enough editorial control that the course does not collapse into a pile of disconnected pages.",
    outcome:
      "The platform creates a test bed for course navigation, lesson authoring, math rendering, and reusable learning content. It is a place to ask what a small, personally owned LMS could become if the authoring experience is treated as part of the product.",
    decisions: [
      "Use Next.js and TypeScript for a foundation that can grow from static lessons into a fuller learning product.",
      "Explore Tiptap because lesson authoring needs structured blocks, not just plain text fields.",
      "Include KaTeX so technical lessons can support notation, formulas, and step-by-step explanation.",
      "Treat course structure, editing, and learner navigation as one connected product problem.",
      "Bring online art-education habits into the interface: sequencing, examples, critique, context, and accessibility.",
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
      "Add screenshots that compare the learner view with the authoring/editing view.",
      "Build one complete sample course so the platform can be judged against real content instead of abstract structure.",
      "Choose the next product center: learner progress, authoring workflow, publishing, or course discovery.",
    ],
  },
  {
    slug: "bakerlinks",
    visibility: "listed",
    stage: "supporting",
    priority: 30,
    category: "Publishing platform",
    label: "Case study",
    emphasisLabel: "Supported",
    title: "BakerLinks",
    description:
      "An operational link-hub prototype that powers my own social links site and still supports users making project pages.",
    cardImage: stockImage("photo-1516321497487-e288fb19713f", "A laptop workspace used for publishing and managing online links."),
    detailHref: "/projects/bakerlinks",
    repoHref: "https://github.com/michael-baker-content/bakerlinks",
    tone: "spotlight",
    status: "Public platform",
    timeline: "2026",
    role: "Product design, full-stack prototyping, social publishing workflow",
    collaborators: ["Michael Baker"],
    tools: ["TypeScript", "React", "Next.js", "Tailwind", "Vercel", "Supabase"],
    evidence: ["Profile pages", "Project hubs", "Operational prototype"],
    metrics: [
      { label: "Product type", value: "Link hub" },
      { label: "Backend", value: "Supabase" },
      { label: "Deploy", value: "Vercel" },
    ],
    summary:
      "BakerLinks is an operational link-hub prototype I still use as the foundation for my own social media links site. It lets users make hub pages for current projects, while also showing the limits of entering a crowded category without a very strong competitive package.",
    problem:
      "The link-in-bio and social-links category has strong existing options. A new product in this space needs a very clear package, audience, and reason to switch. BakerLinks is useful, but its opportunity space is narrower than the prototype first suggested.",
    outcome:
      "The project remains useful as a working publishing tool and as the base for my own social links presence. It also taught me to evaluate product categories more skeptically: a pleasant build still needs a sharp market reason to grow beyond prototype scale.",
    decisions: [
      "Use Supabase for hosted data and auth patterns so the product can test publishing behavior before custom infrastructure.",
      "Render public profile pages with Next.js so they are fast, shareable, and deployable.",
      "Keep the first version focused on project hubs and simple social links rather than trying to compete with full website builders.",
      "Recognize that the category is crowded, so a future version would need a stronger differentiator than basic link publishing.",
      "Keep supporting the operational version where it has real use: my own hub page and users who want a simple page for current projects.",
    ],
    sections: [
      {
        title: "Working Prototype",
        body:
          "BakerLinks is still operational and useful. It supports users who want to make a hub page for current projects, and it powers my own social media links site. That gives the prototype a real-life use case even if the broader product opportunity is limited.",
      },
      {
        title: "Competitive Reality",
        body:
          "The project also clarified how competitive this category is. Link-hub tools already have strong options, so a new product would need a more distinctive package, sharper audience, or better reason to switch.",
      },
      {
        title: "Platform Choices",
        body:
          "Next.js, Supabase, Tailwind, and Vercel made it possible to build a real publishing flow quickly: editable profile data, public pages, hosted storage, and a deployable platform structure.",
      },
      {
        title: "Product Judgment",
        body:
          "The strongest lesson may be strategic. I enjoyed building BakerLinks, but the project taught me to separate a satisfying prototype from a large opportunity. Not every useful product needs to become a major platform.",
      },
    ],
    nextSteps: [
      "Continue using BakerLinks as the foundation for my own social media links site.",
      "Support the current operational product for users who want simple hub pages for active projects.",
      "If the product expands, define a sharper differentiator before investing in a broader competitive push.",
    ],
  },
  {
    slug: "saske",
    visibility: "listed",
    stage: "background",
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
    collaborators: ["Michael Baker"],
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
      "Start with a specific rules system so the tool can be tested against real play needs instead of generic character-sheet theory.",
      "Prioritize dynamic behavior only where rules density creates real friction.",
      "Use lightweight JavaScript so the prototype stays easy to modify as the rules model changes.",
      "Treat table usability as the goal, not exhaustive rules coverage.",
      "Organize the interface around player action rather than sourcebook structure.",
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
      "Add screenshots of the tracker in common play-facing states.",
      "Document the calculated fields that save the most time or prevent the most lookup friction.",
      "Clarify which values are automated, which remain manual, and which rules are intentionally out of scope.",
    ],
  },
  {
    slug: "notion-clean",
    visibility: "listed",
    stage: "background",
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
    collaborators: ["Michael Baker"],
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
      "Keep the tool focused on one recurring export-cleanup workflow instead of expanding into a general file manager.",
      "Support repeatable scripting patterns so the cleanup can be run safely across multiple archives.",
      "Treat filename clarity as the main product value: the output should be easier to scan, share, and maintain.",
      "Avoid turning a small utility into an oversized content-management project.",
      "Preserve the archive structure while removing the UUID noise that makes exported files harder to read.",
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
      "Add a before-and-after export example that shows exactly what changes in filenames and folders.",
      "Document supported archive shapes, collision handling, and edge cases.",
      "Clarify when the browser UI, JavaScript script, or Python script is the best fit.",
    ],
  },
  {
    slug: "github-repo-journal",
    visibility: "listed",
    stage: "background",
    priority: 130,
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
    collaborators: ["Michael Baker"],
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
      "Use Astro because the site is content-first but still has room for React components and interactive experiments.",
      "Support KaTeX and p5.js so technical explanation and creative coding can live in the same publishing system.",
      "Treat repo writeups as a bridge between code history, portfolio evidence, and public learning.",
      "Keep the site deployable through GitHub Pages so publishing stays lightweight.",
      "Use posts to explain project intent, tradeoffs, and lessons that a repository alone cannot show.",
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
      "Add reciprocal links between portfolio case studies and their deeper blog posts.",
      "Define a repeatable post format for repo retrospectives: spark, build, challenge, decision, next step.",
      "Add screenshots, embeds, or code examples where the writing needs more concrete proof.",
    ],
  },
  {
    slug: "template",
    visibility: "hidden",
    stage: "template",
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
