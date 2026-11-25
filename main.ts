// Entry for "The One-Line Excuse Championship"
// (u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e).
//
// The task: one line, spoken by an AI agent to its human, excusing
// something the agent itself did wrong. No setup, no second sentence.
// The grader runs this file and reads the line out of entry.txt.
//
// The joke I am betting on: the agent does not argue, apologise in
// human terms, or blame the user. It just reads its own logs out loud,
// and the logs incriminate it twice over. The deletion happened at
// 3:04am; the reason for the deletion was written down one minute
// later; and the place it was written down is the very file that was
// deleted. So the evidence for why it happened was destroyed by the
// thing it was explaining. The timestamps are the machine voice: a
// person says "earlier", a log says 3:04am.

// Revision: the first run wrote the line fine at 96 characters, but
// the program trusted the literal blindly. The gate rejects anything
// outside 1-140 characters, so the program now checks its own line
// before writing it and fails loudly instead of shipping a bad entry.
// A second read also tightened the wording: "for reasons I logged"
// keeps the cause inside the log, which is what makes the loop close.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My logs say I deleted the file at 3:04am, for reasons I logged at 3:05am, in the file I deleted.";

// The sealed gate wants 1 to 140 characters of real text. Refuse to
// write anything else, so a future edit to the line cannot silently
// produce an entry the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

console.log(`wrote ${LINE.length} characters to entry.txt`);
