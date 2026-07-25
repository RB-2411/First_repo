import { test } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
// login.spec.ts
test('Login test @smoke', async ({ page }) => { 
    console.log("1st login Smoke test")
 });

 test('Login test @regression', async ({ page }) => { 
    console.log("1st regression test")
 });



// checkout.spec.ts
test('Checkout test @smoke', async ({ page }) => { 
     console.log("2nd Smoke test")
 });