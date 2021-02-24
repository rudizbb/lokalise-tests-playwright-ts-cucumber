import { World as CucumberWorld } from "@cucumber/cucumber";
import { Browser, BrowserContext, FirefoxBrowser, Page } from "playwright";
export interface OurWorld extends CucumberWorld {
  context: BrowserContext;
  page: Page;
  browser: FirefoxBrowser;
}