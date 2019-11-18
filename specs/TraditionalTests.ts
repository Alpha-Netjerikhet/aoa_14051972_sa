import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { HackathonAppPage } from './traditionaltests.pageobject';

describe('Version 1 hackathon app', () => {
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
                expect(await appPage.$headerEl.getText()).toContain('Login Form', 'Header text is not correct');
            });

            it('should display User icon', async () => {
                expect(await appPage.$userIcon.isDisplayed()).toBe(true, 'User icon is NOT displayed');
            });

            it('should display Username label', async () => {
                expect(await appPage.$formGroup.first().element(by.tagName('label')).getText()).toEqual('Username', 'Username label is not correct');
            });

            it('should display Username field placeholder', async () => {
                expect(await appPage.$userNameField.getAttribute('placeholder')).toContain('Enter your username', 'Username field placeholder is not correct');
            });

            it('should display Fingerprint icon', async () => {
                expect(await appPage.$fingerprintIcon.isDisplayed()).toBe(true, 'Fingerprint icon is NOT visible');
            });

            it('should display Password label', async () => {
                expect(await appPage.$formGroup.last().element(by.tagName('label')).getText()).toEqual('Password', 'Password label is not correct');
            });

            it('should display Password field placeholder', async () => {
                expect(await appPage.$passwordField.getAttribute('placeholder')).toContain('Enter your password', 'Password field placeholder is not correct');
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
                expect(await appPage.$socialMediaIcons.count()).toEqual(3, 'Social media icons count is not correct');
            });
        });

        describe('Data-Driven Test', async () => {
            it('should enter both Username and Password', async () => {
                await appPage.loginWithCredentials('', '');
                await appPage.$loginBtn.click();
                expect(await appPage.$alertWarning.getText()).toContain('Both Username and Password must be present', 'Alert text is not displayed properly when both username and password are missing');
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
            it('should display a Transactions table', async () => {
                expect(await appPage.$transactionsTable.isDisplayed()).toBe(true, 'Transactions table is NOT displayed');
            });

            it('should sort amounts when click on amounts header', async () => {
                await appPage.$amountColumnHeader.click();
                // actual amounts after sort
                const actualAmountsAfterSort: string = await element.all(by.css('#transactionsTable tbody tr td:nth-child(5)')).getText();
                expect(await appPage.isSorted(actualAmountsAfterSort)).toBe(true, 'Amounts are NOT sorted in ascending order');
            });

            it('should keep rows integrity', async () => {
                // rows integrity needs more time and effort to be tested
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

    });

    describe("Dynamic Content Test, with ads", function () {
        let flashImg1: ElementFinder;
        let flashImg2: ElementFinder;

        beforeAll(async () => {
            appPage.get(true);
            await appPage.loginWithCredentials('user', 'password');
            flashImg1 = appPage.$flashSale1Container.element(by.tagName('img'));
            flashImg2 = appPage.$flashSale2Container.element(by.tagName('img'));
        });

        describe('Flash gif tests', async () => {
            it('should display First flash gif image', async () => {
                expect(await flashImg1.isPresent()).toBe(true, 'First flash sale image is NOT displayed');
            });

            it('should display First flash gif context', async () => {
                expect(flashImg1.getAttribute('src')).toContain('img/flashSale.gif', 'First flash sale image displays different GIF image');
            });

            it('should display Second flash gif image', async () => {
                expect(await flashImg2.isPresent()).toBe(true, 'Second flash sale image is NOT displayed');
            });

            it('should display Second flash gif context', async () => {
                expect(flashImg2.getAttribute('src')).toContain('img/flashSale2.gif', 'Second flash sale image displays different GIF image');
            });
        });

    });
});