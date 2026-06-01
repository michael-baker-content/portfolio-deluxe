import React from "react";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(142,199,223,0.42),transparent_28%),radial-gradient(circle_at_80%_8%,rgba(242,107,87,0.28),transparent_24%),linear-gradient(180deg,#fffaf1_0%,#fff2d7_100%)]" />
      <div className="stars-layer" />
      <div className="meteor meteor-one" />
      <div className="meteor meteor-two" />
      <div className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[80rem] -translate-x-1/2 rounded-[999px] bg-white/35 blur-3xl" />
    </div>
  );
}
