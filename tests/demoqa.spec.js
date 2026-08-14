import {test} from "@playwright/test"

test("demoqa text box",async ({page}) => {
    await page.goto("https://demoqa.com/text-box");
    await page.getByPlaceholder("Full Name").fill("Arya");
    await page.getByPlaceholder("name@example.com").fill("Arya@gmail.com");
    await page.getByPlaceholder("Current Address").fill("Chennai - 600001, Tamilnadu");
    await page.locator('textarea[id="permanentAddress"]').fill("Chennai - 600001, Tamilnadu")
    await page.locator('#submit').click();
    await page.waitForTimeout(3000);
})