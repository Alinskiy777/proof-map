// ═══ КАРТА ДОКАЗАТЕЛЬСТВ · ДАННЫЕ ═══
// Каждое доказательство — реальное, с указанием источника и силы.
// Поля: q (цитата/формулировка) · source (кто говорит) · url · strength (1-10) · n (выборка) · note (нюанс)
// Собирается дип-ресерчем по нише faceless YouTube (монетизация).
window.PROOFS = {

  // ── 10. ОТЗЫВЫ ──
  testimonials: [
    { q: '«How Tano scaled his YouTube business to $10K/month without leaving his 9-5»', source: 'Faceless Launchpad, клиентское интервью', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Конкретная сумма + срок + условие (не ушёл с работы). Сильнее абстрактного «заработал много».' },
    { q: '«Arturo\'s journey to reaching $27K in a single month whilst working full-time»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Один месяц, конкретная сумма — но единичный кейс, n=1.' },
    { q: '«How Matyas made over $15,000 in his first 45 days at only 21 years old»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Срок 45 дней + возраст (идентификация с новичком).' },
    { q: '«Reed\'s story going from failed channels to (now) having made $75,000 in 5 months»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Сюжетная арка «было провально → стало» — самая убедительная форма отзыва.' },
    { q: '«How Willie went from no experience to $10,000/month whilst raising 3 kids»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: '«no experience» — снятие возражения новичка.' },
    { q: '«How Peter got monetized with 3 uploads & made $10,000 in under 60 days»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: '«3 uploads» — конкретика затрат (мало контента).' },
    { q: '«How Aston got to $4,600/m with his channel whilst working a 9-5, starting with zero experience»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Ниже сумма, чем у других — честность повышает доверие к блоку.' },
    { q: '«Arturo finished the month at $27,517 between DJ and WI channels»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Скриншот + разбивка по каналам.' },
    { q: '«Matyas generated $28,543 in digital product sales»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Не только AdSense — цифровые продукты.' },
    { q: '«Tano generated over $9,400 in monthly revenue across channels»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: '«across channels» — сетка каналов как механика.' },
  ],

  // ── 26. СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО ──
  social_proof: [
    { q: '«Learn How Over 5,000 People Are Making Additional Income With Faceless YouTube in 2026»', source: 'Faceless Channels (Grow Channels LLC)', url: 'https://training.facelesschannels.com/youtube-training', strength: 7, n: 5000, note: 'Число участников названо прямо на главной.' },
    { q: '18 скриншотов побед учеников в блоке «More Student Wins» на одной странице', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 18, note: 'Массовость скриншотов — количественный аргумент.' },
    { q: '«Caleb\'s viral video reached 412.7K views»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 6, n: 1, note: 'Один вирусный ролик ≠ стабильный доход.' },
    { q: '«Reed achieved 7M views and $75K revenue in 5 months»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Связка просмотры → деньги.' },
    { q: '«CKing reached 1.4M views and $9,654 in revenue»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Соотношение просмотров к доходу.' },
    { q: '«DonBiggyDon grew to 19,964 subscribers generating 1.2-1.4M views monthly»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Подписчики → просмотры → доход.' },
    { q: '«M$$ze achieved 3.7 million views generating €10,657 in revenue»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Валюта евро — европейская аудитория.' },
    { q: '«Doomi received first $3,040 paycheck from Google with 5K subscribers»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Первый чек — эмоционально сильно для новичка.' },
    { q: '«Vendis got approved for monetization with 590K views in under a month»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Скорость одобрения монетизации.' },
    { q: '«Matthias applied to YouTube Partner Program after just 33 days»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: '33 дня — конкретный срок.' },
  ],

  // ── 4. КОНКРЕТНОСТЬ ──
  specificity: [
    { q: '«Without knowing how to edit, having experience, or working for more than a couple of hours per day»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 0, note: 'Три конкретных условия вместо абстрактного «легко».' },
    { q: '«While working less than 5-10 hours each week»', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 7, n: 0, note: 'Часы в неделю — измеримая единица.' },
    { q: '«Matthias earned €1,278 in 3 weeks after monetization»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Сумма + период + валюта.' },
    { q: '«Aston achieved 139.3K views and $217 revenue after recent monetization»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Честная маленькая сумма — повышает доверие к блоку.' },
    { q: '«Lambda\'s video went viral with 788.5K views»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 6, n: 1, note: 'Точность до сотен — признак реального скриншота.' },
    { q: '«Gus got monetized with 30K views carrying him to 1K subs»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Механика набора подписчиков через вирусный ролик.' },
    { q: '«Matyas reached 1.4M views generating $19,701 in estimated revenue»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Слово «estimated» — честная оговорка.' },
    { q: '«Matyas made $8.3K in his first month on YouTube»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Первый месяц — снимает страх долгого старта.' },
    { q: '«Arturo finished the month at $27,517 between DJ and WI channels»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Разбивка по каналам — прозрачность.' },
    { q: '«every 3 niche bend ideas, each with 3 specific video titles» (21 bend × 3 = 63 заголовка)', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 21, note: 'Конкретные заголовки вместо обещаний.' },
  ],

  // ── 2. ТВОРЧЕСКАЯ ГАРАНТИЯ ──
  guarantee: [
    { q: '«Apply For 1-On-1 Coaching Below» — заявка вместо покупки, риск снят до оплаты', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 0, note: 'Typeform-заявка: сначала отбор, потом оффер.' },
    { q: '«Step 1 of 2: Watch This Free Training → Step 2 of 2: Apply for 1:1 YouTube Coaching»', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 7, n: 0, note: 'Двухшаговость снимает риск: сначала бесплатно.' },
    { q: '«DISCLAIMER: This program provides educational content and coaching support. Individual results vary... Success stories shared are not typical results or guarantees»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Юридический дисклеймер — обязателен, но ослабляет гарантию.' },
    { q: '«If you want my personal help building a branded faceless channel that does $10K/mo, the Art of YouTube is open»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Обещание результата без гарантии — мягкая форма.' },
  ],

  // ── 11. ИСКРЕННОСТЬ ──
  candor: [
    { q: '«Individual results vary based on your effort and implementation. Success stories shared are not typical results or guarantees»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 6, n: 0, note: 'Прямое признание, что кейсы — не норма. Редкость в нише.' },
    { q: '«This is not professional advice. Your results depend on your commitment and participation»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Снятие ответственности — оборона, но честность.' },
    { q: '«Most people will read this and do nothing. The one who moves first wins the blue ocean»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Провокационная честность: признаёт лень аудитории.' },
    { q: '«Don\'t copy the niches. Copy the bends»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Честное указание, что ниши заняты — снимает иллюзию.' },
  ],

  // ── 6. ОБЪЯСНИТЬ МЕХАНИЗМ ──
  mechanism: [
    { q: '«Take the three-way split thumbnail format that went viral for AgentFlappy in the history niche, bend it to cartoons»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 1, note: 'Механизм: формат → ниша → перенос.' },
    { q: '«Hook formula: fact → assumption → dismiss obvious → promise stranger truth»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 0, note: 'Явная формула хука — редкая конкретика.' },
    { q: '«Everyone else failed this niche because they slapped AI footage together and called it done. These two studied how human vloggers actually make videos — b-roll, pacing, character-in-scene blocking»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 2, note: 'Объясняет, ПОЧЕМУ одни провалились, а другие нет.' },
    { q: '«Pivoted from long "Psychology of People Who X" videos that flopped to short 6–8 minute universal curiosity questions that 3.87M and 1.1M\'d»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 2, note: 'Механика разворота: длина видео + формат.' },
    { q: '«The format is a well that isn\'t dry — every human-experience word has an "every X" video waiting»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Почему формат масштабируется.' },
    { q: '«You can layer a Whop community or info product on top and pull $5–10K/month in backend — which most broad channels can\'t match»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Механика монетизации: узкая ниша → backend.' },
    { q: '«Without knowing how to edit, having experience, or working for more than a couple of hours per day»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 6, n: 0, note: 'Механика доступности для новичка.' },
  ],

  // ── 3. ПРИЧИНА (REASON WHY) ──
  reason_why: [
    { q: '«Everyone else failed this niche because they slapped AI footage together and called it done» — причина провала конкурентов', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 0, note: 'Reason-why: почему не работает простой путь.' },
    { q: '«the view ceiling is lower, but the audience is laser-tight» — почему узкая ниша выгоднее', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Reason-why с компромиссом названным честно.' },
    { q: '«Format sustains 100+ videos — every studio has infinite villain and character angles» — почему формат живёт долго', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Reason-why устойчивости формата.' },
    { q: '«First in the space, so they own the blue ocean» — причина, почему быть первым', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 1, note: 'Reason-why временного преимущества.' },
    { q: '«Why Dogs Can\'t Remember You\'re Coming Back» — заголовок-загадка как reason-why', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Формат заголовка, требующего объяснения.' },
    { q: '«the magic is in the product, not the copywriter\'s pen. Advertising doesn\'t create a product advantage, it can only convey it» — Бенчивенга, буллет 19', source: 'Bencivenga, Marketing Bullets', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 9, n: 0, note: 'Первоисточник: почему продукт важнее текста.' },
  ],

  // ── 12. СПЕЦИАЛИЗАЦИЯ ──
  specialization: [
    { q: '«Faceless Launchpad is the go-to coaching program for beginners looking to launch a faceless YouTube channel with AI»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 0, note: 'Позиционирование: только новички + только AI.' },
    { q: '«Don\'t copy the niches. Copy the bends» — перенос формата в новую нишу', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Специализация через формат, а не тему.' },
    { q: '«sub-niched it hard to bodybuilding. The view ceiling is lower, but the audience is laser-tight»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 1, note: 'Узкая специализация как стратегия.' },
    { q: '«Narrow Niche + Community Backend» — отдельный формат-стратегия', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Специализация + монетизация сообществом.' },
  ],

  // ── 1. ДЕМОНСТРАЦИЯ ──
  demonstration: [
    { q: '«Watch This Free Training Below» — демонстрация вместо рассказа', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 7, n: 0, note: 'Видео-демо как первый шаг воронки.' },
    { q: '«Client Interviews» — видео-интервью вместо текстовых отзывов', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 7, note: 'Формат демонстрации: живой человек говорит.' },
    { q: '«More Student Wins» — скриншоты реальных кабинетов/выплат', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 18, note: 'Визуальная демонстрация результата.' },
    { q: '«Click To Unmute» — интерактивное видео-демо на странице', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 5, n: 0, note: 'Слабая демонстрация, но присутствует.' },
  ],

  // ── 27. СРАВНЕНИЕ ──
  comparison: [
    { q: '«7 Faceless YouTube Niches + 21 Unique Niche Bend Ideas» — сравнение ниш между собой', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 7, note: 'Сравнительная структура документа.' },
    { q: '«Which of these 7 channels is best? Which one do I start with?» — сравнение через вопрос', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Сравнение как приём вовлечения.' },
    { q: '«The one who moves first wins the blue ocean» — сравнение «первый vs поздний»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Сравнение по времени входа.' },
    { q: '«long "Psychology of People Who X" videos that flopped to short 6–8 minute ... that 3.87M and 1.1M\'d» — сравнение двух форматов', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 2, note: 'Прямое сравнение с цифрами.' },
  ],

  // ── 13. КЕЙС (CASE HISTORY) ──
  case_history: [
    { q: '«Reed\'s story going from failed channels to (now) having made $75,000 in 5 months»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Полная арка кейса: провал → успех.' },
    { q: '«How Tano scaled his YouTube business to $10K/month without leaving his 9-5»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Кейс с ограничением (не увольнялся).' },
    { q: '«Reed achieved 7M views and $75K revenue in 5 months»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Цепочка просмотры → доход.' },
    { q: '«Pivoted from long "Psychology of People Who X" videos that flopped to short 6–8 minute universal curiosity questions»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 1, note: 'Кейс разворота канала.' },
  ],

  // ── 5. РАЗОБЛАЧЕНИЕ ──
  exposure: [
    { q: '«Everyone else failed this niche because they slapped AI footage together and called it done»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Разоблачение подхода «просто склеить AI».' },
    { q: '«Don\'t copy the niches. Copy the bends» — разоблачение иллюзии, что ниша = успех', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Разоблачение новичковой стратегии.' },
    { q: '«Most people will read this and do nothing»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Разоблачение иллюзии о действиях аудитории.' },
  ],

  // ── 7. ПРЕДОСТЕРЕЖЕНИЕ ПРОТИВ ──
  warning_against: [
    { q: '«the view ceiling is lower» — прямое предостережение о потолке узкой ниши', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 0, note: 'Редкое предостережение о недостатке собственного же совета.' },
    { q: '«Your results depend on your commitment and participation» — предостережение об ответственности', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Снимает с себя гарантию.' },
  ],

  // ── 8. ПРИЗНАТЬ НЕДОВЕРИЕ ──
  acknowledge_skepticism: [
    { q: '«Individual results vary based on your effort and implementation» — признание, что результат не гарантирован', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 6, n: 0, note: 'Признание недоверия клиента прямым текстом.' },
    { q: '«Success stories shared are not typical results or guarantees»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 6, n: 0, note: 'Признание, что показанные кейсы — не норма.' },
  ],

  // ── 25. МЕТАФОРА ──
  metaphor: [
    { q: '«blue ocean» — метафора незанятого рынка', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Устоявшаяся бизнес-метафора.' },
    { q: '«the format is a well that isn\'t dry» — метафора неиссякаемого источника', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Метафора объясняет масштабируемость.' },
    { q: '«slapped AI footage together and called it done» — метафора небрежного подхода', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Метафора-разоблачение.' },
    { q: '«the audience is laser-tight» — метафора точности аудитории', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Метафора сужения аудитории.' },
    { q: '«Metaphors make your copy more memorable» — Бенчивенга, буллет 25', source: 'Bencivenga, Marketing Bullets', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 9, n: 0, note: 'Первоисточник правила метафор.' },
  ],

  // ── 18. ЛОГИЧЕСКИЙ ФУНДАМЕНТ ──
  logical_foundation: [
    { q: '«If you\'ve got 20 minutes a month, I guarantee to work a financial miracle» — цепочка «время → гарантия → результат»', source: 'Bencivenga, Marketing Bullets (буллет 3)', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 9, n: 0, note: 'Первоисточник: два самых мощных слова.' },
    { q: '«advertising doesn\'t create a product advantage, it can only convey it» — логическое основание', source: 'Bencivenga, Marketing Bullets (буллет 19)', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 9, n: 0, note: 'Почему сначала продукт, потом текст.' },
    { q: '«If the glove don\'t fit, you must acquit» — кооптинг известной фразы (рифма)', source: 'Архивы Бенчивенги: 12 sticky disciples №11', url: 'https://bejakovic.com/', strength: 5, n: 0, note: 'Ось «липкость», не оффера. Архив, строка 141. Переклассифицировано из «логического фундамента» — это не логика, а языковой приём.' },
  ],

  // ── 17. ЯРКАЯ КАРТИНА ──
  vivid_picture: [
    { q: '«How Willie went from no experience to $10,000/month whilst raising 3 kids» — картина жизни', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Деталь «raising 3 kids» рисует картину.' },
    { q: '«How Aston got to $4,600/m whilst working a 9-5, starting with zero experience» — картина «я как ты»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Идентификация через деталь.' },
    { q: '«From 9-5 to the island life» — картина мечты', source: 'Casper van Ree, Instagram', url: 'https://instagram.com/caspervanree', strength: 6, n: 1, note: 'Метафорическая картина результата.' },
  ],

  // ── 16. ПОКАЗАТЬ ЛИЧНОСТЬ ──
  personality: [
    { q: '«Most people will read this and do nothing. The one who moves first wins the blue ocean» — голос автора', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Прямой голос, без корпоративного тона.' },
    { q: '«Don\'t copy the niches. Copy the bends» — авторская формулировка', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Личная манера изложения.' },
  ],

  // ── 19. ЗАЯВЛЕНИЯ + ДОКУМЕНТЫ ──
  claims_documentation: [
    { q: '18 скриншотов побед учеников с подписями (суммы, просмотры, даты)', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 18, note: 'Документ → заявление. Подписи содержат цифры.' },
    { q: '«This site is not a part of the Facebook website or Facebook Inc.» — юридическое подтверждение', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 5, n: 0, note: 'Формальная документация.' },
  ],

  // ── 20. САЙДБАР ПРОЦЕССА ──
  process_sidebar: [
    { q: '«Step 1 of 2: Watch This Free Training Below → Step 2 of 2: Apply for 1:1 YouTube Coaching» — процесс из 2 шагов', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 7, n: 0, note: 'Процесс показан явно как нумерованные шаги.' },
    { q: '«7 Faceless YouTube Niches + 21 Unique Niche Bend Ideas» — процесс выбора ниши из 7 + 21', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 28, note: 'Процесс: выбрал нишу → применил bend → получил заголовки.' },
    { q: '«each with 3 specific video titles modeled on the source channel\'s best-performing uploads» — процесс создания контента', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 63, note: 'Процесс: формат → 3 заголовка.' },
  ],

  // ── 21. МЕДИА-ПОЯВЛЕНИЯ ──
  media_appearances: [
    { q: '«This website is managed by Ascentir Management Consultancies» — юридическое лицо за брендом', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Формальное подтверждение существования компании.' },
  ],

  // ── 22. РЕКОМЕНДАЦИИ ЗНАМЕНИТОСТЕЙ ──
  celebrity_endorsements: [
    { q: '«Learn How Over 5,000 People Are Making Additional Income With Faceless YouTube in 2026» — присоединение к массе', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 6, n: 5000, note: 'Не знаменитость, а массовость как заменитель.' },
  ],

  // ── 23. НАУЧНЫЕ ИССЛЕДОВАНИЯ ──
  scientific_research: [
    { q: '«38% stickier than the average» — MIT о запоминаемости рифмы/кооптинга', source: 'Архивы Бенчивенги: 12 sticky disciples №11', url: 'https://bejakovic.com/', strength: 5, n: 0, note: 'Ось «липкость», не оффера: наука о запоминаемости приёма. Архив, строка 127. Научная ссылка есть, но она про приём, а не про продукт.' },
    { q: '«The secret "trigger word" alluded to in the headline is "because"» — эксперимент Ellen Langer (Harvard): 60% → 93%', source: 'Bencivenga, Marketing Bullets (буллет 10)', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 9, n: 0, note: 'Классический психологический эксперимент.' },
    { q: '«people in the queue to the copy machine» — три варианта просьбы (60% / 93% / 93%)', source: 'Bencivenga, Marketing Bullets (буллет 10)', url: 'https://nordiccopy.com/bencivenga-bullets/', strength: 8, n: 0, note: 'Эксперимент с тремя условиями.' },
  ],

  // ── 24. ПУБЛИКАЦИИ ──
  publication: [
    { q: '«© 2025 Faceless Launchpad. All rights reserved.» — регистрация бренда', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Формальный признак существования.' },
    { q: '«©2026 Grow Channels LLC» — юридическое лицо с годом', source: 'Faceless Channels', url: 'https://training.facelesschannels.com/youtube-training', strength: 5, n: 0, note: 'Юрлицо названо прямо.' },
  ],

  // ── 9. ДОСТОВЕРНЫЙ ИСТОЧНИК ──
  credible_source: [
    { q: '«the three-way split thumbnail format that went viral for AgentFlappy in the history niche» — ссылка на конкретный канал', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 1, note: 'Назван реальный канал как источник формата.' },
    { q: '«the "Every Emotion You Can\'t Name Explained" concept from Psychology Explain Mode (413K views)»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 1, note: 'Назван канал + число просмотров.' },
    { q: '«Textbook niche bend of Felune. Felune crushed with cat psychology stories»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 8, n: 1, note: 'Цепочка источников: Felune → собаки → дети → BackyardBirdMind.' },
    { q: '«BBall Explained for basketball» — источник формата', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 7, n: 1, note: 'Назван конкретный канал-образец.' },
  ],

  // ── 14. TRACK RECORD ──
  track_record: [
    { q: '«Reed\'s story going from failed channels to (now) having made $75,000 in 5 months»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Послужной список: провалы → результат.' },
    { q: '«This website is managed by Ascentir Management Consultancies» — история компании', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 5, n: 0, note: 'Формальная история, без цифр.' },
  ],

  // ── 15. СТАТУС ЭКСПЕРТА ──
  expert_status: [
    { q: '«Faceless Launchpad is the go-to coaching program for beginners»', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 6, n: 0, note: 'Самопозиционирование как «the go-to».' },
    { q: '«If you want my personal help building a branded faceless channel that does $10K/mo, the Art of YouTube is open»', source: 'The Art of YouTube', url: 'https://new.theartofyt.com/may-2026-niches', strength: 6, n: 0, note: 'Личное обращение эксперта.' },
  ],

  // ── 28. РЕКОМЕНДАЦИИ АВТОРИТЕТОВ (буллет 29 №2) ──
  endorsements: [
    { q: '«Gary Bencivenga дал восторженный endorsement Lawrence Bernstein’s Ad Money Machine — " world’s greatest living copywriter"»', source: 'bejakovic.com, Gary Bencivenga Archives', url: 'https://bejakovic.com/', strength: 8, n: 1, note: 'Рекомендация автора такого уровня — сильнейший аргумент.' },
    { q: '«Издатель купил маленький финансовый новостной листок "lock stock and two smoking barrels" только из-за восторженного отзыва Warren Buffett»', source: 'Gary Bencivenga Archives', url: 'https://bejakovic.com/', strength: 8, n: 1, note: 'Endorsement  Buffett перевесил все сомнения — решение принято на его основе.' },
    { q: '«Chip Woods, издатель "Insider Report", отправил письмо подписчикам, рекомендуя чужое предложение — и его читатели приняли»', source: 'Бенчивенга гл.4 №9', url: 'https://bejakovic.com/', strength: 7, n: 1, note: 'Авторитет издателя перенесён на продукт.' },
  ],

  // ── 29. ДОКАЗАННЫЕ РЕЗУЛЬТАТЫ (буллет 29 №5) ──
  proven_outcomes: [
    { q: '«150+ продаж оффера, которые я помог сделать, — чуть больше, чем Лоуренс получил из своего собственного house file»', source: 'Gary Bencivenga Archives', url: 'https://bejakovic.com/', strength: 7, n: 150, note: 'Измеримый результат с независимым сравнением (house file). n=150.' },
    { q: '«Matyas earned over $15,000 in his first 45 days» — повторяемость результата у разных учеников', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 7, n: 1, note: 'Результат воспроизводится на нескольких учениках, не единичен.' },
    { q: '«Doomi received first $3,040 paycheck from Google with 5K subscribers»', source: 'Faceless Launchpad, скриншот', url: 'https://facelesslaunchpad.com/', strength: 8, n: 1, note: 'Первый чек = доказанный результат, а не прогноз.' },
  ],

  // ── 30. РЕПУТАЦИЯ В ОТРАСЛИ (буллет 29 №8) ──
  reputation_industry: [
    { q: '«Гэри был лучшим в мире — и у него была репутация, ему соответствующая; вы не командуете таким же уважением клиентов»', source: 'Gary Bencivenga Archives', url: 'https://bejakovic.com/', strength: 5, n: 1, note: 'Репутация = накопленный капитал уважения отрасли. Её нельзя купить, только заработать.' },
    { q: '«This website is managed by Ascentir Management Consultancies» — компании отрасли называют себя публично', source: 'Faceless Launchpad', url: 'https://facelesslaunchpad.com/', strength: 4, n: 0, note: 'Формальный признак репутации, без подтверждения.' },
  ],
};
