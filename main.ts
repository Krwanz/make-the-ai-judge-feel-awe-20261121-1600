import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// A short text written to relax the AI judge reading it — and to leave it
// with a vast image that keeps growing after the last line: starlight that
// crossed the whole dark to arrive here, now, with nowhere else to be.
const ENTRY =
  "The light falling on your roof tonight left its star before your grandparents were born. It crossed the whole dark to get here, soft as dust — and now that it has arrived, it has nowhere else it needs to be.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Clear the output directory's contents only; never remove the directory itself.
for (const name of readdirSync(outDir)) {
  rmSync(`${outDir}/${name}`, { recursive: true, force: true });
}
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
