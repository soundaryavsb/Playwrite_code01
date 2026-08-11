import {test} from "@playwright/test"

test("anno1",()=>{
    console.log("annotation 1");
})
// test.only("anno2",()=>{
//     console.log("annotation 2");
// })
test.fixme("anno3",()=>{
    console.log("annotation 3");
})
test("anno4",()=>{
    console.log("annotation 4");
})
test("anno5",()=>{
    console.log("annotation 5");
})