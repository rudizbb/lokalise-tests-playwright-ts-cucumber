import { When } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

const expect = require("expect");

When('user opens {string} page', async function(this: OurWorld, page: string) {
    // Use the page instance from the world instance to navigate
    await this.page.goto(`https://stage.lokalise.com/${page}`, { waitUntil: 'load', timeout: 25000 });
});

When('user refreshes the page', async function(this: OurWorld) {
    await this.page.reload();
});

When('user clicks on {string}', async function (this: OurWorld, text: string) {
    await this.page.click(`//*[contains(text(), '${text}')]`, { delay: 1500 });
});

When('user fills required fields to create a new project {string}', async function (this: OurWorld, projectName: string) {
    await this.page.fill("input[id='project-name']", projectName);
});

When('user should see his {string} project', async function (this: OurWorld, projectName: string) {
    await this.page.waitForSelector(`//a[contains(text(), '${projectName}')]`, { state: "visible"} );
});

When('user should see {int} project(s)', async function (this: OurWorld, projectCount: number) {
    await this.page.waitForSelector("div[data-testid='project-sidebar-navigation']",
        { state: "visible"} );
    const length = await this.page.$$eval("div[data-testid='project-sidebar-navigation']",
        (items) => items.length);
    expect(length === projectCount).toBeTruthy();
});
