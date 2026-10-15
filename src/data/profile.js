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
    eyebrow: "Content experience. Independent projects.",
    title: "Content, publishing, and useful web tools.",
    description:
      "I’m Michael Baker. I bring 15+ years of experience in web production, technical publishing, and online education to building websites and applications.",
    imageAlt:
      "A polished paper-craft workspace with interface elements, project cards, and soft architectural details.",
  },
  lineage: {
    eyebrow: "Professional experience",
    title: "The experience behind the projects.",
    description:
      "I have worked in places where the details matter: enterprise web production, technical publishing, and online degree-granting art and design education. That background trained me to turn scattered requirements into clearer systems, better reviews, and smoother collaboration between content, design, and technical teams.",
    beats: [
      { from: "Enterprise production", to: "CMS/DAM publishing, localization, legal review, product specs, and global content deployment." },
      { from: "Editorial systems", to: "Style guidance, QA habits, accessibility metadata, technical accuracy, and source-of-truth discipline." },
      { from: "Art and design education", to: "Accredited online course content, captions, transcripts, alternative text, faculty materials, and media accessibility." },
      { from: "Cross-functional delivery", to: "Collaboration with engineering, localization, branding, subject-matter experts, and faculty stakeholders." },
    ],
  },
  creativePosition: {
    eyebrow: "Working style",
    title: "Practical, curious, and comfortable in the messy middle.",
    paragraphs: [
      "The strongest projects here start where the path is not fully defined yet: a daily creative habit needs a product shape, a local information set needs a clean structure, or a publishing workflow needs to feel lighter.",
      "The work combines enough engineering to make the idea real, enough writing to make the decisions legible, and enough design judgment to keep the experience focused as priorities change.",
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
    label: "Structure",
    text: "Turn scattered inputs into source material, workflows, and pages people can actually use.",
  },
  {
    label: "Design",
    text: "Bring taste, clarity, and practical constraints to content-heavy visual and learning problems.",
  },
  {
    label: "Communication",
    text: "Improve handoffs between writers, designers, engineers, reviewers, and subject-matter experts.",
  },
  {
    label: "Proof",
    text: "Use public web projects to make technical growth visible where professional work cannot be shown.",
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
    level: "Review and quality assurance",
  },
  {
    category: "Teams",
    title: "Cross-functional delivery",
    proof: "Collaborates with engineering, localization, branding, SMEs, vendors, faculty stakeholders, and production teams to ship accurate content at scale.",
    level: "Publishing and collaboration",
  },
  {
    category: "Technical",
    title: "Independent development",
    proof: "Builds React dashboards, publishing tools, filters, forms, and admin workflows to show technical ability beyond NDA-bound professional work.",
    level: "Applications and prototypes",
  },
];
