import { test } from '@playwright/test';
import { it } from './util';

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});

test('language tree', async ({ page }) => {
  await it(page, '/NetworkGraph');
});
