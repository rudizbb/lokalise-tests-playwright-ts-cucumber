import { When } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

When('user fills required fields to create a new key {string}', async function (this: OurWorld, keyName: string) {
    await this.page.fill("input[id='keyName']", keyName);
    await this.page.fill("div#adddevice_div > div > div > ul > li > input", 'Web');
    await this.page.waitForSelector("div[class='select2-result-label']", { state: 'visible' });
    await this.page.click("div[class='select2-result-label']", { delay: 1000 });
});

When('user adds {string} as translation', async function (this: OurWorld, translation: string) {
    await this.page.type("div.CodeMirror-code > pre > span", translation);
    await this.page.waitForSelector(".save", { state: 'visible' });
    await this.page.click(".save", );
});

When('user adds {string} translation for {string} key', async function (this: OurWorld, translation: string, keyName: string) {
    await this.page.waitForSelector(`div[data-name="${keyName}"]`, { state: 'visible'} );
    await this.page.click(`[data-name="${keyName}"] >> input.thekey`, { delay: 1500 });
    await this.page.selectOption('select#mass.form-control:visible', 'fillwithtext');
    await this.page.fill('#mass-textfield', `${translation}`)
    await this.page.click('#mass-go');
});

When('user sees {string} translation', async function (this: OurWorld, translation: string) {
    await this.page.waitForSelector(`:is(span:has-text('${translation}'), div:has-text('${translation}'))`);
});

When('user clicks on Save button', async function(this: OurWorld) {
    await this.page.click('#btn_addkey', { delay: 1000 });
});

When('user should see his {string} key', async function (this: OurWorld, keyName: string) {
    await this.page.waitForSelector(`//a[contains(text(), '${keyName}')]`, { state: "visible"} );
});
