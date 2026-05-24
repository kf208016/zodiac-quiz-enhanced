const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  
  console.log('Testing enhanced natal page...');
  await page.goto('http://localhost:8080/natal.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: '/root/zodiac-quiz-enhanced/screenshot_natal_new.png', fullPage: true });
  console.log('Natal page screenshot saved');
  
  await browser.close();
  console.log('Done');
})();