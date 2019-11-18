import { SpecReporter } from 'jasmine-spec-reporter';
import { Config } from "protractor";

export let config: Config = {
    framework: "jasmine",

    capabilities: {
        browserName: 'chrome',
    },

    directConnect: true,

    baseUrl: 'https://demo.applitools.com',

    specs: ['./specs/TraditionalTests.js'],

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