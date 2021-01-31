const defaults = require('./wdio.conf.js')
const merge = require('lodash.merge')

exports.config = merge(defaults.config, {

    capabilities: [{
        "goog:chromeOptions": {
            args: ['--headless', '--window-size=1366x768']
        },
        acceptInsecureCerts: true
    }],

    path: '/wd/hub',
}, { clone: false });
