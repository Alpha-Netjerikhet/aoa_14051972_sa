import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

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
    private alertWarning: ElementFinder = element(by.className('alert alert-warning'));
    private transactionsTable: ElementFinder = element(by.css('#transactionsTable'));
    private amountColumnHeader: ElementFinder = element(by.css('#amount'));
    private loggedUser: ElementFinder = element(by.css('.top-bar .logged-user-w'));
    private compareExpensesLink: ElementFinder = element(by.id('showExpensesChart'));
    private canvas: ElementFinder = element(by.id('canvas'));
    private flashSale1Container: ElementFinder = element(by.id('flashSale'));
    private flashSale2Container: ElementFinder = element(by.id('flashSale2'));

    public async get(withAds: boolean): Promise<void> {
        let url: string = browser.baseUrl + '/hackathon.html';
        // let url: string = browser.baseUrl + '/hackathonV2.html';
        browser.waitForAngularEnabled(false);
        if (withAds) {
            url += '?showAd=true';
        }
        await browser.get(url);
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
    * Getter $compareExpensesLink
    * @return {ElementFinder }
    */
    public get $compareExpensesLink(): ElementFinder {
        return this.compareExpensesLink;
    }

    /**
    * Getter $canvas
    * @return {ElementFinder }
    */
    public get $canvas(): ElementFinder {
        return this.canvas;
    }

    /**
    * Getter $flashSale1Container
    * @return {ElementFinder }
    */
    public get $flashSale1Container(): ElementFinder {
        return this.flashSale1Container;
    }

    /**
    * Getter $flashSale2Container
    * @return {ElementFinder }
    */
    public get $flashSale2Container(): ElementFinder {
        return this.flashSale2Container;
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

    public async loginWithCredentials(username: string, password: string): Promise<void> {
        await this.userNameField.clear();
        await this.userNameField.sendKeys(username);
        await this.passwordField.clear();
        await this.passwordField.sendKeys(password);
        await this.loginBtn.click();
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

    // function for dynamic sorting
    public compareValues = (key: any, order = 'asc') => {
        return (a: any, b: any) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ? (comparison * -1) : comparison
            );
        };
    }

}