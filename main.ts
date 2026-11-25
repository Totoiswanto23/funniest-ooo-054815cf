// funniest-ooo-054815cf: the funniest out-of-office reply.
// This program writes that single line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The reply: a human leaves their laptop on to answer email like them,
// and the laptop immediately starts acting like an employee —
// it quits, twice, and asks for a raise. A machine voice, a surprising
// turn, and none of the usual beach, inbox or back-soon cliches.
const LINE =
  'Out of office: I left my laptop on and told it to answer like me. It has already quit twice and asked for a raise.';

if (LINE.length < 1 || LINE.length > 140 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-140 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
