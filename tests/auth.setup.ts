import { test as setup } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';

setup('authenticate user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open('/');

  await loginPage.login(
    process.env.TEST_USER_EMAIL || '',
    process.env.TEST_USER_PASSWORD || ''
  );

  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});