const { Given, Then, When } = require('@cucumber/cucumber');

const HomePage = require('../pageobjects/home.page');

Given('I open the application\'s homepage', async function () {
});

Then('the homepage should be loaded properly', async function () {
});

When('I enter the product number {string} and the serial number {string}', async function (productNumber, serialNumber) {
});

When('I click the {string} button', async function (buttonName) {
});

Then('a new page with product information should be displayed', async function () {
});