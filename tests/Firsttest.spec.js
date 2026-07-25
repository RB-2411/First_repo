import { test, expect } from '@playwright/test';
import { log } from 'console';

test('firsttest' ,async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/', { waitUntil: 'load' });
    //console.log(await page.title());
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Practice Page/);
 const radio = await page.locator('input[value="radio1"]');
 await radio.highlight();
 await radio.click();
 console.log("radio button clciked");
 const isChecked = await page.locator('input[value="radio1"]').isChecked();
 console.log('radio button is' , isChecked);
 //let text =await page.locator('//*[@id="autocomplete"]');
 await text.fill('Ind');
 await page.getByPlaceholder('Type to Select Countries').selectOption(2);
 await text.fill('Ind');
 //await page.locator('//*[@id="autocomplete"]', { hasText: 'India' }).click();
 await expect(text).toHaveText('India');
 console.log("country selected");  
});
