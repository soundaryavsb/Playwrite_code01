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
test("iframe switch",async ({page}) => {
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

// Assignment 1
test.only("iframe assignment",async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    let frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
    await frame1.locator('input[name="mytext1"]').fill('frame1');
    await page.waitForTimeout(1000);

    let frame2=await page.frameLocator('frame[src="frame_2.html"]');
    await frame2.locator('input[name="mytext2"]').fill('frame 2');
    await page.waitForTimeout(1000);

    let frame3=await page.frameLocator('frame[src="frame_3.html"]');
    await frame3.locator('input[name="mytext3"]').fill('frame 3');
    let frame5= await frame3.frameLocator('iframe[src="https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true"]');
    //I am human check radio button
    await frame5.locator('div[aria-label="I am a human"]').check();
    //Web Testing
    await frame5.locator('div[aria-label="Web Testing"]').check();
    await page.waitForTimeout(1000);
    await frame5.locator('div[aria-label="General Web Automation"]').check();
    await page.waitForTimeout(2000);
    //Next button
    await frame5.locator('//span[text()="Next"]').click();
    await page.waitForTimeout(2000);
    //Short Text
    await frame5.locator("//span[text()='Enter a short text']/../../../following-sibling::div[1]//input").fill("Hi");
    await page.waitForTimeout(3000);
    //long text
    await frame5.locator("//span[text()='Enter a long answer']/../../../following-sibling::div[1]//textarea").fill("Wings of Fire, Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs. Kalam started his career, after graduating from Aerospace engineering at Madras Institute of Technology, at Hindustan Aeronautics Limited and was assigned to build a hovercraft prototype. Later he moved to ISRO and helped establish the Vikram Sarabhai Space Centre and pioneered the first space launch-vehicle program. During the 1990s and early 2000, Kalam moved to the DRDO to lead the Indian nuclear weapons program, with particular successes in thermonuclear weapons development culminating in the operation Smiling Buddha and an ICBM Agni.");
    //Submit
    await frame5.locator("//span[text()='Submit']").click();
    await page.waitForTimeout(3000);
    
    let frame4=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4'});
    await frame4.locator('input[name="mytext4"]').fill('frame 4');
    await page.waitForTimeout(1000);
})
