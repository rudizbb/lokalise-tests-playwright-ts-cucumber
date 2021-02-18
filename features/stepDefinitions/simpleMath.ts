import { Given, When, Then } from '@cucumber/cucumber';

const assert = require("assert");

Given('a variable set to {int}', function (number) {
    this.setTo(number);
});

When('I increment the variable by {int}', function (number) {
    this.incrementBy(number)
});

Then('the variable should contain {int}', function (number) {
    assert.strictEqual(this.variable, number);
});
