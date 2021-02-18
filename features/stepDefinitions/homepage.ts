import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

const assert = require("assert");

Given('I view {string}', async function(this: OurWorld, url: string) {
    // Use the page instance from the world instance to navigate
    await this.page.goto(`https://${url}`);
});

When(/^I click '([^']*)'$/, async function (this: OurWorld, text: string) {
    // Scroll to the link
    await this.page.$eval(`"${text}"`, (element) => {
        element.scrollIntoView();
    })

    // ...then click it now it's within the viewport
    await this.page.click(`"${text}"`);
});

Then('I expect to be on the accessibility page', async function (this: OurWorld) {
    const heading1Text = (await this.page.textContent('h1'));
    assert.strictEqual(trimExcessWhiteSpace(heading1Text), "Accessibility statement");
});

// textContent includes whitespace, so use this method to trim
// See https://stackoverflow.com/a/42921059
const trimExcessWhiteSpace = (s: string) => s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();