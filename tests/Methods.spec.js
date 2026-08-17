import {test} from "@playwright/test"
import { log } from "node:console";
test("all text content",async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('input[id="twotabsearchtextbox"]').fill("shirt");
    await page.waitForTimeout(3000);
    
    //!allTextContents()
    let content=await page.locator('div[class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
    console.log(content);

    //!all()
    let contentLocation=await page.locator('div[class="s-suggestion s-suggestion-ellipsis-direction"]').all();
    console.log(contentLocation);
})