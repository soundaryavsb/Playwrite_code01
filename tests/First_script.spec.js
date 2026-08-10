// import {test} from "@playwright/test"
// import { log } from "node:console"
// test("first code",()=>{
//     console.log("Hello");
// })

import {test} from "@playwright/test"
import { log } from "node:console";
test("first code",async()=>{
    await console.log("Hello");
})

test("browser name",async({browserName})=>{
    console.log(browserName);  
})
