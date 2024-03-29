class PopupPage {
    get acceptCookiesButton() {
        return $('a[aria-label="dismiss cookie message"]');
    }
}

module.exports = new PopupPage();