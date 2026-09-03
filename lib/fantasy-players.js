// UEFA UCL Fantasy player feed → normalised rows.
//
// Source (undocumented, used by the Fantasy web app itself):
//   GET https://gaming.uefa.com/en/uclfantasy/services/api/Feed/players
//       ?gamedayId={1..13}&language=en
//   headers: Referer: https://gaming.uefa.com/en/uclfantasy/services/index.html
//
// Response shape: { data: { value: { playerList: [ … ] } } }
// Relevant fields per player:
//   id, pDName (display name), pFName / pLName, cCode (club code),
//   skill (1 GK, 2 DEF, 3 MID, 4 FWD), value (price, €m),
//   totPts, avgPlayerPts, lastGdPoints, selPer (% selected),
//   isActive, trained (availability text)
//
// The browser cannot call it directly (no CORS headers), so this module takes
// the JSON however you obtain it — curl, a console fetch on the Fantasy site,
// or a server-side job — and normalises it.

export const POSITIONS = { 1: 'GK', 2: 'DEF', 3: 'MID', 4: 'FWD' };

const CLUBS = {
  AEK: 'AEK Athens', ARS: 'Arsenal', AVL: 'Aston Villa', ATL: 'Atlético de Madrid',
  ATM: 'Atlético de Madrid', BAR: 'Barcelona', FCB: 'Barcelona', BAY: 'Bayern München',
  FCB2: 'Bayern München', BOD: 'Bodø/Glimt', DOR: 'Borussia Dortmund', BVB: 'Borussia Dortmund',
  BRU: 'Club Brugge', CLU: 'Club Brugge', COM: 'Como', FEN: 'Fenerbahçe', FEY: 'Feyenoord',
  GAL: 'Galatasaray', INT: 'Inter', LAS: 'LASK', LSK: 'LASK', RBL: 'Leipzig', LEI: 'Leipzig',
  LEN: 'Lens', RCL: 'Lens', LIL: 'Lille', LOS: 'Lille', LIV: 'Liverpool', MCI: 'Manchester City',
  MNC: 'Manchester City', MUN: 'Manchester United', MNU: 'Manchester United', NAP: 'Napoli',
  PSG: 'Paris Saint-Germain', POR: 'Porto', FCP: 'Porto', PSV: 'PSV Eindhoven',
  BET: 'Real Betis', RBE: 'Real Betis', RMA: 'Real Madrid', ROM: 'Roma', ASR: 'Roma',
  SAB: 'Sabah', SHK: 'Shakhtar Donetsk', SHA: 'Shakhtar Donetsk', SLA: 'Slavia Praha',
  SLO: 'Slovan Bratislava', SLB: 'Slovan Bratislava', SCP: 'Sporting CP', SPO: 'Sporting CP',
  STU: 'Stuttgart', VFB: 'Stuttgart', VIK: 'Viking', VIL: 'Villarreal'
};

export const clubName = code => CLUBS[String(code || '').toUpperCase()] || code || '—';

/** Simplified home-kit marks keyed by the feed's cCode.
 *  [base, trim, pattern] — pattern: plain | stripes | halves | sleeves | band | hoops */
const KITS = {
  AEK: ['#f8d000', '#16161a', 'stripes'],   ARS: ['#e01b22', '#ffffff', 'sleeves'],
  ATM: ['#cb3524', '#ffffff', 'stripes'],   AVL: ['#670e36', '#95bfe5', 'sleeves'],
  BAR: ['#a50044', '#004d98', 'stripes'],   BAY: ['#dc052d', '#ffffff', 'plain'],
  BET: ['#00954c', '#ffffff', 'stripes'],   BOD: ['#ffe000', '#16161a', 'plain'],
  BRU: ['#0a4595', '#16161a', 'stripes'],   BVB: ['#fde100', '#16161a', 'plain'],
  COM: ['#0b2d6e', '#ffffff', 'plain'],     FEN: ['#00296b', '#ffed00', 'hoops'],
  FEY: ['#e30613', '#ffffff', 'halves'],    GAL: ['#a90432', '#fbb800', 'halves'],
  INT: ['#0b1f8f', '#16161a', 'stripes'],   LASK: ['#16161a', '#ffffff', 'stripes'],
  LEN: ['#ffe000', '#e30613', 'stripes'],   LIL: ['#e01e13', '#ffffff', 'sleeves'],
  LIV: ['#c8102e', '#ffffff', 'plain'],     MCI: ['#6cabdd', '#ffffff', 'plain'],
  MUN: ['#da291c', '#16161a', 'plain'],     NAP: ['#12a0d7', '#ffffff', 'plain'],
  POR: ['#0043a4', '#ffffff', 'stripes'],   PSG: ['#004170', '#e30613', 'band'],
  PSV: ['#e2001a', '#ffffff', 'sleeves'],   RBL: ['#ffffff', '#dd0741', 'sleeves'],
  RMA: ['#f7f7f4', '#c8a961', 'plain'],     ROM: ['#8e1f2f', '#f0bc42', 'plain'],
  SAB: ['#00713c', '#ffffff', 'sleeves'],   SHK: ['#f47b20', '#16161a', 'stripes'],
  SLA: ['#d31217', '#ffffff', 'halves'],    SLB: ['#4a9ede', '#ffffff', 'plain'],
  SPO: ['#008057', '#ffffff', 'stripes'],   STU: ['#f7f7f4', '#e32219', 'sleeves'],
  VFK: ['#003e7e', '#ffffff', 'plain'],     VIL: ['#ffe667', '#16161a', 'plain']
};

const SHIRT = 'M4.2 5.1 8.8 3.2c.9 1.5 1.9 2.2 3.2 2.2s2.3-.7 3.2-2.2l4.6 1.9 1.6 4.1-2.8.9v11.7H5.4V10.1l-2.8-.9Z';

const fill = (pattern, trim) => {
  if (pattern === 'stripes') return [6, 10, 14, 18].map(x => '<rect x="' + x + '" y="0" width="1.9" height="24" fill="' + trim + '"/>').join('');
  if (pattern === 'hoops') return [7, 12, 17].map(y => '<rect x="0" y="' + y + '" width="24" height="2.2" fill="' + trim + '"/>').join('');
  if (pattern === 'halves') return '<rect x="12" y="0" width="12" height="24" fill="' + trim + '"/>';
  if (pattern === 'band') return '<rect x="10.2" y="0" width="3.6" height="24" fill="' + trim + '"/>';
  if (pattern === 'sleeves') return '<rect x="0" y="0" width="5.6" height="12" fill="' + trim + '"/><rect x="18.4" y="0" width="5.6" height="12" fill="' + trim + '"/>';
  return '';
};

const cache = {};

export function clubMark(code) {
  const key = String(code || '').toUpperCase();
  if (cache[key]) return cache[key];
  const [base, trim, pattern] = KITS[key] || ['#b8b5aa', '#8a877c', 'plain'];
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<defs><clipPath id="s"><path d="' + SHIRT + '"/></clipPath></defs>' +
    '<g clip-path="url(#s)"><rect width="24" height="24" fill="' + base + '"/>' + fill(pattern, trim) + '</g>' +
    '<path d="' + SHIRT + '" fill="none" stroke="#16161a" stroke-opacity=".45" stroke-width="1"/></svg>';
  cache[key] = { src: 'data:image/svg+xml,' + encodeURIComponent(svg), code: key };
  return cache[key];
}

/** Accepts the raw feed, `data.value`, a bare playerList array, or an already-normalised set. */
export function normalise(feed) {
  if (feed?.players && Array.isArray(feed.players)) {
    return feed.players.map(p => (p.mark ? p : Object.assign({}, p, { mark: clubMark(p.clubCode) })));
  }
  const list = Array.isArray(feed) ? feed
    : feed?.data?.value?.playerList ?? feed?.value?.playerList ?? feed?.playerList ?? [];
  return list.map(p => ({
    id: String(p.id ?? p.playerId ?? ''),
    name: p.pDName || p.pFName || [p.pFName, p.pLName].filter(Boolean).join(' ') || '—',
    club: p.tName || clubName(p.cCode),
    clubCode: String(p.cCode ?? '').toUpperCase(),
    position: POSITIONS[Number(p.skill)] || '—',
    skill: Number(p.skill) || 0,
    price: Number(p.value ?? 0),
    totalPoints: Number(p.totPts ?? 0),
    avgPoints: Number(p.avgPlayerPts ?? 0),
    lastPoints: Number(p.lastGdPoints ?? 0),
    selectedPct: p.selPer === undefined ? null : Number(p.selPer),
    active: Number(p.isActive ?? 1) === 1,
    availability: (p.trained || '').trim(),
    mark: clubMark(p.cCode)
  })).filter(p => p.name !== '—');
}

export const SORTS = {
  'Price': (a, b) => b.price - a.price || a.name.localeCompare(b.name),
  'Points': (a, b) => b.totalPoints - a.totalPoints || b.price - a.price,
  'Points per €m': (a, b) => (b.totalPoints / (b.price || 1)) - (a.totalPoints / (a.price || 1)),
  'Club': (a, b) => a.club.localeCompare(b.club) || b.price - a.price,
  'Name': (a, b) => a.name.localeCompare(b.name)
};

export function view(players, { position = 'All', club = 'All', sort = 'Price', limit = 40 } = {}) {
  let rows = players.slice();
  if (position !== 'All') rows = rows.filter(p => p.position === position);
  if (club !== 'All') rows = rows.filter(p => p.club === club);
  rows.sort(SORTS[sort] || SORTS.Price);
  return rows.slice(0, limit);
}

/** Filter + sort + paginate. Returns the page plus the counts a pager needs. */
export function page(players, { position = 'All', club = 'All', sort = 'Price', perPage = 20, pageIndex = 0 } = {}) {
  let rows = players.slice();
  if (position !== 'All') rows = rows.filter(p => p.position === position);
  if (club !== 'All') rows = rows.filter(p => p.club === club);
  rows.sort(SORTS[sort] || SORTS.Price);
  const total = rows.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(0, pageIndex), pageCount - 1);
  const start = current * perPage;
  return { rows: rows.slice(start, start + perPage), total, pageCount, pageIndex: current, from: total ? start + 1 : 0, to: Math.min(start + perPage, total) };
}

export const clubList = players => ['All'].concat([...new Set(players.map(p => p.club))].sort());

export const summarise = players => {
  if (!players.length) return null;
  const prices = players.map(p => p.price).filter(v => v > 0);
  return {
    count: players.length,
    clubs: new Set(players.map(p => p.club)).size,
    maxPrice: Math.max(...prices).toFixed(1),
    minPrice: Math.min(...prices).toFixed(1),
    meanPrice: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2)
  };
};
