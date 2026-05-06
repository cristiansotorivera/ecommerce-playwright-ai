import { test } from '../../../src/fixtures/ecommerce.fixture';

test('@smoke @cart user can add backpack to cart', async ({
  loginPage,
  productsPage,
  cartPage,
}) => {
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