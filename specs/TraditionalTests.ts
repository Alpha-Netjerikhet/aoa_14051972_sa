import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";
import { HackathonAppPage } from './traditionaltests.pageobject';

describe('Version 1 hackathon app', () => {
    let appPage: HackathonAppPage;

    beforeAll(async () => {
        appPage = new HackathonAppPage();
        appPage.get();
    });

    it('Login Page UI Elements Test', async () => {
        expect(await appPage.$logo.isDisplayed()).toBe(true, 'Logo image is not displayed');
        expect(await appPage.$headerEl.getText()).toContain('Login Form', 'Header text is not correct');
        expect(await appPage.$formGroup.first().element(by.tagName('label')).getText()).toEqual('Username', 'Username label is not correct');
        expect(await appPage.$userIcon.isDisplayed()).toBe(true, 'User icon is NOT visible');
        expect(await appPage.$userNameField.getAttribute('placeholder')).toContain('Enter your username', 'Username field placeholder is not correct');
        expect(await appPage.$formGroup.last().element(by.tagName('label')).getText()).toEqual('Password', 'Password label is not correct');
        expect(await appPage.$passwordField.getAttribute('placeholder')).toContain('Enter your password', 'Password field placeholder is not correct');
        expect(await appPage.$fingerprintIcon.isDisplayed()).toBe(true, 'Fingerprint icon is NOT visible');
        expect(await appPage.$loginBtn.isDisplayed()).toBe(true, 'Login button is NOT visible');
        expect(await appPage.$rememberMeCheckbox.isDisplayed()).toBe(true, 'Remember me checkbox is NOT visible');
        expect(await appPage.$rememberMeLabel.getText()).toContain('Remember Me', 'Remember me label is not correct');
        expect(await appPage.$socialMediaIcons.count()).toEqual(3, 'Social media icons count is not correct');
    });

    it('Data-Driven Test', async () => {
        await appPage.$loginBtn.click();
        expect(await appPage.$alertWarning.getText()).toContain('Both Username and Password must be present', 'Alert text is not displayed properly when both username and password are missing');
        await appPage.$userNameField.sendKeys('user');
        await appPage.$loginBtn.click();
        expect(await appPage.$alertWarning.getText()).toContain('Password must be present', 'Alert text is not displayed properly when password is missing');
        await appPage.$userNameField.clear();
        await appPage.$passwordField.sendKeys('password');
        await appPage.$loginBtn.click();
        expect(await appPage.$alertWarning.getText()).toContain('Username must be present', 'Alert text is not displayed properly when username is missing');
        await appPage.$userNameField.sendKeys('user');
        await appPage.$loginBtn.click();
        expect(await appPage.$loggedUser.isDisplayed()).toBe(true, 'Logged user info is NOT visible');
    });

    it('Table Sort Test', async () => {
        expect(await appPage.$transactionsTable.isDisplayed()).toBe(true, 'Transactions table is NOT displayed');
        await appPage.$amountColumnHeader.click();
        await browser.sleep(2000);
        // actual amounts after sort
        const actualAmountsAfterSort: string = await element.all(by.css('#transactionsTable tbody tr td:nth-child(5)')).getText();
        expect(await appPage.isSorted(actualAmountsAfterSort)).toBe(true, 'Amounts are NOT sorted in ascending order');
    });
});