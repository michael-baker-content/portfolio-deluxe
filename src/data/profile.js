export const profile = {
  brand: "Michael Baker",
  contactEmail: "hello@example.com",
  hero: {
    eyebrow: "React/Tailwind portfolio, rebuilt for a working practice",
    title: "Michael Baker builds useful web experiences.",
    description:
      "A modern portfolio for product thinking, frontend prototypes, creative direction, and the case studies behind the work.",
    imageAlt:
      "A polished paper-craft workspace with interface elements, project cards, and soft architectural details.",
  },
  lineage: {
    eyebrow: "From template to system",
    title: "A visible 2.0 of the portfolio starter.",
    description:
      "The original fork gave this project the modern portfolio essentials: React, Tailwind, responsive navigation, animated polish, project cards, skills, and contact. This version keeps that structure, then upgrades the content model so every section points to real project evidence.",
    beats: [
      { from: "Hero intro", to: "Hero with sharper positioning and visual voice" },
      { from: "Skills grid", to: "Capabilities tied to actual project evidence" },
      { from: "Project cards", to: "Case-study previews with detail pages" },
      { from: "Dark glass polish", to: "A clearer visual system that can support multiple themes" },
    ],
  },
  creativePosition: {
    eyebrow: "Creative position",
    title: "A portfolio that stays practical while showing taste.",
    paragraphs: [
      "The site returns to the high-level promise of the 1.0 fork: a clean, modern portfolio with quick orientation, visible skills, project cards, and a direct contact path.",
      "The 2.0 version adds a stronger editorial layer underneath that familiar structure: clearer case studies, project-specific proof, and a content system that can grow as the work grows.",
    ],
  },
};

export const audienceSignals = [
  "A clear introduction for people who need to understand the work quickly.",
  "A responsive project grid that turns portfolio entries into case-study previews.",
  "A skills section connected to evidence instead of generic progress bars.",
  "A direct contact path that keeps the site useful as a real portfolio.",
];

export const services = [
  {
    title: "Product thinking",
    description:
      "Clarify the messy middle between an idea, an audience, and the first useful version someone can actually touch.",
  },
  {
    title: "Creative direction",
    description:
      "Shape visual and verbal systems that can be bright, sincere, uncanny, or deadpan without losing the thread.",
  },
  {
    title: "Prototype craft",
    description:
      "Build compact, testable web experiences with polished fronts and practical working backs.",
  },
];

export const capabilities = [
  {
    category: "Product",
    title: "Information architecture",
    proof: "Separated Portfolio, Music, and Greeting into sibling apps with source materials kept out of active code.",
    level: "System design",
  },
  {
    category: "Prototype",
    title: "Working interfaces",
    proof: "Built review flows, case-study routes, and deployable static app structure instead of static mockups only.",
    level: "Frontend craft",
  },
  {
    category: "Editorial",
    title: "Voice and positioning",
    proof: "Turns generic portfolio blocks into a focused presentation of taste, product judgment, and project-level evidence.",
    level: "Creative direction",
  },
  {
    category: "Data",
    title: "Structured content",
    proof: "Project cards and case studies now share the same data source, making the site easier to extend.",
    level: "Maintainability",
  },
];
