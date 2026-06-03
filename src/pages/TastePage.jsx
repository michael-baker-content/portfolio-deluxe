import React from "react";
import { ArrowRight, Brush, Building2, Code2, GraduationCap, MessageSquare } from "lucide-react";
import { Link } from "../components/Link.jsx";

const iconMap = [Building2, GraduationCap, Code2];

export function TastePage({ content }) {
  const pitch = content.profile.tastePitch;

  return (
    <main id="main-content" className="overflow-hidden bg-[#fff7d6]">
      <section className="relative min-h-screen border-b-2 border-ink px-4 py-16 sm:px-8 lg:px-14">
        <MemphisBackdrop />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link className="inline-flex border-b-[3px] border-ink text-sm font-black no-underline" href="/">
              Back home
            </Link>
            <p className="eyebrow mt-10">{pitch.eyebrow}</p>
            <h1 className="mt-3 text-[clamp(3rem,9vw,8rem)] font-black leading-[0.86] tracking-normal">{pitch.title}</h1>
            <p className="mt-6 max-w-2xl text-xl font-black leading-8 text-[#433a36]">{pitch.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button bg-coral" href="/case-studies">
                See case studies
              </Link>
              <Link className="button bg-chartreuse" href="/#contact">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="memphis-wiggle absolute -left-6 -top-6 h-24 w-24 rounded-full border-2 border-ink bg-coral shadow-hard" />
            <div className="memphis-bob absolute -bottom-8 -right-4 z-20 grid h-28 w-28 place-items-center rounded-lg border-2 border-ink bg-chartreuse shadow-hard rotate-6">
              <Brush size={46} />
            </div>
            <figure className="taste-lift relative z-10 overflow-hidden rounded-lg border-2 border-ink bg-white shadow-hard rotate-1">
              <img className="h-[min(70vh,680px)] w-full object-cover" src={pitch.heroImage.src} alt={pitch.heroImage.alt} />
              <figcaption className="border-t-2 border-ink bg-white p-4 text-sm font-black uppercase text-ink/65">
                Content work is systems work, people work, and taste work.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="relative border-b-2 border-ink bg-white px-4 py-16 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="eyebrow">The pitch</p>
            <h2 className="mt-2 text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-none">Content depth plus fast-improving technical range.</h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pitch.proofPoints.map((point, index) => {
              const Icon = iconMap[index] || ArrowRight;

              return (
                <article className="taste-proof-card taste-lift rounded-lg border-2 border-ink bg-cream p-5 shadow-hard" key={point.title}>
                  <div className="taste-pop grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-chartreuse">
                    <Icon size={28} />
                  </div>
                  <p className="eyebrow mt-5">{point.label}</p>
                  <h3 className="mt-2 text-3xl font-black leading-none">{point.title}</h3>
                  <p className="mt-4 font-semibold leading-7 text-muted">{point.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#201d1d] px-4 py-16 text-cream sm:px-8 lg:px-14">
        <div className="memphis-zigzag absolute left-0 top-10 h-20 w-full opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-chartreuse">Image areas, real experience</p>
              <h2 className="mt-2 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-none">Three lanes that keep crossing.</h2>
            </div>
            <p className="max-w-md font-semibold leading-7 text-cream/70">
              The throughline is usability: people need accurate material, clear structure, and tools that make the next step easier.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {pitch.imagePanels.map((panel, index) => (
              <article className={`taste-lift grid overflow-hidden rounded-lg border-2 border-cream bg-cream text-ink shadow-soft lg:grid-cols-2 ${index % 2 ? "lg:[&>figure]:order-2" : ""}`} key={panel.title}>
                <figure className="min-h-80">
                  <img className="h-full min-h-80 w-full object-cover" src={panel.src} alt={panel.alt} loading="lazy" />
                </figure>
                <div className="relative grid place-items-center p-8 md:p-12">
                  <div className="memphis-dots absolute inset-0 opacity-20" />
                  <div className="relative z-10">
                    <span className="inline-flex rounded-full border-2 border-ink bg-coral px-3 py-2 text-xs font-black uppercase">0{index + 1}</span>
                    <h3 className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-black leading-none">{panel.title}</h3>
                    <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-muted">{panel.caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-chartreuse px-4 py-16 sm:px-8 lg:px-14">
        <div className="memphis-dots absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 rounded-lg border-2 border-ink bg-white p-6 shadow-hard md:grid-cols-[1fr_0.72fr] md:p-8 lg:p-10">
          <div className="taste-lift rounded-lg border-2 border-ink bg-[#fff7d6] p-6">
            <p className="eyebrow">Leave-behind</p>
            <h2 className="mt-3 max-w-3xl text-[clamp(2.2rem,5vw,4.7rem)] font-black leading-none">
              Seasoned content judgment, now closer to the product.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-muted">
              I bring enterprise production habits, editorial care, and growing frontend skill to teams that need useful web experiences built with taste and attention.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              ["Content depth", "I know what quality looks like before and after a page ships."],
              ["Technical momentum", "The case studies show the systems I can now make tangible."],
              ["Good collaboration", "I am used to working where accuracy, review, and trust matter."],
            ].map(([title, body]) => (
              <article className="taste-lift rounded-lg border-2 border-ink bg-cream p-5" key={title}>
                <p className="text-xs font-black uppercase text-portfolioBlue">{title}</p>
                <p className="mt-2 font-bold leading-7 text-ink/75">{body}</p>
              </article>
            ))}

            <div className="taste-lift rounded-lg border-2 border-ink bg-ink p-5 text-cream">
              <div className="flex items-center gap-3">
                <span className="taste-pop grid h-12 w-12 place-items-center rounded-full border-2 border-cream bg-coral text-ink">
                  <MessageSquare size={24} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-chartreuse">Next step</p>
                  <p className="font-bold text-cream/80">Talk with me about the fit.</p>
                </div>
              </div>
              <Link className="button mt-5 w-full bg-coral text-ink" href="/#contact">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MemphisBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="memphis-bob absolute left-[6%] top-[15%] h-24 w-24 rounded-full border-2 border-ink bg-chartreuse" />
      <div className="memphis-wiggle absolute right-[12%] top-[10%] h-32 w-32 rotate-12 border-2 border-ink bg-[#d9eef6]" />
      <div className="memphis-drift absolute bottom-[calc(12%+50px)] left-[15%] h-20 w-40 -rotate-6 rounded-full border-2 border-ink bg-coral" />
      <div className="memphis-dots absolute inset-0 opacity-25" />
    </div>
  );
}
