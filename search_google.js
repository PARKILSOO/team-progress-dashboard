const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });

  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    console.log('Google.com 접속 중...');
    await page.goto('https://www.google.com', { waitUntil: 'load' });

    // 페이지 로딩 후 대기
    await page.waitForTimeout(2000);

    console.log('검색창 클릭 중...');
    const searchBox = await page.$('textarea[aria-label="검색"], input[name="q"]');

    if (searchBox) {
      await searchBox.click();
      await page.waitForTimeout(1000);

      console.log('농협정보시스템 검색 중...');
      await page.type('textarea[aria-label="검색"], input[name="q"]', '농협정보시스템', { delay: 100 });

      await page.waitForTimeout(1000);
      console.log('검색 버튼 클릭 중...');
      await page.press('textarea[aria-label="검색"], input[name="q"]', 'Enter');

      console.log('검색 결과 로딩 중...');
      await page.waitForTimeout(3000);

      console.log('검색 완료!');
      console.log('현재 URL:', page.url());
    } else {
      console.log('검색창을 찾을 수 없습니다.');
    }

    // 페이지를 계속 띄워둠 (자동 닫힘 방지)
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('오류 발생:', error);
  } finally {
    await context.close();
    await browser.close();
  }
})();
