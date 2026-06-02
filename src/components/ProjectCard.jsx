import React from "react";
import { Link } from "./Link.jsx";

const toneClasses = {
  spotlight: "bg-chartreuse",
  coral: "bg-[#ffe0d9]",
  gold: "bg-[#ffe7a8]",
  blue: "bg-[#d9eef6]",
};

export function ProjectCard({ project }) {
  return (
    <article className={`flex min-h-80 flex-col justify-between overflow-hidden rounded-lg border-2 border-ink shadow-hard ${toneClasses[project.tone]}`}>
      <div>
        {project.cardImage ? (
          <div className="aspect-[2/1] border-b-2 border-ink bg-white/45">
            <img className="h-full w-full object-cover object-center" src={project.cardImage.src} alt={project.cardImage.alt} loading="lazy" />
          </div>
        ) : null}
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2">
            <p className="eyebrow">{project.label}</p>
            <span className="rounded-full border border-ink/25 bg-white/45 px-2 py-1 text-xs font-black uppercase">
              {project.status}
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-black leading-none md:text-3xl">{project.title}</h3>
          <p className="mt-3 font-semibold leading-7 text-muted">{project.description}</p>
        </div>
      </div>

      <div className="p-5 pt-3">
        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} evidence`}>
          {project.evidence.map((item) => (
            <li key={item} className="rounded-full bg-white/50 px-3 py-1 text-xs font-black text-ink/75">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link className="inline-flex border-b-[3px] border-ink text-sm font-black no-underline transition hover:-translate-y-0.5" href={project.detailHref}>
            Read case study
          </Link>
          {project.appHref ? (
            <a className="inline-flex border-b-[3px] border-ink/40 text-sm font-black no-underline transition hover:-translate-y-0.5" href={project.appHref}>
              Open app
            </a>
          ) : null}
          {project.repoHref ? (
            <a className="inline-flex border-b-[3px] border-ink/40 text-sm font-black no-underline transition hover:-translate-y-0.5" href={project.repoHref}>
              View repo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
