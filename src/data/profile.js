const formspreeEndpoint = import.meta.env?.VITE_FORMSPREE_ENDPOINT || "";

export const profile = {
  brand: "Michael Baker",
  contactForm: {
    endpoint: formspreeEndpoint,
  },
  links: [
    { label: "GitHub", href: "https://github.com/michael-baker-content" },
    { label: "Project blog", href: "https://michael-baker-content.github.io/" },
    { label: "Case studies", href: "/case-studies" },
  ],
  hero: {
    eyebrow: "Product thinking, frontend craft, and clear technical storytelling",
    title: "Michael Baker builds useful web experiences.",
    description:
      "I make working prototypes, dashboards, publishing tools, and learning systems that turn messy ideas into things people can inspect, use, and understand.",
    imageAlt:
      "A polished paper-craft workspace with interface elements, project cards, and soft architectural details.",
  },
  lineage: {
    eyebrow: "Candidate snapshot",
    title: "I turn messy ideas into usable web products.",
    description:
      "My work sits at the intersection of product thinking, writing, interface design, and practical engineering. I like ambiguous problems, useful prototypes, and systems that make information easier to act on.",
    beats: [
      { from: "Product judgment", to: "Shape unclear ideas into focused user workflows." },
      { from: "Frontend craft", to: "Build polished React interfaces that people can actually try." },
      { from: "Content systems", to: "Turn project details, data, and decisions into reusable structure." },
      { from: "Editorial taste", to: "Make technical work legible, specific, and worth reading." },
    ],
  },
  creativePosition: {
    eyebrow: "Working style",
    title: "Practical, curious, and comfortable in the messy middle.",
    paragraphs: [
      "I like projects where the path is not fully defined yet: the audience needs to be clarified, the data needs a shape, or the interface needs to make a complicated thing feel usable.",
      "My strongest work combines enough engineering to make the idea real, enough writing to make the decisions legible, and enough design judgment to keep the experience focused.",
    ],
  },
  tastePitch: {
    eyebrow: "Taste, content, and judgment",
    title: "I have spent years making complex content easier to teach, use, publish, and trust.",
    intro:
      "My edge is not only that I can build. It is that I understand content at a deep level: how it is planned, governed, taught, revised, launched, and used by real people inside real organizations.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      alt: "A team working around a table with laptops, notes, and shared planning materials.",
    },
    proofPoints: [
      {
        label: "Enterprise content",
        title: "I know how content problems show up inside large organizations.",
        body:
          "Enterprise content work is rarely just writing. It is ownership, review paths, stakeholder translation, source quality, governance, and helping teams make decisions when the material is complicated.",
      },
      {
        label: "Online art education",
        title: "I bring deep experience teaching visual and creative work online.",
        body:
          "Online art education taught me how people learn from examples, critique, sequencing, and context. That background shapes how I design interfaces, documentation, and case studies.",
      },
      {
        label: "Web development",
        title: "My development skills are underutilized, but they are improving fast.",
        body:
          "I am building real React products, dashboards, filters, forms, admin tools, and deployment workflows. The gap between content strategy and working software is getting smaller every week.",
      },
    ],
    imagePanels: [
      {
        title: "Content operations",
        caption: "Governance, review, publishing, and the unglamorous systems that keep content useful.",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "People collaborating in a workshop with sticky notes on a wall.",
      },
      {
        title: "Art education",
        caption: "Teaching visual thinking online means building structure without flattening taste or experimentation.",
        src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
        alt: "Paint brushes and art materials on a colorful work surface.",
      },
      {
        title: "Working software",
        caption: "The current portfolio, dashboard, and case-study system are proof that the technical side is catching up.",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "A laptop showing code in a bright development workspace.",
      },
    ],
    closing:
      "That combination is the pitch: I can think like a content strategist, explain like an educator, and increasingly build like the person who can make the solution tangible.",
  },
};

export const audienceSignals = [
  "Comfortable moving between product strategy, interface details, and implementation.",
  "Builds working prototypes quickly without treating polish as an afterthought.",
  "Writes clearly about decisions, tradeoffs, and the path from idea to product.",
  "Looks for roles where curiosity, ownership, and practical judgment matter.",
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
    proof: "Turns scattered project ideas into clear workflows, content structures, and decision points.",
    level: "System design",
  },
  {
    category: "Prototype",
    title: "Working interfaces",
    proof: "Builds React interfaces, review flows, dashboards, and small tools that can be tried instead of merely described.",
    level: "Frontend craft",
  },
  {
    category: "Editorial",
    title: "Voice and positioning",
    proof: "Explains product decisions with enough context that the work is easier to evaluate and discuss.",
    level: "Creative direction",
  },
  {
    category: "Data",
    title: "Structured content",
    proof: "Uses structured content and lightweight data models to keep products easier to extend.",
    level: "Maintainability",
  },
];
