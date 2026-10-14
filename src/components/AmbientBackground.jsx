import React from "react";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(40,92,143,0.12),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(242,107,87,0.10),transparent_22%),linear-gradient(180deg,#fffaf1_0%,#fff7e7_58%,#fff2d7_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(90deg,rgba(32,29,29,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(32,29,29,0.14)_1px,transparent_1px)] bg-[length:96px_96px]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/65 to-transparent" />
      <div className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[80rem] -translate-x-1/2 rounded-[999px] bg-white/30 blur-3xl" />
    </div>
  );
}
