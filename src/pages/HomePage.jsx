import React, { useEffect, useRef } from "react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";
import { audienceSignals, capabilities, profile, projects, services } from "../data/portfolio.js";

export function HomePage() {
  const titleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let ticking = false;
    const layers = document.querySelectorAll(".zoom-layer");

    const updateScale = () => {
      const scrollY = window.scrollY;
      const scrollPercent = Math.min(scrollY / (window.innerHeight * 0.5), 1);

      if (titleRef.current) {
        titleRef.current.style.backgroundImage = `linear-gradient(
            ${135 + scrollPercent * 45}deg,
            #1e1b4b 0%, 
            #1d4ed8 ${40 + scrollPercent * 20}%, 
            #7e22ce 100%
          )`;
      }

      if (!prefersReducedMotion) {
        layers.forEach((layer) => {
          const speed = parseFloat(layer.getAttribute("data-scale-speed") || "0");
          const scaleValue = 1 + ((scrollY * speed) / 400);
          layer.style.transform = `scale3d(${scaleValue}, ${scaleValue}, 1)`;
        });
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScale);
        ticking = true;
      }
    };

    updateScale();

    if (prefersReducedMotion) return;

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main id="top">
      <section className="relative w-full h-[150vh] motion-reduce:h-screen bg-neutral-950">
        <div className="sticky top-0 w-full h-screen overflow-hidden border-b border-white/45">

          {/* Screen-reader only description of the complete scene */}
          <span className="sr-only">{profile.hero.imageAlt}</span>

          {/* Individual fragmented layers hidden from assistive tech */}
          <img src="/assets/hero/sky.svg" className="absolute inset-0 w-full h-full object-cover opacity-85 select-none zoom-layer" data-scale-speed="0.05" alt="" aria-hidden="true" />
          <img src="/assets/hero/background.svg" className="absolute inset-0 w-full h-full object-cover opacity-85 select-none zoom-layer" data-scale-speed="0.25" alt="" aria-hidden="true" />
          <img src="/assets/hero/midground.svg" className="absolute inset-0 w-full h-full object-cover opacity-85 select-none zoom-layer" data-scale-speed="0.6" alt="" aria-hidden="true" />
          <img src="/assets/hero/foreground.svg" className="absolute inset-0 w-full h-full object-cover opacity-85 select-none zoom-layer" data-scale-speed="1.3" alt="" aria-hidden="true" />

          <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/80 to-paper/10 max-md:bg-gradient-to-t" />

          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="relative z-10 w-[min(680px,calc(100vw-32px))] px-4 py-8 sm:ml-[clamp(18px,6vw,84px)] sm:px-0">
              <div className="mb-5 inline-flex rounded-full border border-white/70 bg-white/45 px-3 py-2 text-xs font-black uppercase tracking-normal shadow-soft backdrop-blur-xl">
                Modern portfolio starter to practical 2.0
              </div>
              <p className="eyebrow">{profile.hero.eyebrow}</p>
              <h1
                ref={titleRef}
                className="mt-3 w-full max-w-none text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-normal bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1e1b4b 0%, #1d4ed8 40%, #7e22ce 100%)" }}
              >
                {profile.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-bold leading-7 text-[#3f3835] md:text-xl">{profile.hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="button bg-coral" href="/#work">
                  View work
                </Link>
                <Link className="button bg-cream" href="/#contact">
                  Send a note
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <div className="sticky top-0 min-h-screen flex flex-col justify-center bg-cream pt-20 pb-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-ink/10">
          <section className="mx-auto grid w-[min(1180px,calc(100vw-32px))] gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="eyebrow">{profile.lineage.eyebrow}</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">{profile.lineage.title}</h2>
            </div>
            <div className="rounded-lg border-2 border-ink bg-white/55 p-5 shadow-hard backdrop-blur-xl">
              <p className="text-lg font-bold leading-8 text-muted">{profile.lineage.description}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {profile.lineage.beats.map((beat) => (
                  <article className="rounded-lg border border-ink/20 bg-cream/80 p-4" key={beat.from}>
                    <p className="text-xs font-black uppercase text-portfolioBlue">1.0: {beat.from}</p>
                    <p className="mt-2 font-black leading-6">2.0: {beat.to}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto mt-16 grid w-[min(1180px,calc(100vw-32px))] overflow-hidden rounded-lg border-2 border-ink bg-ink shadow-soft md:grid-cols-4">
            {audienceSignals.map((signal, index) => (
              <article className="audience-card min-h-40 border-ink bg-cream p-5 md:border-r md:last:border-r-0" key={signal}>
                <span className="font-black">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-semibold leading-7 text-muted">{signal}</p>
              </article>
            ))}
          </section>
        </div>

        <div id="work" className="sticky top-0 min-h-screen flex flex-col justify-center bg-white pt-20 pb-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-ink/10">
          <section className="mx-auto w-[min(1180px,calc(100vw-32px))]">
            <div className="mb-7 max-w-3xl">
              <p className="eyebrow">Featured work</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">Selected work, shaped into case studies.</h2>
            </div>
            <div id="case-studies" className="scroll-mt-28" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </div>

        <div id="capabilities" className="sticky top-0 min-h-screen flex flex-col justify-center bg-cream pt-20 pb-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-ink/10">
          <section className="mx-auto w-[min(1180px,calc(100vw-32px))]">
            <div className="mb-7 max-w-3xl">
              <p className="eyebrow">Skills grid, but useful</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">Capabilities with receipts.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability) => (
                <article className="rounded-lg border-2 border-ink bg-white/60 p-5 shadow-hard backdrop-blur-xl" key={capability.title}>
                  <p className="eyebrow">{capability.category}</p>
                  <h3 className="mt-2 text-2xl font-black leading-none">{capability.title}</h3>
                  <p className="mt-3 text-sm font-black uppercase text-ink/60">{capability.level}</p>
                  <p className="mt-4 font-semibold leading-7 text-muted">{capability.proof}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div id="taste" className="sticky top-0 min-h-screen flex flex-col justify-center bg-white pt-20 pb-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-ink/10">
          <section className="mx-auto grid w-[min(1180px,calc(100vw-32px))] gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">{profile.creativePosition.eyebrow}</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">{profile.creativePosition.title}</h2>
            </div>
            <div className="grid gap-4 text-lg font-semibold leading-8 text-muted">
              {profile.creativePosition.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 grid w-[min(1180px,calc(100vw-32px))] gap-4 md:grid-cols-3" aria-label="Ways to collaborate">
            {services.map((service) => (
              <article className="service-card border-t-[6px] border-coral pt-5" key={service.title}>
                <h3 className="text-2xl font-black leading-none">{service.title}</h3>
                <p className="mt-3 font-semibold leading-7 text-muted">{service.description}</p>
              </article>
            ))}
          </section>

          <section id="contact" className="mx-auto mt-16 flex w-[min(1180px,calc(100vw-32px))] flex-col gap-5 rounded-lg border-2 border-ink bg-chartreuse p-7 shadow-soft md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-2 text-[clamp(2rem,4vw,4.2rem)] font-black leading-none">Have a project in mind?</h2>
            </div>
            <a className="button bg-coral" href={`mailto:${profile.contactEmail}`}>
              {profile.contactEmail}
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
