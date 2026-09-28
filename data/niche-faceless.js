// ═══ НИША: faceless YouTube · стартовый набор утверждений ═══
// Правило честности: источник указан только если он РЕАЛЬНО есть.
// Нет источника → sources: [] и приложение покажет ДЫРУ. Не выдумывать.
// claimPower = насколько сильное утверждение (1..10)
// type       = тип доказательства (ключ из STRENGTH в engine.js)
window.NICHES = {
  faceless_youtube: {
    name: 'faceless YouTube (ИИ-каналы)',
    claims: [
      // ── РЫНОК ──
      { id: 'm1', branch: 'market', text: 'Спрос на ИИ-видеоконтент растёт год от года',
        type: 'data', claimPower: 7, n: 0,
        sources: [], objection: 'Рост в Google Trends ≠ спрос на faceless-каналы конкретно' },
      { id: 'm2', branch: 'market', text: 'Аудитория готова смотреть видео без лица автора',
        type: 'data', claimPower: 5, n: 0,
        sources: [], objection: 'Готовность смотреть и готовность подписаться — разные вещи' },
      { id: 'm3', branch: 'market', text: 'Конкуренция в нише низкая',
        type: 'compare', claimPower: 7, n: 0,
        sources: [], objection: '«Низкая» относительно чего? Нужен конкретный замер' },

      // ── ЭКОНОМИКА ──
      { id: 'e1', branch: 'economics', text: 'На таких каналах реально зарабатывают',
        type: 'case', claimPower: 9, n: 0,
        sources: [], objection: 'Доход есть, но медианы по выборке не публикуются почти никогда' },
      { id: 'e2', branch: 'economics', text: 'Порог входа по деньгам низкий',
        type: 'data', claimPower: 6, n: 0,
        sources: [], objection: 'Сами инструменты дешёвые, но 100+ часов на канал — это вложение' },
      { id: 'e3', branch: 'economics', text: 'Монетизация через AdSense доступна сразу',
        type: 'data', claimPower: 6, n: 0,
        sources: [], objection: 'Порог монетизации и скорость одобрения — не «сразу»' },
      { id: 'e4', branch: 'economics', text: 'Стоимость канала в разы окупается',
        type: 'case', claimPower: 8, n: 0,
        sources: [], objection: 'Кто продаёт курсы — заинтересованная сторона' },

      // ── ПРОДУКТ/МЕТОД ──
      { id: 'p1', branch: 'product', text: 'ИИ-видео неотличимо от human-записи',
        type: 'demo', claimPower: 9, n: 0,
        sources: [], objection: 'Зритель не знает, что сравнивать — доказывать нечем' },
      { id: 'p2', branch: 'product', text: 'Модель масштабируется: 30 видео в месяц реально',
        type: 'proven', claimPower: 7, n: 0,
        sources: [], objection: 'Проверено на одном-двух авторах, а не на выборке' },
      { id: 'p3', branch: 'product', text: 'Алгоритм YouTube продвигает такие каналы',
        type: 'research', claimPower: 8, n: 0,
        sources: [], objection: 'Прямых исследований по faceless-нише почти нет' },

      // ── ПРОЦЕСС ──
      { id: 'c1', branch: 'process', text: 'От идеи до публикации — один день',
        type: 'track', claimPower: 7, n: 0,
        sources: [], objection: 'Первые 10 видео всегда дольше. Потом — да' },
      { id: 'c2', branch: 'process', text: 'Нужен только один человек',
        type: 'track', claimPower: 6, n: 0,
        sources: [], objection: 'Монтаж, озвучка, дистрибуция — три разных навыка' },
      { id: 'c3', branch: 'process', text: 'Сценарий пишется по шаблону',
        type: 'case', claimPower: 6, n: 0,
        sources: [], objection: 'Шаблон даёт средний результат, не топ' },

      // ── РИСК ──
      { id: 'r1', branch: 'risk', text: 'Канал не забанит за AI-контент',
        type: 'reason', claimPower: 7, n: 0,
        sources: [], objection: 'Политика YouTube менялась; «не забанит» ≠ «не снизит охват»' },
      { id: 'r2', branch: 'risk', text: 'Площадка не сможет отключить AI-фичу и обнулить доход',
        type: 'candor', claimPower: 6, n: 0,
        sources: [], objection: 'Правда, но и обратного никто не обещает' },
      { id: 'r3', branch: 'risk', text: 'Есть запасной вариант заработка, если YouTube урежет',
        type: 'reason', claimPower: 6, n: 0,
        sources: [], objection: 'Аудитория принадлежит площадке, а не тебе — это главный риск' },

      // ── РЕЗУЛЬТАТ ──
      { id: 'x1', branch: 'result', text: 'Канал выходит на 1000 подписчиков за месяц',
        type: 'case', claimPower: 7, n: 0,
        sources: [], objection: 'Сколько каналов НЕ вышло — об этом не пишут' },
      { id: 'x2', branch: 'result', text: 'Средний CPM выше, чем у авторских каналов',
        type: 'data', claimPower: 7, n: 0,
        sources: [], objection: 'CPM зависит от темы, а не от лица в кадре' },
      { id: 'x3', branch: 'result', text: 'Зритель досматривает видео до конца',
        type: 'data', claimPower: 6, n: 0,
        sources: [], objection: 'Удержание зависит от монтажа и сценария' },

      // ── СВИДЕТЕЛЬСТВА ──
      { id: 'w1', branch: 'witness', text: 'Известные авторы (Perrin, Cunningham) делают faceless-каналы',
        type: 'endorse', claimPower: 8, n: 2,
        sources: [{ name: 'Perrin — Alphablocks, 10M+ подписчиков', n: 1 }],
        objection: 'Их бюджет и команда несопоставимы с «одним человеком»' },
      { id: 'w2', branch: 'witness', text: 'Тысячи каналов повторяют модель',
        type: 'pattern', claimPower: 6, n: 0,
        sources: [], objection: 'Сколько из них зарабатывают больше нуля?' },

      // ── АУТЕНТИЧНОСТЬ ──
      { id: 'a1', branch: 'authentic', text: 'Мы честно говорим, что это ИИ',
        type: 'candor', claimPower: 5, n: 0,
        sources: [], objection: 'Честность — доказательство, но слабое (сила 5)' },
      { id: 'a2', branch: 'authentic', text: 'Мы не продаём мечту, мы продаём цифры',
        type: 'candor', claimPower: 6, n: 0,
        sources: [], objection: 'Тогда покажи цифры — сейчас их нет' },
      // ═══ ПРАВИЛА ПЛАТФОРМЫ (потолок доказательства 10 — справка YouTube) ═══
      { id: 'n1', branch: 'rules', text: 'AI-персоны в финансах, праве, здоровье и политике монетизировать нельзя',
        type: 'platform_docs', claimPower: 6, n: 1,
        sources: [{ name: 'YouTube Help 1311392', url: 'https://support.google.com/youtube/answer/1311392' }],
        objection: 'Прямое пересечение с самыми доходными нишами ($15-50 CPM). Либо ниша, либо формат' },
      { id: 'n2', branch: 'rules', text: 'Массовый шаблонный контент монетизации лишён',
        type: 'platform_docs', claimPower: 6, n: 1,
        sources: [{ name: 'YouTube Help 1311392', url: 'https://support.google.com/youtube/answer/1311392' }],
        objection: 'Слайд-шоу и шаблоны перечислены прямо в запрещённых' },
      { id: 'n3', branch: 'rules', text: 'Проверка идёт по 30 последним видео канала целиком',
        type: 'named_press', claimPower: 5, n: 1,
        sources: [{ name: 'TNW, январь 2026', url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage' }],
        objection: 'Один паттерн в 30 роликах снимает монетизацию со всего канала' },
      { id: 'n4', branch: 'rules', text: 'YouTube платит 55% от Watch Page, 45% от Shorts, 70% от фан-фандинга',
        type: 'platform_docs', claimPower: 5, n: 1,
        sources: [{ name: 'YouTube Help 72902', url: 'https://support.google.com/youtube/answer/72902' }],
        objection: 'Формула механики, не доказательство дохода' }
    ],
  },
};
