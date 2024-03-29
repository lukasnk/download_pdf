const {When, Then} = require('@cucumber/cucumber');

const ProductPage = require('../pageobjects/products.page');

Then('a new page with product information should be displayed', async function () {
    await ProductPage.serialNumberInformation.waitForDisplayed()
    await expect(await ProductPage.serialNumberInformation).toHaveText('SPS2018112729')

});
When('I click on the {string} from the left menu', async function (name) {
    switch (name) {
        case 'Documents':
            await ProductPage.leftMenuDocuments.waitForClickable()
            await ProductPage.leftMenuDocuments.click()
            break;
        default:
            console.log(name + ` not found in the left menu.`);
    }
});

Then('the main page should display available sections', async function (dataTable) {
    const sections = dataTable.rows().map(row => row[0]);

    await expect(await ProductPage.sectionOperation).toHaveText(sections[0]);
    await expect(await ProductPage.sectionDeclarationsCertificates).toHaveText(sections[1]);
    await expect(await ProductPage.sectionDrawingsPlans).toHaveText(sections[2]);
    await expect(await ProductPage.sectionComponents).toHaveText(sections[3]);
});

When(/^I click on the "([^"]*)" document link$/, async function (linkText) {
    linkText = process.env.PDF_NAME
    await ProductPage.clickTitleCardByText(linkText)
});

Then('a new tab with the PDF content should open', async function () {
    await browser.waitUntil(
        async () => (await browser.getWindowHandles()).length > 1,
        {
            timeout: 3000,
            timeoutMsg: 'Expected a new tab to open within 3 seconds, but it did not'
        }
    );

    const allWindowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(allWindowHandles[allWindowHandles.length - 1]);

    const currentUrl = await browser.getUrl();
    const expectedTextInUrl = process.env.PDF_URL;

    expect(currentUrl).toContain(expectedTextInUrl);
});
