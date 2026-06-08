import test from "node:test";
import assert from "node:assert/strict";
import { cleanUrl, sanitizeContent } from "../src/lib/sanitizeContent.js";

test("cleanUrl allows safe public links and strips script URLs", () => {
  assert.equal(cleanUrl("https://example.com/path"), "https://example.com/path");
  assert.equal(cleanUrl("mailto:test@example.com"), "mailto:test@example.com");
  assert.equal(cleanUrl("/case-studies"), "/case-studies");
  assert.equal(cleanUrl("javascript:alert(1)"), "");
  assert.equal(cleanUrl("data:text/html,<script>alert(1)</script>"), "");
});

test("sanitizeContent cleans project URLs, image URLs, slugs, and arrays", () => {
  const content = sanitizeContent({
    profile: {
      links: [{ label: "Bad link", href: "javascript:alert(1)" }],
      contactForm: { endpoint: "https://formspree.io/f/example" },
    },
    audienceSignals: [{ label: "Signal", text: "Useful context" }, "Legacy signal"],
    projects: [
      {
        slug: "Bad Project!!",
        appHref: "javascript:alert(1)",
        repoHref: "https://github.com/example/repo",
        cardImage: { src: "javascript:alert(1)", alt: "Bad image" },
        evidence: ["React", "", null],
        tools: "not an array",
      },
    ],
  });

  assert.equal(content.profile.links[0].href, "");
  assert.equal(content.profile.contactForm.endpoint, "https://formspree.io/f/example");
  assert.deepEqual(content.audienceSignals, [
    { label: "Signal", text: "Useful context" },
    { label: "Signal", text: "Legacy signal" },
  ]);
  assert.equal(content.projects[0].slug, "bad-project");
  assert.equal(content.projects[0].detailHref, "/projects/bad-project");
  assert.equal(content.projects[0].appHref, "");
  assert.equal(content.projects[0].repoHref, "https://github.com/example/repo");
  assert.equal(content.projects[0].cardImage, null);
  assert.deepEqual(content.projects[0].evidence, ["React"]);
  assert.deepEqual(content.projects[0].tools, []);
});

test("sanitizeContent migrates legacy Mike's List project content", () => {
  const content = sanitizeContent({
    projects: [
      {
        slug: "music",
        title: "Bay Area Show Explorer",
        appHref: "../Music/index.html",
        repoHref: "https://github.com/michael-baker-content/bay-area-music-calendar",
      },
    ],
  });

  assert.equal(content.projects[0].slug, "mikeslist");
  assert.equal(content.projects[0].detailHref, "/projects/mikeslist");
  assert.equal(content.projects[0].title, "Mike's List");
  assert.equal(content.projects[0].appHref, "https://mikeslist.xyz/");
  assert.equal(content.projects[0].repoHref, "https://github.com/michael-baker-content/mikeslist");
});

test("sanitizeContent replaces fragmented Mike's List decision copy", () => {
  const content = sanitizeContent({
    projects: [
      {
        slug: "mikeslist",
        title: "Mike's List",
        decisions: ["I", "I", "I g", "I mo"],
        nextSteps: ["I", "I"],
      },
    ],
  });

  assert.equal(content.projects[0].decisions.length, 5);
  assert.equal(content.projects[0].nextSteps.length, 3);
  assert.match(content.projects[0].decisions[0], /imported show listing/);
  assert.match(content.projects[0].nextSteps[0], /event identity model/);
});

test("sanitizeContent migrates legacy Bakerversity project content", () => {
  const content = sanitizeContent({
    projects: [
      {
        slug: "bakeruniversity",
        title: "Baker University",
        appHref: "https://bakeruniversity.vercel.app",
        repoHref: "https://github.com/michael-baker-content/bakeruniversity",
      },
    ],
  });

  assert.equal(content.projects[0].slug, "bakerversity");
  assert.equal(content.projects[0].detailHref, "/projects/bakerversity");
  assert.equal(content.projects[0].title, "Bakerversity");
  assert.equal(content.projects[0].appHref, "https://bakerversity.vercel.app/");
  assert.equal(content.projects[0].repoHref, "https://github.com/michael-baker-content/bakerversity");
});

test("sanitizeContent only keeps Codex as a collaborator for allowed case studies", () => {
  const content = sanitizeContent({
    projects: [
      { slug: "portfolio", collaborators: ["Michael Baker", "Codex"] },
      { slug: "mikeslist", collaborators: ["Michael Baker", "Codex"] },
      { slug: "bakerversity", collaborators: ["Michael Baker", "Codex"] },
    ],
  });

  assert.deepEqual(content.projects[0].collaborators, ["Michael Baker", "Codex"]);
  assert.deepEqual(content.projects[1].collaborators, ["Michael Baker", "Codex"]);
  assert.deepEqual(content.projects[2].collaborators, ["Michael Baker"]);
});
