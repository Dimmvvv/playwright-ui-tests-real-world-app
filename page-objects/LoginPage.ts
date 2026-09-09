import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.usernameInput = page.getByTestId('signin-username').locator('input');
    this.passwordInput = page.getByTestId('signin-password').locator('input');
    this.submitButton = page.getByTestId('signin-submit');
    this.errorMessage = page.locator('[data-test="signin-error"]'); 
  }

  async goto() {
    await this.page.goto('/signin');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
