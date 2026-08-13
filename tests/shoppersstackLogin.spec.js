import {test} from "@playwright/test"

test("shoppersstack Login",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('#loginBtn').click();
    await page.locator('button[id="Create Account"]').click();
    await page.waitForTimeout(2000);
})