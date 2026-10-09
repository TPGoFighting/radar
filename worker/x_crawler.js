// ego-browser crawl script for X Radar (run via: ego-browser nodejs < this-file)
// Do NOT wrap in template literals - this file is fed to ego-browser directly.
const task = await useOrCreateTaskSpace('daily-x-radar-crawler')

async function extractComments(tweet) {
  if (!tweet.url) return []
  try {
    await openOrReuseTab(tweet.url, { wait: true, timeout: 30 })
    await wait(3)
    for (let i = 0; i < 4; i++) { await scrollBy(1200); await wait(1.2) }
    return await js(String.raw`(() => {
      const mainHandle = ${JSON.stringify(tweet.handle || '')}
      const articles = [...document.querySelectorAll('article[data-testid="tweet"]')]
      const rows = []
      const seen = new Set()
      for (const a of articles) {
        const userEl = a.querySelector('[data-testid="User-Name"]')
        const textEl = a.querySelector('[data-testid="tweetText"]')
        const timeEl = a.querySelector('time')
        const avatarEl = a.querySelector('[data-testid="Tweet-User-Avatar"] img') || a.querySelector('img[src*="profile_images"]')
        const text = textEl ? textEl.innerText.trim() : ''
        const userText = userEl ? userEl.innerText : ''
        const handle = (userText.match(/@[\w_]+/) || [''])[0]
        const link = a.querySelector('a[href*="/status/"]')
        if (!text || !handle || handle === mainHandle || seen.has(text.slice(0, 40))) continue
        seen.add(text.slice(0, 40))
        rows.push({
          author: userText.split('\n')[0] || 'X 用户',
          handle,
          text,
          avatar: avatarEl ? avatarEl.src : '',
          time: timeEl ? (timeEl.getAttribute('datetime') || '') : '',
          url: link ? link.href.split('?')[0] : ''
        })
      }
      return rows.slice(0, 8)
    })()`)
  } catch (e) {
    cliLog('COMMENT_FETCH_FAILED ' + (tweet.url || '') + ' ' + e.message)
    return []
  }
}

const homeTab = await openOrReuseTab('https://x.com/home', { wait: true, timeout: 35 })
await wait(4)
for (let i = 0; i < 16; i++) {
  await scrollBy(1500)
  await wait(1.8)
}

try {
  await js(String.raw`(() => {
    const btns = [...document.querySelectorAll('[data-testid="tweet-text-show-more-link"], button[aria-label*="显示更多"], button[aria-label*="Show more"]')]
    for (const b of btns) b.click()
    return btns.length
  })()`)
  await wait(2)
} catch (e) {}

const tweets = await js(String.raw`(() => {
  const articles = [...document.querySelectorAll('article[data-testid="tweet"]')]
  const seen = new Set()
  const results = []
  for (const a of articles) {
    const userEl = a.querySelector('[data-testid="User-Name"]')
    const textEl = a.querySelector('[data-testid="tweetText"]')
    const timeEl = a.querySelector('time')
    const avatarEl = a.querySelector('[data-testid="Tweet-User-Avatar"] img') || a.querySelector('img[src*="profile_images"]')
    const mediaImg = a.querySelector('div[data-testid="tweetPhoto"] img')
    const linkEl = a.querySelector('a[href*="/status/"]')
    const metrics = [...a.querySelectorAll('[role="group"] button')].map(b => b.getAttribute('aria-label') || b.innerText).filter(Boolean)
    const rawLinks = [...a.querySelectorAll('a[href]')].map(x => x.href)
      .filter(h => h && h.startsWith('http'))
      .filter(h => !h.includes('x.com') && !h.includes('twitter.com') && !h.includes('/status/'))
      .filter(h => !h.includes('pbs.twimg.com') && !h.includes('abs.twimg.com') && !h.includes('video.twimg.com'))
      .filter(h => !h.includes('help.twitter.com') && !h.includes('support.twitter.com'))
    const externalLinks = [...new Set(rawLinks)].slice(0, 3)
    const author = userEl ? userEl.innerText.split('\n')[0] : ''
    const handle = userEl ? (userEl.innerText.match(/@[\w_]+/) || [''])[0] : ''
    let text = textEl ? textEl.innerText.trim() : ''
    let prevText
    do {
      prevText = text
      text = text.replace(/(https?:\/\/[^\s\u4e00-\u9fff，。；：！？]*)\n/g, '$1')
    } while (text !== prevText)
    const time = timeEl ? (timeEl.getAttribute('datetime') || timeEl.innerText) : new Date().toISOString()
    const avatar = avatarEl ? avatarEl.src : ''
    const image = mediaImg ? mediaImg.src : ''
    const tweetUrl = linkEl ? linkEl.href.split('?')[0].replace(/\/(analytics|photo\/\d+)$/, '') : ''
    if (text && !seen.has(text.slice(0, 30))) {
      seen.add(text.slice(0, 30))
      results.push({ author, handle, text, time, avatar, image, url: tweetUrl, externalLinks, metricsStr: metrics.join(' | ') })
    }
  }
  return results.slice(0, 50)
})()`)

for (const tweet of tweets.slice(0, 20)) {
  tweet.comments = await extractComments(tweet)
}

cliLog('RAW_DATA_START')
cliLog(JSON.stringify(tweets))
cliLog('RAW_DATA_END')
await completeTaskSpace(task.id, { keep: false })
