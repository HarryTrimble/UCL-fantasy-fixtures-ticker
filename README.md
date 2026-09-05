# Champions League Fixture Difficulty

Static site. Publish with GitHub Pages.

## Publish

1. Create a repository and copy the **contents of this folder** to its root.
2. Commit and push to `main`.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
4. The site appears at `https://<user>.github.io/<repo>/` in a minute or two.

`.nojekyll` is required — without it GitHub Pages ignores files and folders it
treats as Jekyll internals.

## Contents

| Path | Purpose |
| --- | --- |
| `index.html` | The page. Three tabs: fixture difficulty, player prices, the model. |
| `support.js` | Component runtime. Must sit beside `index.html`. |
| `lib/fdr-grid.js` | Difficulty grid: projections, quintile scaling, span sorting. |
| `lib/fantasy-players.js` | Fantasy feed parsing, kit marks, filtering and paging. |
| `lib/market-lambda.js` | De-vig and Poisson solver for market-implied goal expectations. |
| `data/ucl-projected-goals.json` | Projected goals for and against, MD1–8 (FPL Schaden). |
| `data/ucl-2026-27-league-phase.json` | All 144 league-phase fixtures and the seeding pots. |
| `data/ucl-fantasy-players-normalised.json` | 935 players with prices, positions and points. |
| `data/ucl-odds-md1.json` | Odds feed slot for the market solver. |

## Local preview

Open over HTTP, not `file://` — the page loads its data with `fetch`:

```
cd site && python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Updating the data

Fixture difficulty reads `data/ucl-projected-goals.json`: `teams[<club>].goalsFor`
and `.goalsAgainst`, eight numbers each, index 0 being matchday 1. Replace those
arrays and the grid, colour scaling and span totals all follow.

Player prices come from the UEFA Fantasy feed
(`gaming.uefa.com/en/uclfantasy/services/api/Feed/players?gamedayId=1&language=en`).
Save a fresh capture over `data/ucl-fantasy-players-normalised.json`, or paste it
into the loader on the Player prices tab.
