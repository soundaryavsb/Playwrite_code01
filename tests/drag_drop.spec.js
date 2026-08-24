import {test} from "@playwright/test"

//* drag and drop using mouse action:
test("drag and drop",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
    await page.locator("//div[text()='Drag Me']").hover();
    await page.waitForTimeout(3000);
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(400,300);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
})