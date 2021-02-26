import { World as CucumberWorld } from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright-core";

export interface OurWorld extends CucumberWorld {
  context: BrowserContext;
  page: Page;
}
