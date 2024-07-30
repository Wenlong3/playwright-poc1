import { test, expect } from '@playwright/test';

test('test - should confirm email addresses are matched.', async ({ page }) => {
  await page.goto('http://localhost:54772/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByLabel('Emplyee ID').click();
  await page.getByLabel('Emplyee ID').fill('123456');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Wenlong Peter');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Xu');
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('wxu@example.com');
  await page.getByLabel('Confirm Email').click();
  await page.getByLabel('Confirm Email').fill('wxu2@example.com');
  await page.getByLabel('Password', { exact: true }).click();
  // use another CSS locator later.
  await expect(page.getByText('The email and confirm email')).toHaveText('The email and confirm email must match.');
});