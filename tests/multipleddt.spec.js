import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path"

//*fetching multiple data - keeping Row constant
test("fetching multiple data",async ({page}) => {
    let book=await new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/multipledata.xlsx"))
    let sheet=await book.getWorksheet("Sheet1");
    for(let i=1; i<=5;i++)
    {
        let data=await sheet.getRow(1).getCell(i).toString();
        console.log(data);
    }
})

//*fetching multiple data - keeping Column constant
test.only("fetching multiple data - Column",async ({page}) => {
    let book=await new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/multipledata.xlsx"))
    let sheet=await book.getWorksheet("Sheet2");
    for(let i=1; i<=5;i++)
    {
        let data=await sheet.getRow(i).getCell(1).toString();
        console.log(data);
    }
})
