const { Before, BeforeAll, After, AfterAll } = require('@cucumber/cucumber');
const { devices, chromium } = require('playwright');

BeforeAll(async function () {
    // Browsersare expensive in Playwright so only create 1
    global.browser = await chromium.launch({
        // Not headless so we can watch tests run
        headless: false,
        // Slow so we can see things happening
        slowMo: 50,
    });
});

AfterAll(async function () {
    // Close the browser after all scenarios have run
    await global.browser.close();
});

// Create a new test context and page per scenario
Before(async function (this) {
    this.pixel2 = devices['Pixel 2']
    this.context = await global.browser.newContext({
        viewport: pixel2.viewport,
        userAgent: pixel2.userAgent,
    });
    this.page = await this.context.newPage();
});

// Clean up after each scenario
After(async function (this) {
    await this.page.close();
    await this.context.close();
});