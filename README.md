# aoa_14051972_sa

### This is a test project for the Applitools hackathon, created with typescript and protractor.

**Technical summary**

_Dependencies to be added:_
"@types/jasmine": "^3.4.6",
"@types/lodash.isequal": "^4.5.5",
"lodash.isequal": "^4.5.0",
"webdriver-manager": "^12.1.7"

_devDependencies to be added:_
"@types/node": "^12.12.7",
"jasmine": "^3.5.0",
"jasmine-spec-reporter": "^4.2.1",
"protractor": "^5.4.2",
"typescript": "3.6.4"

_To convert typescript to js and to run tests, the following is added to package.json:_
"scripts": {
"tsc": "tsc",
"pretest": "npm run tsc",
"test": "protractor outputjs/conf.js"
}

_Added to tsconfig:_
"outDir": "outputjs",
"types": ["jasmine", "node"],
"exclude": ["node_modules/*"] // to not transpile any ts file in node_modules folder

## How to download test framework and use it

1. Install node on your pc
2. Clone project
3. Go to the cloned project's folder, then add all dependencies by running: npm install
4. To update webdriver-manager locally, run the following:
   node node_modules/protractor/bin/webdriver-manager update
5. To install the Applitools SDK for protractor, run the following:
   npm install eyes.selenium --save-dev
6. To run tests: npm run test

## Notes

1. In **conf.ts** needed spec file for testing can be selected/unselected by uncommenting/commenting:
   **TraditionalTests.js** which contains tests for non-visual scenarios
   **VisualAITests.js** which contains tests for visual scenarios

2. Spec files and page objects are found in **/specs** directory

3. In **applitools.pageobject.ts** set your applitools api key:
   **const applitoolsApiKey** = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

4. In **applitools.pageobject.ts** needed url v1/v2 can be selected also by commenting/uncommenting:
   **private url: string = browser.baseUrl + '/hackathon.html';** (is used for V1 app)
   **private url: string = browser.baseUrl + '/hackathonV2.html';** (is used for V2 app)
