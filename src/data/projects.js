export const projects = [
  {
    slug: "portfolio",
    label: "Portfolio case study",
    title: "Portfolio Case Study",
    description:
      "A case study about evolving the forked 1.0 portfolio into a themed experiment, then folding that experiment back into a more useful 2.0 site.",
    detailHref: "/projects/portfolio",
    tone: "gold",
    status: "Current project",
    role: "Information architecture, creative direction, frontend engineering",
    evidence: ["1.0 lineage", "Theme exploration", "2.0 content model"],
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
    label: "Case study",
    title: "Bay Area Show Explorer",
    description:
      "A local music discovery tool that turns listings into richer artist context, review queues, and venue intelligence.",
    detailHref: "/projects/music",
    appHref: "../Music/index.html",
    tone: "spotlight",
    status: "Sibling app",
    role: "Product design, data modeling, prototype engineering",
    evidence: ["Artist enrichment", "Venue review", "Source trails"],
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
    label: "Case study",
    title: "Greeting Card App",
    description:
      "A separate card-making project for shaping personal messages into playful, shareable compositions.",
    detailHref: "/projects/greeting",
    appHref: "../Greeting/index.html",
    tone: "coral",
    status: "Sibling app",
    role: "Creative direction, interaction design, prototype engineering",
    evidence: ["Message shaping", "Visual play", "Shareable output"],
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
    slug: "template",
    label: "Template",
    title: "Template Case Study",
    description:
      "A reusable placeholder case study that shows the section pattern before final project content exists.",
    detailHref: "/projects/template",
    tone: "blue",
    status: "Draft template",
    role: "Project role, collaborators, and contribution summary",
    evidence: ["Placeholder metric", "Process note", "Launch artifact"],
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

export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
