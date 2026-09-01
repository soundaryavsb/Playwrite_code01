import {test} from "@playwright/test"

//Total no of iframe
test("Total iframe",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let totalframes=await page.frames();
    console.log(totalframes.length);
})

//Title of all frames
test.only("iframe title",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let totalframes=await page.frames();
    for(let frame of totalframes){
        console.log(await frame.title());
    }
})