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

//* Excel data from cloumn
test("Using test data in script- cloumn",async ({page}) => {
    let book=await new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/SSLLoginExcel.xlsx"));
    let sheet=await book.getWorksheet("Sheet2");
    let alldata=[];
    for(let data=1;data<=sheet.actualColumnCount;data++)
    {
        let column=sheet.getColumn(data);
        let url=column.getCell(1,data).toString();
        let usn=column.getCell(2,data).toString();
        let pwd=column.getCell(3,data).toString();
        alldata.push({url:url,username:usn,password:pwd})
    }  
            console.log(alldata);
})

//* Writing data in excel
test.only("Writing data into excel",async ({page}) => {
    let book=new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/multipledata.xlsx"))
    let sheet=book.getWorksheet("Sheet2")
    if(!sheet)
    {
        sheet=book.addWorksheet("Sheet2");
    }
    sheet.getRow(1).getCell(1).value ="Raady to move";
    await book.xlsx.writeFile(path.join(__dirname,"../Data Driven Testing/multipledata.xlsx"))
    console.log("data written successfully");
})