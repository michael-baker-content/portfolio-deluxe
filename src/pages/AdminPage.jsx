import React, { useMemo, useState } from "react";
import { deriveContent } from "../lib/contentModel.js";
import { sanitizeContent } from "../lib/sanitizeContent.js";

function linesToArray(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function arrayToLines(value) {
  return Array.isArray(value) ? value.join("\n") : "";
}

function updateProject(projects, slug, updates) {
  return projects.map((project) => (project.slug === slug ? { ...project, ...updates } : project));
}

export function AdminPage({ defaultContent }) {
  const [adminToken, setAdminToken] = useState("");
  const [content, setContent] = useState(defaultContent);
  const [selectedSlug, setSelectedSlug] = useState(defaultContent.projects[0]?.slug || "");
  const [status, setStatus] = useState("Use your admin token to save content changes.");

  const derived = useMemo(() => deriveContent(content), [content]);
  const selectedProject = content.projects.find((project) => project.slug === selectedSlug) || content.projects[0];

  const updateProfile = (section, field, value) => {
    setContent((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [section]: {
          ...current.profile[section],
          [field]: value,
        },
      },
    }));
  };

  const updateProjectField = (field, value) => {
    setContent((current) => ({
      ...current,
      projects: updateProject(current.projects, selectedProject.slug, { [field]: value }),
    }));
  };

  const loadStoredContent = async () => {
    setStatus("Loading saved content...");
    const response = await fetch("/api/content");

    if (!response.ok) {
      setContent(defaultContent);
      setStatus("No saved backend content yet. Loaded code defaults.");
      return;
    }

    const payload = await response.json();
    if (payload.content) {
      setContent(payload.content);
      setSelectedSlug(payload.content.projects?.[0]?.slug || "");
      setStatus("Loaded saved backend content.");
    } else {
      setContent(defaultContent);
      setSelectedSlug(defaultContent.projects?.[0]?.slug || "");
      setStatus("No saved backend content yet. Loaded code defaults.");
    }
  };

  const saveContent = async () => {
    setStatus("Saving content...");
    const safeContent = sanitizeContent(content);
    const response = await fetch("/api/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": adminToken,
      },
      body: JSON.stringify({ content: safeContent }),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      setStatus(payload.error || "Save failed.");
      return;
    }

    setContent(safeContent);
    setStatus("Saved. Refresh the public site to see the latest content.");
  };

  const downloadContent = () => {
    const blob = new Blob([`${JSON.stringify(content, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-content.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main id="main-content" className="bg-paper px-4 py-10 sm:px-8 lg:px-14">
      <section className="mx-auto max-w-7xl">
        <p className="eyebrow">Admin</p>
        <h1 className="mt-2 text-[clamp(2.5rem,7vw,6rem)] font-black leading-none">Content dashboard</h1>
        <p className="mt-4 max-w-3xl text-lg font-bold leading-8 text-muted">
          Edit homepage copy and case-study content without opening the code editor. Changes save to Vercel Blob and the public site loads them at runtime.
        </p>

        <div className="mt-8 grid gap-4 rounded-lg border-2 border-ink bg-white p-5 shadow-hard lg:grid-cols-[1fr_auto_auto_auto] lg:items-end">
          <label className="block">
            <span className="text-xs font-black uppercase text-ink/65">Admin token</span>
            <input
              className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold outline-none focus:bg-white"
              type="password"
              value={adminToken}
              onChange={(event) => setAdminToken(event.target.value)}
              placeholder="Set this as ADMIN_TOKEN in Vercel"
            />
          </label>
          <button className="button bg-cream" type="button" onClick={loadStoredContent}>
            Load saved
          </button>
          <button className="button bg-cream" type="button" onClick={downloadContent}>
            Download JSON
          </button>
          <button className="button bg-chartreuse" type="button" onClick={saveContent} disabled={!adminToken}>
            Save changes
          </button>
        </div>

        <p className="mt-4 rounded-lg border border-ink/20 bg-cream px-4 py-3 font-bold text-muted" aria-live="polite">
          {status}
        </p>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border-2 border-ink bg-white p-5 shadow-hard">
            <p className="eyebrow">Homepage copy</p>
            <h2 className="mt-2 text-3xl font-black leading-none">Core page story</h2>
            <TextField label="Hero eyebrow" value={content.profile.hero.eyebrow} placeholder="A compact positioning line" onChange={(value) => updateProfile("hero", "eyebrow", value)} />
            <TextField label="Hero title" value={content.profile.hero.title} placeholder="Your main portfolio promise" onChange={(value) => updateProfile("hero", "title", value)} />
            <TextArea label="Hero description" value={content.profile.hero.description} placeholder="Two or three sentences about what you build and why it matters." onChange={(value) => updateProfile("hero", "description", value)} />
            <TextField label="Candidate section title" value={content.profile.lineage.title} placeholder="A candidate-focused section headline" onChange={(value) => updateProfile("lineage", "title", value)} />
            <TextArea label="Candidate section description" value={content.profile.lineage.description} placeholder="Describe the strengths, background, and judgment you want visitors to notice." onChange={(value) => updateProfile("lineage", "description", value)} />
            <TextField label="Working style title" value={content.profile.creativePosition.title} placeholder="A headline about how you approach work" onChange={(value) => updateProfile("creativePosition", "title", value)} />
            <TextArea
              label="Working style paragraphs"
              value={arrayToLines(content.profile.creativePosition.paragraphs)}
              placeholder={"One paragraph per line.\nKeep each one focused on a specific work habit or point of view."}
              onChange={(value) =>
                setContent((current) => ({
                  ...current,
                  profile: {
                    ...current.profile,
                    creativePosition: {
                      ...current.profile.creativePosition,
                      paragraphs: linesToArray(value),
                    },
                  },
                }))
              }
            />
          </div>

          <div className="rounded-lg border-2 border-ink bg-white p-5 shadow-hard">
            <p className="eyebrow">Case studies</p>
            <h2 className="mt-2 text-3xl font-black leading-none">Project content</h2>
            <label className="mt-5 block">
              <span className="text-xs font-black uppercase text-ink/65">Project</span>
              <select className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold" value={selectedProject.slug} onChange={(event) => setSelectedSlug(event.target.value)}>
                {content.projects.map((project) => (
                  <option key={project.slug} value={project.slug}>
                    {project.title}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <TextField label="Title" value={selectedProject.title} placeholder="Public case-study title" onChange={(value) => updateProjectField("title", value)} />
              <TextField label="Status tag" value={selectedProject.status} placeholder="Prototype, Live project, Archive..." onChange={(value) => updateProjectField("status", value)} />
              <TextField label="Category" value={selectedProject.category} placeholder="Content system, dashboard, learning platform..." onChange={(value) => updateProjectField("category", value)} />
              <TextField label="Priority" type="number" value={String(selectedProject.priority)} placeholder="Lower numbers appear first" onChange={(value) => updateProjectField("priority", Number(value))} />
              <label className="block">
                <span className="text-xs font-black uppercase text-ink/65">Visibility</span>
                <select className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold" value={selectedProject.visibility} onChange={(event) => updateProjectField("visibility", event.target.value)}>
                  <option value="listed">Listed</option>
                  <option value="hidden">Hidden</option>
                </select>
              </label>
              <TextField label="Timeline" value={selectedProject.timeline || ""} placeholder="2026, Spring 2026, Ongoing..." onChange={(value) => updateProjectField("timeline", value)} />
            </div>

            <TextArea label="Card description" value={selectedProject.description} placeholder="A short card blurb that explains why this project is worth opening." onChange={(value) => updateProjectField("description", value)} />
            <TextArea label="Summary" value={selectedProject.summary} placeholder="The top-level story for the detail page." onChange={(value) => updateProjectField("summary", value)} />
            <TextArea label="Problem" value={selectedProject.problem} placeholder="What was unclear, broken, missing, or worth improving?" onChange={(value) => updateProjectField("problem", value)} />
            <TextArea label="Outcome" value={selectedProject.outcome} placeholder="What changed because this project exists?" onChange={(value) => updateProjectField("outcome", value)} />
            <TextField label="Card image URL" value={selectedProject.cardImage?.src || ""} placeholder="https://images.example.com/project.jpg" onChange={(value) => updateProjectField("cardImage", { ...(selectedProject.cardImage || {}), src: value })} />
            <TextField label="Card image alt text" value={selectedProject.cardImage?.alt || ""} placeholder="Describe the image for people who cannot see it." onChange={(value) => updateProjectField("cardImage", { ...(selectedProject.cardImage || {}), alt: value })} />
            <TextArea label="Evidence tags, one per line" value={arrayToLines(selectedProject.evidence)} placeholder={"React\nContent model\nAdmin workflow"} onChange={(value) => updateProjectField("evidence", linesToArray(value))} />
            <TextArea label="Tools, one per line" value={arrayToLines(selectedProject.tools)} placeholder={"React\nVite\nVercel"} onChange={(value) => updateProjectField("tools", linesToArray(value))} />
          </div>
        </section>

        <section className="mt-8 rounded-lg border-2 border-ink bg-cream p-5 shadow-hard">
          <p className="eyebrow">Preview counts</p>
          <p className="mt-2 font-black">
            {derived.listedProjects.length} public case studies across {derived.caseStudyCategories.length} categories.
          </p>
        </section>
      </section>
    </main>
  );
}

function TextField({ label, onChange, placeholder = "", type = "text", value }) {
  return (
    <label className="mt-5 block">
      <span className="text-xs font-black uppercase text-ink/65">{label}</span>
      <input
        className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold outline-none focus:bg-white"
        type={type}
        value={value}
        maxLength={type === "number" ? undefined : 1000}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextArea({ label, onChange, placeholder = "", value }) {
  return (
    <label className="mt-5 block">
      <span className="text-xs font-black uppercase text-ink/65">{label}</span>
      <textarea
        className="mt-2 min-h-28 w-full resize-y rounded-lg border-2 border-ink bg-cream px-3 py-3 font-bold outline-none focus:bg-white"
        value={value}
        maxLength="5000"
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
