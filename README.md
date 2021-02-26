# Lokalise tests
Powered by [Playwright](https://playwright.dev/), [TypeScript](https://www.typescriptlang.org/) and [Cucumber](https://cucumber.io/).

## Project overview
Main idea in test design was to build re-usable and isolated test scenarios as per best practices.\
This would give us flexibility to build customizable test suites with tags - each scenario shouldn't be affected by the previous one.\
This was mainly achieved by setting up environment pre-conditions by relying on [Lokalise API V2](https://app.lokalise.com/api2docs/curl/).
### Project structure
```
lokalise-tests-playwright-ts-cucumber
|   features
|   |   stepDefinitions
|   |   |   apiSteps.ts
|   |   |   keys.ts
|   |   |   login.ts
|   |   |   projects.ts
|   |   |   utilSteps.ts
|   |   support
|   |   |   cleanUp.ts
|   |   |   test.setup.ts
|   |   |   types.ts
|   |   keys.feature
|   |   projects.feature
|   screenshots
|   |   screenshot.png
|   |   ...
|   .gitignore
|   cucumber.js
|   package.js
|   README.md
```

## Available Scripts

### Install dependencies
After cloning the project you need to install all dependencies with:
#### `npm install`

### Run tests
The following command will run all `.feature` test scenarios:
####`npm test`

### Run tests in debug mode
Playwright has built in debugging tool called [Playwright Inspector](https://playwright.dev/docs/inspector):
```
PWDEBUG=1 npm run test 
```
To run tests in debug code and print output only in console:
```
# Linux/macOS
$ DEBUG=pw:api npm run test

# Windows
$ set DEBUG=pw:api
$ npm run test
```

### Reporting
After each test execution a self-destructing link to cucumber report gets generated. Example console output:
```
1 scenario (1 passed)
3 steps (3 passed)
0m03.189s (executing steps: 0m02.762s)
┌─────────────────────────────────────────────────────────────┐
│ View your Cucumber Report at:                               │
│ https://reports.cucumber.io/reports/93620547-4791-4365-8441 │
│                                                             │
│ This report will self-destruct in 24h.                      │
│ Keep reports forever: https://reports.cucumber.io/profile   │
└─────────────────────────────────────────────────────────────┘
```

### Clean up
After all scenarios are finished running, clean up function `deleteAllProjects()` is used in cucumber `After` hook.\
This function calls Lokalise project API `https://api.lokalise.com/api2/projects/{project_id}`
and deletes all existing test user's projects by authenticating with the API token.

### Future improvements
- Pass cookies for logged in state to avoid repetitive UI login steps.
- Create a seperate test user in database for each test run.
- Make apiSteps.ts cleaner, create parametrized/reusable JSON 'body' to avoid repetitive steps.
