const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
// }

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get loginBtn() { return $('input.btn_action') }

    get inputUsername() { return $('#user-name') }

    get inputPassword() { return $('#password') }

    get errorInvalidCred() { return $('h3') }


    login(userDetails) {
        this.logToReport(`Login with username: ${userDetails.username} and Password: ${userDetails.password}`)
        this.inputUsername.setValue(userDetails.username);
        this.inputPassword.setValue(userDetails.password);
        this.clickLoginBtn()
    }

    clickLoginBtn() {
        this.logToReport("click on Login button after entering username and password")
        this.loginBtn.click()
    }

    verifyError(error) {
        this.logToReport("verify if proper error is thrown when user enters either invalid username or password")
        wdioExpect(this.errorInvalidCred).toHaveText(error)
    }
}
module.exports = new LoginPage();
