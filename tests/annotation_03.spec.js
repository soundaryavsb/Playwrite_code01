import {test} from "@playwright/test"

//slow
test("test slow",async({page,browserName})=>{
if(browserName==="chromium")
{
    test.slow(); //default 30s --> slow the time triple. so wait time became 90s
    console.log("Slow");
    await page.goto("https://www.");
}
});