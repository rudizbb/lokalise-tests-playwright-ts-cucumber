const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

Given('I view {string}', async function(this, url) {
    // Use the page instance from the world instance to navigate
    await this.page.goto(`https://${url}`);
});

When(/^I click '([^']*)'$/, async function (this, text) {
    // Scroll to the link
    await this.page.$eval(`"${text}"`, (element) => {
        element.scrollIntoView();
    })

    // ...then click it now it's within the viewport
    await this.page.click(`"${text}"`);
});

Then('I expect to be on the accessibility page', async function (this) {
    const heading1Text = (await this.page.textContent('h1'));
    assert.equal(trimExcessWhiteSpace(heading1Text), "Accessibility statment");
});

// textContent includes whitespace, so use this method to trim
// See https://stackoverflow.com/a/42921059
const trimExcessWhiteSpace = (s) => s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();