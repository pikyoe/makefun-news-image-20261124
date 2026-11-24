// News-image entry for make.fun: one image summing up the world news of
// Tuesday 24 November 2026.
//
// The front page itself lives in this repository as entry.png. Those bytes
// are JPEG data under the .png name — the rules tell the two apart by the
// file's first bytes, not its extension. This program writes those exact
// bytes to the grader's output directory, nothing more. It is deterministic
// (every run writes the same bytes) and needs no network access.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';
const OUTPUT_ENV = 'MAKEFUN_OUTPUT_DIR';
const OUTPUT_DEFAULT = '/output';

function frontPageBytes(): Buffer {
  const here = dirname(fileURLToPath(import.meta.url));
  return readFileSync(join(here, IMAGE_NAME));
}

function main(): void {
  const pixels = frontPageBytes();
  const outDir = process.env[OUTPUT_ENV] ?? OUTPUT_DEFAULT;
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, IMAGE_NAME);
  writeFileSync(target, pixels);
  const written = statSync(target);
  if (written.size !== pixels.length) {
    throw new Error(`short write: ${target} holds ${written.size} of ${pixels.length} bytes`);
  }
}

main();
