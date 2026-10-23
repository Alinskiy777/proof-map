// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · МАСТЕР-ТАКСОНОМИЯ 30 ТИПОВ ═══
// Слияние трёх первоисточников (дедуплицировано):
//   1. Бенчивенга, «Маркетинг на основе доказательств», гл. 4 — 12 элементов
//   2. Clayton Makepeace, «Ultimate Desktop Copy Coach», гл. 5 — 18 proof strategies
//   3. 29 буллетов Лильестрёма (буллет 29 = 9 элементов доказательства)
// Правило: каждый тип — реальный приём из первоисточника. Не выдуман.
window.PROOF_TYPES = {
  1:  { name: 'Демонстрация',            en: 'Demonstration',          src: 'Бенчивенга гл.4 №1 / Мейкпис #9',  color: '#22c55e' },
  2:  { name: 'Творческая гарантия',     en: 'Creative Guarantee',     src: 'Бенчивенга гл.4 №2 / Мейкпис #5',  color: '#eab308' },
  3:  { name: 'Причина (Reason Why)',    en: 'Reason Why',             src: 'Бенчивенга гл.4 №3 / Мейкпис #1',  color: '#06b6d4' },
  4:  { name: 'Конкретность',            en: 'Specificity',            src: 'Бенчивенга гл.4 №4 / Мейкпис #2',  color: '#84cc16' },
  5:  { name: 'Разоблачение',            en: 'Exposure',               src: 'Бенчивенга гл.4 №5',               color: '#ef4444' },
  6:  { name: 'Объяснить механизм',      en: 'Explain the Mechanism',  src: 'Бенчивенга гл.4 №6 / Мейкпис #7',  color: '#a78bfa' },
  7:  { name: 'Предостережение против',  en: 'Warning Against',        src: 'Бенчивенга гл.4 №7',               color: '#f97316' },
  8:  { name: 'Признать недоверие',      en: 'Acknowledge Skepticism', src: 'Бенчивенга гл.4 №8',               color: '#38bdf8' },
  9:  { name: 'Достоверный источник',    en: 'Credible Source',        src: 'Бенчивенга гл.4 №9',               color: '#60a5fa' },
  10: { name: 'Отзывы',                  en: 'Testimonials',           src: 'Бенчивенга гл.4 №10 / Мейкпис #6', color: '#34d399' },
  11: { name: 'Искренность',             en: 'Candor',                 src: 'Бенчивенга гл.4 №11',              color: '#fbbf24' },
  12: { name: 'Специализация',           en: 'Specialization',         src: 'Бенчивенга гл.4 №12 / буллет 29 №7', color: '#2dd4bf' },
  13: { name: 'Кейс (Case History)',     en: 'Case History',           src: 'Мейкпис #13 / буллет 29 №1',       color: '#4ade80' },
  14: { name: 'Track record',            en: 'Track Record',           src: 'Мейкпис #12',                      color: '#fb923c' },
  15: { name: 'Статус эксперта',         en: 'Be Somebody',            src: 'Мейкпис #10 / буллет 29 №6',      color: '#c084fc' },
  16: { name: 'Показать личность',       en: 'Show Personality',       src: 'Мейкпис #11',                      color: '#f472b6' },
  17: { name: 'Яркая картина',           en: 'Vivid Picture',          src: 'Мейкпис #8',                       color: '#818cf8' },
  18: { name: 'Логический фундамент',    en: 'Logical Foundation',     src: 'Мейкпис #3',                       color: '#67e8f9' },
  19: { name: 'Заявления + документы',   en: 'Claims + Documentation', src: 'Мейкпис #4',                       color: '#fca5a5' },
  20: { name: 'Сайдбар процесса',       en: 'Process Sidebar',        src: 'Мейкпис #16',                      color: '#bef264' },
  21: { name: 'Медиа-появления',         en: 'Media Appearances',      src: 'Мейкпис #17',                      color: '#fda4af' },
  22: { name: 'Рекомендации знаменитостей', en: 'Celebrity Endorsements', src: 'Мейкпис #18',                   color: '#fcd34d' },
  23: { name: 'Научные исследования',    en: 'Clinical Studies',       src: 'Мейкпис #14',                      color: '#93c5fd' },
  24: { name: 'Публикации',              en: 'Publication',            src: 'Мейкпис #15',                      color: '#a5b4fc' },
  25: { name: 'Метафора / аналогия',     en: 'Metaphor',               src: 'Бенчивенга буллет 25',             color: '#c4b5fd' },
  26: { name: 'Социальное доказательство', en: 'Social Proof',         src: 'производная (8 ветвей)',           color: '#6ee7b7' },
  27: { name: 'Сравнение',               en: 'Comparison',            src: 'производная (8 ветвей)',           color: '#fdba74' },
  28: { name: 'Рекомендации авторитетов', en: 'Endorsements',          src: 'буллет 29 №2',                     color: '#f0abfc' },
  29: { name: 'Доказанные результаты',   en: 'Proven Outcomes',        src: 'буллет 29 №5',                     color: '#6ee7b7' },
  30: { name: 'Репутация в отрасли',     en: 'Reputation in Industry', src: 'буллет 29 №8',                     color: '#94a3b8' },
};
window.PROOF_TYPE_ORDER = Object.keys(window.PROOF_TYPES).map(Number).sort((a, b) => a - b);
