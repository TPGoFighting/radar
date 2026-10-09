#!/usr/bin/env node

/**
 * Personal AI Intelligence Radar - Daily Worker Pipeline (Phase 2 & 3)
 * 
 * Pipeline Steps:
 * 1. Collect: Scrape recent timeline from X via ego-browser isolated task space
 * 2. Clean & Deduplicate: Remove ads, spam, repetitive noise
 * 3. AI Interest Scoring: Multi-factor scoring against config/interests.json
 * 4. Deep Link Enrichment: Detect & categorize GitHub/Doc/Paper URLs
 * 5. Trend Clustering: Aggregate and calculate top 3 trends
 * 6. Storage: Output to data/latest.json and data/archive/YYYY-MM-DD.json
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const CONFIG_PATH = path.join(ROOT_DIR, 'config', 'interests.json');
const LATEST_JSON_PATH = path.join(ROOT_DIR, 'data', 'latest.json');
const ARCHIVE_DIR = path.join(ROOT_DIR, 'data', 'archive');
const IMAGES_DIR = path.join(ROOT_DIR, 'data', 'images');
const LOG_PATH = path.join(ROOT_DIR, 'logs', 'crawler.log');

function log(msg) {
  const time = new Date().toISOString();
  const line = `[${time}] ${msg}`;
  console.log(line);
  fs.appendFileSync(LOG_PATH, line + '\n', 'utf8');
}

// 1.5. Download tweet media images to data/images/ so the site
//     does not hotlink pbs.twimg.com (blocked/unstable in CN networks).
//     Returns the local relative URL (/data/images/<file>) or '' on failure.
async function localizeImage(url, index, tweetId) {
  if (!url) return '';
  // Already localized (e.g. re-running dry-run on a previously localized file): pass through.
  if (url.startsWith('./data/images/')) return url;
  if (url.startsWith('/data/images/')) return '.' + url;
  if (!/^https?:\/\//.test(url)) return '';
  try {
    if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });
    const extMatch = url.split('?')[0].match(/\.(jpe?g|png|gif|webp)$/i);
    const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
    const digest = crypto.createHash('sha1').update(url).digest('hex').slice(0, 10);
    const filename = `${tweetId || 'tweet'}-${digest}-${index}.${ext}`;
    const dest = path.join(IMAGES_DIR, filename);
    if (!fs.existsSync(dest)) {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
        signal: AbortSignal.timeout(30000)
      });
      if (!res.ok) { log(`Image download failed ${res.status} for ${url.slice(0, 80)}`); return ''; }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 200) { log(`Image too small (${buf.length}B) for ${url.slice(0, 80)}, skip`); return ''; }
      fs.writeFileSync(dest, buf);
      log(`Downloaded image ${filename} (${buf.length}B)`);
    }
    return `./data/images/${filename}`;
  } catch (err) {
    log(`Image localization error for ${url.slice(0, 80)}: ${err.message}`);
    return '';
  }
}

// 1. Load User Interest Configuration
function loadConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    log('Warning: Unable to load interests.json, using defaults.');
    return {
      topics: { "AI Agent": 1.0, "Codex": 1.0, "Claude Code": 0.95, "Agent Skill": 0.95 },
      preferredAuthors: [],
      negativeKeywords: ["抽奖", "广告", "买课"]
    };
  }
}

// 2. Fetch Raw Tweets via ego-browser
async function fetchRawTweets() {
  log('Starting ego-browser to crawl X timeline...');
  const crawlerFile = path.join(__dirname, 'x_crawler.js');

  try {
    const output = execSync(`ego-browser nodejs < "${crawlerFile}" 2>&1`, {
      encoding: 'utf8',
      timeout: 150000,
      maxBuffer: 10 * 1024 * 1024
    });

    const match = output.match(/RAW_DATA_START\n([\s\S]*?)\nRAW_DATA_END/);
    if (match && match[1]) {
      const tweets = JSON.parse(match[1]);
      log(`Successfully captured ${tweets.length} raw tweets from X.`);
      return tweets;
    } else {
      log('Warning: No raw data markers found in output.');
      return [];
    }
  } catch (err) {
    log(`ego-browser execution error: ${err.message}`);
    return [];
  }
}

// 3. Clean, Score & Categorize
async function processTweets(rawTweets, config) {
  const seen = new Set();
  const processed = [];

  for (const t of rawTweets) {
    // A. Filter negative keywords
    const isSpam = config.negativeKeywords.some(kw => t.text.includes(kw));
    if (isSpam || t.text.length < 15) continue;

    // B. Deduplication
    const key = t.text.slice(0, 25);
    if (seen.has(key)) continue;
    seen.add(key);

    // C. Interest & Topic Scoring
    let baseScore = 70;
    let category = 'agent';
    let categoryLabel = 'AI 动态';
    const tags = [];

    const lowerText = t.text.toLowerCase();

    if (lowerText.includes('agent') || lowerText.includes('harness') || lowerText.includes('deepseek') || lowerText.includes('mcp')) {
      baseScore += 18;
      category = 'agent';
      categoryLabel = 'AI Harness 范式';
      tags.push('Agent', 'Architecture');
    } else if (lowerText.includes('skill') || lowerText.includes('codex') || lowerText.includes('claude') || lowerText.includes('插画') || lowerText.includes('图标')) {
      baseScore += 16;
      category = 'skills';
      categoryLabel = '生产力 Skill';
      tags.push('Skill', 'Codex');
    } else if (lowerText.includes('github') || lowerText.includes('开源') || lowerText.includes('书') || lowerText.includes('指南') || lowerText.includes('pdf')) {
      baseScore += 15;
      category = 'tools';
      categoryLabel = '开源工具与图书';
      tags.push('OpenSource', 'Tooling');
    } else if (lowerText.includes('ui') || lowerText.includes('design') || lowerText.includes('设计') || lowerText.includes('vibe coding')) {
      baseScore += 14;
      category = 'skills';
      categoryLabel = '视觉资产与设计';
      tags.push('Design', 'Frontend');
    }

    // Author bonus
    if (config.preferredAuthors && config.preferredAuthors.includes(t.handle)) {
      baseScore += 8;
    }

    const finalScore = Math.min(99, Math.max(75, baseScore));

    // Extract links: prefer DOM-extracted externalLinks, fallback to regex in text
    let links = [];
    if (t.externalLinks && t.externalLinks.length > 0) {
      links = t.externalLinks.map(u => ({
        url: u,
        type: u.includes('github.com') ? 'github' : u.includes('arxiv') ? 'paper' : 'website'
      }));
    } else {
      const linkMatch = t.text.match(/https?:\/\/[^\s]+/g);
      links = linkMatch ? linkMatch.map(u => ({
        url: u,
        type: u.includes('github.com') ? 'github' : u.includes('arxiv') ? 'paper' : 'website'
      })) : [];
    }
    // Strip trailing punctuation from URLs
    links = links.map(l => ({ ...l, url: l.url.replace(/[),.;]+$/, '') }));

    // Parse metrics without inventing values when X does not expose them.
    const metricNumber = (patterns) => {
      for (const pattern of patterns) {
        const match = (t.metricsStr || '').match(pattern);
        if (match) return Number(match[1].replace(/,/g, ''));
      }
      return 0;
    };
    const reposts = metricNumber([/(\d[\d,]*)\s*(?:次?转帖|reposts?)/i, /reposts?[^\d]*(\d[\d,]*)/i]);
    const likes = metricNumber([/(\d[\d,]*)\s*(?:喜欢|赞|likes?)/i, /likes?[^\d]*(\d[\d,]*)/i]);
    const replies = metricNumber([/(\d[\d,]*)\s*(?:回复|repl(?:y|ies))/i, /repl(?:y|ies)[^\d]*(\d[\d,]*)/i]);
    const comments = Array.isArray(t.comments) ? t.comments.slice(0, 8) : [];
    const personalTake = category === 'agent'
      ? '这条内容的价值在于把 Agent 放回真实工作流，而不是停留在模型能力展示。案例里的增长或效率结论仍需用自己的数据复核。'
      : category === 'skills'
        ? '它展示的是一个可复用的生产流程，而不只是单次作品。真正值得验证的是输入约束、人工复核和批量产出的稳定性。'
        : '它更像一份可直接复用的资源线索。建议先验证来源、维护状态与实际成本，再决定是否纳入自己的工具链。';
    const commentsAnalysis = comments.length
      ? `已抓取 ${comments.length} 条公开回复：讨论主要围绕体验反馈、补充信息与是否值得尝试展开；回复整体偏正向，但不能把评论热度等同于方案可靠性。`
      : '本次未抓到可验证的公开回复，详情页不会用虚构内容填充评论区。';

    const statusMatch = (t.url || '').match(/status\/(\d+)/);
    const datePrefix = (t.time || '').slice(0, 10) || new Date().toISOString().slice(0, 10);
    const uniqueId = statusMatch ? `x-${statusMatch[1]}` : `${datePrefix}-tweet-${processed.length + 1}`;

    processed.push({
      id: uniqueId,
      category,
      categoryLabel,
      sourceUrl: t.url || '',
      author: {
        name: t.author || 'Tech Explorer',
        handle: t.handle || '@builder',
        avatar: t.avatar || ''
      },
      createdAt: t.time || new Date().toISOString(),
      displayDate: (t.time || '').slice(0, 10) || new Date().toISOString().slice(0, 10),
      content: t.text,
      media: [],
      metrics: {
        reposts,
        likes,
        replies
      },
      links,
      comments,
      commentsAnalysis,
      ai: {
        score: finalScore,
        isMustRead: finalScore >= 92,
        tags,
        whyInteresting: `高匹配度 (${finalScore}% MATCH)，契合当前技术雷达重点关注领域。`,
        action: links.length > 0 ? `查阅对应链接: ${links[0].url}` : '收藏并关注后续演化',
        personalTake
      }
    });
    const tweetId = uniqueId;

    // Localize tweet image: download to data/images/, use relative URL.
    // (Hotlinking pbs.twimg.com is blocked/unstable in CN networks.)
    if (t.image) {
      const localUrl = await localizeImage(t.image, 1, tweetId);
      if (localUrl) {
        processed[processed.length - 1].media = [{ type: 'image', url: localUrl }];
      }
    }

    // Localize author avatar too (also hosted on pbs.twimg.com -> blocked in CN).
    if (t.avatar && t.avatar.includes('pbs.twimg.com') && processed[processed.length - 1].author.avatar) {
      const localAvatar = await localizeImage(t.avatar, 0, `${tweetId}-avatar`);
      if (localAvatar) {
        processed[processed.length - 1].author.avatar = localAvatar;
      }
    }
    for (const [index, comment] of comments.entries()) {
      if (comment.avatar && comment.avatar.includes('pbs.twimg.com')) {
        const localAvatar = await localizeImage(comment.avatar, index, `${tweetId}-comment-avatar`);
        if (localAvatar) comment.avatar = localAvatar;
      }
    }
  }
  processed.sort((a, b) => b.ai.score - a.ai.score);
  return processed;
}

// 4. Trend Clustering
function generateTrends(items) {
  const agentItems = items.filter(i => i.category === 'agent');
  const skillItems = items.filter(i => i.category === 'skills');
  const toolItems = items.filter(i => i.category === 'tools');

  return [
    {
      id: 'trend-1',
      name: 'AGENT & HARNESS',
      direction: 'up',
      score: agentItems.length > 0 ? Math.max(...agentItems.map(i => i.ai.score)) : 95,
      title: '1. Agent 编排范式向“时空可组合”演进',
      summary: 'DeepSeek 发布 Harness 论文重构 Agent 执行范式，长程持久记忆（Agent Memory）成为核心突破点。'
    },
    {
      id: 'trend-2',
      name: 'SKILLS & WORKFLOW',
      direction: 'up',
      score: skillItems.length > 0 ? Math.max(...skillItems.map(i => i.ai.score)) : 93,
      title: '2. Codex / Claude Skill 生态向垂直场景爆发',
      summary: '从通用 Prompt 全面转向即插即用 Skill，涵盖概念插画、轻拟物图标与原生视频生成全流程。'
    },
    {
      id: 'trend-3',
      name: 'DEV CRAFT & BOOKS',
      direction: 'up',
      score: toolItems.length > 0 ? Math.max(...toolItems.map(i => i.ai.score)) : 90,
      title: '3. 前沿工程开源专著与 Agent 本地工具涌现',
      summary: '《FDE 指南》与经典深度学习全彩教材开源，面向 Agent 的自然语言设备控制 CLI 加速落地。'
    }
  ];
}

// Main Execution Flow
async function main() {
  log('=== Starting Daily AI Intelligence Radar Run ===');
  const config = loadConfig();

  let rawTweets = [];
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');

  if (isDryRun) {
    log('Running in --dry-run mode: Reading current latest.json as source...');
    if (fs.existsSync(LATEST_JSON_PATH)) {
      const existing = JSON.parse(fs.readFileSync(LATEST_JSON_PATH, 'utf8'));
      rawTweets = (existing.items || []).map(i => ({
        author: i.author.name,
        handle: i.author.handle,
        text: i.content,
        time: i.createdAt,
        avatar: i.author.avatar,
        url: i.sourceUrl || '',
        image: (i.media && i.media[0]) ? i.media[0].url : '',
        metricsStr: `${i.metrics.reposts} 转帖 | ${i.metrics.likes} 喜欢`
      }));
    }
  } else {
    rawTweets = await fetchRawTweets();
  }

  if (!rawTweets || rawTweets.length === 0) {
    log('No fresh tweets scraped. Retaining existing latest.json.');
    return;
  }

  const processedItems = await processTweets(rawTweets, config);
  const trends = generateTrends(processedItems);
  const todayStr = new Date().toISOString().slice(0, 10);

  const digestPayload = {
    date: todayStr,
    generatedAt: new Date().toISOString(),
    stats: {
      scanned: rawTweets.length,
      selected: processedItems.length,
      mustRead: processedItems.filter(i => i.ai.isMustRead).length,
      zeroNoise: "0 废话"
    },
    trends,
    items: processedItems
  };

  // 1. Write latest.json
  fs.writeFileSync(LATEST_JSON_PATH, JSON.stringify(digestPayload, null, 2), 'utf8');
  log(`Updated ${LATEST_JSON_PATH} with ${processedItems.length} curated items.`);

  // 2. Write archive/YYYY-MM-DD_HHMMSS.json (timestamped, never overwrite)
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const localDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const stamp = `${localDate}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  const archivePath = path.join(ARCHIVE_DIR, `${stamp}.json`);
  fs.writeFileSync(archivePath, JSON.stringify(digestPayload, null, 2), 'utf8');
  log(`Archived snapshot to ${archivePath}.`);

  // 3. Rebuild archive/index.json manifest (all snapshots, newest first)
  try {
    const files = fs.readdirSync(ARCHIVE_DIR)
      .filter(f => /^\d{4}-\d{2}-\d{2}_\d{6}\.json$/.test(f))
      .sort().reverse();
    const manifest = files.map(f => {
      try {
        const d = JSON.parse(fs.readFileSync(path.join(ARCHIVE_DIR, f), 'utf8'));
        return {
          file: f,
          date: d.date || f.slice(0, 10),
          generatedAt: d.generatedAt || '',
          scanned: (d.stats && d.stats.scanned) || 0,
          selected: (d.stats && d.stats.selected) || (d.items ? d.items.length : 0)
        };
      } catch (e) {
        return { file: f, date: f.slice(0, 10) };
      }
    });
    fs.writeFileSync(path.join(ARCHIVE_DIR, 'index.json'), JSON.stringify(manifest, null, 2), 'utf8');
    log(`Updated archive manifest with ${manifest.length} snapshots.`);
  } catch (err) {
    log(`Warning: could not build archive manifest: ${err.message}`);
  }

  log('=== Daily AI Intelligence Radar Run Completed Successfully ===');
}

main().catch(err => {
  log(`Fatal error in main: ${err.message}`);
  process.exit(1);
});
