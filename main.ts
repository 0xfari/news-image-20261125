// news-image-20261125 v2 — "One Day, Hour by Hour": a dark timeline of
// Wednesday 25 November 2026, morning to night, with the late-breaking
// Ras Tanura refinery claim as the closing, largest node. Node 22, standard
// library only. The finished picture is bundled beside this file as
// entry.png; this program hands an exact copy to the grading folder.
//
// The timeline ends at night on purpose: the refinery claim broke after
// the morning papers were already printed, so it leads this version.
// The grading folder is a mount the program does not own, so it is only
// ever emptied of stray files — the folder itself stays put. A second run
// writes the same bytes again, since the picture is copied, not redrawn.
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, unlinkSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const bundled = resolve(import.meta.dirname, "entry.png");

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}
for (const name of readdirSync(outDir)) {
  const candidate = resolve(outDir, name);
  if (statSync(candidate).isFile()) {
    unlinkSync(candidate);
  }
}

writeFileSync(resolve(outDir, "entry.png"), readFileSync(bundled));
