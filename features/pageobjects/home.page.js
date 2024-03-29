class HomePage {
    get productNumberInput() { return $('#locatorForProductNumber'); }

    get headerText(){
        return $('header h1');
    }
    get productNumberInput() {
        return $('input[formcontrolname="productnumber"]');
    }
    get serialNumberInput() {
        return $('input[formcontrolname="serialnumber"]');
    }
    get searchButton() {
        return  $('span=Search');
    }

    async open(url) {
        await browser.url(process.env.BASE_URL);
        await browser.maximizeWindow();
    }
}

module.exports = new HomePage();