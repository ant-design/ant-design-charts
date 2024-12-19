import { test } from '@playwright/test';
import { it } from './util';

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});

test('use Vertical as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=vertical&animation=false');
});

test('use Horizontal as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=horizontal&animation=false');
});

test('use Radial as direction', async ({ page }) => {
  await it(page, '/Dendrogram?direction=radial&animation=false');
});

test('Compact Vertical Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=vertical&compact=true&animation=false');
});

test('Compact Horizontal Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=horizontal&compact=true&animation=false');
});

test('Compact Radial Dendrogram', async ({ page }) => {
  await it(page, '/Dendrogram?direction=radial&compact=true&animation=false');
});
