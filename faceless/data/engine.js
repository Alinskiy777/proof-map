// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · ДВИЖОК ═══
// Фильтры: тип Бенчивенги · сила · уровень · эмоция · слой · статус · поиск.
// Группировка: тип / слой / эмоция / уровень / хост.
(() => {
'use strict';

const EV = window.EVIDENCE || [];
const TYPES = window.PROOF_TYPES || {};
const ORDER = window.PROOF_TYPE_ORDER || [];

const LAYERS = {
  press:       { name: 'Пресса',        color: '#60a5fa' },
  ru:          { name: 'Рунет',         color: '#f87171' },
  reddit:      { name: 'Редит',         color: '#fb923c' },
  youtube:     { name: 'YouTube',       color: '#ef4444' },
  hardcases:   { name: 'Сильные кейсы', color: '#a78bfa' },
  competitors: { name: 'Конкуренты',    color: '#f472b6' },
  level4:      { name: 'Уровень 4',     color: '#38bdf8' },
  newbies:     { name: 'Новички',       color: '#34d399' },
  counter:     { name: 'Контр-примеры', color: '#fbbf24' },
};
const EMOTIONS = {
  greed:  { name: 'Жадность',  color: '#f59e0b' },
  hope:   { name: 'Надежда',   color: '#34d399' },
  anger:  { name: 'Злость',    color: '#ef4444' },
  trust:  { name: 'Доверие',   color: '#60a5fa' },
  candor: { name: 'Искренность', color: '#fbbf24' },
};
const STATUS = {
  live:       { name: 'Живой',      color: '#3fb950' },
  botwall:    { name: 'Бот-стена',  color: '#d29922' },
  unverified: { name: 'Не проверен', color: '#8b949e' },
  dead:       { name: 'Мёртвый',    color: '#f85149' },
  'no-url':   { name: 'Без URL',    color: '#6e7681' },
};

const state = {
  q: '', layers: new Set(), emotions: new Set(), levels: new Set(),
  minStrength: 1, statuses: new Set(), types: new Set(), verifiedOnly: false,
  groupBy: 'type',
};

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function matches(r) {
  if (state.q) {
    const hay = (r.title + ' ' + r.quote + ' ' + r.person + ' ' + r.host + ' ' + r.layer).toLowerCase();
    if (!hay.includes(state.q.toLowerCase())) return false;
  }
  if (state.layers.size && !state.layers.has(r.layer)) return false;
  if (state.emotions.size && !state.emotions.has(r.emotion)) return false;
  if (state.levels.size && !r.level.some(l => state.levels.has(String(l)))) return false;
  if (r.strength < state.minStrength) return false;
  if (state.statuses.size && !state.statuses.has(r.status)) return false;
  if (state.types.size && !r.types.some(t => state.types.has(String(t)))) return false;
  if (state.verifiedOnly && !r.verified) return false;
  return true;
}

function chip(label, color, title) {
  return `<span class="chip" style="--c:${color}" ${title ? `title="${esc(title)}"` : ''}>${esc(label)}</span>`;
}

function card(r) {
  const tchips = r.types.slice(0, 4).map(t =>
    `<span class="tchip" style="--c:${(TYPES[t] || {}).color || '#666'}">${t} · ${esc((TYPES[t] || {}).name || '?')}</span>`).join('');
  const more = r.types.length > 4 ? `<span class="tchip more">+${r.types.length - 4}</span>` : '';
  const st = STATUS[r.status] || STATUS['no-url'];
  const L = LAYERS[r.layer] || { name: r.layer, color: '#666' };
  const E = EMOTIONS[r.emotion] || { name: r.emotion, color: '#666' };
  const strength = Math.max(1, Math.min(10, r.strength || 0));
  const barColor = strength >= 9 ? '#3fb950' : strength >= 7 ? '#d29922' : strength >= 5 ? '#f59e0b' : '#f85149';
  return `<article class="card" data-id="${esc(r.id)}" tabindex="0" role="button">
    <div class="card-top">
      <span class="layer-dot" style="--c:${L.color}"></span>
      <span class="card-title">${esc(r.title || r.person || 'без названия')}</span>
    </div>
    <p class="quote">${esc((r.quote || '').slice(0, 240))}${(r.quote || '').length > 240 ? '…' : ''}</p>
    <div class="tchips">${tchips}${more}</div>
    <div class="meta">
      ${chip(L.name, L.color)}
      ${chip(E.name, E.color)}
      ${chip('ур. ' + r.level.join('/'), '#8b949e')}
      ${chip(st.name, st.color)}
    </div>
    <div class="strength"><i style="width:${strength * 10}%;background:${barColor}"></i>
      <b>${strength}</b><span>/10</span></div>
  </article>`;
}

function group(records) {
  const g = new Map();
  const add = (key, label, color, r) => {
    if (!g.has(key)) g.set(key, { label, color, items: [] });
    g.get(key).items.push(r);
  };
  for (const r of records) {
    if (state.groupBy === 'type') {
      // запись входит в КАЖДУЙ свой тип (наложение по Бенчивенге) — считаем вхождения
      if (!r.types.length) add('t0', 'Без типа', '#666', r);
      r.types.forEach(t => {
        const ty = TYPES[t];
        add('t' + t, `${t}. ${ty ? ty.name : '?'}`, ty ? ty.color : '#666', r);
      });
    } else if (state.groupBy === 'layer') {
      add('l' + r.layer, (LAYERS[r.layer] || {}).name || r.layer, (LAYERS[r.layer] || {}).color || '#666', r);
    } else if (state.groupBy === 'emotion') {
      add('e' + r.emotion, (EMOTIONS[r.emotion] || {}).name || r.emotion, (EMOTIONS[r.emotion] || {}).color || '#666', r);
    } else if (state.groupBy === 'level') {
      add('v' + r.level.join('-'), 'Уровень ' + r.level.join(' и '), '#38bdf8', r);
    } else {
      add('h' + (r.host || 'нет'), r.host || 'без хоста', '#94a3b8', r);
    }
  }
  return Array.from(g, ([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.items.length - a.items.length || a.label.localeCompare(b.label));
}

function render() {
  const list = EV.filter(matches);
  const groups = group(list);

  const board = $('#board');
  if (!list.length) {
    board.innerHTML = '<div class="empty">Ничего не найдено. Ослабьте фильтры.</div>';
  } else {
    const note = state.groupBy === 'type'
      ? `<p class="gnote">Одна запись может входить в несколько типов — это наложение по Бенчивенге («великая реклама использует ВСЕ элементы»). Числа в группах — вхождения, не уникальные записи.</p>` : '';
    board.innerHTML = note + groups.map(g => `
      <section class="group">
        <h2><span class="gdot" style="--c:${g.color}"></span>${esc(g.label)}
          <em>${g.items.length}</em></h2>
        <div class="cards">${g.items.map(card).join('')}</div>
      </section>`).join('');
  }
  renderStats(list);
  renderAudit(list);
}

function renderStats(list) {
  const by = (fn) => list.reduce((a, r) => { const k = fn(r); a[k] = (a[k] || 0) + 1; return a; }, {});
  const uniq = (fn) => new Set(list.map(fn).filter(Boolean)).size;
  const live = list.filter(r => r.status === 'live').length;
  const types = new Set(); list.forEach(r => r.types.forEach(t => types.add(t)));
  const hosts = by(r => r.host || 'без хоста');
  const top = Object.entries(hosts).sort((a, b) => b[1] - a[1])[0];
  $('#stats').innerHTML = [
    ['Записей', list.length],
    ['Живых ссылок', live],
    ['Типов Бенчивенги', types.size + '/30'],
    ['Уникальных хостов', uniq(r => r.host)],
    ['Сила ≥ 8', list.filter(r => r.strength >= 8).length],
    ['Топ-хост', top ? `${top[0]} (${top[1]})` : '—'],
  ].map(([k, v]) => `<div class="stat"><b>${esc(String(v))}</b><span>${esc(k)}</span></div>`).join('');
}

function renderAudit(list) {
  const hosts = {};
  list.forEach(r => { const h = r.host || 'без хоста'; hosts[h] = (hosts[h] || 0) + 1; });
  const rows = Object.entries(hosts).sort((a, b) => b[1] - a[1]);
  const total = list.length || 1;
  const max = rows.length ? rows[0][1] : 1;
  $('#hosts').innerHTML = rows.slice(0, 15).map(([h, n]) => `
    <tr><td>${esc(h)}</td><td class="num">${n}</td>
      <td class="barcell"><i style="width:${Math.round(n / max * 100)}%"></i></td>
      <td class="num">${(n / total * 100).toFixed(0)}%</td></tr>`).join('')
    || '<tr><td colspan="4" class="dim">нет данных</td></tr>';

  const cov = {};
  list.forEach(r => r.types.forEach(t => { cov[t] = (cov[t] || 0) + 1; }));
  const missing = ORDER.filter(t => !cov[t]);
  $('#coverage').innerHTML = ORDER.map(t => {
    const n = cov[t] || 0;
    const ty = TYPES[t];
    return `<div class="covcell ${n ? '' : 'miss'}" style="--c:${ty.color}" title="${esc(ty.name)} — ${esc(ty.src)}">
      <b>${t}</b><i style="height:${Math.min(100, n / max * 100)}%"></i><span>${n}</span></div>`;
  }).join('');
  $('#missing').innerHTML = missing.length
    ? missing.map(t => `<span class="chip" style="--c:${TYPES[t].color}">${t} · ${esc(TYPES[t].name)}</span>`).join('')
    : '<span class="ok">все 30 типов покрыты</span>';
}

// ── фильтры ──
function buildFilters() {
  $('#fLayers').innerHTML = Object.entries(LAYERS).map(([k, v]) =>
    `<button class="fchip" data-set="layers" data-v="${k}" style="--c:${v.color}">${esc(v.name)}</button>`).join('');
  $('#fEmotions').innerHTML = Object.entries(EMOTIONS).map(([k, v]) =>
    `<button class="fchip" data-set="emotions" data-v="${k}" style="--c:${v.color}">${esc(v.name)}</button>`).join('');
  $('#fLevels').innerHTML = ['3', '4'].map(l =>
    `<button class="fchip" data-set="levels" data-v="${l}" style="--c:#38bdf8">Уровень ${l}</button>`).join('');
  $('#fStatus').innerHTML = Object.entries(STATUS).map(([k, v]) =>
    `<button class="fchip" data-set="statuses" data-v="${k}" style="--c:${v.color}">${esc(v.name)}</button>`).join('');
  $('#fTypes').innerHTML = ORDER.map(t => {
    const ty = TYPES[t];
    return `<button class="fchip t" data-set="types" data-v="${t}" style="--c:${ty.color}" title="${esc(ty.src)}">${t} · ${esc(ty.name)}</button>`;
  }).join('');
  $('#fStrength').min = 1; $('#fStrength').max = 10; $('#fStrength').value = 1;

  document.addEventListener('click', e => {
    const b = e.target.closest('.fchip');
    if (!b) return;
    const set = state[b.dataset.set];
    const v = b.dataset.v;
    if (set.has(v)) { set.delete(v); b.classList.remove('on'); }
    else { set.add(v); b.classList.add('on'); }
    render();
  });
  $('#fStrength').addEventListener('input', e => {
    state.minStrength = +e.target.value;
    $('#fStrengthVal').textContent = e.target.value;
    render();
  });
  $('#fSearch').addEventListener('input', e => { state.q = e.target.value; render(); });
  $('#fVerified').addEventListener('change', e => { state.verifiedOnly = e.target.checked; render(); });
  $('#fReset').addEventListener('click', () => {
    state.q = ''; state.layers.clear(); state.emotions.clear(); state.levels.clear();
    state.statuses.clear(); state.types.clear(); state.minStrength = 1; state.verifiedOnly = false;
    $('#fSearch').value = ''; $('#fStrength').value = 1; $('#fStrengthVal').textContent = '1';
    $('#fVerified').checked = false;
    $$('.fchip.on').forEach(c => c.classList.remove('on'));
    render();
  });
  $$('#groupBy button').forEach(b => b.addEventListener('click', () => {
    state.groupBy = b.dataset.g;
    $$('#groupBy button').forEach(x => x.classList.toggle('on', x === b));
    render();
  }));
}

// ── детали ──
function openDetail(id) {
  const r = EV.find(x => x.id === id);
  if (!r) return;
  const tchips = r.types.map(t => `<span class="chip" style="--c:${(TYPES[t] || {}).color}">${t} · ${esc((TYPES[t] || {}).name || '?')}</span>`).join('');
  const st = STATUS[r.status] || STATUS['no-url'];
  const ex = r.extra || {};
  const exRows = Object.entries(ex).filter(([k, v]) => v && typeof v !== 'object')
    .map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('');
  $('#detail').innerHTML = `
    <div class="dhead">
      <button class="x" id="dClose" aria-label="закрыть">×</button>
      <span class="chip" style="--c:${(LAYERS[r.layer] || {}).color}">${esc((LAYERS[r.layer] || {}).name || r.layer)}</span>
      <span class="chip" style="--c:${(EMOTIONS[r.emotion] || {}).color}">${esc((EMOTIONS[r.emotion] || {}).name || r.emotion)}</span>
      <span class="chip" style="--c:${st.color}">${esc(st.name)}</span>
    </div>
    <h3>${esc(r.title || r.person || 'без названия')}</h3>
    <p class="who">${esc(r.person || '')}${r.host ? ' · ' + esc(r.host) : ''}</p>
    <blockquote>${esc(r.quote || '—')}</blockquote>
    <div class="dtypes">${tchips || '<span class="dim">типы не указаны</span>'}</div>
    <div class="dmeta">
      <div><span>Сила</span><b>${r.strength}/10</b></div>
      <div><span>Драма</span><b>${r.drama}/10</b></div>
      <div><span>Уровень</span><b>${r.level.join(' и ')}</b></div>
      <div><span>ID</span><b>${esc(r.id)}</b></div>
    </div>
    ${r.url ? `<a class="btn pri" href="${esc(r.url)}" target="_blank" rel="noopener">Открыть источник ↗</a>` : '<p class="dim">URL не зафиксирован (источник — посадочная страница вендора, разведка)</p>'}
    ${exRows ? `<table class="extra">${exRows}</table>` : ''}`;
  $('#detailWrap').classList.add('open');
  $('#dClose').addEventListener('click', () => $('#detailWrap').classList.remove('open'));
}

// ── галерея скриншотов ──
const SHOTS = [
  ['comp-facelesslaunchpad', 'Faceless Launchpad — лендинг', 'shots/comp-facelesslaunchpad.jpg'],
  ['comp-theartofyt', 'The Art of YT — лендинг', 'shots/comp-theartofyt.jpg'],
  ['comp-becomeviral', 'Become Viral — лендинг', 'shots/comp-becomeviral.jpg'],
  ['comp-1of10', '1of10 — лендинг', 'shots/comp-1of10.jpg'],
  ['press-fortune', 'Fortune — Adavia Davis ($700K/год)', 'shots/press-fortune.jpg'],
  ['press-news4jax', 'News4Jax — Lionel Barnes ($38 → $10 000)', 'shots/press-news4jax.jpg'],
  ['press-bi', 'Business Insider — Quentin Latham', 'shots/press-bi.jpg'],
  ['ru-vc-myachin', 'VC.ru — Мячин «Простая экономика»', 'shots/ru-vc-myachin.jpg'],
  ['ru-habr', 'Habr — та же история', 'shots/ru-habr.jpg'],
  ['ru-ngs55', 'НГС55 — Омск, нейросети', 'shots/ru-ngs55.jpg'],
  ['ru-rbc', 'РБК — заработки блогеров в РФ', 'shots/ru-rbc.jpg'],
  ['ru-tj', 'Т—Ж — реалистичный разбор', 'shots/ru-tj.jpg'],
];

function renderShots() {
  $('#shots').innerHTML = SHOTS.map(([id, cap, src]) => `
    <figure class="shot"><a href="${esc(src)}" target="_blank" rel="noopener">
      <img src="${esc(src)}" alt="${esc(cap)}" loading="lazy"></a>
      <figcaption>${esc(cap)}</figcaption></figure>`).join('');
}

function init() {
  buildFilters();
  renderShots();
  render();
  document.addEventListener('click', e => {
    const c = e.target.closest('.card');
    if (c) openDetail(c.dataset.id);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') $('#detailWrap').classList.remove('open');
    if (e.key === 'Enter' && document.activeElement.classList.contains('card')) {
      openDetail(document.activeElement.dataset.id);
    }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
})();
