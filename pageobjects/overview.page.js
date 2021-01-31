const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
// }

class OverviewPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pageTitle() { return $('.subheader') }

    get clickFinish() { return $('.btn_action.cart_button') }

    get shippingInfo() { return ("//*[@class='summary_value_label'][2]") }

    // get shippingInfo () {return('.summary_info:nth-child(4)')}

    get paymentInfo() { return ('.summary_info_label') }

    get productPrice() { return ('.summary_subtotal_label') }

    get finishBtn() { return ('.btn_action.cart_button') }


    verifyLanding() {
        this.logToReport("Verify application has landed on Checkout: Overview page")
        $(this.pageTitle).isDisplayed({ timeout: 30000 })
        wdioExpect($(this.pageTitle)).toHaveText("Checkout: Overview")
    }


    verifyShippingInfo(shippingInfo) {
        this.logToReport("Verify shipping information on Checkout: Overview page")
        expect($(this.shippingInfo).getText()).to.equal(shippingInfo)
    }

    verifypaymentInfo(values) {
        this.logToReport("Verify payment information on Checkout: Overview page")
        expect($(this.paymentInfo).getText()).to.equal("Payment Information:")
        const price = $(this.productPrice).getText().substr(12)
        expect(price).to.equal(values.price)
    }

    clickFinish() {
        this.logToReport("click on Finish button on overview page")
        $(this.finishBtn).click()
    }
}
module.exports = new OverviewPage();
