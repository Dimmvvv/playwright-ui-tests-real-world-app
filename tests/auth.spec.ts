import { test, expect } from '@playwright/test';

test.describe('UI Authentication Tests', () => {

  test('should successfully log in with valid credentials', async ({ page }) => {
    await page.goto('/signin');

    await page.getByTestId('signin-username').locator('input').fill('Heath93');
    await page.getByTestId('signin-password').locator('input').fill('s3cret');     
    await page.getByTestId('signin-submit').click();

    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.getByTestId('sidenav-username')).toBeVisible();
  });

});
