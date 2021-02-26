import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import { devices, chromium, ChromiumBrowser, firefox } from "playwright-core";
import { OurWorld } from "./types";
import { deleteAllProjects } from "./cleanUp";

// Set default step timeout
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(15 * 1000);

declare global {
    namespace NodeJS {
        interface Global {
            browser: ChromiumBrowser;
        }
    }
}

BeforeAll(async function () {
    // Create new browser instance
    global.browser = await chromium.launch({
        // Not headless so we can watch tests run
        headless: false,
        // Slow so we can see things happening
        slowMo: 100
    });
});

AfterAll(async function () {
    // Close the browser after all scenarios have run
    await global.browser.close();
});

// Create a new test context and page per scenario
Before(async function (this: OurWorld) {
    this.context = await global.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultNavigationTimeout(15000);
});

// Clean up after each scenario
After(async function (this: OurWorld) {
    // Clean up by removing all projects
    await deleteAllProjects();

    // Save storage state and store as an env variable
    await this.page.close();
    await this.context.close();
});
