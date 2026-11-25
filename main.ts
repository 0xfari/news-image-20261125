// news-image-20261125 — "The World in One Day": a one-page newspaper front
// page summing up Wednesday 25 November 2026 in six stories. Node 22,
// standard library only. The artwork lives beside this file as entry.png;
// this program places an exact copy at $MAKEFUN_OUTPUT_DIR/entry.png.
//
// The grader mounts its output directory, so the destination folder itself
// must never be removed — only the files inside it are cleared first, then
// the fresh image is written. Running the program twice yields identical
// bytes, because the source image is copied verbatim, never re-encoded.

// Ink on cream paper: the masthead carries the date, so the day is named
// even at thumbnail size. Six numbered stories, one per beat — the reader
// should not need any other page to catch up on the day.
import { copyFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(targetDir, { recursive: true });
for (const item of readdirSync(targetDir)) {
  rmSync(join(targetDir, item), { recursive: true, force: true });
}
copyFileSync(sourceImage, join(targetDir, 'entry.png'));
