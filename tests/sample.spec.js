import {test} from "@playwright/test";

test("sample test for git", async ({browser})=>{
const admin = await browser.newContext();
const user = await browser.newContext();

const adminPage =await admin.newPage();
await adminPage.goto("https://www.naukri.com/");

const userPage = await user.newPage();
userPage.goto("https://www.udemy.com");



})