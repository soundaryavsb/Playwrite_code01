import {test} from "@playwright/test"

test("keyboard action",async ({page}) => {
  await page.goto("https://demoapps.qspiders.com/ui");
    // !way 1: type
    // await page.locator("input[id='name']").type("Arya");
    // await page.waitForTimeout(2000);
    //!way 2: type
    // await page.locator("input[id='name']").click();
    // await page.keyboard.type("Arya");
    // await page.waitForTimeout(2000);
    //!way 3: type
    await page.type("input[id='name']","Arya");
    await page.waitForTimeout(2000);
})

test.only("Insert Text",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui");
    await page.locator("input[id='name']").click();
    //!insert Text
    await page.keyboard.insertText("Arya");
    // await page.waitForTimeout(2000);
    //!press - Space
    await page.keyboard.press("Space");
    // await page.waitForTimeout(2000);
    await page.keyboard.insertText("Siv");
    // await page.waitForTimeout(2000);
    await page.keyboard.press("Space");
    //!Up and Down action
    await page.keyboard.down("N");
    await page.keyboard.up("N");
    // await page.waitForTimeout(2000);
    await page.keyboard.down("I");
    await page.keyboard.up("I");
    // await page.waitForTimeout(2000);
    await page.keyboard.down("C");
    await page.keyboard.up("C");
    await page.waitForTimeout(2000);
    //! press - Tab,Control+a,Control+c,Control+v
    await page.keyboard.press("Tab");
    await page.keyboard.type("Arya@gmail.com");
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+a","Control+c");
    // await page.keyboard.press("Control+c");
    
    await page.locator("input[id='password']").click();
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+v");
    await page.waitForTimeout(2000);

    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(2000);
})