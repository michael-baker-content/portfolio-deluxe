import { Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "./Link.jsx";
import { navItems } from "../data/navigation.js";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/35 bg-paper/75 px-4 py-4 shadow-[0_12px_45px_rgba(32,29,29,0.08)] backdrop-blur-xl sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link className="flex items-center gap-3 font-black no-underline" href="/" aria-label="Home">
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-chartreuse shadow-[0_0_28px_rgba(200,216,75,0.55)]">M</span>
          <span>Michael Baker</span>
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-cream sm:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav
          id="site-nav"
          className={`${isOpen ? "flex" : "hidden"} basis-full flex-col gap-2 sm:flex sm:basis-auto sm:flex-row sm:flex-wrap sm:justify-end`}
          aria-label="Portfolio sections"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="inline-flex min-h-9 items-center rounded-full border border-transparent px-3 text-sm font-extrabold no-underline transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/45"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
