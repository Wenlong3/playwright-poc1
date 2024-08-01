import { test, expect } from '@playwright/test';

// touching the surface of att.com:
test('Ensure My AT&T dropdown list items', async ({ page }) => {
  // await page.goto('about:blank');
  await page.goto('https://www.att.com/');
  await page.getByPlaceholder('I\'m looking for...').click();
  // just assert the "My AT&T" button for now: -wpx 7/31/2024
  await expect(page.getByRole('button', { name: 'My AT&T' })).toBeEnabled();
  await page.getByRole('button', { name: 'My AT&T' }).click();

  // how do we assert this dropdown list have 9 items.
  // Cypress:: cy.get('div #tab-profile').
  const myDropdownItems = await page.locator('.dropdown-profile li a'); // 9 items
  let myDropdownItemCount = await page.locator('.dropdown-profile li a').count();
  await console.log(`the length of dropdown list is ${myDropdownItemCount} .... `);
  await expect(myDropdownItems).toHaveCount(9);

  for(const element of await page.locator('.dropdown-profile li a').all()) {
    // I really want to hover over it one-by-one: simulate a real click() action
    await element.hover();
    // await console.log('dropdown item visited: ' + element.textContent());
  }
});