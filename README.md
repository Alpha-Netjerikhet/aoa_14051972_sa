# aoa_14051972_sa

### This is a test project for the Applitools hackathon, created with typescript and protractor.

**Technical summary**

*Dependencies to be added:* 
"@types/jasmine": "^3.4.6"

*devDependencies to be added:*
"@types/node": "^12.12.7",
"jasmine": "^3.5.0",
"protractor": "^5.4.2",
"typescript": "^3.7.2"

*To convert typescript to js and to run tests, the following is added to package.json:*
  "scripts": {
    "tsc": "tsc",
    "pretest": "npm run tsc",
    "test": "protractor outputjs/conf.js"
  }

*Added to tsconfig:*
"outDir": "outputjs",
"types": ["jasmine", "node"],
"exclude": ["node_modules/*"] // to not transpile any ts file in node_modules folder

## How to download test code and use it
1. Install node
1. Clone project
2. To add all dependencies run: npm install
3. To update webdriver-manager locally, run the following:
   node node_modules/protractor/bin/webdriver-manager update
4. To run tests: npm run test
