import { Menu, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "./Link.jsx";
import { MonogramMark } from "./MonogramMark.jsx";
import { navItems } from "../data/navigation.js";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/88 px-4 py-3 shadow-[0_10px_35px_rgba(32,29,29,0.05)] backdrop-blur-xl sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] no-underline" href="/" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-paper p-0.5">
            <MonogramMark className="h-full w-full text-ink" title="Michael Baker" />
          </span>
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
              className="inline-flex min-h-9 items-center border-b border-transparent px-1 text-sm font-extrabold no-underline transition hover:border-ink sm:px-2"
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
