import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly cartTitle: Locator;
  readonly backpackItem: Locator;

  constructor(page: Page) {
    super(page);
    this.cartTitle = page.getByText('Your Cart');
    this.backpackItem = page.getByText('Sauce Labs Backpack');
  }

  async verifyLoaded() {
    await expect(this.cartTitle).toBeVisible();
  }

  async verifyBackpackIsInCart() {
    await expect(this.backpackItem).toBeVisible();
  }
}