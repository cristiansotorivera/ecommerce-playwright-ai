import { test } from '../../../src/fixtures/ecommerce.fixture';
import { PRODUCTS } from '../../../src/data/products/products';

test('@smoke @cart authenticated user can add backpack to cart', async ({
  productsPage,
  cartPage,
}) => {
  await productsPage.open('/inventory.html');

  await productsPage.verifyLoaded();

  await productsPage.addProductToCart(PRODUCTS.backpack.addToCartTestId);
  await productsPage.openCart();

  await cartPage.verifyLoaded();
  await cartPage.verifyProductIsInCart(PRODUCTS.backpack.name);
});