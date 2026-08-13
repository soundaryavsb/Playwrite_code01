import {test} from "@playwright/test"

test("Login Page",async ({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator('input[id="username"]').fill("student");
    // await page.locator('input[id="password"]').fill("Password123");
    await page.locator('#password').fill("Password123");
    // await page.locator('button[id="submit"]').click();
    await page.locator('button#submit').click();
    await page.waitForTimeout(3000);
})