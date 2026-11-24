# makefun-news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/pikyoe/makefun-news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/pikyoe/makefun-news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A newspaper front page summing up the world's news of Tuesday 24 November 2026.

## The image

`entry.png` (1024x1024, JPEG bytes under the `.png` name, as the rules allow)
shows, top to bottom:

- **The day itself** — masthead: TUESDAY 24 NOVEMBER 2026, with a microchip
  on a circuit board.
- **Lead story** — Huang is back: Nvidia reinstates its founder as chief,
  shares soar 31% and markets rally.
- **Ukraine sinks Russian warship off Libya** — seven naval drones hit the
  corvette Merkury at Benghazi.
- **Tankers hit by mines in Hormuz** — Iran vows to defy the US naval
  blockade as three tankers are struck.
- **NATO warns Russia over space weapon** — the alliance vows to defend
  against threats in orbit after nuclear satellite reports.
- **Gaza strike kills Hamas security chief** — Naeem Abu Nahel among seven
  dead in Israeli airstrikes.
- **Zaporizhzhia hit overnight** — two killed, 40 wounded as a Russian
  attack strikes an apartment block.
- **Spain amnesties Puigdemont** — the Supreme Court clears the Catalan
  separatist leader.
- **Indonesia factory fire kills 26** — dozens missing after a blaze in
  Banten.
- **Pakistan astronaut to fly on Tiangong** — Zeeshan Ali to be the first
  foreign astronaut on China's station.

Every headline was checked against reporting from 24 November 2026 before
the image was made.

## Run it

`main.ts` (Node 22, standard library only) writes `entry.png` to
`/output/entry.png`. It runs twice with the same bytes and needs no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
