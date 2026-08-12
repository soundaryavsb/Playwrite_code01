import {test} from "@playwright/test"

test("page.goto()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
})

test("page.setViewportSize()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.setViewportSize({width:500,height:500});
    await page.waitForTimeout(3000);
})

test("page.viewportSize()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    let size=await page.viewportSize();
    console.log(size);
    await page.waitForTimeout(3000);
})

test("page.title()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    let title=await page.title();
    console.log(title);
})

test("page.url()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    let url=await page.url();
    console.log(url);
})

test("page.screenshot()",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.screenshot({path: "screenshot/amazon.png"});
})