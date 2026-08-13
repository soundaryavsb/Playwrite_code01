import {test} from "@playwright/test"

test("shoppersstack Login",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('#loginBtn').click();
    await page.locator('button[id="Create Account"]').click();
    await page.locator('input[id="First Name"]').fill("Arya");
    await page.locator('input[id="Last Name"]').fill("Raya");
    await page.locator('#Female').check();
    await page.locator('input[id="Phone Number"]').fill("9922334455");
    await page.locator('input[id="Email Address"]').fill("S9922334455@gmail.com");
    await page.locator('input[id="Password"]').fill("S99999999%f");
    await page.locator('input[id="Confirm Password"]').fill("S99999999%f");
    await page.locator('input[id="Terms and Conditions"]').check();
    await page.locator('button[id="btnDisabled"]').click();
    await page.waitForTimeout(3000);
})