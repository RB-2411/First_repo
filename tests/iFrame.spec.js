import {test} from '@playwright/test'

test('Iframe', async({page}) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
page.on("dialog", dialog=> dialog.accept());
await page.locator("#confirmbtn").click();
const iFramel = page.frameLocator("#courses-iframe");
await iFramel.locator("li a[href*='lifetime-access']:visible").click();
const text1 = await iFramel.locator(".text h2").textContent();
console.log("users are : "+ text1.split(" ") [1]);

});