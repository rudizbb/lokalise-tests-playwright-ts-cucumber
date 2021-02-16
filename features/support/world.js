const { setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require('../../src/lib/CustomWorld');

setWorldConstructor(CustomWorld);
