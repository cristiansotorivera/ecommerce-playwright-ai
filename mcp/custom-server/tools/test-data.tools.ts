import { PRODUCTS } from '../../../src/data/products/products';
import { USERS } from '../../../src/data/users/users';

export function getProductsText() {
  return JSON.stringify(PRODUCTS, null, 2);
}

export function getUsersText() {
  return JSON.stringify(USERS, null, 2);
}