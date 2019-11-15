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
var traditionaltests_pageobject_1 = require("./traditionaltests.pageobject");
describe('Version 1 hackathon app', function () {
    var appPage;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            appPage = new traditionaltests_pageobject_1.HackathonAppPage();
            appPage.get();
            return [2 /*return*/];
        });
    }); });
    it('Login Page UI Elements Test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, appPage.$logo.isDisplayed()];
                case 1:
                    _a.apply(void 0, [_o.sent()]).toBe(true, 'Logo image is not displayed');
                    _b = expect;
                    return [4 /*yield*/, appPage.$headerEl.getText()];
                case 2:
                    _b.apply(void 0, [_o.sent()]).toContain('Login Form', 'Header text is not correct');
                    _c = expect;
                    return [4 /*yield*/, appPage.$formGroup.first().element(protractor_1.by.tagName('label')).getText()];
                case 3:
                    _c.apply(void 0, [_o.sent()]).toEqual('Username', 'Username label is not correct');
                    _d = expect;
                    return [4 /*yield*/, appPage.$userIcon.isDisplayed()];
                case 4:
                    _d.apply(void 0, [_o.sent()]).toBe(true, 'User icon is NOT visible');
                    _e = expect;
                    return [4 /*yield*/, appPage.$userNameField.getAttribute('placeholder')];
                case 5:
                    _e.apply(void 0, [_o.sent()]).toContain('Enter your username', 'Username field placeholder is not correct');
                    _f = expect;
                    return [4 /*yield*/, appPage.$formGroup.last().element(protractor_1.by.tagName('label')).getText()];
                case 6:
                    _f.apply(void 0, [_o.sent()]).toEqual('Password', 'Password label is not correct');
                    _g = expect;
                    return [4 /*yield*/, appPage.$passwordField.getAttribute('placeholder')];
                case 7:
                    _g.apply(void 0, [_o.sent()]).toContain('Enter your password', 'Password field placeholder is not correct');
                    _h = expect;
                    return [4 /*yield*/, appPage.$fingerprintIcon.isDisplayed()];
                case 8:
                    _h.apply(void 0, [_o.sent()]).toBe(true, 'Fingerprint icon is NOT visible');
                    _j = expect;
                    return [4 /*yield*/, appPage.$loginBtn.isDisplayed()];
                case 9:
                    _j.apply(void 0, [_o.sent()]).toBe(true, 'Login button is NOT visible');
                    _k = expect;
                    return [4 /*yield*/, appPage.$rememberMeCheckbox.isDisplayed()];
                case 10:
                    _k.apply(void 0, [_o.sent()]).toBe(true, 'Remember me checkbox is NOT visible');
                    _l = expect;
                    return [4 /*yield*/, appPage.$rememberMeLabel.getText()];
                case 11:
                    _l.apply(void 0, [_o.sent()]).toContain('Remember Me', 'Remember me label is not correct');
                    _m = expect;
                    return [4 /*yield*/, appPage.$socialMediaIcons.count()];
                case 12:
                    _m.apply(void 0, [_o.sent()]).toEqual(3, 'Social media icons count is not correct');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Data-Driven Test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, appPage.$loginBtn.click()];
                case 1:
                    _e.sent();
                    _a = expect;
                    return [4 /*yield*/, appPage.$alertWarning.getText()];
                case 2:
                    _a.apply(void 0, [_e.sent()]).toContain('Both Username and Password must be present', 'Alert text is not displayed properly when both username and password are missing');
                    return [4 /*yield*/, appPage.$userNameField.sendKeys('user')];
                case 3:
                    _e.sent();
                    return [4 /*yield*/, appPage.$loginBtn.click()];
                case 4:
                    _e.sent();
                    _b = expect;
                    return [4 /*yield*/, appPage.$alertWarning.getText()];
                case 5:
                    _b.apply(void 0, [_e.sent()]).toContain('Password must be present', 'Alert text is not displayed properly when password is missing');
                    return [4 /*yield*/, appPage.$userNameField.clear()];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, appPage.$passwordField.sendKeys('password')];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, appPage.$loginBtn.click()];
                case 8:
                    _e.sent();
                    _c = expect;
                    return [4 /*yield*/, appPage.$alertWarning.getText()];
                case 9:
                    _c.apply(void 0, [_e.sent()]).toContain('Username must be present', 'Alert text is not displayed properly when username is missing');
                    return [4 /*yield*/, appPage.$userNameField.sendKeys('user')];
                case 10:
                    _e.sent();
                    return [4 /*yield*/, appPage.$loginBtn.click()];
                case 11:
                    _e.sent();
                    _d = expect;
                    return [4 /*yield*/, appPage.$loggedUser.isDisplayed()];
                case 12:
                    _d.apply(void 0, [_e.sent()]).toBe(true, 'Logged user info is NOT visible');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Table Sort Test', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, actualAmountsAfterSort, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = expect;
                    return [4 /*yield*/, appPage.$transactionsTable.isDisplayed()];
                case 1:
                    _a.apply(void 0, [_c.sent()]).toBe(true, 'Transactions table is NOT displayed');
                    return [4 /*yield*/, appPage.$amountColumnHeader.click()];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css('#transactionsTable tbody tr td:nth-child(5)')).getText()];
                case 4:
                    actualAmountsAfterSort = _c.sent();
                    _b = expect;
                    return [4 /*yield*/, appPage.isSorted(actualAmountsAfterSort)];
                case 5:
                    _b.apply(void 0, [_c.sent()]).toBe(true, 'Amounts are NOT sorted in ascending order');
                    return [2 /*return*/];
            }
        });
    }); });
});
