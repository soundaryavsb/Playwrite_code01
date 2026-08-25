import {test} from "@playwright/test"

//* drag and drop using mouse action:
test("drag and drop",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0");
    await page.locator("//div[text()='Drag Me']").hover();
    await page.waitForTimeout(3000);
    await page.mouse.down();
    await page.waitForTimeout(3000);
    await page.mouse.move(400,300);
    await page.waitForTimeout(3000);
    await page.mouse.up();
    await page.waitForTimeout(3000);
})

//* drag and drop to target using mouse action:
test("drag and drop to target",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    //! Mobile Charger to Mobile Accessories
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Mobile Cover to Mobile Accessories
    await page.locator("//div[text()='Mobile Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Mobile Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Charger to Laptop Accessories
    await page.locator("//div[text()='Laptop Charger']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Cover to Laptop Accessories
    await page.locator("//div[text()='Laptop Cover']").hover();
    await page.mouse.down();
    await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
})

//* drag and drop to target using bounding box:
test("drag and drop to target using bounding box",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    //! Mobile Charger to Mobile Accessories
    await page.locator("//div[text()='Mobile Charger']").hover();
    await page.mouse.down();
    let box1=await page.locator("//div[text()='Mobile Accessories']").boundingBox();
    console.log(box1,box1.x,box1.y);
    await page.mouse.move(box1.x,box1.y);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Mobile Cover to Mobile Accessories
    await page.locator("//div[text()='Mobile Cover']").hover();
    await page.mouse.down();
    //await page.locator("//div[text()='Mobile Accessories']").boundingBox;
    await page.mouse.move(box1.x,box1.y);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Charger to Laptop Accessories
    await page.locator("//div[text()='Laptop Charger']").hover();
    await page.mouse.down();
    let box2=await page.locator("//div[text()='Laptop Accessories']").boundingBox();
    await page.mouse.move(box2.x,box2.y);
    await page.mouse.up();
    await page.waitForTimeout(3000);
    //! Laptop Cover to Laptop Accessories
    await page.locator("//div[text()='Laptop Cover']").hover();
    await page.mouse.down();
    // await page.locator("//div[text()='Laptop Accessories']").hover();
    await page.mouse.move(box2.x,box2.y);
    await page.mouse.up();
    await page.waitForTimeout(3000);
})

//* drag and drop to target using dragTo():
test.only("drag and drop using method",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2");
    //! To Mobile Accessories:
    let Mobile_Charger=await page.locator("//div[text()='Mobile Charger']");
    let Mobile_Cover=await page.locator("//div[text()='Mobile Cover']");
    let Mobile_Accessories=await page.locator("//div[text()='Mobile Accessories']");
    //! To Laptop Accessories:
    let Laptop_Charger=await page.locator("//div[text()='Laptop Charger']");
    let Laptop_Cover=await page.locator("//div[text()='Laptop Cover']");
    let Laptop_Accessories=await page.locator("//div[text()='Laptop Accessories']");
    //! dragTo():
    await Mobile_Charger.dragTo(Mobile_Accessories);
    await Mobile_Cover.dragTo(Mobile_Accessories);
    await Laptop_Charger.dragTo(Laptop_Accessories);
    await Laptop_Cover.dragTo(Laptop_Accessories);
    await page.waitForTimeout(2000);
})