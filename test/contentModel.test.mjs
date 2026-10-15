import test from "node:test";
import assert from "node:assert/strict";
import { deriveContent, normalizeContent } from "../src/lib/contentModel.js";

test("deriveContent hides draft projects and sorts listed projects by priority", () => {
  const content = deriveContent({
    projects: [
      { slug: "later", title: "Later", priority: 20, visibility: "listed", category: "Build" },
      { slug: "draft", title: "Draft", priority: 1, visibility: "hidden", category: "Draft" },
      { slug: "first", title: "First", priority: 5, visibility: "listed", category: "Build" },
    ],
  });

  assert.deepEqual(
    content.listedProjects.map((project) => project.slug),
    ["first", "later"],
  );
  assert.equal(content.projectBySlug("draft").title, "Draft");
});

test("normalizeContent falls back to default content when saved content is incomplete", () => {
  const content = normalizeContent({ profile: { hero: { title: "Custom title" } } });

  assert.equal(content.profile.hero.title, "Custom title");
  assert.ok(content.projects.length > 0);
  assert.ok(content.capabilities.length > 0);
});

test("deriveContent restores fragmented decision and next-step copy for any case study", () => {
  const content = deriveContent({
    projects: [
      {
        slug: "portfolio",
        title: "Portfolio Case Study",
        priority: 50,
        visibility: "listed",
        category: "Portfolio system",
        decisions: ["I", "I g"],
        nextSteps: ["I"],
      },
      {
        slug: "bakerlinks",
        title: "BakerLinks",
        priority: 20,
        visibility: "listed",
        category: "Publishing platform",
        decisions: ["B"],
        nextSteps: ["N"],
      },
    ],
  });

  assert.match(content.projectBySlug("portfolio").decisions[0], /Preserve the 1\.0 portfolio pattern/);
  assert.match(content.projectBySlug("portfolio").nextSteps[0], /visual timeline/);
  assert.match(content.projectBySlug("bakerlinks").decisions[0], /Supabase/);
  assert.match(content.projectBySlug("bakerlinks").nextSteps[0], /foundation for my own social media links site/);
});

test("deriveContent restores default emphasis stage for saved project content", () => {
  const content = deriveContent({
    projects: [
      {
        slug: "mikeslist",
        title: "Mike's List",
        priority: 10,
        visibility: "listed",
        category: "Local discovery",
      },
      {
        slug: "notion-clean",
        title: "Notion Archive Cleaner",
        priority: 120,
        visibility: "listed",
        category: "Workflow utility",
      },
    ],
  });

  assert.equal(content.projectBySlug("mikeslist").stage, "background");
  assert.equal(content.projectBySlug("making-tools").stage, "supporting");
  assert.equal(content.projectBySlug("notion-clean").stage, "background");
  assert.equal(content.projectBySlug("sketchlet").stage, "featured");
  assert.equal(content.projectBySlug("bakerparks").stage, "featured");
  assert.deepEqual(
    content.listedProjects.slice(0, 5).map((project) => project.slug),
    ["sketchlet", "mikeslist", "bakerparks", "bakerlinks", "making-tools"],
  );
});

test("deriveContent preserves explicit saved emphasis stages", () => {
  const content = deriveContent({
    projects: [
      {
        slug: "mikeslist",
        title: "Mike's List",
        stage: "featured",
        priority: 10,
        visibility: "listed",
        category: "Local discovery",
      },
    ],
  });

  assert.equal(content.projectBySlug("mikeslist").stage, "featured");
});


test("active status does not override the chosen project order", () => {
  const content = deriveContent();
  assert.deepEqual(content.listedProjects.slice(0, 6).map((project) => project.slug),
    ["sketchlet", "bakerparks", "bakerlinks", "making-tools", "mikeslist", "portfolio"]);
  assert.equal(content.projectBySlug("portfolio").stage, "featured");
});
