import {expect, test} from '@playwright/test';
import { log } from 'console';
//import dotenv from "dotenv";

//const {loginPage, LoginPage} = require ('./POM/Login_PageObject.spec');
//const {dashboardPage, DashBoard} = require('./POM/Dashboard_PageObject.spec');

//dotenv.config({path : 'tests/.env.login'})

test('loginPage', async ({page}) =>
{
    const un = "anshika@gmail.com";
    const pw = "Iamking@000";
   const productName = 'ZARA COAT 3';
//    const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   const loginpage = new LoginPage(page);
   await loginpage.goto();
   await loginpage.validLogin(un,pw);

   const dashboardPage = new (DashBoard);
   await dashboardPage.productName(productName);

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
   expect(page.locator(".user__name [type='text']").first()).toHaveText(un);
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