import {test} from '@playwright/test';
import { log } from 'node:console';


const fn = "Rahul";
const ln = "Bhawar";
const gmail = "abc@gmail.com";
const fnlocator = "//*[@id='firstName']";
test('Resister page', async ({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/register");
await page.locator(fnlocator).fill(fn);
await page.locator("//*[@id='lastName']").fill(ln);
console.log("fn/ln selected");
await page.locator("//*[@id='userEmail']").fill(gmail);
await page.locator("//*[@id='userMobile']").fill("9876543210");
const dropdown = await page.locator("//select[@formcontrolname='occupation']");
await dropdown.selectOption("Engineer");
console.log("occupation selected");
const gender = await page.locator("//input[@value='Male']").click();
console.log("gender selected");
const password = await page.locator("input#userPassword").fill("start01");
const confirmpass = await page.locator("input#confirmPassword").fill("start01");
const checkbox = await page.locator("//input[@type='checkbox']").click()
const resister = await page.locator("input#login").click();
console.log("clicked on resister button");



});