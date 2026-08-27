import {test} from "@playwright/test"

test("New Tab",async ({browser}) => {
    let context=await browser.newContext();
    let page1=await context.newPage();
    await page1.goto("https://www.flipkart.com/");
    await page1.waitForTimeout(3000);
    
    let page2=await context.newPage();
    await page2.goto("https://www.amazon.in/");
    await page2.waitForTimeout(3000);
    
})