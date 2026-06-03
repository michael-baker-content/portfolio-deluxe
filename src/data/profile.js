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
    eyebrow: "Content systems + web craft",
    title: "Useful web work, built with editorial taste.",
    description:
      "Prototypes, dashboards, and publishing tools shaped by 15+ years in content production.",
    imageAlt:
      "A polished paper-craft workspace with interface elements, project cards, and soft architectural details.",
  },
  lineage: {
    eyebrow: "Candidate snapshot",
    title: "Content production experience, closer to the build.",
    description:
      "My work has moved through a large marketing agency, a tech news platform, an enterprise technology environment, and a private art and design university. In those settings, the best contributions are often invisible: catching errors, coordinating reviews, preserving accessibility, and helping technical teams publish clearly at scale.",
    beats: [
      { from: "Enterprise web production", to: "CMS/DAM publishing, localization, product specs, legal copy, and global content deployment." },
      { from: "Editorial quality", to: "Style systems, QA, accessibility metadata, technical accuracy, and the quiet work of preventing mistakes." },
      { from: "Online education", to: "Course content, captions, transcripts, alternative text, faculty materials, and media accessibility." },
      { from: "Technical growth", to: "React prototypes, dashboards, admin tools, and Codex-assisted scaffolding." },
    ],
  },
  creativePosition: {
    eyebrow: "Working style",
    title: "Practical, curious, and comfortable in the messy middle.",
    paragraphs: [
      "The strongest projects here start where the path is not fully defined yet: the audience needs to be clarified, the data needs a shape, or the interface needs to make a complicated thing feel usable.",
      "The work combines enough engineering to make the idea real, enough writing to make the decisions legible, and enough design judgment to keep the experience focused.",
    ],
  },
  tastePitch: {
    eyebrow: "Taste, content, and judgment",
    title: "I make complex content easier to trust.",
    intro:
      "My professional work is often confidential, so this page makes the pattern visible: seasoned content judgment, enterprise production habits, and the growing technical skill to build the systems I used to only help publish.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      alt: "A team working around a table with laptops, notes, and shared planning materials.",
    },
    proofPoints: [
      {
        label: "Enterprise web production",
        title: "I know how content quality works when the stakes are high and the work is quiet.",
        body:
          "In large web and marketing environments, the best editorial work often disappears into the final product. The broken spec is fixed, the localization issue is caught, the accessibility metadata is improved, the legal copy is aligned, and the page ships without drama.",
      },
      {
        label: "Academic and media content",
        title: "I bring deep experience with learning content, technical editing, and accessibility.",
        body:
          "I have worked on online courses, captions, transcripts, alternative text, technical articles, ebooks, tutorials, documentation, and marketing content. That range trained me to care about structure, accuracy, audience, compliance, and the details that make content usable.",
      },
      {
        label: "Web development",
        title: "Working with strong web teams made me want to build more directly.",
        body:
          "I have spent years working beside engineering, localization, branding, product, and SME teams. The more I saw how good web systems are assembled, the more I wanted to build them myself. These case studies show that transition in public.",
      },
    ],
    imagePanels: [
      {
        title: "Content operations",
        caption: "I pay attention to governance, review, CMS publishing, localization, source-of-truth documents, and the unglamorous systems that keep content useful after the first draft.",
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "People collaborating in a workshop with sticky notes on a wall.",
      },
      {
        title: "Art education",
        caption: "Online art education taught me how to build structure without flattening taste, experimentation, accessibility, or the learner's sense of discovery.",
        src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
        alt: "Paint brushes and art materials on a colorful work surface.",
      },
      {
        title: "Working software",
        caption: "This portfolio, dashboard, and case-study system are part of the proof: I can use modern tools, including Codex, to scaffold complex web experiences quickly and thoughtfully.",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "A laptop showing code in a bright development workspace.",
      },
    ],
    closing:
      "That is the pitch I want to make directly: I can bring seasoned content judgment, enterprise production habits, and growing frontend skill to teams that need useful web experiences built with care.",
  },
};

export const audienceSignals = [
  {
    label: "Range",
    text: "Agency, tech media, enterprise technology, and online art education.",
  },
  {
    label: "Quality",
    text: "CMS/DAM publishing, localization, accessibility, QA, and source-of-truth discipline.",
  },
  {
    label: "Collaboration",
    text: "Comfortable with engineering, branding, localization, and subject-matter expert teams.",
  },
  {
    label: "Proof",
    text: "Public React projects show technical growth where NDA-bound work cannot.",
  },
];

export const services = [
  {
    title: "Content production",
    description:
      "Move complex web content through review, governance, localization, accessibility, and publishing without losing quality.",
  },
  {
    title: "Editorial systems",
    description:
      "Create style guides, documentation, QA habits, and structured source materials that help teams publish consistently.",
  },
  {
    title: "Prototype craft",
    description:
      "Use React, structured data, admin workflows, and Codex-assisted development to make content/product ideas inspectable.",
  },
];

export const capabilities = [
  {
    category: "Content",
    title: "Web production",
    proof: "Developed, maintained, edited, and implemented web content across CMS, DAM, markdown, HTML, JSON, product tables, and localization-ready source decks.",
    level: "15+ years",
  },
  {
    category: "Quality",
    title: "Editorial governance",
    proof: "Works across style systems, accessibility guidelines, QA audits, technical accuracy, alternative text, metadata, and compliance-sensitive publishing.",
    level: "Senior judgment",
  },
  {
    category: "Teams",
    title: "Cross-functional delivery",
    proof: "Collaborates with engineering, localization, branding, SMEs, vendors, faculty stakeholders, and production teams to ship accurate content at scale.",
    level: "Enterprise-ready",
  },
  {
    category: "Technical",
    title: "Frontend growth",
    proof: "Builds React dashboards, publishing tools, filters, forms, and admin workflows to show technical ability beyond NDA-bound professional work.",
    level: "Rapidly improving",
  },
];
