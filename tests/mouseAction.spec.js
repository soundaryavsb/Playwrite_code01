import {test} from "@playwright/test"

//!click
test("click",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1");
    await page.locator('button[id="btn_a"]').click({button:"right"});
    // await page.locator('//div[text()="Yes"]').click();
    await page.locator('//div[text()="No"]').click();
    await page.waitForTimeout(3000);
})

//!Double click
test("Double Click",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    await page.locator('button[id="btn_a"]').dblclick();
    await page.waitForTimeout(3000);
    await page.locator('button[id="btn_b"]').click({clickCount:2})
    await page.waitForTimeout(3000);
})

//!mouse hover
test("hover action",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
    await page.locator('img[class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover();
    await page.waitForTimeout(3000);
})

//!mouse move, drag and drop
test.only("move",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
    await page.locator('div[class="cursor-move bg-orange-600 w-36 h-11 p-3 text-white absolute react-draggable"]').hover();
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(450,600);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
})



