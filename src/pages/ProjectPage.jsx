import { ArrowLeft, ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "../components/Link.jsx";

const toneClasses = {
  spotlight: "bg-[linear-gradient(135deg,#fffaf1_0%,#f7f0cf_58%,rgba(200,216,75,0.42)_100%)]",
  coral: "bg-[linear-gradient(135deg,#fffaf1_0%,#fff1ec_58%,rgba(242,107,87,0.28)_100%)]",
  gold: "bg-[linear-gradient(135deg,#fffaf1_0%,#fff3d6_58%,rgba(210,154,37,0.25)_100%)]",
  blue: "bg-[linear-gradient(135deg,#fffaf1_0%,#edf6f8_58%,rgba(142,199,223,0.38)_100%)]",
};

export function ProjectPage({ content, slug }) {
  const project = content.projectBySlug(slug);

  if (!project) {
    return (
      <main id="main-content" className="page-shell-narrow grid min-h-[70vh] place-items-center py-20">
        <div className="editorial-panel p-8">
          <p className="eyebrow">Missing project</p>
          <h1 className="display-type mt-2 text-5xl leading-none">This case study does not exist yet.</h1>
          <Link className="button mt-8 bg-coral" href="/">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content">
      <section className={`border-b border-ink/15 ${toneClasses[project.tone]} px-4 py-20 sm:px-8 lg:px-14`}>
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <Link className="editorial-link items-center gap-2" href="/">
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>
            <p className="eyebrow mt-10">{project.label}</p>
            <h1 className="display-type mt-3 text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.84]">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-[#3f3835]">{project.summary}</p>
          </div>
          <aside className="editorial-panel p-6">
            <p className="eyebrow">Role</p>
            <p className="mt-2 font-black leading-6">{project.role}</p>
            {project.timeline ? (
              <>
                <p className="eyebrow mt-6">Timeline</p>
                <p className="mt-2 font-black leading-6">{project.timeline}</p>
              </>
            ) : null}
            <p className="eyebrow mt-6">Status</p>
            <p className="mt-2 font-black leading-6">{project.status}</p>
            {project.collaborators?.length ? (
              <>
                <p className="eyebrow mt-6">Collaborators</p>
                <p className="mt-2 font-black leading-6">{project.collaborators.join(", ")}</p>
              </>
            ) : null}
            {project.tools?.length ? (
              <>
                <p className="eyebrow mt-6">Tools</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tools">
                  {project.tools.map((tool) => (
                    <li className="border-b border-ink/20 pb-0.5 text-xs font-black uppercase tracking-[0.14em] text-ink/65" key={tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Evidence">
              {project.evidence.map((item) => (
                <li className="bg-white/55 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-ink/65" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {project.appHref || project.repoHref ? (
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                {project.appHref ? (
                  <a className="editorial-link items-center gap-2" href={project.appHref}>
                    Open project
                    <ExternalLink size={16} />
                  </a>
                ) : null}
                {project.repoHref ? (
                  <a className="editorial-link items-center gap-2" href={project.repoHref}>
                    View repository
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {project.metrics?.length ? (
        <section className="page-shell grid gap-4 border-b border-ink/20 py-10 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <article className="editorial-card p-5" key={metric.label}>
              <p className="eyebrow">{metric.label}</p>
              <p className="display-type mt-2 text-4xl leading-none">{metric.value}</p>
            </article>
          ))}
        </section>
      ) : null}

      <section className="page-shell grid gap-5 py-16 md:grid-cols-3">
        <CaseBlock title="Problem" body={project.problem} />
        <CaseBlock title="Outcome" body={project.outcome} />
        <CaseBlock title="Why It Matters" body={project.description} />
      </section>

      <section className="page-shell grid gap-8 border-t border-ink/20 py-16 md:grid-cols-2">
        <ListBlock title="Product Decisions" items={project.decisions} />
        <ListBlock title="Next Steps" items={project.nextSteps} />
      </section>

      {project.sections?.length ? (
        <section className="page-shell border-t border-ink/20 py-16">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Case study sections</p>
            <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">The fuller story.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {project.sections.map((section) => (
              <CaseBlock key={section.title} title={section.title} body={section.body} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function CaseBlock({ title, body }) {
  return (
    <article className="editorial-card p-5">
      <p className="eyebrow">{title}</p>
      <p className="mt-3 font-semibold leading-7 text-muted">{body}</p>
    </article>
  );
}

function ListBlock({ title, items }) {
  return (
    <section>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li className="border-l border-ink/30 bg-white/70 p-4 font-bold leading-7 shadow-[0_10px_35px_rgba(32,29,29,0.05)]" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
