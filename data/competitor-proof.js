// ═══ ДОКАЗАТЕЛЬСТВА КОНКУРЕНТОВ · прогон 1 ═══
// Вес типа источника (w) — потолок доказательности по Бенчивенге.
// 10 = юридически обязывающая справка платформы. 1 = самоотчёт в соцсети.
//
// 🔴 ПРОВЕРЕНО МНОЙ: все цитаты из справки YouTube сверены с первоисточником
// (web_extract 29.09.2026, answer/1311392 и /72902) — совпали дословно.

window.COMPETITOR_PROOF = {
  sourceWeights: {
    platform_docs:   { w: 10, name: 'Справка YouTube (юридически обязывает)' },
    verified_press:  { w: 8,  name: 'Пресса с проверкой документов (Fortune)' },
    named_press:     { w: 6,  name: 'Отраслевая пресса с именной цитатой' },
    interview:       { w: 6,  name: 'Интервью/подкаст (заявление продавца)' },
    vendor:          { w: 5,  name: 'Вендор с коммерческим интересом' },
    seofarm:         { w: 3,  name: 'SEO-контент-ферма' },
    selfreport:      { w: 1,  name: 'Самоотчёт в соцсети' }
  },

  items: [
    // ── ПРАВИЛА ПЛАТФОРМЫ (потолок 10) ──
    { id: 'g1', src: 'platform_docs', claim: 'YouTube платит 55% от чистого дохода Watch Page Ads',
      quote: "YouTube will pay them 55% of net revenues from ads displayed or streamed on their public videos on their content Watch Page.",
      url: 'https://support.google.com/youtube/answer/72902', verified: '✅ сверено дословно' },
    { id: 'g2', src: 'platform_docs', claim: 'Shorts — 45% от выделенного из Creator Pool',
      quote: "YouTube will pay them 45% of the revenue allocated to them based on their share of views from the Creator Pool allocation.",
      url: 'https://support.google.com/youtube/answer/72902', verified: '✅ сверено дословно' },
    { id: 'g3', src: 'platform_docs', claim: 'Fan funding (memberships, Super Chat) — 70%',
      quote: "YouTube will pay them 70% of net revenues from channel memberships, Super Chat, Super Stickers, and Super Thanks.",
      url: 'https://support.google.com/youtube/answer/72902', verified: '✅ сверено дословно' },
    { id: 'g4', src: 'platform_docs', claim: 'Контент не должен быть массовым, шаблонным, повторяющимся',
      quote: "Not be mass-produced, generic, repetitive, or manipulative. It should be made for the enjoyment or education of viewers, rather than for the sole purpose of getting views.",
      url: 'https://support.google.com/youtube/answer/1311392', verified: '✅ сверено дословно' },
    { id: 'g5', src: 'platform_docs', claim: 'Слайд-шоу и шаблонные сюжеты монетизировать нельзя',
      quote: "Image slideshows, templated storylines, or scrolling text with minimal or no narrative, commentary, or educational value",
      url: 'https://support.google.com/youtube/answer/1311392', verified: '✅ сверено дословно' },
    { id: 'g6', src: 'platform_docs', claim: '🔴 ПРЯМОЙ ЗАПРЕТ: AI-персоны в финансах, праве, здоровье, политике — монетизация невозможна',
      quote: "This policy refers to channels that use AI-generated personas to deliver information on sensitive topics. This includes any content that presents itself as a human expert providing advice to viewers on topics such as health, legal issues, finances, or politics... channels uploading this content will not be allowed to monetize.",
      url: 'https://support.google.com/youtube/answer/1311392', verified: '✅ сверено дословно',
      note: 'Это прямое пересечение с самыми доходными нишами: $15-50 CPM в финансах, $15-40 в здоровье' },
    { id: 'g7', src: 'platform_docs', claim: 'С 15.07.2025 «repetitious content» переименована в «inauthentic content»',
      quote: "We are also renaming this policy from \"repetitious content\" to \"inauthentic content.\" This type of content has always been ineligible for monetization under our existing policies.",
      url: 'https://support.google.com/youtube/answer/1311392', verified: '✅ сверено дословно' },
    { id: 'g8', src: 'platform_docs', claim: 'Каналы с ИИ монетизируются — запрет не к инструменту, а к результату',
      quote: "We welcome creators using AI tools to enhance their storytelling, and channels that use AI in their content remain eligible to monetize.",
      url: 'https://support.google.com/youtube/thread/356734251', verified: 'субъагент, не сверено мной' },

    // ── ПРОВЕРЕННАЯ ПРЕССА (потолок 8) ──
    { id: 'g9', src: 'verified_press', claim: '2 млн просмотров/день = $0.83 RPM — миллионы просмотров ≠ миллионы денег',
      quote: '~$50 000/мес при ~2 млн просмотров/день',
      url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content',
      verified: 'субъагент; Fortune проверял скриншоты дашбордов',
      note: 'Разрушает аргумент «много просмотров = много денег»' },
    { id: 'g10', src: 'verified_press', claim: 'Сам оператор большой сети: индивидуальным окно примерно до 2027',
      quote: "individual creators have until around 2027 to meaningfully profit from AI-generated long-form YouTube content",
      url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content',
      verified: 'субъагент', note: 'Прямо от автора кейса $700K/год' },
    { id: 'g11', src: 'verified_press', claim: 'Шестичасовой ролик стоит $60, но операционные расходы сети — $6 500/мес',
      quote: 'пайплайн TubeGen + Claude + ElevenLabs',
      url: 'https://fortune.com/2025/12/30/ai-slop-faceless-youtube-accounts-adavia-davis-user-generated-content',
      verified: 'субъагент', note: 'Производство дёшево, сеть дорогая — разные статьи' },

    // ── ИНТЕРВЬЮ ВЛАДЕЛЬЦЕВ (потолок 6 — голос сильный, потолок слабый) ──
    { id: 'c1', src: 'interview', claim: 'Noah Morris: $200 000/мес AdSense на пике, 20+ каналов, команда 14 человек, 8 лет',
      quote: "he says he reached about $200,000 per month in AdSense across 20-plus channels at peak, but those are self-reported survivor numbers.",
      url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/',
      verified: 'субъагент', n: 20, note: 'Сам источник называет это «self-reported survivor numbers»' },
    { id: 'c2', src: 'interview', claim: 'Noah Morris: новичкам ~35 видео и $3 000–3 500 до возврата, бюджет $5 000/год',
      quote: "beginners should expect around 35 videos and $3,000 to $3,500 before seeing returns. He recommends budgeting about $5,000 for the first year",
      url: 'https://vidiq.com/blog/post/start-youtube-automation-channel/',
      verified: 'субъагент', n: 35, note: 'Это рекомендация продавца, не измеренный факт' },
    { id: 'c3', src: 'interview', claim: 'Leo Grundström: $3.5–4 млн за 2–3 года, 20–30 живых каналов',
      quote: "Actually, shy of revenue, let's say I think between three and a half, $4 million since I started uh 2 3 years ago.",
      url: 'https://www.youtube.com/watch?v=dmnQkXCpXK8',
      verified: 'субъагент', n: '2-3 года' },
    { id: 'c4', src: 'interview', claim: 'Razvan Paraschiv: реальная динамика дохода — пик $15 575 в октябре, потом ~$3 000/мес',
      quote: 'Channel America Grows: июль $6 824 → сент $9 949 → окт $15 575 → ноябрь $7 891 → далее ~$3 000/мес',
      url: 'https://www.youtube.com/watch?v=7mwMzSlq62Q',
      verified: 'субъагент',
      note: 'Единственный кейс с честной динамикой по месяцам: пик, спад, стабилизация' },
    { id: 'c5', src: 'interview', claim: 'Razvan Paraschiv: прозрачности нет — «это не было overnight success»',
      quote: "this is also the issue with not having full transparency to what was happening... this wasn't definitely an overnight success",
      url: 'https://www.youtube.com/watch?v=7mwMzSlq62Q', verified: 'субъагент' },
    { id: 'c6', src: 'interview', claim: 'Jonathan Laramy: £300–800 ($400–1070) за ролик, 10–15 ревизий',
      quote: "A long-form video for my channel typically costs between £300 and £800 ($400 to $1,070) to produce... a single video can take 10-15 revisions",
      url: 'https://www.businessinsider.com/quit-job-now-makes-ai-videos-youtube-earns-more-money-2026-6',
      verified: 'субъагент', note: 'Против «10-30 минут на видео» из вендоров' },

    // ── ОТРАСЛЕВАЯ ПРЕССА (потолок 6) ──
    { id: 'p1', src: 'named_press', claim: 'YouTube поощряет видео с человеческим лицом в кадре',
      quote: 'алгоритм теперь поощряет видео с человеческим лицом',
      url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586',
      verified: 'субъагент' },
    { id: 'p2', src: 'named_press', claim: 'Владелец 1.7 млн подписчиков: те, кто делает то же без лица, демонетизируются',
      quote: "The people who do the same content as me without their face in it, most of them are getting demonetized.",
      url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586',
      verified: 'субъагент' },
    { id: 'p3', src: 'named_press', claim: 'Массовая правка: 16 каналов, 35 млн подписчиков, ~$10 млн/год — прекращены',
      quote: '16 каналов, 35 млн подписчиков, 4,7 млрд просмотров, ~$10 млн/год — прекращены в январе 2026',
      url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage',
      verified: 'субъагент' },
    { id: 'p4', src: 'named_press', claim: 'Демонетизация — на уровне КАНАЛА по 30 последним видео',
      quote: "One pattern across a creator's last 30 uploads can pull monetisation from every video on the channel.",
      url: 'https://thenextweb.com/news/youtube-ai-slop-crackdown-faceless-creators-collateral-damage',
      verified: 'субъагент' },
    { id: 'p5', src: 'named_press', claim: 'Правовая потеря: −$250 тыс./мес у Noah Morris при закрытии по copyright',
      quote: '−$250 тыс./мес у Noah Morris (6 faceless-каналов), начало 2025',
      url: 'https://www.hollywoodreporter.com/business/digital/faceless-creators-youtube-ai-damage-1236617586',
      verified: 'субъагент' },

    // ── ВЕНДОР (потолок 5) ──
    { id: 'v1', src: 'vendor', claim: 'RPM на 30–50% ниже CPM (деление на ad impressions vs все просмотры)',
      quote: "RPM typically runs 30 to 50 percent lower than CPM",
      url: 'https://vidiq.com/blog/post/most-profitable-youtube-niches',
      verified: 'субъагент', note: 'Сам vidIQ дисклеймится: treat as directional ranges, not guarantees' },

    // ── ОПРОВЕРГНУТО ──
    { id: 'f1', src: 'seofarm', claim: '«Рынок растёт на 217%»', quote: '38% новых монетизируемых проектов, рост 217%',
      url: 'https://frameloop.ai/blog/faceless-youtube-statistics-2026', verified: '❌ ОПРОВЕРГНУТО',
      note: 'Сайт продаёт faceless-сервисы и ссылается на несуществующий датасет. Потолок 1/10. НЕ ИСПОЛЬЗОВАТЬ.' },
    { id: 'f2', src: 'seofarm', claim: '«$100 000 за 90 дней»', quote: 'заголовок $100K, внутри цифры: $24 000 выручки при ~$29 RPM',
      url: 'https://medium.com/activated-thinker/we-built-an-ai-youtube-channel-that-made-100-000-in-90-days-8bd20d176698',
      verified: '❌ ОПРОВЕРГНУТО: заголовок вчетверо больше цифр внутри',
      note: 'Прямое доказательство, что «кейсы $100K за 90 дней» — маркетинг, а не бухгалтерия' }
  ]
};
