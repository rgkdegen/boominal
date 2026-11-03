# How Boo works

Boo is a rug filter for brand-new pump.fun pairs. Its one job is to say **no** fast, and to say **yes** only when nothing is wrong.

```
new pair ──► 01 SCAN ──► 02 ASK ──► 03 CAT ──► 04 GATE ──► 05 ACT
             snapshot    7 checks   1 score    0.85 + flags  size · tp · sl
```

## 01 · SCAN

For every new pair Boo takes one snapshot of the token:

| field | what it is |
|---|---|
| `mc`, `ageSec` | market cap and age of the pair |
| `devHoldPct` | share of supply held by the deployer wallet |
| `holders`, `top10Pct` | holder count and share held by the 10 biggest wallets |
| `bundledPct` | share of supply bought in the same block by linked wallets |
| `mentionsPerMin`, `botMentionPct` | X mentions per minute and how many of them come from bot-like accounts |
| `lpBurned`, `mintRevoked` | liquidity burned or not, mint authority revoked or not |
| `sellTaxPct` | effective sell tax (99% = honeypot) |
| `socialsAgeMin` | how old the token's socials are |
| `copycatOf` | ticker of an earlier coin with the same name/art, if any |

See [`data/cases.json`](../data/cases.json) for 12 real-shaped examples.

## 02 · ASK

Seven cheap questions, each answered with a number from 0 to 1 (`src/pipeline.js → ask()`):

| ask | high means |
|---|---|
| `rug_risk` | LP not burned, mint live, sell tax, dev bag |
| `hype` | real attention on X |
| `holders` | many holders, low concentration |
| `dev_trust` | dev holds little of the supply |
| `bundle` | supply was bundled at launch |
| `copycat` | the coin clones an earlier one |
| `bots` | mentions are mostly bots |

## 03 · CAT

Boo packs the seven answers into **one state** and scores it with fixed weights. A logistic curve turns that into a 0 to 1 confidence. There is no text generation in this step, so a decision costs fractions of a cent and takes milliseconds.

## 04 · GATE

Two rules, in this order:

1. **Any hard red flag = skip.** One is enough, whatever the score. See [RED_FLAGS.md](RED_FLAGS.md).
2. **Score under 0.85 = skip.** Boo would rather miss a pump than hold a rug.

## 05 · ACT

Only for coins that pass the gate:

- size **0.5 SOL**
- take-profit ladder **2× / 4× / 9×**, 10% left as a moon bag
- stop-loss **−35%** with a trailing stop
- the dev is added to the blacklist if the coin later rugs

## Guardrails (always on)

- session spend cap (default 5 SOL)
- never hold through an LP unlock
- one position per coin, "one life per trade"
- alerts and posts are drafts only, nothing is auto-posted

## Run it

```bash
node src/pipeline.js              # run the 12 demo cases
node src/pipeline.js my.json      # run your own snapshots (same fields)
npm test                          # check the gate rules
```

The current version reads snapshots from a file. It does not connect to a wallet or send transactions.
