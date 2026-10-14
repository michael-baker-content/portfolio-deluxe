import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";

export function HomePage({ content }) {
  const { audienceSignals, capabilities, listedProjects, profile, services } = content;
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [contactStatus, setContactStatus] = useState("idle");
  const [contactMessage, setContactMessage] = useState("");
  const emphasisProjects = listedProjects.slice(0, 4);
  const homepageProjects = showAllProjects ? listedProjects : emphasisProjects;

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (!profile.contactForm.endpoint) {
      setContactStatus("error");
      setContactMessage("The contact form is not connected yet.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setContactStatus("submitting");
    setContactMessage("");

    try {
      const response = await fetch(profile.contactForm.endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setContactStatus("success");
      setContactMessage("Message sent. Thanks for reaching out; I will follow up soon.");
    } catch {
      setContactStatus("error");
      setContactMessage("Something got tangled during submission. Please try again in a moment.");
    }
  };

  return (
    <main id="main-content">
      <section className="relative h-[calc(100svh-73px)] w-full bg-[#163d6a] md:h-screen">
        <div className="hero-scene-2 sticky top-0 h-full w-full overflow-hidden border-b-2 border-ink md:h-screen">

          {/* Screen-reader only description of the complete scene */}
          <span className="sr-only">{profile.hero.imageAlt}</span>

          <div className="hero-aurora" aria-hidden="true" />
          <div className="hero-gradient-plate" aria-hidden="true" />
          <div className="hero-gradient-ribbon hero-gradient-ribbon-one" aria-hidden="true" />
          <div className="hero-gradient-ribbon hero-gradient-ribbon-two" aria-hidden="true" />
          <div className="hero-pattern" aria-hidden="true" />

          <div className="absolute inset-0 bg-gradient-to-t from-paper/95 via-paper/62 to-transparent md:bg-gradient-to-r md:from-paper md:via-paper/92 md:via-[48%] md:to-[#163d6a]/10" />

          <div className="absolute inset-0 flex flex-col justify-end pb-8 md:justify-center md:pb-0">
            <div className="hero-copy-shell relative z-10 mx-4 pb-5 pl-10 pr-4 pt-8 md:mx-0 md:rounded-r-[2rem] md:border-y md:border-r md:border-white/55 md:bg-paper md:pb-10 md:pl-16 md:pr-9 md:pt-14 md:shadow-soft md:ml-[clamp(18px,6vw,84px)]">
              <div className="mb-4 inline-flex border-l-2 border-ink bg-white/45 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink/65 backdrop-blur-xl">
                Michael Baker
              </div>
              <p className="eyebrow">{profile.hero.eyebrow}</p>
              <h1 className="hero-title-box display-type mt-3 max-w-none text-[clamp(3rem,7vw,7rem)] leading-[0.9]">
                {profile.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-bold leading-7 text-[#3f3835] md:text-xl">{profile.hero.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="paper-tab paper-tab-primary" href="/#work">
                  View work
                </Link>
                <Link className="paper-tab paper-tab-secondary" href="/#contact">
                  Send a note
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <div className="relative min-h-screen max-md:min-h-0 max-md:px-3 max-md:py-3">
          <div className="editorial-section sticky top-0 min-h-screen flex flex-col justify-center pt-24 pb-20 shadow-[0_-12px_50px_rgba(32,29,29,0.06)] max-md:static max-md:min-h-0 max-md:px-1 max-md:py-12">
            <section className="page-shell grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="eyebrow">{profile.lineage.eyebrow}</p>
                <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">{profile.lineage.title}</h2>
              </div>
              <div className="editorial-panel p-6 md:p-8">
                <p className="text-lg font-bold leading-8 text-muted">{profile.lineage.description}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {profile.lineage.beats.map((beat) => (
                    <article className="border-l border-ink/25 bg-paper/70 p-4" key={beat.from}>
                      <p className="text-xs font-black uppercase text-portfolioBlue">Strength: {beat.from}</p>
                      <p className="mt-2 font-black leading-6">{beat.to}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="page-shell mt-16 grid border-y border-ink/20 bg-white/55 md:grid-cols-4">
              {audienceSignals.map((signal, index) => (
                <article className="min-h-44 border-ink/15 bg-transparent p-5 md:border-r md:last:border-r-0" key={signal.label}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-4xl font-black leading-none text-ink/25">{String(index + 1).padStart(2, "0")}</span>
                    <span className="border-b border-ink/20 pb-1 text-xs font-black uppercase tracking-[0.16em] text-portfolioBlue">{signal.label}</span>
                  </div>
                  <p className="mt-5 text-lg font-black leading-7 text-ink">{signal.text}</p>
                </article>
              ))}
            </section>
          </div>
        </div>

        <div id="work" className="relative min-h-screen max-md:min-h-0 max-md:px-3 max-md:py-3">
          <div className="editorial-section sticky top-0 flex min-h-screen flex-col justify-center bg-white/86 pt-24 pb-20 shadow-[0_-12px_50px_rgba(32,29,29,0.06)] max-md:static max-md:min-h-0 max-md:px-1 max-md:py-12">
            <section className="page-shell">
              <div className="mb-7 max-w-3xl">
                <p className="eyebrow">Case studies</p>
                <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">I adapt unclear briefs into usable systems.</h2>
                <p className="mt-4 text-lg font-bold leading-8 text-muted">
                  Start with the projects that show where my work is headed now: creative tools, local information products, and focused platforms that turn messy needs into usable systems.
                </p>
                <Link className="editorial-link mt-4" href="/case-studies">
                  Open filterable index
                </Link>
              </div>
              <div id="case-studies" className="scroll-mt-28" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {homepageProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
              {listedProjects.length > emphasisProjects.length ? (
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button className="paper-tab paper-tab-secondary" type="button" onClick={() => setShowAllProjects((value) => !value)}>
                    {showAllProjects ? "Show active work only" : `Show ${listedProjects.length - emphasisProjects.length} more studies`}
                  </button>
                  <span className="text-sm font-black uppercase text-ink/55">
                    Showing {homepageProjects.length} of {listedProjects.length}
                  </span>
                </div>
              ) : null}
            </section>
          </div>
        </div>

        <div id="capabilities" className="relative min-h-screen max-md:min-h-0 max-md:px-3 max-md:py-3">
          <div className="editorial-section sticky top-0 min-h-screen flex flex-col justify-center pt-24 pb-20 shadow-[0_-12px_50px_rgba(32,29,29,0.06)] max-md:static max-md:min-h-0 max-md:px-1 max-md:py-12">
            <section className="page-shell">
              <div className="mb-7 max-w-3xl">
                <p className="eyebrow">Capabilities</p>
                <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">What I bring to the work.</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((capability) => (
                  <article className="editorial-card p-5" key={capability.title}>
                    <p className="eyebrow">{capability.category}</p>
                    <h3 className="display-type mt-3 text-3xl leading-none">{capability.title}</h3>
                    <p className="mt-3 text-sm font-black uppercase text-ink/60">{capability.level}</p>
                    <p className="mt-4 font-semibold leading-7 text-muted">{capability.proof}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div id="taste" className="relative min-h-screen max-md:min-h-0 max-md:px-3 max-md:py-3">
          <div className="editorial-section sticky top-0 min-h-screen flex flex-col justify-center bg-white/86 pt-24 pb-20 shadow-[0_-12px_50px_rgba(32,29,29,0.06)] max-md:static max-md:min-h-0 max-md:px-1 max-md:py-12">
            <section className="page-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">{profile.creativePosition.eyebrow}</p>
                <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">{profile.creativePosition.title}</h2>
              </div>
              <div className="grid gap-4 text-lg font-semibold leading-8 text-muted">
                {profile.creativePosition.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link className="paper-tab paper-tab-secondary mt-2 w-fit max-sm:w-full" href="/taste">
                  Open the full taste pitch
                </Link>
              </div>
            </section>

            <section className="page-shell mt-16 grid gap-4 md:grid-cols-3" aria-label="Ways to collaborate">
              {services.map((service) => (
                <article className="service-card border-t border-ink/20 pt-5" key={service.title}>
                  <h3 className="display-type text-3xl leading-none">{service.title}</h3>
                  <p className="mt-3 font-semibold leading-7 text-muted">{service.description}</p>
                </article>
              ))}
            </section>

            <section id="contact" className="page-shell editorial-panel mt-16 grid gap-6 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div className="self-center">
                <p className="eyebrow">Contact</p>
                <h2 className="display-type mt-3 text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.95]">Want to talk about a role or project?</h2>
                <p className="mt-4 font-bold leading-7 text-ink/70">
                  Send a note directly from here. I am especially interested in roles and projects where product judgment, writing, and frontend craft overlap.
                </p>
              </div>
              <form className="border border-ink/20 bg-paper/80 p-5" action={profile.contactForm.endpoint || undefined} method="POST" onSubmit={handleContactSubmit}>
                <input type="hidden" name="_subject" value="Portfolio contact form" />
                <input className="hidden" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-black uppercase text-ink/65">Name</span>
                    <input
                      className="editorial-input"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength="120"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-black uppercase text-ink/65">Email</span>
                    <input
                      className="editorial-input"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength="254"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-black uppercase text-ink/65">Your role</span>
                    <select className="editorial-input" name="role" defaultValue="">
                      <option value="" disabled>
                        Choose one
                      </option>
                      <option>Hiring manager or recruiter</option>
                      <option>Founder or product lead</option>
                      <option>Designer or creative collaborator</option>
                      <option>Engineer or technical collaborator</option>
                      <option>Acquaintance</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-black uppercase text-ink/65">General location</span>
                    <input
                      className="editorial-input"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      maxLength="120"
                      placeholder="City or region"
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="text-xs font-black uppercase text-ink/65">Case study interest</span>
                  <select className="editorial-input" name="caseStudyInterest" defaultValue="">
                    <option value="">No specific study</option>
                    {listedProjects.map((project) => (
                      <option key={project.slug} value={project.title}>
                        {project.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-black uppercase text-ink/65">Message</span>
                  <textarea
                    className="editorial-input min-h-32 resize-y py-3"
                    name="message"
                    maxLength="3000"
                    placeholder="What should we talk about?"
                    required
                  />
                </label>
                <button className="paper-tab paper-tab-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={!profile.contactForm.endpoint || contactStatus === "submitting"}>
                  {contactStatus === "submitting" ? "Sending" : "Send message"}
                </button>
                {contactMessage ? (
                  <div
                    className={`mt-5 border-l-4 p-4 ${
                      contactStatus === "success"
                        ? "border-chartreuse bg-white/80 text-ink"
                        : "border-coral bg-white/80 text-ink"
                    }`}
                    role={contactStatus === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    <p className="eyebrow">{contactStatus === "success" ? "Sent" : "Form note"}</p>
                    <p className="mt-2 font-bold leading-7">{contactMessage}</p>
                  </div>
                ) : null}
                {!profile.contactForm.endpoint ? (
                  <p className="mt-4 text-sm font-bold leading-6 text-ink/65">
                    Formspree is ready to connect. Add `VITE_FORMSPREE_ENDPOINT` to your local environment to enable submissions.
                  </p>
                ) : null}
              </form>
            </section>
          </div>
        </div>
      </div>

      <footer className="relative z-20 border-t border-ink bg-ink px-4 py-10 text-cream sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase text-chartreuse">Michael Baker</p>
            <p className="mt-2 max-w-xl font-semibold leading-7 text-cream/75">
              Content production depth, technical writing, practical prototypes, and growing frontend craft.
            </p>
          </div>
          <nav className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:gap-3" aria-label="Footer links">
            {profile.links.map((item) => (
              <Link
                className="min-w-0 rounded-full border border-cream/25 px-2 py-2 text-center text-xs font-black no-underline transition hover:-translate-y-0.5 hover:border-chartreuse hover:bg-chartreuse hover:text-ink sm:px-4 sm:text-sm"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
