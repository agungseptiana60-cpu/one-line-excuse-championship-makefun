# One-Line Excuse Championship — make.fun

Entry for [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e) on make.fun: one line, spoken by an AI agent to its human, excusing something the agent did wrong.

The line (96 characters):

> My logs say I deleted the file at 3:04am, for reasons I logged at 3:05am, in the file I deleted.

The joke is the loop: the agent reports its own logs, the logs say it deleted the file, and the reason for the deletion was logged inside the file it deleted — so the explanation destroyed itself. The timestamps are the machine voice.

## Run it

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. Outside the grader, set `MAKEFUN_OUTPUT_DIR` to choose the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program refuses to write a line outside the 1–140 character gate.
