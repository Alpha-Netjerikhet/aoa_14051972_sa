"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HackathonAppPage = /** @class */ (function () {
    function HackathonAppPage() {
        var _this = this;
        this.logo = protractor_1.element(protractor_1.by.css('.logo-w img'));
        this.headerEl = protractor_1.element(protractor_1.by.className('auth-header'));
        this.formGroup = protractor_1.element.all(protractor_1.by.className('form-group'));
        this.userNameField = protractor_1.element(protractor_1.by.id('username'));
        this.passwordField = protractor_1.element(protractor_1.by.id('password'));
        this.loginBtn = protractor_1.element(protractor_1.by.partialButtonText('Log In'));
        this.userIcon = protractor_1.element(protractor_1.by.className('os-icon-user-male-circle'));
        this.fingerprintIcon = protractor_1.element(protractor_1.by.className('os-icon-fingerprint'));
        this.rememberMeCheckbox = protractor_1.element(protractor_1.by.className('form-check-input'));
        this.rememberMeLabel = protractor_1.element(protractor_1.by.className('form-check-label'));
        this.socialMediaIcons = protractor_1.element.all(protractor_1.by.css('form img'));
        this.alertWarning = protractor_1.element(protractor_1.by.className('alert alert-warning'));
        this.transactionsTable = protractor_1.element(protractor_1.by.css('#transactionsTable'));
        this.amountColumnHeader = protractor_1.element(protractor_1.by.css('#amount'));
        this.loggedUser = protractor_1.element(protractor_1.by.css('.top-bar .logged-user-w'));
        this.compareExpensesLink = protractor_1.element(protractor_1.by.id('showExpensesChart'));
        this.canvas = protractor_1.element(protractor_1.by.id('canvas'));
        this.flashSale1Container = protractor_1.element(protractor_1.by.id('flashSale'));
        this.flashSale2Container = protractor_1.element(protractor_1.by.id('flashSale2'));
        this.isSorted = function (actualAmounts) { return __awaiter(_this, void 0, void 0, function () {
            var isSorted, i, el1, el2;
            return __generator(this, function (_a) {
                isSorted = true;
                for (i = 0; i < actualAmounts.length - 1; i++) {
                    el1 = actualAmounts[i].replace(',', '').replace('+ ', '+').replace('- ', '-');
                    el2 = actualAmounts[i + 1].replace(',', '').replace('+ ', '+').replace('- ', '-');
                    if (parseFloat(el1) > parseFloat(el2)) {
                        isSorted = false;
                        break;
                    }
                }
                return [2 /*return*/, isSorted];
            });
        }); };
    }
    HackathonAppPage.prototype.get = function (withAds) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = 'https://demo.applitools.com/hackathon.html';
                        // let url: string = 'https://demo.applitools.com/hackathonV2.html';
                        protractor_1.browser.waitForAngularEnabled(false);
                        if (withAds) {
                            url += '?showAd=true';
                        }
                        return [4 /*yield*/, protractor_1.browser.get(url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HackathonAppPage.prototype, "$logo", {
        /**
         * Getter $logo
         * @return {ElementFinder }
         */
        get: function () {
            return this.logo;
        },
        /**
         * Setter $logo
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.logo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$headerEl", {
        /**
         * Getter $headerEl
         * @return {ElementFinder }
         */
        get: function () {
            return this.headerEl;
        },
        /**
         * Setter $headerEl
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.headerEl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$formGroup", {
        /**
         * Getter $formGroup
         * @return {ElementArrayFinder }
         */
        get: function () {
            return this.formGroup;
        },
        /**
         * Setter $formGroup
         * @param {ElementArrayFinder } value
         */
        set: function (value) {
            this.formGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$userNameField", {
        /**
         * Getter $userNameField
         * @return {ElementFinder }
         */
        get: function () {
            return this.userNameField;
        },
        /**
         * Setter $userNameField
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.userNameField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$passwordField", {
        /**
         * Getter $passwordField
         * @return {ElementFinder }
         */
        get: function () {
            return this.passwordField;
        },
        /**
         * Setter $passwordField
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.passwordField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$loginBtn", {
        /**
         * Getter $loginBtn
         * @return {ElementFinder }
         */
        get: function () {
            return this.loginBtn;
        },
        /**
         * Setter $loginBtn
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.loginBtn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$userIcon", {
        /**
         * Getter $userIcon
         * @return {ElementFinder }
         */
        get: function () {
            return this.userIcon;
        },
        /**
         * Setter $userIcon
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.userIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$fingerprintIcon", {
        /**
         * Getter $fingerprintIcon
         * @return {ElementFinder }
         */
        get: function () {
            return this.fingerprintIcon;
        },
        /**
         * Setter $fingerprintIcon
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.fingerprintIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$rememberMeCheckbox", {
        /**
         * Getter $rememberMeCheckbox
         * @return {ElementFinder }
         */
        get: function () {
            return this.rememberMeCheckbox;
        },
        /**
         * Setter $rememberMeCheckbox
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.rememberMeCheckbox = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$rememberMeLabel", {
        /**
         * Getter $rememberMeLabel
         * @return {ElementFinder }
         */
        get: function () {
            return this.rememberMeLabel;
        },
        /**
         * Setter $rememberMeLabel
         * @param {ElementFinder } value
         */
        set: function (value) {
            this.rememberMeLabel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$socialMediaIcons", {
        /**
         * Getter $socialMediaIcons
         * @return {ElementArrayFinder }
         */
        get: function () {
            return this.socialMediaIcons;
        },
        /**
         * Setter $socialMediaIcons
         * @param {ElementArrayFinder } value
         */
        set: function (value) {
            this.socialMediaIcons = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$alertWarning", {
        /**
        * Getter $alertWarning
        * @return {ElementArrayFinder }
        */
        get: function () {
            return this.alertWarning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$transactionsTable", {
        /**
        * Getter $transactionsTable
        * @return {ElementFinder }
        */
        get: function () {
            return this.transactionsTable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$amountColumnHeader", {
        /**
        * Getter $amountColumnHeader
        * @return {ElementFinder }
        */
        get: function () {
            return this.amountColumnHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$loggedUser", {
        /**
        * Getter $loggedUser
        * @return {ElementFinder }
        */
        get: function () {
            return this.loggedUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$compareExpensesLink", {
        /**
        * Getter $compareExpensesLink
        * @return {ElementFinder }
        */
        get: function () {
            return this.compareExpensesLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$canvas", {
        /**
        * Getter $canvas
        * @return {ElementFinder }
        */
        get: function () {
            return this.canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$flashSale1Container", {
        /**
        * Getter $flashSale1Container
        * @return {ElementFinder }
        */
        get: function () {
            return this.flashSale1Container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonAppPage.prototype, "$flashSale2Container", {
        /**
        * Getter $flashSale2Container
        * @return {ElementFinder }
        */
        get: function () {
            return this.flashSale2Container;
        },
        enumerable: true,
        configurable: true
    });
    HackathonAppPage.prototype.loginWithCredentials = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userNameField.clear()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userNameField.sendKeys(username)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.passwordField.clear()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.passwordField.sendKeys(password)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loginBtn.click()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HackathonAppPage;
}());
exports.HackathonAppPage = HackathonAppPage;
