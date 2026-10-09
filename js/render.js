/**
 * Personal AI Intelligence Radar - Dynamic Memphis Render Engine
 * 100% Zero-Emoji, Pure Scalable Inline SVGs
 * Includes Bookmarks, User Feedback, Deep Links, Lightbox, and Historical Archive Switcher
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
        "id": "x-2105204499266855051",
        "category": "agent",
        "categoryLabel": "AI Harness 范式",
        "sourceUrl": "https://x.com/I_am_oil_oil/status/2105204499266855051",
        "author": {
            "name": "oil-oil",
            "handle": "@I_am_oil_oil",
            "avatar": "./data/images/tweet-1-avatar-37c03f1095-0.jpg"
        },
        "createdAt": "2026-09-30T07:54:00.000Z",
        "displayDate": "2026-09-30",
        "content": "之前发过一期视频讲如何激发 AI 的创造能力做出不平庸的设计，这次把里面的方法整理成了一个 Skill，让 Agent 每次都按这套方法论来做：\nhttps://github.com/oil-oil/oil-ui1. 先定调性，把“高级”“简洁”这种词翻译成具体的文字、留白和颜色\n2. 每个方向从一个具体的灵感出发，比如一种材质、一个场景\n3. 先定首屏骨架再写文案，在不同的几个设计方向之间尽可能做到完全不同\n4. 内置了对比的模版页，可以非常方便的对比不同 Demo\n5. 选定后做成页面，在电脑和手机上截图检查，最后做减法\n\n除了设计流程，Skill 里还写了不少我对 AI 审美的观察心得。我自己实测即便使用非常便宜的 DeepSeek、mimo、gpt luna，也可以设计出很不错的设计效果，任何场景 UI 设计都可以用。\n\n除了开源 skill，我还第一次做了付费 Skill，叫做 Oil UI Pro：\nhttps://skillpay.alipay.com/shelf/product?productId=P0806000207812874&merchantId=2088022260532460…，这里面提供了更多 UX 相关的洞察。\n\n希望这个 Skill 帮助大家把任何 AI 模型的设计能力推到极限，后续会持续更新～",
        "media": [
            {
                "type": "image",
                "url": "./data/images/tweet-1-6f5b1951c0-1.jpg"
            }
        ],
        "metrics": {
            "reposts": 13,
            "likes": 132,
            "replies": 1
        },
        "links": [
            {
                "url": "https://t.co/9qAvnHB7aA",
                "type": "website"
            },
            {
                "url": "https://t.co/Toyazf2JLN",
                "type": "website"
            }
        ],
        "comments": [
            {
                "author": "DD wang",
                "handle": "@DDwangyrbe",
                "text": "沙发 ，请教这个怎么用呀，下载下来后，每次使用都要让AI@这个技能吗？",
                "avatar": "https://abs.twimg.com/sticky/default_profile_images/default_profile_x96.png",
                "time": "2026-09-30T11:59:07.000Z",
                "url": "https://x.com/DDwangyrbe/status/2105266185688555903"
            },
            {
                "author": "数字生命卡兹克",
                "handle": "@Khazix0918",
                "text": "这两天太多的人问我怎么防止claude被封号了，然后我之前是设备被标记了，所以几乎就是半个小时就会被封。\n不过新的Claude账号，截止今天，已经稳定开发6天了，目前没没看到啥问题，所以呢，也斗胆给大家分享一下我的小小的经验。\n\n1.",
                "avatar": "./data/images/tweet-1-comment-avatar-a07909ddaf-1.jpg",
                "time": "2026-09-30T14:12:19.000Z",
                "url": "https://x.com/Khazix0918/status/2105299706549096697"
            },
            {
                "author": "Yihui",
                "handle": "@yihui_indie",
                "text": "小辉单个产品日入500刀成就达成！按照手头的几个产品规划，年底应该能有望冲击一下日入万刀~",
                "avatar": "./data/images/tweet-1-comment-avatar-eb073a8375-2.jpg",
                "time": "2026-09-30T02:34:48.000Z",
                "url": "https://x.com/yihui_indie/status/2105124171768569980"
            },
            {
                "author": "Wei",
                "handle": "@wei_wang",
                "text": "Google 这次真的很大方。\n\nAI Pro 账号每个月送 200 个 Colab 计算单元，能跑 A100 80GB。\n\n再加上 Google 刚开放的 Colab CLI，这些额度现在可以直接交给 Agent 调用了。\n\n所以我马上写了一个调用的 Skill。\n\n有 Google AI Pro 账号的朋友可以试试。让 Agent 装好这个 Skill 以后，直接叫它调用",
                "avatar": "./data/images/tweet-1-comment-avatar-72575f691f-3.jpg",
                "time": "2026-09-30T02:28:01.000Z",
                "url": "https://x.com/wei_wang/status/2105122465525486058"
            },
            {
                "author": "Ding",
                "handle": "@dingyi",
                "text": "Railway 出了免注册 VM：终端敲 ssh \nhttps://\nrailway.new\n\n1. 大约 1.4 秒起来，2 vCPU / 2GB\n2. 预装 Node、Python、gh，还有 Claude Code、Codex、Cursor CLI、Grok 等 coding agent\n3. 未认领盒子算力免费；60 分钟搭建窗\n\n\nhttps://\nrailway.com/free-vm",
                "avatar": "./data/images/tweet-1-comment-avatar-ac1beff1f3-4.jpg",
                "time": "2026-09-30T09:00:14.000Z",
                "url": "https://x.com/dingyi/status/2105221169440018679"
            }
        ],
        "commentsAnalysis": "已抓取 5 条公开回复：讨论主要围绕体验反馈、补充信息与是否值得尝试展开；回复整体偏正向，但不能把评论热度等同于方案可靠性。",
        "ai": {
            "score": 88,
            "isMustRead": false,
            "tags": [
                "Agent",
                "Architecture"
            ],
            "whyInteresting": "高匹配度 (88% MATCH)，契合当前技术雷达重点关注领域。",
            "action": "查阅对应链接: https://t.co/9qAvnHB7aA",
            "personalTake": "这条内容的价值在于把 Agent 放回真实工作流，而不是停留在模型能力展示。案例里的增长或效率结论仍需用自己的数据复核。"
        }
    },
    {
        "id": "x-2105322024587694448",
        "category": "agent",
        "categoryLabel": "AI Harness 范式",
        "sourceUrl": "https://x.com/WasimShips/status/2105322024587694448",
        "author": {
            "name": "Wasim",
            "handle": "@WasimShips",
            "avatar": "./data/images/tweet-2-avatar-8f4d070396-0.jpg"
        },
        "createdAt": "2026-09-30T15:41:00.000Z",
        "displayDate": "2026-09-30",
        "content": "你的设计书签可以添些新面孔——从这9个开始 ↓\n\n- \nhttp://bencho.dev : 可实时调整的UI模块\n\n- \nhttp://on.design : 专为设计师的邀请制空间\n\n- \nhttp://inspomcp.dev : 供你的编码代理参考的800+真实网站\n\n- \nhttp://motionsites.ai : 带动画效果的网站AI提示\n\n- \nhttp://obsidianui.dev : 以动态为核心的React组件\n\n- \nhttp://ui.halaska.com : AI产品的单文件UI套件\n\n- \nhttp://builtbydesigners.com : 发现同行设计师制作的工具\n\n- \nhttp://goatedui.dev : 网站、界面、应用图标和OG图像的灵感来源\n\n- \nhttp://reelfolio.io : 将静态截图转化为展示卷轴\n你会添加哪个鲜为人知的网站？",
        "media": [],
        "metrics": {
            "reposts": 2,
            "likes": 109,
            "replies": 2
        },
        "links": [
            {
                "url": "https://t.co/WsDGiUuful",
                "type": "website"
            },
            {
                "url": "https://t.co/Hf2qrJapiH",
                "type": "website"
            },
            {
                "url": "https://t.co/d37P5czUFL",
                "type": "website"
            }
        ],
        "comments": [
            {
                "author": "Stephen",
                "handle": "@srotimi_ui",
                "text": "这样的仪表板就是不一样。",
                "avatar": "./data/images/tweet-2-comment-avatar-353f0ab491-0.jpg",
                "time": "2026-09-30T10:43:31.000Z",
                "url": "https://x.com/srotimi_ui/status/2105247161260621842"
            },
            {
                "author": "brian benitez",
                "handle": "@NotoriousUSB",
                "text": "设计即代码。\n\n\nhttps://\nzoah.com",
                "avatar": "./data/images/tweet-2-comment-avatar-6f85c0ceed-1.jpg",
                "time": "2026-09-30T14:37:00.000Z",
                "url": "https://x.com/NotoriousUSB/status/2105305918913024014"
            },
            {
                "author": "sasha birukoff",
                "handle": "@sashabirukoff",
                "text": "流动光照",
                "avatar": "./data/images/tweet-2-comment-avatar-af56258ac3-2.jpg",
                "time": "2026-09-30T16:33:13.000Z",
                "url": "https://x.com/sashabirukoff/status/2105335164532355314"
            },
            {
                "author": "Bakers Studio",
                "handle": "@studiobakers",
                "text": "ui components for giza",
                "avatar": "./data/images/tweet-2-comment-avatar-dd09b750a9-3.jpg",
                "time": "2026-09-30T10:46:02.000Z",
                "url": "https://x.com/studiobakers/status/2105247793615102192"
            }
        ],
        "commentsAnalysis": "已抓取 4 条公开回复：讨论主要围绕体验反馈、补充信息与是否值得尝试展开；回复整体偏正向，但不能把评论热度等同于方案可靠性。",
        "ai": {
            "score": 88,
            "isMustRead": false,
            "tags": [
                "Agent",
                "Architecture"
            ],
            "whyInteresting": "高匹配度 (88% MATCH)，契合当前技术雷达重点关注领域。",
            "action": "查阅对应链接: https://t.co/WsDGiUuful",
            "personalTake": "这条内容的价值在于把 Agent 放回真实工作流，而不是停留在模型能力展示。案例里的增长或效率结论仍需用自己的数据复核。"
        }
    }
]
};

let currentRadarData = null;
let currentSnapshotUrl = './data/latest.json';
let feedScrollPosition = 0;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

function formatMetric(value) {
  return Number(value || 0).toLocaleString('zh-CN');
}

function normalizeImageUrl(url) {
  if (!url) return '';
  if (url.startsWith('/data/images/')) {
    return '.' + url;
  }
  return url;
}

function getItemId(item) {
  if (!item) return '';
  if (item.sourceUrl) {
    const match = item.sourceUrl.match(/status\/(\d+)/);
    if (match) return 'x-' + match[1];
  }
  return item.id || '';
}

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

function isItemStarred(item, bookmarks) {
  const bms = bookmarks || getBookmarks();
  const stableId = getItemId(item);
  return bms.includes(stableId) || (item.id && bms.includes(item.id));
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
  const item = currentRadarData?.items?.find(x => x.id === tweetId || getItemId(x) === tweetId);
  const stableId = item ? getItemId(item) : tweetId;

  const idx = bms.findIndex(x => x === stableId || x === tweetId);
  const card = btn ? btn.closest('.tweet-card') : document.getElementById(tweetId);
  let isStarred = false;

  if (idx > -1) {
    bms.splice(idx, 1);
    if (btn) btn.classList.remove('starred');
    if (card) card.removeAttribute('data-starred');
    isStarred = false;
  } else {
    bms.push(stableId);
    if (btn) btn.classList.add('starred');
    if (card) card.setAttribute('data-starred', 'true');
    isStarred = true;
  }
  saveBookmarks(bms);
  return isStarred;
}

function toggleStarFromDetail(tweetId, btn) {
  const starred = toggleStar(tweetId, null);
  if (btn) {
    btn.classList.toggle('starred', starred);
    const lbl = btn.querySelector('.star-label');
    if (lbl) lbl.textContent = starred ? '已收藏' : '收藏';
  }
}

function copyDetailLink(tweetId) {
  const url = location.origin + location.pathname + `#/article/${encodeURIComponent(tweetId)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert('推文详情链接已复制到剪贴板！');
  }).catch(() => {
    prompt('复制此推文详情链接：', url);
  });
}

function openLightbox(src) {
  const box = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  if (box && img) {
    img.src = src;
    box.style.display = 'flex';
  }
}

function closeLightbox() {
  const box = document.getElementById('imageLightbox');
  if (box) box.style.display = 'none';
}

function toggleExpandCard(btn) {
  const card = btn.closest('.tweet-card');
  if (!card) return;
  const isExpanded = card.classList.toggle('is-expanded');
  btn.textContent = isExpanded ? '收起全文 ↑' : '展开全文 ↓';
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

function updateArchiveNotice(targetUrl, data) {
  const notice = document.getElementById('archiveNotice');
  if (!notice) return;
  const isArchive = targetUrl !== './data/latest.json';
  if (isArchive) {
    notice.innerHTML = `
      <span>⚠️ 当前正在查看历史快照（${escapeHtml(data.date || '历史快照')}）</span>
      <button class="archive-reset-btn" onclick="resetToLatest()">返回今日最新 ⚡</button>
    `;
    notice.style.display = 'flex';
  } else {
    notice.style.display = 'none';
  }
}

async function initArchiveDropdown() {
  const select = document.getElementById('archiveSelect');
  if (!select) return;
  try {
    const resp = await fetch('./data/archive/index.json');
    if (!resp.ok) return;
    const manifest = await resp.json();
    if (!manifest || !manifest.length) return;

    let html = '<option value="latest">⚡ 今日最新 (Live)</option>';
    manifest.forEach(m => {
      html += `<option value="${m.file}">📅 ${m.date} (${m.selected}条精选)</option>`;
    });
    select.innerHTML = html;
  } catch (e) {
    console.warn('Could not load archive index for dropdown');
  }
}

async function handleArchiveChange(selectEl) {
  const val = selectEl.value;
  if (val === 'latest') {
    await initRadar('./data/latest.json');
  } else {
    await initRadar(`./data/archive/${val}`);
  }
}

async function resetToLatest() {
  const select = document.getElementById('archiveSelect');
  if (select) select.value = 'latest';
  await initRadar('./data/latest.json');
}

async function initRadar(targetUrl = './data/latest.json') {
  currentSnapshotUrl = targetUrl;
  const feedGrid = document.getElementById('feedGrid');
  const trendGrid = document.getElementById('trendGrid');
  const statsBar = document.getElementById('statsBar');
  const dateBadge = document.getElementById('dateBadge');

  const data = await loadData(targetUrl);
  currentRadarData = data;

  updateArchiveNotice(targetUrl, data);

  // 1. Render Date & Meta
  if (dateBadge && data.date) {
    dateBadge.innerHTML = `<span class="live-dot"></span> LIVE ${data.date}`;
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
  if (location.hash.startsWith('#/article/')) {
    renderArticleDetail(decodeURIComponent(location.hash.split('/')[2] || ''));
  }
}

function renderFeedCards(items) {
  const feedGrid = document.getElementById('feedGrid');
  if (!feedGrid) return;

  const bookmarks = getBookmarks();

  const cardsHtml = items.map(item => {
    const isStarred = isItemStarred(item, bookmarks);

    const pillClass = item.category === 'agent' ? 'pill-agent' :
                      item.category === 'skills' ? 'pill-skills' :
                      item.category === 'tools' ? 'pill-tools' : 'pill-guide';
    
    let catIcon = ICONS.bolt;
    if (item.category === 'skills') catIcon = ICONS.palette;
    if (item.category === 'tools') catIcon = ICONS.wrench;
    if (item.category === 'agent') catIcon = ICONS.robot;

    const mediaList = (item.media || []).filter(m => m && m.url);
    const hasMedia = mediaList.length > 0;
    const cleanImg = hasMedia ? normalizeImageUrl(mediaList[0].url) : '';

    const avatarUrl = normalizeImageUrl(item.author?.avatar);
    const content = item.content || '';

    // Fixed height thumbnail
    const thumbHtml = hasMedia ? `
      <div class="tweet-media-thumb">
        <img src="${escapeHtml(cleanImg)}" alt="推文配图" loading="lazy" onerror="this.closest('.tweet-media-thumb').remove()">
      </div>
    ` : '';

    // First deep link chip
    const firstLink = (item.links && item.links.length > 0) ? item.links[0] : null;
    const linkChipHtml = firstLink ? `
      <div class="card-single-link" onclick="event.stopPropagation()">
        <a href="${escapeHtml(firstLink.url)}" target="_blank" rel="noopener noreferrer" class="deep-link-chip">
          ${ICONS.link} ${(firstLink.title || firstLink.url.replace(/^https?:\/\//, '')).slice(0, 30)} ↗
        </a>
      </div>
    ` : '';

    // AI recommendation snippet (clamped)
    const aiSnippetHtml = (item.ai && item.ai.whyInteresting) ? `
      <div class="ai-take-box">
        <span class="ai-take-label">${ICONS.sparkle} 推荐理由：</span>
        <span>${escapeHtml(item.ai.whyInteresting)}</span>
      </div>
    ` : '';

    return `
      <div class="tweet-card" data-cat="${item.category}" id="${item.id}" ${isStarred ? 'data-starred="true"' : ''} onclick="feedScrollPosition = window.scrollY; location.hash = '#/article/' + encodeURIComponent('${item.id}');">
        
        <!-- Header -->
        <div class="tweet-card-top">
          <div class="tweet-header">
            <div class="avatar-box">
              <img src="${avatarUrl}" alt="${escapeHtml(item.author.name)}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'42\' height=\'42\' fill=\'%232563EB\'><rect width=\'42\' height=\'42\'/></svg>'">
            </div>
            <div class="author-meta">
              <div class="author-name">${escapeHtml(item.author.name)}</div>
              <div class="author-handle">${escapeHtml(item.author.handle)}</div>
            </div>
          </div>
          <button class="star-btn ${isStarred ? 'starred' : ''}" onclick="event.stopPropagation(); toggleStar('${item.id}', this)" title="收藏推文">
            ${ICONS.star}
          </button>
        </div>

        <!-- Category & Match Score -->
        <div class="category-pill-wrap">
          <span class="category-pill ${pillClass}">
            ${catIcon} ${escapeHtml(item.categoryLabel || item.category)}
          </span>
          ${item.ai && item.ai.score ? `<span class="score-badge">${item.ai.score}% MATCH</span>` : ''}
        </div>

        <!-- Clamped Body Area (Fixed Height Slot) -->
        <div class="tweet-card-body">
          <p class="tweet-body">${escapeHtml(content)}</p>
          ${thumbHtml}
          ${!hasMedia ? aiSnippetHtml : linkChipHtml}
        </div>

        <!-- Pinned Footer -->
        <div class="tweet-footer" onclick="event.stopPropagation()">
          <div class="metrics-pill">
            <span class="metric-item">${ICONS.repost} ${formatMetric(item.metrics && item.metrics.reposts)}</span>
            <span class="metric-item">${ICONS.comment} ${formatMetric(item.metrics && item.metrics.replies)}</span>
            <span class="metric-item">${ICONS.heart} ${formatMetric(item.metrics && item.metrics.likes)}</span>
          </div>

          <div class="card-footer-right">
            <span class="tweet-date-text">${item.displayDate || item.createdAt.slice(0, 10)}</span>
            <a href="#/article/${encodeURIComponent(item.id)}" class="detail-link-btn" onclick="feedScrollPosition = window.scrollY;">
              全文详情 →
            </a>
          </div>
        </div>

      </div>
    `;
  }).join('');

  feedGrid.innerHTML = cardsHtml + `
    <div id="feedEmptyNotice" class="feed-empty-notice" style="display: none;">
      <div class="empty-star-icon">${ICONS.star}</div>
      <div class="empty-title">暂无匹配内容</div>
      <div class="empty-text">当前分类下没有推文。收藏推文后可在“T小P收藏”中查看。</div>
    </div>
  `;
}

async function ensureDataLoaded() {
  if (!currentRadarData) {
    currentRadarData = await loadData(currentSnapshotUrl || './data/latest.json');
  }
  return currentRadarData;
}

/* ===== Multi-route navigation ===== */
async function goRoute(route, btn) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.route-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const tabBtn = btn || document.querySelector(`.nav-tab[data-route="${route}"]`);
  if (tabBtn) tabBtn.classList.add('active');
  const sec = document.getElementById('route-' + route);
  if (sec) {
    sec.classList.add('active');
    sec.style.display = (route === 'home') ? 'grid' : 'block';
  }

  // Toggle main-header visibility: only visible on home overview!
  const mainHeader = document.querySelector('.main-header');
  if (mainHeader) {
    mainHeader.style.display = (route === 'home') ? 'flex' : 'none';
  }

  // Ensure data loaded before subroute renders
  await ensureDataLoaded();

  // Lazy render per route
  if (route === 'archive') await loadArchive();
  if (route === 'trends') renderTrends();
  if (route === 'authors') renderAuthors();
  if (route === 'links') renderLinks();
  if (route === 'about') renderAbout();

  // Scroll to top on subroute switch
  if (route !== 'home') {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Update hash
  if (route !== 'article' && location.hash !== '#' + route) history.replaceState(null, '', '#' + route);
}

function goHomeAndFilter(cat) {
  goRoute('home');
  const btn = document.querySelector(`.filter-btn[onclick*="'${cat}'"]`);
  if (btn) filterCards(cat, btn);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadArchive() {
  const grid = document.getElementById('archiveGrid');
  if (!grid) return;
  grid.innerHTML = '<div class="route-loading-state"><span class="live-dot"></span> 加载历史快照归档中…</div>';
  try {
    const resp = await fetch('./data/archive/index.json');
    if (!resp.ok) throw new Error('no index');
    const manifest = await resp.json();
    if (!manifest.length) {
      grid.innerHTML = '<div class="empty-note">暂无历史归档快照。</div>';
      return;
    }
    grid.innerHTML = manifest.map(m => `
      <div class="archive-card" onclick="openArchive('${m.file}')">
        <div class="ac-top-row">
          <div class="ac-date-wrap">
            <span class="ac-cal-icon">${ICONS.calendar}</span>
            <span class="ac-date-text">${m.date}</span>
          </div>
          <span class="ac-chip">${m.selected} 条精选</span>
        </div>
        <div class="ac-meta-line">
          <span>全网扫描: ${m.scanned} 条</span>
          <span>快照生成: ${(m.generatedAt || '').replace('T', ' ').slice(0, 19)}</span>
        </div>
        <div class="ac-footer-action">
          <button class="ac-btn" onclick="event.stopPropagation(); openArchive('${m.file}')">
            载入此快照 →
          </button>
        </div>
      </div>
    `).join('');
  } catch (e) {
    grid.innerHTML = '<div class="empty-note">无法加载归档清单，请刷新重试。</div>';
  }
}

async function openArchive(file) {
  const select = document.getElementById('archiveSelect');
  if (select) select.value = file;
  await initRadar(`./data/archive/${file}`);
  const tab = document.querySelector('.nav-tab[data-route="home"]');
  await goRoute('home', tab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTrends() {
  const box = document.getElementById('trendHistory');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.trends || !data.trends.length) {
    box.innerHTML = '<div class="empty-note">暂无趋势追踪数据。</div>';
    return;
  }
  box.innerHTML = data.trends.map((t, i) => {
    const cat = i === 0 ? 'agent' : i === 1 ? 'skills' : 'tools';
    return `
      <div class="trend-card-full t${i + 1}">
        <div class="tr-top-bar">
          <div class="tr-badge-wrap">
            <span class="tr-category-tag">${t.name}</span>
            <span class="tr-momentum">🔥 核心爆发点</span>
          </div>
          ${t.score ? `<span class="tr-score-pill">${t.score} PTS</span>` : ''}
        </div>
        <h3 class="tr-headline">${escapeHtml(t.title || '')}</h3>
        <p class="tr-summary-text">${escapeHtml(t.summary || '')}</p>
        <div class="tr-footer-bar">
          <button class="tr-action-btn" onclick="goHomeAndFilter('${cat}')">
            筛选关联推文 (${t.name}) →
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderAuthors() {
  const box = document.getElementById('authorsGrid');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.items || !data.items.length) {
    box.innerHTML = '<div class="empty-note">暂无作者数据。</div>';
    return;
  }
  const byAuthor = {};
  data.items.forEach(item => {
    const key = item.author.handle || item.author.name;
    if (!byAuthor[key]) {
      byAuthor[key] = {
        name: item.author.name,
        handle: item.author.handle,
        avatar: normalizeImageUrl(item.author.avatar),
        count: 0,
        totalScore: 0,
        likes: 0,
        reposts: 0
      };
    }
    byAuthor[key].count += 1;
    byAuthor[key].totalScore += (item.ai && item.ai.score) || 0;
    byAuthor[key].likes += (item.metrics && item.metrics.likes) || 0;
    byAuthor[key].reposts += (item.metrics && item.metrics.reposts) || 0;
  });
  const rows = Object.values(byAuthor).sort((a, b) => b.count !== a.count ? b.count - a.count : b.totalScore - a.totalScore);
  box.innerHTML = rows.map(a => `
    <div class="author-card">
      <div class="author-card-header">
        <div class="author-avatar-wrap">
          <img src="${a.avatar}" alt="${escapeHtml(a.name)}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\' fill=\'%232563EB\'><rect width=\'48\' height=\'48\'/></svg>'">
        </div>
        <div class="author-info-wrap">
          <div class="author-name-text">${escapeHtml(a.name)}</div>
          <div class="author-handle-text">
            <a href="https://x.com/${escapeHtml((a.handle || '').replace('@', ''))}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
              ${escapeHtml(a.handle)} ↗
            </a>
          </div>
        </div>
      </div>
      <div class="author-stat-chips">
        <span class="stat-chip chip-score">均分 ${Math.round(a.totalScore / a.count)}</span>
        <span class="stat-chip chip-count">${a.count} 篇推文</span>
        <span class="stat-chip chip-likes">♥ ${formatMetric(a.likes)}</span>
      </div>
      <div class="author-footer-bar">
        <a href="https://x.com/${escapeHtml((a.handle || '').replace('@', ''))}" target="_blank" rel="noopener noreferrer" class="author-profile-btn">
          前往 X 主页 ↗
        </a>
      </div>
    </div>
  `).join('');
}

function renderLinks() {
  const box = document.getElementById('linksVault');
  if (!box) return;
  const data = currentRadarData;
  if (!data || !data.items || !data.items.length) {
    box.innerHTML = '<div class="empty-note">暂无外链资产。</div>';
    return;
  }
  const rows = [];
  const seenUrls = new Set();
  data.items.forEach(item => {
    if (item.links && item.links.length) {
      item.links.forEach(l => {
        const u = (l.url || '').replace(/[),.;]+$/, '').replace(/[?&]twclid=[^&]*/, '');
        if (u && !seenUrls.has(u)) {
          seenUrls.add(u);
          rows.push({
            url: l.url,
            type: l.type || (u.includes('github.com') ? 'github' : u.includes('arxiv') ? 'paper' : 'website'),
            src: item.author.name || item.author.handle || '推文精选',
            title: l.title || u.replace(/^https?:\/\//, '').split('/')[0]
          });
        }
      });
    }
  });
  if (!rows.length) {
    box.innerHTML = '<div class="empty-note">本期推文中没有提取到外链。</div>';
    return;
  }
  box.innerHTML = rows.map(r => {
    const isGithub = r.type === 'github' || r.url.includes('github.com');
    const isPaper = r.type === 'paper' || r.url.includes('arxiv');
    const typeLabel = isGithub ? 'GitHub 仓库' : isPaper ? '论文/ArXiv' : '精选工具/网站';
    const typeClass = isGithub ? 'type-github' : isPaper ? 'type-paper' : 'type-website';
    const displayUrl = r.url.replace(/^https?:\/\//, '').slice(0, 42);

    return `
      <div class="link-vault-card">
        <div class="link-card-top">
          <span class="link-type-pill ${typeClass}">${typeLabel}</span>
          <span class="link-src-pill">via ${escapeHtml(r.src)}</span>
        </div>
        <div class="link-title-text">${escapeHtml(r.title)}</div>
        <div class="link-url-mono">${escapeHtml(displayUrl)}</div>
        <div class="link-actions-row">
          <a href="${escapeHtml(r.url)}" target="_blank" rel="noopener noreferrer" class="link-open-btn">
            打开外链 ↗
          </a>
          <button class="link-copy-btn" onclick="navigator.clipboard.writeText('${escapeHtml(r.url)}'); this.innerText='已复制！'; setTimeout(() => this.innerText='复制链接', 1500);">
            复制链接
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderAbout() {
  // Static content already in index.html
}

function restoreFeedUI() {
  document.body.classList.remove('detail-mode');
  const topNavBar = document.getElementById('topNavBar');
  const mainHeader = document.querySelector('.main-header');
  const navTabs = document.getElementById('navTabs');
  const archiveNotice = document.getElementById('archiveNotice');
  if (topNavBar) topNavBar.style.display = '';
  if (mainHeader) mainHeader.style.display = '';
  if (navTabs) navTabs.style.display = '';
  if (archiveNotice && archiveNotice.textContent.trim()) {
    archiveNotice.style.display = 'flex';
  }
}

function initTheme() {
  const saved = localStorage.getItem('radar_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', saved === 'dark' ? '#0b0f19' : '#fbfaf6');
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('radar_theme', next);
  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', next === 'dark' ? '#0b0f19' : '#fbfaf6');
}

function backToFeed() {
  restoreFeedUI();
  goRoute('home');
  location.hash = '#home';
  setTimeout(() => {
    window.scrollTo({ top: feedScrollPosition, behavior: 'instant' });
  }, 20);
}

function renderArticleDetail(id) {
  const box = document.getElementById('articleDetail');
  const cleanId = String(id || '').replace(/^x-/, '');
  let item = currentRadarData && currentRadarData.items && currentRadarData.items.find(x => {
    if (!x) return false;
    if (x.id === id) return true;
    if (getItemId(x) === id) return true;
    if (cleanId && x.sourceUrl && x.sourceUrl.includes(cleanId)) return true;
    return false;
  });

  if (!item && currentRadarData?.items) {
    const legacyMatch = String(id || '').match(/^tweet-(\d+)$/i);
    if (legacyMatch) {
      const idx = parseInt(legacyMatch[1], 10) - 1;
      item = currentRadarData.items[idx];
    }
  }

  if (!box) return;
  if (!item) {
    box.innerHTML = `
      <article class="article-detail">
        <div class="detail-toolbar">
          <button class="detail-back-btn" onclick="backToFeed()">← 返回今日雷达</button>
        </div>
        <div class="empty-note">
          <h2>找不到该文章或快照尚未载入</h2>
          <p>请点击上方按钮返回今日雷达。</p>
        </div>
      </article>
    `;
    return;
  }
  const media = (item.media || []).filter(m => m && m.url);
  const comments = Array.isArray(item.comments) ? item.comments : [];
  const metrics = item.metrics || {};
  const isStarred = isItemStarred(item);

  box.innerHTML = `
    <article class="article-detail">
      <div class="detail-toolbar">
        <button class="detail-back-btn" onclick="backToFeed()">← 返回今日雷达</button>
        <div class="detail-toolbar-actions">
          <button class="detail-action-btn ${isStarred ? 'starred' : ''}" onclick="toggleStarFromDetail('${item.id}', this)">
            ${ICONS.star} <span class="star-label">${isStarred ? '已收藏' : '收藏'}</span>
          </button>
          <button class="detail-action-btn" onclick="copyDetailLink('${item.id}')">
            ${ICONS.link} 复制分享链接
          </button>
          <a href="${escapeHtml(item.sourceUrl || '#')}" target="_blank" rel="noopener noreferrer" class="detail-action-btn" style="text-decoration: none;">
            在 X 打开 ↗
          </a>
        </div>
      </div>
      <div class="detail-header">
        <div class="detail-kicker">
          <span class="category-pill">${escapeHtml(item.categoryLabel || item.category)}</span>
          ${item.ai?.score ? `<span class="score-badge">${item.ai.score}% MATCH</span>` : ''}
          <span class="detail-date-tag">📅 发布时间：${escapeHtml(item.displayDate || (item.createdAt || '').slice(0, 10))}</span>
        </div>
        <div class="detail-author">
          <div class="avatar-box">
            <img src="${escapeHtml(normalizeImageUrl(item.author?.avatar))}" alt="${escapeHtml(item.author?.name || '作者')}" onerror="this.style.display='none'">
          </div>
          <div>
            <h1>${escapeHtml(item.author?.name || '未知作者')}</h1>
            <div class="author-handle"><a href="https://x.com/${escapeHtml((item.author?.handle || '').replace('@', ''))}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${escapeHtml(item.author?.handle || '')}</a></div>
          </div>
        </div>
        <div class="detail-lede">${escapeHtml(item.content || '')}</div>
      </div>

      <section class="detail-metrics">
        <div><strong>${formatMetric(metrics.reposts)}</strong><span>转发</span></div>
        <div><strong>${formatMetric(metrics.replies)}</strong><span>回复</span></div>
        <div><strong>${formatMetric(metrics.likes)}</strong><span>点赞</span></div>
        <div><strong>${formatMetric(comments.length)}</strong><span>收录评论</span></div>
      </section>

      ${media.length ? `
        <section class="detail-section">
          <div class="detail-section-label">📸 原文配图（点击图片放大浏览）</div>
          <div class="detail-gallery">
            ${media.map((m, i) => {
              const cleanUrl = normalizeImageUrl(m.url);
              return `<img src="${escapeHtml(cleanUrl)}" alt="原文配图 ${i + 1}" loading="lazy" onclick="openLightbox('${escapeHtml(cleanUrl)}')">`;
            }).join('')}
          </div>
        </section>
      ` : ''}

      ${item.links && item.links.length ? `
        <section class="detail-section">
          <div class="detail-section-label">🔗 提取外链资源</div>
          <div class="deep-links-wrap" style="margin-top: 8px;">
            ${item.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="deep-link-chip">
                ${ICONS.link} ${l.title || l.url.replace(/^https?:\/\//, '').slice(0, 32)} ↗
              </a>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <section class="detail-section">
        <div class="detail-section-label">💡 技术洞察与判断</div>
        <div class="opinion-card">
          <strong>${ICONS.sparkle} 推荐理由：</strong>${escapeHtml(item.ai?.whyInteresting || '')}
          <div style="margin-top: 8px;"><strong>行动建议：</strong>${escapeHtml(item.ai?.action || '')}</div>
          <div style="margin-top: 8px; color: #555; font-size: 0.86rem;">${escapeHtml(item.ai?.personalTake || '')}</div>
        </div>
      </section>

      <section class="detail-section">
        <div class="detail-section-label">💬 评论区分析与公开讨论</div>
        <div class="analysis-card">${escapeHtml(item.commentsAnalysis || '本次未抓到可验证的公开回复，详情页不会用虚构内容填充评论区。')}</div>
        <div class="comments-list">
          ${comments.length ? comments.map(c => `
            <div class="comment-row">
              <div class="comment-avatar">
                ${c.avatar ? `<img src="${escapeHtml(normalizeImageUrl(c.avatar))}" alt="${escapeHtml(c.author || '评论者')}">` : ''}
              </div>
              <div style="flex: 1;">
                <div class="comment-meta">${escapeHtml(c.author || 'X 用户')} <span>${escapeHtml(c.handle || '')}</span></div>
                <p>${escapeHtml(c.text || '')}</p>
              </div>
            </div>
          `).join('') : '<div class="empty-note">没有抓到可验证的公开评论。</div>'}
        </div>
      </section>
    </article>
  `;
}

async function handleLocation() {
  const raw = location.hash.replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  const isDetail = parts[0] === 'article';
  document.body.classList.toggle('detail-mode', isDetail);

  const topNavBar = document.getElementById('topNavBar');
  const mainHeader = document.querySelector('.main-header');
  const navTabs = document.getElementById('navTabs');
  const archiveNotice = document.getElementById('archiveNotice');

  if (isDetail) {
    if (topNavBar) topNavBar.style.display = 'none';
    if (mainHeader) mainHeader.style.display = 'none';
    if (navTabs) navTabs.style.display = 'none';
    if (archiveNotice) archiveNotice.style.display = 'none';

    document.querySelectorAll('.route-section').forEach(s => {
      if (s.id === 'route-article') {
        s.style.display = 'block';
        s.classList.add('active');
      } else {
        s.style.display = 'none';
        s.classList.remove('active');
      }
    });

    await ensureDataLoaded();
    renderArticleDetail(decodeURIComponent(parts[1] || ''));
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  restoreFeedUI();
  await goRoute(parts[0] || 'home');
}

document.addEventListener('DOMContentLoaded', async () => {
  initTheme();
  initArchiveDropdown();
  await initRadar();
  await handleLocation();
});

window.addEventListener('hashchange', handleLocation);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox && lightbox.style.display !== 'none') {
      closeLightbox();
      return;
    }
    if (document.body.classList.contains('detail-mode')) {
      backToFeed();
    }
  }
});
