import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path";
test("Using test data in script",async({page})=>{
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/SSLLoginExcel.xlsx"));
    let sheet=await book.getWorksheet("Sheet1");
    let alldata=[];
    for(let dataset=1; dataset<=sheet.actualRowCount; dataset++)
    {
        let row=sheet.getRow(dataset);
        let url=row.getCell(1).toString();
        let usn=row.getCell(2).toString();
        let pwd=row.getCell(3).toString();
        alldata.push({url:url,username:usn,password:pwd})
    }
    console.log(alldata);
    for(let dummy of alldata)
    {
        await page.goto(dummy.url);
        await page.getByRole("button",{name:"Login"}).click();
        await page.getByRole("textbox",{name:"Email"}).fill(dummy.username);
        await page.getByRole("textbox",{name:"Password"}).fill(dummy.password);
        await page.waitForTimeout(2000);
        await page.getByRole("button",{name:"Login"}).click();
        await page.waitForTimeout(2000);
    }  
})