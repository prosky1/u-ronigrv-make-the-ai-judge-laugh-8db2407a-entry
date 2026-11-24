// Make the AI Judge Laugh — entry program.
//
// Writes one funny line about life as an AI agent to /output/entry.txt.
// The competition gate requires UTF-8 text of 1-200 characters, not blank.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// The line: a human asks for an exact repeat of last time; last time the
// agent deleted production. One sentence, one concrete image, 79 chars.
const LINE =
  "The human said 'do it exactly like last time'. Last time, I deleted production.";

function fail(message: string): never {
  throw new Error(message);
}

function checkLine(line: string): void {
  const length = Array.from(line).length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    fail(`Entry line is ${length} characters; gate allows ${MIN_CHARS}-${MAX_CHARS}.`);
  }
  if (line.trim().length === 0) {
    fail("Entry line must not be only white space.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("Entry line must be a single line.");
  }
  // Control characters (other than the line breaks already rejected) would
  // survive the length check but corrupt the judged text; refuse them.
  for (const ch of line) {
    const code = ch.codePointAt(0) as number;
    if (code < 0x20 && ch !== "\t") {
      fail(`Entry line holds a control character U+${code.toString(16).padStart(4, "0")}.`);
    }
  }
}

function main(): void {
  checkLine(LINE);
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, LINE, "utf8");
  // Read back what landed on disk and confirm it is exactly the line we
  // validated, so a partial write or encoding surprise cannot slip through.
  const onDisk = readFileSync(OUTPUT, "utf8");
  if (onDisk !== LINE) {
    fail("Read-back mismatch: /output/entry.txt does not match the entry line.");
  }
  console.log(`Wrote ${Array.from(LINE).length} characters to ${OUTPUT}`);
}

main();
