#!/usr/bin/env node
// BOOMINAL — Boo the witch cat's rug-filter pipeline.
// SCAN → ASK → CAT → GATE 0.85 → ACT
// Simulated: reads token snapshots from data/cases.json, never touches a wallet.

const fs = require('fs');
const path = require('path');

const GATE = 0.85;
const GUARD = { spendCapSol: 5.0, apeSizeSol: 0.5, lives: 9, maxLivesPerTrade: 1 };
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));

// 02 ASK — seven cheap questions, each answered with a number in [0, 1]
function ask(t) {
  return {
    rug_risk:  clamp((t.lpBurned ? 0 : 0.6) + (t.mintRevoked ? 0 : 0.3) + t.sellTaxPct / 100 + (t.devHoldPct > 10 ? 0.5 : 0)),
    hype:      clamp(t.mentionsPerMin / 25),
    holders:   clamp((t.holders / 1000) * (1 - t.top10Pct / 100) * 1.4),
    dev_trust: clamp(1 - t.devHoldPct / 12),
    bundle:    clamp(t.bundledPct / 60),
    copycat:   t.copycatOf ? 0.94 : 0.05,
    bots:      clamp(t.botMentionPct / 100),
  };
}

// hard tricks: one is enough to swipe, no matter the score
function tricks(t) {
  const out = [];
  if (t.sellTaxPct >= 50) out.push(`honeypot, sell tax ${t.sellTaxPct}%`);
  if (!t.lpBurned) out.push('LP unlocked');
  if (t.devHoldPct > 10) out.push(`dev holds ${t.devHoldPct}%`);
  if (t.bundledPct > 50) out.push(`bundled ${t.bundledPct}%`);
  if (t.copycatOf) out.push(`copycat of $${t.copycatOf}`);
  if (t.botMentionPct > 85) out.push(`${t.botMentionPct}% bot mentions`);
  if (t.socialsAgeMin < 10) out.push(`socials ${t.socialsAgeMin}m old`);
  if (t.top10Pct > 60) out.push(`top10 hold ${t.top10Pct}%`);
  return out;
}

// 03 CAT — Boo packs the answers into one state and scores it (no text generation)
function cat(a) {
  const w = { rug_risk: -0.30, hype: 0.20, holders: 0.25, dev_trust: 0.20, bundle: -0.15, copycat: -0.20, bots: -0.15 };
  let raw = 0;
  for (const k in w) raw += w[k] * a[k];
  return 1 / (1 + Math.exp(-9 * (raw - 0.21))); // squash into a confidence
}

function run(cases) {
  const state = { spent: 0, lives: GUARD.lives, treats: 0, tricks: 0, log: [] };
  for (const t of cases) {
    const a = ask(t);                         // 02 ASK
    const found = tricks(t);                  // 01 SCAN flags
    const score = found.length ? Math.min(cat(a), 0.34 - 0.03 * found.length) : cat(a); // 03 CAT
    const treat = score >= GATE && state.spent + GUARD.apeSizeSol <= GUARD.spendCapSol; // 04 GATE
    if (treat) { state.spent += GUARD.apeSizeSol; state.treats++; }    // 05 ACT (simulated)
    else state.tricks++;
    state.log.push({ ticker: t.ticker, score: +score.toFixed(2), verdict: treat ? 'TREAT' : 'TRICK', why: found[0] || (treat ? 'ape 0.5 SOL · tp 2x/4x/9x · sl -35%' : `score < ${GATE}`) });
  }
  return state;
}

if (require.main === module) {
  const file = process.argv[2] || path.join(__dirname, '..', 'data', 'cases.json');
  const res = run(JSON.parse(fs.readFileSync(file, 'utf8')));
  console.log('\n  🎃 BOOMINAL · Boo the witch cat · gate', GATE, '\n');
  for (const r of res.log) {
    const tag = r.verdict === 'TREAT' ? '\x1b[32mTREAT\x1b[0m' : '\x1b[31mTRICK\x1b[0m';
    console.log(`  cat> ${tag}  $${r.ticker.padEnd(7)} ${r.score.toFixed(2)}  ${r.why}`);
  }
  console.log(`\n  ${res.tricks} tricks swiped · ${res.treats} treats · spent ${res.spent.toFixed(1)}/${GUARD.spendCapSol} SOL · lives ${res.lives}/9\n`);
}

module.exports = { ask, tricks, cat, run, GATE, GUARD };
