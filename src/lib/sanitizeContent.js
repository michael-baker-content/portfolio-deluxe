const MAX_TEXT_LENGTH = 5000;
const MAX_URL_LENGTH = 1000;
const SAFE_URL_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);

const MIKES_LIST_DECISIONS = [
  "Mike's List treats each imported show listing as a lead that needs review before it becomes trusted local-discovery data.",
  "The app separates artists, venues, and events so each record can carry its own sources, notes, corrections, and confidence level.",
  "The product favors visible source trails and direct artist or venue context over pretending that automated enrichment is always enough.",
  "Uncertain matches stay in a review workflow, which keeps ambiguity visible instead of forcing the interface to publish a false answer.",
  "The rebrand gives Mike's List its own domain and repository so it can grow as a standalone product beyond the portfolio case study.",
];

const MIKES_LIST_NEXT_STEPS = [
  "Strengthen the event identity model so duplicate listings, date changes, and venue updates can be tracked without muddying the source history.",
  "Improve venue review screens so source comparison, location confidence, and correction history are easier to understand at a glance.",
  "Turn repeated enrichment tasks into reusable review tools so the workflow gets faster while human judgment remains visible.",
];

const CODEX_COLLABORATOR_SLUGS = new Set(["portfolio", "mikeslist"]);

function cleanText(value, maxLength = MAX_TEXT_LENGTH) {
  if (value === null || value === undefined) return "";

  return String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .slice(0, maxLength);
}

function cleanNumber(value, fallback = 999) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function cleanArray(value, mapper = cleanText) {
  if (!Array.isArray(value)) return [];
  return value.map(mapper).filter((item) => item !== "" && item !== null && item !== undefined);
}

export function cleanUrl(value, { allowRelative = true, imageOnly = false } = {}) {
  const url = cleanText(value, MAX_URL_LENGTH).trim();
  if (!url) return "";

  if (allowRelative && (url.startsWith("/") || url.startsWith("#") || url.startsWith("../"))) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (SAFE_URL_PROTOCOLS.has(parsed.protocol)) return parsed.href;
  } catch {
    return "";
  }

  if (!imageOnly && url.startsWith("mailto:")) return url;
  return "";
}

function cleanImage(value) {
  if (!value || typeof value !== "object") return null;

  const src = cleanUrl(value.src, { allowRelative: true, imageOnly: true });
  if (!src) return null;

  return {
    src,
    alt: cleanText(value.alt, 300),
  };
}

function cleanObjectArray(value, mapper) {
  return cleanArray(value, (item) => (item && typeof item === "object" ? mapper(item) : null));
}

function migrateLegacyProject(project = {}) {
  const slug = cleanText(project.slug, 120).trim().toLowerCase();
  const title = cleanText(project.title, 200);
  const repoHref = cleanText(project.repoHref, MAX_URL_LENGTH);
  const appHref = cleanText(project.appHref, MAX_URL_LENGTH);
  const isLegacyMikesList =
    slug === "music" ||
    title === "Bay Area Show Explorer" ||
    repoHref.includes("bay-area-music-calendar") ||
    appHref.includes("../Music");

  if (!isLegacyMikesList) return project;

  return {
    ...project,
    slug: "mikeslist",
    title: title === "Bay Area Show Explorer" || !title ? "Mike's List" : project.title,
    appHref: appHref.includes("../Music") || !appHref ? "https://mikeslist.xyz" : project.appHref,
    repoHref: repoHref.includes("bay-area-music-calendar") || !repoHref ? "https://github.com/michael-baker-content/mikeslist" : project.repoHref,
  };
}

function migrateBakerversityProject(project = {}) {
  const slug = cleanText(project.slug, 120).trim().toLowerCase();
  const title = cleanText(project.title, 200);
  const repoHref = cleanText(project.repoHref, MAX_URL_LENGTH);
  const appHref = cleanText(project.appHref, MAX_URL_LENGTH);
  const isLegacyBakerversity =
    slug === "bakeruniversity" ||
    title === "Baker University" ||
    repoHref.includes("bakeruniversity") ||
    appHref.includes("bakeruniversity");

  if (!isLegacyBakerversity) return project;

  return {
    ...project,
    slug: "bakerversity",
    title: title === "Baker University" || !title ? "Bakerversity" : project.title,
    appHref: appHref.includes("bakeruniversity") || !appHref ? "https://bakerversity.vercel.app" : project.appHref,
    repoHref: repoHref.includes("bakeruniversity") || !repoHref ? "https://github.com/michael-baker-content/bakerversity" : project.repoHref,
  };
}

function hasFragmentedListCopy(items) {
  if (!Array.isArray(items) || items.length === 0) return true;
  return items.some((item) => cleanText(item, 200).trim().length < 24);
}

function cleanProfile(profile = {}) {
  return {
    ...profile,
    links: cleanObjectArray(profile.links, (link) => ({
      label: cleanText(link.label, 80),
      href: cleanUrl(link.href),
    })),
    contactForm: {
      ...profile.contactForm,
      endpoint: cleanUrl(profile.contactForm?.endpoint, { allowRelative: false }),
    },
    tastePitch: profile.tastePitch
      ? {
          ...profile.tastePitch,
          heroImage: cleanImage(profile.tastePitch.heroImage),
          imagePanels: cleanObjectArray(profile.tastePitch.imagePanels, (panel) => ({
            ...panel,
            title: cleanText(panel.title, 120),
            caption: cleanText(panel.caption, 500),
            src: cleanUrl(panel.src, { allowRelative: true, imageOnly: true }),
            alt: cleanText(panel.alt, 300),
          })),
        }
      : profile.tastePitch,
  };
}

function cleanProject(project = {}) {
  const migratedProject = migrateBakerversityProject(migrateLegacyProject(project));
  const slug = cleanText(migratedProject.slug, 120)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  const cleanedDecisions = cleanArray(migratedProject.decisions);
  const cleanedNextSteps = cleanArray(migratedProject.nextSteps);
  const cleanedCollaborators = cleanArray(migratedProject.collaborators, (item) => cleanText(item, 120));
  const isMikesList = slug === "mikeslist";

  return {
    ...migratedProject,
    slug,
    detailHref: slug ? `/projects/${slug}` : "",
    appHref: cleanUrl(migratedProject.appHref),
    repoHref: cleanUrl(migratedProject.repoHref),
    cardImage: cleanImage(migratedProject.cardImage),
    priority: cleanNumber(migratedProject.priority),
    visibility: migratedProject.visibility === "hidden" ? "hidden" : "listed",
    evidence: cleanArray(migratedProject.evidence, (item) => cleanText(item, 80)),
    tools: cleanArray(migratedProject.tools, (item) => cleanText(item, 80)),
    collaborators: CODEX_COLLABORATOR_SLUGS.has(slug)
      ? cleanedCollaborators
      : cleanedCollaborators.filter((item) => item.toLowerCase() !== "codex"),
    decisions: isMikesList && hasFragmentedListCopy(cleanedDecisions) ? MIKES_LIST_DECISIONS : cleanedDecisions,
    nextSteps: isMikesList && hasFragmentedListCopy(cleanedNextSteps) ? MIKES_LIST_NEXT_STEPS : cleanedNextSteps,
    metrics: cleanObjectArray(migratedProject.metrics, (metric) => ({
      label: cleanText(metric.label, 80),
      value: cleanText(metric.value, 120),
    })),
    sections: cleanObjectArray(migratedProject.sections, (section) => ({
      title: cleanText(section.title, 120),
      body: cleanText(section.body),
    })),
  };
}

export function sanitizeContent(content) {
  const source = content && typeof content === "object" ? content : {};

  return {
    ...source,
    profile: cleanProfile(source.profile || {}),
    audienceSignals: cleanArray(source.audienceSignals, (signal) => {
      if (signal && typeof signal === "object") {
        return {
          label: cleanText(signal.label, 80),
          text: cleanText(signal.text, 500),
        };
      }

      const text = cleanText(signal, 500);
      return text ? { label: "Signal", text } : null;
    }),
    capabilities: cleanObjectArray(source.capabilities, (capability) => ({
      ...capability,
      category: cleanText(capability.category, 80),
      title: cleanText(capability.title, 120),
      proof: cleanText(capability.proof),
      level: cleanText(capability.level, 80),
    })),
    services: cleanObjectArray(source.services, (service) => ({
      ...service,
      title: cleanText(service.title, 120),
      description: cleanText(service.description),
    })),
    projects: cleanObjectArray(source.projects, cleanProject),
  };
}
