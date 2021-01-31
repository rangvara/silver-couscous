const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
// }

class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pagelabel() { return $('.subheader') }

    get firstName() { return $('#first-name') }

    get lastName() { return $('#last-name') }

    get zipCode() { return $('#postal-code') }

    get continueBtn() { return $('.btn_primary.cart_button') }

    verifyLanding() {
        this.logToReport("Verify application has landed on checkout page")
        $(this.pagelabel).isDisplayed({ timeout: 30000 })
        wdioExpect($(this.pagelabel)).toHaveText('Checkout: Your Information')
    }

    enterShippingDetails(userDetails) {
        this.logToReport("Input firstname, lastname and zip code on checkout page")
        this.firstName.setValue(userDetails.firstName);
        this.lastName.setValue(userDetails.lastName);
        this.zipCode.setValue(userDetails.zipCode);
    }

    clickContinue() {
        this.logToReport("click on Continue button on checkout page")
        this.continueBtn.click()
    }
}

module.exports = new CheckoutPage();
