import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";

const sortOptions = [
  { value: "priority", label: "Portfolio priority" },
  { value: "title", label: "Title" },
  { value: "timeline", label: "Timeline" },
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
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("priority");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return listedProjects
      .filter((project) => (category === "all" ? true : project.category === category))
      .filter((project) => (normalizedQuery ? projectSearchText(project).includes(normalizedQuery) : true))
      .sort((first, second) => {
        if (sort === "title") return first.title.localeCompare(second.title);
        if (sort === "timeline") return second.timeline.localeCompare(first.timeline) || first.priority - second.priority;
        return first.priority - second.priority;
      });
  }, [category, query, sort]);

  return (
    <main id="main-content" className="bg-paper">
      <section className="border-b border-ink/15 bg-cream px-4 py-16 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <Link className="inline-flex border-b-[3px] border-ink text-sm font-black no-underline" href="/">
            Back home
          </Link>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">Case studies</p>
              <h1 className="mt-2 text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-none">Projects with a point of view.</h1>
            </div>
            <p className="text-lg font-bold leading-8 text-muted">
              These builds make the technical side of my work visible: what sparked each project, how it works, and what decisions shaped it.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10">
        <div className="rounded-lg border-2 border-ink bg-white p-5 shadow-hard">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Search projects, tools, evidence</span>
              <span className="mt-2 flex min-h-12 items-center gap-2 rounded-lg border-2 border-ink bg-cream px-3">
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
              <select className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="all">All categories</option>
                {caseStudyCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-black uppercase text-ink/65">Sort</span>
              <select className="mt-2 min-h-12 w-full rounded-lg border-2 border-ink bg-cream px-3 font-bold" value={sort} onChange={(event) => setSort(event.target.value)}>
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
          <div className="mt-8 rounded-lg border-2 border-ink bg-cream p-8 text-center shadow-hard">
            <h2 className="text-2xl font-black">No case studies match those filters yet.</h2>
            <p className="mt-3 font-semibold text-muted">Clear a filter or search for a broader tool, category, or project name.</p>
          </div>
        ) : null}
      </section>
    </main>
  );
}
