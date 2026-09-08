import {test} from "@playwright/test"
import fs from "fs" //fs --> file system
import readdata from "../Data Driven Testing/read.json"

//* Reading the data from the json
//* Way 1
test("Reading the data from the json",async()=>{
    let datafile = fs.readFileSync("D:/visual Studio Code WorkSpace/Playwright_B1/Data Driven Testing/read.json"); //!readFileSync - used to read the json data
    let data=JSON.parse(datafile);
    console.log(data.greet);
    console.log(data.name);
    console.log(data.age);
})

//* Way 2
test("import test data file",()=>{
    let greetdata=readdata.greet;
    let namedata=readdata.name;
    console.log(greetdata);
    console.log(namedata);
})
