// Market → λ pipeline. De-vig bookmaker prices, then solve for the Poisson pair
// that reproduces them. Feed it odds; it returns lambdaHome / lambdaAway.

/** Multiplicative (proportional) de-vig. Fast, standard, slightly favourite-biased. */
export function devigMultiplicative(decimalOdds) {
  const raw = decimalOdds.map(o => 1 / o);
  const sum = raw.reduce((a, b) => a + b, 0);
  return { probs: raw.map(p => p / sum), overround: sum - 1 };
}

/** Power de-vig: solves for k in p_i = raw_i^k. Better on longshots than multiplicative. */
export function devigPower(decimalOdds) {
  const raw = decimalOdds.map(o => 1 / o);
  let lo = 0.5, hi = 1.5;
  for (let i = 0; i < 80; i++) {
    const k = (lo + hi) / 2;
    const s = raw.reduce((a, p) => a + Math.pow(p, k), 0);
    if (s > 1) lo = k; else hi = k;
  }
  const k = (lo + hi) / 2;
  const probs = raw.map(p => Math.pow(p, k));
  const s = probs.reduce((a, b) => a + b, 0);
  return { probs: probs.map(p => p / s), overround: raw.reduce((a, b) => a + b, 0) - 1, k };
}

const pois = (k, lam) => {
  let f = 1;
  for (let i = 2; i <= k; i++) f *= i;
  return Math.exp(-lam) * Math.pow(lam, k) / f;
};

/** P(total goals > line) for a single Poisson with mean total. Line must be x.5. */
function pOver(total, line) {
  const maxK = Math.floor(line);
  let under = 0;
  for (let k = 0; k <= maxK; k++) under += pois(k, total);
  return 1 - under;
}

/** P(home win) for independent Poisson marginals. */
function pHomeWin(lh, la, maxGoals = 12) {
  let p = 0;
  for (let a = 0; a <= maxGoals; a++) {
    let hAbove = 0;
    for (let h = a + 1; h <= maxGoals; h++) hAbove += pois(h, lh);
    p += pois(a, la) * hAbove;
  }
  return p;
}

/**
 * Solve for the λ pair implied by a de-vigged 1X2 probability and a de-vigged
 * over/under probability. Totals line pins the sum; home-win probability pins the split.
 * @param {number} pHome  de-vigged P(home win)
 * @param {number} probOver de-vigged P(total > line)
 * @param {number} line   totals line, e.g. 2.5
 */
export function solveLambdas(pHome, probOver, line = 2.5) {
  let lo = 0.5, hi = 7;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (pOver(mid, line) < probOver) lo = mid; else hi = mid;
  }
  const total = (lo + hi) / 2;
  let a = 0.02, b = 0.98;
  for (let i = 0; i < 60; i++) {
    const share = (a + b) / 2;
    if (pHomeWin(total * share, total * (1 - share)) < pHome) a = share; else b = share;
  }
  const share = (a + b) / 2;
  return { lambdaHome: total * share, lambdaAway: total * (1 - share), total };
}

/** End-to-end: raw prices in, λ out. */
export function lambdasFromOdds({ home, draw, away, over, under, line = 2.5 }, devig = devigPower) {
  const m = devig([home, draw, away]);
  const t = devig([over, under]);
  return {
    ...solveLambdas(m.probs[0], t.probs[0], line),
    probs: { home: m.probs[0], draw: m.probs[1], away: m.probs[2], over: t.probs[0] },
    overround: { match: m.overround, totals: t.overround }
  };
}
