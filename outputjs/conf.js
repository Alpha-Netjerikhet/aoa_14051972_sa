"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
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
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};
