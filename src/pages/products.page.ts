import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
  readonly title: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByText('Products');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async verifyLoaded() {
    await expect(this.title).toBeVisible();
  }

  async addProductToCart(addToCartTestId: string) {
    await this.page.locator(`[data-test="${addToCartTestId}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}