import { ApplitoolsHackathonAppPage } from './applitools.pageobject';

describe('Applitools Hackathon', () => {
    let appPage: ApplitoolsHackathonAppPage;

    beforeAll(async () => {
        appPage = new ApplitoolsHackathonAppPage();
    });

    describe("Hackathon App", function () {
        beforeAll(async () => {
            await appPage.get();
        });

        afterAll(async () => {
            appPage.$eyes.close();
        });

        describe('Login Page UI Elements Test', async () => {
            it('use applitools to check UI elements of login page', async () => {
                await appPage.$eyes.checkWindow("Login form");
            });

            it('should be able to check/uncheck remember me', async () => {
                await appPage.$rememberMeCheckbox.click();
                await appPage.$eyes.checkWindow("Login form after checking remember me");
                await appPage.$rememberMeCheckbox.click();
                await appPage.$eyes.checkWindow("Login form after unchecking remember me");
            });
        });

        describe('Data-Driven Test', async () => {
            it('should enter both Username and Password', async () => {
                await appPage.loginWithCredentials('', '');
                await appPage.$eyes.checkWindow('missing both username and password');
            });

            it('should enter password', async () => {
                await appPage.loginWithCredentials('user', '');
                await appPage.$eyes.checkWindow('missing password');
            });

            it('should enter username', async () => {
                await appPage.loginWithCredentials('', 'password');
                await appPage.$eyes.checkWindow('missing username');
            });

            it('should login when enter valid credentials', async () => {
                await appPage.loginWithCredentials('user', 'password');
                await appPage.$eyes.checkWindow('entering valid credentials');
            });
        });

        describe('Table Sort and rows integrity Test', async () => {
            it('should store table data before sort', async () => {
                await appPage.$eyes.checkWindow('table data before sor');
            });

            it('should sort amounts when click on amounts header', async () => {
                await appPage.$amountColumnHeader.click();
                await appPage.$eyes.checkWindow('table data after sort');
            });
        });

        describe('Canvas Chart Test', async () => {
            it('should display Canvas chart', async () => {
                await appPage.$compareExpensesLink.click();
                await appPage.$eyes.checkWindow('displays chart');
            });

            it('should display Canvas chart with next year data', async () => {
                await appPage.$showNextYearLink.click();
                await appPage.$eyes.checkWindow('displays chart with next year data');
            });
        });

        describe('Dynamic Content Test, with ads', function () {
            it('test with ads', async () => {
                await appPage.withAds();
                await appPage.loginWithCredentials('user', 'password');
                await appPage.$eyes.checkWindow('displays gif images');
            });
        });
    });
});