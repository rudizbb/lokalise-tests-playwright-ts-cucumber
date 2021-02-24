import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../support/types";

const API_KEY = "31b86d9fb199af60f82e18402875783aee8e182d"

const assert = require("assert");

const account = { login: '', password: '' };

Given('user is logged in', {timeout: 60 * 1000}, async function(this: OurWorld) {
    await this.page.goto('https://stage.lokalise.com', { waitUntil: 'load', timeout: 25000 });
    await this.page.fill('input[id="signin-email"]', account.login);
    await this.page.fill('input[id="signinPassword"]', account.password);
    await this.page.click('button[id="go-login"]');
    await this.page.waitForSelector("div[id='menu-item__profile']", {state: 'visible', timeout: 15000});

    //await this.page.screenshot({ path: 'screenshots/screenshot.png' });
});