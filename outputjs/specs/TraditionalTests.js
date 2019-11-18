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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_isequal_1 = __importDefault(require("lodash.isequal"));
var protractor_1 = require("protractor");
var traditionaltests_pageobject_1 = require("./traditionaltests.pageobject");
describe('Version 1 hackathon app', function () {
    var appPage;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            appPage = new traditionaltests_pageobject_1.HackathonAppPage();
            return [2 /*return*/];
        });
    }); });
    describe("App without ads", function () {
        var _this = this;
        beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                appPage.get(false);
                return [2 /*return*/];
            });
        }); });
        describe('Login Page UI Elements Test', function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                it('should display Logo image', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$logo.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Logo image is not displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Header text', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$headerEl.getText()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toContain('Login Form', 'Header text is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display User icon', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$userIcon.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'User icon is NOT displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Username label', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$formGroup.first().element(protractor_1.by.tagName('label')).getText()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toEqual('Username', 'Username label is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Username field placeholder', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$userNameField.getAttribute('placeholder')];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toContain('Enter your username', 'Username field placeholder is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Fingerprint icon', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$fingerprintIcon.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Fingerprint icon is NOT visible');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Password label', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$formGroup.last().element(protractor_1.by.tagName('label')).getText()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toEqual('Password', 'Password label is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Password field placeholder', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$passwordField.getAttribute('placeholder')];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toContain('Enter your password', 'Password field placeholder is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Login button', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$loginBtn.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Login button is NOT visible');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Remember me checkbox', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$rememberMeCheckbox.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Remember me checkbox is NOT displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Remember me label', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$rememberMeLabel.getText()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toContain('Remember Me', 'Remember me label is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Social media icons', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$socialMediaIcons.count()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toEqual(3, 'Social media icons count is not correct');
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe('Data-Driven Test', function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                it('should enter both Username and Password', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, appPage.loginWithCredentials('', '')];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, appPage.$loginBtn.click()];
                            case 2:
                                _b.sent();
                                _a = expect;
                                return [4 /*yield*/, appPage.$alertWarning.getText()];
                            case 3:
                                _a.apply(void 0, [_b.sent()]).toContain('Both Username and Password must be present', 'Alert text is not displayed properly when both username and password are missing');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should enter password', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, appPage.loginWithCredentials('user', '')];
                            case 1:
                                _b.sent();
                                _a = expect;
                                return [4 /*yield*/, appPage.$alertWarning.getText()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).toContain('Password must be present', 'Alert text is not displayed properly when password is missing');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should enter username', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, appPage.loginWithCredentials('', 'password')];
                            case 1:
                                _b.sent();
                                _a = expect;
                                return [4 /*yield*/, appPage.$alertWarning.getText()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).toContain('Username must be present', 'Alert text is not displayed properly when username is missing');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should login when enter valid credentials', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, appPage.loginWithCredentials('user', 'password')];
                            case 1:
                                _b.sent();
                                _a = expect;
                                return [4 /*yield*/, appPage.$loggedUser.isDisplayed()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Logged user info is NOT visible');
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe('Table Sort Test', function () { return __awaiter(_this, void 0, void 0, function () {
            var jsonObjBeforeSort, jsonObjAfterSort;
            var _this = this;
            return __generator(this, function (_a) {
                it('should display a Transactions table', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, appPage.$transactionsTable.isDisplayed()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Transactions table is NOT displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should store table data before sort', function () { return __awaiter(_this, void 0, void 0, function () {
                    var rowsBeforeSort, jsonString;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css('#transactionsTable tbody tr')).map(function (row) {
                                    return {
                                        complete: row.element(protractor_1.by.css('td:nth-child(1) span:nth-child(2)')).getText(),
                                        date: row.element(protractor_1.by.css('td:nth-child(2) span:nth-child(1)')).getText(),
                                        description: row.element(protractor_1.by.css('td:nth-child(3) span')).getText(),
                                        category: row.element(protractor_1.by.css('td:nth-child(4) a')).getText(),
                                        amount: row.element(protractor_1.by.css('td:nth-child(5) span')).getText()
                                    };
                                })];
                            case 1:
                                rowsBeforeSort = _a.sent();
                                jsonString = JSON.stringify(rowsBeforeSort);
                                jsonObjBeforeSort = JSON.parse(jsonString);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should sort amounts when click on amounts header', function () { return __awaiter(_this, void 0, void 0, function () {
                    var actualAmountsAfterSort, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, appPage.$amountColumnHeader.click()];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css('#transactionsTable tbody tr td:nth-child(5)')).getText()];
                            case 2:
                                actualAmountsAfterSort = _b.sent();
                                _a = expect;
                                return [4 /*yield*/, appPage.isSorted(actualAmountsAfterSort)];
                            case 3:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Amounts are NOT sorted in ascending order');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should preserve rows integrity after the sort', function () { return __awaiter(_this, void 0, void 0, function () {
                    var rowsAfterSort, jsonString;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, protractor_1.element.all(protractor_1.by.css('#transactionsTable tbody tr')).map(function (row) {
                                    return {
                                        complete: row.element(protractor_1.by.css('td:nth-child(1) span:nth-child(2)')).getText(),
                                        date: row.element(protractor_1.by.css('td:nth-child(2) span:nth-child(1)')).getText(),
                                        description: row.element(protractor_1.by.css('td:nth-child(3) span')).getText(),
                                        category: row.element(protractor_1.by.css('td:nth-child(4) a')).getText(),
                                        amount: row.element(protractor_1.by.css('td:nth-child(5) span')).getText()
                                    };
                                })];
                            case 1:
                                rowsAfterSort = _a.sent();
                                jsonString = JSON.stringify(rowsAfterSort);
                                jsonObjAfterSort = JSON.parse(jsonString);
                                expect(lodash_isequal_1.default(jsonObjBeforeSort.sort(appPage.compareValues('category')), jsonObjAfterSort.sort(appPage.compareValues('category')))).toBe(true, 'Rows integrity is NOT preserved after sorting by amount');
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    });
    describe('Canvas Chart Test', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            it('should display Canvas chart', function () { return __awaiter(void 0, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, appPage.$compareExpensesLink.click()];
                        case 1:
                            _b.sent();
                            _a = expect;
                            return [4 /*yield*/, appPage.$canvas.isDisplayed()];
                        case 2:
                            _a.apply(void 0, [_b.sent()]).toBe(true, 'Chart is NOT displayed');
                            return [2 /*return*/];
                    }
                });
            }); });
            it('should display canvas charts content', function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    describe("Dynamic Content Test, with ads", function () {
        var _this = this;
        var flashImg1;
        var flashImg2;
        beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appPage.get(true);
                        return [4 /*yield*/, appPage.loginWithCredentials('user', 'password')];
                    case 1:
                        _a.sent();
                        flashImg1 = appPage.$flashSale1Container.element(protractor_1.by.tagName('img'));
                        flashImg2 = appPage.$flashSale2Container.element(protractor_1.by.tagName('img'));
                        return [2 /*return*/];
                }
            });
        }); });
        describe('Flash gif tests', function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                it('should display First flash gif image', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, flashImg1.isPresent()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'First flash sale image is NOT displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display First flash gif context', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        expect(flashImg1.getAttribute('src')).toContain('img/flashSale.gif', 'First flash sale image displays different GIF image');
                        return [2 /*return*/];
                    });
                }); });
                it('should display Second flash gif image', function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = expect;
                                return [4 /*yield*/, flashImg2.isPresent()];
                            case 1:
                                _a.apply(void 0, [_b.sent()]).toBe(true, 'Second flash sale image is NOT displayed');
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('should display Second flash gif context', function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        expect(flashImg2.getAttribute('src')).toContain('img/flashSale2.gif', 'Second flash sale image displays different GIF image');
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    });
});
