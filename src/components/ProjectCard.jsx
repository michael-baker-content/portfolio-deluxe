import { capabilityLabels, capabilitiesForProject } from "../data/projectCapabilities.js";
import React from "react";
import { Link } from "./Link.jsx";

const accentClasses = {
  spotlight: "before:bg-chartreuse",
  coral: "before:bg-coral",
  gold: "before:bg-gold",
  blue: "before:bg-sky",
};

const stageLabels = {
  featured: "Active",
  supporting: "Supported",
  background: "Background",
  template: "Template",
};

export function ProjectCard({ project }) {
  const isBackground = project.stage === "background";

  return (
    <article className={`editorial-card relative flex min-h-80 flex-col justify-between overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1.5 ${isBackground ? "opacity-[0.84]" : ""} ${accentClasses[project.tone] || "before:bg-ink"}`}>
      <div>
        {project.cardImage ? (
          <div className="aspect-[2.35/1] border-b border-ink/15 bg-white">
            <img className="h-full w-full object-cover object-center grayscale-[18%] saturate-[0.82] transition duration-300 hover:grayscale-0 hover:saturate-100" src={project.cardImage.src} alt={project.cardImage.alt} loading="lazy" />
          </div>
        ) : null}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <p className="eyebrow">{project.label}</p>
            <span className="border-l border-ink/20 pl-2 text-xs font-black uppercase tracking-[0.16em] text-ink/55">
              {project.emphasisLabel || stageLabels[project.stage] || project.status}
            </span>
          </div>
          <h3 className="display-type mt-3 text-3xl leading-[0.98] md:text-4xl">{project.title}</h3>
          <p className="mt-4 font-semibold leading-7 text-muted">{project.description}</p>
          {capabilitiesForProject(project.slug).length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} capabilities`}>
              {capabilitiesForProject(project.slug).map((key) => <li className="rounded bg-portfolioBlue/10 px-2 py-1 text-xs font-bold text-portfolioBlue" key={key}>{capabilityLabels[key]}</li>)}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="p-6 pt-2">
        <ul className="flex flex-wrap gap-x-3 gap-y-2" aria-label={`${project.title} evidence`}>
          <li className="border-b border-portfolioBlue/35 pb-0.5 text-xs font-black uppercase tracking-[0.14em] text-portfolioBlue">
            {project.status}
          </li>
          {project.evidence.map((item) => (
            <li key={item} className="border-b border-ink/20 pb-0.5 text-xs font-black uppercase tracking-[0.14em] text-ink/60">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link className="editorial-link" href={project.detailHref}>
            Read case study
          </Link>
          {project.appHref ? (
            <a className="editorial-link border-ink/35 text-ink/70" href={project.appHref}>
              Open app
            </a>
          ) : null}
          {project.repoHref ? (
            <a className="editorial-link border-ink/35 text-ink/70" href={project.repoHref}>
              View repo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
