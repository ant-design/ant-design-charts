import { test } from '@playwright/test';
import { it } from './util';

test('default organization', async ({ page }) => {
  await it(page, '/OrganizationChart?animation=false');
});

test('organization with data', async ({ page }) => {
  await it(page, '/OrganizationChart2?animation=false');
});
