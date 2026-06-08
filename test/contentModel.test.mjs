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
  assert.match(content.projectBySlug("bakerlinks").nextSteps[0], /example public profiles/);
});
