# Boo's red flags 🚩

One of these is enough for Boo to skip a coin, no matter how good the rest looks.

| # | flag | rule in `src/pipeline.js` | why it kills a coin |
|---|---|---|---|
| 1 | **Honeypot** | sell tax ≥ 50% | you can buy, you can't sell |
| 2 | **LP unlocked** | `lpBurned == false` | the dev can pull liquidity at any time |
| 3 | **Dev bag** | dev holds > 10% | one wallet can dump on everyone |
| 4 | **Bundled launch** | > 50% bought by linked wallets in one block | the "holders" are one person |
| 5 | **Copycat** | same name/art as an earlier coin | rides someone else's chart, usually dies first |
| 6 | **Bot hype** | > 85% of X mentions from bot-like accounts | the attention is paid for |
| 7 | **Fresh socials** | socials younger than 10 minutes | made for the launch, gone after it |
| 8 | **Top-10 concentration** | top 10 wallets hold > 60% | same as a dev bag, spread over wallets |

Planned flags (see [ROADMAP.md](ROADMAP.md)):

- **Mint / freeze authority live**: the dev can print supply or freeze holders
- **Hidden proxy / upgradeable contract**: the rules can change after you buy
- **Serial rugger**: the dev wallet, or its funder, already rugged an earlier coin (the "séance" from part III)
- **Sniper cluster**: many wallets buying in block 0

## The episodes, mapped to flags

| episode | what you see | flag behind it |
|---|---|---|
| II · Cauldron | `fee.sell: 99%` turns red | honeypot |
| II · Cauldron | `fn pull() -> lp.remove(owner)` | LP pull |
| III · Séance | "same dev. he pulled my LP" | serial rugger |
| Swipes | "still close with my dev wallet" | dev bag |
| Swipes | "23 wallets already love me" | bundled launch |
| Swipes | "yes these are my real photos" | copycat |
