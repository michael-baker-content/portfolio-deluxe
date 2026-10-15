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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <Link className="editorial-link items-center gap-2" href="/">
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>
            <p className="eyebrow mt-10">{project.label}</p>
            <h1 className="display-type mt-3 break-words text-[clamp(2.75rem,7vw,6rem)] leading-[1.02]">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
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

      <section className="page-shell grid gap-10 py-12 md:grid-cols-2 md:py-16" aria-label="Project overview">
        <OverviewBlock title="The challenge" body={project.problem} />
        <OverviewBlock title="Where it stands" body={project.outcome} />
      </section>

      {project.metrics?.length ? (
        <dl className="page-shell grid gap-5 border-t border-ink/15 py-8 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-sm font-bold text-muted">{metric.label}</dt>
              <dd className="mt-2 text-2xl font-bold">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {project.sections?.length ? (
        <section className="page-shell border-t border-ink/20 py-12 md:py-16" aria-labelledby="project-story">
          <p className="eyebrow">Inside the work</p>
          <h2 id="project-story" className="mt-3 text-4xl leading-tight md:text-5xl">Decisions and tradeoffs.</h2>
          <div className="mt-10 divide-y divide-ink/15">
            {project.sections.map((section, index) => (
              <article className="grid gap-4 py-8 first:pt-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12" key={section.title}>
                <div>
                  <p className="mb-3 text-sm font-bold text-portfolioBlue" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-2xl leading-tight md:text-3xl">{section.title}</h3>
                </div>
                <p className="max-w-[65ch] text-lg leading-8 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
          {project.decisions?.length ? (
            <details className="mt-6 border-y border-ink/20 py-5">
              <summary className="cursor-pointer text-base font-bold text-portfolioBlue">Decision summary</summary>
              <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 leading-7 text-muted">
                {project.decisions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </details>
          ) : null}
        </section>
      ) : project.decisions?.length ? (
        <section className="page-shell border-t border-ink/20 py-12">
          <ListBlock title="Key decisions" items={project.decisions} />
        </section>
      ) : null}

      {project.nextSteps?.length ? (
        <section className="border-y border-ink/15 bg-white/60 py-12 md:py-16">
          <div className="page-shell">
            <ListBlock title="What comes next" items={project.nextSteps} />
          </div>
        </section>
      ) : null}
      <nav className="page-shell flex flex-wrap gap-6 py-10" aria-label="Continue exploring">
        <Link className="editorial-link" href="/case-studies">Browse all case studies</Link>
        <Link className="editorial-link" href="/#contact">Talk about a role or project</Link>
      </nav>
    </main>
  );
}

function OverviewBlock({ title, body }) {
  return (
    <div>
      <h2 className="text-3xl leading-tight">{title}</h2>
      <p className="mt-4 max-w-[65ch] text-lg leading-8 text-muted">{body}</p>
    </div>
  );
}

function ListBlock({ title, items }) {
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
      <h2 className="text-3xl leading-tight md:text-4xl">{title}</h2>
      <ul className="max-w-[65ch] list-disc space-y-4 pl-5 text-lg leading-8 text-muted">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
