// Fixture difficulty from projected goals (FPL Schaden, MD1-8, captured 3 Sep 2026).
// Each team entry is [name, [[opponent, venue, lambdaFor, lambdaAgainst] x 8]].
export const TEAMS = [["AEK",[["LASK","H",1.99,1.12],["Shakhtar","A",1.38,1.33],["Man City","A",0.88,2.39],["Real Madrid","H",1.27,1.64],["Como","A",1.12,1.38],["Galatasaray","H",1.81,1.09],["Roma","H",1.41,1.17],["Dortmund","A",1.25,1.78]]],["Arsenal",[["Napoli","A",1.71,1.06],["Lille","H",2.31,0.74],["Bayern","A",1.62,1.91],["Slavia","A",1.98,1.11],["Dortmund","H",2.44,1.07],["Real Madrid","H",1.95,1.25],["Betis","A",1.82,1.08],["Sabah","H",2.72,0.55]]],["Atlético",[["Liverpool","A",1.16,1.98],["Man Utd","H",1.89,1.39],["Stuttgart","A",1.82,1.55],["Bayern","H",1.72,1.92],["Viking","H",2.3,1.17],["PSV","A",1.83,1.86],["Bodø","A",1.65,1.65],["Fener","H",2.3,1.06]]],["Barça",[["Feyenoord","H",3.43,0.9],["Galatasaray","A",2.46,1.37],["Paris SG","A",1.87,1.9],["Villa","H",2.51,1.33],["Sabah","A",2.41,0.91],["Man City","H",1.93,1.85],["Sporting","A",1.84,1.77],["Como","H",2.47,1.06]]],["Bayern",[["Bodø","H",3.53,1.08],["Viking","A",2.61,1.52],["Arsenal","H",1.91,1.62],["Atlético","A",1.92,1.72],["Lille","A",2.2,1.23],["Slavia","H",3.04,1.13],["Man Utd","A",2.14,1.81],["Betis","H",2.79,1.1]]],["Betis",[["Lille","A",1.25,1.51],["Porto","H",1.27,1.35],["Feyenoord","H",1.87,1.36],["Dortmund","A",1.31,1.99],["Slovan","A",2.15,1.17],["Como","H",1.49,1.21],["Arsenal","H",1.08,1.82],["Bayern","A",1.1,2.79]]],["Bodø",[["Bayern","A",1.08,3.53],["Dortmund","H",2,1.7],["Napoli","A",1.33,1.89],["Lille","H",1.89,1.18],["LASK","H",2.63,1.09],["Lens","A",1.53,1.55],["Atlético","H",1.65,1.65],["Brugge","A",1.98,1.69]]],["Brugge",[["Villa","H",1.48,1.68],["Inter","A",1,2.73],["Lens","H",1.6,1.49],["PSV","A",1.47,2.84],["Liverpool","H",1.32,2.57],["Napoli","A",1.09,2.31],["Stuttgart","A",1.46,2.37],["Bodø","H",1.69,1.98]]],["Como",[["Leipzig","H",1.7,1.34],["Feyenoord","A",1.43,1.64],["Man Utd","H",1.5,1.51],["Lens","A",1.25,1.35],["AEK","H",1.38,1.12],["Betis","A",1.21,1.49],["Paris SG","H",1.4,1.6],["Barça","A",1.06,2.47]]],["Dortmund",[["Villarreal","H",2.03,1.36],["Bodø","A",1.7,2],["Sabah","A",1.84,1.09],["Betis","H",1.99,1.31],["Arsenal","A",1.07,2.44],["Inter","H",1.63,1.7],["Villa","A",1.5,2.03],["AEK","H",1.78,1.25]]],["Fener",[["Roma","H",1.41,1.44],["Villa","A",1.17,2.28],["Slavia","H",1.69,1.52],["Liverpool","H",1.32,2.3],["Shakhtar","A",1.42,1.76],["LASK","A",1.69,1.51],["Villarreal","H",1.64,1.73],["Atlético","A",1.06,2.3]]],["Feyenoord",[["Barça","A",0.9,3.43],["Como","H",1.64,1.43],["Betis","A",1.36,1.87],["Inter","H",1.42,1.9],["Porto","H",1.39,1.6],["Viking","A",1.62,2.02],["Galatasaray","A",1.63,1.84],["Leipzig","H",1.86,1.74]]],["Galatasaray",[["Sporting","A",1.17,1.95],["Barça","H",1.37,2.46],["Lille","A",1.22,1.66],["Stuttgart","H",1.86,1.67],["Villa","H",1.49,1.81],["AEK","A",1.09,1.81],["Feyenoord","H",1.84,1.63],["Paris SG","A",1.11,2.59]]],["Inter",[["Real Madrid","A",1.18,2.1],["Brugge","H",2.73,1],["Shakhtar","H",2.39,0.95],["Feyenoord","A",1.9,1.42],["Stuttgart","H",2.45,1.14],["Dortmund","A",1.7,1.63],["Liverpool","H",1.74,1.58],["Slovan","A",2.78,0.96]]],["LASK",[["AEK","A",1.12,1.99],["Liverpool","H",1.08,2.68],["Sporting","A",0.89,2.78],["Slovan","H",2.2,1.28],["Bodø","A",1.09,2.63],["Fener","H",1.51,1.69],["Real Madrid","A",0.84,3.23],["Porto","H",1.02,1.88]]],["Leipzig",[["Como","A",1.34,1.7],["PSV","H",2.26,1.79],["Real Madrid","A",1.24,2.49],["Man City","H",1.39,2.25],["Lens","H",1.94,1.2],["Man Utd","A",1.44,2.18],["Shakhtar","H",2.19,1.25],["Feyenoord","A",1.74,1.86]]],["Lens",[["Slavia","A",1.38,1.49],["Sporting","H",1.28,1.62],["Brugge","A",1.49,1.6],["Como","H",1.35,1.25],["Leipzig","A",1.2,1.94],["Bodø","H",1.55,1.53],["Man City","H",1.05,2.16],["Liverpool","A",0.95,2.53]]],["Lille",[["Betis","H",1.51,1.25],["Arsenal","A",0.74,2.31],["Galatasaray","H",1.66,1.22],["Bodø","A",1.18,1.89],["Bayern","H",1.23,2.2],["Stuttgart","A",1.3,1.78],["Slovan","H",2.39,0.92],["Roma","A",1.02,1.67]]],["Liverpool",[["Atlético","H",1.98,1.16],["LASK","A",2.68,1.08],["Villarreal","H",2.59,1.23],["Fener","A",2.3,1.32],["Brugge","A",2.57,1.32],["Porto","H",1.97,1.15],["Inter","A",1.58,1.74],["Lens","H",2.53,0.95]]],["Man City",[["Porto","A",1.88,1.14],["Paris SG","H",2.43,1.25],["AEK","H",2.39,0.88],["Leipzig","A",2.25,1.39],["Napoli","H",2.39,1.01],["Barça","A",1.85,1.93],["Lens","A",2.16,1.05],["Sporting","H",2.39,1.16]]],["Man Utd",[["Sabah","H",3.13,0.74],["Atlético","A",1.39,1.89],["Como","A",1.51,1.5],["Roma","H",1.9,1.28],["Sporting","A",1.43,1.96],["Leipzig","H",2.18,1.44],["Bayern","H",1.81,2.14],["Villarreal","A",1.69,1.8]]],["Napoli",[["Arsenal","H",1.06,1.71],["Villarreal","A",1.44,1.66],["Bodø","H",1.89,1.33],["Porto","A",1.09,1.54],["Man City","A",1.01,2.39],["Brugge","H",2.31,1.09],["Sabah","A",1.6,0.92],["Viking","H",2.07,1.2]]],["Paris SG",[["Slovan","H",3.81,0.53],["Man City","A",1.25,2.43],["Barça","H",1.9,1.87],["Villarreal","A",1.79,1.69],["Roma","H",2.02,1.19],["Villa","A",1.63,1.75],["Como","A",1.6,1.4],["Galatasaray","H",2.59,1.11]]],["Porto",[["Man City","H",1.14,1.88],["Betis","A",1.35,1.27],["PSV","H",2.08,1.34],["Napoli","H",1.54,1.09],["Feyenoord","A",1.6,1.39],["Liverpool","A",1.15,1.97],["Slavia","H",1.87,1.02],["LASK","A",1.88,1.02]]],["PSV",[["Shakhtar","H",2.42,1.06],["Leipzig","A",1.79,2.26],["Porto","A",1.34,2.08],["Brugge","H",2.84,1.47],["Real Madrid","A",1.41,2.81],["Atlético","H",1.86,1.83],["Viking","A",1.99,2.06],["Stuttgart","H",2.55,1.69]]],["Real Madrid",[["Inter","H",2.1,1.18],["Roma","A",1.71,1.4],["Leipzig","H",2.49,1.24],["AEK","A",1.64,1.27],["PSV","H",2.81,1.41],["Arsenal","A",1.25,1.95],["LASK","H",3.23,0.84],["Shakhtar","A",2.13,1.25]]],["Roma",[["Fener","A",1.44,1.41],["Real Madrid","H",1.4,1.71],["Slovan","H",2.88,0.86],["Man Utd","A",1.28,1.9],["Paris SG","A",1.19,2.02],["Sporting","H",1.49,1.47],["AEK","A",1.17,1.41],["Lille","H",1.67,1.02]]],["Sabah",[["Man Utd","A",0.74,3.13],["Slavia","H",1.12,1.5],["Dortmund","H",1.09,1.84],["Viking","A",0.96,2.01],["Barça","H",0.91,2.41],["Villarreal","A",0.85,2.17],["Napoli","H",0.92,1.6],["Arsenal","A",0.55,2.72]]],["Shakhtar",[["PSV","A",1.06,2.42],["AEK","H",1.33,1.38],["Inter","A",0.95,2.39],["Sporting","H",1.33,1.84],["Fener","H",1.76,1.42],["Slovan","A",2.01,1.37],["Leipzig","A",1.25,2.19],["Real Madrid","H",1.25,2.13]]],["Slavia",[["Lens","H",1.49,1.38],["Sabah","A",1.5,1.12],["Fener","A",1.52,1.69],["Arsenal","H",1.11,1.98],["Villarreal","H",1.71,1.58],["Bayern","A",1.13,3.04],["Porto","A",1.02,1.87],["Villa","H",1.56,1.64]]],["Slovan",[["Paris SG","A",0.53,3.81],["Stuttgart","H",1.4,2.42],["Roma","A",0.86,2.88],["LASK","A",1.28,2.2],["Betis","H",1.17,2.15],["Shakhtar","H",1.37,2.01],["Lille","A",0.92,2.39],["Inter","H",0.96,2.78]]],["Sporting",[["Galatasaray","H",1.95,1.17],["Lens","A",1.62,1.28],["LASK","H",2.78,0.89],["Shakhtar","A",1.84,1.33],["Man Utd","H",1.96,1.43],["Roma","A",1.47,1.49],["Barça","H",1.77,1.84],["Man City","A",1.16,2.39]]],["Stuttgart",[["Viking","H",2.87,1.13],["Slovan","A",2.42,1.4],["Atlético","H",1.55,1.82],["Galatasaray","A",1.67,1.86],["Inter","A",1.14,2.45],["Lille","H",1.78,1.3],["Brugge","H",2.37,1.46],["PSV","A",1.69,2.55]]],["Viking",[["Stuttgart","A",1.13,2.87],["Bayern","H",1.52,2.61],["Villa","A",1.29,2.28],["Sabah","H",2.01,0.96],["Atlético","A",1.17,2.3],["Feyenoord","H",2.02,1.62],["PSV","H",2.06,1.99],["Napoli","A",1.2,2.07]]],["Villa",[["Brugge","A",1.68,1.48],["Fener","H",2.28,1.17],["Viking","H",2.28,1.29],["Barça","A",1.33,2.51],["Galatasaray","A",1.81,1.49],["Paris SG","H",1.75,1.63],["Dortmund","H",2.03,1.5],["Slavia","A",1.64,1.56]]],["Villarreal",[["Dortmund","A",1.36,2.03],["Napoli","H",1.66,1.44],["Liverpool","A",1.23,2.59],["Paris SG","H",1.69,1.79],["Slavia","A",1.58,1.71],["Sabah","H",2.17,0.85],["Fener","A",1.73,1.64],["Man Utd","H",1.8,1.69]]]];

const PALETTE = [
  ['#375a1e', '#ffffff'],
  ['#22f07f', '#1c0a2e'],
  ['#eef0f2', '#3b1d54'],
  ['#f4234f', '#ffffff'],
  ['#8e1230', '#ffffff']
];

export const METRICS = ['Attack', 'Defence', 'Combined'];

// Difficulty rises as lambdaFor falls and as lambdaAgainst rises.
const raw = (cell, metric) => {
  const [, , lf, la] = cell;
  if (metric === 'Attack') return -lf;
  if (metric === 'Defence') return la;
  return la - lf;
};

const scale = {};
for (const metric of METRICS) {
  scale[metric] = TEAMS.flatMap(([, mds]) => mds.map(c => raw(c, metric))).sort((a, b) => a - b);
}
const quintile = (v, metric) => {
  const arr = scale[metric];
  return Math.min(5, Math.floor((arr.filter(x => x < v).length / arr.length) * 5) + 1);
};

const shown = (cell, metric) => {
  const [, , lf, la] = cell;
  if (metric === 'Attack') return lf;
  if (metric === 'Defence') return la;
  return lf - la;
};

/**
 * @param {number} from   first matchday of the span (1-8)
 * @param {number} to     last matchday of the span (1-8)
 * @param {string} sort   'Easiest first' | 'Hardest first' | 'Alphabetical'
 * @param {string} metric 'Attack' | 'Defence' | 'Combined'
 */
export function buildGrid(from = 1, to = 8, sort = 'Easiest first', metric = 'Attack') {
  const lo = Math.max(1, Math.min(8, from)), hi = Math.max(lo, Math.min(8, to));
  const rows = TEAMS.map(([name, mds]) => {
    const cells = mds.map((c, i) => {
      const n = quintile(raw(c, metric), metric);
      const inSpan = i + 1 >= lo && i + 1 <= hi;
      const v = shown(c, metric);
      return {
        n,
        opponent: c[0],
        venue: c[1],
        label: c[0] + ' (' + c[1] + ')',
        value: (metric === 'Combined' && v > 0 ? '+' : '') + v.toFixed(2),
        bg: PALETTE[n - 1][0],
        fg: PALETTE[n - 1][1],
        opacity: inSpan ? '1' : '0.28'
      };
    });
    const span = mds.slice(lo - 1, hi);
    const mean = span.reduce((a, c) => a + shown(c, metric), 0) / span.length;
    return {
      name, cells,
      spanMean: (metric === 'Combined' && mean > 0 ? '+' : '') + mean.toFixed(2),
      spanRank: span.reduce((a, c) => a + raw(c, metric), 0) / span.length
    };
  });
  if (sort === 'Easiest first') rows.sort((a, b) => a.spanRank - b.spanRank || a.name.localeCompare(b.name));
  else if (sort === 'Hardest first') rows.sort((a, b) => b.spanRank - a.spanRank || a.name.localeCompare(b.name));
  return rows;
}

export const legend = PALETTE.map((p, i) => ({ label: String(i + 1), bg: p[0], fg: p[1] }));
