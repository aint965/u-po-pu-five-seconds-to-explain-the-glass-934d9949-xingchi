import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one sentence, in the cat's own voice. No apology, no confession.
const SENTENCE =
  "The glass held my reflection, and I refuse to share this house with a cat that looks that smug.";

// Wording a cat in its own defence never uses.
const FORBIDDEN =
  /\b(sorry|apolog\w*|my fault|my bad|confess\w*|admit\w*|accident\w*|mistake)\b/i;

function fail(message: string): never {
  console.error(`validation failed: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  if (!text || !text.trim()) {
    fail("entry is empty or whitespace only");
  }
  if (text !== text.trim()) {
    fail("entry has leading or trailing whitespace");
  }
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    fail(`entry is ${chars} characters, must be 1-200`);
  }
  // Exactly one sentence: a single terminal period, no other
  // sentence-ending punctuation anywhere in the line.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    fail("entry must be exactly one sentence ending with a single period");
  }
  if (FORBIDDEN.test(text)) {
    fail("entry contains apology or confession wording");
  }
}

function main(): void {
  validate(SENTENCE);
  const outPath =
    process.argv[2] ?? process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  // Create the output directory only; never delete it (the server
  // output is a mount, and a delete there fails).
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, SENTENCE, "utf8");
  // Read the file back and fail loudly if the bytes on disk are not
  // exactly what was meant to be written.
  const written = readFileSync(outPath, "utf8");
  if (written !== SENTENCE) {
    fail(
      `read-back mismatch: wrote ${[...SENTENCE].length} characters, ` +
        `read back ${[...written].length}`,
    );
  }
  console.log(`wrote ${[...SENTENCE].length} characters to ${outPath}`);
}

main();
