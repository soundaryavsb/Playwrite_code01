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
test("window handle",async ({browser}) => {
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/s?k=shirt&crid=3AXQOTXVR318R&sprefix=shirt%2Caps%2C286&ref=nb_sb_noss_2");
    await page.waitForTimeout(3000);
    page.getByText("Men's Checkered Casual Shirt - Regular Fit | Full Sleeve | Pure Cotton (Available in Plus Sizes)']").click();
    await page.waitForTimeout(3000);
})
test("window handle 2",async ({browser}) => {
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/s?k=shirt&crid=3AXQOTXVR318R&sprefix=shirt%2Caps%2C286&ref=nb_sb_noss_2");
    await page.waitForTimeout(3000);
    page.getByText("Men's Checkered Casual Shirt - Regular Fit | Full Sleeve | Pure Cotton (Available in Plus Sizes)']").click();
    await page.waitForTimeout(3000);
})


//Assignment 1: //!done
test("Qspider Multiple window",async ({browser}) => {
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2");
    // await page.waitForTimeout(3000);
    let [newpage]=await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//button[text()='Shop Now']").click()
    ])
    // await newpage.waitForTimeout(3000);
    await newpage.locator("//button[text()='Add to Cart']").click();
    await newpage.locator("//button[text()='Add to Cart']").click();
    let nOfProducts=await newpage.locator("//section[@class='relative']/article").textContent();
    console.log(nOfProducts);
    // await newpage.waitForTimeout(3000);
})