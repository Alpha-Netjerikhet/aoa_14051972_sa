import { Config } from "protractor";
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
    framework: "jasmine",

    capabilities: {
        browserName: 'chrome',
    },

    directConnect: true,

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