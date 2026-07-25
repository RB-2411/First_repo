import {test} from '@playwright/test';

test('Network Idle condition', async({page})=>{
await page.goto('https://rahulshettyacademy.com/client')
const username = await page.getByPlaceholder('email@example.com').fill('rahul.bhawar05@gmail.com');
const password = await page.getByPlaceholder('enter your passsword').fill('Process-2026');
await page.pause();
const login = await page.locator('#login').click();

await page.locator('.card-body b').first().waitFor();
const title = await page.locator('.card-body b');

// networkidle method useful when we have to wait till all the network calls has finshed loading
//await page.waitForLoadState('networkidle'); 
 console.log(await title.allTextContents());



});