import { test } from '@playwright/test';
import { it } from './util';

test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});

test('default flow graph', async ({ page }) => {
  await it(page, '/FlowGraph?animation=false');
});

test('product launch flow graph', async ({ page }) => {
  await it(page, '/FlowGraphProductLaunch?animation=false');
});

test('task scheduling flow graph', async ({ page }) => {
  await it(page, '/FlowGraphTaskScheduling?animation=false');
});
