const loginPage = require('../../pageobjects/login.page');
const testData = require('../../data/Purchase.json')
const productsPage = require('../../pageobjects/products.page');
const cartPage = require('../../pageobjects/cart.page');
const checkoutPage = require('../../pageobjects/checkout.page');
const overviewPage = require('../../pageobjects/overview.page');
const finishPage = require('../../pageobjects/finish.page');


describe('Automation for a Demo application with WebDriverio assignment', () => {

    it('TC_1.1:Verify that the Application throws an error when user attempts login with a wrong username', () => {
        loginPage.login(testData['TC_1.1'].userDetails)
        loginPage.verifyError(testData['TC_1.1'].userDetails.error)
    });


    it('TC_1.2:Verify User is unable to login with a correct username and wrong password', () => {
        loginPage.login(testData['TC_1.2'].userDetails)
        loginPage.verifyError(testData['TC_1.2'].userDetails.error)
    });


    it('TC_1.3:Verify landing to Products page with correct username and password', () => {
        loginPage.login(testData.userDetails)
        productsPage.verifyLanding()
    });


    it('TC_1.4:Verify Cart icon shows the number of product after clicking  "Add to Cart" for a product', () => {
        loginPage.login(testData.userDetails)
        productsPage.verifyLanding()
        productsPage.addToCart()
        productsPage.verifyCartIcon()
    });


    it(`TC_1.5:Verify that a user is able to add a product to cart, perform checkout, udpate shipping details and validate product details on final page`, () => {
        loginPage.login(testData['TC_1.5'].userDetails)
        productsPage.verifyLanding()
        productsPage.addToCart()
        const values = productsPage.captureProductDetails()
        productsPage.clickOnCart()
        cartPage.verifyLanding()
        cartPage.verifyProductDetails(values)
        cartPage.clickCheckout()
        checkoutPage.verifyLanding()
        checkoutPage.enterShippingDetails(testData['TC_1.5'].userDetails)
        checkoutPage.clickContinue()
        overviewPage.verifyLanding()
        overviewPage.verifyShippingInfo(testData['TC_1.5'].userDetails.shippingInfo)
        overviewPage.verifypaymentInfo(values)
        overviewPage.clickFinish()
        finishPage.verifyLanding()
        finishPage.verifyConfirmationMsg(testData['TC_1.5'].userDetails.confirmationText)
    });

});

