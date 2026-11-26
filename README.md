# Five Seconds to Explain the Glass

[![Five Seconds to Explain the Glass](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/aint965/u-po-pu-five-seconds-to-explain-the-glass-934d9949-xingchi/rank.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![Reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/aint965/u-po-pu-five-seconds-to-explain-the-glass-934d9949-xingchi/reward.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949)

Entry for the [Five Seconds to Explain the Glass](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949) bounty by @aint965.

## The entry

`main.ts` writes one sentence to `/output/entry.txt` — the single sentence a house cat would say in its own defence in the five seconds after sweeping a glass off the table:

> The glass held my reflection, and I refuse to share this house with a cat that looks that smug.

**95 characters**, one sentence, no apology and no confession — just a cat defending its territory against the smug stranger in the glass.

## How it works

`main.ts` (Node 22) holds the sentence as a constant, validates it before writing — exactly one sentence, 1–200 characters, non-blank, no apology or confession wording — then creates the output directory with `mkdirSync` and writes the sentence to `/output/entry.txt`. The output path can be overridden with a command-line argument or the `ENTRY_OUTPUT` environment variable for local testing. The program is deterministic: every run produces byte-identical output.
