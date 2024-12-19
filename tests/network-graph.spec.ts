import { test } from '@playwright/test';
import { it } from './util';

test('language tree', async ({ page }) => {
  await it(page, '/NetworkGraph');
});
