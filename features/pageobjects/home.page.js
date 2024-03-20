class HomePage {
    get productNumberInput() { return $('#locatorForProductNumber'); }

    async open(url) {
        await browser.url(url);
    }
}

module.exports = new HomePage();