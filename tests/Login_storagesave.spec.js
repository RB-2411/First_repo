import {test} from '@playwright/test'

test('local storage save', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const username = page.locator("#username");
    await username.fill('rahulshettyacademy');
    const password = page.locator("[name*='password']");
    await password.fill('Learning@830$3mK2');
    const signIn = page.locator("[name='signin']");
    await signIn.click();

    //await page.waitForTimeout(5000)

    await page.context().storageState({path:'test_data/Authentication.json'});



})
test.only('local storage run', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await page.waitForTimeout(5000);
});