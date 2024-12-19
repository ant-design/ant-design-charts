import { expect, type Page } from '@playwright/test';

export const it = async (page: Page, url: string, callback?: () => Promise<void>) => {
  await page.goto(url);
  await callback?.();
  await expect(page).toHaveScreenshot({
    clip: { x: 0, y: 0, width: 500, height: 500 },
    maxDiffPixelRatio: 0.1,
  });
};
