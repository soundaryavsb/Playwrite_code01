import {test} from "@playwright/test"
import { log } from "console";

//browser fixture
test("fixtures",async({browser})=>{ //tells the browser
    let context=await browser.newContext(); //browser session(isolated session(profile), incognito mode)
    let page=await context.newPage(); //tab within the browser session
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
}) //control to multiple context(browser session) multiple windows

//context
test("context fixture",async({context})=>{ //default it will create browser session in the all the 3 browser
    let page=await context.newPage();
    await page.goto("url");
}) //control over multiple tabs within one session

// page
test("page fixture",async({page})=>{ //tab inside the default 3 browsers
    await page.goto("url");
})//control over a single tab

//browsername
test("browsername fixture",async({browserName})=>{
    console.log(browserName);
}) //return the name of the browser which is in used