import { Then } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

Then('framework takes a screenshot', async function (this: OurWorld) {
    await this.page.screenshot({ path: 'screenshots/screenshot.png' });
});
