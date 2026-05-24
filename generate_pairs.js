// Generate 144 zodiac pair pages for SEO
const fs = require('fs');
const path = require('path');

const zodiacSigns = [
  { zh: '牡羊座', en: 'aries', element: '火' },
  { zh: '金牛座', en: 'taurus', element: '土' },
  { zh: '雙子座', en: 'gemini', element: '風' },
  { zh: '巨蟹座', en: 'cancer', element: '水' },
  { zh: '獅子座', en: 'leo', element: '火' },
  { zh: '處女座', en: 'virgo', element: '土' },
  { zh: '天秤座', en: 'libra', element: '風' },
  { zh: '天蠍座', en: 'scorpio', element: '水' },
  { zh: '射手座', en: 'sagittarius', element: '火' },
  { zh: '摩羯座', en: 'capricorn', element: '土' },
  { zh: '水瓶座', en: 'aquarius', element: '風' },
  { zh: '雙魚座', en: 'pisces', element: '水' }
];

const elementCompatibility = {
  '火+火': { love: 75, business: 60, communication: 80, desc: '兩個火象星座相遇，猶如烈火燎原，充滿激情與活力。你們在一起時總是充滿歡笑和冒險精神，但有時也可能因為脾氣火爆而產生衝突。' },
  '火+土': { love: 65, business: 85, communication: 70, desc: '火象與土象的結合是理性與激情的碰撞。牡羊、獅子、射手的熱情可以点燃摩羯、處女、金牛的務實精神，但需要學會尊重彼此的節奏。' },
  '火+風': { love: 85, business: 65, communication: 90, desc: '火與風的組合是最具活力的搭檔！風象星座的理性與溝通能力能夠引導火象的熱情，讓想法付諸實踐。你們在一起時總是充滿創意與歡樂。' },
  '火+水': { love: 55, business: 70, communication: 60, desc: '火與水看似不相容，卻能創造獨特的化學反應。火象的積極主動可以帶動水象的情感深度，而水象的柔情也能滋潤火象的衝勁。' },
  '土+土': { love: 70, business: 95, communication: 65, desc: '兩個土象星座的結合如同大地相連，穩定而踏實。你們對生活有著相似的態度，偏好實際與傳統，能夠建立長期穩定的關係，但有時可能顯得過於保守。' },
  '土+風': { love: 60, business: 75, communication: 80, desc: '土與風的組合是務實與智慧的結合。風象的創新思維能夠啟發土象，而土象的穩重也能給風象安全感。這是一個相互學習、共同成長的配對。' },
  '土+水': { love: 80, business: 70, communication: 75, desc: '土與水的組合是情感的滋潤。土象給予水象穩定的依靠，而水象則能觸動土象內心的柔軟。這樣的配對在感情上往往深刻而持久。' },
  '風+風': { love: 65, business: 60, communication: 95, desc: '兩個風象星座相遇，智慧與交流的火花四濺。你們喜歡分享想法、討論理念，溝通順暢無阻，但有時可能過於重視理智而忽略了情感層面。' },
  '風+水': { love: 70, business: 75, communication: 70, desc: '風與水的組合代表理性與情感的平衡。風象的思考能力可以幫助水象理清情緒，而水象的直覺也能給風象帶來深度。這是一個充滿理解與包容的配對。' },
  '水+水': { love: 90, business: 55, communication: 65, desc: '兩個水象星座的結合是情感的深度共鳴。你們能夠深刻理解彼此的感受與需求，情感連結非常強烈，但有時可能因為過度敏感而陷入情緒的漩渦。' }
};

function getElementPair(e1, e2) {
  const elements = [e1, e2].sort();
  const key = `${elements[0]}+${elements[1]}`;
  return elementCompatibility[key] || { love: 70, business: 70, communication: 70, desc: '你們有著獨特的化學反應，在一起時能夠創造出屬於你們的特別默契。' };
}

function calculateScores(i, j) {
  const overall = Math.round((100 - Math.abs(i - j) * 5) % 101);
  const love = Math.round((80 + (i * j) % 20) % 101);
  const business = Math.round((70 + ((i + j) % 30)) % 101);
  const communication = Math.round((75 + ((i ^ j) % 25)) % 101);
  return { overall, love, business, communication };
}

function generatePlanetAspects(i, j) {
  const planets = ['太陽', '月亮', '水星', '金星', '火星', '木星', '土星'];
  const aspects = [
    { symbol: '☌', name: '合相', desc: '兩星體能量相加，帶來強大的行動力與創造力' },
    { symbol: '☍', name: '沖相位', desc: '能量對立，可能帶來張力但也是成長的動力' },
    { symbol: '△', name: '拱相位', desc: '和諧的能量流動，帶來好运與機會' },
    { symbol: '□', name: '刑相位', desc: '挑戰與考驗，但能激發潛能與改變' },
    { symbol: '⚹', name: '半拱', desc: '溫和的助力，帶來小驚喜與順遂' }
  ];
  
  const result = [];
  for (let k = 0; k < 3; k++) {
    const planetIdx1 = (i + k) % 7;
    const planetIdx2 = (j + k * 2) % 7;
    const aspectIdx = (i + j + k) % 5;
    result.push({
      planet1: planets[planetIdx1],
      planet2: planets[planetIdx2],
      ...aspects[aspectIdx]
    });
  }
  return result;
}

function generateLuckyFactors(i, j) {
  const colors = ['紅色', '藍色', '綠色', '紫色', '金色', '銀色', '粉色', '橙色', '白色', '黑色', '黃色', '青色'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  const sign1 = zodiacSigns[i];
  const sign2 = zodiacSigns[j];
  const compatibleIdx = (i * j + 7) % 12;
  const compatibleSign = zodiacSigns[compatibleIdx] ? zodiacSigns[compatibleIdx].zh : '天秤座';
  return {
    color: colors[(i + j) % colors.length],
    number: numbers[(i + j) % numbers.length],
    compatibleSign: compatibleSign
  };
}

function generateFAQs(sign1, sign2, elementPair) {
  return [
    {
      question: `${sign1}與${sign2}的愛情契合度如何？`,
      answer: `${sign1}與${sign2}在愛情上有著${elementPair.love}%的契合度。${elementPair.desc}這個組合需要多溝通、互相理解，才能讓感情更加穩固。`
    },
    {
      question: `${sign1}和${sign2}在事業合作方面適合嗎？`,
      answer: `${sign1}與${sign2}的事業合作指數為${elementPair.business}%。兩人在工作上能夠互補，火象的創意驅動、土象的務實執行、風象的靈活變通、水象的直覺洞察，都是很好的合作資源。`
    },
    {
      question: `${sign1}與${sign2}如何改善溝通？`,
      answer: `溝通是${sign1}與${sign2}相處的關鍵。建議彼此多表達內心感受，學習傾聽對方的想法，避免主觀臆斷。良好的溝通能幫助你們度過任何難關。`
    },
    {
      question: `${sign2}是${sign1}的幸運星座嗎？`,
      answer: `根據星座學分析，${sign2}與${sign1}有著不錯的緣分指数。虽然并非绝对，但兩人在相處中確實能感受到一種特別的吸引力與默契。`
    },
    {
      question: `${sign1}與${sign2}的配對分數是多少？`,
      answer: `${sign1}與${sign2}的綜合配對分數會因為具體出生日期而有所差異。建議使用我們的星座配對工具輸入完整出生資訊，獲得更精準的分析結果。`
    }
  ];
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;');
}

function generatePairPage(sign1, sign2, i, j) {
  const elementPair = getElementPair(sign1.element, sign2.element);
  const scores = calculateScores(i, j);
  const planetAspects = generatePlanetAspects(i, j);
const luckyFactors = generateLuckyFactors(i, j);
  const faqs = generateFAQs(sign1.zh, sign2.zh, elementPair);
  
  const isSameSign = i === j;
  const pageTitle = isSameSign 
    ? `${sign1.zh}與${sign2.zh}同星座配對分析 | 星座命理平台`
    : `${sign1.zh}與${sign2.zh}星座配對分析 | 星座命理平台`;
  
  const metaDesc = `詳細分析${sign1.zh}與${sign2.zh}的愛情、事業、溝通契合度，包含行星相位與運勢建議。${sign1.element}象星座與${sign2.element}象星座的完美搭配。`;
  
  const canonicalUrl = `https://YOUR_DOMAIN/pairs/${sign1.zh}-${sign2.zh}.html`;
  const selfUrl = `https://YOUR_DOMAIN/pairs/${sign1.zh}-${sign2.zh}.html`;
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首頁",
        "item": "https://YOUR_DOMAIN/index.html"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "星座配對",
        "item": "https://YOUR_DOMAIN/compatibility.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${sign1.zh}與${sign2.zh}`,
        "item": selfUrl
      }
    ]
  };
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": metaDesc,
    "author": {
      "@type": "Organization",
      "name": "星座命理平台"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
  };

  const scores_data = {
    overall: isSameSign ? Math.round(85 + (i * 3) % 10) : scores.overall,
    love: elementPair.love,
    business: elementPair.business,
    communication: elementPair.communication
  };

  const page = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(metaDesc)}">
  <meta name="keywords" content="${sign1.zh},${sign2.zh},星座配對,星座合盤,愛情契合度,${sign1.zh}${sign2.zh}配對,星座命理">
  <meta name="robots" content="index, follow">
  <meta name="geo.region" content="TW">
  <meta name="geo.placename" content="Taiwan">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="${canonicalUrl}">
  
  <!-- hreflang tags -->
  <link rel="alternate" hreflang="zh-TW" href="${selfUrl}">
  <link rel="alternate" hreflang="zh-HK" href="${selfUrl}">
  <link rel="alternate" hreflang="x-default" href="${selfUrl}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(metaDesc)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${selfUrl}">
  <meta property="og:locale" content="zh_TW">
  <meta property="og:locale:alternate" content="zh_HK">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(pageTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDesc)}">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
  <script type="application/ld+json">
${JSON.stringify(articleSchema, null, 2)}
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans TC', sans-serif; background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%); color: #fff; min-height: 100vh; }
    .starfield { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
    .star { position: absolute; width: 2px; height: 2px; background: #fff; border-radius: 50%; animation: twinkle 3s infinite; }
    @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; transform: scale(1.5); } }
    .container { position: relative; z-index: 1; max-width: 1000px; margin: 0 auto; padding: 20px; }
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; margin-bottom: 30px; }
    .logo { font-size: 1.3rem; font-weight: 900; background: linear-gradient(135deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .nav-links a { color: #888; text-decoration: none; padding: 8px 15px; font-size: 0.9rem; border-radius: 20px; transition: all 0.3s; }
    .nav-links a:hover, .nav-links a.active { color: #fff; background: rgba(255,255,255,0.1); }
    .page-title { text-align: center; margin-bottom: 30px; }
    .page-title h1 { font-size: 2rem; font-weight: 900; background: linear-gradient(135deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 10px; }
    .breadcrumb { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; color: #888; font-size: 0.9rem; }
    .breadcrumb a { color: #aaa; text-decoration: none; }
    .breadcrumb a:hover { color: #fff; }
    .card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 30px; backdrop-filter: blur(10px); margin-bottom: 25px; }
    .score-section { text-align: center; margin-bottom: 30px; }
    .score-ring { position: relative; width: 180px; height: 180px; margin: 0 auto 20px; }
    .score-ring svg { width: 180px; height: 180px; transform: rotate(-90deg); }
    .score-ring circle { fill: none; stroke-width: 10; }
    .score-ring .bg { stroke: rgba(255,255,255,0.1); }
    .score-ring .fill { stroke: url(#scoreGradient); stroke-linecap: round; stroke-dasharray: 502.65; stroke-dashoffset: 502.65; transition: stroke-dashoffset 1s ease; }
    .score-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
    .score-value { font-size: 3rem; font-weight: 900; background: linear-gradient(135deg, #f093fb, #f5576c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .score-label { color: #888; font-size: 0.85rem; }
    .score-grade { font-size: 1.2rem; font-weight: 700; margin-top: 5px; color: #f093fb; }
    .zodiac-display { display: flex; justify-content: center; align-items: center; gap: 40px; margin: 30px 0; flex-wrap: wrap; }
    .zodiac-item { text-align: center; }
    .zodiac-icon { font-size: 4rem; margin-bottom: 10px; }
    .zodiac-name { font-size: 1.3rem; font-weight: 700; }
    .zodiac-element { font-size: 0.9rem; color: #888; }
    .vs-badge { background: linear-gradient(135deg, #f093fb, #f5576c); padding: 10px 25px; border-radius: 25px; font-weight: 700; font-size: 1.1rem; }
    .subscores { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px; }
    .subscore-item { background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; text-align: center; }
    .subscore-item .label { color: #888; font-size: 0.85rem; margin-bottom: 8px; }
    .subscore-item .value { font-size: 1.8rem; font-weight: 900; background: linear-gradient(135deg, #f093fb, #4facfe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .section-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
    .section-title .icon { font-size: 1.5rem; }
    .description-text { color: #bbb; line-height: 1.9; font-size: 1rem; margin-bottom: 20px; }
    .aspect-list { list-style: none; padding: 0; }
    .aspect-item { display: flex; align-items: center; gap: 15px; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .aspect-item:last-child { border-bottom: none; }
    .aspect-symbol { font-size: 2rem; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.05); border-radius: 10px; }
    .aspect-info { flex: 1; }
    .aspect-planets { font-weight: 700; font-size: 1rem; margin-bottom: 5px; }
    .aspect-name { color: #f093fb; font-size: 0.9rem; margin-bottom: 3px; }
    .aspect-desc { color: #888; font-size: 0.85rem; }
    .lucky-factors { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; }
    .lucky-item { background: rgba(255,255,255,0.05); border-radius: 15px; padding: 20px; text-align: center; }
    .lucky-item .icon { font-size: 2rem; margin-bottom: 10px; }
    .lucky-item .label { color: #888; font-size: 0.85rem; margin-bottom: 5px; }
    .lucky-item .value { font-size: 1.1rem; font-weight: 700; }
    .cta-section { text-align: center; margin-top: 30px; }
    .btn { padding: 15px 40px; border-radius: 25px; border: none; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.3s; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; }
    .btn-primary { background: linear-gradient(135deg, #f093fb, #f5576c); color: #fff; }
    .btn-primary:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(240,147,251,0.3); }
    .faq-item { margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
    .faq-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .faq-q { font-weight: 700; font-size: 1.05rem; margin-bottom: 10px; color: #f093fb; }
    .faq-a { color: #bbb; line-height: 1.8; }
    footer { text-align: center; padding: 30px 0; color: #666; font-size: 0.9rem; }
    footer a { color: #888; text-decoration: none; }
    footer a:hover { color: #fff; }
  </style>
</head>
<body>
  <div class="starfield" id="starfield"></div>
  
  <div class="container">
    <nav class="navbar">
      <div class="logo">✨ 星座命理</div>
      <div class="nav-links">
        <a href="https://YOUR_DOMAIN/index.html">首頁</a>
        <a href="https://YOUR_DOMAIN/natal.html">命盤查詢</a>
        <a href="https://YOUR_DOMAIN/compatibility.html" class="active">星座配對</a>
        <a href="https://YOUR_DOMAIN/horoscope.html">星座運勢</a>
        <a href="https://YOUR_DOMAIN/knowledge.html">星座知識</a>
      </div>
    </nav>
    
    <div class="page-title">
      <div class="breadcrumb">
        <a href="https://YOUR_DOMAIN/index.html">首頁</a>
        <span>›</span>
        <a href="https://YOUR_DOMAIN/compatibility.html">星座配對</a>
        <span>›</span>
        <span>${sign1.zh}與${sign2.zh}</span>
      </div>
      <h1>${sign1.zh}與${sign2.zh}${isSameSign ? '同星座' : ''}配對分析</h1>
    </div>
    
    <div class="card">
      <div class="score-section">
        <div class="zodiac-display">
          <div class="zodiac-item">
            <div class="zodiac-icon">${['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'][i]}</div>
            <div class="zodiac-name">${sign1.zh}</div>
            <div class="zodiac-element">${sign1.element}象星座</div>
          </div>
          <div class="vs-badge">VS</div>
          <div class="zodiac-item">
            <div class="zodiac-icon">${['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'][j]}</div>
            <div class="zodiac-name">${sign2.zh}</div>
            <div class="zodiac-element">${sign2.element}象星座</div>
          </div>
        </div>
        
        <div class="score-ring">
          <svg viewBox="0 0 180 180">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#f093fb"/>
                <stop offset="100%" style="stop-color:#4facfe"/>
              </linearGradient>
            </defs>
            <circle class="bg" cx="90" cy="90" r="80"/>
            <circle class="fill" cx="90" cy="90" r="80" data-score="${scores_data.overall}"/>
          </svg>
          <div class="score-center">
            <div class="score-value">${scores_data.overall}</div>
            <div class="score-label">配對分數</div>
            <div class="score-grade">${scores_data.overall >= 80 ? '極佳' : scores_data.overall >= 60 ? '良好' : scores_data.overall >= 40 ? '普通' : '需努力'}</div>
          </div>
        </div>
        
        <div class="subscores">
          <div class="subscore-item">
            <div class="label">愛情契合度</div>
            <div class="value">${scores_data.love}%</div>
          </div>
          <div class="subscore-item">
            <div class="label">事業合作</div>
            <div class="value">${scores_data.business}%</div>
          </div>
          <div class="subscore-item">
            <div class="label">溝通默契</div>
            <div class="value">${scores_data.communication}%</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h2 class="section-title"><span class="icon">💕</span> 契合度分析</h2>
      <p class="description-text">${elementPair.desc}</p>
      
      <h3 style="color: #f093fb; font-size: 1.1rem; margin-bottom: 15px;">愛情契合度</h3>
      <p class="description-text">${sign1.zh}與${sign2.zh}在愛情方面有著很好的基礎。${sign1.element}象星座的熱情與${sign2.element}象星座的特質相互吸引，在感情中能夠創造出獨特的化學反應。</p>
      
      <h3 style="color: #f093fb; font-size: 1.1rem; margin-bottom: 15px;">溝通方式</h3>
      <p class="description-text">溝通是維繫關係的關鍵。${sign1.zh}與${sign2.zh}需要學會理解彼此的表達方式，才能建立更深层的默契。</p>
      
      <h3 style="color: #f093fb; font-size: 1.1rem; margin-bottom: 15px;">事業合作</h3>
      <p class="description-text">在工作領域，${sign1.zh}與${sign2.zh}能夠發揮各自的優勢，共同達成目標。</p>
      
      <h3 style="color: #f093fb; font-size: 1.1rem; margin-bottom: 15px;">優勢與挑戰</h3>
      <p class="description-text">${sign1.zh}與${sign2.zh}的組合最大的優勢是彼此間的吸引力與成長潛力。主要挑戰在於學會欣賞彼此的不同，並將差異化為關係的助力。</p>
    </div>
    
    <div class="card">
      <h2 class="section-title"><span class="icon">🔮</span> 行星相位分析</h2>
      <ul class="aspect-list">
        ${planetAspects.map(aspect => `
        <li class="aspect-item">
          <div class="aspect-symbol">${aspect.symbol}</div>
          <div class="aspect-info">
            <div class="aspect-planets">${aspect.planet1} vs ${aspect.planet2}</div>
            <div class="aspect-name">${aspect.name}</div>
            <div class="aspect-desc">${aspect.desc}</div>
          </div>
        </li>
        `).join('')}
      </ul>
    </div>
    
    <div class="card">
      <h2 class="section-title"><span class="icon">🍀</span> 幸運因素</h2>
      <div class="lucky-factors">
        <div class="lucky-item">
          <div class="icon">🎨</div>
          <div class="label">幸運顏色</div>
          <div class="value">${luckyFactors.color}</div>
        </div>
        <div class="lucky-item">
          <div class="icon">🔢</div>
          <div class="label">幸運數字</div>
          <div class="value">${luckyFactors.number}</div>
        </div>
        <div class="lucky-item">
          <div class="icon">💝</div>
          <div class="label">速配星座</div>
          <div class="value">${luckyFactors.compatibleSign}</div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h2 class="section-title"><span class="icon">❓</span> 常見問題</h2>
      ${faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-q">${faq.question}</div>
        <div class="faq-a">${faq.answer}</div>
      </div>
      `).join('')}
    </div>
    
    <div class="cta-section">
      <a href="https://YOUR_DOMAIN/natal.html" class="btn btn-primary">🪐 查看完整命盤</a>
    </div>
    
    <footer>
      <p>© 2024 星座命理平台 | <a href="https://YOUR_DOMAIN/index.html">首頁</a> | <a href="https://YOUR_DOMAIN/compatibility.html">星座配對</a></p>
    </footer>
  </div>
  
  <script>
    // Animate score ring on load
    document.addEventListener('DOMContentLoaded', function() {
      const fill = document.querySelector('.score-ring .fill');
      if (fill) {
        const score = parseInt(fill.dataset.score);
        const circumference = 2 * Math.PI * 80;
        const offset = circumference - (score / 100) * circumference;
        setTimeout(() => {
          fill.style.strokeDashoffset = offset;
        }, 300);
      }
      
      // Generate starfield
      const starfield = document.getElementById('starfield');
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starfield.appendChild(star);
      }
    });
  </script>
</body>
</html>`;
  
  return page;
}

// Create pairs directory
const pairsDir = path.join(__dirname, 'pairs');
if (!fs.existsSync(pairsDir)) {
  fs.mkdirSync(pairsDir, { recursive: true });
}

// Generate all 144 pair pages
let count = 0;
for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const sign1 = zodiacSigns[i];
    const sign2 = zodiacSigns[j];
    const filename = `${sign1.zh}-${sign2.zh}.html`;
    const filepath = path.join(pairsDir, filename);
    const content = generatePairPage(sign1, sign2, i, j);
    fs.writeFileSync(filepath, content);
    count++;
  }
}

console.log(`Generated ${count} zodiac pair pages successfully!`);

// Update sitemap.xml with pair pages
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Main Pages -->
  <url>
    <loc>https://YOUR_DOMAIN/index.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/natal.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/compatibility.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/horoscope.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/quiz.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/knowledge.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/games.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/wheel.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://YOUR_DOMAIN/blocks.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <!-- Zodiac Pair Pages -->
`;

for (let i = 0; i < 12; i++) {
  for (let j = 0; j < 12; j++) {
    const sign1 = zodiacSigns[i];
    const sign2 = zodiacSigns[j];
    sitemapContent += `  <url>
    <loc>https://YOUR_DOMAIN/pairs/${sign1.zh}-${sign2.zh}.html</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  }
}

sitemapContent += '</urlset>';
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapContent);
console.log('Updated sitemap.xml with all pair pages');
