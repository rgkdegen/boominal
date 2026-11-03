# Roadmap

What is done, and what is planned next. Plans can change.

## ✅ Shipped

- [x] 5-step pipeline: SCAN → ASK → CAT → GATE → ACT (`src/pipeline.js`)
- [x] 8 hard red flags + 0.85 confidence gate
- [x] 12 demo token snapshots (`data/cases.json`)
- [x] Animated terminals for 6 episodes, each exportable to MP4 (`scripts/render.js`)
- [x] Tests for the gate rules (`npm test`)

## 🔜 Next

- [ ] **Live feed**: read new pairs from a pump.fun stream instead of a JSON file
- [ ] **Mint / freeze authority checks** read straight from the token account
- [ ] **Contract check**: flag upgradeable programs and transfer hooks
- [ ] **Serial-rugger memory**: remember every rugged dev and its funding wallet, flag their next launch (the part III "séance")
- [ ] **Sniper / bundle clustering** by funding source, not just same-block buys
- [ ] **Telegram alerts**: one message per skip and per entry, like the Night Shift phone
- [ ] **Paper-trading mode**: log every decision with entry, exit and PnL before any real money

## 💭 Later

- [ ] Public scoreboard of skipped coins and what happened to them 24h later
- [ ] Config file for weights, gate and position size
- [ ] Web dashboard built from the terminal pages

Ideas and PRs welcome, open an issue.
