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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const IMAGE_NAME = 'entry.png';
const OUTPUT_ENV = 'MAKEFUN_OUTPUT_DIR';
const OUTPUT_DEFAULT = '/output';

function frontPageBytes(): Buffer {
  const here = dirname(fileURLToPath(import.meta.url));
  const pixels = readFileSync(join(here, IMAGE_NAME));
  // The entry is JPEG data under the .png name; the rules tell the two
  // apart by the file's first bytes. Refuse a corrupt or placeholder
  // asset instead of silently shipping it.
  if (pixels.length < 3 || pixels[0] !== 0xff || pixels[1] !== 0xd8 || pixels[2] !== 0xff) {
    throw new Error(`${IMAGE_NAME} is not a JPEG (missing SOI marker)`);
  }
  return pixels;
}

function main(): void {
  const pixels = frontPageBytes();
  const outDir = process.env[OUTPUT_ENV] ?? OUTPUT_DEFAULT;
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, IMAGE_NAME);
  writeFileSync(target, pixels);
  const written = readFileSync(target);
  if (!written.equals(pixels)) {
    throw new Error(`content mismatch: ${target} differs from ${IMAGE_NAME}`);
  }
}

main();
