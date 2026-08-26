import {test} from "@playwright/test"

test("check box",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
    await page.locator("input[id='domain_a']").click();
    await page.waitForTimeout(3000);
    await page.locator("input[id='domain_a']").click();
    await page.waitForTimeout(3000);

    await page.locator("input[id='domain_b']").click();
    await page.waitForTimeout(3000);
    await page.locator("input[id='domain_b']").check();
    await page.waitForTimeout(3000);

    await page.locator("input[id='domain_c']").check();
    await page.waitForTimeout(3000);
    
    await page.locator("input[id='domain_d']").uncheck();
    await page.waitForTimeout(3000);
})