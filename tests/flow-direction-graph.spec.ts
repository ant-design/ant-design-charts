import { test } from '@playwright/test';
import { it } from './util';

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});

test('default flow direction graph', async ({ page }) => {
  await it(page, '/UserFlowDirectionDefault?animation=false');
});

test('user flow direction graph', async ({ page }) => {
  await it(page, '/UserFlowDirectionGraph?animation=false');
});
