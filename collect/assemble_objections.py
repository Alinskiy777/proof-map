#!/usr/bin/env python3
# Сборка документа «Возражения» из классификации агентов.
# Принцип: ни один rid не теряется — проверка полноты обязательна.
import json, os, sys, collections

BASE = os.path.expanduser('~/proof-map/collect')

# ── 1. грузим все комменты (источник истины по текстам) ──────────────
src = {}
for f in ('objections_raw.json', 'undecided.json'):
    for r in json.load(open(f'{BASE}/{f}', encoding='utf-8')):
        src[r['rid']] = r          # дедуп по rid

# ── 2. грузим классификацию агентов ───────────────────────────────────
assign = {}
new_clusters = []
for f in sorted(os.listdir(BASE)):
    if not (f.startswith('assign') and f.endswith('.json')):
        continue
    data = json.load(open(f'{BASE}/{f}', encoding='utf-8'))
    for a in data.get('assign', []):
        assign[a['rid']] = a['cluster']
    new_clusters += data.get('new_clusters', [])

print(f"комментов в источнике: {len(src)}")
print(f"размечено агентами:   {len(assign)}")
missing = set(src) - set(assign)
print(f"🔴 БЕЗ МЕТКИ:          {len(missing)}")

groups = collections.defaultdict(list)
for rid, cl in assign.items():
    if rid in src:
        groups[cl].append(src[rid])

print("\n─── распределение:")
for cl, items in sorted(groups.items(), key=lambda x: -len(x[1])):
    print(f"  {cl:<10} {len(items):>5}")

# ── 3. сохранение сборки ──────────────────────────────────────────────
out = {'groups': {k: v for k, v in groups.items()}, 'new_clusters': new_clusters,
       'unassigned': sorted(missing)}
json.dump(out, open(f'{BASE}/assembled.json', 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print(f"\n✅ assembled.json: {os.path.getsize(f'{BASE}/assembled.json')//1024} КБ")
print(f"🆕 новых кластеров предложено: {len(new_clusters)}")
