import isEqual from 'lodash.isequal';
import { browser, by, element, ElementArrayFinder, ElementFinder, ExpectedConditions } from 'protractor';

import { HackathonAppPage } from './traditionaltests.pageobject';

describe('Version 2 hackathon app', () => {
    let appPage: HackathonAppPage;

    beforeAll(async () => {
        appPage = new HackathonAppPage();
    });

    describe("App without ads", function () {
        beforeAll(async () => {
            appPage.get(false);
        });

        describe('Login Page UI Elements Test', async () => {
            it('should display Logo image', async () => {
                expect(await appPage.$logo.isDisplayed()).toBe(true, 'Logo image is not displayed');
            });

            it('should display Header text', async () => {
                expect(await appPage.$headerEl.getText()).toContain('Logout Form', 'Header text is not correct');
            });

            it('should display Username label', async () => {
                expect(await appPage.$formGroup.first().element(by.tagName('label')).getText()).toEqual('Username', 'Username label is not correct');
            });

            it('should display Username field placeholder', async () => {
                expect(await appPage.$userNameField.getAttribute('placeholder')).toContain('John Smith', 'Username field placeholder is not correct');
            });

            it('should display Password label', async () => {
                expect(await appPage.$formGroup.last().element(by.tagName('label')).getText()).toEqual('Pwd', 'Password label is not correct');
            });

            it('should display Password field placeholder', async () => {
                expect(await appPage.$passwordField.getAttribute('placeholder')).toContain('ABC$*1@', 'Password field placeholder is not correct');
            });

            it('should display Login button', async () => {
                expect(await appPage.$loginBtn.isDisplayed()).toBe(true, 'Login button is NOT visible');
            });

            it('should display Remember me checkbox', async () => {
                expect(await appPage.$rememberMeCheckbox.isDisplayed()).toBe(true, 'Remember me checkbox is NOT displayed');
            });

            it('should display Remember me label', async () => {
                expect(await appPage.$rememberMeLabel.getText()).toContain('Remember Me', 'Remember me label is not correct');
            });

            it('should display Social media icons', async () => {
                expect(await appPage.$socialMediaIcons.count()).toEqual(2, 'Social media icons count is not correct');
            });
        });

        describe('Data-Driven Test', async () => {
            it('should enter both Username and Password', async () => {
                await appPage.loginWithCredentials('', '');
                await appPage.$loginBtn.click();
                expect(await appPage.$alertWarning.getText()).toContain('Please enter both username and password', 'Alert text is not displayed properly when both username and password are missing');
            });

            it('should enter password', async () => {
                await appPage.loginWithCredentials('user', '');
                expect(await appPage.$alertWarning.getText()).toContain('Password must be present', 'Alert text is not displayed properly when password is missing');
            });

            it('should enter username', async () => {
                await appPage.loginWithCredentials('', 'password');
                expect(await appPage.$alertWarning.getText()).toContain('Username must be present', 'Alert text is not displayed properly when username is missing');
            });

            it('should login when enter valid credentials', async () => {
                await appPage.loginWithCredentials('user', 'password');
                expect(await appPage.$loggedUser.isDisplayed()).toBe(true, 'Logged user info is NOT visible');
            });
        });

        describe('Table Sort Test', async () => {
            let jsonObjBeforeSort: any;
            let jsonObjAfterSort: any;

            it('should display a Transactions table', async () => {
                expect(await appPage.$transactionsTable.isDisplayed()).toBe(true, 'Transactions table is NOT displayed');
            });

            it('should store table data before sort', async () => {
                const rowsBeforeSort = await element.all(by.css('#transactionsTable tbody tr')).map((row: any) => {
                    return {
                        complete: row.element(by.css('td:nth-child(1) span:nth-child(2)')).getText(),
                        date: row.element(by.css('td:nth-child(2) span:nth-child(1)')).getText(),
                        description: row.element(by.css('td:nth-child(3) span')).getText(),
                        category: row.element(by.css('td:nth-child(4) a')).getText(),
                        amount: row.element(by.css('td:nth-child(5) span')).getText()
                    };
                });
                const jsonString = JSON.stringify(rowsBeforeSort);
                jsonObjBeforeSort = JSON.parse(jsonString);
            });

            it('should click on amounts header', async () => {
                await appPage.$amountColumnHeader.click();
            });

            it('should preserve rows integrity after the sort', async () => {
                const rowsAfterSort = await element.all(by.css('#transactionsTable tbody tr')).map((row: any) => {
                    return {
                        complete: row.element(by.css('td:nth-child(1) span:nth-child(2)')).getText(),
                        date: row.element(by.css('td:nth-child(2) span:nth-child(1)')).getText(),
                        description: row.element(by.css('td:nth-child(3) span')).getText(),
                        category: row.element(by.css('td:nth-child(4) a')).getText(),
                        amount: row.element(by.css('td:nth-child(5) span')).getText()
                    };
                });
                const jsonString = JSON.stringify(rowsAfterSort);
                jsonObjAfterSort = JSON.parse(jsonString);
                expect(isEqual(jsonObjBeforeSort.sort(appPage.compareValues('category')), jsonObjAfterSort.sort(appPage.compareValues('category')))).toBe(true, 'Rows integrity is NOT preserved after sorting by amount');
            });
        });
    });

    describe('Canvas Chart Test', async () => {
        it('should display Canvas chart', async () => {
            await appPage.$compareExpensesLink.click();
            expect(await appPage.$canvas.isDisplayed()).toBe(true, 'Chart is NOT displayed');
        });

        it('should display canvas charts content', async () => {
            // canvas content needs more effort to be tested using special libraries
        });
    });

    describe("Dynamic Content Test, with ads", function () {
        let flashImg1: ElementFinder;
        let flashImg2: ElementFinder;

        beforeAll(async () => {
            appPage.get(true);
            await appPage.loginWithCredentials('user', 'password');
            flashImg2 = appPage.$flashSale2Container.element(by.tagName('img'));
        });

        describe('Flash gif tests', async () => {
            it('should display Second flash gif image', async () => {
                expect(await flashImg2.isPresent()).toBe(true, 'Second flash sale image is NOT displayed');
            });

            it('should display Second flash gif context', async () => {
                expect(flashImg2.getAttribute('src')).toContain('img/flaseSale3.gif', 'Second flash sale image displays different GIF image');
            });
        });
    });
});