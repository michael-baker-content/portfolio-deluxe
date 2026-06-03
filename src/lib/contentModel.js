import { audienceSignals, capabilities, profile, services } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { sanitizeContent } from "./sanitizeContent.js";

export const defaultContent = {
  profile,
  audienceSignals,
  capabilities,
  services,
  projects,
};

export function normalizeContent(content) {
  const raw = content && typeof content === "object" ? content : {};
  const source = sanitizeContent(content);
  const profileSource = source.profile || {};

  return {
    profile: {
      ...defaultContent.profile,
      ...profileSource,
      contactForm: { ...defaultContent.profile.contactForm, ...(profileSource.contactForm || {}) },
      creativePosition: { ...defaultContent.profile.creativePosition, ...(profileSource.creativePosition || {}) },
      hero: { ...defaultContent.profile.hero, ...(profileSource.hero || {}) },
      lineage: { ...defaultContent.profile.lineage, ...(profileSource.lineage || {}) },
      tastePitch: { ...defaultContent.profile.tastePitch, ...(profileSource.tastePitch || {}) },
    },
    audienceSignals: Array.isArray(raw.audienceSignals) ? source.audienceSignals : defaultContent.audienceSignals,
    capabilities: Array.isArray(raw.capabilities) ? source.capabilities : defaultContent.capabilities,
    services: Array.isArray(raw.services) ? source.services : defaultContent.services,
    projects: Array.isArray(raw.projects) ? source.projects : defaultContent.projects,
  };
}

export function deriveContent(content) {
  const normalized = normalizeContent(content);
  const listedProjects = normalized.projects
    .filter((project) => project.visibility !== "hidden")
    .sort((first, second) => first.priority - second.priority);

  return {
    ...normalized,
    listedProjects,
    caseStudyCategories: [...new Set(listedProjects.map((project) => project.category))],
    projectBySlug: (slug) => normalized.projects.find((project) => project.slug === slug),
  };
}
