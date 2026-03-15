import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string) {
        const base = process.env.BASE_URL!;
        await this.page.goto(`${base}${path}`);
    }
}