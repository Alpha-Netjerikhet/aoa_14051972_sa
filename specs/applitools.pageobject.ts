import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

const Eyes = require("eyes.selenium").Eyes;
const applitoolsApiKey = '5QW3UKu1049BaVX6eo80mt102lQ26KvSMgyqeQpsgz1ztGQ110';

export class ApplitoolsHackathonAppPage {
    private userNameField: ElementFinder = element(by.id('username'));
    private passwordField: ElementFinder = element(by.id('password'));
    private loginBtn: ElementFinder = element(by.partialButtonText('Log In'));
    private rememberMeCheckbox: ElementFinder = element(by.className('form-check-input'));
    private amountColumnHeader: ElementFinder = element(by.css('#amount'));
    private compareExpensesLink: ElementFinder = element(by.id('showExpensesChart')); // element(by.partialLinkText('Compare Expenses'));
    private showNextYearLink = element(by.id('addDataset'));
    private eyes = new Eyes();

    private url: string = browser.baseUrl + '/hackathon.html';
    // private url: string = browser.baseUrl + '/hackathonV2.html';

    public initSDKAPI = async () => {
        await this.eyes.setApiKey(applitoolsApiKey);
    }

    public createBatch = async (batchName: string) => {
        await this.eyes.setBatch(batchName);
        await this.eyes.open(browser, "Hackathon App", batchName); // "Protractor Test!");
    }

    public async get(): Promise<void> {
        browser.waitForAngularEnabled(false);
        await browser.get(this.url);
    }

    /**
     * Getter $loginBtn
     * @return {ElementFinder }
     */
    public get $loginBtn(): ElementFinder {
        return this.loginBtn;
    }

    /**
     * Getter $rememberMeCheckbox
     * @return {ElementFinder }
     */
    public get $rememberMeCheckbox(): ElementFinder {
        return this.rememberMeCheckbox;
    }

    /**
    * Getter $amountColumnHeader
    * @return {ElementFinder }
    */
    public get $amountColumnHeader(): ElementFinder {
        return this.amountColumnHeader;
    }

    /**
    * Getter $compareExpensesLink
    * @return {ElementFinder }
    */
    public get $compareExpensesLink(): ElementFinder {
        return this.compareExpensesLink;
    }

    /**
    * Getter $showNextYearLink
    * @return {ElementFinder }
    */
    public get $showNextYearLink(): ElementFinder {
        return this.showNextYearLink;
    }

    /**
    * Getter $eyes
    * @return {any }
    */
    public get $eyes(): any {
        return this.eyes;
    }

    /**
     * Setter $eyes
     * @param {any } value
     */
    public set $eyes(value: any) {
        this.eyes = value;
    }

    /**
     * Setter $userNameField
     * @param {ElementFinder } value
     */
    public set $userNameField(value: ElementFinder) {
        this.userNameField = value;
    }

    /**
     * Setter $passwordField
     * @param {ElementFinder } value
     */
    public set $passwordField(value: ElementFinder) {
        this.passwordField = value;
    }

    public async loginWithCredentials(username: string, password: string): Promise<void> {
        await this.userNameField.clear();
        await this.userNameField.sendKeys(username);
        await this.passwordField.clear();
        await this.passwordField.sendKeys(password);
        await this.loginBtn.click();
    }

    public withAds = async () => {
        await browser.get(this.url + '?showAd=true');
    }
}