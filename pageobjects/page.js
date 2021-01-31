const { addStep } = require('@wdio/allure-reporter').default
const { addAttachment } = require('@wdio/allure-reporter').default

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
     * Input value into the text field
     * @param {*} elem : Locator for the input field
     * @param {*} value : Value to be set
     */
    EnterTextValue(elem, value) {
        $(elem).setValue(value)
    }

    /**Add information to the report*/
    logToReport(step) {
        addStep(step)
        console.log(step)
    }

    /** Add screen shot to allure report*/
    attachScreenShotToReport(message, name) {
        var screenShot = browser.saveScreenshot('./screenShot/' + name + '.png')
        addAttachment(message, new Buffer.from(screenShot, 'base64'), 'img/png')
    }
}
