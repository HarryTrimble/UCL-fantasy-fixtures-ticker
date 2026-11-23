// Fixture difficulty from projected goals (FPL Schaden: MD1-4 captured 11 Oct 2026, MD5-8 updated 23 Nov 2026).
// Each team entry is [name, [[opponent, venue, lambdaFor, lambdaAgainst] x 8]].
export const TEAMS = [["AEK",[["LASK","H",2.03,1.15],["Shakhtar","A",1.42,1.37],["Man City","A",0.91,2.43],["Real Madrid","H",1.31,1.74],["Como","A",1.02,2.52],["Galatasaray","H",1.73,1.49],["Roma","H",1.28,1.71],["Dortmund","A",0.98,2.29]]],["Arsenal",[["Napoli","A",1.8,1.08],["Lille","H",2.42,0.78],["Bayern","A",1.66,1.92],["Slavia","A",2.03,1.15],["Dortmund","H",2.27,0.88],["Real Madrid","H",1.79,1.16],["Betis","A",1.97,0.95],["Sabah","H",3.93,0.43]]],["Atlético",[["Liverpool","A",1.3,2.11],["Man Utd","H",1.93,1.43],["Stuttgart","A",1.89,1.57],["Bayern","H",1.76,2.08],["Viking","H",3.16,0.72],["PSV","A",1.86,1.47],["Bodø","A",1.87,1.37],["Fener","H",2.3,0.95]]],["Barça",[["Feyenoord","H",3.57,0.91],["Galatasaray","A",2.58,1.41],["Paris SG","A",1.87,1.98],["Villa","H",2.56,1.36],["Sabah","A",3.92,0.93],["Man City","H",2.26,1.63],["Sporting","A",2.36,1.42],["Como","H",2.81,1.15]]],["Bayern",[["Bodø","H",3.67,1.08],["Viking","A",2.76,1.56],["Arsenal","H",1.92,1.66],["Atlético","A",2.08,1.76],["Lille","A",2.16,1.11],["Slavia","H",3.56,0.83],["Man Utd","A",2.1,1.62],["Betis","H",3.15,1.04]]],["Betis",[["Lille","A",1.31,1.56],["Porto","H",1.31,1.39],["Feyenoord","H",1.91,1.4],["Dortmund","A",1.35,2.04],["Slovan","A",2.7,0.91],["Como","H",1.54,1.56],["Arsenal","H",0.95,1.97],["Bayern","A",1.04,3.15]]],["Bodø",[["Bayern","A",1.08,3.67],["Dortmund","H",2.04,1.74],["Napoli","A",1.38,1.93],["Lille","H",1.92,1.22],["LASK","H",2.58,1.37],["Lens","A",1.59,1.79],["Atlético","H",1.37,1.87],["Brugge","A",1.63,2.09]]],["Brugge",[["Villa","H",1.49,1.73],["Inter","A",1.04,2.78],["Lens","H",1.64,1.53],["PSV","A",1.51,2.86],["Liverpool","H",1.46,2.45],["Napoli","A",1.26,2.08],["Stuttgart","A",1.48,2.35],["Bodø","H",2.09,1.63]]],["Como",[["Leipzig","H",1.82,1.35],["Feyenoord","A",1.47,1.68],["Man Utd","H",1.54,1.55],["Lens","A",1.29,1.39],["AEK","H",2.52,1.02],["Betis","A",1.56,1.54],["Paris SG","H",1.53,1.81],["Barça","A",1.15,2.81]]],["Dortmund",[["Villarreal","H",2.14,1.42],["Bodø","A",1.74,2.04],["Sabah","A",1.88,1.13],["Betis","H",2.04,1.35],["Arsenal","A",0.88,2.27],["Inter","H",1.73,1.55],["Villa","A",1.44,1.71],["AEK","H",2.29,0.98]]],["Fener",[["Roma","H",1.4,1.57],["Villa","A",1.21,2.33],["Slavia","H",1.73,1.56],["Liverpool","H",1.36,2.28],["Shakhtar","A",1.42,1.55],["LASK","A",1.77,1.63],["Villarreal","H",1.63,1.57],["Atlético","A",0.95,2.3]]],["Feyenoord",[["Barça","A",0.91,3.57],["Como","H",1.68,1.47],["Betis","A",1.4,1.91],["Inter","H",1.46,1.96],["Porto","H",1.46,1.61],["Viking","A",1.9,1.73],["Galatasaray","A",1.49,2.2],["Leipzig","H",1.75,2.02]]],["Galatasaray",[["Sporting","A",1.2,2.08],["Barça","H",1.41,2.58],["Lille","A",1.26,1.7],["Stuttgart","H",1.9,1.7],["Villa","H",1.74,1.91],["AEK","A",1.49,1.73],["Feyenoord","H",2.2,1.49],["Paris SG","A",1.05,3.21]]],["Inter",[["Real Madrid","A",1.31,2.25],["Brugge","H",2.78,1.04],["Shakhtar","H",2.48,0.99],["Feyenoord","A",1.96,1.46],["Stuttgart","H",2.73,1.26],["Dortmund","A",1.55,1.73],["Liverpool","H",1.8,1.6],["Slovan","A",3.12,0.78]]],["LASK",[["AEK","A",1.15,2.03],["Liverpool","H",1.12,2.73],["Sporting","A",0.93,2.86],["Slovan","H",2.25,1.32],["Bodø","A",1.37,2.58],["Fener","H",1.63,1.77],["Real Madrid","A",0.8,4.07],["Porto","H",1.22,1.8]]],["Leipzig",[["Como","A",1.35,1.82],["PSV","H",2.31,1.86],["Real Madrid","A",1.28,2.56],["Man City","H",1.42,2.33],["Lens","H",2.6,1.17],["Man Utd","A",1.47,2.23],["Shakhtar","H",2.4,1.07],["Feyenoord","A",2.02,1.75]]],["Lens",[["Slavia","A",1.42,1.53],["Sporting","H",1.32,1.67],["Brugge","A",1.53,1.64],["Como","H",1.39,1.29],["Leipzig","A",1.17,2.6],["Bodø","H",1.79,1.59],["Man City","H",1.05,2.47],["Liverpool","A",0.88,2.91]]],["Lille",[["Betis","H",1.56,1.31],["Arsenal","A",0.78,2.42],["Galatasaray","H",1.7,1.26],["Bodø","A",1.22,1.92],["Bayern","H",1.11,2.16],["Stuttgart","A",1.19,1.98],["Slovan","H",2.46,0.72],["Roma","A",0.93,2.03]]],["Liverpool",[["Atlético","H",2.11,1.3],["LASK","A",2.73,1.12],["Villarreal","H",2.56,1.26],["Fener","A",2.28,1.36],["Brugge","A",2.45,1.46],["Porto","H",2.11,0.98],["Inter","A",1.6,1.8],["Lens","H",2.91,0.88]]],["Man City",[["Porto","A",1.94,1.21],["Paris SG","H",2.46,1.29],["AEK","H",2.43,0.91],["Leipzig","A",2.33,1.42],["Napoli","H",2.78,0.93],["Barça","A",1.63,2.26],["Lens","A",2.47,1.05],["Sporting","H",2.66,0.99]]],["Man Utd",[["Sabah","H",3.25,0.79],["Atlético","A",1.43,1.93],["Como","A",1.55,1.54],["Roma","H",1.95,1.32],["Sporting","A",1.58,1.72],["Leipzig","H",2.23,1.47],["Bayern","H",1.62,2.1],["Villarreal","A",1.61,1.67]]],["Napoli",[["Arsenal","H",1.08,1.8],["Villarreal","A",1.49,1.7],["Bodø","H",1.93,1.38],["Porto","A",1.13,1.58],["Man City","A",0.93,2.78],["Brugge","H",2.08,1.26],["Sabah","A",2.09,0.99],["Viking","H",2.63,1.0]]],["Paris SG",[["Slovan","H",3.9,0.61],["Man City","A",1.29,2.46],["Barça","H",1.98,1.87],["Villarreal","A",1.78,1.73],["Roma","H",2.5,1.2],["Villa","A",1.9,1.53],["Como","A",1.81,1.53],["Galatasaray","H",3.21,1.05]]],["Porto",[["Man City","H",1.21,1.94],["Betis","A",1.39,1.31],["PSV","H",2.13,1.37],["Napoli","H",1.58,1.13],["Feyenoord","A",1.61,1.46],["Liverpool","A",0.98,2.11],["Slavia","H",1.95,0.89],["LASK","A",1.8,1.22]]],["PSV",[["Shakhtar","H",2.49,1.17],["Leipzig","A",1.86,2.31],["Porto","A",1.37,2.13],["Brugge","H",2.86,1.51],["Real Madrid","A",1.15,3.37],["Atlético","H",1.47,1.86],["Viking","A",2.19,1.64],["Stuttgart","H",2.12,1.78]]],["Real Madrid",[["Inter","H",2.25,1.31],["Roma","A",1.76,1.44],["Leipzig","H",2.56,1.28],["AEK","A",1.74,1.31],["PSV","H",3.37,1.15],["Arsenal","A",1.16,1.79],["LASK","H",4.07,0.8],["Shakhtar","A",2.47,0.96]]],["Roma",[["Fener","A",1.57,1.4],["Real Madrid","H",1.44,1.76],["Slovan","H",2.91,0.9],["Man Utd","A",1.32,1.95],["Paris SG","A",1.2,2.5],["Sporting","H",1.94,1.21],["AEK","A",1.71,1.28],["Lille","H",2.03,0.93]]],["Sabah",[["Man Utd","A",0.79,3.25],["Slavia","H",1.16,1.54],["Dortmund","H",1.13,1.88],["Viking","A",1,2.05],["Barça","H",0.93,3.92],["Villarreal","A",0.8,2.88],["Napoli","H",0.99,2.09],["Arsenal","A",0.43,3.93]]],["Shakhtar",[["PSV","A",1.17,2.49],["AEK","H",1.37,1.42],["Inter","A",0.99,2.48],["Sporting","H",1.37,1.88],["Fener","H",1.55,1.42],["Slovan","A",1.77,1.05],["Leipzig","A",1.07,2.4],["Real Madrid","H",0.96,2.47]]],["Slavia",[["Lens","H",1.53,1.42],["Sabah","A",1.54,1.16],["Fener","A",1.56,1.73],["Arsenal","H",1.15,2.03],["Villarreal","H",1.57,1.72],["Bayern","A",0.83,3.56],["Porto","A",0.89,1.95],["Villa","H",1.29,1.76]]],["Slovan",[["Paris SG","A",0.61,3.9],["Stuttgart","H",1.44,2.45],["Roma","A",0.9,2.91],["LASK","A",1.32,2.25],["Betis","H",0.91,2.7],["Shakhtar","H",1.05,1.77],["Lille","A",0.72,2.46],["Inter","H",0.78,3.12]]],["Sporting",[["Galatasaray","H",2.08,1.2],["Lens","A",1.67,1.32],["LASK","H",2.86,0.93],["Shakhtar","A",1.88,1.37],["Man Utd","H",1.72,1.58],["Roma","A",1.21,1.94],["Barça","H",1.42,2.36],["Man City","A",0.99,2.66]]],["Stuttgart",[["Viking","H",2.8,1.14],["Slovan","A",2.45,1.44],["Atlético","H",1.57,1.89],["Galatasaray","A",1.7,1.9],["Inter","A",1.26,2.73],["Lille","H",1.98,1.19],["Brugge","H",2.35,1.48],["PSV","A",1.78,2.12]]],["Viking",[["Stuttgart","A",1.14,2.8],["Bayern","H",1.56,2.76],["Villa","A",1.33,2.32],["Sabah","H",2.05,1],["Atlético","A",0.72,3.16],["Feyenoord","H",1.73,1.9],["PSV","H",1.64,2.19],["Napoli","A",1.0,2.63]]],["Villa",[["Brugge","A",1.73,1.49],["Fener","H",2.33,1.21],["Viking","H",2.32,1.33],["Barça","A",1.36,2.56],["Galatasaray","A",1.91,1.74],["Paris SG","H",1.53,1.9],["Dortmund","H",1.71,1.44],["Slavia","A",1.76,1.29]]],["Villarreal",[["Dortmund","A",1.42,2.14],["Napoli","H",1.7,1.49],["Liverpool","A",1.26,2.56],["Paris SG","H",1.73,1.78],["Slavia","A",1.72,1.57],["Sabah","H",2.88,0.8],["Fener","A",1.57,1.63],["Man Utd","H",1.67,1.61]]]];

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
