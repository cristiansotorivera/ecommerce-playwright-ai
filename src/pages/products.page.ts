import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly backpackAddButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByText('Products');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.backpackAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async verifyLoaded() {
    await expect(this.title).toBeVisible();
  }

  async addBackpackToCart() {
    await this.backpackAddButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}