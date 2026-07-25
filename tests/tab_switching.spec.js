import {test} from '@playwright/test';

test('Manually open and switch between multiple tabs', async ({ context }) => {
  // 1. Create the first tab
  const tab1 = await context.newPage();
  await tab1.goto('https://www.google.com/');

  // 2. Create a second tab in the same context (shares same session/cookies)
  const tab2 = await context.newPage();
  await tab2.goto('https://rahulshettyacademy.com/course-library');

  // 3. Switch control to Tab 1
  await tab1.bringToFront(); // Brings tab1 to the foreground visually
  await tab1.locator("[type*='submit']").last().click();

  // 4. Switch control back to Tab 2
  await tab2.bringToFront(); // Brings tab2 to the foreground visually
  await tab2.getByRole('button', { name: 'Automation' }).click();

  // 5. Close specific tabs
  debugger;
});