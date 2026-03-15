import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goTo();
    });

    test('Successful login', async ({ page }) => {
        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(page).toHaveURL(/secure/);
        await loginPage.expectFlashMessage('You logged into a secure area!');
    });

    test('Login with invalid username', async ({ page }) => {
        await loginPage.login('abcd', 'SuperSecretPassword!');

        await loginPage.expectFlashMessage('Your username is invalid!');
        await expect(page).toHaveURL(/login/);
    });

    test('Login with invalid password', async ({ page }) => {
        await loginPage.login('tomsmith', 'wrongPassword');

        await loginPage.expectFlashMessage('Your password is invalid!');
        await expect(page).toHaveURL(/login/);
    });

});