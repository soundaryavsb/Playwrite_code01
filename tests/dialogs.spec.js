import {test} from "@playwright/test"
import { log } from "console";

//* auto handled - auto dennied
test("alert",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("button[id='alertBtn']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator("button[id='alertBtn']").click();
    await page.waitForTimeout(3000);
})

//*Event listner
test("page.on",async ({page}) => {
    page.on("dialog",(dialog)=>{
        dialog.accept();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    //?Simple alert
    await page.locator("button[id='alertBtn']").click();
    await page.waitForTimeout(3000);
    //?Confirmation alert
    await page.locator("button[id='confirmBtn']").click();
    await page.waitForTimeout(3000);
    //?Prompt alert
    //! It is cancelled when handling using accept
    await page.locator("button[id='promptBtn']").click();
    await page.waitForTimeout(3000);
})

//*dealing with prompt - page on
test("dealing with all dialogs",async ({page}) => {
    page.on(("dialog"),async(dialog)=>{
        if(dialog.type === "alert")
        {
        dialog.accept();
        console.log(dialog.message());
        
        }
        else if(dialog.type === "confirm")
        {
        dialog.accept();
        }
        else(dialog.type === "prompt")
        {
        dialog.accept("Barbie");
        // dialog.accept(); //!cancelled
        }
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    //?Simple alert
    await page.locator("button[id='alertBtn']").click();
    await page.waitForTimeout(3000);
    //?Confirmation alert
    await page.locator("button[id='confirmBtn']").click();
    await page.waitForTimeout(3000);
    //?Prompt alert
    //! It is accepted when using if condition with text
    await page.locator("button[id='promptBtn']").click();
    await page.waitForTimeout(3000);
})

//*dealing with prompt - page once
test("dealing with all dialogs only once",async ({page}) => {
    page.once(("dialog"),async(dialog)=>{
        if(dialog.type === "alert")
        {
        dialog.accept();
        }
        else if(dialog.type === "confirm")
        {
        dialog.accept();
        }
        else(dialog.type === "prompt")
        {
        dialog.accept("Barbie");
        // dialog.accept(); //!cancelled
        }
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    //?Simple alert
    await page.locator("button[id='alertBtn']").click();
    await page.waitForTimeout(3000);
    //?Confirmation alert
    await page.locator("button[id='confirmBtn']").click();
    await page.waitForTimeout(3000);
    //?Prompt alert
    //! It is accepted when using if condition with text
    await page.locator("button[id='promptBtn']").click();
    await page.waitForTimeout(3000);
})

//Assignment 1:
//* auto handled - auto dennied
test("alert deny",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("//section[text()='Popups']").click();
    await page.waitForTimeout(2000);
    await page.locator("//section[text()='Javascript']").click();
    await page.waitForTimeout(2000);
    //confirm 
    await page.locator("(//input[@type='checkbox'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[2]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[3]").click();
    await page.waitForTimeout(2000);
    await page.locator("button[id='deleteButton']").click();
    await page.waitForTimeout(3000);
    //prompt
    await page.locator("//a[text()='Prompt']").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[2]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[3]").click();
    await page.waitForTimeout(2000);
    await page.locator("button[id='deleteButton']").click();
    await page.waitForTimeout(2000);
})

//*dealing with prompt - page on 
test.only("page.on - Qspider demo",async ({page}) => {
    page.on("dialog",(dialog)=>
    {
        if(dialog.type() === "alert")
        {
            dialog.accept();
            console.log(dialog.message());
        }
        else if(dialog.type() === "confirm")
        {
            dialog.accept();
            console.log(dialog.message());
        }
        else if(dialog.type() === "prompt")
        {
            dialog.accept("deleting");
            console.log(dialog.message());
        }
    })
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator("//section[text()='Popups']").click();
    await page.waitForTimeout(2000);
    await page.locator("//section[text()='Javascript']").click();
    await page.waitForTimeout(2000);
    //confirm 
    await page.locator("(//input[@type='checkbox'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[2]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[3]").click();
    await page.waitForTimeout(2000);
    await page.locator("button[id='deleteButton']").click();
    await page.waitForTimeout(3000);
    //prompt
    await page.locator("//a[text()='Prompt']").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[2]").click();
    await page.waitForTimeout(1000);
    await page.locator("(//input[@type='checkbox'])[3]").click();
    await page.waitForTimeout(2000);
    await page.locator("button[id='deleteButton']").click();
    await page.waitForTimeout(2000);
})