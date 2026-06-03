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
  assert.equal(content.projects[0].slug, "bad-project");
  assert.equal(content.projects[0].detailHref, "/projects/bad-project");
  assert.equal(content.projects[0].appHref, "");
  assert.equal(content.projects[0].repoHref, "https://github.com/example/repo");
  assert.equal(content.projects[0].cardImage, null);
  assert.deepEqual(content.projects[0].evidence, ["React"]);
  assert.deepEqual(content.projects[0].tools, []);
});
