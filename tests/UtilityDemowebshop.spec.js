import {test} from "@playwright/test"
import { FirstName, generateEmailID, LastName } from "../utilities/demowebshopUtilities";
test("demo Web Shop",async ({page}) => {
    //Demo Web Shop WebSite
    await page.goto("https://demowebshop.tricentis.com/");
    //Click Register button
    await page.getByRole("link",{name:"Register"}).click();
    //First name
    await page.locator('input[id="FirstName"]').fill(FirstName());
    //LastName
    await page.locator('input[id="LastName"]').fill(LastName());
    //Email
    await page.locator('input[id="Email"]').fill(generateEmailID());
    //Password
    await page.locator('input[id="Password"]').fill("Admin@123");
    //Confirm Password
    await page.locator('input[id="ConfirmPassword"]').fill("Admin@123");
    //Register button
    await page.getByRole("button",{name:"Register"}).click();
    await page.waitForTimeout(3000);
})