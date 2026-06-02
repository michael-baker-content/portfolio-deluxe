import { audienceSignals, capabilities, profile, services } from "../data/profile.js";
import { projects } from "../data/projects.js";

export const defaultContent = {
  profile,
  audienceSignals,
  capabilities,
  services,
  projects,
};

export function normalizeContent(content) {
  const source = content && typeof content === "object" ? content : {};

  return {
    profile: { ...defaultContent.profile, ...(source.profile || {}) },
    audienceSignals: Array.isArray(source.audienceSignals) ? source.audienceSignals : defaultContent.audienceSignals,
    capabilities: Array.isArray(source.capabilities) ? source.capabilities : defaultContent.capabilities,
    services: Array.isArray(source.services) ? source.services : defaultContent.services,
    projects: Array.isArray(source.projects) ? source.projects : defaultContent.projects,
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
