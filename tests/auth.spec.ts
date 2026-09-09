import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test.describe('UI Authentication Tests', () => {

  test('User should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Heath93', 's3cret');
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.getByTestId('sidenav-username')).toBeVisible();
  });
  test('Platform should show error message with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Heath9312', 's3cret');
    await expect(page).toHaveURL('http://localhost:3000/signin');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username or password is invalid');
  });
});

