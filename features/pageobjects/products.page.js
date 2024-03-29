class ProductsPage {
    get serialNumberInformation() {
        return $('div.aside-top .aside-product');
    }
    get leftMenuDocuments(){
        return $$('ul.aside-menu li')[1]
    }
    get sectionOperation() {
        return $$('h3.docsections')[0];
    }
    get sectionDeclarationsCertificates() {
        return $$('h3.docsections')[1];
    }
    get sectionDrawingsPlans() {
        return $$('h3.docsections')[2];
    }
    get sectionComponents() {
        return $$('h3.docsections')[3];
    }
    get getTitleCards() {
        return $$('h3.card-title');
    }
    async clickTitleCardByText(text) {
        const titleCards = await this.getTitleCards;
        for (const titleCard of titleCards) {
            const titleText = await titleCard.getText();
            if (titleText.includes(text)) {
                await titleCard.click();
                return;
            }
        }
        throw new Error(`No title card found containing text: "${text}"`);
    }

}

module.exports = new ProductsPage();