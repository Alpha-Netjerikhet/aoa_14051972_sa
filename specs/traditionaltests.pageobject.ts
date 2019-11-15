import { element, by, ElementFinder, ElementArrayFinder, browser } from 'protractor';

export class HackathonAppPage {
    private logo: ElementFinder = element(by.css('.logo-w img'));
    private headerEl: ElementFinder = element(by.className('auth-header'));
    private formGroup: ElementArrayFinder = element.all(by.className('form-group'));
    private userNameField: ElementFinder = element(by.id('username'));
    private passwordField: ElementFinder = element(by.id('password'));
    private loginBtn: ElementFinder = element(by.partialButtonText('Log In'));
    private userIcon: ElementFinder = element(by.className('os-icon-user-male-circle'));
    private fingerprintIcon: ElementFinder = element(by.className('os-icon-fingerprint'));
    private rememberMeCheckbox: ElementFinder = element(by.className('form-check-input'));
    private rememberMeLabel: ElementFinder = element(by.className('form-check-label'));
    private socialMediaIcons: ElementArrayFinder = element.all(by.css('form img'));
    private alertWarning = element(by.className('alert alert-warning'));
    private transactionsTable = element(by.css('#transactionsTable'));
    private amountColumnHeader = element(by.css('#amount'));
    private loggedUser = element(by.css('.top-bar .logged-user-w'));

    public async get(): Promise<void> {
        browser.waitForAngularEnabled(false);
        await browser.get('https://demo.applitools.com/hackathon.html');
        // await browser.get('https://demo.applitools.com/hackathonV2.html');
    }

    /**
     * Getter $logo
     * @return {ElementFinder }
     */
    public get $logo(): ElementFinder {
        return this.logo;
    }

    /**
     * Getter $headerEl
     * @return {ElementFinder }
     */
    public get $headerEl(): ElementFinder {
        return this.headerEl;
    }

    /**
     * Getter $formGroup
     * @return {ElementArrayFinder }
     */
    public get $formGroup(): ElementArrayFinder {
        return this.formGroup;
    }

    /**
     * Getter $userNameField
     * @return {ElementFinder }
     */
    public get $userNameField(): ElementFinder {
        return this.userNameField;
    }

    /**
     * Getter $passwordField
     * @return {ElementFinder }
     */
    public get $passwordField(): ElementFinder {
        return this.passwordField;
    }

    /**
     * Getter $loginBtn
     * @return {ElementFinder }
     */
    public get $loginBtn(): ElementFinder {
        return this.loginBtn;
    }

    /**
     * Getter $userIcon
     * @return {ElementFinder }
     */
    public get $userIcon(): ElementFinder {
        return this.userIcon;
    }

    /**
     * Getter $fingerprintIcon
     * @return {ElementFinder }
     */
    public get $fingerprintIcon(): ElementFinder {
        return this.fingerprintIcon;
    }

    /**
     * Getter $rememberMeCheckbox
     * @return {ElementFinder }
     */
    public get $rememberMeCheckbox(): ElementFinder {
        return this.rememberMeCheckbox;
    }

    /**
     * Getter $rememberMeLabel
     * @return {ElementFinder }
     */
    public get $rememberMeLabel(): ElementFinder {
        return this.rememberMeLabel;
    }

    /**
     * Getter $socialMediaIcons
     * @return {ElementArrayFinder }
     */
    public get $socialMediaIcons(): ElementArrayFinder {
        return this.socialMediaIcons;
    }

    /**
    * Getter $alertWarning
    * @return {ElementArrayFinder }
    */
    public get $alertWarning(): ElementFinder {
        return this.alertWarning;
    }

    /**
    * Getter $transactionsTable
    * @return {ElementFinder }
    */
    public get $transactionsTable(): ElementFinder {
        return this.transactionsTable;
    }

    /**
    * Getter $amountColumnHeader
    * @return {ElementFinder }
    */
    public get $amountColumnHeader(): ElementFinder {
        return this.amountColumnHeader;
    }

    /**
    * Getter $loggedUser
    * @return {ElementFinder }
    */
    public get $loggedUser(): ElementFinder {
        return this.loggedUser;
    }

    /**
     * Setter $logo
     * @param {ElementFinder } value
     */
    public set $logo(value: ElementFinder) {
        this.logo = value;
    }

    /**
     * Setter $headerEl
     * @param {ElementFinder } value
     */
    public set $headerEl(value: ElementFinder) {
        this.headerEl = value;
    }

    /**
     * Setter $formGroup
     * @param {ElementArrayFinder } value
     */
    public set $formGroup(value: ElementArrayFinder) {
        this.formGroup = value;
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

    /**
     * Setter $loginBtn
     * @param {ElementFinder } value
     */
    public set $loginBtn(value: ElementFinder) {
        this.loginBtn = value;
    }

    /**
     * Setter $userIcon
     * @param {ElementFinder } value
     */
    public set $userIcon(value: ElementFinder) {
        this.userIcon = value;
    }

    /**
     * Setter $fingerprintIcon
     * @param {ElementFinder } value
     */
    public set $fingerprintIcon(value: ElementFinder) {
        this.fingerprintIcon = value;
    }

    /**
     * Setter $rememberMeCheckbox
     * @param {ElementFinder } value
     */
    public set $rememberMeCheckbox(value: ElementFinder) {
        this.rememberMeCheckbox = value;
    }

    /**
     * Setter $rememberMeLabel
     * @param {ElementFinder } value
     */
    public set $rememberMeLabel(value: ElementFinder) {
        this.rememberMeLabel = value;
    }

    /**
     * Setter $socialMediaIcons
     * @param {ElementArrayFinder } value
     */
    public set $socialMediaIcons(value: ElementArrayFinder) {
        this.socialMediaIcons = value;
    }

    public isSorted = async (actualAmounts: string) => {
        let isSorted = true;
        for (let i = 0; i < actualAmounts.length - 1; i++) {
            let el1 = actualAmounts[i].replace(',', '').replace('+ ', '+').replace('- ', '-');
            let el2 = actualAmounts[i + 1].replace(',', '').replace('+ ', '+').replace('- ', '-');
            if (parseFloat(el1) > parseFloat(el2)) {
                isSorted = false;
                break;
            }
        }
        return isSorted;
    };

}