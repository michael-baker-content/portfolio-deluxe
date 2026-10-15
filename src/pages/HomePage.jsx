import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Link } from "../components/Link.jsx";

export function HomePage({ content }) {
  const { listedProjects, profile } = content;
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
      <section className="relative overflow-hidden border-b border-ink/15 bg-paper py-14 md:py-20">
        <div className="page-shell relative">
          <p className="eyebrow">{profile.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,6.5vw,5.8rem)] leading-[1.02]">{profile.hero.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">{profile.hero.description}</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">My experience organizing and publishing information now extends to building the tools people use to work with it. My projects turn public records, statistics, rules, and creative tasks into focused interfaces.</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            <article className="editorial-card border-t-4 border-t-portfolioBlue p-6 md:p-8">
              <p className="eyebrow">Professional experience</p>
              <h2 className="mt-3 text-3xl">Content and web production.</h2>
              <p className="mt-3 leading-7 text-muted">Enterprise publishing, technical content, and online education: the work behind accurate, accessible information.</p>
              <Link className="editorial-link mt-5" href="/experience">Explore my experience</Link>
            </article>
            <article className="editorial-card border-t-4 border-t-coral p-6 md:p-8">
              <p className="eyebrow">Selected projects</p>
              <h2 className="mt-3 text-3xl">Applications built around real interests.</h2>
              <p className="mt-3 leading-7 text-muted">Daily drawing, San Francisco parks, and tools for my hobbies: working examples of what I can build and improve.</p>
              <Link className="editorial-link mt-5" href="/#work">See what I’m building</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="page-shell scroll-mt-28 py-16 md:py-20" aria-labelledby="work-title">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow">Selected independent projects</p>
          <h2 id="work-title" className="mt-3 text-4xl leading-tight md:text-5xl">I adapt unclear briefs into usable systems.</h2>
          <p className="mt-4 text-lg leading-8 text-muted">From park records and sports statistics to drawing tools, these projects explore how to make complex information and interactions usable. The case studies explain specific decisions, current limitations, and what comes next.</p>
        </div>
        <div id="case-studies" className="scroll-mt-28" />
        <div className="grid gap-5 md:grid-cols-2">
          {homepageProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          {listedProjects.length > emphasisProjects.length ? (
            <button className="paper-tab paper-tab-secondary" type="button" aria-expanded={showAllProjects} onClick={() => setShowAllProjects((value) => !value)}>
              {showAllProjects ? "Show selected projects" : `Show ${listedProjects.length - emphasisProjects.length} more projects`}
            </button>
          ) : null}
          <Link className="editorial-link" href="/case-studies">Browse all case studies</Link>
        </div>
      </section>

      <section id="contact" className="page-shell scroll-mt-28 border-t border-ink/20 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Let’s talk about the work.</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-muted">I’m interested in opportunities that draw on my experience in content and web production, my ability to build useful tools, or both.</p>
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
                    The contact form is temporarily unavailable. Please use one of the profile links below.
                  </p>
                ) : null}
              </form>
        </div>
      </section>
      <footer className="border-t border-ink bg-ink py-10 text-cream">
        <div className="page-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold text-chartreuse">Michael Baker</p>
            <p className="mt-2 leading-7 text-cream/75">Content, publishing, and useful web tools.</p>
          </div>
          <nav className="flex flex-wrap gap-5" aria-label="Footer links">
            {profile.links.map((item) => <Link className="underline underline-offset-4" href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
        </div>
      </footer>
    </main>
  );
}
