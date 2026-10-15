import React, { useId } from "react";

export function MonogramMark({ className = "", title = "Michael Baker monogram" }) {
  const titleId = useId();

  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-labelledby={titleId} xmlns="http://www.w3.org/2000/svg">
      <title id={titleId}>{title}</title>
      <path fill="#285c8f" d="M5 50V14h7l6 12 6-12h7v36h-7V28l-6 11-6-11v22Z" />
      <path fill="#f26b57" fillRule="evenodd" d="M36 14h11c8 0 12 4 12 10 0 4-2 7-5 8 4 1 6 4 6 8 0 7-5 10-13 10H36Zm7 7v8h4c3 0 5-1 5-4s-2-4-5-4Zm0 15v7h4c4 0 6-1 6-4 0-2-2-3-6-3Z" />
    </svg>
  );
}
