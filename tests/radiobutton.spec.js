import {test} from "@playwright/test"

test.only("radio button",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0");
    // 1. What payment method do you prefer?
    await page.locator("input[value='Upi']").check();
    await page.locator("input[value='emi']").check();
    // 2.When would you like your order to be delivered ?
    await page.locator("input[value='office']").check();
    await page.waitForTimeout(3000);
    // Continue button
    await page.locator("button[id='btn']").click();
    await page.waitForTimeout(3000);
})