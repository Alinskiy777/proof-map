#!/usr/bin/env python3
# Приёмка переводов: склеивает батчи, проверяет полноту, возвращает assembled.json с полем 'ru'.
# Правило: 187 входных цитат → 187 переводов. Любое расхождение = ошибка, не «почти».
import json, os, re, sys, glob, unicodedata

BASE = os.path.dirname(os.path.abspath(__file__))
SRC  = f'{BASE}/to_translate.json'
ASM  = f'{BASE}/assembled.json'

def norm(s):
    s = unicodedata.normalize('NFKC', s or '').lower()
    s = s.replace('’', "'").replace('‘', "'")
    return re.sub(r'\s+', ' ', s).strip()

src = json.load(open(SRC, encoding='utf-8'))
need = {r['rid'] for r in src}
print(f'═══ входных цитат: {len(src)} (уникальных rid: {len(need)})')

got, dupes, junk = {}, [], []
for f in sorted(glob.glob(f'{BASE}/tr_out_*.json')):
    try:
        arr = json.load(open(f, encoding='utf-8'))
    except Exception as e:
        print(f'  🔴 {os.path.basename(f)} не читается: {e}'); continue
    if isinstance(arr, dict):
        arr = arr.get('translations') or arr.get('result') or [arr]
    for it in arr:
        rid = str(it.get('rid', '')).strip()
        ru  = (it.get('ru') or it.get('ru_text') or '').strip()
        if not rid:
            continue
        if rid in got:
            dupes.append(rid)
        if not ru or len(ru) < 8 or ru.startswith('_'):
            junk.append(rid); continue
        got[rid] = ru
    print(f'  · {os.path.basename(f)}: {len(arr)} элементов')

print(f'\nпринято переводов: {len(got)}')
print(f'дубликатов rid:    {len(dupes)}')
print(f'пустых/заглушек:   {len(junk)}')

missing = need - set(got)
extra   = set(got) - need
print(f'НЕ ПЕРЕВЕДЕНО:     {len(missing)}')
if missing:
    for r in list(missing)[:10]: print('   ·', r)
if extra:
    print(f'лишних (нет во входе): {len(extra)}')

# ── контроль качества: перевод должен быть на русском, а не копия оригинала ──
by_en = {r['rid']: r['en'] for r in src}
same, noncyr = [], []
for rid, ru in got.items():
    en = by_en.get(rid, '')
    if en and norm(ru)[:60] == norm(en)[:60]:
        same.append(rid)
    if not re.search(r'[а-яёА-ЯЁ]', ru):
        noncyr.append(rid)
print(f'\nперевод = копия оригинала: {len(same)}')
print(f'без кириллицы:              {len(noncyr)}')
for r in (same+noncyr)[:5]: print('   ·', r)

# ── склейка обратно в assembled.json ──
a = json.load(open(ASM, encoding='utf-8'))
filled = miss = 0
for cid, items in a['groups'].items():
    for it in items:
        ru = got.get(it.get('rid'))
        if ru:
            it['ru'] = ru; filled += 1
        else:
            it.pop('ru', None); miss += 1
json.dump(a, open(ASM, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'\nв assembled.json записано переводов: {filled}, без перевода: {miss}')

bad = len(missing) + len(same) + len(noncyr) + len(dupes)
if bad:
    print(f'\n❌ ПРИЁМКА НЕ ПРОЙДЕНА: проблем {bad}')
    sys.exit(1)
print(f'\n✅ ПРИЁМКА ПРОЙДЕНА: {len(got)}/{len(src)} переведено, качество проверено')
