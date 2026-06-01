import React from "react";

export function navigateTo(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("..")) {
    window.location.href = href;
    return;
  }

  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));

  const [, hash] = href.split("#");
  if (hash) {
    window.requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }));
  } else {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

export function Link({ children, href, className = "", onClick, ...props }) {
  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (!href || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("..")) return;

    event.preventDefault();
    navigateTo(href);
  }

  return (
    <a className={className} href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
