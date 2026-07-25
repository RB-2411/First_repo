import {expect, test} from '@playwright/test';
import { log } from 'console';
import dotenv from "dotenv";

dotenv.config({path : 'tests/.env.login'})

test('@ligin loginPage', async ({page}) =>
{
  const url =process.env.urlLogin ;
  const un = process.env.userName;
  const pa = process.env.passWord;

  console.log(url);
  console.log(un);
  console.log(pa);
 await page.goto(url);
 const username = page.locator("#username");
 const password = page.locator("[name*='password']");
 const radio = page.locator("//label[@class='customradio'][2]");
 const signIn = page.locator("[name='signin']");
 const titles = page.locator(".card-body a");

 await username.fill("wronguser");
 
 console.log("username filled");
 await password.fill("2144124");
 console.log("password filled");
 await radio.click();
  console.log("radio clicked");
  await page.locator("[class*='btn btn-success']").click();
  await signIn.click();
console.log("signIn clicked");
console.log(await page.locator("[style*='block']").textContent());
const text = await expect(page.locator("[style*='block']")).toContainText("Incorrect");

await username.fill("");
await username.fill(un);
await password.fill("");
await password.fill(pa);
await signIn.click();
console.log(un);
console.log(pa);
console.log(await page.title());
console.log(await titles.nth(1).textContent());
console.log(await titles.last().textContent());
console.log(await titles.allTextContents());
});