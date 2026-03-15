import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class LoginPage extends BasePage {

    private usernameInput = '#username';
    private passwordInput = '#password';
    private loginButton = 'button[type="submit"]';
    private flashMessage = '#flash';

    constructor(page: Page) {
        super(page);
    }

    async goTo() {
        await this.navigate('/login');
    }

    async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);

    await Promise.all([
        this.page.waitForNavigation(),
        this.page.click(this.loginButton)
    ]);
}

    async getFlashMessage() {
        return this.page.locator(this.flashMessage);
    }

    async expectFlashMessage(text: string) {
        const flash = this.page.locator(this.flashMessage);
        await expect(flash).toContainText(text);
    }
}