#!/data/data/com.termux/files/usr/bin/bash
# Деплой карты доказательств. Те же правила, что у edtech: проверки ДО пуша.
set -euo pipefail
REPO="$HOME/proof-map"
cd "$REPO"
echo "═══ проверки ═══"
python3 - <<'PY' || exit 1
import re, sys
bad=0
for f in ('index.html','dash.html','faceless/index.html'):
    bad=0
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
for f in data/types.js data/proofs.js data/platform-proofs.js data/engine.js data/competitors.js data/niche-faceless.js data/objections-faceless.js data/competitor-proof.js \
         faceless/data/types.js faceless/data/evidence.js faceless/data/engine.js; do
  node --check "$f" || exit 1
done
echo "  ✅ все данные валидны"

# сироты: доказательства в типах, которых нет на карте
node -e '
global.window={};const fs=require("fs");
eval(fs.readFileSync("data/types.js","utf8"));
eval(fs.readFileSync("data/proofs.js","utf8"));
eval(fs.readFileSync("data/platform-proofs.js","utf8"));
const P=window.PROOFS,T=window.PROOF_TYPES;
Object.keys(window.PLATFORM_PROOFS).forEach(k=>{P[k]=(P[k]||[]).concat(window.PLATFORM_PROOFS[k]);});
let bad=0;
Object.keys(P).forEach(k=>{ if(!T[k]){console.log("  ❌ сирота: "+k+" ("+P[k].length+")");bad=1;} });
process.exit(bad);
' || exit 1
echo "  ✅ сирот нет"

# ── faceless: таксономия должна сходиться с данными ──
node -e '
global.window={};const fs=require("fs");
eval(fs.readFileSync("faceless/data/types.js","utf8"));
eval(fs.readFileSync("faceless/data/evidence.js","utf8"));
const T=window.PROOF_TYPES,EV=window.EVIDENCE;
let bad=0;
EV.forEach(r=>r.types.forEach(t=>{ if(!T[t]){console.log("  ❌ приём без таксономии: "+t);bad=1;} }));
process.exit(bad);
' || exit 1
echo "  ✅ faceless: таксономия сходится"

# ── faceless: каждая картинка из SHOTS должна существовать на диске ──
python3 - <<'PY' || exit 1
import re, os, sys
src = open('faceless/data/engine.js', encoding='utf-8').read()
refs = sorted(set(re.findall(r"'(shots/[A-Za-z0-9_.-]+)'", src)))
missing = [f for f in refs if not os.path.exists(os.path.join('faceless', f))]
for f in missing:
    print('  ❌ нет файла: ' + f)
print(f"  {'✅' if not missing else '❌'} faceless: картинок проверено {len(refs)}")
sys.exit(1 if missing else 0)
PY

# ── faceless: браузерная проверка рендера (единственный реальный критерий) ──
node -e '
const puppeteer=require("puppeteer-core");
const ARGS=["--no-sandbox","--disable-gpu","--disable-dev-shm-usage","--single-process","--no-zygote"];
(async()=>{
  const b=await puppeteer.launch({executablePath:"/data/data/com.termux/files/usr/lib/chromium/chrome",headless:"new",args:ARGS});
  const p=await b.newPage();
  const errs=[]; p.on("pageerror",e=>errs.push(e.message));
  await p.goto("file:///data/data/com.termux/files/home/proof-map/faceless/index.html",{waitUntil:"load",timeout:60000});
  await new Promise(r=>setTimeout(r,1800));
  const s=await p.evaluate(()=>({cards:document.querySelectorAll(".card").length,
    miss:document.querySelectorAll("#plates30 .plate.miss").length,
    on:document.querySelectorAll("#plates30 .plate.on").length}));
  await b.close();
  if(s.cards<100){console.log("  ❌ карточек слишком мало: "+s.cards);process.exit(1);}
  if(errs.length){console.log("  ❌ JS-ошибки: "+errs.slice(0,2).join(" | "));process.exit(1);}
  console.log("  ✅ faceless: рендер OK, карточек "+s.cards+", без доказательств "+s.miss+" типов");
})().catch(e=>{console.log("  ❌ рендер упал: "+e.message.split("\n")[0]);process.exit(1);});
' || exit 1

git add -A
if git diff --cached --quiet; then
  echo "  ⏸ изменений нет — коммит пропущен"
else
  MSG="${PM_COMMIT_MSG:-Деплой: проверки прошли, карта доказательств обновлена}"
  if ! git commit -q -m "$MSG" 2>/dev/null; then
    echo "  ⚠️ PII-guard отклонил коммит. Разбор:"
    echo "     python3 ~/.hermes/skills/security/data-egress-guard/scripts/pii_guard.py --git $REPO"
    if [ -z "${PM_SKIP_PII:-}" ]; then
      echo "  ❌ PM_SKIP_PII не задан — стоп. Переопредели осознанно, если совпадение ложное."
      exit 1
    fi
    echo "  PM_SKIP_PII задан — коммичу осознанно"
    SKIP_PII_GUARD=1 git commit -q -m "$MSG" || exit 1
  fi
  echo "  ✅ закоммичено"
fi
if git push origin main 2>/dev/null; then
  echo "  ✅ запушено"
else
  echo "  ⚠️ обычный push отклонён (история могла быть переписана локально)."
  if [ -z "${PM_FORCE_PUSH:-}" ]; then
    echo "  ❌ PM_FORCE_PUSH не задан — стоп. Переопредели осознанно для --force-with-lease."
    exit 1
  fi
  echo "  PM_FORCE_PUSH задан — пушу через --force-with-lease"
  git push --force-with-lease origin main && echo "  ✅ запушено (force-with-lease)"
fi
