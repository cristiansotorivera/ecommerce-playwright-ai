import { test } from '../../../src/fixtures/ecommerce.fixture';

test('@smoke @cart authenticated user can add backpack to cart', async ({
  productsPage,
  cartPage,
}) => {
  await productsPage.open('/inventory.html');

  await productsPage.verifyLoaded();
  await productsPage.addBackpackToCart();
  await productsPage.openCart();

  await cartPage.verifyLoaded();
  await cartPage.verifyBackpackIsInCart();
});