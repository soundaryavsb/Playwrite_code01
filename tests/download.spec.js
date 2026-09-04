import {test} from "@playwright/test"
import path from "node:path";
import fs from "fs";

//* Download small file
test("Download small file",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    //Enter text
    await page.getByPlaceholder("Enter text here").fill("Hello, Ready");
    //Download the file
    await page.locator('button[id="downloadButton"]').click();
    await page.waitForTimeout(3000);   
})

//* Download a big files and save
test("Download big file",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    //Enter text
    await page.getByPlaceholder("Enter text here").fill("Hello, Ready");
    //Download the file
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        page.locator('button[id="downloadButton"]').click()
 ])
      await page.waitForTimeout(3000);
    //   await downloadall.saveAs("D:/visual Studio Code WorkSpace/Playwright_B1/Download/file1.txt");
    let downloadpath=path.join(__dirname,"../Download/file2.txt");
    await downloadall.saveAs(downloadpath);
})

//* Download a with suggested file name
test("Download a with suggested file name",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    //Enter text
    await page.getByPlaceholder("Enter text here").fill("Hello, Ready");
    //Download the file
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        page.locator('button[id="downloadButton"]').click()
 ])
      await page.waitForTimeout(3000);
    //   await downloadall.saveAs("D:/visual Studio Code WorkSpace/Playwright_B1/Download/file1.txt");
    let suggestedFileName=downloadall.suggestedFilename();
    let downloadpath=path.join(__dirname,"../Download/"+suggestedFileName);
    await downloadall.saveAs(downloadpath);
})

// //* Delete the Downloaded file
test.only("Delete the Downloaded file",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0');
    //Enter text
    await page.getByPlaceholder("Enter text here").fill("Hello, Ready, Go");
    //Download the file
    let [downloadall]=await Promise.all([
        page.waitForEvent("download"),
        page.locator('button[id="downloadButton"]').click()
 ])
      await page.waitForTimeout(3000);
    //   await downloadall.saveAs("D:/visual Studio Code WorkSpace/Playwright_B1/Download/file1.txt");
    let suggestedFileName=downloadall.suggestedFilename();
    let downloadpath=path.join(__dirname,"../Download/"+suggestedFileName);
    await downloadall.saveAs(downloadpath);
    await page.waitForTimeout(3000);
    // await downloadall.delete(downloadpath);
    // Delete actual saved file
    console.log("Before delete:", fs.existsSync(downloadpath));
    fs.unlinkSync(downloadpath);
    console.log("After delete:", fs.existsSync(downloadpath));
})

// test.only("Delete the Downloaded file", async ({ page }) => 
//     { 
//         await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0'); 
//         // Enter text 
//         await page.getByPlaceholder("Enter text here").fill("Hello, Ready, Go, plan"); 
//         // Download the file 
//         let [downloadall] = await Promise.all([ 
//             page.waitForEvent("download"), 
//             page.locator('button[id="downloadButton"]').click() ]); 
//         // Get suggested file name 
//         let suggestedFileName = downloadall.suggestedFilename(); 
//         // Create download path 
//         let downloadpath = path.join(__dirname, "../Download/" + suggestedFileName); 
//         // Save the file 
//         await downloadall.saveAs(downloadpath); 
//         await page.waitForTimeout(3000); 
//         // Delete the downloaded file 
//         await downloadall.delete(); 
//     });