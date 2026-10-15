import { capabilityLabels, capabilitiesForProject } from "../data/projectCapabilities.js";
import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";

const sortOptions = [
  { value: "priority", label: "Portfolio emphasis" },
  { value: "title", label: "Title" },
  { value: "timeline", label: "Timeline" },
];

const stageOptions = [
  { value: "all", label: "All emphasis levels" },
  { value: "featured", label: "Active" },
  { value: "supporting", label: "Supported" },
  { value: "background", label: "Background" },
];

function projectSearchText(project) {
  return [
    project.title,
    project.description,
    project.category,
    capabilitiesForProject(project.slug).map((key) => capabilityLabels[key]).join(" "),
    project.status,
    project.role,
    project.tools.join(" "),
    project.evidence.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

export function CaseStudiesPage({ content }) {
  const { caseStudyCategories, listedProjects } = content;
  const [capability, setCapability] = useState("all");
  const [category, setCategory] = useState("all");
  const [stage, setStage] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("priority");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return listedProjects
      .filter((project) => capability === "all" || capabilitiesForProject(project.slug).includes(capability))
      .filter((project) => (category === "all" ? true : project.category === category))
      .filter((project) => (stage === "all" ? true : project.stage === stage))
      .filter((project) => (normalizedQuery ? projectSearchText(project).includes(normalizedQuery) : true))
      .sort((first, second) => {
        if (sort === "title") return first.title.localeCompare(second.title);
        if (sort === "timeline") return second.timeline.localeCompare(first.timeline) || first.priority - second.priority;
        return first.priority - second.priority;
      });
  }, [listedProjects, capability, category, query, sort, stage]);

  return (
    <main id="main-content" className="bg-paper">
      <section className="border-b border-ink/15 bg-paper px-4 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Link className="editorial-link" href="/">
            Back home
          </Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">Case studies</p>
              <h1 className="display-type mt-3 text-[clamp(3.5rem,8vw,8rem)] leading-[0.86]">Projects with a point of view.</h1>
            </div>
            <p className="text-lg font-bold leading-8 text-muted">
              Independent applications and prototypes, ordered to introduce my work. Explore by capability, subject, or current status to explore the projects most relevant to you.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="editorial-panel p-5">
          <fieldset className="mb-6 border-b border-ink/20 pb-6">
            <legend className="mb-3 text-sm font-bold">Explore by capability</legend>
            <div className="flex flex-wrap gap-3">
              {[["all", "All capabilities"], ...Object.entries(capabilityLabels)].map(([key, label]) => (
                <button key={key} type="button" aria-pressed={capability === key}
                  className={`rounded-full border px-4 py-3 text-sm font-bold ${capability === key ? "border-portfolioBlue bg-portfolioBlue text-white" : "border-ink/25 bg-white text-ink hover:border-portfolioBlue"}`}
                  onClick={() => setCapability(key)}>{label}</button>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">Projects can demonstrate more than one capability. Filtering preserves your selected sort order.</p>
          </fieldset>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Search projects, tools, evidence</span>
              <span className="mt-2 flex min-h-12 items-center gap-2 border border-ink/30 bg-white/70 px-3">
                <Search size={18} />
                <input
                  className="w-full bg-transparent font-bold outline-none"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try Supabase, Astro, review queue..."
                />
              </span>
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Category</span>
              <select className="editorial-input" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="all">All categories</option>
                {caseStudyCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Emphasis</span>
              <select className="editorial-input" value={stage} onChange={(event) => setStage(event.target.value)}>
                {stageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Sort</span>
              <select className="editorial-input" value={sort} onChange={(event) => setSort(event.target.value)}>
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p role="status" aria-live="polite" className="mt-4 text-sm font-black uppercase text-ink/60">
            Showing {filteredProjects.length} of {listedProjects.length} visible case studies
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="editorial-panel mt-8 p-8 text-center">
            <h2 className="display-type text-4xl leading-none">No case studies match those filters yet.</h2>
            <p className="mt-3 font-semibold text-muted">Clear a filter or search for a broader tool, category, or project name.</p>
            <button type="button" className="paper-tab mt-5" onClick={() => { setCapability("all"); setCategory("all"); setStage("all"); setQuery(""); }}>Clear all filters</button>
          </div>
        ) : null}
      </section>
    </main>
  );
}

