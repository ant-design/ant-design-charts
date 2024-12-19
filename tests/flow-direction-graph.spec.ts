import { test } from '@playwright/test';
import { it } from './util';

test('default flow direction graph', async ({ page }) => {
  await it(page, '/UserFlowDirectionDefault?animation=false');
});

test('user flow direction graph', async ({ page }) => {
  await it(page, '/UserFlowDirectionGraph?animation=false');
});
