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
  const [category, setCategory] = useState("all");
  const [stage, setStage] = useState("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("priority");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return listedProjects
      .filter((project) => (category === "all" ? true : project.category === category))
      .filter((project) => (stage === "all" ? true : project.stage === stage))
      .filter((project) => (normalizedQuery ? projectSearchText(project).includes(normalizedQuery) : true))
      .sort((first, second) => {
        if (sort === "title") return first.title.localeCompare(second.title);
        if (sort === "timeline") return second.timeline.localeCompare(first.timeline) || first.priority - second.priority;
        return first.priority - second.priority;
      });
  }, [category, query, sort, stage]);

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
              The index now leads with the projects I am actively building, keeps supported work easy to find, and moves lesson-rich experiments into the background without burying them.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="editorial-panel p-5">
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

          <p className="mt-4 text-sm font-black uppercase text-ink/60">
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
          </div>
        ) : null}
      </section>
    </main>
  );
}
