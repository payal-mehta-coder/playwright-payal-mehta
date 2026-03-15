import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    let loginPage: LoginPage;

    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goTo();
    });

    test('Successful login', async ({ page }) => {
        await loginPage.login(username, password);

        await expect(page).toHaveURL(/secure/);
        await loginPage.expectFlashMessage('You logged into a secure area!');
    });

    test('Login with invalid username', async ({ page }) => {
        await loginPage.login('abcd', password);

        await loginPage.expectFlashMessage('Your username is invalid!');
        await expect(page).toHaveURL(/login/);
    });

    test('Login with invalid password', async ({ page }) => {
        await loginPage.login(username, 'wrongPassword');

        await loginPage.expectFlashMessage('Your password is invalid!');
        await expect(page).toHaveURL(/login/);
    });

});