// Fixture difficulty from projected goals (FPL Schaden, MD1-8, captured 11 Oct 2026).
// Each team entry is [name, [[opponent, venue, lambdaFor, lambdaAgainst] x 8]].
export const TEAMS = [["AEK",[["LASK","H",2.03,1.15],["Shakhtar","A",1.42,1.37],["Man City","A",0.91,2.43],["Real Madrid","H",1.31,1.74],["Como","A",1.16,1.42],["Galatasaray","H",1.86,1.13],["Roma","H",1.45,1.21],["Dortmund","A",1.29,1.82]]],["Arsenal",[["Napoli","A",1.8,1.08],["Lille","H",2.42,0.78],["Bayern","A",1.66,1.92],["Slavia","A",2.03,1.15],["Dortmund","H",2.51,1.11],["Real Madrid","H",1.98,1.32],["Betis","A",1.86,1.12],["Sabah","H",2.74,0.59]]],["Atlético",[["Liverpool","A",1.3,2.11],["Man Utd","H",1.93,1.43],["Stuttgart","A",1.89,1.57],["Bayern","H",1.76,2.08],["Viking","H",2.33,1.21],["PSV","A",1.91,1.9],["Bodø","A",1.69,1.69],["Fener","H",2.37,1.1]]],["Barça",[["Feyenoord","H",3.57,0.91],["Galatasaray","A",2.58,1.41],["Paris SG","A",1.87,1.98],["Villa","H",2.56,1.36],["Sabah","A",2.47,0.95],["Man City","H",1.94,1.84],["Sporting","A",1.9,1.86],["Como","H",2.42,1.1]]],["Bayern",[["Bodø","H",3.67,1.08],["Viking","A",2.76,1.56],["Arsenal","H",1.92,1.66],["Atlético","A",2.08,1.76],["Lille","A",2.21,1.27],["Slavia","H",3.07,1.17],["Man Utd","A",2.16,1.86],["Betis","H",2.88,1.14]]],["Betis",[["Lille","A",1.31,1.56],["Porto","H",1.31,1.39],["Feyenoord","H",1.91,1.4],["Dortmund","A",1.35,2.04],["Slovan","A",2.2,1.21],["Como","H",1.53,1.25],["Arsenal","H",1.12,1.86],["Bayern","A",1.14,2.88]]],["Bodø",[["Bayern","A",1.08,3.67],["Dortmund","H",2.04,1.74],["Napoli","A",1.38,1.93],["Lille","H",1.92,1.22],["LASK","H",2.69,1.13],["Lens","A",1.56,1.59],["Atlético","H",1.69,1.69],["Brugge","A",2.01,1.73]]],["Brugge",[["Villa","H",1.49,1.73],["Inter","A",1.04,2.78],["Lens","H",1.64,1.53],["PSV","A",1.51,2.86],["Liverpool","H",1.36,2.52],["Napoli","A",1.13,2.37],["Stuttgart","A",1.5,2.39],["Bodø","H",1.73,2.01]]],["Como",[["Leipzig","H",1.82,1.35],["Feyenoord","A",1.47,1.68],["Man Utd","H",1.54,1.55],["Lens","A",1.29,1.39],["AEK","H",1.42,1.16],["Betis","A",1.25,1.53],["Paris SG","H",1.44,1.63],["Barça","A",1.1,2.42]]],["Dortmund",[["Villarreal","H",2.14,1.42],["Bodø","A",1.74,2.04],["Sabah","A",1.88,1.13],["Betis","H",2.04,1.35],["Arsenal","A",1.11,2.51],["Inter","H",1.67,1.77],["Villa","A",1.54,2.07],["AEK","H",1.82,1.29]]],["Fener",[["Roma","H",1.4,1.57],["Villa","A",1.21,2.33],["Slavia","H",1.73,1.56],["Liverpool","H",1.36,2.28],["Shakhtar","A",1.46,1.81],["LASK","A",1.73,1.55],["Villarreal","H",1.68,1.78],["Atlético","A",1.1,2.37]]],["Feyenoord",[["Barça","A",0.91,3.57],["Como","H",1.68,1.47],["Betis","A",1.4,1.91],["Inter","H",1.46,1.96],["Porto","H",1.43,1.65],["Viking","A",1.66,2.07],["Galatasaray","A",1.67,1.88],["Leipzig","H",1.9,1.78]]],["Galatasaray",[["Sporting","A",1.2,2.08],["Barça","H",1.41,2.58],["Lille","A",1.26,1.7],["Stuttgart","H",1.9,1.7],["Villa","H",1.53,1.84],["AEK","A",1.13,1.86],["Feyenoord","H",1.88,1.67],["Paris SG","A",1.15,2.56]]],["Inter",[["Real Madrid","A",1.31,2.25],["Brugge","H",2.78,1.04],["Shakhtar","H",2.48,0.99],["Feyenoord","A",1.96,1.46],["Stuttgart","H",2.53,1.17],["Dortmund","A",1.77,1.67],["Liverpool","H",1.8,1.59],["Slovan","A",2.8,1]]],["LASK",[["AEK","A",1.15,2.03],["Liverpool","H",1.12,2.73],["Sporting","A",0.93,2.86],["Slovan","H",2.25,1.32],["Bodø","A",1.13,2.69],["Fener","H",1.55,1.73],["Real Madrid","A",0.88,3.31],["Porto","H",1.06,1.93]]],["Leipzig",[["Como","A",1.35,1.82],["PSV","H",2.31,1.86],["Real Madrid","A",1.28,2.56],["Man City","H",1.42,2.33],["Lens","H",1.99,1.24],["Man Utd","A",1.47,2.22],["Shakhtar","H",2.23,1.29],["Feyenoord","A",1.78,1.9]]],["Lens",[["Slavia","A",1.42,1.53],["Sporting","H",1.32,1.67],["Brugge","A",1.53,1.64],["Como","H",1.39,1.29],["Leipzig","A",1.24,1.99],["Bodø","H",1.59,1.56],["Man City","H",1.09,2.18],["Liverpool","A",0.99,2.62]]],["Lille",[["Betis","H",1.56,1.31],["Arsenal","A",0.78,2.42],["Galatasaray","H",1.7,1.26],["Bodø","A",1.22,1.92],["Bayern","H",1.27,2.21],["Stuttgart","A",1.34,1.8],["Slovan","H",2.44,0.96],["Roma","A",1.06,1.71]]],["Liverpool",[["Atlético","H",2.11,1.3],["LASK","A",2.73,1.12],["Villarreal","H",2.56,1.26],["Fener","A",2.28,1.36],["Brugge","A",2.52,1.36],["Porto","H",1.99,1.19],["Inter","A",1.59,1.8],["Lens","H",2.62,0.99]]],["Man City",[["Porto","A",1.94,1.21],["Paris SG","H",2.46,1.29],["AEK","H",2.43,0.91],["Leipzig","A",2.33,1.42],["Napoli","H",2.42,1.05],["Barça","A",1.84,1.94],["Lens","A",2.18,1.09],["Sporting","H",2.31,1.22]]],["Man Utd",[["Sabah","H",3.25,0.79],["Atlético","A",1.43,1.93],["Como","A",1.55,1.54],["Roma","H",1.95,1.32],["Sporting","A",1.48,2],["Leipzig","H",2.22,1.47],["Bayern","H",1.86,2.16],["Villarreal","A",1.73,1.84]]],["Napoli",[["Arsenal","H",1.08,1.8],["Villarreal","A",1.49,1.7],["Bodø","H",1.93,1.38],["Porto","A",1.13,1.58],["Man City","A",1.05,2.42],["Brugge","H",2.37,1.13],["Sabah","A",1.65,0.96],["Viking","H",2.11,1.24]]],["Paris SG",[["Slovan","H",3.9,0.61],["Man City","A",1.29,2.46],["Barça","H",1.98,1.87],["Villarreal","A",1.78,1.73],["Roma","H",2.08,1.23],["Villa","A",1.68,1.78],["Como","A",1.63,1.44],["Galatasaray","H",2.56,1.15]]],["Porto",[["Man City","H",1.21,1.94],["Betis","A",1.39,1.31],["PSV","H",2.13,1.37],["Napoli","H",1.58,1.13],["Feyenoord","A",1.65,1.43],["Liverpool","A",1.19,1.99],["Slavia","H",1.92,1.06],["LASK","A",1.93,1.06]]],["PSV",[["Shakhtar","H",2.49,1.17],["Leipzig","A",1.86,2.31],["Porto","A",1.37,2.13],["Brugge","H",2.86,1.51],["Real Madrid","A",1.45,2.99],["Atlético","H",1.9,1.91],["Viking","A",2.03,2.1],["Stuttgart","H",2.6,1.71]]],["Real Madrid",[["Inter","H",2.25,1.31],["Roma","A",1.76,1.44],["Leipzig","H",2.56,1.28],["AEK","A",1.74,1.31],["PSV","H",2.99,1.45],["Arsenal","A",1.32,1.98],["LASK","H",3.31,0.88],["Shakhtar","A",2.19,1.29]]],["Roma",[["Fener","A",1.57,1.4],["Real Madrid","H",1.44,1.76],["Slovan","H",2.91,0.9],["Man Utd","A",1.32,1.95],["Paris SG","A",1.23,2.08],["Sporting","H",1.52,1.53],["AEK","A",1.21,1.45],["Lille","H",1.71,1.06]]],["Sabah",[["Man Utd","A",0.79,3.25],["Slavia","H",1.16,1.54],["Dortmund","H",1.13,1.88],["Viking","A",1,2.05],["Barça","H",0.95,2.47],["Villarreal","A",0.89,2.21],["Napoli","H",0.96,1.65],["Arsenal","A",0.59,2.74]]],["Shakhtar",[["PSV","A",1.17,2.49],["AEK","H",1.37,1.42],["Inter","A",0.99,2.48],["Sporting","H",1.37,1.88],["Fener","H",1.81,1.46],["Slovan","A",2.06,1.41],["Leipzig","A",1.29,2.23],["Real Madrid","H",1.29,2.19]]],["Slavia",[["Lens","H",1.53,1.42],["Sabah","A",1.54,1.16],["Fener","A",1.56,1.73],["Arsenal","H",1.15,2.03],["Villarreal","H",1.76,1.62],["Bayern","A",1.17,3.07],["Porto","A",1.06,1.92],["Villa","H",1.6,1.68]]],["Slovan",[["Paris SG","A",0.61,3.9],["Stuttgart","H",1.44,2.45],["Roma","A",0.9,2.91],["LASK","A",1.32,2.25],["Betis","H",1.21,2.2],["Shakhtar","H",1.41,2.06],["Lille","A",0.96,2.44],["Inter","H",1,2.8]]],["Sporting",[["Galatasaray","H",2.08,1.2],["Lens","A",1.67,1.32],["LASK","H",2.86,0.93],["Shakhtar","A",1.88,1.37],["Man Utd","H",2,1.48],["Roma","A",1.53,1.52],["Barça","H",1.86,1.9],["Man City","A",1.22,2.31]]],["Stuttgart",[["Viking","H",2.8,1.14],["Slovan","A",2.45,1.44],["Atlético","H",1.57,1.89],["Galatasaray","A",1.7,1.9],["Inter","A",1.17,2.53],["Lille","H",1.8,1.34],["Brugge","H",2.39,1.5],["PSV","A",1.71,2.6]]],["Viking",[["Stuttgart","A",1.14,2.8],["Bayern","H",1.56,2.76],["Villa","A",1.33,2.32],["Sabah","H",2.05,1],["Atlético","A",1.21,2.33],["Feyenoord","H",2.07,1.66],["PSV","H",2.1,2.03],["Napoli","A",1.24,2.11]]],["Villa",[["Brugge","A",1.73,1.49],["Fener","H",2.33,1.21],["Viking","H",2.32,1.33],["Barça","A",1.36,2.56],["Galatasaray","A",1.84,1.53],["Paris SG","H",1.78,1.68],["Dortmund","H",2.07,1.54],["Slavia","A",1.68,1.6]]],["Villarreal",[["Dortmund","A",1.42,2.14],["Napoli","H",1.7,1.49],["Liverpool","A",1.26,2.56],["Paris SG","H",1.73,1.78],["Slavia","A",1.62,1.76],["Sabah","H",2.21,0.89],["Fener","A",1.78,1.68],["Man Utd","H",1.84,1.73]]]];

export const CODES = {"AEK":"AEK","Arsenal":"ARS","Villa":"AVL","Atlético":"ATM","Barça":"BAR","Bayern":"BAY","Bodø":"BOD","Dortmund":"BVB","Brugge":"BRU","Como":"COM","Fener":"FEN","Feyenoord":"FEY","Galatasaray":"GAL","Inter":"INT","LASK":"LASK","Leipzig":"RBL","Lens":"LEN","Lille":"LIL","Liverpool":"LIV","Man City":"MCI","Man Utd":"MUN","Napoli":"NAP","Paris SG":"PSG","Porto":"POR","PSV":"PSV","Betis":"BET","Real Madrid":"RMA","Roma":"ROM","Sabah":"SAB","Shakhtar":"SHK","Slavia":"SLA","Slovan":"SLB","Sporting":"SPO","Stuttgart":"STU","Viking":"VFK","Villarreal":"VIL"};

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
 * @param {number[]} days  matchdays to include (1-8), in any order
 * @param {string} sort    'Easiest first' | 'Hardest first' | 'Alphabetical'
 * @param {string} metric  'Attack' | 'Defence' | 'Combined'
 */
export function buildGrid(days = [1, 2, 3, 4, 5, 6, 7, 8], sort = 'Easiest first', metric = 'Attack') {
  const picked = [...new Set(days.map(Number).filter(d => d >= 1 && d <= 8))].sort((a, b) => a - b);
  const set = picked.length ? picked : [1, 2, 3, 4, 5, 6, 7, 8];
  const rows = TEAMS.map(([name, mds]) => {
    const cells = mds.map((c, i) => {
      const n = quintile(raw(c, metric), metric);
      const v = shown(c, metric);
      return {
        n,
        opponent: c[0],
        venue: c[1],
        label: c[0] + ' (' + c[1] + ')',
        value: (metric === 'Combined' && v > 0 ? '+' : '') + v.toFixed(2),
        bg: PALETTE[n - 1][0],
        fg: PALETTE[n - 1][1],
        opacity: set.includes(i + 1) ? '1' : '0.28'
      };
    });
    const span = set.map(d => mds[d - 1]);
    const mean = span.reduce((a, c) => a + shown(c, metric), 0) / span.length;
    return {
      name, code: CODES[name] || '', cells,
      spanMean: (metric === 'Combined' && mean > 0 ? '+' : '') + mean.toFixed(2),
      spanRank: span.reduce((a, c) => a + raw(c, metric), 0) / span.length
    };
  });
  if (sort === 'Easiest first') rows.sort((a, b) => a.spanRank - b.spanRank || a.name.localeCompare(b.name));
  else if (sort === 'Hardest first') rows.sort((a, b) => b.spanRank - a.spanRank || a.name.localeCompare(b.name));
  return rows;
}

export const legend = PALETTE.map((p, i) => ({ label: String(i + 1), bg: p[0], fg: p[1] }));
