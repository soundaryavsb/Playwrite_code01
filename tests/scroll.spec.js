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

test("scroll into view element",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical");
    await page.locator("input[type='checkbox']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator("input[type='checkbox']").click();
    await page.waitForTimeout(3000);
    let AcceptOurPolicy=await page.getByText("Accept Our Policy");
    console.log("Accept Our Policy Visible: "+AcceptOurPolicy.isVisible());
    await page.locator("input[type='checkbox']").uncheck();
    // AcceptOurPolicy=await page.getByText("Accept Our Policy");
    console.log("Accept Our Policy Visible: "+AcceptOurPolicy.isVisible());
    await page.waitForTimeout(3000);
})

//!Scroll horzontal using wheel(x,y) 
test.only("scroll horizontal",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal");
    await page.waitForTimeout(3000);
    await page.mouse.wheel(1000,0);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(-1000,0);
    await page.waitForTimeout(3000);
})
