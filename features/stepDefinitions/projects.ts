import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

const expect = require("expect");

Given('user opens {string}', async function(this: OurWorld, url: string) {
    // Use the page instance from the world instance to navigate
    await this.page.goto(`https://${url}`, { waitUntil: 'load' });
});

When('user refreshes the page', async function(this: OurWorld) {
    await this.page.reload();
});

When('user clicks on {string}', async function (this: OurWorld, text: string) {
    // Scroll to the link
    // await this.page.$eval(`${text}`, (element) => {
    //     element.scrollIntoView();
    // })

    // ...click when it's within the viewport
    //await this.page.waitForTimeout(2000);
    
    await this.page.click(`"${text}"`, { delay: 1000 });
    await this.page.screenshot({ path: 'screenshots/screenshot.png' });
});

// When(/^user clicks on '([^']*)'$/, async function (this: OurWorld, text: string) {
//     // Scroll to the link
//     // await this.page.$eval(`${text}`, (element) => {
//     //     element.scrollIntoView();
//     // })

//     // ...click when it's within the viewport
//     await this.page.click(`${text}`);
//     await this.page.screenshot({ path: 'screenshots/screenshot.png' });
// });

When('user fills required fields to create a new project {string}', async function (this: OurWorld, projectName: string) {
    await this.page.fill("input[id='project-name']", projectName);
});

Then('user should see his {string} project', async function (this: OurWorld, projectName: string) {
    const projectHeaderText = await this.page.textContent('a[data-name="project-name"]');
    console.log(projectHeaderText);
    expect(projectHeaderText).to.equal(projectName);
});

Then('user should see {int} project', async function (this: OurWorld, projectCount: number) {
    const projectCounter = await this.page.$$eval("div[data-testid='project-sidebar-navigation']", 
        (divs, min) => divs.length >= min, projectCount);
});

Then('user should be in project page', async function (this: OurWorld, pageName: string) {
    const heading1Text = (await this.page.textContent('h1'));
});

// textContent includes whitespace, so use this method to trim
// See https://stackoverflow.com/a/42921059
const trimExcessWhiteSpace = (s: string) => s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();