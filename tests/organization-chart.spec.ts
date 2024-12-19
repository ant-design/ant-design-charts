import { test } from '@playwright/test';
import { it } from './util';

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});

test('default organization', async ({ page }) => {
  await it(page, '/OrganizationChart?animation=false');
});

test('organization with data', async ({ page }) => {
  await it(page, '/OrganizationChart2?animation=false');
});
