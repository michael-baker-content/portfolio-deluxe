import { ArrowLeft, ExternalLink } from "lucide-react";
import React from "react";
import { Link } from "../components/Link.jsx";
import { projectBySlug } from "../data/projects.js";

const toneClasses = {
  spotlight: "bg-chartreuse",
  coral: "bg-[#ffe0d9]",
  gold: "bg-[#ffe7a8]",
  blue: "bg-[#d9eef6]",
};

export function ProjectPage({ slug }) {
  const project = projectBySlug(slug);

  if (!project) {
    return (
      <main className="mx-auto grid min-h-[70vh] w-[min(900px,calc(100vw-32px))] place-items-center py-20">
        <div className="rounded-lg border-2 border-ink bg-cream p-8 shadow-hard">
          <p className="eyebrow">Missing project</p>
          <h1 className="mt-2 text-4xl font-black">This case study does not exist yet.</h1>
          <Link className="button mt-8 bg-coral" href="/">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className={`border-b-2 border-ink ${toneClasses[project.tone]} px-4 py-16 sm:px-8 lg:px-14`}>
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <Link className="inline-flex items-center gap-2 text-sm font-black no-underline" href="/">
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>
            <p className="eyebrow mt-10">{project.label}</p>
            <h1 className="mt-3 text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9]">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-[#3f3835]">{project.summary}</p>
          </div>
          <aside className="rounded-lg border-2 border-ink bg-white/60 p-5 shadow-hard">
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
                    <li className="rounded-full border border-ink/25 bg-white/60 px-3 py-1 text-xs font-black text-ink/75" key={tool}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Evidence">
              {project.evidence.map((item) => (
                <li className="rounded-full bg-white px-3 py-1 text-xs font-black text-ink/75" key={item}>
                  {item}
                </li>
              ))}
            </ul>
            {project.appHref ? (
              <a className="mt-7 inline-flex items-center gap-2 border-b-[3px] border-ink text-sm font-black no-underline" href={project.appHref}>
                Open project
                <ExternalLink size={16} />
              </a>
            ) : null}
            {project.repoHref ? (
              <a className="mt-4 inline-flex items-center gap-2 border-b-[3px] border-ink text-sm font-black no-underline" href={project.repoHref}>
                View repository
                <ExternalLink size={16} />
              </a>
            ) : null}
          </aside>
        </div>
      </section>

      {project.metrics?.length ? (
        <section className="mx-auto grid w-[min(1180px,calc(100vw-32px))] gap-4 border-b border-ink/20 py-10 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <article className="rounded-lg border-2 border-ink bg-cream p-5 shadow-hard" key={metric.label}>
              <p className="eyebrow">{metric.label}</p>
              <p className="mt-2 text-3xl font-black leading-none">{metric.value}</p>
            </article>
          ))}
        </section>
      ) : null}

      <section className="mx-auto grid w-[min(1180px,calc(100vw-32px))] gap-5 py-16 md:grid-cols-3">
        <CaseBlock title="Problem" body={project.problem} />
        <CaseBlock title="Outcome" body={project.outcome} />
        <CaseBlock title="Why It Matters" body={project.description} />
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100vw-32px))] gap-8 border-t border-ink/20 py-16 md:grid-cols-2">
        <ListBlock title="Product Decisions" items={project.decisions} />
        <ListBlock title="Next Steps" items={project.nextSteps} />
      </section>

      {project.sections?.length ? (
        <section className="mx-auto w-[min(1180px,calc(100vw-32px))] border-t border-ink/20 py-16">
          <div className="mb-7 max-w-3xl">
            <p className="eyebrow">Case study sections</p>
            <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">The fuller story.</h2>
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
    <article className="rounded-lg border-2 border-ink bg-white p-5 shadow-hard">
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
          <li className="rounded-lg border-2 border-ink bg-cream p-4 font-bold leading-7" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
