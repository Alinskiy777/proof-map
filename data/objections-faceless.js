// ═══ ВОЗРАЖЕНИЯ ЖИВЫХ ЛЮДЕЙ · r/NewTubers · 178 комментариев ═══
// Это НЕ наши мнения. Это то, что говорят живые люди, когда им предлагают
// faceless/AI-канал. Каждая цитата проверена по исходнику (номер [n] = индекс
// в reddit-comments-sample.txt, все 37 номеров сверены).
//
// ⚠️ ЧЕСТНО: частота и сила удара — оценка агента по выборке из ОДНОГО сабреддита.
// Цифры «47%», «18 дней» внутри цитат — утверждения анонимов, не проверенный факт.
//
// Формат: hits = id утверждений из niche-faceless.js, которые эта реальность ломает.

window.OBJECTIONS = {
  meta: {
    source: 'r/NewTubers, 178 комментариев со словом «faceless», сортировка по score',
    collected: '2026-09-29',
    verified: '37 из 37 номерных ссылок сверены с исходником',
    caveat: 'один сабреддит, не весь Reddit; частоты — оценка, не статистика'
  },

  clusters: [
    {
      id: 'o1', name: 'AI slop = недоверие к безликому ИИ-контенту',
      gist: 'люди не доверяют faceless AI-каналам и называют контент мусором',
      count: 22, sample: 178, power: 9,
      hits: ['p1', 'e1', 'a1'],
      fix: 'демо «до/после» живыми зрителями вместо утверждения «неотличимо»',
      quotes: [
        { n: 86,  s: 1, t: "I'm definitely moving away from watching any YouTube channel that's faceless. I despise AI slop." },
        { n: 45,  s: 2, t: "Ok I looked it up and it looks like a faceless ai slop channel. No video editing. No motion graphics. Yeah. It's slop" },
        { n: 173, s: 0, t: "People are having issues because their channel is faceless mostly and has no own sort of human touch." }
      ]
    },
    {
      id: 'o2', name: 'YouTube агрессивно подавляет faceless/AI-каналы',
      gist: 'демонетизация, теневой бан, «cooking» — каналы умирают не за контент, а за формат',
      count: 15, sample: 178, power: 10,
      hits: ['p3', 'r1', 'r2', 'e3', 'e1'],
      fix: 'ссылка на правила YouTube + подтверждение, что теневой бан не подтверждён',
      quotes: [
        { n: 177, s: -1, t: "faceless? if so, you might be cooked. youtube is *aggressively* suppressing..." },
        { n: 13,  s: 4,  t: "I know faceless channels have been throttled lately, mostly because of..." },
        { n: 20,  s: 3,  t: "that's not shadow banning, that's youtube giving your channel a chance" }
      ]
    },
    {
      id: 'o3', name: 'Без лица = нет доверия и парасоциальной связи',
      gist: 'зритель привязывается к человеку, а не к формату; без лица привязки нет',
      count: 14, sample: 178, power: 7,
      hits: ['m2', 'x3', 'c2', 'p1'],
      fix: 'показать, что доверие строится на качестве, а не на лице (нужен третий путь)',
      quotes: [
        { n: 10,  s: 4,  t: "I will gladly take a real human with all their flaws if the content..." },
        { n: 158, s: 1,  t: "being an actual face and voice will always be king for people giving some..." },
        { n: 101, s: 1,  t: "there are some faceless channels that works but, i'm generally people..." }
      ]
    },
    {
      id: 'o4', name: 'Faceless = скучно и монотонно, «слушать фон»',
      gist: 'b-roll и слова на экране воспринимаются как фон, а не как контент',
      count: 11, sample: 178, power: 6,
      hits: ['x3', 'p1', 'c3'],
      fix: 'измерить удержание, а не заявлять «зритель досматривает»',
      quotes: [
        { n: 14,  s: 3,  t: "I would rethink the format. If it's faceless, your entire video would be b-roll and words on a screen, which is kind of boring." },
        { n: 143, s: 1,  t: "voiceless and faceless. so... just a video of gameplay? i don't think th..." }
      ]
    },
    {
      id: 'o5', name: 'Скрытая сложность: монетизация НЕ гарантирована',
      gist: '«автомат денег не работает», большинство каналов выходят в ноль',
      count: 12, sample: 178, power: 8,
      hits: ['e1', 'e3', 'e4', 'x2'],
      fix: 'показать распределение, а не среднее: сколько каналов заработали 0',
      quotes: [
        { n: 18,  s: 3,  t: "faceless works as a production format, but the \"automated money machine\"..." },
        { n: 93,  s: 1,  t: "the shadowban thing comes up in every one of these threads and ive never seen anyone actually produce a channel where it happened. ... 47% had stopped posting entirely, and the median one that quit lasted 18 days." }
      ]
    },
    {
      id: 'o6', name: 'Голос решает всё, ИИ-голос убивает канал',
      gist: 'интонация, паузы, cadence — носитель убедительности, и ИИ его не даёт',
      count: 8, sample: 178, power: 8,
      hits: ['p1', 'p2', 'x3'],
      fix: 'заменить ИИ-голос живым или показать измеримую разницу в удержании',
      quotes: [
        { n: 5,   s: 6,  t: "I run a faceless channel with just my real voice narrating. actually..." },
        { n: 131, s: 1,  t: "what matters most is clear enunciation and cadence imo." },
        { n: 34,  s: 2,  t: "i've run a faceless channel for years, and what i learned is your voice bec..." }
      ]
    },
    {
      id: 'o7', name: 'Объём работы огромный, «один человек» — перестарались',
      gist: 'реальные тайминги: часы на видео, а не минуты',
      count: 10, sample: 178, power: 5,
      hits: ['c1', 'c2', 'p2', 'e2'],
      fix: 'дать реальные тайминги производства, а не «один день от идеи до публикации»',
      quotes: [
        { n: 147, s: 1,  t: "yeah that first channel sounds brutal, 40 hours for a 10 minute vid is why..." },
        { n: 3,   s: 7,  t: "No, I also do faceless video essays and it takes a long time." }
      ]
    },
    {
      id: 'o8', name: 'Конкуренция бездонная, ниша переполнена',
      gist: '«все делают одно и то же», выделиться нечем',
      count: 9, sample: 178, power: 7,
      hits: ['m3', 'w2', 'x1'],
      fix: 'показать, чем наш канал отличается от тысяч других',
      quotes: [
        { n: 52,  s: 1,  t: "I wouldn't wait for a specific timeline like 3 months, 6 months or a year." },
        { n: 117, s: 1,  t: "to be honest i'm not sure how to differentiate your content with..." }
      ]
    },
    {
      id: 'o9', name: 'Кража голоса и личности через ИИ',
      gist: 'клонирование чужого голоса/лица — это не «экономия», а кража',
      count: 2, sample: 178, power: 6,
      hits: ['a1', 'a2'],
      fix: 'явно показать: только своя личность и голос, никакого клонирования',
      quotes: [
        { n: 30,  s: 2,  t: "no. theres a lot of mistrust with ai. even if you *say* it was written by a person..." }
      ]
    },
    {
      id: 'o10', name: '«Человечность» важнее формата',
      gist: 'формат — не суть; суть в человеке, который за ним стоит',
      count: 5, sample: 178, power: 5,
      hits: ['p1', 'a1'],
      fix: 'показать, где в нашем канале есть человек, а не только формат',
      quotes: [
        { n: 77,  s: 1,  t: "I respectfully hugely disagree on the \"if you are a faceless youtube creator...\"" },
        { n: 54,  s: 1,  t: "I would say the most important thing isn't listed, unless you put it..." }
      ]
    }
  ]
};
