import {test} from "@playwright/test"
test("demowebshop",async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByText("Register").click();
    await page.locator("#gender-female").click();
    await page.locator("#FirstName").fill("Arya");
    await page.locator("#LastName").fill("Raya");
    await page.locator("#Email").fill("Arya@gmail.com");
    await page.locator("#Password").fill("Arya@123");
    await page.locator("#ConfirmPassword").fill("Arya@123");
    await page.locator("#register-button").click();
    await page.waitForTimeout(3000);
})