import {chromium, firefox, test, webkit} from "@playwright/test"

// test("page.goto()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
// })

// test("page.setViewportSize()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
//     await page.setViewportSize({width:500,height:500});
//     await page.waitForTimeout(3000);
// })

// test("page.viewportSize()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
//     let size=await page.viewportSize();
//     console.log(size);
//     await page.waitForTimeout(3000);
// })

// test("page.title()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000);
//     let title=await page.title();
//     console.log(title);
// })

// test("page.url()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000);
//     let url=await page.url();
//     console.log(url);
// })

// test("page.screenshot()",async ({page}) => {
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000);
//     await page.screenshot({path: "screenshot/amazon.png"});
// })

// test("context cookies",async ({context}) => {
//     let page=await context.newPage();
//     await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000);
//     let cookies=await context.cookies();
//     console.log(cookies);
//     await context.clearCookies();
//     console.log("After clear cookies");
//     cookies=await context.cookies();
//     console.log(cookies);
// })

// test("browser launch",async () => {
//     // let browser=await chromium.launch();
//     // let browser=await webkit.launch();
//     let browser=await firefox.launch(); //May be all browsers launch if browsers not commented in config file
//     let context=await browser.newContext();
//     let page=await context.newPage();
//     // await page.goto("https://www.amazon.in/");
//     await page.waitForTimeout(3000);
// })

test("context.newContext()",async ({browser}) => {
    let context=await browser.newContext();
})

test("context.newPage()",async ({context}) => {
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/");
})

test("browser.close()",async ({browser}) => {
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://www.amazon.in/");
    browser.close();
})

