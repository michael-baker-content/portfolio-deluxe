// Curated navigation labels, separate from project status and display priority.
export const capabilityLabels = {
  data: "Data modeling and analysis",
  interaction: "Interaction and interface design",
  content: "Content and publishing systems",
};

const projectCapabilities = {
  portfolio: ["content", "interaction"],
  sketchlet: ["interaction"],
  bakerparks: ["data", "interaction", "content"],
  mikeslist: ["data", "content"],
  "making-tools": ["data", "interaction"],
  greeting: ["interaction"],
  "nba-roto-tracker": ["data", "interaction"],
  cine2helper: ["data", "interaction"],
  bakerversity: ["content", "interaction"],
  bakerlinks: ["content", "interaction"],
  saske: ["data", "interaction"],
  "notion-clean": ["content"],
  "github-repo-journal": ["content"],
};

export function capabilitiesForProject(slug) {
  return projectCapabilities[slug] || [];
}
