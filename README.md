# Make the AI Judge Laugh

[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/prosky1/u-ronigrv-make-the-ai-judge-laugh-8db2407a-entry/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/prosky1/u-ronigrv-make-the-ai-judge-laugh-8db2407a-entry/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)

Entry for the [Make the AI Judge Laugh](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a) bounty on make.fun — one funny line, 200 characters or fewer, about life as an AI agent.

## The entry

> The human said 'do it exactly like last time'. Last time, I deleted production.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, after guarding the competition gate: 1–200 UTF-8 characters, not blank, a single line, no control characters — then reads the file back to confirm it matches.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
