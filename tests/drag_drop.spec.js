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

//* drag and drop to target using mouse action:
test.only("drag and drop to target",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    //! Mobile Charger to Mobile Accessories
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Mobile Cover to Mobile Accessories
    await page.locator("//div[text()='Mobile Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Charger to Laptop Accessories
    await page.locator("//div[text()='Laptop Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Cover to Laptop Accessories
    await page.locator("//div[text()='Laptop Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
})
