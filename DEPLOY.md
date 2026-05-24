# 🚀 星座命理平台 — 部署指南

## GitHub Pages 部署（推薦）

### 方式一：使用 GitHub CLI（建議）

```bash
# 1. 進入專案目錄
cd /root/zodiac-quiz-enhanced

# 2. 確認 remote
git remote -v

# 3. 如果還沒有設定 GitHub 認證，先設定
gh auth login

# 4. 推送 main 分支
git push -u origin main --force

# 5. 等待 2-3 分鐘後，網站就會上線
# https://kf208016.github.io/zodiac-quiz-enhanced/
```

### 方式二：手動上傳

1. **打包檔案**
```bash
cd /root/zodiac-quiz-enhanced
rm -rf node_modules *.png screenshot*.js
zip -r zodiac-site.zip *.html .gitignore
```

2. **手動上傳**
- 前往 https://github.com/kf208016/zodiac-quiz
- 點擊 "Add file" → "Upload files"
- 拖曳所有 `.html` 檔案和 `.gitignore`
- Commit changes

3. **啟用 GitHub Pages**
- 進入 Repo → Settings → Pages
- Source: Deploy from a branch
- Branch: main / (root)
- Save

4. **等待 2-5 分鐘，網址上線**
- 網址: https://kf208016.github.io/zodiac-quiz-enhanced/

---

## 已建立的檔案

| 檔案 | 大小 | 說明 |
|------|------|------|
| `index.html` | 22 KB | 首頁（含幸運輪播、訂閱、聯盟行銷）|
| `compatibility.html` | 37 KB | 愛情合盤分析 |
| `horoscope.html` | 28 KB | 星座運勢（含通知功能）|
| `natal.html` | 27 KB | 專業命盤查詢 |
| `quiz.html` | 22 KB | 心理測驗遊戲 |
| `knowledge.html` | 15 KB | 星座知識庫 |
| `games.html` | 31 KB | 三合一遊戲中心 |

---

## 功能測試

本機測試網址：`http://localhost:8080`

- 首頁：http://localhost:8080/index.html
- 遊戲：http://localhost:8080/games.html
- 命盤：http://localhost:8080/natal.html
- 配對：http://localhost:8080/compatibility.html
- 運勢：http://localhost:8080/horoscope.html

---

## 下一步

部署完成後，可以：
1. 在 Facebook 粉絲頁分享網址
2. 申請 Google AdSense
3. 設定域名（可選）
4. 分析流量，持續優化