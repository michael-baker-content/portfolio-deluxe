import { AmbientBackground } from "./components/AmbientBackground.jsx";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { useRoute } from "./hooks/useRoute.js";
import { defaultContent, deriveContent } from "./lib/contentModel.js";
import { AdminPage } from "./pages/AdminPage.jsx";
import { CaseStudiesPage } from "./pages/CaseStudiesPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";

export function App() {
  const path = useRoute();
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  const [content, setContent] = useState(() => deriveContent(defaultContent));

  useEffect(() => {
    let isMounted = true;

    fetch("/api/content")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (isMounted && payload?.content) {
          setContent(deriveContent(payload.content));
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen text-ink">
      <AmbientBackground />
      <Header />
      {path === "/admin" ? (
        <AdminPage defaultContent={defaultContent} />
      ) : projectMatch ? (
        <ProjectPage content={content} slug={projectMatch[1]} />
      ) : path === "/case-studies" ? (
        <CaseStudiesPage content={content} />
      ) : (
        <HomePage content={content} />
      )}
    </div>
  );
}
