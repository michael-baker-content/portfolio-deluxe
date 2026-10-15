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

function compareProjects(first, second) {
  return first.priority - second.priority;
}

function hasFragmentedListCopy(items) {
  if (!Array.isArray(items) || items.length === 0) return true;
  return items.some((item) => String(item || "").trim().length < 24);
}

function fallbackProjectKey(project) {
  return String(project?.slug || "")
    .trim()
    .toLowerCase();
}

function mergeProjectsWithDefaults(sourceProjects) {
  if (!Array.isArray(sourceProjects)) return defaultContent.projects;

  const defaultKeys = new Set(defaultContent.projects.map((project) => fallbackProjectKey(project)));
  const overlapsDefaultContent = sourceProjects.some((project) => defaultKeys.has(fallbackProjectKey(project)));

  if (!overlapsDefaultContent) return sourceProjects;

  const sourceBySlug = new Map(sourceProjects.map((project) => [fallbackProjectKey(project), project]));
  const mergedProjects = defaultContent.projects.map((defaultProject) => {
    const key = fallbackProjectKey(defaultProject);
    const sourceProject = sourceBySlug.get(key);

    if (!sourceProject) return defaultProject;

    sourceBySlug.delete(key);
    return { ...defaultProject, ...sourceProject };
  });

  return [...mergedProjects, ...sourceBySlug.values()];
}

function restoreProjectNarrativeLists(sourceProjects) {
  const defaultsBySlug = new Map(defaultContent.projects.map((project) => [fallbackProjectKey(project), project]));

  return sourceProjects.map((project) => {
    const defaultProject = defaultsBySlug.get(fallbackProjectKey(project));
    if (!defaultProject) return project;
    const shouldUseDefaultStage = project.stage === "supporting" && defaultProject.stage !== "supporting";

    return {
      ...project,
      stage: shouldUseDefaultStage ? defaultProject.stage : project.stage,
      decisions: hasFragmentedListCopy(project.decisions) ? defaultProject.decisions : project.decisions,
      nextSteps: hasFragmentedListCopy(project.nextSteps) ? defaultProject.nextSteps : project.nextSteps,
    };
  });
}

export function normalizeContent(content) {
  const raw = content && typeof content === "object" ? content : {};
  const source = sanitizeContent(content);
  const profileSource = source.profile || {};
  const normalizedProjects = Array.isArray(raw.projects)
    ? restoreProjectNarrativeLists(mergeProjectsWithDefaults(source.projects))
    : defaultContent.projects;

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
    projects: normalizedProjects,
  };
}

export function deriveContent(content) {
  const normalized = normalizeContent(content);
  const listedProjects = normalized.projects
    .filter((project) => project.visibility !== "hidden")
    .sort(compareProjects);
  const featuredProjects = listedProjects.filter((project) => project.stage === "featured");
  const supportingProjects = listedProjects.filter((project) => project.stage === "supporting");
  const backgroundProjects = listedProjects.filter((project) => project.stage === "background");

  return {
    ...normalized,
    listedProjects,
    featuredProjects,
    supportingProjects,
    backgroundProjects,
    caseStudyCategories: [...new Set(listedProjects.map((project) => project.category))],
    projectBySlug: (slug) => normalized.projects.find((project) => project.slug === slug),
  };
}
