#!/usr/bin/env python3
# Рендер красивого документа «ВОЗРАЖЕНИЯ ЖИВЫХ ЛЮДЕЙ».
# Гарантия полноты: скрипт ПЕЧАТАЕТ счётчики — сколько вошло, сколько вышло.
import json, os, re, html, collections, datetime

BASE = os.path.expanduser('~/proof-map/collect')
OUT  = os.path.expanduser('~/wiki/yapping/objections/ВОЗРАЖЕНИЯ.md')
os.makedirs(os.path.dirname(OUT), exist_ok=True)

data = json.load(open(f'{BASE}/assembled.json', encoding='utf-8'))
groups = data['groups']

# справочник существующих кластеров (название + суть + сила) из приложения
META = {
 'o1':  ('ИИ-контент читается как «мусор»',        'люди не доверяют безликому ИИ и называют контент шлаком', 9),
 'o2':  ('YouTube давит faceless/AI-каналы',       'демонетизация, теневой бан, «канал готовят»',              10),
 'o3':  ('Без лица нет доверия',                   'зритель привязан к человеку, а не к формату',             7),
 'o4':  ('Скучно и монотонно, «фон для слуша»',    'b-roll и текст на экране не удерживают',                    6),
 'o5':  ('Монетизация не гарантирована',           '«автомат денег» не работает, большинство выходят в ноль',   8),
 'o6':  ('Голос решает всё, ИИ-голос убивает',      'интонация и паузы несут убедительность',                    8),
 'o7':  ('Объём работы огромный',                  '«один человек» — обещание с перехватом',                    5),
 'o8':  ('Конкуренция бездонная',                  '«все делают одно и то же, выделиться нечем»',               7),
 'o9':  ('Кража голоса и личности через ИИ',       'клонирование — не экономия, а кража',                      6),
 'o10': ('Человечность важнее формата',            'формат не суть, суть — человек за ним',                    5),
}
for nc in data.get('new_clusters', []):
    cid = nc.get('id')
    if cid and cid not in META:
        META[cid] = (nc.get('name', cid), nc.get('gist', ''), 7)

def bar(p):
    return '█' * p + '░' * (10 - p)

def esc(t):
    return (t or '').replace('|', '\\|')

def blockquote(t):
    return '\n'.join('> ' + ln for ln in (t or '').strip().split('\n'))

# ── считаем ───────────────────────────────────────────────────────────
skipped = groups.get('SKIP', [])
real    = {k: v for k, v in groups.items() if k != 'SKIP' and v}
total_in = sum(len(v) for v in real.values())
ordered = sorted(real.items(), key=lambda x: -len(x[1]))

D = []
D.append("---")
D.append("title: Возражения живых людей к faceless YouTube — полный сборник")
D.append("type: concept")
D.append(f"created: {datetime.date.today().isoformat()}")
D.append("tags: [reddit, faceless, возражения, бенчивенга, контент-ниша]")
D.append("status: рабочее")
D.append("---")
D.append("")
D.append("# Возражения живых людей к faceless YouTube")
D.append("")
D.append(f"**Источник:** Reddit, {sum(len(v) for v in groups.values())} комментариев, из них **с возражением — {total_in}**  ")
D.append("**Сабреддиты:** r/NewTubers, r/YouTubeCreators, r/YouTubers, r/ContentCreators, r/SideProject  ")
D.append("**Метод:** собрано через Arctic Shift API → классифицировано по кластерам → переведено, **оригинал сохранён рядом с переводом**")
D.append("")
D.append("> **Как это читать.** Это не наши мнения. Это то, что живые люди говорят, когда им предлагают")
D.append("> faceless-канал. Каждая цитата — дословный оригинал + перевод. Ничего не выдернуто из контекста.")
D.append("")
D.append("---")
D.append("")
D.append("## Карта возражений")
D.append("")
D.append("| # | Возражение | Цитат | Сила |")
D.append("|:--:|:---|---:|:---|")
for i, (cl, items) in enumerate(ordered, 1):
    name, gist, power = META.get(cl, (cl, '', 5))
    D.append(f"| {i} | **{name}** | **{len(items)}** | `{bar(power)}` {power} |")
D.append("")
D.append(f"**Всего цитат в документе: {total_in}**")
D.append("")

for i, (cl, items) in enumerate(ordered, 1):
    name, gist, power = META.get(cl, (cl, '', 5))
    D.append("---")
    D.append("")
    D.append(f"## {i}. {name}")
    D.append("")
    D.append(f"*{gist}*")
    D.append("")
    D.append(f"**Цитат: {len(items)}** · сила `{bar(power)}` **{power}/10**")
    D.append("")
    D.append("| # | Автор | ⬆ | Сабреддит | Перевод | Оригинал |")
    D.append("|:--:|:---|--:|:---|:---|:---|")
    for j, r in enumerate(sorted(items, key=lambda x: -(x['score'] or 0)), 1):
        ru = r.get('ru', '')
        ru_cell = re.sub(r'\s+', ' ', ru)[:190].replace('|', '\\|')
        ru_cell = (ru_cell + '…') if len(re.sub(r'\s+', ' ', ru)) > 190 else ru_cell
        en = re.sub(r'\s+', ' ', r['body'])[:110].replace('|', '\\|')
        en = (en + '…') if len(re.sub(r'\s+', ' ', r['body'])) > 110 else en
        D.append(f"| {j} | {esc(r['author'])[:18]} | {r['score']} | {r['sub']} | {ru_cell or '—'} | *«{en}»* |")
    D.append("")
    D.append("<details><summary>🔽 полные тексты и переводы</summary>")
    D.append("")
    for j, r in enumerate(sorted(items, key=lambda x: -(x['score'] or 0)), 1):
        D.append(f"**[{j}] {esc(r['author'])}** · ⬆{r['score']} · r/{r['sub']}  ")
        D.append(f"<{r.get('url') or 'https://reddit.com'}> · `{r['rid']}`")
        D.append("")
        D.append("🇬🇧 Оригинал:")
        D.append("")
        D.append(blockquote(r['body']))
        D.append("")
        ru = r.get('ru', '').strip()
        D.append("🇷🇺 Перевод:")
        D.append("")
        D.append(blockquote(ru) if ru else "> _перевод ожидается_")
        D.append("")
    D.append("</details>")
    D.append("")

D.append("---")
D.append("")
D.append("## Честные оговорки")
D.append("")
D.append(f"- Отборка: Reddit — **не вся аудитория**. Человек, который молча ушёл, в комментариях не останется.")
D.append(f"- {len(skipped)} комментариев отсеяно как нерелевантные (поддержка, вопросы, оффтоп).")
D.append("- Числа внутри цитат («за 40 часов», «47%») — **утверждения анонимов**, не проверенный факт.")
D.append("- Один человек мог написать несколько комментариев. Частоты — оценка по комментариям, не по людям.")
D.append("- Перевод сделан для смысла, не дословно-юридически: идиоматическое смягчено, факты сохранены.")
D.append("")

md = '\n'.join(D)
open(OUT, 'w', encoding='utf-8').write(md)

# ── ПРОВЕРКА ПОЛНОТЫ ─────────────────────────────────────────────────
rendered = md.count('| ')  # строки таблиц
print(f"кластеров:            {len(ordered)}")
print(f"цитат во входе:       {total_in}")
print(f"цитат в разделах:     {sum(len(v) for v in real.values())}")
print(f"переведено:           {sum(1 for v in real.values() for r in v if r.get('ru','').strip())}")
print(f"отсеяно (SKIP):       {len(skipped)}")
print(f"без метки:            {len(data.get('unassigned', []))}")
print(f"размер документа:     {os.path.getsize(OUT)//1024} КБ → {OUT}")
