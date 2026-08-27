import {test} from "@playwright/test"

//? 1.Wait for text
test("Explicait Wait",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]',{hasText:"Welcome to ShoppersStack. Enjoy shopping with us."}).waitFor();
    await page.locator('//button[text()="Login"]',{hasText:"Log"}).waitFor();
})

//?Wait for timeout - give waits for a specific element
test("Wait for timeout",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]').waitFor({timeout:50000,state:"attached"})
})

//?Wait for selector
test.only("Wait for selector",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.waitForSelector('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]'); //!default state visible
    await page.waitForSelector('//button[text()="Login"]',{state:"attached"});
    //! state: "attached","visible","detached","hidden"
    await page.locator('//button[text()="Login"]').click();
})

//?wait for state
test("Wait for state",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]').waitFor({state:"attached"});
    await page.locator('//button[text()="Login"]').waitFor({state:"attached"}); //!30s
})

//?Wait for navigation
test("Wait for navigation",async ({browser}) => {
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0");
    // await page.waitForNavigation();
    // await page.locator('//button[text()="view more"]').first().click();
    let [nav]=await Promise.all([ //! Execution in parallel
    await page.waitForNavigation(),
    await page.locator('//button[text()="view more"]').first().click()
    ])
})

//?WaitForLoadState - load
test("Wait for load state",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("load");
    console.log("loaded");
    await page.getByPlaceholder("Search Amazon.in").fill("Shirt");
})

//?WaitForLoadState - domcontentloaded
test("Wait for load state - dom",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("domcontentloaded");
    console.log("loaded");
    await page.getByPlaceholder("Search Amazon.in").fill("Shirt");
})

//?WaitForLoadState - networkidle
test("Wait for load state - networkidle",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForLoadState("networkidle");
    console.log("loaded");
    await page.getByPlaceholder("Search Amazon.in").fill("Shirt");
})

//? Wait for function
test("Wait for function",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForFunction(()=>{
        // return document.readyState==='interactive'
        // return document.readyState==='complete'
        return document.readyState==='loading'
    });
    await page.getByPlaceholder("Search Amazon.in").fill("Shirt");
})