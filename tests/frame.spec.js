import {test} from "@playwright/test"

//Total no of iframe
test("Total iframe",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let totalframes=await page.frames();
    console.log(totalframes.length);
})

//Title of all frames
test("iframe title",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let totalframes=await page.frames();
    for(let frame of totalframes){
        console.log(await frame.title());
    }
})

//Switching frame
test.only("iframe switch",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //!frame() - url
    let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});
    await frame1.locator("input[name='mytext1']").fill("Hello");
    await page.waitForTimeout(1000);
    
    //!frameLocator() - locators
    let frame2=await page.frameLocator("frame[src='frame_2.html']");
    await frame2.locator('input[name="mytext2"]').fill("Welcome");
    await page.waitForTimeout(1000);

    //!frame() - name attribute
    await page.goto("https://letcode.in/frame");
    let frame3=await page.frame({name: "firstFr"});
    await frame3.locator('input[name="fname"]').fill("Arya");
    await page.waitForTimeout(3000);
})