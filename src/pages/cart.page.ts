import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly cartTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.cartTitle = page.getByText('Your Cart');
  }

  async verifyLoaded() {
    await expect(this.cartTitle).toBeVisible();
  }

  async verifyProductIsInCart(productName: string) {
    await expect(this.page.getByText(productName)).toBeVisible();
  }
}