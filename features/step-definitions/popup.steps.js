const { Given, Then, When } = require('@cucumber/cucumber');

const PopupPage = require('../pageobjects/popup.page.js');
Given(/^I accept the cookie consent$/, async function () {
    await PopupPage.acceptCookiesButton.waitForExist()
    await PopupPage.acceptCookiesButton.click()
});