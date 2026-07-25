import {test} from '@playwright/test'

test.use({ storageState: 'test_data/Authentication.json' });

test('local storage save', async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.pause();
})