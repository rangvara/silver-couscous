const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
// }

class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pagelabel() { return $('.product_label') }
    get appLogo() { return $('.app_logo') }
    get addtoCart() { return $("//button[.='ADD TO CART']") }
    get cartIcon() { return $("//*[@data-icon='shopping-cart']") }
    get NoOfProductOnCartIcon() { return $('.fa-layers-counter.shopping_cart_badge') }
    get logoutBtn() { return $('.bm-burger-button') }
    get itemPrice() { return $('.inventory_item_price') }
    get itemDescription() { return $('.inventory_item_desc') }


    verifyLanding() {
        this.logToReport("Verify application icon and page Title on Products page")
        $(this.pagelabel).isDisplayed({ timeout: 30000 })
        wdioExpect($(this.pagelabel)).toHaveText('Products')
    }

    verifyError(error) {
        this.logToReport("Verify Error when user tries to login with an incorrect username or password")
        wdioExpect(this.errorInvalidUser).toHaveText(error)
    }

    addToCart() {
        this.logToReport("clicking on 'Add to Cart' button")
        $(this.addtoCart).click()
    }

    verifyCartIcon() {
        this.logToReport("Verifying the no of product in cart Icon on left top corner of application")
        expect($(this.NoOfProductOnCartIcon).getText()).to.equal('1')
        browser.reloadSession()
    }

    clickOnCart() {
        this.logToReport("Clicking on cart Icon")
        $(this.cartIcon).click()
    }

    captureProductDetails() {
        this.logToReport("Capturing the product description and amount from products page")
        let desc = $(this.itemDescription).getText(),
            price = $(this.itemPrice).getText()
        return { desc, price }
    }
}
module.exports = new ProductPage();
