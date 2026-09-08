import {test} from "@playwright/test"
import fs from "fs" //fs --> file system
import readdata from "../Data Driven Testing/read.json"
import iteratedata from "../Data Driven Testing/iterate.json"
import { log } from "console"

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

//* iterating over json array
//* Way 1
test("iterating over json array",()=>{
    let datafile1=fs.readFileSync("D:/visual Studio Code WorkSpace/Playwright_B1/Data Driven Testing/iterate.json");
    let data1=JSON.parse(datafile1);
    // console.log(data1);  
    data1.forEach(element => {
        console.log(element.greet);
    });
})

//* Way 2.1 - for of
test.only("iterating for each",()=>{
    iteratedata.forEach(element=>
    {
        console.log(element.greet);
    }
    )
})
//* Way 2.1 - for each
test.only("iterating for of loop",()=>{
    for(let greetdata of iteratedata){
        console.log(greetdata.greet);
    }
})
