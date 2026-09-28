#!/data/data/com.termux/files/usr/bin/bash
# Деплой карты доказательств. Те же правила, что у edtech: проверки ДО пуша.
set -euo pipefail
REPO="$HOME/proof-map"
cd "$REPO"
echo "═══ проверки ═══"
python3 - <<'PY' || exit 1
import re
h=open('index.html',encoding='utf-8').read()
bad=0
for t in ('div','script','style','svg','g','text','header','body','html'):
    o=len(re.findall(r'<'+t+r'[\s>]',h)); c=len(re.findall(r'</'+t+r'>',h))
    print(f"  {'✅' if o==c else '❌'} <{t}>: {o}/{c}")
    if o!=c: bad=1
sc=re.findall(r'<script(?![^>]*src=)[^>]*>(.*?)</script>',h,re.S)
import os
open(os.path.expanduser('~/.hermes/cache/scratch/_pm.js'),'w',encoding='utf-8').write('\n'.join(sc))
raise SystemExit(bad)
PY
node --check "$HOME/.hermes/cache/scratch/_pm.js" && echo "  ✅ JS валиден" || exit 1
node --check data/engine.js && node --check data/niche-faceless.js && node --check data/objections-faceless.js && echo "  ✅ данные валидны"
git add -A
git diff --cached --quiet || git commit -q -m "Карта доказательств: движок + ниша faceless YouTube"
git push origin main && echo "  ✅ запушено"
