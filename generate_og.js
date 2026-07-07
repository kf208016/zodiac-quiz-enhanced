const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const outputPath = path.join(__dirname, 'og-image.png');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new' });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });

    await page.setContent(
      `<!doctype html>
      <html lang="zh-TW">
      <head>
        <meta charset="utf-8">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap">
        <style>
          * {
            box-sizing: border-box;
          }

          html,
          body {
            width: 1200px;
            height: 630px;
            margin: 0;
            overflow: hidden;
          }

          body {
            display: grid;
            place-items: center;
            color: #fff;
            font-family: 'Noto Sans TC', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background:
              radial-gradient(circle at 18% 22%, rgba(255, 215, 0, 0.2) 0 2px, transparent 3px),
              radial-gradient(circle at 82% 20%, rgba(138, 43, 226, 0.38), transparent 24%),
              radial-gradient(circle at 24% 84%, rgba(0, 191, 255, 0.28), transparent 26%),
              radial-gradient(circle at 76% 78%, rgba(255, 105, 180, 0.22), transparent 24%),
              linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 100%);
          }

          .stars,
          .stars::before,
          .stars::after {
            position: absolute;
            inset: 0;
            content: '';
            background-repeat: repeat;
            opacity: 0.9;
          }

          .stars {
            background-image:
              radial-gradient(circle, rgba(255, 255, 255, 0.95) 0 1px, transparent 1.7px),
              radial-gradient(circle, rgba(255, 215, 0, 0.8) 0 1px, transparent 1.6px);
            background-size: 86px 86px, 132px 132px;
            background-position: 12px 16px, 44px 58px;
          }

          .stars::before {
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0 1.2px, transparent 2px);
            background-size: 152px 152px;
            background-position: 88px 34px;
            filter: blur(0.2px);
          }

          .stars::after {
            background-image: radial-gradient(circle, rgba(255, 255, 255, 0.45) 0 1px, transparent 1.8px);
            background-size: 64px 64px;
            background-position: 18px 42px;
            opacity: 0.42;
          }

          .orbit {
            position: absolute;
            width: 900px;
            height: 900px;
            border: 2px solid rgba(255, 255, 255, 0.08);
            border-radius: 50%;
          }

          .orbit.one {
            transform: rotate(-12deg) translateY(40px);
          }

          .orbit.two {
            width: 720px;
            height: 720px;
            border-color: rgba(255, 215, 0, 0.12);
            transform: rotate(18deg) translateX(40px);
          }

          .card {
            position: relative;
            z-index: 1;
            width: 980px;
            min-height: 390px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 72px 86px;
            text-align: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 32px;
            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.16);
            backdrop-filter: blur(14px);
          }

          h1 {
            margin: 0;
            font-size: 86px;
            font-weight: 900;
            line-height: 1.15;
            letter-spacing: 0;
            text-shadow: 0 0 24px rgba(255, 215, 0, 0.28), 0 6px 28px rgba(0, 0, 0, 0.5);
          }

          p {
            margin: 28px 0 0;
            color: #ffeaa7;
            font-size: 34px;
            font-weight: 700;
            letter-spacing: 0;
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.42);
          }
        </style>
      </head>
      <body>
        <div class="stars"></div>
        <div class="orbit one"></div>
        <div class="orbit two"></div>
        <main class="card">
          <h1>✨ 星座命理平台</h1>
          <p>星座配對・命盤查詢・每日運勢</p>
        </main>
      </body>
      </html>`,
      { waitUntil: 'networkidle0' }
    );

    await page.screenshot({ path: outputPath, type: 'png' });

    const { size } = fs.statSync(outputPath);
    if (size <= 10 * 1024) {
      throw new Error(`og-image.png is only ${size} bytes; expected more than 10KB.`);
    }

    console.log(`Generated og-image.png (${size} bytes)`);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
