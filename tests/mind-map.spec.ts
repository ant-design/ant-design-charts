import { test } from '@playwright/test';
import { it } from './util';

test('use Default as type', async ({ page }) => {
  await it(page, '/MindMap?type=default');
});

test('use Linear as type', async ({ page }) => {
  await it(page, '/MindMap?type=linear');
});

test('use Boxed as type', async ({ page }) => {
  await it(page, '/MindMap?type=boxed');
});

test('use 1 as a default expand level', async ({ page }) => {
  await it(page, '/MindMap?type=linear&defaultExpandLevel=1');
});

test('use 2 as a default expand level', async ({ page }) => {
  await it(page, '/MindMap?type=linear&defaultExpandLevel=2');
});

test('use Left as node direction', async ({ page }) => {
  await it(page, '/MindMap?type=linear&direction=left');
});

test('use Right as node direction', async ({ page }) => {
  await it(page, '/MindMap?type=linear&direction=right');
});

test('use Alternate as node direction', async ({ page }) => {
  await it(page, '/MindMap?type=linear&direction=alternate');
});

test('trigger collapse expand by icon', async ({ page }) => {
  await it(
    page,
    '/MindMap?type=linear&defaultExpandLevel=2&collapseExpand=true&collapseExpandTrigger=icon',
    async () => {
      await page.locator('.arrow-count-icon-collapsed').nth(1).click();
    },
  );
});

test('trigger collapse expand by node', async ({ page }) => {
  await it(
    page,
    '/MindMap?type=linear&defaultExpandLevel=2&collapseExpand=true&collapseExpandTrigger=node',
    async () => {
      await page.getByText('Models diversity', { exact: true })?.click();
    },
  );
});

test('use 60,100 as node width', async ({ page }) => {
  await it(page, '/MindMap?type=boxed&nodeMinWidth=60&nodeMaxWidth=100');
});

test('use custom node style', async ({ page }) => {
  await it(page, '/MindMapCustom');
});
