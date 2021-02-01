# 

## Steps to get started 
1. git clone the develop branch of the repository
*git clone -b develop https://github.com/abhi9b2/webdriverIO-UIAutomation.git*
2. Navigate to the base folder using cd webdriverIO-UIAutomation
3. Install dependencies using *npm install*


## Automation script execution
1. *npx wdio wdio.conf.js* or
node_modules/.bin/wdio wdio.conf.js

2. For headless chrome run, you can choose wdio.headless.conf.js. Please use below command for headless run
node_modules/.bin/wdio wdio.headless.conf.js


## Reporting frameworks integrated in the framework
1) Dot
2) Spec
3) Allure Report


## Custom Script for allure Report generation-
1. *npm run allureGenerate* or
*allure generate ./allure_results —clean*

2. *allure open*

**Note** - You need to install allure command line tools to generate the reports. This has been mentioned as a dev dependency in package.json. Alternatively, use below command
*npm install -g allure-commandline --save-dev*


## Page Object Model

* The project demonstrates a simple setup for a wdio test suite with page objects. 
* There is a page object for each page that gets tested. We have a parent page.js object that contains all important selectors and methods 
* Other pages inherit the parent page.js. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place.


## Cross Browser testing
* Chrome (chromedriver)
* Firefox (Geckodriver)- You must have firefox installed on your machine. Download latest geckodriver from (https://github.com/mozilla/geckodriver/releases)
Note - 1. [Driver Binaries · WebdriverIO](https://webdriver.io/docs/driverbinaries.html#download-geckodriver) has extensive details on driver binaries to enable cross-browser  testing
2. You need to manually start geckodriver e.g geckodriver --port 4444


## Assertion Libraries used 
1. chai
2. expect-webdriverio (https://www.npmjs.com/package/expect-webdriverio) 
Note - for wdio v6, by default you will have access to all the assertions from expect-webdriverio out of the box. Documentation available at(https://webdriver.io/docs/assertion.html#migrating-from-chai)

