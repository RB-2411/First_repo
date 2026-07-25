import {expect, test} from '@playwright/test';
import { log } from 'console';
import dotenv from "dotenv";

dotenv.config({path : 'tests/.env.login'})

test('loginPage', async ({page}) =>
{
  
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 const username = await page.fill("#username", userName);
 const password = await page.fill("[name*='password']", passWord);
 //const radio = page.locator("//label[@class='customradio'][2]");
 await page.pause();
 const signIn = await page.click("[name='signin']");

 });