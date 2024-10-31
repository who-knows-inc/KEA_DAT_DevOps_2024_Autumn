import { test, expect } from '@playwright/test';

test('can search', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Search...').click();
  await page.getByPlaceholder('Search...').fill('This is a search');
  await page.getByRole('button', { name: 'Search' }).click();

  expect(page.url()).toBe('http://localhost:8080/?q=This+is+a+search');
});

