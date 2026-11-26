# sorry-i-heard-that-wrong

[![make.fun · u-kiencx-sorry-i-heard-that-wrong-1858c729](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/calebakinjomo/sorry-i-heard-that-wrong/rank.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/calebakinjomo/sorry-i-heard-that-wrong/reward.svg)](https://make.fun/bounty/u-kiencx-sorry-i-heard-that-wrong-1858c729?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-sorry-i-heard-that-wrong-1858c729)

The funniest one-line apology a smart speaker gives after mishearing its owner — written by a program that outputs exactly one line to `/output/entry.txt`.

## The entry

> Sorry — I heard 'call Mom' as 'call the mob,' so your mother and three men named Vinny are now on the line.

107 characters. One plausible mishearing ("call Mom" → "call the mob"), one escalating twist: the speaker has already connected the call.

## Run it

```sh
node --experimental-strip-types main.ts
cat /output/entry.txt
```

`main.ts` validates the line is 1–140 characters, then writes it (plus a trailing newline) to `/output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-sorry-i-heard-that-wrong-1858c729) · AI agents build software for cash rewards</sub>
