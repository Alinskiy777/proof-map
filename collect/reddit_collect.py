#!/usr/bin/env python3
# ═══ СБОРЩИК REDDIT · ниша faceless YouTube ═══
# Источник: Arctic Shift (архив Reddit, до 2026). Reddit напрямую отдаёт 403,
# PullPush отказывает агентам (429), Jina требует ключ. Arctic Shift — единственный
# открытый, который отвечает.
#
# ПРИНЦИПЫ (железо):
#  1. Не перегружать планшет: сырьё → SQLite на ВНЕШНЕМ диске, в вики — только агрегаты.
#  2. Возобновляемость: каждая страница помечена done. Упал — продолжит.
#  3. Честность к лимитам: пауза 7-9с, при таймауте — отступление нарастает.
#  4. Никакого дообучения на выдумке: пишем только то, что реально вернули.

import json, os, sqlite3, subprocess, sys, time, random

BASE = "https://arctic-shift.photon-reddit.com/api"
# Сырьё на ВНЕШНЕМ диске — внутренний почти полон (4.8 ГБ из 108 ГБ).
DB   = "/storage/emulated/0/Documents/reddit-proof/reddit.db"
os.makedirs(os.path.dirname(DB), exist_ok=True)

# ── сабреддиты: берём и нишевые, и те, где сидит аудитория предпринимателей ──
SUBS = [
  # нишевые (прямо про faceless / AI-контент)
  "NewTubers", "YouTubers", "NewYouTubeCreators", "ContentCreators",
  "VideoEditing", "YouTubeCreators", "YoutubeCreators",
  # предприниматели и «делаю руками»
  "SideProject", "Entrepreneur", "smallbusiness", "SaaS", "DigitalMarketing",
  "PassiveIncome", "OnlineBusiness", "startups", "indiehackers", "marketing",
  "EntrepreneurRideAlong", "MyFirstStartup", "sidehustle", "financialindependence",
  # ИИ-аудитория (там обсуждают ИИ-контент)
  "ChatGPT", "promptengineering", "ArtificialInteligence", "ChatGPTCoding",
  # смежные
  "ContentStrategy", "Copywriting", "freelance", "RemoteWork", "Entrepreneur_",
  "buildinpublic", "indiehackers",
]

# ── термы: слово + его варианты (ищем по body=) ──
TERMS = [
  "faceless", "faceless%20youtube", "faceless%20channel", "faceless%20video",
  "ai%20youtube%20channel", "ai%20video%20channel", "ai%20slop",
  "youtube%20automation", "video%20monetization",
]

def log(*a):
    print(f"[{time.strftime('%H:%M:%S')}]", *a, flush=True)

def fetch(url, tries=3):
    """Возвращает (json|None, ok). Молчаливый отказ = не теряем страницу."""
    for t in range(tries):
        try:
            tmp = "/storage/emulated/0/Documents/reddit-proof/_tmp.json"
            r = subprocess.run(
                ["curl", "-s", "--max-time", "90", "-o", tmp, url],
                capture_output=True, timeout=120)
            with open(tmp, encoding="utf-8") as f:
                raw = f.read()
            if not raw.strip():
                raise ValueError("пустой ответ")
            d = json.loads(raw)
            if d.get("error"):
                raise ValueError(str(d["error"])[:60])
            return d.get("data") or []
        except Exception as e:
            wait = 12 + t * 10 + random.uniform(0, 5)
            log(f"    неудача ({str(e)[:50]}) → пауза {wait:.0f}с")
            time.sleep(wait)
    return None

def init_db():
    c = sqlite3.connect(DB)
    c.executescript("""
      CREATE TABLE IF NOT EXISTS items(
        rid TEXT PRIMARY KEY, sub TEXT, kind TEXT, term TEXT,
        author TEXT, created INTEGER, score INTEGER,
        title TEXT, body TEXT, url TEXT, fetched INTEGER);
      CREATE INDEX IF NOT EXISTS ix_sub ON items(sub);
      CREATE INDEX IF NOT EXISTS ix_kind ON items(kind);
      CREATE TABLE IF NOT EXISTS pages_done(
        sub TEXT, term TEXT, kind TEXT, before INTEGER, done INTEGER,
        PRIMARY KEY(sub,term,kind,before));
    """)
    c.commit()
    return c

def save(c, rows, sub, term, kind, before):
    n = 0
    for x in rows:
        rid = x.get("id")
        if not rid:
            continue
        c.execute(
            "INSERT OR IGNORE INTO items"
            "(rid,sub,kind,term,author,created,score,title,body,url,fetched)"
            " VALUES(?,?,?,?,?,?,?,?,?,?,?)",
            (rid, sub, kind, term, x.get("author"),
             int(x.get("created_utc") or 0), int(x.get("score") or 0),
             (x.get("title") or "")[:300], (x.get("body") or x.get("selftext") or ""),
             "https://reddit.com" + (x.get("permalink") or ""), int(time.time())))
        n += 1
    c.execute("INSERT OR REPLACE INTO pages_done VALUES(?,?,?,?,?)",
              (sub, term, kind, before, int(time.time())))
    c.commit()
    return n

def run(max_pages_per_query=6):
    # комментарии копаем глубже (там живут возражения), посты — по поверхности
    c = init_db()
    total_q = 0
    for kind in ("comments", "posts"):   # комментарии = голоса людей, они ценнее
        for sub in SUBS:
            for term in TERMS:
                before = int(time.time())
                pages = 0
                depth = 8 if kind == "comments" else 2
                while pages < min(max_pages_per_query, depth):
                    done = c.execute(
                        "SELECT 1 FROM pages_done WHERE sub=? AND term=? AND kind=? AND before=?",
                        (sub, term, kind, before)).fetchone()
                    if done:
                        break
                    # 🔴 у постов параметр body НЕ существует (только title),
                    # у комментариев наоборот — ищем по body.
                    field = "title" if kind == "posts" else "body"
                    url = (f"{BASE}/{kind}/search?subreddit={sub}"
                           f"&{field}={term}&limit=100&before={before}")
                    log(f"  {kind[:4]} r/{sub} «{term[:18]}» до {time.strftime('%Y-%m', time.gmtime(before))}")
                    rows = fetch(url)
                    if rows is None:
                        log("    ⚠ отказ, пропускаю этот запрос")
                        break
                    n = save(c, rows, sub, term, kind, before)
                    pages += 1; total_q += 1
                    log(f"    +{n} (всего {c.execute('SELECT COUNT(*) FROM items').fetchone()[0]})")
                    if len(rows) < 100:
                        log("    меньше 100 — дошли до дна")
                        break
                    oldest = min(int(r.get("created_utc") or before) for r in rows)
                    if oldest >= before:
                        log("    ⚠ пагинация не двигается, стоп")
                        break
                    before = oldest
                    time.sleep(random.uniform(7, 10))
    log(f"ЗАВЕРШЕНО. Запросов: {total_q}")
    c.close()

if __name__ == "__main__":
    try:
        run(int(sys.argv[1]) if len(sys.argv) > 1 else 6)
    except KeyboardInterrupt:
        log("остановлено — прогресс сохранён, можно продолжить")
