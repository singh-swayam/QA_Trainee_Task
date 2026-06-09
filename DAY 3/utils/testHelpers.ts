import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test_data/user';

export async function loginAsStandardUser(page: Page): Promise<void> {
    const standardUser = users.find(u => u.type === 'standard')!;
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(standardUser.username, standardUser.password);
}