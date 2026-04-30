import { test } from '@playwright/test';
import { LoginPage } from '../../../src/pages/login.page';
import { ProductsPage } from '../../../src/pages/products.page';
import { CartPage } from '../../../src/pages/cart.page';

test('@smoke @cart user can add backpack to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.open('/');
  await loginPage.login(
    process.env.TEST_USER_EMAIL || '',
    process.env.TEST_USER_PASSWORD || ''
  );

  await productsPage.verifyLoaded();
  await productsPage.addBackpackToCart();
  await productsPage.openCart();

  await cartPage.verifyLoaded();
  await cartPage.verifyBackpackIsInCart();
});