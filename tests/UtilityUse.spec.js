import {test} from "@playwright/test"
import { generatePhoneNumber,generateEmailID } from "../utilities/genericutitlity.js"
test("Utitlty use",async ({page}) => {
    console.log(generateEmailID());
    console.log(generatePhoneNumber());
    
    await page.goto("https://shoppersstack.com/");
    //click login button
    await page.getByRole("button",{name:"Login"}).click();
    //Click Create Account button
    await page.getByRole("button",{name:"Create Account"}).click()
    //First Name Text Box
    await page.getByRole("textbox",{name:"First Name"}).fill("Arya");
    //Last Name text Box
    await page.getByRole("textbox",{name:"Last Name"}).fill("Raya");
    //Male Radio Button
    await page.locator('input[id="Male"]').check();
    //Phone number text box
    await page.getByRole("textbox",{name:"Phone Number"}).fill(generatePhoneNumber())
    //Email text box
    await page.getByRole("textbox",{name:"Email Address"}).fill(generateEmailID())
    //Password Text Box
    await page.locator('input[id="Password"]').fill("Admin@123");
    //Confirm Password Text Box
    await page.locator('input[id="Confirm Password"]').fill("Admin@123");
    //Terms and Conditions
    await page.locator('input[id="Terms and Conditions"]').check();
    //Register Button
    await page.getByRole("button",{name:"Register"}).click();
    await page.waitForTimeout(3000);
})