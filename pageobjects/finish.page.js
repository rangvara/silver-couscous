const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
// }

class FinishPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pageTitle() { return $('.subheader') }

    get getConfirmationHeader() { return $('.complete-header') }

    get getConfirmationText() { return (".complete-text") }

    verifyLanding() {
        this.logToReport("Verify user has successfully completed the order and  landed on Finish page")
        $(this.pageTitle).isDisplayed({ timeout: 30000 })
        wdioExpect($(this.pageTitle)).toHaveText("Finish")
    }

    verifyConfirmationMsg(confirmationText) {
        this.logToReport("Verify confirmation messages on final page")
        expect($(this.getConfirmationHeader).getText()).to.equal(confirmationText.header)
        expect($(this.getConfirmationText).getText()).to.equal(confirmationText.text)
    }


}

module.exports = new FinishPage();
