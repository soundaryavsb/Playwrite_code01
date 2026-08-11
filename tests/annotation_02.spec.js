import {test} from "@playwright/test"

test("anno1",()=>{
    console.log("annotation 1");
})

//only
// test.only("anno2",()=>{
//     console.log("annotation 2");
// })

//fixme
test.fixme("anno3",()=>{
    console.log("annotation 3");
})
test("anno4",()=>{
    console.log("annotation 4");
})
test("anno5",()=>{
    console.log("annotation 5");
})

//describe
test.describe("smoke",()=>{
    test("anno4",async({page})=>{
        console.log("annotation 4");
    })
    test("anno5",async({page})=>{
        console.log("annotation 5");
    })
});