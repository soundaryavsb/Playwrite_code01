import {test} from "@playwright/test"
// import { dirname } from "node:path";
import path from "node:path"
//Upload single file
test("Upload single file",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input[id="singleFileInput"]').setInputFiles("D:/visual Studio Code WorkSpace/Playwright_B1/Demo Files/demo1");
    await page.getByText("Upload Single File").click();
    await page.waitForTimeout(2000);
})

// Upload multiple files
test("Upload multiple files",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input[id="multipleFilesInput"]').setInputFiles(["D:/visual Studio Code WorkSpace/Playwright_B1/Demo Files/demo1","Demo Files/demo2"]);
    await page.getByText("Upload Multiple Files").click();
    await page.waitForTimeout(3000);
})

//printing directory of current control
test("directory name",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    console.log(__dirname);  
})

//change the directory path
test.only("change directory name",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // console.log(__dirname+"../Demo Files/demo1");  
    let filePath=path.join(__dirname,"../Demo Files/demo1.pdf");

    console.log(filePath);
    await page.locator('input[id="singleFileInput"]').setInputFiles(filePath);
    await page.getByText('Upload Single File').click();
    await page.waitForTimeout(2000);
})

//Assignment 1:
//Upload single file
test("Assignment Upload single file",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.locator('input[id="singleFileInput"]').setInputFiles("D:/Demo Files/Demo 1.txt");
    await page.getByText("Upload Single File").click();
    await page.waitForTimeout(2000);
})

// Upload multiple files
test("Ass Upload multiple files",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('input[id="multipleFilesInput"]').setInputFiles(["D:/Demo Files/Demo 1.txt","D:/Demo Files/Demo 2.txt"])
    await page.getByText("Upload Multiple Files").click();
    await page.waitForTimeout(3000);
})
