import { test } from '@playwright/test';
import { it } from './util';

test('use Decision as type', async ({ page }) => {
  await it(page, '/Fishbone?type=decision');
});

test('use Cause as type', async ({ page }) => {
  await it(page, '/Fishbone?type=cause');
});
