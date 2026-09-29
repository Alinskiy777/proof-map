#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Сбор Reels-статистики Instagram без логина.
Реальность 2026-09: instagram.com отдаёт SPA-оболочку, /api/v1/... отдаёт 401/429.
Instaloader ходит в тот же эндпоинт и ЖИВ, но Instagram жёстко лимитирует:
один запрос профиля → пауза ~11 минут (429 retry_after). Отсюда темп 1 профиль / 10-15 мин.

Что делает:
  1. Берёт список username из users.txt (по одному в строке, # = комментарий).
  2. Тянет профиль + Reels (лайки, комментарии, просмотры, хук = первые 80 символов подписи).
  3. Пишет в SQLite на внешнем диске (не в память планшета).
  4. Возобновляется: пропускает уже собранных, не теряет прогресс при обрыве.
  5. Не выдумывает: если просмотров нет в ответе — пишет NULL, а не 0.

Запуск:  nohup python3 reels_collect.py > reels.log 2>&1 &
"""
import json, os, sqlite3, sys, time, random, traceback
from datetime import datetime

BASE   = "/storage/emulated/0/Documents/reddit-proof"      # внешний диск
DB     = os.path.join(BASE, "reels.db")
USERS  = os.path.expanduser("~/proof-map/collect/users.txt")
SLEEP  = 780          # 13 минут между профилями (Instagram даёт retry ~11 мин)
REELS  = 40           # сколько Reels брать с профиля
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

os.makedirs(BASE, exist_ok=True)
os.makedirs(os.path.dirname(USERS), exist_ok=True)
if not os.path.exists(USERS):
    open(USERS, "w").write("# по одному username без @\n")

def log(*a):
    print(f"[{datetime.now():%H:%M:%S}]", *a, flush=True)

def db():
    c = sqlite3.connect(DB, timeout=60)
    c.execute("""CREATE TABLE IF NOT EXISTS profiles(
        username TEXT PRIMARY KEY, followers INTEGER, posts INTEGER,
        bio TEXT, biz INTEGER, fetched_at TEXT, status TEXT)""")
    c.execute("""CREATE TABLE IF NOT EXISTS reels(
        username TEXT, shortcode TEXT, views INTEGER, likes INTEGER,
        comments INTEGER, plays INTEGER, hook TEXT, caption TEXT,
        date TEXT, url TEXT, fetched_at TEXT,
        PRIMARY KEY(username, shortcode))""")
    c.commit()
    return c

def read_users():
    out = []
    if os.path.exists(USERS):
        for ln in open(USERS, encoding="utf-8"):
            u = ln.strip().lstrip("@").split()[0] if ln.strip() else ""
            if u and not u.startswith("#"):
                out.append(u)
    return list(dict.fromkeys(out))

def done_users(con):
    return {r[0] for r in con.execute(
        "SELECT username FROM profiles WHERE status='ok'")}

def collect(username, con):
    import instaloader
    L = instaloader.Instaloader(download_pictures=False, download_videos=False,
                                download_video_thumbnails=False,
                                save_metadata=False, quiet=True)
    L.context.user_agent = UA
    p = instaloader.Profile.from_username(L.context, username)

    con.execute("INSERT OR REPLACE INTO profiles VALUES(?,?,?,?,?,?,?)",
                (username, p.followers, p.mediacount, (p.biography or "")[:500],
                 1 if p.is_business_account else 0,
                 datetime.now().isoformat(timespec="seconds"), "ok"))

    n = 0
    for node in p.get_posts():      # get_posts() = только видео/рилс, без фото
        if node.__class__.__name__ != "Post":
            continue
        n += 1
        cap = node.caption or ""
        hook = " ".join(cap.split())[:110]
        con.execute("INSERT OR REPLACE INTO reels VALUES(?,?,?,?,?,?,?,?,?,?,?)",
                    (username, node.shortcode,
                     getattr(node, "video_view_count", None),
                     node.likes, node.comments,
                     getattr(node, "video_play_count", None),
                     hook, cap[:2000],
                     str(node.date_utc)[:10],
                     f"https://www.instagram.com/reel/{node.shortcode}/",
                     datetime.now().isoformat(timespec="seconds")))
        if n >= REELS:
            break
    con.commit()
    log(f"✅ {username}: {p.followers} подписчиков, Reels: {n}")
    return n

def main():
    import instaloader
    con = db()
    log(f"instaloader {instaloader.__version__} | БД {DB}")
    while True:
        users = [u for u in read_users() if u not in done_users(con)]
        if not users:
            log("очередь пуста (все собраны или список пуст) — жду новых username в users.txt")
            time.sleep(120)
            continue
        u = users[0]
        log(f"─── беру {u} · осталось в очереди: {len(users)}")
        try:
            collect(u, con)
        except Exception as e:
            msg = f"{type(e).__name__}: {str(e)[:120]}"
            log(f"❌ {u} — {msg}")
            con.execute("INSERT OR REPLACE INTO profiles VALUES(?,?,?,?,?,?,?)",
                        (u, None, None, None, None,
                         datetime.now().isoformat(timespec="seconds"),
                         "fail: " + msg[:80]))
            con.commit()
            # на 429 instaloader сам ждёт; на других ошибках — не залипаем
            if "429" in msg or "Too Many" in msg:
                time.sleep(SLEEP)
            else:
                time.sleep(90)
            continue
        time.sleep(SLEEP + random.randint(0, 120))

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        log("остановлено")
    except Exception:
        traceback.print_exc()
