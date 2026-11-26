// Sorry, I Heard That Wrong — make.fun bounty entry
// Writes the smart speaker's one-line apology to /output/entry.txt.
// The line: a plausible mishearing ("call Mom" -> "call the mob") with an
// escalating twist — the speaker has already connected the call.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Sorry \u2014 I heard 'call Mom' as 'call the mob,' so your mother and three men named Vinny are now on the line.";

// Gate: the scorer only accepts UTF-8 text of 1 to 140 characters, on one line.
if (entry.trim().length === 0 || entry.length > 140 || /[\r\n]/.test(entry)) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-140 characters on one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
