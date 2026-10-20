#!/data/data/com.termux/files/usr/bin/bash
# Деплой карты доказательств. Те же правила, что у edtech: проверки ДО пуша.
set -euo pipefail
REPO="$HOME/proof-map"
cd "$REPO"
echo "═══ проверки ═══"
python3 - <<'PY' || exit 1
import re, sys
bad=0
for f in ('index.html','dash.html'):
    h=open(f,encoding='utf-8').read()
    for t in ('div','script','style','svg','g','text','header','body','html'):
        o=len(re.findall(r'<'+t+r'[\s>]',h)); c=len(re.findall(r'</'+t+r'>',h))
        if o!=c:
            print(f"  ❌ {f} <{t}>: {o}/{c}"); bad=1
    print(f"  {'✅' if not bad else '❌'} {f}: теги сбалансированы")
sc=re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>',open('index.html',encoding='utf-8').read(),re.S)
sc+=re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>',open('dash.html',encoding='utf-8').read(),re.S)
import os
open(os.path.expanduser('~/.hermes/cache/scratch/_pm.js'),'w',encoding='utf-8').write('\n'.join(sc))
raise SystemExit(bad)
PY
for f in data/types.js data/proofs.js data/engine.js data/competitors.js data/niche-faceless.js data/objections-faceless.js; do
  node --check "$f" || exit 1
done
echo "  ✅ все данные валидны"
git add -A
git diff --cached --quiet || git commit -q -m "Карта доказательств: мастер-таксономия 30 типов + дьявол-аудит"
git push origin main && echo "  ✅ запушено"
