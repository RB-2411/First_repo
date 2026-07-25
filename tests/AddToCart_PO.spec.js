import {expect, test} from '@playwright/test';

const {LoginPage} = require('../pageObjects/Login');
const {dashboardPage, dashBoard} = require('../pageObjects/Dashboard');

test('loginPage', async({page}) =>
{
    const username = "anshika@gmail.com";
    const password = "Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = await page.locator(".card-body");
   const loginPage = new LoginPage(page);
   await loginPage.goTo();
   await loginPage.validLogin(username,password);
   const dashboard = new dashBoard(productName);
   await dashboard.dashBoardPage(productName);

//    await page.pause();
   await page.locator("[routerlink*='cart']").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   console.log(bool);
   expect(bool).toBeTruthy();
   await page.getByRole('button', {name : 'Checkout'}).click();
   
   await page.getByPlaceholder('Select Country').pressSequentially("ind", {delay : 150});
   //await page.pause();
   const dropdown = await page.locator(".ta-results");
   await dropdown.waitFor();
   const optCount = await dropdown.locator("button").count();
   for(let i=0; i<optCount;++i){
      const text = await dropdown.locator("button").nth(i).textContent();
      if(text===" India"){
        await dropdown.locator("button").nth(i).click();
        break;
      }
   }
   expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   const orderCount = await rows.count();

   for(let i=0; i<orderCount;++i){
      const rowOrderID = await rows.nth(i).locator("th").textContent();
      if(orderId.includes(rowOrderID)){
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
 const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();

});