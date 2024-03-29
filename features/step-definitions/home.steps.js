const { Given, Then, When } = require('@cucumber/cucumber');

const HomePage = require('../pageobjects/home.page');

Given('I open the application\'s homepage', async function () {
    await HomePage.open();
});

Then('the homepage should be loaded properly', async function () {
    await (await HomePage.headerText).waitForDisplayed()
    await expect(HomePage.headerText).toHaveText(process.env.APP_NAME)
});

When('I enter the product number {string} and the serial number {string}', async function (productNumber, serialNumber) {
    productNumber = process.env.PRODUCT_NUMBER
    serialNumber = process.env.SERIAL_NUMBER

    await (await HomePage.productNumberInput).setValue(productNumber)
    await (await HomePage.serialNumberInput).setValue(serialNumber)
});

When('I click the {string} button', async function (buttonName) {
    await HomePage.searchButton.click()
});

