import {test, expect} from '@playwright/test'

test('Screenshot', async ({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.screenshot({path: 'screeenshot.png'});

});

test.only('validate screenshot', async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
expect(await page.screenshot()).toMatchSnapshot('login-chromium-win32.png');

})