import {test} from "@playwright/test"

//?Wait for text
test("Explicait Wait",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]',{hasText:"Welcome to ShoppersStack. Enjoy shopping with us."}).waitFor();
    await page.locator('//button[text()="Login"]',{hasText:"Login"}).waitFor();
})

//?Wait for timeout - give waits for a specific element
test("Wait for timeout",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]').waitFor({timeout:50000,state:"attached"})
})

//?Wait for selector
test("Wait for selector",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.waitForSelector('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]');
    await page.waitForSelector('//button[text()="Login"]');
})

//?wait for state
test.only("Wait for state",async ({page}) => {
    await page.goto("https://shoppersstack.com/");
    await page.locator('//h3[text()="Welcome to ShoppersStack. Enjoy shopping with us."]').waitFor({state:"attached"});
    await page.locator('//button[text()="Login"]').waitFor({state:"attached"}); //!30s
})


