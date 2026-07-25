import {test,context} from '@playwright/test';

test.only('Window Handle', async({browser})=>{
  const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    console.log(await page.title());
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),      
])
//await page.pause();
console.log(await page.title());
const text = await newPage.locator(".red").first().textContent();
const array= text.split("@");
const domain = array[1].split(" ") [0];
//console.log(domain);
await page.locator("#username").fill(domain);
//await page.pause();
console.log(await page.locator("#username").inputValue());
});