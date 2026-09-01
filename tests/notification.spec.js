import {test} from "@playwright/test"

//* auto handling of notification - denied
test("notification deny",async({browser})=>{
    let context=await browser.newContext();
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.waitForTimeout(1000);
    await page.locator('button[id="browNotButton"]').click();
    await page.waitForTimeout(1000);
    let state=await page.evaluate(()=>{
        return Notification.requestPermission();
    })
    console.log(state);
})

//*accepting notification 
test.only("notification accept",async({browser})=>{
    let context=await browser.newContext({permissions:["notifications"]}); //!Notification Accept
    let page=await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.waitForTimeout(1000);
    await page.locator('button[id="browNotButton"]').click();
    await page.waitForTimeout(1000);
    let state=await page.evaluate(()=>{
        return Notification.requestPermission();
    })
    console.log(state);
})