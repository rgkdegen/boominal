// Run with: npm test   (Node 18+, no dependencies)
const test = require('node:test');
const assert = require('node:assert');
const { tricks, run, GATE } = require('../src/pipeline');
const cases = require('../data/cases.json');

const clean = {
  ticker: 'CLEAN', mc: 200000, ageSec: 600, devHoldPct: 2, holders: 900, top10Pct: 15,
  bundledPct: 2, mentionsPerMin: 20, botMentionPct: 10, lpBurned: true, mintRevoked: true,
  sellTaxPct: 0, socialsAgeMin: 3000, copycatOf: null,
};

test('a clean coin has no red flags', () => {
  assert.deepStrictEqual(tricks(clean), []);
});

test('each red flag alone is enough to skip', () => {
  const bad = [
    { sellTaxPct: 99 }, { lpBurned: false }, { devHoldPct: 31 }, { bundledPct: 71 },
    { copycatOf: 'WITCH' }, { botMentionPct: 92 }, { socialsAgeMin: 3 }, { top10Pct: 64 },
  ];
  for (const patch of bad) {
    const res = run([{ ...clean, ...patch }]);
    assert.strictEqual(res.log[0].verdict, 'TRICK', JSON.stringify(patch));
  }
});

test('the clean coin clears the gate', () => {
  const res = run([clean]);
  assert.strictEqual(res.log[0].verdict, 'TREAT');
  assert.ok(res.log[0].score >= GATE);
});

test('demo run: 8 tricks, 4 treats, spend cap respected', () => {
  const res = run(cases);
  assert.strictEqual(res.tricks, 8);
  assert.strictEqual(res.treats, 4);
  assert.ok(res.spent <= 5);
});
