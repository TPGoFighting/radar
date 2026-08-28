/**
 * Personal AI Intelligence Radar - Dynamic Memphis Render Engine
 * 100% Zero-Emoji, Pure Scalable Inline SVGs
 * Includes Bookmarks, User Feedback, Deep Links, and Historical Archive Switcher
 */

const ICONS = {
  bolt: `<span class="svg-icon" style="width: 18px; height: 18px;"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></span>`,
  calendar: `<span class="svg-icon" style="width: 16px; height: 16px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>`,
  doc: `<span class="svg-icon" style="width: 28px; height: 28px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>`,
  rocket: `<span class="svg-icon" style="width: 28px; height: 28px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></span>`,
  diamond: `<span class="svg-icon" style="width: 28px; height: 28px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9zM2 9h20M10 3l-2 6 4 13 4-13-2-6"/></svg></span>`,
  target: `<span class="svg-icon" style="width: 20px; height: 20px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>`,
  robot: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg></span>`,
  palette: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/></svg></span>`,
  wrench: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></span>`,
  repost: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg></span>`,
  heart: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span>`,
  comment: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>`,
  sparkle: `<span class="svg-icon" style="width: 14px; height: 14px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>`,
  star: `<span class="svg-icon" style="width: 16px; height: 16px;"><svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>`,
  thumbUp: `<span class="svg-icon" style="width: 13px; height: 13px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg></span>`,
  thumbDown: `<span class="svg-icon" style="width: 13px; height: 13px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/></svg></span>`,
  link: `<span class="svg-icon" style="width: 13px; height: 13px;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></span>`
};

const FALLBACK_DATA = {
  "date": "2026-08-15",
  "generatedAt": "2026-08-15T18:40:00+08:00",
  "stats": { "scanned": 16, "selected": 9, "mustRead": 3, "zeroNoise": "0 废话" },
  "trends": [
    {
      "id": "trend-1",
      "name": "AGENT & HARNESS",
      "direction": "up",
      "score": 96,
      "title": "1. Agent 编排范式向“时空可组合”演进",
      "summary": "DeepSeek 发布 Harness 论文《A Programming Paradigm for Spatiotemporal Composability》，打破常规 Tool/MCP 堆砌，重塑 Agent 执行范式；同时开源长程 Agent Memory 项目成高频解决上下文痛点的新刚需。"
    },
    {
      "id": "trend-2",
      "name": "SKILLS & WORKFLOW",
      "direction": "up",
      "score": 94,
      "title": "2. Codex 5.6 + 垂直 Skill 成为新生产力爆点",
      "summary": "社区正从单纯 prompt 转向“即插即用 Skill”：包括 Anthropic 手绘风插画 Skill、轻拟物图标生成、Higgsfield/Seedance 视频制作插件，直接在 Agent 内部完成创作闭环。"
    },
    {
      "id": "trend-3",
      "name": "DEV CRAFT & BOOKS",
      "direction": "up",
      "score": 93,
      "title": "3. 前沿工程开源专著与 Agent 本地工具涌现",
      "summary": "Palantir 模式带火的《FDE 指南》3周狂揽 4k star 独立建站；复旦大学邱锡鹏教授全套经典 AI 教材开放彩色高清 PDF；面向 Agent 的自然语言设备控制 CLI 加速落地。"
    }
  ],
  "items": [
    {
      "id": "tweet-1",
      "category": "agent",
      "categoryLabel": "AI Harness 范式",
      "author": { "name": "Michael Guo", "handle": "@Michaelzsguo", "avatar": "https://pbs.twimg.com/profile_images/1484637162108825608/755rQsty_x96.jpg" },
      "createdAt": "2026-08-14T21:15:00.000Z",
      "displayDate": "2026-08-14",
      "content": "DeepSeek 发布 Harness 的时候直接发了一篇论文：《A Programming Paradigm for Spatiotemporal Composability》。\n\n别人发布 Agent Harness 通常告诉你有哪些 tools、怎么接 MCP、怎么做 memory，而 DeepSeek 从时空可组合性的理论高度重构 Agent 执行范式。",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPtadgrXMAA66fW?format=jpg&name=medium" }],
      "metrics": { "reposts": 31, "likes": 143, "replies": 9 },
      "ai": { "score": 96, "isMustRead": true, "tags": ["DeepSeek", "Agent Harness", "Paper"], "whyInteresting": "从理论范式高度重构 Agent 时空可组合性，超越普通 MCP 封装", "action": "阅读论文并对照现有 Agent 编排逻辑" }
    },
    {
      "id": "tweet-2",
      "category": "skills",
      "categoryLabel": "视觉 Skill",
      "author": { "name": "Yihui", "handle": "@yihui_indie", "avatar": "https://pbs.twimg.com/profile_images/1804848821702377472/fSfFlGTf_x96.jpg" },
      "createdAt": "2026-08-13T12:09:42.000Z",
      "displayDate": "2026-08-13",
      "content": "在 YouMind 上发布了新 Skill：「Anthropic 风格插画」。\n\n给它一个主题，会转换成简单、克制且带手绘感的 Anthropic 概念插画。很适合做文章配图、封面或抽象视觉隐喻。",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPmcfpcaoAA-nls?format=jpg&name=medium" }],
      "metrics": { "reposts": 47, "likes": 354, "replies": 74 },
      "ai": { "score": 92, "isMustRead": false, "tags": ["YouMind", "Anthropic Style", "Illustration Skill"], "whyInteresting": "克制、高级手绘风视觉资产生成，适合技术博文与封面", "action": "可尝试集成入本地 Skill 库" }
    },
    {
      "id": "tweet-3",
      "category": "skills",
      "categoryLabel": "Codex + 视频生成",
      "author": { "name": "Sac", "handle": "@Saccc_c", "avatar": "https://pbs.twimg.com/profile_images/2081939362808520704/FwzCMH0g_x96.jpg" },
      "createdAt": "2026-08-13T17:53:49.000Z",
      "displayDate": "2026-08-13",
      "content": "玩 Seedance 2.5 必须在 Codex 安装的插件：Higgsfield。\n\n工作流直接住在 Codex 内部，从关键帧设定、视频提示词到生成修改无缝闭环，生产力直接起飞！",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/amplify_video_thumb/2087960526223806465/img/S9hI5YEeaVWoCHpU.jpg" }],
      "metrics": { "reposts": 87, "likes": 495, "replies": 122 },
      "ai": { "score": 91, "isMustRead": false, "tags": ["Codex", "Higgsfield", "Seedance 2.5", "AIGC Video"], "whyInteresting": "把复杂视频生成工作流原生内嵌至 IDE/Agent 内部", "action": "关注其插件架构与调用接口" }
    },
    {
      "id": "tweet-4",
      "category": "tools",
      "categoryLabel": "开源专著",
      "author": { "name": "XDash", "handle": "@XDash", "avatar": "https://pbs.twimg.com/profile_images/1835375310344527872/hQ7y7lkV_x96.jpg" },
      "createdAt": "2026-08-14T01:30:53.000Z",
      "displayDate": "2026-08-14",
      "content": "把私下研究 Palantir「FDE（前沿部署工程师）」的二十万字资料整理成开源书，仅3周 GitHub 接近 4k star！\n\n本周正式上线独立官网 fde4.ai，提供极佳的在线阅读体验。",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPpRju3b0AAEdG1?format=jpg&name=medium" }],
      "metrics": { "reposts": 30, "likes": 173, "replies": 57 },
      "links": [{ "type": "website", "url": "https://fde4.ai", "title": "fde4.ai (4k+ ⭐ 官网)" }],
      "ai": { "score": 95, "isMustRead": true, "tags": ["FDE", "Palantir", "Engineering Book"], "whyInteresting": "前沿部署工程师深度系统化梳理，商业落地与技术实战结合", "action": "建议收藏并在 fde4.ai 查阅核心章节" }
    },
    {
      "id": "tweet-5",
      "category": "skills",
      "categoryLabel": "图标生成 Skill",
      "author": { "name": "十里", "handle": "@okooo5km", "avatar": "https://pbs.twimg.com/profile_images/2020293051302965250/jJjJxUI6_x96.jpg" },
      "createdAt": "2026-08-14T03:57:16.000Z",
      "displayDate": "2026-08-14",
      "content": "稳定输出高质量「轻拟物图标（Soft Neumorphic）」技能发布！\n\n彻底解决之前 AI 图标生成的残次率，直接生成高质量 App Icon 级成品。",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPp1PXTbEAEYB4R?format=jpg&name=large" }],
      "metrics": { "reposts": 109, "likes": 661, "replies": 27 },
      "ai": { "score": 88, "isMustRead": false, "tags": ["Neumorphism", "Icon Design", "YouMind"], "whyInteresting": "大幅提高 AI 生成拟物化 App 图标的成品可用率", "action": "适合作为 UI 设计 Skill 参考" }
    },
    {
      "id": "tweet-6",
      "category": "tools",
      "categoryLabel": "经典教材",
      "author": { "name": "灰狐", "handle": "@huihoo", "avatar": "https://pbs.twimg.com/profile_images/1233132661608071169/_PRc7chX_x96.jpg" },
      "createdAt": "2026-08-14T01:05:45.000Z",
      "displayDate": "2026-08-14",
      "content": "复旦大学邱锡鹏教授编写经典系列教材全网开放彩色 PDF 下载：\n- 《神经网络与深度学习 第二版》562页\n- 《案例与实践篇》372页\n- 《大模型与智能体》408页\n理论、通识与代码实践全覆盖！",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPpM4hMa0AAqxxy?format=jpg&name=large" }],
      "metrics": { "reposts": 114, "likes": 467, "replies": 46 },
      "ai": { "score": 93, "isMustRead": false, "tags": ["Deep Learning", "LLM Agent", "Textbook"], "whyInteresting": "学术界权威教授出品的体系化教材，全彩开源", "action": "下载 PDF 存入本地技术资料库" }
    },
    {
      "id": "tweet-7",
      "category": "agent",
      "categoryLabel": "高赞 Prompt 技巧",
      "author": { "name": "Nora X", "handle": "@NoraX2026", "avatar": "https://pbs.twimg.com/profile_images/2078140848114720768/hMPWC08N_x96.jpg" },
      "createdAt": "2026-08-13T13:39:58.000Z",
      "displayDate": "2026-08-13",
      "content": "Reddit 疯传的“深度思考” Prompt 彻底改变了与 Codex 的交互体验：\n\n“请先不要回答我的问题。在给出答案前，指出我在问题中没有明确说出但已默认成立的假设……”",
      "metrics": { "reposts": 436, "likes": 2366, "replies": 154 },
      "ai": { "score": 94, "isMustRead": true, "tags": ["Prompt", "Deep Thinking", "Codex"], "whyInteresting": "通过前置假设检视有效避免 AI 盲目顺从导致的推演偏差", "action": "加入常用 Prompt 模板库" }
    },
    {
      "id": "tweet-8",
      "category": "tools",
      "categoryLabel": "开源手册",
      "author": { "name": "Amto", "handle": "@XAMTO_AI", "avatar": "https://pbs.twimg.com/profile_images/2054618779120984064/1iLfLP0Y_x96.jpg" },
      "createdAt": "2026-08-15T00:15:00.000Z",
      "displayDate": "2026-08-15",
      "content": "专为程序员设计的英语学习开源项目《A Programmer's Guide to English》。\n\n直击技术文档、源码阅读、Issue/PR 撰写真实场景，程序员思维拆解，全文开源！",
      "media": [{ "type": "image", "url": "https://pbs.twimg.com/media/HPtl8GibMAAwuac?format=jpg&name=medium" }],
      "metrics": { "reposts": 8, "likes": 43, "replies": 34 },
      "ai": { "score": 87, "isMustRead": false, "tags": ["English", "Open Source", "Developer Guide"], "whyInteresting": "聚焦 Issue/PR/源码场景的高频技术英语学习指南", "action": "查阅 GitHub 仓库" }
    },
    {
      "id": "tweet-9",
      "category": "skills",
      "categoryLabel": "设计资产库",
      "author": { "name": "开发者Hailey", "handle": "@IndieDevHailey", "avatar": "https://pbs.twimg.com/profile_images/1804848821702377472/fSfFlGTf_x96.jpg" },
      "createdAt": "2026-08-14T02:41:48.000Z",
      "displayDate": "2026-08-14",
      "content": "有人把 X 上超顶的设计全聚在一起了——Inspora。\n\n专门收集 X 上的 Web、Branding、Product、Motion、3D 高质量作品，每小时更新，Vibe Coding 找参考极度爽快！",
      "metrics": { "reposts": 44, "likes": 289, "replies": 14 },
      "ai": { "score": 89, "isMustRead": false, "tags": ["Inspora", "Design Reference", "Vibe Coding"], "whyInteresting": "高频更新的 X 顶级前端/UI 设计作品聚合平台", "action": "加入前端设计参考收藏夹" }
    }
  ]
};

let currentRadarData = null;

// LocalStorage helpers
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('radar_bookmarks') || '[]');
  } catch (e) {
    return [];
  }
}

function saveBookmarks(bms) {
  localStorage.setItem('radar_bookmarks', JSON.stringify(bms));
}

function getFeedback() {
  try {
    return JSON.parse(localStorage.getItem('radar_feedback') || '{}');
  } catch (e) {
    return {};
  }
}

function saveFeedback(fb) {
  localStorage.setItem('radar_feedback', JSON.stringify(fb));
}

function toggleStar(tweetId, btn) {
  const bms = getBookmarks();
  const idx = bms.indexOf(tweetId);
  const card = btn.closest('.tweet-card');

  if (idx > -1) {
    bms.splice(idx, 1);
    btn.classList.remove('starred');
    if (card) card.removeAttribute('data-starred');
  } else {
    bms.push(tweetId);
    btn.classList.add('starred');
    if (card) card.setAttribute('data-starred', 'true');
  }
  saveBookmarks(bms);
}

function voteCard(tweetId, type, btn) {
  const fb = getFeedback();
  const parent = btn.parentElement;
  const upBtn = parent.querySelector('.fb-btn.up');
  const downBtn = parent.querySelector('.fb-btn.down');

  if (fb[tweetId] === type) {
    delete fb[tweetId];
    btn.classList.remove('active-up', 'active-down');
  } else {
    fb[tweetId] = type;
    if (upBtn) upBtn.classList.remove('active-up');
    if (downBtn) downBtn.classList.remove('active-down');
    btn.classList.add(type === 'up' ? 'active-up' : 'active-down');
  }
  saveFeedback(fb);
}

async function loadData(targetUrl) {
  try {
    const response = await fetch(targetUrl);
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.warn('Fetch failed for ' + targetUrl + ', using fallback.');
  }
  return FALLBACK_DATA;
}

async function initRadar(targetUrl = './data/latest.json') {
  const feedGrid = document.getElementById('feedGrid');
  const trendGrid = document.getElementById('trendGrid');
  const statsBar = document.getElementById('statsBar');
  const dateBadge = document.getElementById('dateBadge');

  const data = await loadData(targetUrl);
  currentRadarData = data;

  // 1. Render Date & Meta
  if (dateBadge && data.date) {
    dateBadge.innerHTML = `${ICONS.calendar} SYNC: ${data.date} (EGO-BROWSER)`;
  }

  // 2. Render Stats Bar
  if (statsBar && data.stats) {
    statsBar.innerHTML = `
      <div class="stat-card c1">
        <div class="stat-icon-wrap">${ICONS.doc}</div>
        <div class="stat-info">
          <div class="stat-num">${data.items ? data.items.length : data.stats.selected}+</div>
          <div class="stat-label">深度动态精选</div>
        </div>
      </div>
      <div class="stat-card c2">
        <div class="stat-icon-wrap">${ICONS.rocket}</div>
        <div class="stat-info">
          <div class="stat-num">${data.trends ? data.trends.length : 3} 大</div>
          <div class="stat-label">核心爆发阵地</div>
        </div>
      </div>
      <div class="stat-card c3">
        <div class="stat-icon-wrap">${ICONS.diamond}</div>
        <div class="stat-info">
          <div class="stat-num">100%</div>
          <div class="stat-label">硬核干货密度</div>
        </div>
      </div>
      <div class="stat-card c4">
        <div class="stat-icon-wrap">${ICONS.bolt}</div>
        <div class="stat-info">
          <div class="stat-num">0 废话</div>
          <div class="stat-label">纯行动导向</div>
        </div>
      </div>
    `;
  }

  // 3. Render Trend Radar
  if (trendGrid && Array.isArray(data.trends)) {
    trendGrid.innerHTML = data.trends.map((t, idx) => {
      const tClass = `t${(idx % 3) + 1}`;
      let tagIcon = ICONS.robot;
      if (t.name.includes('SKILL') || t.name.includes('WORKFLOW')) tagIcon = ICONS.palette;
      if (t.name.includes('DEV') || t.name.includes('BOOK')) tagIcon = ICONS.wrench;

      return `
        <div class="trend-box ${tClass}">
          <div class="trend-header-row">
            <span class="trend-tag">${tagIcon} ${t.name}</span>
            ${t.score ? `<span class="score-badge">${t.score} PTS</span>` : ''}
          </div>
          <h3 class="trend-title">${t.title || t.name}</h3>
          <p class="trend-text">${t.summary}</p>
        </div>
      `;
    }).join('');
  }

  // 4. Render Tweet Cards Feed
  if (feedGrid && Array.isArray(data.items)) {
    renderFeedCards(data.items);
  }
}

function renderFeedCards(items) {
  const feedGrid = document.getElementById('feedGrid');
  if (!feedGrid) return;

  const bookmarks = getBookmarks();
  const feedback = getFeedback();

  feedGrid.innerHTML = items.map(item => {
    const isStarred = bookmarks.includes(item.id);
    const userVote = feedback[item.id];

    const pillClass = item.category === 'agent' ? 'pill-agent' :
                      item.category === 'skills' ? 'pill-skills' :
                      item.category === 'tools' ? 'pill-tools' : 'pill-guide';
    
    let catIcon = ICONS.bolt;
    if (item.category === 'skills') catIcon = ICONS.palette;
    if (item.category === 'tools') catIcon = ICONS.wrench;
    if (item.category === 'agent') catIcon = ICONS.robot;

    const mediaHtml = (item.media && item.media.length > 0 && item.media[0].url) ? `
      <div class="tweet-media">
        <img src="${item.media[0].url}" alt="Tweet media" loading="lazy" onerror="this.parentElement.style.display='none'">
      </div>
    ` : '';

    const linksHtml = (item.links && item.links.length > 0) ? `
      <div class="deep-links-wrap">
        ${item.links.map(l => {
          const u = (l.url || '').replace(/[),.;]+$/, '').replace(/[?&]twclid=[^&]*/, '');
          const isShort = u.includes('t.co/');
          const label = isShort ? u.replace(/^https:\/\/t\.co\//, 't.co/') : (l.title || u.replace(/^https?:\/\//, '').slice(0, 24));
          return `
          <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="deep-link-chip"${isShort ? ' title="X 短链，点击跳转原文链接"' : ''}>
            ${ICONS.link} ${label} ↗
          </a>
        `;
        }).join('')}
      </div>
    ` : '';

    const sourceBtn = (item.sourceUrl) ? `
      <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="source-link-btn" title="在 X 查看原文">
        ${ICONS.link} 查看原文 ↗
      </a>
    ` : '';

    const aiTakeHtml = (item.ai && item.ai.whyInteresting) ? `
      <div class="ai-take-box">
        <div class="ai-take-title">${ICONS.sparkle} AI 推荐理由：</div>
        <div>${item.ai.whyInteresting}</div>
      </div>
    ` : '';

    return `
      <div class="tweet-card" data-cat="${item.category}" id="${item.id}" ${isStarred ? 'data-starred="true"' : ''}>
        <div class="card-top-action">
          <button class="star-btn ${isStarred ? 'starred' : ''}" onclick="toggleStar('${item.id}', this)" title="收藏推文">
            ${ICONS.star}
          </button>
        </div>

        <div>
          <div class="tweet-header">
            <div class="avatar-box">
              <img src="${item.author.avatar}" alt="${item.author.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'52\' height=\'52\' fill=\'%23FF4D80\'><rect width=\'52\' height=\'52\'/></svg>'">
            </div>
            <div class="author-meta">
              <div class="author-name">${item.author.name}</div>
              <div class="author-handle">${item.author.handle}</div>
            </div>
          </div>

          <div class="category-pill-wrap">
            <span class="category-pill ${pillClass}">
              ${catIcon} ${item.categoryLabel || item.category}
            </span>
            ${item.ai && item.ai.score ? `<span class="score-badge">${item.ai.score}% MATCH</span>` : ''}
          </div>

          <p class="tweet-body">${item.content}</p>
          ${mediaHtml}
          ${linksHtml}
          ${aiTakeHtml}
        </div>

        <div class="tweet-footer">
          <div class="metrics-pill">
            <span class="metric-item">${ICONS.repost} ${item.metrics.reposts || 0}</span>
            <span class="metric-item">${ICONS.heart} ${item.metrics.likes || 0}</span>
          </div>

          ${sourceBtn}

          <div class="feedback-group">
            <button class="fb-btn up ${userVote === 'up' ? 'active-up' : ''}" onclick="voteCard('${item.id}', 'up', this)" title="有用">
              ${ICONS.thumbUp} 有用
            </button>
            <button class="fb-btn down ${userVote === 'down' ? 'active-down' : ''}" onclick="voteCard('${item.id}', 'down', this)" title="降权">
              ${ICONS.thumbDown} 降权
            </button>
          </div>

          <span class="tweet-date-text">${item.displayDate || item.createdAt.slice(0, 10)}</span>
        </div>
      </div>
    `;
  }).join('');
}

function handleArchiveChange(selectEl) {
  const val = selectEl.value;
  if (val === 'latest') {
    initRadar('./data/latest.json');
  } else {
    initRadar(`./data/archive/${val}.json`);
  }
}

/* ===== Multi-route navigation ===== */
function goRoute(route, btn) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.route-section').forEach(s => s.classList.remove('active'));
  const tabBtn = btn || document.querySelector(`.nav-tab[data-route="${route}"]`);
  if (tabBtn) tabBtn.classList.add('active');
  const sec = document.getElementById('route-' + route);
  if (sec) sec.classList.add('active');

  // Lazy render per route
  if (route === 'archive') loadArchive();
  if (route === 'trends') renderTrends();
  if (route === 'authors') renderAuthors();
  if (route === 'links') renderLinks();
  if (route === 'about') renderAbout();

  // Update hash
  if (location.hash !== '#' + route) history.replaceState(null, '', '#' + route);
}

async function loadArchive() {
  const grid = document.getElementById('archiveGrid');
  if (!grid) return;
  grid.innerHTML = '<div class="route-sub">加载中…</div>';
  try {
    const resp = await fetch('./data/archive/index.json');
    if (!resp.ok) throw new Error('no index');
    const manifest = await resp.json();
    if (!manifest.length) {
      grid.innerHTML = '<div class="route-sub">暂无归档快照。</div>';
      return;
    }
    grid.innerHTML = manifest.map(m => `
      <div class="archive-card">
        <div class="ac-date">📅 ${m.date}</div>
        <div class="ac-meta">${m.selected} 条精选 · 扫描 ${m.scanned} · ${(m.generatedAt || '').replace('T', ' ').slice(0, 19)}</div>
        <button class="ac-btn" onclick="openArchive('${m.file}')">查看快照 →</button>
      </div>
    `).join('');
  } catch (e) {
    grid.innerHTML = '<div class="route-sub">无法加载归档清单（首次运行可能还没有 index.json）。</div>';
  }
}

async function openArchive(file) {
  const feed = document.getElementById('feedGrid');
  const tab = document.querySelector('.nav-tab[data-route="home"]');
  await initRadar(`./data/archive/${file}`);
  goRoute('home', tab);
  feed.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderTrends() {
  const box = document.getElementById('trendHistory');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.trends || !data.trends.length) {
    box.innerHTML = '<div class="route-sub">暂无趋势数据。</div>';
    return;
  }
  box.innerHTML = data.trends.map((t, i) => `
    <div class="trend-row">
      <div class="tr-name">${t.name}</div>
      <div class="tr-title">${t.title || ''}</div>
      <div class="tr-summary">${t.summary || ''}</div>
      ${t.score ? `<span class="tr-score">${t.score} PTS</span>` : ''}
    </div>
  `).join('');
}

function renderAuthors() {
  const box = document.getElementById('authorsGrid');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.items || !data.items.length) {
    box.innerHTML = '<div class="route-sub">暂无作者数据。</div>';
    return;
  }
  const byAuthor = {};
  data.items.forEach(item => {
    const key = item.author.handle || item.author.name;
    if (!byAuthor[key]) {
      byAuthor[key] = { name: item.author.name, handle: item.author.handle, avatar: item.author.avatar, count: 0, totalScore: 0, likes: 0 };
    }
    byAuthor[key].count += 1;
    byAuthor[key].totalScore += (item.ai && item.ai.score) || 0;
    byAuthor[key].likes += (item.metrics && item.metrics.likes) || 0;
  });
  const rows = Object.values(byAuthor).sort((a, b) => b.totalScore - a.totalScore);
  box.innerHTML = rows.map(a => `
    <div class="author-card">
      <div class="avatar-box">
        <img src="${a.avatar}" alt="${a.name}" style="width: 52px; height: 52px; border-radius: 8px; border: 2.5px solid var(--ink);" onerror="this.style.visibility='hidden'">
      </div>
      <div>
        <div class="author-name">${a.name}</div>
        <div class="author-handle">${a.handle}</div>
        <div class="author-stats">
          <span class="up">▲ ${Math.round(a.totalScore / a.count)}</span> 均分
          · ${a.count} 条
          · <span class="down">♥ ${a.likes}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderLinks() {
  const box = document.getElementById('linksVault');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.items || !data.items.length) {
    box.innerHTML = '<div class="route-sub">暂无链接。</div>';
    return;
  }
  const rows = [];
  data.items.forEach(item => {
    if (item.links && item.links.length) {
      item.links.forEach(l => {
        rows.push({ url: l.url, type: l.type || 'website', src: item.author.handle || '' });
      });
    }
  });
  if (!rows.length) {
    box.innerHTML = '<div class="route-sub">本期没有提取到外链。</div>';
    return;
  }
  box.innerHTML = rows.map(r => {
    const displayUrl = r.url.replace(/[),.;]+$/, '').replace(/[?&]twclid=[^&]*/, '');
    const isShort = displayUrl.includes('t.co/');
    const cleanUrl = isShort ? displayUrl.replace(/^https:\/\/t\.co\//, 't.co/') : displayUrl;
    return `
    <div class="link-row">
      <span class="link-type">${r.type}</span>
      <a class="link-url" href="${r.url}" target="_blank" rel="noopener noreferrer"${isShort ? ' title="X 短链，点击跳转原文链接"' : ''}>${cleanUrl} ↗</a>
      <span class="link-src">via ${r.src}</span>
    </div>
  `;
  }).join('');

  // Async: resolve t.co shortlinks to real URLs (best effort, no blocking)
  rows.forEach((r, i) => {
    if (r.url.includes('t.co/')) {
      fetch(r.url, { method: 'HEAD', redirect: 'follow', mode: 'cors' })
        .then(resp => {
          const finalUrl = resp.url || r.url;
          const links = box.querySelectorAll('.link-url');
          if (links[i] && finalUrl && !finalUrl.includes('t.co/')) {
            links[i].textContent = finalUrl.replace(/[?&]twclid=[^&]*/, '') + ' ↗';
            links[i].href = finalUrl;
            links[i].title = '已解析真实地址';
          }
        })
        .catch(() => {});
    }
  });
}

function renderAbout() {
  // Static content already in index.html
}

document.addEventListener('DOMContentLoaded', () => {
  initRadar();
  // Handle initial hash
  const initial = (location.hash || '#home').replace('#', '');
  if (initial && initial !== 'home') goRoute(initial);
});
