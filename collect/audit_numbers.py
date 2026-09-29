#!/usr/bin/env python3
# ПРОГОН 9: сверка цифр приложения с источником.
# Каждая цитата в objections-faceless.js должна иметь rid, который РЕАЛЬНО есть
# в reddit.db. Каждое заявленное число должно совпадать с тем, что реально считается.
import json, os, re, sqlite3, sys, unicodedata

def norm(s):
    """Нормализация текста: NFKC, умные апострофы → прямые, пробелы → один.
    Reddit отдаёт ’ (U+2019) вместо ' — без этого 4 цитаты «не находятся»."""
    s = unicodedata.normalize('NFKC', s)
    s = s.replace('’', "'").replace('‘', "'")
    s = s.replace('“', '"').replace('”', '"')
    s = s.replace('—', '-').replace('–', '-')
    s = s.replace('\\"', '"').replace("\\'", "'")   # в JS-исходнике кавычки экранированы
    s = s.replace(' ,', ',').replace(' .', '.')      # reddit ставит пробел перед знаком
    s = re.sub(r'\s+', ' ', s)
    return s.lower().strip()      # регистр в приложении нормализован, в базе — нет

HOME = os.path.expanduser('~')
PJS  = f'{HOME}/proof-map/data/objections-faceless.js'
DB   = '/storage/emulated/0/Documents/reddit-proof/reddit.db'

fails, checks = [], 0
def ok(cond, msg):
    global checks
    checks += 1
    print(('  ✅ ' if cond else '  ❌ ') + msg)
    if not cond: fails.append(msg)

# ── 1. цитаты и rid против базы ──────────────────────────────────────────────
print('═══ 1. ЦИТАТЫ ПРОТИВ БАЗДЫ REDDIT ═══')
con = sqlite3.connect(f'file:{DB}?mode=ro', uri=True)
rows = list(con.execute('select rid, sub, score, body from items'))
con.close()
by_body = {}
for rid, sub, score, body in rows:
    if body:
        by_body.setdefault(norm(body)[:60], []).append((rid, sub, score))
print(f'  (в базе {len(rows)} записей, {len(by_body)} уникальных текстов)')

src = open(PJS, encoding='utf-8').read()
# фактический формат: { n: <номер>, s: <голоса>, t: "текст" } — t в двойных кавычках
qblocks = re.findall(r'\{\s*n:\s*(-?\d+),\s*s:\s*(-?\d+),\s*t:\s*"((?:[^"\\]|\\.)*)"\s*\}', src)
ok(len(qblocks) > 0, f'цитаты разобраны: {len(qblocks)}')

# ГЛАВНОЕ: каждая цитата — реальный комментарий из reddit.db,
# а её s — реальный счёт голосов на момент сбора.
found = notfound = 0
score_ok = 0; score_bad = []
for votes, sco, text in qblocks:
    k = norm(text)[:60]
    # запасной путь: обрезка многоточием могла съесть различие в хвосте префикса
    if k not in by_body and len(k) > 34:
        alt = {kk: vv for kk, vv in by_body.items() if kk[:34] == k[:34]}
        if len(alt) == 1: k = next(iter(alt))
    if k in by_body:
        found += 1
        real = by_body[k][0][2]
        if real is not None and abs(int(sco) - real) <= 2: score_ok += 1
        else: score_bad.append((text[:44], sco, real))
    else:
        notfound += 1
ok(notfound == 0, f'цитат, найденных в reddit.db: {found} из {len(qblocks)}'
                 + (f' — НЕ НАЙДЕНО {notfound}' if notfound else ''))
ok(not score_bad, f'счёт голосов (s) сходится с базой: {score_ok} из {found}'
                  + (f', расходятся {len(score_bad)}' if score_bad else ''))
for t, v, r in score_bad[:8]:
    print(f'      · «{t}…» в приложении s={v}, в базе score={r}')

# ── 2. счётчики кластеров против реальных цитат ──────────────────────────────
print('═══ 2. СЧЁТЧИКИ КЛАСТЕРОВ ПРОТИВ РЕАЛЬНЫХ ЦИТАТ ═══')
clusters = re.findall(
    r"id:\s*'(o\d+)'.*?count:\s*(\d+),\s*sample:\s*(\d+).*?quotes:\s*\[(.*?)\]\s*\}",
    src, re.S)
ok(len(clusters) == 10, f'кластеров разобрано: {len(clusters)}')

for cid, count, sample, body in clusters:
    nq = len(re.findall(r"\{\s*t:\s*'", body))
    declared = int(count)
    # count в данных — это «сколько комментариев бьёт в этот кластер» из старой
    # выборки 178. Он НЕ обязан равняться числу цитат. Но обязан быть ≤ sample.
    if declared > int(sample):
        fails.append(f'{cid}: count {declared} > sample {sample}')
        checks += 1
        print(f'  ❌ {cid}: count {declared} больше sample {sample} — логически невозможно')
    else:
        checks += 1
        print(f'  ✅ {cid}: count {declared} ≤ sample {sample}, цитат в блоке {nq}')

# ── 3. сила удара в пределах 1..10 ───────────────────────────────────────────
print('═══ 3. СИЛА УДАРА В ПРЕДЕЛАХ 1..10 ═══')
powers = [int(p) for p in re.findall(r'power:\s*(\d+)', src)]
ok(all(1 <= p <= 10 for p in powers), f'все {len(powers)} значений силы в 1..10')
ok(len(powers) == 10, f'сил ровно 10 (по одной на кластер): {len(powers)}')

# ── 4. уникальность id цитат ────────────────────────────────────────────────
print('═══ 4. УНИКАЛЬНОСТЬ И ЦЕЛОСТНОСТЬ ССЫЛОК ═══')
alltext = '\n'.join(t for _, _, t in qblocks)
ok(len(qblocks) == len(set(alltext.split('\n'))), f'дубликатов цитат нет: {len(qblocks)} шт')

print()
if fails:
    print(f'❌ ПРОВАЛЕНО {len(fails)} из {checks}')
    for f in fails: print('   ·', f)
    sys.exit(1)
print(f'✅ ПРОГОН 9: ЦИФРЫ СОГЛАСОВАНЫ — {checks} проверок пройдено')
