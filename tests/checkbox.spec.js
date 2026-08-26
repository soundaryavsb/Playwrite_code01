import {test} from "@playwright/test"

test("check box",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    // 1. On which platform would you like to receive notifications ?
    // Email click and click --> unchecked //!Issue
    await page.locator("input[id='domain_a']").click();
    await page.waitForTimeout(3000);
    await page.locator("input[id='domain_a']").click();
    // WhatsApp click and check --> checked //!solution
    await page.locator("input[id='domain_b']").click();
    await page.waitForTimeout(3000);
    await page.locator("input[id='domain_b']").check();
    // Check Message //!if not checked then it will checked
    await page.locator("input[id='domain_c']").check();
    // uncheck Yahoo //!if checked then it will uncheck
    await page.locator("input[id='domain_d']").uncheck();
    await page.waitForTimeout(3000);

    // 2. Would you like to receive recommendations for similar products?
    await page.locator("input[id='mode_a']").check();
    await page.locator("input[id='mode_b']").check();
    await page.waitForTimeout(3000);

    // 3. Would you like to receive any customer assistance for this product?
    await page.locator("input[id='mode_e']").check();
    await page.locator("input[id='mode_f']").check();
    await page.waitForTimeout(3000);

    // Continue button
    await page.locator("input[value='Continue']").click();
    await page.waitForTimeout(3000);
})