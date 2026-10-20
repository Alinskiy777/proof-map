// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · МАСТЕР-ТАКСОНОМИЯ ═══
// Слияние трёх первоисточников (дедуплицировано):
//   1. Бенчивенга, «Маркетинг на основе доказательств», гл. 4 — 12 элементов
//      (~/wiki/raw/articles/bencivenga-marketing-on-proof-ch4.ru.txt)
//   2. Clayton Makepeace, «Ultimate Desktop Copy Coach», гл. 5 — 18 proof strategies
//      (~/wiki/concepts/makepeace-desktop-coach-concepts.md)
//   3. 29 буллетов Лильестрёма (~/wiki/raw/articles/bencivenga-marketing-bullets.clean.md)
//      (буллет 29 = 9 элементов доказательства)
// Правило: каждый тип — реальный приём из первоисточника. Не выдуман.
//
// 🔴 ДЬЯВОЛ-АУДИТ 2026-10-20: атрибуции сверены построчно с источниками.
//   Makepeace гл.5: #1 Reasons Why · #2 Specific · #3 Logical Foundation ·
//   #4 Claims+Docs · #5 Guarantee · #6 Testimonials · #7 Mechanism · #8 Vivid Picture ·
//   #9 Demonstrate · #10 Be Somebody · #11 Personality · #12 Track Record ·
//   #13 Case History · #14 Clinical Studies · #15 Publication · #16 Process Sidebar ·
//   #17 Media Appearances · #18 Celebrity Endorsements.
//   Раньше 4 типа ссылались на неверные номера Мейкписа — исправлено.
window.PROOF_TYPES = {
  demonstration:        { n: 1,  name: 'Демонстрация',              en: 'Demonstration',          src: 'Бенчивенга гл.4 №1 / Мейкпис #9',  color: '#22c55e', note: 'показать продукт в деле, а не рассказать' },
  guarantee:           { n: 2,  name: 'Творческая гарантия',       en: 'Creative Guarantee',     src: 'Бенчивенга гл.4 №2 / Мейкпис #5',  color: '#eab308', note: 'снять риск с покупателя, сделав его своим' },
  reason_why:          { n: 3,  name: 'Причина (Reason Why)',      en: 'Reason Why',             src: 'Бенчивенга гл.4 №3 / Мейкпис #1',  color: '#06b6d4', note: 'назвать конкретную причину, почему работает' },
  specificity:         { n: 4,  name: 'Конкретность',              en: 'Specificity',            src: 'Бенчивенга гл.4 №4 / Мейкпис #2',  color: '#84cc16', note: 'цифры и детали вместо общих слов' },
  exposure:            { n: 5,  name: 'Разоблачение',              en: 'Exposure',               src: 'Бенчивенга гл.4 №5',               color: '#ef4444', note: 'публично разоблачить обман рынка' },
  mechanism:           { n: 6,  name: 'Объяснить механизм',        en: 'Explain the Mechanism',  src: 'Бенчивенга гл.4 №6 / Мейкпис #7',  color: '#a78bfa', note: 'объяснить, КАК продукт делает обещанное' },
  warning_against:     { n: 7,  name: 'Предостережение против',    en: 'Warning Against',        src: 'Бенчивенга гл.4 №7',               color: '#f97316', note: 'назвать случай, когда покупать НЕ надо' },
  acknowledge_skepticism: { n: 8, name: 'Признать недоверие',      en: 'Acknowledge Skepticism', src: 'Бенчивенга гл.4 №8',               color: '#38bdf8', note: '«я знаю, вы не верите — и вот почему зря»' },
  credible_source:     { n: 9,  name: 'Достоверный источник',      en: 'Credible Source',        src: 'Бенчивенга гл.4 №9',               color: '#60a5fa', note: 'третья сторона, заслуживающая доверия' },
  testimonials:        { n: 10, name: 'Отзывы',                    en: 'Testimonials',           src: 'Бенчивенга гл.4 №10 / Мейкпис #6', color: '#34d399', note: 'конкретный покупатель о своей выгоде' },
  candor:              { n: 11, name: 'Искренность',               en: 'Candor',                 src: 'Бенчивенга гл.4 №11',              color: '#fbbf24', note: 'называть недостатки и риски первым' },
  specialization:      { n: 12, name: 'Специализация',             en: 'Specialization',         src: 'Бенчивенга гл.4 №12 / буллет 29 №7', color: '#2dd4bf', note: 'лучше в одном узком, чем средне во всём' },
  case_history:        { n: 13, name: 'Кейс (Case History)',       en: 'Case History',           src: 'Мейкпис #13 / буллет 29 №1',        color: '#4ade80', note: 'история клиента: было → сделал → стало' },
  track_record:        { n: 14, name: 'Track record',              en: 'Track Record',           src: 'Мейкпис #12',                      color: '#fb923c', note: 'собственный послужной список результатов' },
  expert_status:       { n: 15, name: 'Статус эксперта',           en: 'Be Somebody',            src: 'Мейкпис #10 / буллет 29 №6',       color: '#c084fc', note: 'кто ты и почему тебе верить' },
  personality:         { n: 16, name: 'Показать личность',         en: 'Show Personality',       src: 'Мейкпис #11',                      color: '#f472b6', note: 'живой человек, а не текст на странице' },
  vivid_picture:       { n: 17, name: 'Яркая картина',             en: 'Vivid Picture',          src: 'Мейкпис #8',                       color: '#818cf8', note: 'детальная картина «я там был»' },
  logical_foundation:  { n: 18, name: 'Логический фундамент',      en: 'Logical Foundation',     src: 'Мейкпис #3',                       color: '#67e8f9', note: 'цепочка «если А, то Б, то В»' },
  claims_documentation:{ n: 19, name: 'Заявления + документы',     en: 'Claims + Documentation', src: 'Мейкпис #4',                       color: '#fca5a5', note: 'немедленный backup каждого claim' },
  process_sidebar:     { n: 20, name: 'Сайдбар процесса',         en: 'Process Sidebar',        src: 'Мейкпис #16',                      color: '#bef264', note: 'показать КАК работает, в теле текста' },
  media_appearances:   { n: 21, name: 'Медиа-появления',           en: 'Media Appearances',      src: 'Мейкпис #17',                      color: '#fda4af', note: 'упоминания в известных медиа' },
  celebrity_endorsements: { n: 22, name: 'Рекомендации знаменитостей', en: 'Celebrity Endorsements', src: 'Мейкпис #18',                  color: '#fcd34d', note: 'знаменитость ручается за продукт' },
  scientific_research: { n: 23, name: 'Научные исследования',      en: 'Clinical Studies',       src: 'Мейкпис #14',                      color: '#93c5fd', note: 'исследования институтов, данные' },
  publication:         { n: 24, name: 'Публикации',                en: 'Publication',            src: 'Мейкпис #15',                      color: '#a5b4fc', note: 'упоминания в изданиях и прессе' },
  metaphor:            { n: 25, name: 'Метафора / аналогия',       en: 'Metaphor',               src: 'Бенчивенга буллет 25',             color: '#c4b5fd', note: 'перевести сложное на знакомый язык' },
  social_proof:        { n: 26, name: 'Социальное доказательство', en: 'Social Proof',           src: 'производная (8 ветвей)',           color: '#6ee7b7', note: 'другие люди уже сделали выбор' },
  comparison:          { n: 27, name: 'Сравнение',                 en: 'Comparison',            src: 'производная (8 ветвей)',           color: '#fdba74', note: 'сильнее/слабее альтернативы' },
  endorsements:        { n: 28, name: 'Рекомендации авторитетов',  en: 'Endorsements',           src: 'буллет 29 №2',                     color: '#f0abfc', note: 'авторитет отрасли рекомендует продукт' },
  proven_outcomes:     { n: 29, name: 'Доказанные результаты',     en: 'Proven Outcomes',        src: 'буллет 29 №5',                     color: '#6ee7b7', note: 'измеримый результат, а не обещание' },
  reputation_industry: { n: 30, name: 'Репутация в отрасли',       en: 'Reputation in Industry',  src: 'буллет 29 №8',                     color: '#94a3b8', note: 'как отрасль оценивает вас, а не вы сами' },
};

// Порядок обхода для отрисовки
window.PROOF_TYPE_ORDER = Object.keys(window.PROOF_TYPES);
