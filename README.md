# TP X RADAR (加油T小P 专属技术情报雷达)

> **Owner**: 唐潘（加油T小P / [@TPGoFighting](https://github.com/TPGoFighting)）  
> **定位**: 南京邮电大学软件工程 × 字节前端 · 个人 AI Agent、前沿工程与设计资产雷达

---

## 架构

```text
[X Timeline] 
      ↓ (ego-browser 真实登录态采集)
[worker/run-daily.js] 
      ↓ (根据 config/interests.json 智能过滤、多维打分、外链深挖、趋势聚类)
[data/latest.json] & [data/archive/YYYY-MM-DD.json]
      ↓ (纯静态前端直读，零服务器依赖)
[index.html + css/memphis.css + js/render.js] (孟菲斯设计 / 纯 SVG / 响应式)
```

## 常用命令

### 1. 手动触发当日抓取与情报分析
```bash
node worker/run-daily.js
```

### 2. 本地预览雷达页面
```bash
# 推荐使用轻量本地服务（避免浏览器 file:// 跨域拦截）：
python3 -m http.server 8080
# 浏览器访问 http://localhost:8080
```

### 3. 配置 macOS 每日早 8:00 自动运行
```bash
cp config/com.tylertang.xradar.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.tylertang.xradar.plist
```

### 4. 线上访问
- **Cloudflare Pages**: [https://x-intelligence.pages.dev](https://x-intelligence.pages.dev)
- **GitHub 仓库**: [https://github.com/TPGoFighting/x-intelligence](https://github.com/TPGoFighting/x-intelligence)
