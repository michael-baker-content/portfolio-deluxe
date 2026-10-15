import React from "react";
import { Link } from "../components/Link.jsx";

export function ExperiencePage({ content }) {
  const { profile, capabilities } = content;

  return (
    <main id="main-content">
      <section className="border-b border-ink/15 bg-paper py-16 md:py-24">
        <div className="page-shell">
          <Link className="editorial-link" href="/">Back home</Link>
          <p className="eyebrow mt-10">Professional experience</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.02]">Content work, from first draft to publication.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">{profile.lineage.description}</p>
          <p className="mt-5 max-w-3xl leading-7 text-muted">This is an overview of my professional responsibilities. The independent projects elsewhere on this site show how I apply that experience to building applications.</p>
        </div>
      </section>

      <section className="page-shell py-16" aria-labelledby="experience-areas">
        <p className="eyebrow">Areas of experience</p>
        <h2 id="experience-areas" className="mt-3 text-4xl md:text-5xl">What the work involves.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.lineage.beats.map((beat) => (
            <article className="editorial-card p-6 md:p-8" key={beat.from}>
              <h3 className="text-3xl">{beat.from}</h3>
              <p className="mt-4 leading-7 text-muted">{beat.to}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/15 bg-white/60 py-16" aria-labelledby="experience-practice">
        <div className="page-shell">
          <p className="eyebrow">In practice</p>
          <h2 id="experience-practice" className="mt-3 max-w-3xl text-4xl md:text-5xl">Publishing involves more than the page.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {capabilities.filter((item) => item.category !== "Technical").map((item) => (
              <article className="border-t border-ink/25 pt-5" key={item.title}>
                <h3 className="text-3xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted">{item.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-8 py-16 md:grid-cols-2">
        <div>
          <p className="eyebrow">Independent projects</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Putting that experience to work in software.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-muted">
          <p>Sketchlet brings drawing tools, a drawing-tool guide, and a separate practice canvas together. BakerParks combines public information, filtering, and my own photography. My hobby tools explore how to make complex rules and statistics easier to use.</p>
          <p>These are independent applications and prototypes, with their own constraints and lessons. Their case studies describe the work and what remains to be developed.</p>
          <div className="flex flex-wrap gap-5">
            <Link className="editorial-link" href="/#work">See selected projects</Link>
            <Link className="editorial-link" href="/#contact">Talk about a role</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
