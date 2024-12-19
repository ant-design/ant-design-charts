import { test } from '@playwright/test';
import { it } from './util';

test('use Vertical as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=vertical');
});

test('use Horizontal as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=horizontal');
});

test('use Radial as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=radial');
});

test('Compact Vertical Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=vertical&compact=true');
});

test('Compact Horizontal Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=horizontal&compact=true');
});

test('Compact Radial Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=radial&compact=true');
});
