import {Page} from "@playwright/test"
export async function login(page) {
    await page.goto("https://shoppersstack.com/")
    await page.getByRole("button",{name:"Login"}).click();
    await page.waitForTimeout(3000);
    
}