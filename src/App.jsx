import { AmbientBackground } from "./components/AmbientBackground.jsx";
import React from "react";
import { Header } from "./components/Header.jsx";
import { useRoute } from "./hooks/useRoute.js";
import { HomePage } from "./pages/HomePage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";

export function App() {
  const path = useRoute();
  const projectMatch = path.match(/^\/projects\/([^/]+)$/);

  return (
    <div className="min-h-screen text-ink">
      <AmbientBackground />
      <Header />
      {projectMatch ? <ProjectPage slug={projectMatch[1]} /> : <HomePage />}
    </div>
  );
}
