import {test} from "@playwright/test"

//!Scroll vertical using wheel(x,y) 
//* x=0, y = - values
test("scroll vertical",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,1000);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,-1000);
    await page.waitForTimeout(3000);
})

test.only("scroll into view element",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
    await page.locator("input[type='checkbox']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator("input[type='checkbox']").click();
    await page.waitForTimeout(3000);
    await page.locator("input[type='checkbox']").uncheck();
    await page.waitForTimeout(3000);
})

