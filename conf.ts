import { SpecReporter } from 'jasmine-spec-reporter';
import { browser, Config } from "protractor";

export let config: Config = {
    framework: "jasmine",

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--start-maximized']
        }
    },

    directConnect: true,

    baseUrl: 'https://demo.applitools.com',

    // specs: ['./specs/TraditionalTests.js'], // tests for non-visual scenarios
    specs: ['./specs/VisualAITests.js'], // tests for visual scenarios

    jasmineNodeOpts: {
        print: function () { }
    },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
}