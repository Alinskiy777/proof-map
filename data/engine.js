// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · ДВИЖОК v0.1 ═══
// Один файл. Без зависимостей. GitHub Pages.
// Принцип: движок детерминирован, ИИ — необязательный слой поверх.
// Узел = утверждение (claim) + тип доказательства + сила + статус поддержки.
(() => {
'use strict';

const TAXONOMY = {
  authentic:  { name: 'Аутентичность',    color: '#8b5cf6', note: 'кто ты и почему тебе верить' },
  result:     { name: 'Результат',        color: '#22c55e', note: 'что получилось у других' },
  market:     { name: 'Рынок',            color: '#06b6d4', note: 'спрос, размер, поведение людей' },
  product:    { name: 'Продукт/метод',    color: '#eab308', note: 'как это работает технически' },
  economics:  { name: 'Экономика',        color: '#f97316', note: 'деньги, затраты, возврат' },
  risk:       { name: 'Риск и обратимость', color: '#ef4444', note: 'что будет, если не сработает' },
  process:    { name: 'Процесс',          color: '#84cc16', note: 'шаги, повторяемость' },
  witness:    { name: 'Свидетельства',    color: '#3b82f6', note: 'сторонние источники' },
};

const STRENGTH = {
  research:   { w: 9, name: 'Научное исследование' },
  demo:       { w: 8, name: 'Живая демонстрация' },
  endorse:    { w: 8, name: 'Рекомендация авторитета' },
  case:       { w: 7, name: 'Кейс с цифрами' },
  track:      { w: 7, name: 'Собственный track record' },
  pattern:    { w: 7, name: 'Повторяющийся паттерн' },
  proven:     { w: 7, name: 'Доказанный результат' },
  compare:    { w: 6, name: 'Сравнение' },
  expert:     { w: 6, name: 'Статус эксперта' },
  reason:     { w: 6, name: 'Reasons-why' },
  candor:     { w: 5, name: 'Честность' },
  testimonial:{ w: 5, name: 'Отзыв' },
  data:       { w: 6, name: 'Данные' },
  outrage:    { w: 4, name: 'Провокация' },
  rhyme:      { w: 3, name: 'Языковая форма' },
};

// ═══ ПРОВЕРКА ЧЕСТНОСТИ ═══
// claim ≤ proof. Если сила доказательства ниже силы утверждения —
// Бенчивенга: «Never make your claim bigger than your proof».
function auditClaim(c) {
  const claimPower = c.claimPower || 5;   // насколько сильное само утверждение
  const proofPower = STRENGTH[c.type] ? STRENGTH[c.type].w : 3;
  if (claimPower > proofPower) {
    return { ok: false, gap: proofPower - claimPower,
             msg: `Утверждение (${claimPower}) сильнее доказательства (${proofPower}) — «Yeah, sure»` };
  }
  if (!c.sources || c.sources.length === 0) {
    return { ok: false, gap: 4, msg: 'Нет ни одного источника — утверждение голословное' };
  }
  if (c.sources.some(s => s.n === undefined || s.n === null)) {
    return { ok: true, warn: 'У источника не указан размер выборки (n) — цифра недоказуема' };
  }
  return { ok: true };
}

/** Риск дыры: насколько утверждение «выше» доказательства + насколько оно громкое.
 *  0 — дыры нет. Больше — опаснее. Сортировка «Пробелов» идёт по нему. */
function riskOf(c) {
  const a = auditClaim(c);
  if (a.ok && !a.warn) return 0;
  const w = STRENGTH[c.type] ? STRENGTH[c.type].w : 3;
  const overclaim = Math.max(0, (c.claimPower || 5) - w);   // голос выше доказательства
  const hollow   = (!c.sources || !c.sources.length) ? 3 : 0; // голословное вообще
  const noN      = (c.sources || []).some(s => s.n === undefined || s.n === null) ? 1 : 0;
  return overclaim * 2 + hollow * 2 + noN;
}

window.ProofMap = { TAXONOMY, STRENGTH, auditClaim, riskOf };
if (typeof module !== 'undefined') module.exports = window.ProofMap;
})();
