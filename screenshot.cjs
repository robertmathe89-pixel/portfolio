const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);

  // Capabilities
  await page.evaluate(() => document.querySelector('#capabilities').scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'preview-capabilities.png' });

  // Work
  await page.evaluate(() => document.querySelector('#work').scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'preview-work.png' });

  // Testimonials
  await page.evaluate(() => document.querySelector('#testimonials').scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'preview-testimonials.png' });

  // Contact
  await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'preview-contact.png' });

  // Mobile menu open
  const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobile.goto('http://localhost:5173/');
  await mobile.waitForTimeout(1500);
  await mobile.click('button[aria-label="Open menu"]');
  await mobile.waitForTimeout(600);
  await mobile.screenshot({ path: 'preview-mobile-menu.png' });

  await browser.close();
  console.log('Done');
})();
