import {test} from "@playwright/test"
import excel from "exceljs"
import path from "node:path";

//* Fetching single object
test("Fetching single object",async ({page}) => {
   let book=await new excel.Workbook(); 
   await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/single data.xlsx"))
   let sheet=await book.getWorksheet("Sheet1")
   let data=await sheet.getRow(1).getCell(1);
   console.log(data);
})

//* Fetching single data using value
test("Fetching single data using value",async ({page}) => {
   let book=await new excel.Workbook(); 
   await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/single data.xlsx"))
   let sheet=await book.getWorksheet("Sheet1")
   let data=await sheet.getRow(1).getCell(1).value;
   console.log(data);
})

//* Fetching single data using tostring
test.only("Fetching single data using tostring",async ({page}) => {
   let book=await new excel.Workbook(); 
   await book.xlsx.readFile(path.join(__dirname,"../Data Driven Testing/single data.xlsx"))
   let sheet=await book.getWorksheet("Sheet1")
   let data=await sheet.getRow(1).getCell(1).toString();
   console.log(data);
})