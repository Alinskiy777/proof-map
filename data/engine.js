// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · ДВИЖОК v1.0 ═══
// Холст в стиле Miro: тёмный, сетка-точки, узлы-плитки, линии от центра.
// Пан/зум мышью. Клик по узлу → панель с доказательствами этого типа.
(() => {
'use strict';

const TYPES = window.PROOF_TYPES || {};
const PROOFS = window.PROOFS || {};
const ORDER = window.PROOF_TYPE_ORDER || Object.keys(TYPES);

const canvas = document.getElementById('canvas');
const stage  = document.getElementById('stage');
const svg    = document.getElementById('links');
const panel  = document.getElementById('panel');

let view = { x: 0, y: 0, k: 1 };

// ── геометрия: узлы по спирали вокруг центра ──
const W = 1800, H = 1200, CX = W / 2, CY = H / 2;

function layout() {
  const keys = ORDER.filter(k => TYPES[k]);
  const nodes = [{ key: '__root__', x: CX, y: CY }];
  const R0 = 250, STEP = 120;
  keys.forEach((k, i) => {
    const ring = Math.floor(i / 9);
    const ang = ((i % 9) / 9) * Math.PI * 2 - Math.PI / 2;
    const r = R0 + ring * STEP;
    nodes.push({ key: k, x: CX + Math.cos(ang) * r, y: CY + Math.sin(ang) * r * 0.82 });
  });
  return nodes;
}

function proofCount(k) { return (PROOFS[k] || []).length; }

// Потолок доказательности по типу источника (модель из карты конкурентов).
// Вендор с коммерческим интересом не может дать >5, первоисточник — до 10.
function tierOf(p) {
  const s = (p.source || '').toLowerCase();
  if (/справка youtube|bencivenga|bejakovic|архивы бенчивенги/.test(s)) return 10;
  if (/fortune/.test(s)) return 8;
  if (/интервью|vidiq|business insider|hollywood reporter|thenextweb|подкаст/.test(s)) return 6;
  if (/launchpad|art of youtube|faceless channels|вендор/.test(s)) return 5;
  if (/seo|seofarm/.test(s)) return 3;
  if (/reddit|форум|аноним|самоотчёт|selfreport/.test(s)) return 1;
  return 6;
}

// Добор: смонтировать проверенные цитаты (platform-proofs.js) в типы Бенчивенги.
if (window.PLATFORM_PROOFS) {
  Object.keys(window.PLATFORM_PROOFS).forEach(k => {
    PROOFS[k] = (PROOFS[k] || []).concat(window.PLATFORM_PROOFS[k]);
  });
}

function render() {
  const nodes = layout();
  canvas.querySelectorAll('.node').forEach(n => n.remove());
  svg.innerHTML = '';

  const root = nodes[0];
  nodes.slice(1).forEach(n => {
    const t = TYPES[n.key];
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dx = n.x - root.x, dy = n.y - root.y;
    const mx = root.x + dx * 0.5 - dy * 0.08;
    const my = root.y + dy * 0.5 + dx * 0.08;
    p.setAttribute('d', `M${root.x},${root.y} Q${mx},${my} ${n.x},${n.y}`);
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', t ? t.color : '#58a6ff');
    p.setAttribute('stroke-width', '1.4');
    p.setAttribute('opacity', '0.32');
    svg.appendChild(p);
  });

  const total = ORDER.reduce((s, k) => s + proofCount(k), 0);
  document.getElementById('rootSub').textContent =
    `${ORDER.length} типов · ${total} доказательств`;

  nodes.slice(1).forEach(n => {
    const t = TYPES[n.key];
    if (!t) return;
    const c = proofCount(n.key);
    const el = document.createElement('div');
    el.className = 'node';
    el.style.left = n.x + 'px';
    el.style.top  = n.y + 'px';
    el.style.setProperty('--nc', t.color);
    el.dataset.key = n.key;
    el.innerHTML =
      `<div class="num">№${t.n}</div>` +
      `<div class="nm">${t.name}</div>` +
      `<div class="en">${t.en}</div>` +
      `<div class="cnt">${c}</div>` +
      `<div class="src">${t.src}</div>`;
    el.addEventListener('click', (e) => { e.stopPropagation(); openType(n.key); });
    canvas.appendChild(el);
  });

  const rn = document.getElementById('rootNode');
  rn.style.left = CX + 'px';
  rn.style.top  = CY + 'px';
}

// ── панель ──
function openType(key) {
  const t = TYPES[key];
  const list = PROOFS[key] || [];
  canvas.querySelectorAll('.node').forEach(n => n.classList.toggle('sel', n.dataset.key === key));

  document.getElementById('pTitle').textContent = `№${t.n} · ${t.name}`;
  document.getElementById('pMeta').textContent = `${t.en} · ${t.src} · ${t.note}`;

  const srcs = {};
  list.forEach(p => {
    const u = p.url || p.source || '';
    const k = u.replace(/^https?:\/\//, '').split('/')[0] || 'без ссылки';
    srcs[k] = (srcs[k] || 0) + 1;
  });
  const topSrc = Object.entries(srcs).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const avg = list.length ? (list.reduce((s, p) => s + Math.min(p.strength || 0, tierOf(p)), 0) / list.length).toFixed(1) : '—';
  const over = list.filter(p => (p.strength || 0) > tierOf(p)).length;

  document.getElementById('pChips').innerHTML =
    `<span class="chip">доказательств: <b>${list.length}</b></span>` +
    `<span class="chip">средняя сила: <b>${avg}</b></span>` +
    (over ? `<span class="chip" style="border-color:var(--red);color:var(--red)">завышено: <b>${over}</b></span>` : '') +
    `<span class="chip">цвет: <b style="color:${t.color}">●</b></span>` +
    (topSrc.length ? `<span class="chip">источники: <b>${topSrc.map(s => s[0]).join(', ')}</b></span>` : '');

  const box = document.getElementById('pList');
  if (!list.length) {
    box.innerHTML = `<div class="empty">Пока нет доказательств этого типа.<br><b>Собираем — дип-ресерч в работе.</b></div>`;
  } else {
    box.innerHTML = list.map(p => {
      const _t = tierOf(p), _s = p.strength || 0, _c = Math.min(_s, _t);
      const strTag = _s ? `<span class="tag t-str">сила ${_c}/10${_s > _t ? ` <span style="opacity:.65;font-size:10px">оцен.${_s}→потолок ${_t}</span>` : ''}</span>` : '';
      return `
      <div class="proof" style="--pc:${t.color}">
        <div class="q">${p.q}</div>
        <div class="row">
          ${strTag}
          ${p.n ? `<span class="tag t-n">n=${p.n}</span>` : ''}
          ${p.source ? `<span class="tag t-src">${p.source}</span>` : ''}
          ${p.url ? `<a class="tag t-url" href="${p.url}" target="_blank" rel="noopener">${String(p.url).replace(/^https?:\/\//, '').slice(0, 60)}</a>` : ''}
        </div>
        ${p.note ? `<div class="note">${p.note}</div>` : ''}
      </div>`;
    }).join('');
  }
  panel.classList.add('on');
}

function closePanel() {
  panel.classList.remove('on');
  canvas.querySelectorAll('.node').forEach(n => n.classList.remove('sel'));
}

// ── пан/зум ──
function apply() {
  canvas.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.k})`;
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
}
function resetView() {
  const r = stage.getBoundingClientRect();
  view.k = Math.min(r.width / (W * 0.92), r.height / (H * 0.92));
  view.k = Math.max(0.28, Math.min(view.k, 1.1));
  view.x = (r.width  - W * view.k) / 2;
  view.y = (r.height - H * view.k) / 2 + 20;
  apply();
}
window.resetView = resetView;
window.closePanel = closePanel;

stage.addEventListener('mousedown', e => {
  if (e.target.closest('.node')) return;
  stage.classList.add('drag');
  const sx = e.clientX - view.x, sy = e.clientY - view.y;
  const mv = ev => { view.x = ev.clientX - sx; view.y = ev.clientY - sy; apply(); };
  const up = () => { stage.classList.remove('drag'); window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up); };
  window.addEventListener('mousemove', mv);
  window.addEventListener('mouseup', up);
});
stage.addEventListener('wheel', e => {
  e.preventDefault();
  const r = stage.getBoundingClientRect();
  const mx = e.clientX - r.left, my = e.clientY - r.top;
  const f = e.deltaY < 0 ? 1.12 : 0.89;
  const k2 = Math.max(0.22, Math.min(2.4, view.k * f));
  view.x = mx - (mx - view.x) * (k2 / view.k);
  view.y = my - (my - view.y) * (k2 / view.k);
  view.k = k2;
  apply();
}, { passive: false });
canvas.addEventListener('click', closePanel);

// ── статистика и легенда ──
function renderStats() {
  const total = ORDER.reduce((s, k) => s + proofCount(k), 0);
  const full = ORDER.filter(k => proofCount(k) >= 10).length;
  const srcs = new Set();
  ORDER.forEach(k => (PROOFS[k] || []).forEach(p => p.url && srcs.add(p.url.replace(/^https?:\/\//, '').split('/')[0])));
  document.getElementById('stats').innerHTML =
    `<div class="stat"><b>${ORDER.length}</b>типов</div>` +
    `<div class="stat"><b>${total}</b>доказательств</div>` +
    `<div class="stat"><b>${full}</b>типов ≥10</div>` +
    `<div class="stat"><b>${srcs.size}</b>источников</div>`;
  document.getElementById('legend').innerHTML =
    `<span class="lg">${ORDER.length} типов доказательств · собираем по 10–30 на каждый</span>`;
}

render();
renderStats();
resetView();
window.addEventListener('resize', resetView);
})();
