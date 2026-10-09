#!/bin/bash

# Personal AI Intelligence Radar - Automated Daily Trigger Script
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
cd "$DIR"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting automated radar update..." >> "$DIR/logs/crawler.log"

# Run Node.js worker pipeline (node is on PATH via Hermes cron / manual shell)
node "$DIR/worker/run-daily.js" >> "$DIR/logs/crawler.log" 2>&1

# GitOps: Auto commit & push data updates to GitHub (triggers Cloudflare / Vercel build)
if git status -s data/ | grep -q 'data/'; then
  git add data/
  git commit -m "chore(data): auto update daily radar digest $(date '+%Y-%m-%d')" >> "$DIR/logs/crawler.log" 2>&1
  git push origin main >> "$DIR/logs/crawler.log" 2>&1
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Pushed latest intelligence to GitHub." >> "$DIR/logs/crawler.log"

  # Sync to production server tpbili
  rsync -avz --exclude='.git' "$DIR/" tpbili:/var/www/radar/ >> "$DIR/logs/crawler.log" 2>&1
  ssh tpbili "chown -R www-data:www-data /var/www/radar; nginx -s reload" >> "$DIR/logs/crawler.log" 2>&1
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployed to production server tpbili." >> "$DIR/logs/crawler.log"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Radar update finished." >> "$DIR/logs/crawler.log"
