import { Given } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

const account = { login: 'rblaumanis@gmail.com', password: 'secret_password' };

Given('user is logged in', {timeout: 40 * 1000}, async function(this: OurWorld) {
    await this.page.goto('https://stage.lokalise.com', { waitUntil: 'load', timeout: 25000 });
    await this.page.fill('input[id="signin-email"]', account.login);
    await this.page.fill('input[id="signinPassword"]', account.password);
    await this.page.click('button[id="go-login"]');
    await this.page.waitForSelector("div[id='menu-item__profile']", {state: 'visible', timeout: 15000});
});
