import { useEffect, useState } from "react";

function currentPath() {
  return window.location.pathname === "/index.html" ? "/" : window.location.pathname;
}

export function useRoute() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    function handlePopState() {
      setPath(currentPath());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return path;
}
