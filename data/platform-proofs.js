// ═══ ДОБОР: проверенные цитаты, смонтированные в типы Бенчивенги ═══
// Источник — data/competitor-proof.js (24 проверенные цитаты, прогон 1).
// Монтаж: каждая цитата получила ОДИН основной тип по своей сильной функции.
// strength = потолок источника (модель веса). source помечен потолком.
// Две «опровергнутые» (seofarm) сюда НЕ вошли — они в отдельном блоке дашборда.

window.PLATFORM_PROOFS = {
  // ── №4 КОНКРЕТНОСТЬ (6) ──
  specificity: [
    { q: 'YouTube платит 55% от чистого дохода Watch Page Ads', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/72902', strength: 10, n: 0, note: 'Юридически обязывает. Точная цифра вместо «много заработаешь».' },
    { q: 'Shorts — 45% от выделенного из Creator Pool', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/72902', strength: 10, n: 0, note: 'Разные продукты — разная ставка. Конкретика вместо общих слов.' },
    { q: 'Fan funding (memberships, Super Chat, Super Stickers) — 70%', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/72902', strength: 10, n: 0, note: 'Самая высокая ставка — у прямой поддержки зрителей.' },
    { q: 'Шестичасовой ролик стоит $60, но операционные расходы сети — $6500/мес', source: 'Fortune (потолок 8)', url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content', strength: 8, n: 0, note: 'Производство дёшево, сеть дорогая — разные статьи расходов.' },
    { q: 'Noah Morris: новичкам ~35 видео и $3000–3500 до возврата, бюджет $5000/год', source: 'Интервью (потолок 6)', url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/', strength: 6, n: 35, note: 'Рекомендация продавца, не измеренный факт — потолок интервью.' },
    { q: 'Jonathan Laramy: £300–800 ($400–1070) за ролик, 10–15 ревизий', source: 'Business Insider (потолок 6)', url: 'https://www.businessinsider.com/quit-job-now-makes-ai-videos-youtube-earns-more-money-2026-6', strength: 6, n: 0, note: 'Против вендорского «10–30 минут на видео».' },
  ],

  // ── №7 ПРЕДОСТЕРЕЖЕНИЕ ПРОТИВ (6) ──
  warning_against: [
    { q: 'Контент не должен быть массовым, шаблонным, повторяющимся или манипулятивным', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/1311392', strength: 10, n: 0, note: 'Дословно: "made for the enjoyment or education of viewers, rather than for the sole purpose of getting views".' },
    { q: 'Слайд-шоу и шаблонные сюжеты монетизировать нельзя', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/1311392', strength: 10, n: 0, note: 'Image slideshows, templated storylines, scrolling text — вне монетизации.' },
    { q: '🔴 AI-персоны в финансах, праве, здоровье, политике — монетизация невозможна', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/1311392', strength: 10, n: 0, note: 'Прямое пересечение с самыми доходными нишами: $15–50 CPM в финансах, $15–40 в здоровье.' },
    { q: 'Сам оператор большой сети: индивидуальным окно примерно до 2027', source: 'Fortune (потолок 8)', url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content', strength: 8, n: 0, note: 'Прямо от автора кейса $700K/год.' },
    { q: 'YouTube поощряет видео с человеческим лицом в кадре', source: 'Hollywood Reporter (потолок 6)', url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586', strength: 6, n: 0, note: 'Сдвиг платформы в сторону «человечности».' },
    { q: 'Демонетизация — на уровне КАНАЛА по 30 последним видео', source: 'TheNextWeb (потолок 6)', url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage', strength: 6, n: 0, note: 'Один паттерн на 30 роликов снимает монетизацию со ВСЕХ видео канала.' },
  ],

  // ── №5 РАЗОБЛАЧЕНИЕ (4) ──
  exposure: [
    { q: 'С 15.07.2025 «repetitious content» переименована в «inauthentic content»', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/answer/1311392', strength: 10, n: 0, note: 'Название сменилось, суть — нет: контент был и остаётся не для монетизации.' },
    { q: '2 млн просмотров/день = $0.83 RPM — миллионы просмотров ≠ миллионы денег', source: 'Fortune (потолок 8)', url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content', strength: 8, n: 0, note: 'Разрушает главный аргумент «много просмотров = много денег».' },
    { q: 'Владелец 1.7 млн подписчиков: те, кто делает то же без лица, демонетизируются', source: 'Hollywood Reporter (потолок 6)', url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586', strength: 6, n: 0, note: 'Именная цитата практика.' },
    { q: 'Noah Morris: −$250 тыс./мес при закрытии 6 faceless-каналов по copyright', source: 'Hollywood Reporter (потолок 6)', url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586', strength: 6, n: 0, note: 'Правовая цена faceless-модели.' },
  ],

  // ── №13 КЕЙС, CASE HISTORY (4) ──
  case_history: [
    { q: 'Noah Morris: $200 000/мес AdSense на пике, 20+ каналов, команда 14 человек, 8 лет', source: 'Интервью (потолок 6)', url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/', strength: 6, n: 20, note: 'Сам источник называет это "self-reported survivor numbers".' },
    { q: 'Leo Grundström: $3.5–4 млн за 2–3 года, 20–30 живых каналов', source: 'Интервью (потолок 6)', url: 'https://www.youtube.com/watch?v=dmnQkXCpXK8', strength: 6, n: '2–3 года', note: 'Масштаб требует сети, а не одного канала.' },
    { q: 'Razvan Paraschiv: июль $6824 → сент $9949 → окт $15575 → нояб $7891 → далее ~$3000/мес', source: 'Интервью (потолок 6)', url: 'https://www.youtube.com/watch?v=7mwMzSlq62Q', strength: 6, n: 0, note: 'Единственный кейс с честной динамикой по месяцам: пик, спад, стабилизация.' },
    { q: 'Массовая правка: 16 каналов, 35 млн подписчиков, 4.7 млрд просмотров, ~$10 млн/год — прекращены', source: 'TheNextWeb (потолок 6)', url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage', strength: 6, n: 0, note: 'Размер не защищает: сеть закрыта целиком в январе 2026.' },
  ],

  // ── №9 ДОСТОВЕРНЫЙ ИСТОЧНИК (1) ──
  credible_source: [
    { q: 'Каналы с ИИ монетизируются — запрет не к инструменту, а к результату', source: 'Справка YouTube (потолок 10)', url: 'https://support.google.com/youtube/thread/356734251', strength: 10, n: 0, note: 'Снимает страх «ИИ = бан». Проверять результат, а не инструмент.' },
  ],

  // ── №11 ИСКРЕННОСТЬ (1) ──
  candor: [
    { q: 'Прозрачности нет — «это не было overnight success»', source: 'Интервью (потолок 6)', url: 'https://www.youtube.com/watch?v=7mwMzSlq62Q', strength: 6, n: 0, note: 'Признание отсутствия прозрачности — само по себе честность.' },
  ],

  // ── №6 ОБЪЯСНИТЬ МЕХАНИЗМ (1) ──
  mechanism: [
    { q: 'RPM на 30–50% ниже CPM (деление на ad impressions vs все просмотры)', source: 'Вендор (потолок 5)', url: 'https://vidiq.com/blog/post/most-profitable-youtube-niches', strength: 5, n: 0, note: 'vidIQ сам дисклеймится: "treat as directional ranges, not guarantees".' },
  ],

  // ── №10 ОТЗЫВЫ (10) ──
  // Слоистость: те же проверенные интервью, но в функции «отзыв практика».
  testimonials: [
    { q: 'Noah Morris (20+ каналов, команда 14 человек): «новичкам ~35 видео и $3000–3500 до возврата»', source: 'Интервью (потолок 6)', url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/', strength: 6, n: 35, note: 'Отзыв практика с числами, не обещание вендора.' },
  ],

  // ── №14 TRACK RECORD (2) ──
  track_record: [
    { q: 'Noah Morris: 20+ каналов, команда 14 человек, 8 лет в теме — след в отрасли, а не один канал', source: 'Интервью (потолок 6)', url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/', strength: 6, n: 8, note: 'Слой на том же интервью: длительность и масштаб как след.' },
    { q: 'Leo Grundström: 20–30 живых каналов за 2–3 года', source: 'Интервью (потолок 6)', url: 'https://www.youtube.com/watch?v=dmnQkXCpXK8', strength: 6, n: '2–3 года', note: 'Построение сети с нуля — проверяемый след.' },
  ],

  // ── №15 СТАТУС ЭКСПЕРТА (2) ──
  expert_status: [
    { q: 'Noah Morris приглашён vidIQ как эксперт по YouTube-автоматизации', source: 'vidIQ (потолок 5)', url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/', strength: 5, n: 0, note: 'Статус признан ЧУЖИМ ресурсом, а не самозаявлен.' },
    { q: 'Tim Daniels (The Art of YouTube) — основной обучающий ресурс ниши, цитируется как эксперт', source: 'Вендор (потолок 5)', url: 'https://theartofyt.com/', strength: 5, n: 0, note: 'Экспертность ниши признана на уровне всего рынка.' },
  ],

  // ── №21 МЕДИА-ПОЯВЛЕНИЯ (2) ──
  media_appearances: [
    { q: 'Faceless-индустрия освещена в мейнстрим-медиа: Fortune, Hollywood Reporter, TheNextWeb (2025–2026)', source: 'Пресса (потолок 6)', url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content', strength: 6, n: 3, note: 'Три независимых медиа за один год — факт присутствия индустрии в медиа.' },
  ],

  // ── №30 РЕПУТАЦИЯ В ОТРАСЛИ (1) ──
  reputation_industry: [
    { q: 'TheNextWeb: массовая правка faceless-сетей (16 каналов, 35 млн подписчиков) — отрасль узнала о рисках', source: 'TheNextWeb (потолок 6)', url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage', strength: 6, n: 0, note: 'Репутация формата сформирована на уровне отраслевых медиа.' },
  ],

  // ── №8 ПРИЗНАТЬ НЕДОВЕРИЕ (10) ──
  // Живые возражения r/NewTubers, 178 комментариев. Это НЕ доказательства за, а само
  // недоверие, которое Бенчивенга велит признать в тексте. Источник — анонимный
  // форум, потолок 1/10 (самоотчёт). Частота — доля в выборке из ОДНОГО сабреддита.
  acknowledge_skepticism: [
    { q: '«AI slop = мусор»: люди не доверяют faceless AI-каналам', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 22, note: '22 из 178 комментариев. Сила удара 9/10 — самое массовое возражение.' },
    { q: '«YouTube агрессивно подавляет faceless/AI-каналы»: демонетизация, теневой бан, «cooking»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 15, note: 'Сила удара 10/10. Каналы умирают не за контент, а за формат.' },
    { q: '«Без лица = нет доверия и парасоциальной связи»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 14, note: 'Зритель привязывается к человеку, а не к формату.' },
    { q: '«Faceless = скучно и монотонно, слушать фон»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 11, note: 'B-roll и слова на экране воспринимаются как фон, а не контент.' },
    { q: '«Монетизация НЕ гарантирована — автомат денег не работает»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 12, note: 'Большинство каналов выходят в ноль. Нужно показывать распределение, а не среднее.' },
    { q: '«Голос решает всё, ИИ-голос убивает канал»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 8, note: 'Интонация, паузы, cadence — носитель убедительности, ИИ его не даёт.' },
    { q: '«Объём работы огромный — "один человек" перестарались»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 10, note: 'Реальные тайминги — часы на видео, а не минуты.' },
    { q: '«Конкуренция бездонная, ниша переполнена»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 9, note: '«Все делают одно и то же» — выделиться нечем.' },
    { q: '«Кража голоса и личности через ИИ — это не экономия, а кража»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 2, note: 'Этическое возражение. Клонирование чужого голоса = кража.' },
    { q: '«Человечность важнее формата»', source: 'r/NewTubers (потолок 1)', url: '', strength: 1, n: 5, note: 'Формат — не суть; суть в человеке, который за ним стоит.' },
  ],
};
